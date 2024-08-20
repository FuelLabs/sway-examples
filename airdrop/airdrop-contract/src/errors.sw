library;

pub enum AccessError {
    CallerNotOwner: (),
    CallerNotPendingOwner: (),
    Paused: (),
    AirdropDone: (),
    AirdropActive: (),
    AlreadyClaimed: (),
    AlreadyInitialized: (),
}
pub enum VerificationError {
    AccountIdToLarge: (),
    IncorrectAccount: (),
    InvalidProof: (),
    NoSigner: (),
}

pub enum InputError {
    InvalidOwner: (),
}