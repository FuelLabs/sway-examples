library;

pub enum MintError {
    CannotMintMoreThanOneNFTWithSubId: (),
    MaxNFTsMinted: (),
    NFTAlreadyMinted: (),
    SubIdCannotBeNone: (),
}

pub enum SetError {
    ValueAlreadySet: (),
}
