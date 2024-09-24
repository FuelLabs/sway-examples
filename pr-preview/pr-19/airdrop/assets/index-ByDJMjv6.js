import { c4 as SolanaSignAndSendTransaction, c5 as SolanaSignTransaction, c6 as SolanaSignMessage, b$ as EventEmitter, c0 as PublicKey, c1 as bs58, c2 as Transaction, c3 as VersionedTransaction } from "./index-CINLNIaM.js";
import { v as v4 } from "./v4-BL5qiJc1.js";
function isLegacyTransactionInstance(transaction) {
  return transaction.version === void 0;
}
function serializeTransaction(transaction) {
  return isLegacyTransactionInstance(transaction) ? transaction.serialize({
    verifySignatures: false,
    requireAllSignatures: false
  }) : transaction.serialize();
}
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function isSnapSupported(provider) {
  return __awaiter$1(this, void 0, void 0, function* () {
    try {
      yield provider.request({ method: "wallet_getSnaps" });
      return true;
    } catch (error) {
      return false;
    }
  });
}
function detectProvider() {
  return __awaiter$1(this, void 0, void 0, function* () {
    try {
      const provider = window.ethereum;
      if (!provider) {
        return null;
      }
      if (provider.providers && Array.isArray(provider.providers)) {
        const providers = provider.providers;
        for (const provider2 of providers) {
          if (yield isSnapSupported(provider2)) {
            return provider2;
          }
        }
      }
      if (provider.detected && Array.isArray(provider.detected)) {
        const providers = provider.detected;
        for (const provider2 of providers) {
          if (yield isSnapSupported(provider2)) {
            return provider2;
          }
        }
      }
      if (yield isSnapSupported(provider)) {
        return provider;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  });
}
const SOLANA_MAINNET_CHAIN = "solana:mainnet";
const SOLANA_DEVNET_CHAIN = "solana:devnet";
const SOLANA_TESTNET_CHAIN = "solana:testnet";
const SOLANA_LOCALNET_CHAIN = "solana:localnet";
const SOLANA_CHAINS = [
  SOLANA_MAINNET_CHAIN,
  SOLANA_DEVNET_CHAIN,
  SOLANA_TESTNET_CHAIN,
  SOLANA_LOCALNET_CHAIN
];
function isSolanaChain(chain) {
  return SOLANA_CHAINS.includes(chain);
}
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _StandardSolflareMetaMaskWalletAccount_address, _StandardSolflareMetaMaskWalletAccount_publicKey, _StandardSolflareMetaMaskWalletAccount_chains, _StandardSolflareMetaMaskWalletAccount_features, _StandardSolflareMetaMaskWalletAccount_label, _StandardSolflareMetaMaskWalletAccount_icon;
const chains = SOLANA_CHAINS;
const features = [SolanaSignAndSendTransaction, SolanaSignTransaction, SolanaSignMessage];
class StandardSolflareMetaMaskWalletAccount {
  get address() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_address, "f");
  }
  get publicKey() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_publicKey, "f").slice();
  }
  get chains() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_chains, "f").slice();
  }
  get features() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_features, "f").slice();
  }
  get label() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_label, "f");
  }
  get icon() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_icon, "f");
  }
  constructor({ address, publicKey, label, icon }) {
    _StandardSolflareMetaMaskWalletAccount_address.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_publicKey.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_chains.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_features.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_label.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_icon.set(this, void 0);
    if (new.target === StandardSolflareMetaMaskWalletAccount) {
      Object.freeze(this);
    }
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_address, address, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_publicKey, publicKey, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_chains, chains, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_features, features, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_label, label, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_icon, icon, "f");
  }
}
_StandardSolflareMetaMaskWalletAccount_address = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_publicKey = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_chains = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_features = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_label = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_icon = /* @__PURE__ */ new WeakMap();
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class SolflareMetaMask extends EventEmitter {
  constructor(config) {
    super();
    this._network = "mainnet-beta";
    this._iframeParams = {};
    this._element = null;
    this._iframe = null;
    this._publicKey = null;
    this._account = null;
    this._isConnected = false;
    this._connectHandler = null;
    this._messageHandlers = {};
    this._handleEvent = (event) => {
      var _a, _b;
      switch (event.type) {
        case "connect": {
          this._collapseIframe();
          if ((_a = event.data) === null || _a === void 0 ? void 0 : _a.publicKey) {
            this._publicKey = event.data.publicKey;
            this._isConnected = true;
            if (this._connectHandler) {
              this._connectHandler.resolve();
              this._connectHandler = null;
            }
            this._connected();
          } else {
            if (this._connectHandler) {
              this._connectHandler.reject();
              this._connectHandler = null;
            }
            this._disconnected();
          }
          return;
        }
        case "disconnect": {
          if (this._connectHandler) {
            this._connectHandler.reject();
            this._connectHandler = null;
          }
          this._disconnected();
          return;
        }
        case "accountChanged": {
          if ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) {
            this._publicKey = event.data.publicKey;
            this.emit("accountChanged", this.publicKey);
            this._standardConnected();
          } else {
            this.emit("accountChanged", void 0);
            this._standardDisconnected();
          }
          return;
        }
        default: {
          return;
        }
      }
    };
    this._handleResize = (data) => {
      if (data.resizeMode === "full") {
        if (data.params.mode === "fullscreen") {
          this._expandIframe();
        } else if (data.params.mode === "hide") {
          this._collapseIframe();
        }
      } else if (data.resizeMode === "coordinates") {
        this._resizeIframe(data.params);
      }
    };
    this._handleMessage = (event) => {
      var _a;
      if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== "solflareIframeToWalletAdapter") {
        return;
      }
      const data = event.data.data || {};
      if (data.type === "event") {
        this._handleEvent(data.event);
      } else if (data.type === "resize") {
        this._handleResize(data);
      } else if (data.type === "response") {
        if (this._messageHandlers[data.id]) {
          const { resolve, reject } = this._messageHandlers[data.id];
          delete this._messageHandlers[data.id];
          if (data.error) {
            reject(data.error);
          } else {
            resolve(data.result);
          }
        }
      }
    };
    this._removeElement = () => {
      if (this._element) {
        this._element.remove();
        this._element = null;
      }
    };
    this._removeDanglingElements = () => {
      const elements = document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");
      for (const element of elements) {
        if (element.parentElement) {
          element.remove();
        }
      }
    };
    this._injectElement = () => {
      this._removeElement();
      this._removeDanglingElements();
      const params = Object.assign(Object.assign({}, this._iframeParams), { mm: true, v: 1, cluster: this._network || "mainnet-beta", origin: window.location.origin || "", title: document.title || "" });
      const queryString = Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key])}`).join("&");
      const iframeUrl = `${SolflareMetaMask.IFRAME_URL}?${queryString}`;
      this._element = document.createElement("div");
      this._element.className = "solflare-metamask-wallet-adapter-iframe";
      this._element.innerHTML = `
      <iframe src='${iframeUrl}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `;
      document.body.appendChild(this._element);
      this._iframe = this._element.querySelector("iframe");
      window.addEventListener("message", this._handleMessage, false);
    };
    this._collapseIframe = () => {
      if (this._iframe) {
        this._iframe.style.top = "";
        this._iframe.style.right = "";
        this._iframe.style.height = "2px";
        this._iframe.style.width = "2px";
      }
    };
    this._expandIframe = () => {
      if (this._iframe) {
        this._iframe.style.top = "0px";
        this._iframe.style.bottom = "0px";
        this._iframe.style.left = "0px";
        this._iframe.style.right = "0px";
        this._iframe.style.width = "100%";
        this._iframe.style.height = "100%";
      }
    };
    this._resizeIframe = (params) => {
      if (!this._iframe) {
        return;
      }
      this._iframe.style.top = isFinite(params.top) ? `${params.top}px` : "";
      this._iframe.style.bottom = isFinite(params.bottom) ? `${params.bottom}px` : "";
      this._iframe.style.left = isFinite(params.left) ? `${params.left}px` : "";
      this._iframe.style.right = isFinite(params.right) ? `${params.right}px` : "";
      this._iframe.style.width = isFinite(params.width) ? `${params.width}px` : params.width;
      this._iframe.style.height = isFinite(params.height) ? `${params.height}px` : params.height;
    };
    this._sendIframeMessage = (data) => {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      return new Promise((resolve, reject) => {
        var _a, _b;
        const messageId = v4();
        this._messageHandlers[messageId] = { resolve, reject };
        (_b = (_a = this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
          channel: "solflareWalletAdapterToIframe",
          data: Object.assign({ id: messageId }, data)
        }, "*");
      });
    };
    this._connected = () => {
      this._isConnected = true;
      this.emit("connect", this.publicKey);
      this._standardConnected();
    };
    this._disconnected = () => {
      this._publicKey = null;
      this._isConnected = false;
      window.removeEventListener("message", this._handleMessage, false);
      this._removeElement();
      this.emit("disconnect");
      this._standardDisconnected();
    };
    this._standardConnected = () => {
      if (!this.publicKey) {
        return;
      }
      const address = this.publicKey.toString();
      if (!this._account || this._account.address !== address) {
        this._account = new StandardSolflareMetaMaskWalletAccount({
          address,
          publicKey: this.publicKey.toBytes()
        });
        this.emit("standard_change", { accounts: this.standardAccounts });
      }
    };
    this._standardDisconnected = () => {
      if (this._account) {
        this._account = null;
        this.emit("standard_change", { accounts: this.standardAccounts });
      }
    };
    if (config === null || config === void 0 ? void 0 : config.network) {
      this._network = config === null || config === void 0 ? void 0 : config.network;
    }
    if (window.SolflareMetaMaskParams) {
      this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), window.SolflareMetaMaskParams);
    }
    if (config === null || config === void 0 ? void 0 : config.params) {
      this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), config === null || config === void 0 ? void 0 : config.params);
    }
  }
  get publicKey() {
    return this._publicKey ? new PublicKey(this._publicKey) : null;
  }
  get standardAccount() {
    return this._account;
  }
  get standardAccounts() {
    return this._account ? [this._account] : [];
  }
  get isConnected() {
    return this._isConnected;
  }
  get connected() {
    return this.isConnected;
  }
  get autoApprove() {
    return false;
  }
  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.connected) {
        return;
      }
      this._injectElement();
      yield new Promise((resolve, reject) => {
        this._connectHandler = { resolve, reject };
      });
    });
  }
  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this._sendIframeMessage({
        method: "disconnect"
      });
      this._disconnected();
    });
  }
  signTransaction(transaction) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const serializedTransaction = serializeTransaction(transaction);
        const response = yield this._sendIframeMessage({
          method: "signTransactionV2",
          params: {
            transaction: bs58.encode(serializedTransaction)
          }
        });
        const { transaction: signedTransaction } = response;
        return isLegacyTransactionInstance(transaction) ? Transaction.from(bs58.decode(signedTransaction)) : VersionedTransaction.deserialize(bs58.decode(signedTransaction));
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign transaction");
      }
    });
  }
  signAllTransactions(transactions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const serializedTransactions = transactions.map((transaction) => serializeTransaction(transaction));
        const { transactions: signedTransactions } = yield this._sendIframeMessage({
          method: "signAllTransactionsV2",
          params: {
            transactions: serializedTransactions.map((transaction) => bs58.encode(transaction))
          }
        });
        return signedTransactions.map((signedTransaction, index) => {
          return isLegacyTransactionInstance(transactions[index]) ? Transaction.from(bs58.decode(signedTransaction)) : VersionedTransaction.deserialize(bs58.decode(signedTransaction));
        });
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign transactions");
      }
    });
  }
  signAndSendTransaction(transaction, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const serializedTransaction = serializeTransaction(transaction);
        const { signature } = yield this._sendIframeMessage({
          method: "signAndSendTransaction",
          params: {
            transaction: bs58.encode(serializedTransaction),
            options
          }
        });
        return signature;
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign and send transaction");
      }
    });
  }
  signMessage(data, display = "utf8") {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const { signature } = yield this._sendIframeMessage({
          method: "signMessage",
          params: {
            data: bs58.encode(data),
            display
          }
        });
        return Uint8Array.from(bs58.decode(signature));
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign message");
      }
    });
  }
  sign(data, display = "utf8") {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.signMessage(data, display);
    });
  }
  static isSupported() {
    return __awaiter(this, void 0, void 0, function* () {
      const provider = yield detectProvider();
      return !!provider;
    });
  }
  standardSignAndSendTransaction(...inputs) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const outputs = [];
      if (inputs.length === 1) {
        const { transaction, account, chain, options } = inputs[0];
        const { minContextSlot, preflightCommitment, skipPreflight, maxRetries } = options || {};
        if (account !== this._account)
          throw new Error("invalid account");
        if (!isSolanaChain(chain))
          throw new Error("invalid chain");
        const signature = yield this.signAndSendTransaction(VersionedTransaction.deserialize(transaction), {
          preflightCommitment,
          minContextSlot,
          maxRetries,
          skipPreflight
        });
        outputs.push({ signature: bs58.decode(signature) });
      } else if (inputs.length > 1) {
        for (const input of inputs) {
          outputs.push(...yield this.standardSignAndSendTransaction(input));
        }
      }
      return outputs;
    });
  }
  standardSignTransaction(...inputs) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const outputs = [];
      if (inputs.length === 1) {
        const { transaction, account, chain } = inputs[0];
        if (account !== this._account)
          throw new Error("invalid account");
        if (chain && !isSolanaChain(chain))
          throw new Error("invalid chain");
        const signedTransaction = yield this.signTransaction(VersionedTransaction.deserialize(transaction));
        outputs.push({ signedTransaction: signedTransaction.serialize() });
      } else if (inputs.length > 1) {
        let chain;
        for (const input of inputs) {
          if (input.account !== this._account)
            throw new Error("invalid account");
          if (input.chain) {
            if (!isSolanaChain(input.chain))
              throw new Error("invalid chain");
            if (chain) {
              if (input.chain !== chain)
                throw new Error("conflicting chain");
            } else {
              chain = input.chain;
            }
          }
        }
        const transactions = inputs.map(({ transaction }) => VersionedTransaction.deserialize(transaction));
        const signedTransactions = yield this.signAllTransactions(transactions);
        outputs.push(...signedTransactions.map((signedTransaction) => ({
          signedTransaction: signedTransaction.serialize()
        })));
      }
      return outputs;
    });
  }
  standardSignMessage(...inputs) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const outputs = [];
      if (inputs.length === 1) {
        const { message, account } = inputs[0];
        if (account !== this._account)
          throw new Error("invalid account");
        const signature = yield this.signMessage(message);
        outputs.push({ signedMessage: message, signature });
      } else if (inputs.length > 1) {
        for (const input of inputs) {
          outputs.push(...yield this.standardSignMessage(input));
        }
      }
      return outputs;
    });
  }
}
SolflareMetaMask.IFRAME_URL = "https://widget.solflare.com/";
export {
  StandardSolflareMetaMaskWalletAccount,
  SolflareMetaMask as default
};
