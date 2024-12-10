import { c6 as EventEmitter, c7 as PublicKey, c8 as bs58, c9 as Transaction, ca as VersionedTransaction } from "./index-Vx3tjEqc.js";
import { v as v4 } from "./v4-BL5qiJc1.js";
var __extends$4 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var WalletAdapter = (
  /** @class */
  function(_super) {
    __extends$4(WalletAdapter2, _super);
    function WalletAdapter2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return WalletAdapter2;
  }(EventEmitter)
);
var __extends$3 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
var __awaiter$3 = function(thisArg, _arguments, P, generator) {
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
var __generator$3 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var Wallet = (
  /** @class */
  function(_super) {
    __extends$3(Wallet2, _super);
    function Wallet2(provider, network) {
      var _this = _super.call(this) || this;
      _this._handleMessage = function(e) {
        if (_this._injectedProvider && e.source === window || e.origin === _this._providerUrl.origin && e.source === _this._popup) {
          if (e.data.method === "connected") {
            var newPublicKey = new PublicKey(e.data.params.publicKey);
            if (!_this._publicKey || !_this._publicKey.equals(newPublicKey)) {
              if (_this._publicKey && !_this._publicKey.equals(newPublicKey)) {
                _this._handleDisconnect();
              }
              _this._publicKey = newPublicKey;
              _this._autoApprove = !!e.data.params.autoApprove;
              _this.emit("connect", _this._publicKey);
            }
          } else if (e.data.method === "disconnected") {
            _this._handleDisconnect();
          } else if (e.data.result || e.data.error) {
            if (_this._responsePromises.has(e.data.id)) {
              var _a = __read(_this._responsePromises.get(e.data.id), 2), resolve = _a[0], reject = _a[1];
              if (e.data.result) {
                resolve(e.data.result);
              } else {
                reject(new Error(e.data.error));
              }
            }
          }
        }
      };
      _this._handleConnect = function() {
        if (!_this._handlerAdded) {
          _this._handlerAdded = true;
          window.addEventListener("message", _this._handleMessage);
          window.addEventListener("beforeunload", _this.disconnect);
        }
        if (_this._injectedProvider) {
          return new Promise(function(resolve) {
            _this._sendRequest("connect", {});
            resolve();
          });
        } else {
          window.name = "parent";
          _this._popup = window.open(_this._providerUrl.toString(), "_blank", "location,resizable,width=460,height=675");
          return new Promise(function(resolve) {
            _this.once("connect", resolve);
          });
        }
      };
      _this._handleDisconnect = function() {
        if (_this._handlerAdded) {
          _this._handlerAdded = false;
          window.removeEventListener("message", _this._handleMessage);
          window.removeEventListener("beforeunload", _this.disconnect);
        }
        if (_this._publicKey) {
          _this._publicKey = null;
          _this.emit("disconnect");
        }
        _this._responsePromises.forEach(function(_a, id) {
          var _b = __read(_a, 2);
          _b[0];
          var reject = _b[1];
          _this._responsePromises.delete(id);
          reject("Wallet disconnected");
        });
      };
      _this._sendRequest = function(method, params) {
        return __awaiter$3(_this, void 0, void 0, function() {
          var requestId;
          var _this2 = this;
          return __generator$3(this, function(_a) {
            if (method !== "connect" && !this.connected) {
              throw new Error("Wallet not connected");
            }
            requestId = this._nextRequestId;
            ++this._nextRequestId;
            return [2, new Promise(function(resolve, reject) {
              _this2._responsePromises.set(requestId, [resolve, reject]);
              if (_this2._injectedProvider) {
                _this2._injectedProvider.postMessage({
                  jsonrpc: "2.0",
                  id: requestId,
                  method,
                  params: __assign$2({ network: _this2._network }, params)
                });
              } else {
                _this2._popup.postMessage({
                  jsonrpc: "2.0",
                  id: requestId,
                  method,
                  params
                }, _this2._providerUrl.origin);
                if (!_this2.autoApprove) {
                  _this2._popup.focus();
                }
              }
            })];
          });
        });
      };
      _this.connect = function() {
        if (_this._popup) {
          _this._popup.close();
        }
        return _this._handleConnect();
      };
      _this.disconnect = function() {
        return __awaiter$3(_this, void 0, void 0, function() {
          return __generator$3(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!this._injectedProvider) return [3, 2];
                return [4, this._sendRequest("disconnect", {})];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                if (this._popup) {
                  this._popup.close();
                }
                this._handleDisconnect();
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      _this.sign = function(data, display) {
        return __awaiter$3(_this, void 0, void 0, function() {
          var response, signature, publicKey;
          return __generator$3(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!(data instanceof Uint8Array)) {
                  throw new Error("Data must be an instance of Uint8Array");
                }
                return [4, this._sendRequest("sign", {
                  data,
                  display
                })];
              case 1:
                response = _a.sent();
                signature = bs58.decode(response.signature);
                publicKey = new PublicKey(response.publicKey);
                return [2, {
                  signature,
                  publicKey
                }];
            }
          });
        });
      };
      if (isInjectedProvider(provider)) {
        _this._injectedProvider = provider;
      } else if (isString(provider)) {
        _this._providerUrl = new URL(provider);
        _this._providerUrl.hash = new URLSearchParams({
          origin: window.location.origin,
          network
        }).toString();
      } else {
        throw new Error("provider parameter must be an injected provider or a URL string.");
      }
      _this._network = network;
      _this._publicKey = null;
      _this._autoApprove = false;
      _this._popup = null;
      _this._handlerAdded = false;
      _this._nextRequestId = 1;
      _this._responsePromises = /* @__PURE__ */ new Map();
      return _this;
    }
    Object.defineProperty(Wallet2.prototype, "publicKey", {
      get: function() {
        return this._publicKey;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Wallet2.prototype, "connected", {
      get: function() {
        return this._publicKey !== null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Wallet2.prototype, "autoApprove", {
      get: function() {
        return this._autoApprove;
      },
      enumerable: false,
      configurable: true
    });
    return Wallet2;
  }(EventEmitter)
);
function isString(a) {
  return typeof a === "string";
}
function isInjectedProvider(a) {
  return isObject(a) && isFunction(a.postMessage);
}
function isObject(a) {
  return typeof a === "object" && a !== null;
}
function isFunction(a) {
  return typeof a === "function";
}
var __extends$2 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __awaiter$2 = function(thisArg, _arguments, P, generator) {
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
var __generator$2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var WebAdapter = (
  /** @class */
  function(_super) {
    __extends$2(WebAdapter2, _super);
    function WebAdapter2(iframe, network, provider) {
      var _this = _super.call(this) || this;
      _this._instance = null;
      _this.handleMessage = function(data) {
      };
      _this._sendRequest = function(method, params) {
        return __awaiter$2(_this, void 0, void 0, function() {
          var _a, _b;
          return __generator$2(this, function(_c) {
            switch (_c.label) {
              case 0:
                if (!((_a = this._instance) === null || _a === void 0 ? void 0 : _a.sendRequest)) return [3, 2];
                return [4, this._instance.sendRequest(method, params)];
              case 1:
                return [2, _c.sent()];
              case 2:
                if (!((_b = this._instance) === null || _b === void 0 ? void 0 : _b._sendRequest)) return [3, 4];
                return [4, this._instance._sendRequest(method, params)];
              case 3:
                return [2, _c.sent()];
              case 4:
                throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`");
            }
          });
        });
      };
      _this._handleConnect = function() {
        _this.emit("connect");
      };
      _this._handleDisconnect = function() {
        window.clearInterval(_this._pollTimer);
        _this.emit("disconnect");
      };
      _this._network = network;
      _this._provider = provider;
      return _this;
    }
    Object.defineProperty(WebAdapter2.prototype, "publicKey", {
      get: function() {
        return this._instance.publicKey || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(WebAdapter2.prototype, "connected", {
      get: function() {
        return this._instance.connected || false;
      },
      enumerable: false,
      configurable: true
    });
    WebAdapter2.prototype.connect = function() {
      return __awaiter$2(this, void 0, void 0, function() {
        var _this = this;
        return __generator$2(this, function(_a) {
          switch (_a.label) {
            case 0:
              this._instance = new Wallet(this._provider, this._network);
              this._instance.on("connect", this._handleConnect);
              this._instance.on("disconnect", this._handleDisconnect);
              this._pollTimer = window.setInterval(function() {
                var _a2, _b;
                if (((_b = (_a2 = _this._instance) === null || _a2 === void 0 ? void 0 : _a2._popup) === null || _b === void 0 ? void 0 : _b.closed) !== false) {
                  _this._handleDisconnect();
                }
              }, 200);
              return [4, this._instance.connect()];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    WebAdapter2.prototype.disconnect = function() {
      return __awaiter$2(this, void 0, void 0, function() {
        return __generator$2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              this._instance.removeAllListeners("connect");
              this._instance.removeAllListeners("disconnect");
              return [4, this._instance.disconnect()];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    WebAdapter2.prototype.signTransaction = function(transaction) {
      return __awaiter$2(this, void 0, void 0, function() {
        var signedTransaction;
        return __generator$2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._sendRequest("signTransactionV2", {
                transaction: bs58.encode(transaction)
              })];
            case 1:
              signedTransaction = _a.sent().transaction;
              return [2, bs58.decode(signedTransaction)];
          }
        });
      });
    };
    WebAdapter2.prototype.signAllTransactions = function(transactions) {
      return __awaiter$2(this, void 0, void 0, function() {
        var signedTransactions;
        return __generator$2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._sendRequest("signAllTransactionsV2", {
                transactions: transactions.map(function(transaction) {
                  return bs58.encode(transaction);
                })
              })];
            case 1:
              signedTransactions = _a.sent().transactions;
              return [2, signedTransactions.map(function(transaction) {
                return bs58.decode(transaction);
              })];
          }
        });
      });
    };
    WebAdapter2.prototype.signAndSendTransaction = function(transaction, options) {
      return __awaiter$2(this, void 0, void 0, function() {
        var response;
        return __generator$2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._sendRequest("signAndSendTransaction", {
                transaction: bs58.encode(transaction),
                options
              })];
            case 1:
              response = _a.sent();
              return [2, response.signature];
          }
        });
      });
    };
    WebAdapter2.prototype.signMessage = function(data, display) {
      if (display === void 0) {
        display = "hex";
      }
      return __awaiter$2(this, void 0, void 0, function() {
        var signature;
        return __generator$2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._instance.sign(data, display)];
            case 1:
              signature = _a.sent().signature;
              return [2, Uint8Array.from(signature)];
          }
        });
      });
    };
    return WebAdapter2;
  }(WalletAdapter)
);
var __extends$1 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
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
var __generator$1 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var IframeAdapter = (
  /** @class */
  function(_super) {
    __extends$1(IframeAdapter2, _super);
    function IframeAdapter2(iframe, publicKey) {
      var _this = this;
      var _a;
      _this = _super.call(this) || this;
      _this._publicKey = null;
      _this._messageHandlers = {};
      _this.handleMessage = function(data) {
        if (_this._messageHandlers[data.id]) {
          var _a2 = _this._messageHandlers[data.id], resolve = _a2.resolve, reject = _a2.reject;
          delete _this._messageHandlers[data.id];
          if (data.error) {
            reject(data.error);
          } else {
            resolve(data.result);
          }
        }
      };
      _this._sendMessage = function(data) {
        if (!_this.connected) {
          throw new Error("Wallet not connected");
        }
        return new Promise(function(resolve, reject) {
          var _a2, _b;
          var messageId = v4();
          _this._messageHandlers[messageId] = { resolve, reject };
          (_b = (_a2 = _this._iframe) === null || _a2 === void 0 ? void 0 : _a2.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
            channel: "solflareWalletAdapterToIframe",
            data: __assign$1({ id: messageId }, data)
          }, "*");
        });
      };
      _this._iframe = iframe;
      _this._publicKey = new PublicKey((_a = publicKey === null || publicKey === void 0 ? void 0 : publicKey.toString) === null || _a === void 0 ? void 0 : _a.call(publicKey));
      return _this;
    }
    Object.defineProperty(IframeAdapter2.prototype, "publicKey", {
      get: function() {
        return this._publicKey || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(IframeAdapter2.prototype, "connected", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    IframeAdapter2.prototype.connect = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    IframeAdapter2.prototype.disconnect = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._sendMessage({
                method: "disconnect"
              })];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signTransaction = function(transaction) {
      var _a;
      return __awaiter$1(this, void 0, void 0, function() {
        var signedTransaction, e_1;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signTransaction",
                params: {
                  transaction: bs58.encode(transaction)
                }
              })];
            case 2:
              signedTransaction = _b.sent();
              return [2, bs58.decode(signedTransaction)];
            case 3:
              e_1 = _b.sent();
              throw new Error(((_a = e_1 === null || e_1 === void 0 ? void 0 : e_1.toString) === null || _a === void 0 ? void 0 : _a.call(e_1)) || "Failed to sign transaction");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signAllTransactions = function(transactions) {
      var _a;
      return __awaiter$1(this, void 0, void 0, function() {
        var signedTransactions, e_2;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signAllTransactions",
                params: {
                  transactions: transactions.map(function(transaction) {
                    return bs58.encode(transaction);
                  })
                }
              })];
            case 2:
              signedTransactions = _b.sent();
              return [2, signedTransactions.map(function(transaction) {
                return bs58.decode(transaction);
              })];
            case 3:
              e_2 = _b.sent();
              throw new Error(((_a = e_2 === null || e_2 === void 0 ? void 0 : e_2.toString) === null || _a === void 0 ? void 0 : _a.call(e_2)) || "Failed to sign transactions");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signAndSendTransaction = function(transaction, options) {
      var _a;
      return __awaiter$1(this, void 0, void 0, function() {
        var result, e_3;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signAndSendTransaction",
                params: {
                  transaction: bs58.encode(transaction),
                  options
                }
              })];
            case 2:
              result = _b.sent();
              return [2, result];
            case 3:
              e_3 = _b.sent();
              throw new Error(((_a = e_3 === null || e_3 === void 0 ? void 0 : e_3.toString) === null || _a === void 0 ? void 0 : _a.call(e_3)) || "Failed to sign and send transaction");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signMessage = function(data, display) {
      var _a;
      if (display === void 0) {
        display = "hex";
      }
      return __awaiter$1(this, void 0, void 0, function() {
        var result, e_4;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signMessage",
                params: {
                  data,
                  display
                }
              })];
            case 2:
              result = _b.sent();
              return [2, Uint8Array.from(bs58.decode(result))];
            case 3:
              e_4 = _b.sent();
              throw new Error(((_a = e_4 === null || e_4 === void 0 ? void 0 : e_4.toString) === null || _a === void 0 ? void 0 : _a.call(e_4)) || "Failed to sign message");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    return IframeAdapter2;
  }(WalletAdapter)
);
function isLegacyTransactionInstance(transaction) {
  return transaction.version === void 0;
}
var VERSION = "1.4.2";
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
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
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Solflare = (
  /** @class */
  function(_super) {
    __extends(Solflare2, _super);
    function Solflare2(config) {
      var _this = _super.call(this) || this;
      _this._network = "mainnet-beta";
      _this._provider = null;
      _this._iframeParams = {};
      _this._adapterInstance = null;
      _this._element = null;
      _this._iframe = null;
      _this._connectHandler = null;
      _this._flutterHandlerInterval = null;
      _this._handleEvent = function(event) {
        var _a, _b, _c, _d;
        switch (event.type) {
          case "connect_native_web": {
            _this._collapseIframe();
            _this._adapterInstance = new WebAdapter(_this._iframe, _this._network, ((_a = event.data) === null || _a === void 0 ? void 0 : _a.provider) || _this._provider || "https://solflare.com/provider");
            _this._adapterInstance.on("connect", _this._webConnected);
            _this._adapterInstance.on("disconnect", _this._webDisconnected);
            _this._adapterInstance.connect();
            _this._setPreferredAdapter("native_web");
            return;
          }
          case "connect": {
            _this._collapseIframe();
            _this._adapterInstance = new IframeAdapter(_this._iframe, ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) || "");
            _this._adapterInstance.connect();
            _this._setPreferredAdapter((_c = event.data) === null || _c === void 0 ? void 0 : _c.adapter);
            if (_this._connectHandler) {
              _this._connectHandler.resolve();
              _this._connectHandler = null;
            }
            _this.emit("connect", _this.publicKey);
            return;
          }
          case "disconnect": {
            if (_this._connectHandler) {
              _this._connectHandler.reject();
              _this._connectHandler = null;
            }
            _this._disconnected();
            _this.emit("disconnect");
            return;
          }
          case "accountChanged": {
            if ((_d = event.data) === null || _d === void 0 ? void 0 : _d.publicKey) {
              _this._adapterInstance = new IframeAdapter(_this._iframe, event.data.publicKey);
              _this._adapterInstance.connect();
              _this.emit("accountChanged", _this.publicKey);
            } else {
              _this.emit("accountChanged", void 0);
            }
            return;
          }
          case "collapse": {
            _this._collapseIframe();
            return;
          }
          default: {
            return;
          }
        }
      };
      _this._handleResize = function(data) {
        if (data.resizeMode === "full") {
          if (data.params.mode === "fullscreen") {
            _this._expandIframe();
          } else if (data.params.mode === "hide") {
            _this._collapseIframe();
          }
        } else if (data.resizeMode === "coordinates") {
          if (_this._iframe) {
            _this._iframe.style.top = isFinite(data.params.top) ? "".concat(data.params.top, "px") : "";
            _this._iframe.style.bottom = isFinite(data.params.bottom) ? "".concat(data.params.bottom, "px") : "";
            _this._iframe.style.left = isFinite(data.params.left) ? "".concat(data.params.left, "px") : "";
            _this._iframe.style.right = isFinite(data.params.right) ? "".concat(data.params.right, "px") : "";
            _this._iframe.style.width = isFinite(data.params.width) ? "".concat(data.params.width, "px") : data.params.width;
            _this._iframe.style.height = isFinite(data.params.height) ? "".concat(data.params.height, "px") : data.params.height;
          }
        }
      };
      _this._handleMessage = function(event) {
        var _a;
        if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== "solflareIframeToWalletAdapter") {
          return;
        }
        var data = event.data.data || {};
        if (data.type === "event") {
          _this._handleEvent(data.event);
        } else if (data.type === "resize") {
          _this._handleResize(data);
        } else if (data.type === "response") {
          if (_this._adapterInstance) {
            _this._adapterInstance.handleMessage(data);
          }
        }
      };
      _this._removeElement = function() {
        if (_this._flutterHandlerInterval !== null) {
          clearInterval(_this._flutterHandlerInterval);
          _this._flutterHandlerInterval = null;
        }
        if (_this._element) {
          _this._element.remove();
          _this._element = null;
        }
      };
      _this._removeDanglingElements = function() {
        var e_1, _a;
        var elements = document.getElementsByClassName("solflare-wallet-adapter-iframe");
        try {
          for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
            var element = elements_1_1.value;
            if (element.parentElement) {
              element.remove();
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };
      _this._injectElement = function() {
        _this._removeElement();
        _this._removeDanglingElements();
        var params = __assign(__assign({}, _this._iframeParams), { cluster: _this._network || "mainnet-beta", origin: window.location.origin || "", title: document.title || "", version: 1, sdkVersion: VERSION });
        var preferredAdapter = _this._getPreferredAdapter();
        if (preferredAdapter) {
          params.adapter = preferredAdapter;
        }
        if (_this._provider) {
          params.provider = _this._provider;
        }
        var queryString = Object.keys(params).map(function(key) {
          return "".concat(key, "=").concat(encodeURIComponent(params[key]));
        }).join("&");
        var iframeUrl = "".concat(Solflare2.IFRAME_URL, "?").concat(queryString);
        _this._element = document.createElement("div");
        _this._element.className = "solflare-wallet-adapter-iframe";
        _this._element.innerHTML = "\n      <iframe src='".concat(iframeUrl, "' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    ");
        document.body.appendChild(_this._element);
        _this._iframe = _this._element.querySelector("iframe");
        window.fromFlutter = _this._handleMobileMessage;
        _this._flutterHandlerInterval = setInterval(function() {
          window.fromFlutter = _this._handleMobileMessage;
        }, 100);
        window.addEventListener("message", _this._handleMessage, false);
      };
      _this._collapseIframe = function() {
        if (_this._iframe) {
          _this._iframe.style.top = "";
          _this._iframe.style.right = "";
          _this._iframe.style.height = "2px";
          _this._iframe.style.width = "2px";
        }
      };
      _this._expandIframe = function() {
        if (_this._iframe) {
          _this._iframe.style.top = "0px";
          _this._iframe.style.bottom = "0px";
          _this._iframe.style.left = "0px";
          _this._iframe.style.right = "0px";
          _this._iframe.style.width = "100%";
          _this._iframe.style.height = "100%";
        }
      };
      _this._getPreferredAdapter = function() {
        if (localStorage) {
          return localStorage.getItem("solflarePreferredWalletAdapter") || null;
        }
        return null;
      };
      _this._setPreferredAdapter = function(adapter) {
        if (localStorage && adapter) {
          localStorage.setItem("solflarePreferredWalletAdapter", adapter);
        }
      };
      _this._clearPreferredAdapter = function() {
        if (localStorage) {
          localStorage.removeItem("solflarePreferredWalletAdapter");
        }
      };
      _this._webConnected = function() {
        if (_this._connectHandler) {
          _this._connectHandler.resolve();
          _this._connectHandler = null;
        }
        _this.emit("connect", _this.publicKey);
      };
      _this._webDisconnected = function() {
        if (_this._connectHandler) {
          _this._connectHandler.reject();
          _this._connectHandler = null;
        }
        _this._disconnected();
        _this.emit("disconnect");
      };
      _this._disconnected = function() {
        window.removeEventListener("message", _this._handleMessage, false);
        _this._removeElement();
        _this._clearPreferredAdapter();
        _this._adapterInstance = null;
      };
      _this._handleMobileMessage = function(data) {
        var _a, _b;
        (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
          channel: "solflareMobileToIframe",
          data
        }, "*");
      };
      if (config === null || config === void 0 ? void 0 : config.network) {
        _this._network = config === null || config === void 0 ? void 0 : config.network;
      }
      if (config === null || config === void 0 ? void 0 : config.provider) {
        _this._provider = config === null || config === void 0 ? void 0 : config.provider;
      }
      if (config === null || config === void 0 ? void 0 : config.params) {
        _this._iframeParams = __assign({}, config === null || config === void 0 ? void 0 : config.params);
      }
      return _this;
    }
    Object.defineProperty(Solflare2.prototype, "publicKey", {
      get: function() {
        var _a;
        return ((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Solflare2.prototype, "isConnected", {
      get: function() {
        var _a;
        return !!((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.connected);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Solflare2.prototype, "connected", {
      get: function() {
        return this.isConnected;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Solflare2.prototype, "autoApprove", {
      get: function() {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Solflare2.prototype.connect = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.connected) {
                return [
                  2
                  /*return*/
                ];
              }
              this._injectElement();
              return [4, new Promise(function(resolve, reject) {
                _this._connectHandler = { resolve, reject };
              })];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Solflare2.prototype.disconnect = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this._adapterInstance) {
                return [
                  2
                  /*return*/
                ];
              }
              return [4, this._adapterInstance.disconnect()];
            case 1:
              _a.sent();
              this._disconnected();
              this.emit("disconnect");
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Solflare2.prototype.signTransaction = function(transaction) {
      return __awaiter(this, void 0, void 0, function() {
        var serializedTransaction, signedTransaction;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              serializedTransaction = isLegacyTransactionInstance(transaction) ? Uint8Array.from(transaction.serialize({ verifySignatures: false, requireAllSignatures: false })) : transaction.serialize();
              return [4, this._adapterInstance.signTransaction(serializedTransaction)];
            case 1:
              signedTransaction = _a.sent();
              return [2, isLegacyTransactionInstance(transaction) ? Transaction.from(signedTransaction) : VersionedTransaction.deserialize(signedTransaction)];
          }
        });
      });
    };
    Solflare2.prototype.signAllTransactions = function(transactions) {
      return __awaiter(this, void 0, void 0, function() {
        var serializedTransactions, signedTransactions;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              serializedTransactions = transactions.map(function(transaction) {
                return isLegacyTransactionInstance(transaction) ? Uint8Array.from(transaction.serialize({ verifySignatures: false, requireAllSignatures: false })) : transaction.serialize();
              });
              return [4, this._adapterInstance.signAllTransactions(serializedTransactions)];
            case 1:
              signedTransactions = _a.sent();
              if (signedTransactions.length !== transactions.length) {
                throw new Error("Failed to sign all transactions");
              }
              return [2, signedTransactions.map(function(signedTransaction, index) {
                return isLegacyTransactionInstance(transactions[index]) ? Transaction.from(signedTransaction) : VersionedTransaction.deserialize(signedTransaction);
              })];
          }
        });
      });
    };
    Solflare2.prototype.signAndSendTransaction = function(transaction, options) {
      return __awaiter(this, void 0, void 0, function() {
        var serializedTransaction;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              serializedTransaction = isLegacyTransactionInstance(transaction) ? transaction.serialize({ verifySignatures: false, requireAllSignatures: false }) : transaction.serialize();
              return [4, this._adapterInstance.signAndSendTransaction(serializedTransaction, options)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Solflare2.prototype.signMessage = function(data, display) {
      if (display === void 0) {
        display = "utf8";
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._adapterInstance.signMessage(data, display)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Solflare2.prototype.sign = function(data, display) {
      if (display === void 0) {
        display = "utf8";
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.signMessage(data, display)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Solflare2.prototype.detectWallet = function(timeout) {
      var _a;
      if (timeout === void 0) {
        timeout = 10;
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_b) {
          if (window.SolflareApp || ((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare)) {
            return [2, true];
          }
          return [2, new Promise(function(resolve) {
            var pollInterval, pollTimeout;
            pollInterval = setInterval(function() {
              var _a2;
              if (window.SolflareApp || ((_a2 = window.solflare) === null || _a2 === void 0 ? void 0 : _a2.isSolflare)) {
                clearInterval(pollInterval);
                clearTimeout(pollTimeout);
                resolve(true);
              }
            }, 500);
            pollTimeout = setTimeout(function() {
              clearInterval(pollInterval);
              resolve(false);
            }, timeout * 1e3);
          })];
        });
      });
    };
    Solflare2.IFRAME_URL = "https://connect.solflare.com/";
    return Solflare2;
  }(EventEmitter)
);
export {
  Solflare as default
};
