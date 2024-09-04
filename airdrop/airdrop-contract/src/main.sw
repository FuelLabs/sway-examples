contract;

mod interface;
mod events;
mod errors;
mod constants;

use ::interface::AirdropDistributorAbi;
use ::events::{
    ClaimEvent,
    ClawbackEvent,
    OwnershipTransferEvent,
    OwnershipTransferInitiatedEvent,
    PauseChangeEvent,
};
use ::constants::MAX_U32;
use ::errors::{AccessError, InputError, VerificationError};
use std::{
    address::Address,
    asset::transfer,
    block::timestamp,
    constants::ZERO_B256,
    context::this_balance,
    hash::{
        Hash,
        Hasher,
        keccak256,
        sha256,
    },
    identity::Identity,
};
use sway_libs::merkle::binary_proof::{leaf_digest, verify_proof};

configurable {
    MERKLE_ROOT: b256 = ZERO_B256,
    ASSET: AssetId = AssetId::from(ZERO_B256),
    END_TIME: u64 = 0,
    NUM_LEAVES: u64 = 0,
    INITIAL_OWNER: Option<Identity> = Option::None,
}

storage {
    owner: Option<Identity> = Option::None,
    pending_owner: Option<Identity> = Option::None,
    claims: StorageMap<u64, bool> = StorageMap {},
    is_paused: bool = false,
    is_initialized: bool = false,
}

impl AirdropDistributorAbi for Contract {

    #[storage(read, write)]
    fn claim(
        amount: u64,
        account: b256,
        tree_index: u64,
        proof: Vec<b256>,
        recipient: Identity,
    ) -> u64 {
        // Contract should not be paused, not past the end date and the tree_index should be unclaimed
        can_claim(tree_index);

        let sender_b256: b256 = match (msg_sender().unwrap()) {
            Identity::Address(address) => {
                address.into()
            },
            Identity::ContractId(contract_id) => {
                contract_id.into()
            }
        };

        require(account == sender_b256, VerificationError::IncorrectAccount);

        // Verify the merkle proof
        let leaf_params = (account, amount);
        let leaf_hash = sha256(leaf_params);

        let merkle_proof_result = verify_proof(
            tree_index,
            leaf_digest(leaf_hash),
            MERKLE_ROOT,
            NUM_LEAVES,
            proof,
        );

        require(merkle_proof_result, VerificationError::InvalidProof);

        // mark the index as claimed
        storage.claims.insert(tree_index, true);

        // transfer the asset to the recipient
        transfer(recipient, ASSET, amount);

        log(ClaimEvent {
            amount,
            claimer: account,
            to: recipient,
        });

        amount
    }

    #[storage(read)]
    fn is_claimed(tree_index: u64) -> bool {
        _is_claimed(tree_index)
    }
    fn end_time() -> u64 {
        END_TIME
    }
    fn merkle_root() -> b256 {
        MERKLE_ROOT
    }

    #[storage(read)]
    fn owner() -> Option<Identity> {
        _owner()
    }

    #[storage(read, write)]
    fn initiate_transfer_ownership(new_owner: Identity) {
        // Only the owner can initiate the transfer of ownership
        only_owner();

        // Require the new_owner is not address 0
        require(
            new_owner != Identity::Address(Address::from(ZERO_B256)),
            InputError::InvalidOwner,
        );

        storage.pending_owner.write(Some(new_owner));
        log(OwnershipTransferInitiatedEvent {
            from: _owner(),
            to: new_owner,
        })
    }

    #[storage(read, write)]
    fn confirm_transfer_ownership() {
        // only the pending owner can confirm the transfer
        only_pending_owner();
        let old_owner = _owner().unwrap();
        let new_owner = storage.pending_owner.read().unwrap();
        storage.owner.write(Some(new_owner));

        storage.pending_owner.write(None);
        log(OwnershipTransferEvent {
            from: old_owner,
            to: new_owner,
        })
    }

    #[storage(read)]
    fn is_paused() -> bool {
        _is_paused()
    }

    #[storage(read, write)]
    fn set_paused(paused: bool) {
        only_owner();
        storage.is_paused.write(paused);
        log(PauseChangeEvent {
            is_paused: paused,
        })
    }

    #[storage(read)]
    fn clawback(recipient: Identity, asset_id: AssetId) -> u64 {
        // Only the owner can clawback funds
        only_owner();

        let balance = this_balance(asset_id);

        // transfer the remaining funds to the recipient
        transfer(recipient, asset_id, balance);

        log(ClawbackEvent {
            asset_id: asset_id,
            amount: balance,
            to: recipient,
        });

        balance
    }

    #[storage(read, write)]
    fn initialize() {
        // initialize can only be called once
        only_uninitialized();
        storage.owner.write(INITIAL_OWNER);
        storage.is_initialized.write(true);
    }
}

#[storage(read)]
fn _owner() -> Option<Identity> {
    storage.owner.read()
}

#[storage(read)]
fn can_claim(tree_index: u64) {
    require(!_is_paused(), AccessError::Paused);
    require(_is_airdrop_active(), AccessError::AirdropDone);
    require(!_is_claimed(tree_index), AccessError::AlreadyClaimed);
}
#[storage(read)]
fn only_owner() {
    require(
        _owner()
            .unwrap() == msg_sender()
            .unwrap(),
        AccessError::CallerNotOwner,
    );
}

#[storage(read)]
fn only_pending_owner() {
    require(
        storage
            .pending_owner
            .read()
            .unwrap() == msg_sender()
            .unwrap(),
        AccessError::CallerNotPendingOwner,
    );
}

#[storage(read)]
fn _is_initialized() -> bool {
    storage.is_initialized.try_read().unwrap_or(false)
}

#[storage(read)]
fn only_uninitialized() {
    require(!_is_initialized(), AccessError::AlreadyInitialized);
}

#[storage(read)]
fn _is_paused() -> bool {
    storage.is_paused.try_read().unwrap_or(false)
}

#[storage(read)]
fn _is_claimed(tree_index: u64) -> bool {
    let claim_state = storage.claims.get(tree_index).try_read().unwrap_or(false);
    claim_state
}

fn _is_airdrop_active() -> bool {
    let current_time = timestamp();
    current_time < END_TIME
}
