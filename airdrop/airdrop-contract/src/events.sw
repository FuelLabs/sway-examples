library;

pub struct ClaimEvent {
    /// The quantity of an asset which is to be transferred to the user.
    pub amount: u64,
    /// The user that has a claim to coins with a valid proof, fuel address, evm address or github ID.
    pub claimer: b256,
    /// The identity that will receive the transferred asset.
    pub to: Identity,
}

pub struct ClawbackEvent {
    /// The asset id of the asset being clawed back.
    pub asset_id: AssetId,
    /// The quantity of an asset which will be returned
    pub amount: u64,
    /// The user that will receive the remaining asset balance.
    pub to: Identity,
}

pub struct OwnershipTransferInitiatedEvent {
    /// The identity of the old owner; could be None
    pub from: Option<Identity>,
    /// The address of the new owner
    pub to: Identity,
}

pub struct OwnershipTransferEvent {
    /// The identity of the old owner
    pub from: Identity,
    /// The address of the new owner
    pub to: Identity,
}

pub struct SignerChangeEvent {
    /// The address of the old signer; could be None
    pub from: Option<Address>,
    /// The address of the new signer; could be None
    pub to: Option<Address>,
}

pub struct PauseChangeEvent {
    /// whether or not the contract is paused
    pub is_paused: bool,
}
