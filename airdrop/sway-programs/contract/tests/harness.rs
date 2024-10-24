use fuels::{prelude::*,  prelude::{
    abigen, launch_custom_provider_and_get_wallets, AssetConfig, Contract,
    LoadConfiguration, TxPolicies, WalletUnlocked, WalletsConfig,
},
types::ContractId};

// Load ABI from JSON
abigen!(Contract(
    name = "AirdropDistributorAbi",
    abi = "./out/debug/test-contract-abi.json"
));

async fn get_contract_instance() -> (AirdropDistributorAbi<WalletUnlocked>, ContractId) {
    // Launch a local network and deploy the contract
    let mut wallets = launch_custom_provider_and_get_wallets(
        WalletsConfig::new(
            Some(1),             /* Single wallet */
            Some(1),             /* Single coin (UTXO) */
            Some(1_000_000_000), /* Amount per coin */
        ),
        None,
        None,
    )
    .await
    .unwrap();

    let wallet = wallets.pop().unwrap();

    let storage_configuration = StorageConfiguration::new(
        true, // autoload_enabled
        vec![], // slots
    );

    let id = Contract::load_from(
        "./out/debug/test-contract.bin",
        LoadConfiguration::default().with_storage_configuration(storage_configuration),
    )
    .unwrap()
    .deploy(&wallet, TxPolicies::default())
    .await
    .unwrap();

    let instance = AirdropDistributorAbi::new(id.clone(), wallet);

    (instance, id.into())
}

#[tokio::test]
async fn read_storage_variables() {
    let (contract_instance, _id) = get_contract_instance().await;

    // Read owner
    let owner_result = contract_instance.methods().owner().call().await.unwrap();
    println!("Owner: {:?}", owner_result.value);


    // Read is_paused
    let is_paused_result = contract_instance.methods().is_paused().call().await.unwrap();
    println!("Is Paused: {:?}", is_paused_result.value);

    // Read is_initialized
    // let is_initialized_result = contract_instance.methods()._is_initialized().call().await.unwrap();
    // println!("Is Initialized: {:?}", is_initialized_result.value);

    // Read claims for a specific tree index (example: 0)
    let tree_index = 0;
    let is_claimed_result = contract_instance.methods().is_claimed(tree_index).call().await.unwrap();
    println!("Is Claimed for tree index {}: {:?}", tree_index, is_claimed_result.value);

    // Assertions (example values, adjust as needed)
    assert_eq!(owner_result.value, None);
    assert_eq!(is_paused_result.value, false);
    // assert_eq!(is_initialized_result.value, false);
    assert_eq!(is_claimed_result.value, false);
}
