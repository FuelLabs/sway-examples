use crate::utils::{
    interface::{constructor, set_symbol, symbol},
    setup::{defaults, setup},
};

mod success {

    use super::*;

    #[tokio::test]
    async fn sets_one_asset() {
        let (owner_wallet, other_wallet, id, instance_1, _instance_2) = setup().await;
        let (
            asset_id_1,
            _asset_id_2,
            _asset_id_3,
            _sub_id_1,
            _sub_id_2,
            _sub_id_3,
            owner_identity,
            _other_identity,
        ) = defaults(id, owner_wallet, other_wallet.clone());

        constructor(&instance_1, owner_identity).await;

        assert_eq!(symbol(&instance_1, asset_id_1).await, None);

        set_symbol(&instance_1, asset_id_1, String::from("FA1")).await;
        assert_eq!(
            symbol(&instance_1, asset_id_1).await,
            Some(String::from("FA1"))
        );
    }

    #[tokio::test]
    async fn sets_multiple_assets() {
        let (owner_wallet, other_wallet, id, instance_1, _instance_2) = setup().await;
        let (
            asset_id_1,
            asset_id_2,
            asset_id_3,
            _sub_id_1,
            _sub_id_2,
            _sub_id_3,
            owner_identity,
            _other_identity,
        ) = defaults(id, owner_wallet, other_wallet.clone());

        constructor(&instance_1, owner_identity).await;

        assert_eq!(symbol(&instance_1, asset_id_1).await, None);
        set_symbol(&instance_1, asset_id_1, String::from("FA1")).await;
        assert_eq!(
            symbol(&instance_1, asset_id_1).await,
            Some(String::from("FA1"))
        );

        assert_eq!(symbol(&instance_1, asset_id_2).await, None);
        set_symbol(&instance_1, asset_id_2, String::from("FA2")).await;
        assert_eq!(
            symbol(&instance_1, asset_id_2).await,
            Some(String::from("FA2"))
        );

        assert_eq!(symbol(&instance_1, asset_id_3).await, None);
        set_symbol(&instance_1, asset_id_3, String::from("FA3")).await;
        assert_eq!(
            symbol(&instance_1, asset_id_3).await,
            Some(String::from("FA3"))
        );
    }

    #[tokio::test]
    async fn does_not_overwrite_other_symbols() {
        let (owner_wallet, other_wallet, id, instance_1, _instance_2) = setup().await;
        let (
            asset_id_1,
            asset_id_2,
            asset_id_3,
            _sub_id_1,
            _sub_id_2,
            _sub_id_3,
            owner_identity,
            _other_identity,
        ) = defaults(id, owner_wallet, other_wallet.clone());

        constructor(&instance_1, owner_identity).await;

        assert_eq!(symbol(&instance_1, asset_id_1).await, None);
        set_symbol(&instance_1, asset_id_1, String::from("FA1")).await;
        assert_eq!(
            symbol(&instance_1, asset_id_1).await,
            Some(String::from("FA1"))
        );

        assert_eq!(symbol(&instance_1, asset_id_2).await, None);
        set_symbol(&instance_1, asset_id_2, String::from("FA2")).await;

        assert_eq!(
            symbol(&instance_1, asset_id_1).await,
            Some(String::from("FA1"))
        );
        assert_eq!(
            symbol(&instance_1, asset_id_2).await,
            Some(String::from("FA2"))
        );

        assert_eq!(symbol(&instance_1, asset_id_3).await, None);
        set_symbol(&instance_1, asset_id_3, String::from("FA3")).await;

        assert_eq!(
            symbol(&instance_1, asset_id_1).await,
            Some(String::from("FA1"))
        );
        assert_eq!(
            symbol(&instance_1, asset_id_2).await,
            Some(String::from("FA2"))
        );
        assert_eq!(
            symbol(&instance_1, asset_id_3).await,
            Some(String::from("FA3"))
        );
    }
}

mod revert {

    use super::*;

    #[tokio::test]
    #[should_panic(expected = "ValueAlreadySet")]
    async fn when_a_name_has_already_been_set() {
        let (owner_wallet, other_wallet, id, instance_1, _instance_2) = setup().await;
        let (
            asset_id_1,
            _asset_id_2,
            _asset_id_3,
            _sub_id_1,
            _sub_id_2,
            _sub_id_3,
            owner_identity,
            _other_identity,
        ) = defaults(id, owner_wallet, other_wallet.clone());

        constructor(&instance_1, owner_identity).await;

        set_symbol(&instance_1, asset_id_1, String::from("FA1")).await;
        set_symbol(&instance_1, asset_id_1, String::from("FA1")).await;
    }
}
