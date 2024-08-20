library;

use std::b512::B512;

pub enum SignatureType {
    Standard: B512,
    None: (),
}
