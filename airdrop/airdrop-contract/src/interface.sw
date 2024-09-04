library;

abi AirdropDistributorAbi {
    // This function will claim an airdrop allocation
    // @param amount: An amount of tokens to claim
    // @param account: The account who has been alloted airdrop assets
    // @param tree_index: The index of the leaf in the merkle tree
    // @param proof: The merkle proof
    // @param recipient: The recipient identity of the tokens
    // 
    // @return The amount of tokens claimed
    #[storage(read, write)]
    fn claim(
        amount: u64,
        account: b256,
        tree_index: u64,
        proof: Vec<b256>,
        recipient: Identity,
    ) -> u64;

    // This function checks if a tree index has been claimed
    // @param tree_index: The index of the leaf in the merkle tree
    // 
    // @return True if the tree index has been claimed, otherwise False
    #[storage(read)]
    fn is_claimed(tree_index: u64) -> bool;

    // This function returns the end time of the airdrop
    // 
    // @return The end time of the airdrop in Tai64 format
    fn end_time() -> u64;

    // Gets the merkle root of the airdrop
    // 
    // @return The merkle root
    fn merkle_root() -> b256;

    // Get the owner of the contract
    // Owner has special permissions to pause the contract, transfer ownership and clawback assets
    // 
    // @return The owner of the contract
    #[storage(read)]
    fn owner() -> Option<Identity>;

    // Starts the transfer of ownership of the contract
    // Only the owner can initiate the transfer of ownership
    // For the transfer to be completed, the new owner must confirm the ownership
    //
    // @param new_owner: The new owner identity
    #[storage(read, write)]
    fn initiate_transfer_ownership(new_owner: Identity);

    // Confirms the transfer of ownership of the contract
    // Only the new owner can confirm the transfer of ownership
    // Current owner must have initiated the transfer of ownership
    //
    #[storage(read, write)]
    fn confirm_transfer_ownership();

    // intializes the contract
    // Sets the storage slots for owner to the value of configurable constants
    // This function can only be called once
    #[storage(read, write)]
    fn initialize();

    // get the paused state of the contract
    // only the owner can pause the contract
    //
    // @return True if the contract is paused, otherwise False
    #[storage(read)]
    fn is_paused() -> bool;

    // sets the paused state of the contract
    // only the owner can pause the contract
    //
    // @param paused: new paused state
    #[storage(read, write)]
    fn set_paused(paused: bool);

    // clawback all unclaimed assets from the contract to the recipient
    // only the owner can clawback assets
    // 
    // @param recipient: The recipient identity of the clawback to
    // 
    // @return the amount clawed back
    #[storage(read)]
    fn clawback(recipient: Identity, asset_id: AssetId) -> u64;
}
