const checkEligibility = (recipients, wallet, fallback) => {
  let temp = void 0;
  recipients == null ? void 0 : recipients.find((recipient, index) => {
    temp = recipient.address.toLowerCase() === (wallet == null ? void 0 : wallet.address.toHexString());
    if (temp) {
      fallback == null ? void 0 : fallback(recipient, index);
    }
    return temp;
  });
  return temp ? true : false;
};
export {
  checkEligibility as c
};
