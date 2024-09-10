import { p as proxy, k as subscribeKey, l as subscribe, m as ref, O as OptionsController, n as i, o as customElement, q as h, S as StorageUtil, t as ke, u as r, M as ModalController, E as EventsController, N as NetworkController, A as AccountController, W as W3mFrameRpcConstants, v as SnackController, C as ConnectionController, R as RouterController } from "./index-DWAvffzO.js";
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r2 = function() {
      return t.apply(this, arguments);
    };
    r2.prototype = t.prototype;
  } else r2 = {};
  return Object.defineProperty(r2, "__esModule", { value: true }), Object.keys(e).forEach(function(i2) {
    var n = Object.getOwnPropertyDescriptor(e, i2);
    Object.defineProperty(r2, i2, n.get ? n : { enumerable: true, get: function() {
      return e[i2];
    } });
  }), r2;
}
var Pn = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(e) {
  (function() {
    var t = "input is invalid type", r2 = "finalize already called", i2 = typeof window == "object", n = i2 ? window : {};
    n.JS_SHA3_NO_WINDOW && (i2 = false);
    var o = !i2 && typeof self == "object", h2 = !n.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h2 ? n = On : o && (n = self);
    var p = !n.JS_SHA3_NO_COMMON_JS && true && e.exports, b = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m = "0123456789abcdef".split(""), w = [31, 7936, 2031616, 520093696], y = [4, 1024, 262144, 67108864], S = [1, 256, 65536, 16777216], I = [6, 1536, 393216, 100663296], N = [0, 8, 16, 24], C = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], F = [224, 256, 384, 512], U = [128, 256], J = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt = { 128: 168, 256: 136 };
    (n.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u) {
      return Object.prototype.toString.call(u) === "[object Array]";
    }), b && (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u) {
      return typeof u == "object" && u.buffer && u.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(u, E, _) {
      return function(B) {
        return new s(u, E, u).update(B)[_]();
      };
    }, H = function(u, E, _) {
      return function(B, R) {
        return new s(u, E, R).update(B)[_]();
      };
    }, z = function(u, E, _) {
      return function(B, R, T, P) {
        return f["cshake" + u].update(B, R, T, P)[_]();
      };
    }, Pt = function(u, E, _) {
      return function(B, R, T, P) {
        return f["kmac" + u].update(B, R, T, P)[_]();
      };
    }, W = function(u, E, _, B) {
      for (var R = 0; R < J.length; ++R) {
        var T = J[R];
        u[T] = E(_, B, T);
      }
      return u;
    }, Rt = function(u, E) {
      var _ = G(u, E, "hex");
      return _.create = function() {
        return new s(u, E, u);
      }, _.update = function(B) {
        return _.create().update(B);
      }, W(_, G, u, E);
    }, Yt = function(u, E) {
      var _ = H(u, E, "hex");
      return _.create = function(B) {
        return new s(u, E, B);
      }, _.update = function(B, R) {
        return _.create(R).update(B);
      }, W(_, H, u, E);
    }, Y = function(u, E) {
      var _ = Bt[u], B = z(u, E, "hex");
      return B.create = function(R, T, P) {
        return !T && !P ? f["shake" + u].create(R) : new s(u, E, R).bytepad([T, P], _);
      }, B.update = function(R, T, P, O) {
        return B.create(T, P, O).update(R);
      }, W(B, z, u, E);
    }, Vt = function(u, E) {
      var _ = Bt[u], B = Pt(u, E, "hex");
      return B.create = function(R, T, P) {
        return new v(u, E, T).bytepad(["KMAC", P], _).bytepad([R], _);
      }, B.update = function(R, T, P, O) {
        return B.create(R, P, O).update(T);
      }, W(B, Pt, u, E);
    }, A = [{ name: "keccak", padding: S, bits: F, createMethod: Rt }, { name: "sha3", padding: I, bits: F, createMethod: Rt }, { name: "shake", padding: w, bits: U, createMethod: Yt }, { name: "cshake", padding: y, bits: U, createMethod: Y }, { name: "kmac", padding: y, bits: U, createMethod: Vt }], f = {}, a = [], c = 0; c < A.length; ++c) for (var d = A[c], g = d.bits, x = 0; x < g.length; ++x) {
      var M = d.name + "_" + g[x];
      if (a.push(M), f[M] = d.createMethod(g[x], d.padding), d.name !== "sha3") {
        var l = d.name + g[x];
        a.push(l), f[l] = f[M];
      }
    }
    function s(u, E, _) {
      this.blocks = [], this.s = [], this.padding = E, this.outputBits = _, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _ >> 5, this.extraBytes = (_ & 31) >> 3;
      for (var B = 0; B < 50; ++B) this.s[B] = 0;
    }
    s.prototype.update = function(u) {
      if (this.finalized) throw new Error(r2);
      var E, _ = typeof u;
      if (_ !== "string") {
        if (_ === "object") {
          if (u === null) throw new Error(t);
          if (b && u.constructor === ArrayBuffer) u = new Uint8Array(u);
          else if (!Array.isArray(u) && (!b || !ArrayBuffer.isView(u))) throw new Error(t);
        } else throw new Error(t);
        E = true;
      }
      for (var B = this.blocks, R = this.byteCount, T = u.length, P = this.blockCount, O = 0, Ct = this.s, D, q; O < T; ) {
        if (this.reset) for (this.reset = false, B[0] = this.block, D = 1; D < P + 1; ++D) B[D] = 0;
        if (E) for (D = this.start; O < T && D < R; ++O) B[D >> 2] |= u[O] << N[D++ & 3];
        else for (D = this.start; O < T && D < R; ++O) q = u.charCodeAt(O), q < 128 ? B[D >> 2] |= q << N[D++ & 3] : q < 2048 ? (B[D >> 2] |= (192 | q >> 6) << N[D++ & 3], B[D >> 2] |= (128 | q & 63) << N[D++ & 3]) : q < 55296 || q >= 57344 ? (B[D >> 2] |= (224 | q >> 12) << N[D++ & 3], B[D >> 2] |= (128 | q >> 6 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q & 63) << N[D++ & 3]) : (q = 65536 + ((q & 1023) << 10 | u.charCodeAt(++O) & 1023), B[D >> 2] |= (240 | q >> 18) << N[D++ & 3], B[D >> 2] |= (128 | q >> 12 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q >> 6 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q & 63) << N[D++ & 3]);
        if (this.lastByteIndex = D, D >= R) {
          for (this.start = D - R, this.block = B[P], D = 0; D < P; ++D) Ct[D] ^= B[D];
          k(Ct), this.reset = true;
        } else this.start = D;
      }
      return this;
    }, s.prototype.encode = function(u, E) {
      var _ = u & 255, B = 1, R = [_];
      for (u = u >> 8, _ = u & 255; _ > 0; ) R.unshift(_), u = u >> 8, _ = u & 255, ++B;
      return E ? R.push(B) : R.unshift(B), this.update(R), R.length;
    }, s.prototype.encodeString = function(u) {
      var E, _ = typeof u;
      if (_ !== "string") {
        if (_ === "object") {
          if (u === null) throw new Error(t);
          if (b && u.constructor === ArrayBuffer) u = new Uint8Array(u);
          else if (!Array.isArray(u) && (!b || !ArrayBuffer.isView(u))) throw new Error(t);
        } else throw new Error(t);
        E = true;
      }
      var B = 0, R = u.length;
      if (E) B = R;
      else for (var T = 0; T < u.length; ++T) {
        var P = u.charCodeAt(T);
        P < 128 ? B += 1 : P < 2048 ? B += 2 : P < 55296 || P >= 57344 ? B += 3 : (P = 65536 + ((P & 1023) << 10 | u.charCodeAt(++T) & 1023), B += 4);
      }
      return B += this.encode(B * 8), this.update(u), B;
    }, s.prototype.bytepad = function(u, E) {
      for (var _ = this.encode(E), B = 0; B < u.length; ++B) _ += this.encodeString(u[B]);
      var R = E - _ % E, T = [];
      return T.length = R, this.update(T), this;
    }, s.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u = this.blocks, E = this.lastByteIndex, _ = this.blockCount, B = this.s;
        if (u[E >> 2] |= this.padding[E & 3], this.lastByteIndex === this.byteCount) for (u[0] = u[_], E = 1; E < _ + 1; ++E) u[E] = 0;
        for (u[_ - 1] |= 2147483648, E = 0; E < _; ++E) B[E] ^= u[E];
        k(B);
      }
    }, s.prototype.toString = s.prototype.hex = function() {
      this.finalize();
      for (var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, T = 0, P = "", O; T < _; ) {
        for (R = 0; R < u && T < _; ++R, ++T) O = E[R], P += m[O >> 4 & 15] + m[O & 15] + m[O >> 12 & 15] + m[O >> 8 & 15] + m[O >> 20 & 15] + m[O >> 16 & 15] + m[O >> 28 & 15] + m[O >> 24 & 15];
        T % u === 0 && (k(E), R = 0);
      }
      return B && (O = E[R], P += m[O >> 4 & 15] + m[O & 15], B > 1 && (P += m[O >> 12 & 15] + m[O >> 8 & 15]), B > 2 && (P += m[O >> 20 & 15] + m[O >> 16 & 15])), P;
    }, s.prototype.arrayBuffer = function() {
      this.finalize();
      var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, T = 0, P = this.outputBits >> 3, O;
      B ? O = new ArrayBuffer(_ + 1 << 2) : O = new ArrayBuffer(P);
      for (var Ct = new Uint32Array(O); T < _; ) {
        for (R = 0; R < u && T < _; ++R, ++T) Ct[T] = E[R];
        T % u === 0 && k(E);
      }
      return B && (Ct[R] = E[R], O = O.slice(0, P)), O;
    }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
      this.finalize();
      for (var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, T = 0, P = [], O, Ct; T < _; ) {
        for (R = 0; R < u && T < _; ++R, ++T) O = T << 2, Ct = E[R], P[O] = Ct & 255, P[O + 1] = Ct >> 8 & 255, P[O + 2] = Ct >> 16 & 255, P[O + 3] = Ct >> 24 & 255;
        T % u === 0 && k(E);
      }
      return B && (O = T << 2, Ct = E[R], P[O] = Ct & 255, B > 1 && (P[O + 1] = Ct >> 8 & 255), B > 2 && (P[O + 2] = Ct >> 16 & 255)), P;
    };
    function v(u, E, _) {
      s.call(this, u, E, _);
    }
    v.prototype = new s(), v.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s.prototype.finalize.call(this);
    };
    var k = function(u) {
      var E, _, B, R, T, P, O, Ct, D, q, De, X, Z, Fe, $, tt, Te, et, rt, Ue, it, nt, ke2, ft, ot, qe, st, at, Ke, ut, ht, He, ct, lt, ze, dt, pt, Le, vt, mt, je, gt, At, Qe, bt, yt, Je, wt, xt, Ge, Mt, Et, Ye, St, Nt, Ve, It, _t, Me, Ee, Se, Ne, Ie;
      for (B = 0; B < 48; B += 2) R = u[0] ^ u[10] ^ u[20] ^ u[30] ^ u[40], T = u[1] ^ u[11] ^ u[21] ^ u[31] ^ u[41], P = u[2] ^ u[12] ^ u[22] ^ u[32] ^ u[42], O = u[3] ^ u[13] ^ u[23] ^ u[33] ^ u[43], Ct = u[4] ^ u[14] ^ u[24] ^ u[34] ^ u[44], D = u[5] ^ u[15] ^ u[25] ^ u[35] ^ u[45], q = u[6] ^ u[16] ^ u[26] ^ u[36] ^ u[46], De = u[7] ^ u[17] ^ u[27] ^ u[37] ^ u[47], X = u[8] ^ u[18] ^ u[28] ^ u[38] ^ u[48], Z = u[9] ^ u[19] ^ u[29] ^ u[39] ^ u[49], E = X ^ (P << 1 | O >>> 31), _ = Z ^ (O << 1 | P >>> 31), u[0] ^= E, u[1] ^= _, u[10] ^= E, u[11] ^= _, u[20] ^= E, u[21] ^= _, u[30] ^= E, u[31] ^= _, u[40] ^= E, u[41] ^= _, E = R ^ (Ct << 1 | D >>> 31), _ = T ^ (D << 1 | Ct >>> 31), u[2] ^= E, u[3] ^= _, u[12] ^= E, u[13] ^= _, u[22] ^= E, u[23] ^= _, u[32] ^= E, u[33] ^= _, u[42] ^= E, u[43] ^= _, E = P ^ (q << 1 | De >>> 31), _ = O ^ (De << 1 | q >>> 31), u[4] ^= E, u[5] ^= _, u[14] ^= E, u[15] ^= _, u[24] ^= E, u[25] ^= _, u[34] ^= E, u[35] ^= _, u[44] ^= E, u[45] ^= _, E = Ct ^ (X << 1 | Z >>> 31), _ = D ^ (Z << 1 | X >>> 31), u[6] ^= E, u[7] ^= _, u[16] ^= E, u[17] ^= _, u[26] ^= E, u[27] ^= _, u[36] ^= E, u[37] ^= _, u[46] ^= E, u[47] ^= _, E = q ^ (R << 1 | T >>> 31), _ = De ^ (T << 1 | R >>> 31), u[8] ^= E, u[9] ^= _, u[18] ^= E, u[19] ^= _, u[28] ^= E, u[29] ^= _, u[38] ^= E, u[39] ^= _, u[48] ^= E, u[49] ^= _, Fe = u[0], $ = u[1], yt = u[11] << 4 | u[10] >>> 28, Je = u[10] << 4 | u[11] >>> 28, at = u[20] << 3 | u[21] >>> 29, Ke = u[21] << 3 | u[20] >>> 29, Ee = u[31] << 9 | u[30] >>> 23, Se = u[30] << 9 | u[31] >>> 23, gt = u[40] << 18 | u[41] >>> 14, At = u[41] << 18 | u[40] >>> 14, lt = u[2] << 1 | u[3] >>> 31, ze = u[3] << 1 | u[2] >>> 31, tt = u[13] << 12 | u[12] >>> 20, Te = u[12] << 12 | u[13] >>> 20, wt = u[22] << 10 | u[23] >>> 22, xt = u[23] << 10 | u[22] >>> 22, ut = u[33] << 13 | u[32] >>> 19, ht = u[32] << 13 | u[33] >>> 19, Ne = u[42] << 2 | u[43] >>> 30, Ie = u[43] << 2 | u[42] >>> 30, St = u[5] << 30 | u[4] >>> 2, Nt = u[4] << 30 | u[5] >>> 2, dt = u[14] << 6 | u[15] >>> 26, pt = u[15] << 6 | u[14] >>> 26, et = u[25] << 11 | u[24] >>> 21, rt = u[24] << 11 | u[25] >>> 21, Ge = u[34] << 15 | u[35] >>> 17, Mt = u[35] << 15 | u[34] >>> 17, He = u[45] << 29 | u[44] >>> 3, ct = u[44] << 29 | u[45] >>> 3, ft = u[6] << 28 | u[7] >>> 4, ot = u[7] << 28 | u[6] >>> 4, Ve = u[17] << 23 | u[16] >>> 9, It = u[16] << 23 | u[17] >>> 9, Le = u[26] << 25 | u[27] >>> 7, vt = u[27] << 25 | u[26] >>> 7, Ue = u[36] << 21 | u[37] >>> 11, it = u[37] << 21 | u[36] >>> 11, Et = u[47] << 24 | u[46] >>> 8, Ye = u[46] << 24 | u[47] >>> 8, Qe = u[8] << 27 | u[9] >>> 5, bt = u[9] << 27 | u[8] >>> 5, qe = u[18] << 20 | u[19] >>> 12, st = u[19] << 20 | u[18] >>> 12, _t = u[29] << 7 | u[28] >>> 25, Me = u[28] << 7 | u[29] >>> 25, mt = u[38] << 8 | u[39] >>> 24, je = u[39] << 8 | u[38] >>> 24, nt = u[48] << 14 | u[49] >>> 18, ke2 = u[49] << 14 | u[48] >>> 18, u[0] = Fe ^ ~tt & et, u[1] = $ ^ ~Te & rt, u[10] = ft ^ ~qe & at, u[11] = ot ^ ~st & Ke, u[20] = lt ^ ~dt & Le, u[21] = ze ^ ~pt & vt, u[30] = Qe ^ ~yt & wt, u[31] = bt ^ ~Je & xt, u[40] = St ^ ~Ve & _t, u[41] = Nt ^ ~It & Me, u[2] = tt ^ ~et & Ue, u[3] = Te ^ ~rt & it, u[12] = qe ^ ~at & ut, u[13] = st ^ ~Ke & ht, u[22] = dt ^ ~Le & mt, u[23] = pt ^ ~vt & je, u[32] = yt ^ ~wt & Ge, u[33] = Je ^ ~xt & Mt, u[42] = Ve ^ ~_t & Ee, u[43] = It ^ ~Me & Se, u[4] = et ^ ~Ue & nt, u[5] = rt ^ ~it & ke2, u[14] = at ^ ~ut & He, u[15] = Ke ^ ~ht & ct, u[24] = Le ^ ~mt & gt, u[25] = vt ^ ~je & At, u[34] = wt ^ ~Ge & Et, u[35] = xt ^ ~Mt & Ye, u[44] = _t ^ ~Ee & Ne, u[45] = Me ^ ~Se & Ie, u[6] = Ue ^ ~nt & Fe, u[7] = it ^ ~ke2 & $, u[16] = ut ^ ~He & ft, u[17] = ht ^ ~ct & ot, u[26] = mt ^ ~gt & lt, u[27] = je ^ ~At & ze, u[36] = Ge ^ ~Et & Qe, u[37] = Mt ^ ~Ye & bt, u[46] = Ee ^ ~Ne & St, u[47] = Se ^ ~Ie & Nt, u[8] = nt ^ ~Fe & tt, u[9] = ke2 ^ ~$ & Te, u[18] = He ^ ~ft & qe, u[19] = ct ^ ~ot & st, u[28] = gt ^ ~lt & dt, u[29] = At ^ ~ze & pt, u[38] = Et ^ ~Qe & yt, u[39] = Ye ^ ~bt & Je, u[48] = Ne ^ ~St & Ve, u[49] = Ie ^ ~Nt & It, u[0] ^= C[B], u[1] ^= C[B + 1];
    };
    if (p) e.exports = f;
    else for (c = 0; c < a.length; ++c) n[a[c]] = f[a[c]];
  })();
})(Pn);
const y0 = "logger/5.7.0";
let Dn = false, Fn = false;
const Cr = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Tn = Cr.default, gi = null;
function w0() {
  try {
    const e = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test") throw new Error("bad normalize");
      } catch {
        e.push(t);
      }
    }), e.length) throw new Error("missing " + e.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
  } catch (e) {
    return e.message;
  }
  return null;
}
const Un = w0();
var Ai;
(function(e) {
  e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ai || (Ai = {}));
var re;
(function(e) {
  e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
const kn = "0123456789abcdef";
class L {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r2) {
    const i2 = t.toLowerCase();
    Cr[i2] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn > Cr[i2]) && console.log.apply(console, r2);
  }
  debug(...t) {
    this._log(L.levels.DEBUG, t);
  }
  info(...t) {
    this._log(L.levels.INFO, t);
  }
  warn(...t) {
    this._log(L.levels.WARNING, t);
  }
  makeError(t, r2, i2) {
    if (Fn) return this.makeError("censored error", r2, {});
    r2 || (r2 = L.errors.UNKNOWN_ERROR), i2 || (i2 = {});
    const n = [];
    Object.keys(i2).forEach((b) => {
      const m = i2[b];
      try {
        if (m instanceof Uint8Array) {
          let w = "";
          for (let y = 0; y < m.length; y++) w += kn[m[y] >> 4], w += kn[m[y] & 15];
          n.push(b + "=Uint8Array(0x" + w + ")");
        } else n.push(b + "=" + JSON.stringify(m));
      } catch {
        n.push(b + "=" + JSON.stringify(i2[b].toString()));
      }
    }), n.push(`code=${r2}`), n.push(`version=${this.version}`);
    const o = t;
    let h2 = "";
    switch (r2) {
      case re.NUMERIC_FAULT: {
        h2 = "NUMERIC_FAULT";
        const b = t;
        switch (b) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h2 += "-" + b;
            break;
          case "negative-power":
          case "negative-width":
            h2 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h2 += "-unbound-result";
            break;
        }
        break;
      }
      case re.CALL_EXCEPTION:
      case re.INSUFFICIENT_FUNDS:
      case re.MISSING_NEW:
      case re.NONCE_EXPIRED:
      case re.REPLACEMENT_UNDERPRICED:
      case re.TRANSACTION_REPLACED:
      case re.UNPREDICTABLE_GAS_LIMIT:
        h2 = r2;
        break;
    }
    h2 && (t += " [ See: https://links.ethers.org/v5-errors-" + h2 + " ]"), n.length && (t += " (" + n.join(", ") + ")");
    const p = new Error(t);
    return p.reason = o, p.code = r2, Object.keys(i2).forEach(function(b) {
      p[b] = i2[b];
    }), p;
  }
  throwError(t, r2, i2) {
    throw this.makeError(t, r2, i2);
  }
  throwArgumentError(t, r2, i2) {
    return this.throwError(t, L.errors.INVALID_ARGUMENT, { argument: r2, value: i2 });
  }
  assert(t, r2, i2, n) {
    t || this.throwError(r2, i2, n);
  }
  assertArgument(t, r2, i2, n) {
    t || this.throwArgumentError(r2, i2, n);
  }
  checkNormalize(t) {
    Un && this.throwError("platform missing String.prototype.normalize", L.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Un });
  }
  checkSafeUint53(t, r2) {
    typeof t == "number" && (r2 == null && (r2 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r2, L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r2, L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r2, i2) {
    i2 ? i2 = ": " + i2 : i2 = "", t < r2 && this.throwError("missing argument" + i2, L.errors.MISSING_ARGUMENT, { count: t, expectedCount: r2 }), t > r2 && this.throwError("too many arguments" + i2, L.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r2 });
  }
  checkNew(t, r2) {
    (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, { name: r2.name });
  }
  checkAbstract(t, r2) {
    t === r2 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r2.name) + " directly; use a sub-class", L.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, { name: r2.name });
  }
  static globalLogger() {
    return gi || (gi = new L(y0)), gi;
  }
  static setCensorship(t, r2) {
    if (!t && r2 && this.globalLogger().throwError("cannot permanently disable censorship", L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Dn) {
      if (!t) return;
      this.globalLogger().throwError("error censorship permanent", L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Fn = !!t, Dn = !!r2;
  }
  static setLogLevel(t) {
    const r2 = Cr[t.toLowerCase()];
    if (r2 == null) {
      L.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Tn = r2;
  }
  static from(t) {
    return new L(t);
  }
}
L.errors = re, L.levels = Ai;
const x0 = "bytes/5.7.0", Dt = new L(x0);
function qn(e) {
  return !!e.toHexString;
}
function rr(e) {
  return e.slice || (e.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return rr(new Uint8Array(Array.prototype.slice.apply(e, t)));
  }), e;
}
function Kn(e) {
  return typeof e == "number" && e == e && e % 1 === 0;
}
function ir(e) {
  if (e == null) return false;
  if (e.constructor === Uint8Array) return true;
  if (typeof e == "string" || !Kn(e.length) || e.length < 0) return false;
  for (let t = 0; t < e.length; t++) {
    const r2 = e[t];
    if (!Kn(r2) || r2 < 0 || r2 >= 256) return false;
  }
  return true;
}
function Ot(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt.checkSafeUint53(e, "invalid arrayify value");
    const r2 = [];
    for (; e; ) r2.unshift(e & 255), e = parseInt(String(e / 256));
    return r2.length === 0 && r2.push(0), rr(new Uint8Array(r2));
  }
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e) && (e = e.toHexString()), Qt(e)) {
    let r2 = e.substring(2);
    r2.length % 2 && (t.hexPad === "left" ? r2 = "0" + r2 : t.hexPad === "right" ? r2 += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e));
    const i2 = [];
    for (let n = 0; n < r2.length; n += 2) i2.push(parseInt(r2.substring(n, n + 2), 16));
    return rr(new Uint8Array(i2));
  }
  return ir(e) ? rr(new Uint8Array(e)) : Dt.throwArgumentError("invalid arrayify value", "value", e);
}
function Qt(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t);
}
const bi = "0123456789abcdef";
function Kt(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt.checkSafeUint53(e, "invalid hexlify value");
    let r2 = "";
    for (; e; ) r2 = bi[e & 15] + r2, e = Math.floor(e / 16);
    return r2.length ? (r2.length % 2 && (r2 = "0" + r2), "0x" + r2) : "0x00";
  }
  if (typeof e == "bigint") return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e)) return e.toHexString();
  if (Qt(e)) return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
  if (ir(e)) {
    let r2 = "0x";
    for (let i2 = 0; i2 < e.length; i2++) {
      let n = e[i2];
      r2 += bi[(n & 240) >> 4] + bi[n & 15];
    }
    return r2;
  }
  return Dt.throwArgumentError("invalid hexlify value", "value", e);
}
function oe(e, t) {
  for (typeof e != "string" ? e = Kt(e) : Qt(e) || Dt.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Dt.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2; ) e = "0x0" + e.substring(2);
  return e;
}
var Ln = { exports: {} }, I0 = {}, _0 = Object.freeze({ __proto__: null, default: I0 }), B0 = A0(_0);
(function(e) {
  (function(t, r2) {
    function i2(A, f) {
      if (!A) throw new Error(f || "Assertion failed");
    }
    function n(A, f) {
      A.super_ = f;
      var a = function() {
      };
      a.prototype = f.prototype, A.prototype = new a(), A.prototype.constructor = A;
    }
    function o(A, f, a) {
      if (o.isBN(A)) return A;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, A !== null && ((f === "le" || f === "be") && (a = f, f = 10), this._init(A || 0, f || 10, a || "be"));
    }
    typeof t == "object" ? t.exports = o : r2.BN = o, o.BN = o, o.wordSize = 26;
    var h2;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h2 = window.Buffer : h2 = B0.Buffer;
    } catch {
    }
    o.isBN = function(f) {
      return f instanceof o ? true : f !== null && typeof f == "object" && f.constructor.wordSize === o.wordSize && Array.isArray(f.words);
    }, o.max = function(f, a) {
      return f.cmp(a) > 0 ? f : a;
    }, o.min = function(f, a) {
      return f.cmp(a) < 0 ? f : a;
    }, o.prototype._init = function(f, a, c) {
      if (typeof f == "number") return this._initNumber(f, a, c);
      if (typeof f == "object") return this._initArray(f, a, c);
      a === "hex" && (a = 16), i2(a === (a | 0) && a >= 2 && a <= 36), f = f.toString().replace(/\s+/g, "");
      var d = 0;
      f[0] === "-" && (d++, this.negative = 1), d < f.length && (a === 16 ? this._parseHex(f, d, c) : (this._parseBase(f, a, d), c === "le" && this._initArray(this.toArray(), a, c)));
    }, o.prototype._initNumber = function(f, a, c) {
      f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [f & 67108863], this.length = 1) : f < 4503599627370496 ? (this.words = [f & 67108863, f / 67108864 & 67108863], this.length = 2) : (i2(f < 9007199254740992), this.words = [f & 67108863, f / 67108864 & 67108863, 1], this.length = 3), c === "le" && this._initArray(this.toArray(), a, c);
    }, o.prototype._initArray = function(f, a, c) {
      if (i2(typeof f.length == "number"), f.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++) this.words[d] = 0;
      var g, x, M = 0;
      if (c === "be") for (d = f.length - 1, g = 0; d >= 0; d -= 3) x = f[d] | f[d - 1] << 8 | f[d - 2] << 16, this.words[g] |= x << M & 67108863, this.words[g + 1] = x >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, g++);
      else if (c === "le") for (d = 0, g = 0; d < f.length; d += 3) x = f[d] | f[d + 1] << 8 | f[d + 2] << 16, this.words[g] |= x << M & 67108863, this.words[g + 1] = x >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, g++);
      return this._strip();
    };
    function p(A, f) {
      var a = A.charCodeAt(f);
      if (a >= 48 && a <= 57) return a - 48;
      if (a >= 65 && a <= 70) return a - 55;
      if (a >= 97 && a <= 102) return a - 87;
      i2(false, "Invalid character in " + A);
    }
    function b(A, f, a) {
      var c = p(A, a);
      return a - 1 >= f && (c |= p(A, a - 1) << 4), c;
    }
    o.prototype._parseHex = function(f, a, c) {
      this.length = Math.ceil((f.length - a) / 6), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++) this.words[d] = 0;
      var g = 0, x = 0, M;
      if (c === "be") for (d = f.length - 1; d >= a; d -= 2) M = b(f, a, d) << g, this.words[x] |= M & 67108863, g >= 18 ? (g -= 18, x += 1, this.words[x] |= M >>> 26) : g += 8;
      else {
        var l = f.length - a;
        for (d = l % 2 === 0 ? a + 1 : a; d < f.length; d += 2) M = b(f, a, d) << g, this.words[x] |= M & 67108863, g >= 18 ? (g -= 18, x += 1, this.words[x] |= M >>> 26) : g += 8;
      }
      this._strip();
    };
    function m(A, f, a, c) {
      for (var d = 0, g = 0, x = Math.min(A.length, a), M = f; M < x; M++) {
        var l = A.charCodeAt(M) - 48;
        d *= c, l >= 49 ? g = l - 49 + 10 : l >= 17 ? g = l - 17 + 10 : g = l, i2(l >= 0 && g < c, "Invalid character"), d += g;
      }
      return d;
    }
    o.prototype._parseBase = function(f, a, c) {
      this.words = [0], this.length = 1;
      for (var d = 0, g = 1; g <= 67108863; g *= a) d++;
      d--, g = g / a | 0;
      for (var x = f.length - c, M = x % d, l = Math.min(x, x - M) + c, s = 0, v = c; v < l; v += d) s = m(f, v, v + d, a), this.imuln(g), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      if (M !== 0) {
        var k = 1;
        for (s = m(f, v, f.length, a), v = 0; v < M; v++) k *= a;
        this.imuln(k), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      }
      this._strip();
    }, o.prototype.copy = function(f) {
      f.words = new Array(this.length);
      for (var a = 0; a < this.length; a++) f.words[a] = this.words[a];
      f.length = this.length, f.negative = this.negative, f.red = this.red;
    };
    function w(A, f) {
      A.words = f.words, A.length = f.length, A.negative = f.negative, A.red = f.red;
    }
    if (o.prototype._move = function(f) {
      w(f, this);
    }, o.prototype.clone = function() {
      var f = new o(null);
      return this.copy(f), f;
    }, o.prototype._expand = function(f) {
      for (; this.length < f; ) this.words[this.length++] = 0;
      return this;
    }, o.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
      return this._normSign();
    }, o.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
      o.prototype[Symbol.for("nodejs.util.inspect.custom")] = y;
    } catch {
      o.prototype.inspect = y;
    }
    else o.prototype.inspect = y;
    function y() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], N = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o.prototype.toString = function(f, a) {
      f = f || 10, a = a | 0 || 1;
      var c;
      if (f === 16 || f === "hex") {
        c = "";
        for (var d = 0, g = 0, x = 0; x < this.length; x++) {
          var M = this.words[x], l = ((M << d | g) & 16777215).toString(16);
          g = M >>> 24 - d & 16777215, d += 2, d >= 26 && (d -= 26, x--), g !== 0 || x !== this.length - 1 ? c = S[6 - l.length] + l + c : c = l + c;
        }
        for (g !== 0 && (c = g.toString(16) + c); c.length % a !== 0; ) c = "0" + c;
        return this.negative !== 0 && (c = "-" + c), c;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var s = I[f], v = N[f];
        c = "";
        var k = this.clone();
        for (k.negative = 0; !k.isZero(); ) {
          var u = k.modrn(v).toString(f);
          k = k.idivn(v), k.isZero() ? c = u + c : c = S[s - u.length] + u + c;
        }
        for (this.isZero() && (c = "0" + c); c.length % a !== 0; ) c = "0" + c;
        return this.negative !== 0 && (c = "-" + c), c;
      }
      i2(false, "Base should be between 2 and 36");
    }, o.prototype.toNumber = function() {
      var f = this.words[0];
      return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i2(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
    }, o.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h2 && (o.prototype.toBuffer = function(f, a) {
      return this.toArrayLike(h2, f, a);
    }), o.prototype.toArray = function(f, a) {
      return this.toArrayLike(Array, f, a);
    };
    var C = function(f, a) {
      return f.allocUnsafe ? f.allocUnsafe(a) : new f(a);
    };
    o.prototype.toArrayLike = function(f, a, c) {
      this._strip();
      var d = this.byteLength(), g = c || Math.max(1, d);
      i2(d <= g, "byte array longer than desired length"), i2(g > 0, "Requested array length <= 0");
      var x = C(f, g), M = a === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M](x, d), x;
    }, o.prototype._toArrayLikeLE = function(f, a) {
      for (var c = 0, d = 0, g = 0, x = 0; g < this.length; g++) {
        var M = this.words[g] << x | d;
        f[c++] = M & 255, c < f.length && (f[c++] = M >> 8 & 255), c < f.length && (f[c++] = M >> 16 & 255), x === 6 ? (c < f.length && (f[c++] = M >> 24 & 255), d = 0, x = 0) : (d = M >>> 24, x += 2);
      }
      if (c < f.length) for (f[c++] = d; c < f.length; ) f[c++] = 0;
    }, o.prototype._toArrayLikeBE = function(f, a) {
      for (var c = f.length - 1, d = 0, g = 0, x = 0; g < this.length; g++) {
        var M = this.words[g] << x | d;
        f[c--] = M & 255, c >= 0 && (f[c--] = M >> 8 & 255), c >= 0 && (f[c--] = M >> 16 & 255), x === 6 ? (c >= 0 && (f[c--] = M >> 24 & 255), d = 0, x = 0) : (d = M >>> 24, x += 2);
      }
      if (c >= 0) for (f[c--] = d; c >= 0; ) f[c--] = 0;
    }, Math.clz32 ? o.prototype._countBits = function(f) {
      return 32 - Math.clz32(f);
    } : o.prototype._countBits = function(f) {
      var a = f, c = 0;
      return a >= 4096 && (c += 13, a >>>= 13), a >= 64 && (c += 7, a >>>= 7), a >= 8 && (c += 4, a >>>= 4), a >= 2 && (c += 2, a >>>= 2), c + a;
    }, o.prototype._zeroBits = function(f) {
      if (f === 0) return 26;
      var a = f, c = 0;
      return a & 8191 || (c += 13, a >>>= 13), a & 127 || (c += 7, a >>>= 7), a & 15 || (c += 4, a >>>= 4), a & 3 || (c += 2, a >>>= 2), a & 1 || c++, c;
    }, o.prototype.bitLength = function() {
      var f = this.words[this.length - 1], a = this._countBits(f);
      return (this.length - 1) * 26 + a;
    };
    function F(A) {
      for (var f = new Array(A.bitLength()), a = 0; a < f.length; a++) {
        var c = a / 26 | 0, d = a % 26;
        f[a] = A.words[c] >>> d & 1;
      }
      return f;
    }
    o.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var f = 0, a = 0; a < this.length; a++) {
        var c = this._zeroBits(this.words[a]);
        if (f += c, c !== 26) break;
      }
      return f;
    }, o.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o.prototype.toTwos = function(f) {
      return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
    }, o.prototype.fromTwos = function(f) {
      return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
    }, o.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o.prototype.neg = function() {
      return this.clone().ineg();
    }, o.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o.prototype.iuor = function(f) {
      for (; this.length < f.length; ) this.words[this.length++] = 0;
      for (var a = 0; a < f.length; a++) this.words[a] = this.words[a] | f.words[a];
      return this._strip();
    }, o.prototype.ior = function(f) {
      return i2((this.negative | f.negative) === 0), this.iuor(f);
    }, o.prototype.or = function(f) {
      return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
    }, o.prototype.uor = function(f) {
      return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
    }, o.prototype.iuand = function(f) {
      var a;
      this.length > f.length ? a = f : a = this;
      for (var c = 0; c < a.length; c++) this.words[c] = this.words[c] & f.words[c];
      return this.length = a.length, this._strip();
    }, o.prototype.iand = function(f) {
      return i2((this.negative | f.negative) === 0), this.iuand(f);
    }, o.prototype.and = function(f) {
      return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
    }, o.prototype.uand = function(f) {
      return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
    }, o.prototype.iuxor = function(f) {
      var a, c;
      this.length > f.length ? (a = this, c = f) : (a = f, c = this);
      for (var d = 0; d < c.length; d++) this.words[d] = a.words[d] ^ c.words[d];
      if (this !== a) for (; d < a.length; d++) this.words[d] = a.words[d];
      return this.length = a.length, this._strip();
    }, o.prototype.ixor = function(f) {
      return i2((this.negative | f.negative) === 0), this.iuxor(f);
    }, o.prototype.xor = function(f) {
      return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
    }, o.prototype.uxor = function(f) {
      return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
    }, o.prototype.inotn = function(f) {
      i2(typeof f == "number" && f >= 0);
      var a = Math.ceil(f / 26) | 0, c = f % 26;
      this._expand(a), c > 0 && a--;
      for (var d = 0; d < a; d++) this.words[d] = ~this.words[d] & 67108863;
      return c > 0 && (this.words[d] = ~this.words[d] & 67108863 >> 26 - c), this._strip();
    }, o.prototype.notn = function(f) {
      return this.clone().inotn(f);
    }, o.prototype.setn = function(f, a) {
      i2(typeof f == "number" && f >= 0);
      var c = f / 26 | 0, d = f % 26;
      return this._expand(c + 1), a ? this.words[c] = this.words[c] | 1 << d : this.words[c] = this.words[c] & ~(1 << d), this._strip();
    }, o.prototype.iadd = function(f) {
      var a;
      if (this.negative !== 0 && f.negative === 0) return this.negative = 0, a = this.isub(f), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f.negative !== 0) return f.negative = 0, a = this.isub(f), f.negative = 1, a._normSign();
      var c, d;
      this.length > f.length ? (c = this, d = f) : (c = f, d = this);
      for (var g = 0, x = 0; x < d.length; x++) a = (c.words[x] | 0) + (d.words[x] | 0) + g, this.words[x] = a & 67108863, g = a >>> 26;
      for (; g !== 0 && x < c.length; x++) a = (c.words[x] | 0) + g, this.words[x] = a & 67108863, g = a >>> 26;
      if (this.length = c.length, g !== 0) this.words[this.length] = g, this.length++;
      else if (c !== this) for (; x < c.length; x++) this.words[x] = c.words[x];
      return this;
    }, o.prototype.add = function(f) {
      var a;
      return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, a = this.sub(f), f.negative ^= 1, a) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = f.sub(this), this.negative = 1, a) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
    }, o.prototype.isub = function(f) {
      if (f.negative !== 0) {
        f.negative = 0;
        var a = this.iadd(f);
        return f.negative = 1, a._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();
      var c = this.cmp(f);
      if (c === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d, g;
      c > 0 ? (d = this, g = f) : (d = f, g = this);
      for (var x = 0, M = 0; M < g.length; M++) a = (d.words[M] | 0) - (g.words[M] | 0) + x, x = a >> 26, this.words[M] = a & 67108863;
      for (; x !== 0 && M < d.length; M++) a = (d.words[M] | 0) + x, x = a >> 26, this.words[M] = a & 67108863;
      if (x === 0 && M < d.length && d !== this) for (; M < d.length; M++) this.words[M] = d.words[M];
      return this.length = Math.max(this.length, M), d !== this && (this.negative = 1), this._strip();
    }, o.prototype.sub = function(f) {
      return this.clone().isub(f);
    };
    function U(A, f, a) {
      a.negative = f.negative ^ A.negative;
      var c = A.length + f.length | 0;
      a.length = c, c = c - 1 | 0;
      var d = A.words[0] | 0, g = f.words[0] | 0, x = d * g, M = x & 67108863, l = x / 67108864 | 0;
      a.words[0] = M;
      for (var s = 1; s < c; s++) {
        for (var v = l >>> 26, k = l & 67108863, u = Math.min(s, f.length - 1), E = Math.max(0, s - A.length + 1); E <= u; E++) {
          var _ = s - E | 0;
          d = A.words[_] | 0, g = f.words[E] | 0, x = d * g + k, v += x / 67108864 | 0, k = x & 67108863;
        }
        a.words[s] = k | 0, l = v | 0;
      }
      return l !== 0 ? a.words[s] = l | 0 : a.length--, a._strip();
    }
    var J = function(f, a, c) {
      var d = f.words, g = a.words, x = c.words, M = 0, l, s, v, k = d[0] | 0, u = k & 8191, E = k >>> 13, _ = d[1] | 0, B = _ & 8191, R = _ >>> 13, T = d[2] | 0, P = T & 8191, O = T >>> 13, Ct = d[3] | 0, D = Ct & 8191, q = Ct >>> 13, De = d[4] | 0, X = De & 8191, Z = De >>> 13, Fe = d[5] | 0, $ = Fe & 8191, tt = Fe >>> 13, Te = d[6] | 0, et = Te & 8191, rt = Te >>> 13, Ue = d[7] | 0, it = Ue & 8191, nt = Ue >>> 13, ke2 = d[8] | 0, ft = ke2 & 8191, ot = ke2 >>> 13, qe = d[9] | 0, st = qe & 8191, at = qe >>> 13, Ke = g[0] | 0, ut = Ke & 8191, ht = Ke >>> 13, He = g[1] | 0, ct = He & 8191, lt = He >>> 13, ze = g[2] | 0, dt = ze & 8191, pt = ze >>> 13, Le = g[3] | 0, vt = Le & 8191, mt = Le >>> 13, je = g[4] | 0, gt = je & 8191, At = je >>> 13, Qe = g[5] | 0, bt = Qe & 8191, yt = Qe >>> 13, Je = g[6] | 0, wt = Je & 8191, xt = Je >>> 13, Ge = g[7] | 0, Mt = Ge & 8191, Et = Ge >>> 13, Ye = g[8] | 0, St = Ye & 8191, Nt = Ye >>> 13, Ve = g[9] | 0, It = Ve & 8191, _t = Ve >>> 13;
      c.negative = f.negative ^ a.negative, c.length = 19, l = Math.imul(u, ut), s = Math.imul(u, ht), s = s + Math.imul(E, ut) | 0, v = Math.imul(E, ht);
      var Me = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, l = Math.imul(B, ut), s = Math.imul(B, ht), s = s + Math.imul(R, ut) | 0, v = Math.imul(R, ht), l = l + Math.imul(u, ct) | 0, s = s + Math.imul(u, lt) | 0, s = s + Math.imul(E, ct) | 0, v = v + Math.imul(E, lt) | 0;
      var Ee = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, l = Math.imul(P, ut), s = Math.imul(P, ht), s = s + Math.imul(O, ut) | 0, v = Math.imul(O, ht), l = l + Math.imul(B, ct) | 0, s = s + Math.imul(B, lt) | 0, s = s + Math.imul(R, ct) | 0, v = v + Math.imul(R, lt) | 0, l = l + Math.imul(u, dt) | 0, s = s + Math.imul(u, pt) | 0, s = s + Math.imul(E, dt) | 0, v = v + Math.imul(E, pt) | 0;
      var Se = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, l = Math.imul(D, ut), s = Math.imul(D, ht), s = s + Math.imul(q, ut) | 0, v = Math.imul(q, ht), l = l + Math.imul(P, ct) | 0, s = s + Math.imul(P, lt) | 0, s = s + Math.imul(O, ct) | 0, v = v + Math.imul(O, lt) | 0, l = l + Math.imul(B, dt) | 0, s = s + Math.imul(B, pt) | 0, s = s + Math.imul(R, dt) | 0, v = v + Math.imul(R, pt) | 0, l = l + Math.imul(u, vt) | 0, s = s + Math.imul(u, mt) | 0, s = s + Math.imul(E, vt) | 0, v = v + Math.imul(E, mt) | 0;
      var Ne = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l = Math.imul(X, ut), s = Math.imul(X, ht), s = s + Math.imul(Z, ut) | 0, v = Math.imul(Z, ht), l = l + Math.imul(D, ct) | 0, s = s + Math.imul(D, lt) | 0, s = s + Math.imul(q, ct) | 0, v = v + Math.imul(q, lt) | 0, l = l + Math.imul(P, dt) | 0, s = s + Math.imul(P, pt) | 0, s = s + Math.imul(O, dt) | 0, v = v + Math.imul(O, pt) | 0, l = l + Math.imul(B, vt) | 0, s = s + Math.imul(B, mt) | 0, s = s + Math.imul(R, vt) | 0, v = v + Math.imul(R, mt) | 0, l = l + Math.imul(u, gt) | 0, s = s + Math.imul(u, At) | 0, s = s + Math.imul(E, gt) | 0, v = v + Math.imul(E, At) | 0;
      var Ie = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l = Math.imul($, ut), s = Math.imul($, ht), s = s + Math.imul(tt, ut) | 0, v = Math.imul(tt, ht), l = l + Math.imul(X, ct) | 0, s = s + Math.imul(X, lt) | 0, s = s + Math.imul(Z, ct) | 0, v = v + Math.imul(Z, lt) | 0, l = l + Math.imul(D, dt) | 0, s = s + Math.imul(D, pt) | 0, s = s + Math.imul(q, dt) | 0, v = v + Math.imul(q, pt) | 0, l = l + Math.imul(P, vt) | 0, s = s + Math.imul(P, mt) | 0, s = s + Math.imul(O, vt) | 0, v = v + Math.imul(O, mt) | 0, l = l + Math.imul(B, gt) | 0, s = s + Math.imul(B, At) | 0, s = s + Math.imul(R, gt) | 0, v = v + Math.imul(R, At) | 0, l = l + Math.imul(u, bt) | 0, s = s + Math.imul(u, yt) | 0, s = s + Math.imul(E, bt) | 0, v = v + Math.imul(E, yt) | 0;
      var Wr = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l = Math.imul(et, ut), s = Math.imul(et, ht), s = s + Math.imul(rt, ut) | 0, v = Math.imul(rt, ht), l = l + Math.imul($, ct) | 0, s = s + Math.imul($, lt) | 0, s = s + Math.imul(tt, ct) | 0, v = v + Math.imul(tt, lt) | 0, l = l + Math.imul(X, dt) | 0, s = s + Math.imul(X, pt) | 0, s = s + Math.imul(Z, dt) | 0, v = v + Math.imul(Z, pt) | 0, l = l + Math.imul(D, vt) | 0, s = s + Math.imul(D, mt) | 0, s = s + Math.imul(q, vt) | 0, v = v + Math.imul(q, mt) | 0, l = l + Math.imul(P, gt) | 0, s = s + Math.imul(P, At) | 0, s = s + Math.imul(O, gt) | 0, v = v + Math.imul(O, At) | 0, l = l + Math.imul(B, bt) | 0, s = s + Math.imul(B, yt) | 0, s = s + Math.imul(R, bt) | 0, v = v + Math.imul(R, yt) | 0, l = l + Math.imul(u, wt) | 0, s = s + Math.imul(u, xt) | 0, s = s + Math.imul(E, wt) | 0, v = v + Math.imul(E, xt) | 0;
      var Xr = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l = Math.imul(it, ut), s = Math.imul(it, ht), s = s + Math.imul(nt, ut) | 0, v = Math.imul(nt, ht), l = l + Math.imul(et, ct) | 0, s = s + Math.imul(et, lt) | 0, s = s + Math.imul(rt, ct) | 0, v = v + Math.imul(rt, lt) | 0, l = l + Math.imul($, dt) | 0, s = s + Math.imul($, pt) | 0, s = s + Math.imul(tt, dt) | 0, v = v + Math.imul(tt, pt) | 0, l = l + Math.imul(X, vt) | 0, s = s + Math.imul(X, mt) | 0, s = s + Math.imul(Z, vt) | 0, v = v + Math.imul(Z, mt) | 0, l = l + Math.imul(D, gt) | 0, s = s + Math.imul(D, At) | 0, s = s + Math.imul(q, gt) | 0, v = v + Math.imul(q, At) | 0, l = l + Math.imul(P, bt) | 0, s = s + Math.imul(P, yt) | 0, s = s + Math.imul(O, bt) | 0, v = v + Math.imul(O, yt) | 0, l = l + Math.imul(B, wt) | 0, s = s + Math.imul(B, xt) | 0, s = s + Math.imul(R, wt) | 0, v = v + Math.imul(R, xt) | 0, l = l + Math.imul(u, Mt) | 0, s = s + Math.imul(u, Et) | 0, s = s + Math.imul(E, Mt) | 0, v = v + Math.imul(E, Et) | 0;
      var Zr = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l = Math.imul(ft, ut), s = Math.imul(ft, ht), s = s + Math.imul(ot, ut) | 0, v = Math.imul(ot, ht), l = l + Math.imul(it, ct) | 0, s = s + Math.imul(it, lt) | 0, s = s + Math.imul(nt, ct) | 0, v = v + Math.imul(nt, lt) | 0, l = l + Math.imul(et, dt) | 0, s = s + Math.imul(et, pt) | 0, s = s + Math.imul(rt, dt) | 0, v = v + Math.imul(rt, pt) | 0, l = l + Math.imul($, vt) | 0, s = s + Math.imul($, mt) | 0, s = s + Math.imul(tt, vt) | 0, v = v + Math.imul(tt, mt) | 0, l = l + Math.imul(X, gt) | 0, s = s + Math.imul(X, At) | 0, s = s + Math.imul(Z, gt) | 0, v = v + Math.imul(Z, At) | 0, l = l + Math.imul(D, bt) | 0, s = s + Math.imul(D, yt) | 0, s = s + Math.imul(q, bt) | 0, v = v + Math.imul(q, yt) | 0, l = l + Math.imul(P, wt) | 0, s = s + Math.imul(P, xt) | 0, s = s + Math.imul(O, wt) | 0, v = v + Math.imul(O, xt) | 0, l = l + Math.imul(B, Mt) | 0, s = s + Math.imul(B, Et) | 0, s = s + Math.imul(R, Mt) | 0, v = v + Math.imul(R, Et) | 0, l = l + Math.imul(u, St) | 0, s = s + Math.imul(u, Nt) | 0, s = s + Math.imul(E, St) | 0, v = v + Math.imul(E, Nt) | 0;
      var $r = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + ($r >>> 26) | 0, $r &= 67108863, l = Math.imul(st, ut), s = Math.imul(st, ht), s = s + Math.imul(at, ut) | 0, v = Math.imul(at, ht), l = l + Math.imul(ft, ct) | 0, s = s + Math.imul(ft, lt) | 0, s = s + Math.imul(ot, ct) | 0, v = v + Math.imul(ot, lt) | 0, l = l + Math.imul(it, dt) | 0, s = s + Math.imul(it, pt) | 0, s = s + Math.imul(nt, dt) | 0, v = v + Math.imul(nt, pt) | 0, l = l + Math.imul(et, vt) | 0, s = s + Math.imul(et, mt) | 0, s = s + Math.imul(rt, vt) | 0, v = v + Math.imul(rt, mt) | 0, l = l + Math.imul($, gt) | 0, s = s + Math.imul($, At) | 0, s = s + Math.imul(tt, gt) | 0, v = v + Math.imul(tt, At) | 0, l = l + Math.imul(X, bt) | 0, s = s + Math.imul(X, yt) | 0, s = s + Math.imul(Z, bt) | 0, v = v + Math.imul(Z, yt) | 0, l = l + Math.imul(D, wt) | 0, s = s + Math.imul(D, xt) | 0, s = s + Math.imul(q, wt) | 0, v = v + Math.imul(q, xt) | 0, l = l + Math.imul(P, Mt) | 0, s = s + Math.imul(P, Et) | 0, s = s + Math.imul(O, Mt) | 0, v = v + Math.imul(O, Et) | 0, l = l + Math.imul(B, St) | 0, s = s + Math.imul(B, Nt) | 0, s = s + Math.imul(R, St) | 0, v = v + Math.imul(R, Nt) | 0, l = l + Math.imul(u, It) | 0, s = s + Math.imul(u, _t) | 0, s = s + Math.imul(E, It) | 0, v = v + Math.imul(E, _t) | 0;
      var ti = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l = Math.imul(st, ct), s = Math.imul(st, lt), s = s + Math.imul(at, ct) | 0, v = Math.imul(at, lt), l = l + Math.imul(ft, dt) | 0, s = s + Math.imul(ft, pt) | 0, s = s + Math.imul(ot, dt) | 0, v = v + Math.imul(ot, pt) | 0, l = l + Math.imul(it, vt) | 0, s = s + Math.imul(it, mt) | 0, s = s + Math.imul(nt, vt) | 0, v = v + Math.imul(nt, mt) | 0, l = l + Math.imul(et, gt) | 0, s = s + Math.imul(et, At) | 0, s = s + Math.imul(rt, gt) | 0, v = v + Math.imul(rt, At) | 0, l = l + Math.imul($, bt) | 0, s = s + Math.imul($, yt) | 0, s = s + Math.imul(tt, bt) | 0, v = v + Math.imul(tt, yt) | 0, l = l + Math.imul(X, wt) | 0, s = s + Math.imul(X, xt) | 0, s = s + Math.imul(Z, wt) | 0, v = v + Math.imul(Z, xt) | 0, l = l + Math.imul(D, Mt) | 0, s = s + Math.imul(D, Et) | 0, s = s + Math.imul(q, Mt) | 0, v = v + Math.imul(q, Et) | 0, l = l + Math.imul(P, St) | 0, s = s + Math.imul(P, Nt) | 0, s = s + Math.imul(O, St) | 0, v = v + Math.imul(O, Nt) | 0, l = l + Math.imul(B, It) | 0, s = s + Math.imul(B, _t) | 0, s = s + Math.imul(R, It) | 0, v = v + Math.imul(R, _t) | 0;
      var ei = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l = Math.imul(st, dt), s = Math.imul(st, pt), s = s + Math.imul(at, dt) | 0, v = Math.imul(at, pt), l = l + Math.imul(ft, vt) | 0, s = s + Math.imul(ft, mt) | 0, s = s + Math.imul(ot, vt) | 0, v = v + Math.imul(ot, mt) | 0, l = l + Math.imul(it, gt) | 0, s = s + Math.imul(it, At) | 0, s = s + Math.imul(nt, gt) | 0, v = v + Math.imul(nt, At) | 0, l = l + Math.imul(et, bt) | 0, s = s + Math.imul(et, yt) | 0, s = s + Math.imul(rt, bt) | 0, v = v + Math.imul(rt, yt) | 0, l = l + Math.imul($, wt) | 0, s = s + Math.imul($, xt) | 0, s = s + Math.imul(tt, wt) | 0, v = v + Math.imul(tt, xt) | 0, l = l + Math.imul(X, Mt) | 0, s = s + Math.imul(X, Et) | 0, s = s + Math.imul(Z, Mt) | 0, v = v + Math.imul(Z, Et) | 0, l = l + Math.imul(D, St) | 0, s = s + Math.imul(D, Nt) | 0, s = s + Math.imul(q, St) | 0, v = v + Math.imul(q, Nt) | 0, l = l + Math.imul(P, It) | 0, s = s + Math.imul(P, _t) | 0, s = s + Math.imul(O, It) | 0, v = v + Math.imul(O, _t) | 0;
      var ri = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l = Math.imul(st, vt), s = Math.imul(st, mt), s = s + Math.imul(at, vt) | 0, v = Math.imul(at, mt), l = l + Math.imul(ft, gt) | 0, s = s + Math.imul(ft, At) | 0, s = s + Math.imul(ot, gt) | 0, v = v + Math.imul(ot, At) | 0, l = l + Math.imul(it, bt) | 0, s = s + Math.imul(it, yt) | 0, s = s + Math.imul(nt, bt) | 0, v = v + Math.imul(nt, yt) | 0, l = l + Math.imul(et, wt) | 0, s = s + Math.imul(et, xt) | 0, s = s + Math.imul(rt, wt) | 0, v = v + Math.imul(rt, xt) | 0, l = l + Math.imul($, Mt) | 0, s = s + Math.imul($, Et) | 0, s = s + Math.imul(tt, Mt) | 0, v = v + Math.imul(tt, Et) | 0, l = l + Math.imul(X, St) | 0, s = s + Math.imul(X, Nt) | 0, s = s + Math.imul(Z, St) | 0, v = v + Math.imul(Z, Nt) | 0, l = l + Math.imul(D, It) | 0, s = s + Math.imul(D, _t) | 0, s = s + Math.imul(q, It) | 0, v = v + Math.imul(q, _t) | 0;
      var ii = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l = Math.imul(st, gt), s = Math.imul(st, At), s = s + Math.imul(at, gt) | 0, v = Math.imul(at, At), l = l + Math.imul(ft, bt) | 0, s = s + Math.imul(ft, yt) | 0, s = s + Math.imul(ot, bt) | 0, v = v + Math.imul(ot, yt) | 0, l = l + Math.imul(it, wt) | 0, s = s + Math.imul(it, xt) | 0, s = s + Math.imul(nt, wt) | 0, v = v + Math.imul(nt, xt) | 0, l = l + Math.imul(et, Mt) | 0, s = s + Math.imul(et, Et) | 0, s = s + Math.imul(rt, Mt) | 0, v = v + Math.imul(rt, Et) | 0, l = l + Math.imul($, St) | 0, s = s + Math.imul($, Nt) | 0, s = s + Math.imul(tt, St) | 0, v = v + Math.imul(tt, Nt) | 0, l = l + Math.imul(X, It) | 0, s = s + Math.imul(X, _t) | 0, s = s + Math.imul(Z, It) | 0, v = v + Math.imul(Z, _t) | 0;
      var ni = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l = Math.imul(st, bt), s = Math.imul(st, yt), s = s + Math.imul(at, bt) | 0, v = Math.imul(at, yt), l = l + Math.imul(ft, wt) | 0, s = s + Math.imul(ft, xt) | 0, s = s + Math.imul(ot, wt) | 0, v = v + Math.imul(ot, xt) | 0, l = l + Math.imul(it, Mt) | 0, s = s + Math.imul(it, Et) | 0, s = s + Math.imul(nt, Mt) | 0, v = v + Math.imul(nt, Et) | 0, l = l + Math.imul(et, St) | 0, s = s + Math.imul(et, Nt) | 0, s = s + Math.imul(rt, St) | 0, v = v + Math.imul(rt, Nt) | 0, l = l + Math.imul($, It) | 0, s = s + Math.imul($, _t) | 0, s = s + Math.imul(tt, It) | 0, v = v + Math.imul(tt, _t) | 0;
      var fi = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l = Math.imul(st, wt), s = Math.imul(st, xt), s = s + Math.imul(at, wt) | 0, v = Math.imul(at, xt), l = l + Math.imul(ft, Mt) | 0, s = s + Math.imul(ft, Et) | 0, s = s + Math.imul(ot, Mt) | 0, v = v + Math.imul(ot, Et) | 0, l = l + Math.imul(it, St) | 0, s = s + Math.imul(it, Nt) | 0, s = s + Math.imul(nt, St) | 0, v = v + Math.imul(nt, Nt) | 0, l = l + Math.imul(et, It) | 0, s = s + Math.imul(et, _t) | 0, s = s + Math.imul(rt, It) | 0, v = v + Math.imul(rt, _t) | 0;
      var oi = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l = Math.imul(st, Mt), s = Math.imul(st, Et), s = s + Math.imul(at, Mt) | 0, v = Math.imul(at, Et), l = l + Math.imul(ft, St) | 0, s = s + Math.imul(ft, Nt) | 0, s = s + Math.imul(ot, St) | 0, v = v + Math.imul(ot, Nt) | 0, l = l + Math.imul(it, It) | 0, s = s + Math.imul(it, _t) | 0, s = s + Math.imul(nt, It) | 0, v = v + Math.imul(nt, _t) | 0;
      var si = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l = Math.imul(st, St), s = Math.imul(st, Nt), s = s + Math.imul(at, St) | 0, v = Math.imul(at, Nt), l = l + Math.imul(ft, It) | 0, s = s + Math.imul(ft, _t) | 0, s = s + Math.imul(ot, It) | 0, v = v + Math.imul(ot, _t) | 0;
      var ai = (M + l | 0) + ((s & 8191) << 13) | 0;
      M = (v + (s >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l = Math.imul(st, It), s = Math.imul(st, _t), s = s + Math.imul(at, It) | 0, v = Math.imul(at, _t);
      var ui = (M + l | 0) + ((s & 8191) << 13) | 0;
      return M = (v + (s >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x[0] = Me, x[1] = Ee, x[2] = Se, x[3] = Ne, x[4] = Ie, x[5] = Wr, x[6] = Xr, x[7] = Zr, x[8] = $r, x[9] = ti, x[10] = ei, x[11] = ri, x[12] = ii, x[13] = ni, x[14] = fi, x[15] = oi, x[16] = si, x[17] = ai, x[18] = ui, M !== 0 && (x[19] = M, c.length++), c;
    };
    Math.imul || (J = U);
    function Bt(A, f, a) {
      a.negative = f.negative ^ A.negative, a.length = A.length + f.length;
      for (var c = 0, d = 0, g = 0; g < a.length - 1; g++) {
        var x = d;
        d = 0;
        for (var M = c & 67108863, l = Math.min(g, f.length - 1), s = Math.max(0, g - A.length + 1); s <= l; s++) {
          var v = g - s, k = A.words[v] | 0, u = f.words[s] | 0, E = k * u, _ = E & 67108863;
          x = x + (E / 67108864 | 0) | 0, _ = _ + M | 0, M = _ & 67108863, x = x + (_ >>> 26) | 0, d += x >>> 26, x &= 67108863;
        }
        a.words[g] = M, c = x, x = d;
      }
      return c !== 0 ? a.words[g] = c : a.length--, a._strip();
    }
    function G(A, f, a) {
      return Bt(A, f, a);
    }
    o.prototype.mulTo = function(f, a) {
      var c, d = this.length + f.length;
      return this.length === 10 && f.length === 10 ? c = J(this, f, a) : d < 63 ? c = U(this, f, a) : d < 1024 ? c = Bt(this, f, a) : c = G(this, f, a), c;
    }, o.prototype.mul = function(f) {
      var a = new o(null);
      return a.words = new Array(this.length + f.length), this.mulTo(f, a);
    }, o.prototype.mulf = function(f) {
      var a = new o(null);
      return a.words = new Array(this.length + f.length), G(this, f, a);
    }, o.prototype.imul = function(f) {
      return this.clone().mulTo(f, this);
    }, o.prototype.imuln = function(f) {
      var a = f < 0;
      a && (f = -f), i2(typeof f == "number"), i2(f < 67108864);
      for (var c = 0, d = 0; d < this.length; d++) {
        var g = (this.words[d] | 0) * f, x = (g & 67108863) + (c & 67108863);
        c >>= 26, c += g / 67108864 | 0, c += x >>> 26, this.words[d] = x & 67108863;
      }
      return c !== 0 && (this.words[d] = c, this.length++), a ? this.ineg() : this;
    }, o.prototype.muln = function(f) {
      return this.clone().imuln(f);
    }, o.prototype.sqr = function() {
      return this.mul(this);
    }, o.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o.prototype.pow = function(f) {
      var a = F(f);
      if (a.length === 0) return new o(1);
      for (var c = this, d = 0; d < a.length && a[d] === 0; d++, c = c.sqr()) ;
      if (++d < a.length) for (var g = c.sqr(); d < a.length; d++, g = g.sqr()) a[d] !== 0 && (c = c.mul(g));
      return c;
    }, o.prototype.iushln = function(f) {
      i2(typeof f == "number" && f >= 0);
      var a = f % 26, c = (f - a) / 26, d = 67108863 >>> 26 - a << 26 - a, g;
      if (a !== 0) {
        var x = 0;
        for (g = 0; g < this.length; g++) {
          var M = this.words[g] & d, l = (this.words[g] | 0) - M << a;
          this.words[g] = l | x, x = M >>> 26 - a;
        }
        x && (this.words[g] = x, this.length++);
      }
      if (c !== 0) {
        for (g = this.length - 1; g >= 0; g--) this.words[g + c] = this.words[g];
        for (g = 0; g < c; g++) this.words[g] = 0;
        this.length += c;
      }
      return this._strip();
    }, o.prototype.ishln = function(f) {
      return i2(this.negative === 0), this.iushln(f);
    }, o.prototype.iushrn = function(f, a, c) {
      i2(typeof f == "number" && f >= 0);
      var d;
      a ? d = (a - a % 26) / 26 : d = 0;
      var g = f % 26, x = Math.min((f - g) / 26, this.length), M = 67108863 ^ 67108863 >>> g << g, l = c;
      if (d -= x, d = Math.max(0, d), l) {
        for (var s = 0; s < x; s++) l.words[s] = this.words[s];
        l.length = x;
      }
      if (x !== 0) if (this.length > x) for (this.length -= x, s = 0; s < this.length; s++) this.words[s] = this.words[s + x];
      else this.words[0] = 0, this.length = 1;
      var v = 0;
      for (s = this.length - 1; s >= 0 && (v !== 0 || s >= d); s--) {
        var k = this.words[s] | 0;
        this.words[s] = v << 26 - g | k >>> g, v = k & M;
      }
      return l && v !== 0 && (l.words[l.length++] = v), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o.prototype.ishrn = function(f, a, c) {
      return i2(this.negative === 0), this.iushrn(f, a, c);
    }, o.prototype.shln = function(f) {
      return this.clone().ishln(f);
    }, o.prototype.ushln = function(f) {
      return this.clone().iushln(f);
    }, o.prototype.shrn = function(f) {
      return this.clone().ishrn(f);
    }, o.prototype.ushrn = function(f) {
      return this.clone().iushrn(f);
    }, o.prototype.testn = function(f) {
      i2(typeof f == "number" && f >= 0);
      var a = f % 26, c = (f - a) / 26, d = 1 << a;
      if (this.length <= c) return false;
      var g = this.words[c];
      return !!(g & d);
    }, o.prototype.imaskn = function(f) {
      i2(typeof f == "number" && f >= 0);
      var a = f % 26, c = (f - a) / 26;
      if (i2(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c) return this;
      if (a !== 0 && c++, this.length = Math.min(c, this.length), a !== 0) {
        var d = 67108863 ^ 67108863 >>> a << a;
        this.words[this.length - 1] &= d;
      }
      return this._strip();
    }, o.prototype.maskn = function(f) {
      return this.clone().imaskn(f);
    }, o.prototype.iaddn = function(f) {
      return i2(typeof f == "number"), i2(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
    }, o.prototype._iaddn = function(f) {
      this.words[0] += f;
      for (var a = 0; a < this.length && this.words[a] >= 67108864; a++) this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
      return this.length = Math.max(this.length, a + 1), this;
    }, o.prototype.isubn = function(f) {
      if (i2(typeof f == "number"), i2(f < 67108864), f < 0) return this.iaddn(-f);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f), this.negative = 1, this;
      if (this.words[0] -= f, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else for (var a = 0; a < this.length && this.words[a] < 0; a++) this.words[a] += 67108864, this.words[a + 1] -= 1;
      return this._strip();
    }, o.prototype.addn = function(f) {
      return this.clone().iaddn(f);
    }, o.prototype.subn = function(f) {
      return this.clone().isubn(f);
    }, o.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o.prototype.abs = function() {
      return this.clone().iabs();
    }, o.prototype._ishlnsubmul = function(f, a, c) {
      var d = f.length + c, g;
      this._expand(d);
      var x, M = 0;
      for (g = 0; g < f.length; g++) {
        x = (this.words[g + c] | 0) + M;
        var l = (f.words[g] | 0) * a;
        x -= l & 67108863, M = (x >> 26) - (l / 67108864 | 0), this.words[g + c] = x & 67108863;
      }
      for (; g < this.length - c; g++) x = (this.words[g + c] | 0) + M, M = x >> 26, this.words[g + c] = x & 67108863;
      if (M === 0) return this._strip();
      for (i2(M === -1), M = 0, g = 0; g < this.length; g++) x = -(this.words[g] | 0) + M, M = x >> 26, this.words[g] = x & 67108863;
      return this.negative = 1, this._strip();
    }, o.prototype._wordDiv = function(f, a) {
      var c = this.length - f.length, d = this.clone(), g = f, x = g.words[g.length - 1] | 0, M = this._countBits(x);
      c = 26 - M, c !== 0 && (g = g.ushln(c), d.iushln(c), x = g.words[g.length - 1] | 0);
      var l = d.length - g.length, s;
      if (a !== "mod") {
        s = new o(null), s.length = l + 1, s.words = new Array(s.length);
        for (var v = 0; v < s.length; v++) s.words[v] = 0;
      }
      var k = d.clone()._ishlnsubmul(g, 1, l);
      k.negative === 0 && (d = k, s && (s.words[l] = 1));
      for (var u = l - 1; u >= 0; u--) {
        var E = (d.words[g.length + u] | 0) * 67108864 + (d.words[g.length + u - 1] | 0);
        for (E = Math.min(E / x | 0, 67108863), d._ishlnsubmul(g, E, u); d.negative !== 0; ) E--, d.negative = 0, d._ishlnsubmul(g, 1, u), d.isZero() || (d.negative ^= 1);
        s && (s.words[u] = E);
      }
      return s && s._strip(), d._strip(), a !== "div" && c !== 0 && d.iushrn(c), { div: s || null, mod: d };
    }, o.prototype.divmod = function(f, a, c) {
      if (i2(!f.isZero()), this.isZero()) return { div: new o(0), mod: new o(0) };
      var d, g, x;
      return this.negative !== 0 && f.negative === 0 ? (x = this.neg().divmod(f, a), a !== "mod" && (d = x.div.neg()), a !== "div" && (g = x.mod.neg(), c && g.negative !== 0 && g.iadd(f)), { div: d, mod: g }) : this.negative === 0 && f.negative !== 0 ? (x = this.divmod(f.neg(), a), a !== "mod" && (d = x.div.neg()), { div: d, mod: x.mod }) : this.negative & f.negative ? (x = this.neg().divmod(f.neg(), a), a !== "div" && (g = x.mod.neg(), c && g.negative !== 0 && g.isub(f)), { div: x.div, mod: g }) : f.length > this.length || this.cmp(f) < 0 ? { div: new o(0), mod: this } : f.length === 1 ? a === "div" ? { div: this.divn(f.words[0]), mod: null } : a === "mod" ? { div: null, mod: new o(this.modrn(f.words[0])) } : { div: this.divn(f.words[0]), mod: new o(this.modrn(f.words[0])) } : this._wordDiv(f, a);
    }, o.prototype.div = function(f) {
      return this.divmod(f, "div", false).div;
    }, o.prototype.mod = function(f) {
      return this.divmod(f, "mod", false).mod;
    }, o.prototype.umod = function(f) {
      return this.divmod(f, "mod", true).mod;
    }, o.prototype.divRound = function(f) {
      var a = this.divmod(f);
      if (a.mod.isZero()) return a.div;
      var c = a.div.negative !== 0 ? a.mod.isub(f) : a.mod, d = f.ushrn(1), g = f.andln(1), x = c.cmp(d);
      return x < 0 || g === 1 && x === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
    }, o.prototype.modrn = function(f) {
      var a = f < 0;
      a && (f = -f), i2(f <= 67108863);
      for (var c = (1 << 26) % f, d = 0, g = this.length - 1; g >= 0; g--) d = (c * d + (this.words[g] | 0)) % f;
      return a ? -d : d;
    }, o.prototype.modn = function(f) {
      return this.modrn(f);
    }, o.prototype.idivn = function(f) {
      var a = f < 0;
      a && (f = -f), i2(f <= 67108863);
      for (var c = 0, d = this.length - 1; d >= 0; d--) {
        var g = (this.words[d] | 0) + c * 67108864;
        this.words[d] = g / f | 0, c = g % f;
      }
      return this._strip(), a ? this.ineg() : this;
    }, o.prototype.divn = function(f) {
      return this.clone().idivn(f);
    }, o.prototype.egcd = function(f) {
      i2(f.negative === 0), i2(!f.isZero());
      var a = this, c = f.clone();
      a.negative !== 0 ? a = a.umod(f) : a = a.clone();
      for (var d = new o(1), g = new o(0), x = new o(0), M = new o(1), l = 0; a.isEven() && c.isEven(); ) a.iushrn(1), c.iushrn(1), ++l;
      for (var s = c.clone(), v = a.clone(); !a.isZero(); ) {
        for (var k = 0, u = 1; !(a.words[0] & u) && k < 26; ++k, u <<= 1) ;
        if (k > 0) for (a.iushrn(k); k-- > 0; ) (d.isOdd() || g.isOdd()) && (d.iadd(s), g.isub(v)), d.iushrn(1), g.iushrn(1);
        for (var E = 0, _ = 1; !(c.words[0] & _) && E < 26; ++E, _ <<= 1) ;
        if (E > 0) for (c.iushrn(E); E-- > 0; ) (x.isOdd() || M.isOdd()) && (x.iadd(s), M.isub(v)), x.iushrn(1), M.iushrn(1);
        a.cmp(c) >= 0 ? (a.isub(c), d.isub(x), g.isub(M)) : (c.isub(a), x.isub(d), M.isub(g));
      }
      return { a: x, b: M, gcd: c.iushln(l) };
    }, o.prototype._invmp = function(f) {
      i2(f.negative === 0), i2(!f.isZero());
      var a = this, c = f.clone();
      a.negative !== 0 ? a = a.umod(f) : a = a.clone();
      for (var d = new o(1), g = new o(0), x = c.clone(); a.cmpn(1) > 0 && c.cmpn(1) > 0; ) {
        for (var M = 0, l = 1; !(a.words[0] & l) && M < 26; ++M, l <<= 1) ;
        if (M > 0) for (a.iushrn(M); M-- > 0; ) d.isOdd() && d.iadd(x), d.iushrn(1);
        for (var s = 0, v = 1; !(c.words[0] & v) && s < 26; ++s, v <<= 1) ;
        if (s > 0) for (c.iushrn(s); s-- > 0; ) g.isOdd() && g.iadd(x), g.iushrn(1);
        a.cmp(c) >= 0 ? (a.isub(c), d.isub(g)) : (c.isub(a), g.isub(d));
      }
      var k;
      return a.cmpn(1) === 0 ? k = d : k = g, k.cmpn(0) < 0 && k.iadd(f), k;
    }, o.prototype.gcd = function(f) {
      if (this.isZero()) return f.abs();
      if (f.isZero()) return this.abs();
      var a = this.clone(), c = f.clone();
      a.negative = 0, c.negative = 0;
      for (var d = 0; a.isEven() && c.isEven(); d++) a.iushrn(1), c.iushrn(1);
      do {
        for (; a.isEven(); ) a.iushrn(1);
        for (; c.isEven(); ) c.iushrn(1);
        var g = a.cmp(c);
        if (g < 0) {
          var x = a;
          a = c, c = x;
        } else if (g === 0 || c.cmpn(1) === 0) break;
        a.isub(c);
      } while (true);
      return c.iushln(d);
    }, o.prototype.invm = function(f) {
      return this.egcd(f).a.umod(f);
    }, o.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o.prototype.andln = function(f) {
      return this.words[0] & f;
    }, o.prototype.bincn = function(f) {
      i2(typeof f == "number");
      var a = f % 26, c = (f - a) / 26, d = 1 << a;
      if (this.length <= c) return this._expand(c + 1), this.words[c] |= d, this;
      for (var g = d, x = c; g !== 0 && x < this.length; x++) {
        var M = this.words[x] | 0;
        M += g, g = M >>> 26, M &= 67108863, this.words[x] = M;
      }
      return g !== 0 && (this.words[x] = g, this.length++), this;
    }, o.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o.prototype.cmpn = function(f) {
      var a = f < 0;
      if (this.negative !== 0 && !a) return -1;
      if (this.negative === 0 && a) return 1;
      this._strip();
      var c;
      if (this.length > 1) c = 1;
      else {
        a && (f = -f), i2(f <= 67108863, "Number is too big");
        var d = this.words[0] | 0;
        c = d === f ? 0 : d < f ? -1 : 1;
      }
      return this.negative !== 0 ? -c | 0 : c;
    }, o.prototype.cmp = function(f) {
      if (this.negative !== 0 && f.negative === 0) return -1;
      if (this.negative === 0 && f.negative !== 0) return 1;
      var a = this.ucmp(f);
      return this.negative !== 0 ? -a | 0 : a;
    }, o.prototype.ucmp = function(f) {
      if (this.length > f.length) return 1;
      if (this.length < f.length) return -1;
      for (var a = 0, c = this.length - 1; c >= 0; c--) {
        var d = this.words[c] | 0, g = f.words[c] | 0;
        if (d !== g) {
          d < g ? a = -1 : d > g && (a = 1);
          break;
        }
      }
      return a;
    }, o.prototype.gtn = function(f) {
      return this.cmpn(f) === 1;
    }, o.prototype.gt = function(f) {
      return this.cmp(f) === 1;
    }, o.prototype.gten = function(f) {
      return this.cmpn(f) >= 0;
    }, o.prototype.gte = function(f) {
      return this.cmp(f) >= 0;
    }, o.prototype.ltn = function(f) {
      return this.cmpn(f) === -1;
    }, o.prototype.lt = function(f) {
      return this.cmp(f) === -1;
    }, o.prototype.lten = function(f) {
      return this.cmpn(f) <= 0;
    }, o.prototype.lte = function(f) {
      return this.cmp(f) <= 0;
    }, o.prototype.eqn = function(f) {
      return this.cmpn(f) === 0;
    }, o.prototype.eq = function(f) {
      return this.cmp(f) === 0;
    }, o.red = function(f) {
      return new Y(f);
    }, o.prototype.toRed = function(f) {
      return i2(!this.red, "Already a number in reduction context"), i2(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
    }, o.prototype.fromRed = function() {
      return i2(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o.prototype._forceRed = function(f) {
      return this.red = f, this;
    }, o.prototype.forceRed = function(f) {
      return i2(!this.red, "Already a number in reduction context"), this._forceRed(f);
    }, o.prototype.redAdd = function(f) {
      return i2(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
    }, o.prototype.redIAdd = function(f) {
      return i2(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
    }, o.prototype.redSub = function(f) {
      return i2(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
    }, o.prototype.redISub = function(f) {
      return i2(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
    }, o.prototype.redShl = function(f) {
      return i2(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
    }, o.prototype.redMul = function(f) {
      return i2(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
    }, o.prototype.redIMul = function(f) {
      return i2(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
    }, o.prototype.redSqr = function() {
      return i2(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o.prototype.redISqr = function() {
      return i2(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o.prototype.redSqrt = function() {
      return i2(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o.prototype.redInvm = function() {
      return i2(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o.prototype.redNeg = function() {
      return i2(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o.prototype.redPow = function(f) {
      return i2(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function z(A, f) {
      this.name = A, this.p = new o(f, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    z.prototype._tmp = function() {
      var f = new o(null);
      return f.words = new Array(Math.ceil(this.n / 13)), f;
    }, z.prototype.ireduce = function(f) {
      var a = f, c;
      do
        this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), c = a.bitLength();
      while (c > this.n);
      var d = c < this.n ? -1 : a.ucmp(this.p);
      return d === 0 ? (a.words[0] = 0, a.length = 1) : d > 0 ? a.isub(this.p) : a.strip !== void 0 ? a.strip() : a._strip(), a;
    }, z.prototype.split = function(f, a) {
      f.iushrn(this.n, 0, a);
    }, z.prototype.imulK = function(f) {
      return f.imul(this.k);
    };
    function Pt() {
      z.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n(Pt, z), Pt.prototype.split = function(f, a) {
      for (var c = 4194303, d = Math.min(f.length, 9), g = 0; g < d; g++) a.words[g] = f.words[g];
      if (a.length = d, f.length <= 9) {
        f.words[0] = 0, f.length = 1;
        return;
      }
      var x = f.words[9];
      for (a.words[a.length++] = x & c, g = 10; g < f.length; g++) {
        var M = f.words[g] | 0;
        f.words[g - 10] = (M & c) << 4 | x >>> 22, x = M;
      }
      x >>>= 22, f.words[g - 10] = x, x === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
    }, Pt.prototype.imulK = function(f) {
      f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;
      for (var a = 0, c = 0; c < f.length; c++) {
        var d = f.words[c] | 0;
        a += d * 977, f.words[c] = a & 67108863, a = d * 64 + (a / 67108864 | 0);
      }
      return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
    };
    function W() {
      z.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n(W, z);
    function Rt() {
      z.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n(Rt, z);
    function Yt() {
      z.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n(Yt, z), Yt.prototype.imulK = function(f) {
      for (var a = 0, c = 0; c < f.length; c++) {
        var d = (f.words[c] | 0) * 19 + a, g = d & 67108863;
        d >>>= 26, f.words[c] = g, a = d;
      }
      return a !== 0 && (f.words[f.length++] = a), f;
    }, o._prime = function(f) {
      if (H[f]) return H[f];
      var a;
      if (f === "k256") a = new Pt();
      else if (f === "p224") a = new W();
      else if (f === "p192") a = new Rt();
      else if (f === "p25519") a = new Yt();
      else throw new Error("Unknown prime " + f);
      return H[f] = a, a;
    };
    function Y(A) {
      if (typeof A == "string") {
        var f = o._prime(A);
        this.m = f.p, this.prime = f;
      } else i2(A.gtn(1), "modulus must be greater than 1"), this.m = A, this.prime = null;
    }
    Y.prototype._verify1 = function(f) {
      i2(f.negative === 0, "red works only with positives"), i2(f.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(f, a) {
      i2((f.negative | a.negative) === 0, "red works only with positives"), i2(f.red && f.red === a.red, "red works only with red numbers");
    }, Y.prototype.imod = function(f) {
      return this.prime ? this.prime.ireduce(f)._forceRed(this) : (w(f, f.umod(this.m)._forceRed(this)), f);
    }, Y.prototype.neg = function(f) {
      return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
    }, Y.prototype.add = function(f, a) {
      this._verify2(f, a);
      var c = f.add(a);
      return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this);
    }, Y.prototype.iadd = function(f, a) {
      this._verify2(f, a);
      var c = f.iadd(a);
      return c.cmp(this.m) >= 0 && c.isub(this.m), c;
    }, Y.prototype.sub = function(f, a) {
      this._verify2(f, a);
      var c = f.sub(a);
      return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this);
    }, Y.prototype.isub = function(f, a) {
      this._verify2(f, a);
      var c = f.isub(a);
      return c.cmpn(0) < 0 && c.iadd(this.m), c;
    }, Y.prototype.shl = function(f, a) {
      return this._verify1(f), this.imod(f.ushln(a));
    }, Y.prototype.imul = function(f, a) {
      return this._verify2(f, a), this.imod(f.imul(a));
    }, Y.prototype.mul = function(f, a) {
      return this._verify2(f, a), this.imod(f.mul(a));
    }, Y.prototype.isqr = function(f) {
      return this.imul(f, f.clone());
    }, Y.prototype.sqr = function(f) {
      return this.mul(f, f);
    }, Y.prototype.sqrt = function(f) {
      if (f.isZero()) return f.clone();
      var a = this.m.andln(3);
      if (i2(a % 2 === 1), a === 3) {
        var c = this.m.add(new o(1)).iushrn(2);
        return this.pow(f, c);
      }
      for (var d = this.m.subn(1), g = 0; !d.isZero() && d.andln(1) === 0; ) g++, d.iushrn(1);
      i2(!d.isZero());
      var x = new o(1).toRed(this), M = x.redNeg(), l = this.m.subn(1).iushrn(1), s = this.m.bitLength();
      for (s = new o(2 * s * s).toRed(this); this.pow(s, l).cmp(M) !== 0; ) s.redIAdd(M);
      for (var v = this.pow(s, d), k = this.pow(f, d.addn(1).iushrn(1)), u = this.pow(f, d), E = g; u.cmp(x) !== 0; ) {
        for (var _ = u, B = 0; _.cmp(x) !== 0; B++) _ = _.redSqr();
        i2(B < E);
        var R = this.pow(v, new o(1).iushln(E - B - 1));
        k = k.redMul(R), v = R.redSqr(), u = u.redMul(v), E = B;
      }
      return k;
    }, Y.prototype.invm = function(f) {
      var a = f._invmp(this.m);
      return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
    }, Y.prototype.pow = function(f, a) {
      if (a.isZero()) return new o(1).toRed(this);
      if (a.cmpn(1) === 0) return f.clone();
      var c = 4, d = new Array(1 << c);
      d[0] = new o(1).toRed(this), d[1] = f;
      for (var g = 2; g < d.length; g++) d[g] = this.mul(d[g - 1], f);
      var x = d[0], M = 0, l = 0, s = a.bitLength() % 26;
      for (s === 0 && (s = 26), g = a.length - 1; g >= 0; g--) {
        for (var v = a.words[g], k = s - 1; k >= 0; k--) {
          var u = v >> k & 1;
          if (x !== d[0] && (x = this.sqr(x)), u === 0 && M === 0) {
            l = 0;
            continue;
          }
          M <<= 1, M |= u, l++, !(l !== c && (g !== 0 || k !== 0)) && (x = this.mul(x, d[M]), l = 0, M = 0);
        }
        s = 26;
      }
      return x;
    }, Y.prototype.convertTo = function(f) {
      var a = f.umod(this.m);
      return a === f ? a.clone() : a;
    }, Y.prototype.convertFrom = function(f) {
      var a = f.clone();
      return a.red = null, a;
    }, o.mont = function(f) {
      return new Vt(f);
    };
    function Vt(A) {
      Y.call(this, A), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n(Vt, Y), Vt.prototype.convertTo = function(f) {
      return this.imod(f.ushln(this.shift));
    }, Vt.prototype.convertFrom = function(f) {
      var a = this.imod(f.mul(this.rinv));
      return a.red = null, a;
    }, Vt.prototype.imul = function(f, a) {
      if (f.isZero() || a.isZero()) return f.words[0] = 0, f.length = 1, f;
      var c = f.imul(a), d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g = c.isub(d).iushrn(this.shift), x = g;
      return g.cmp(this.m) >= 0 ? x = g.isub(this.m) : g.cmpn(0) < 0 && (x = g.iadd(this.m)), x._forceRed(this);
    }, Vt.prototype.mul = function(f, a) {
      if (f.isZero() || a.isZero()) return new o(0)._forceRed(this);
      var c = f.mul(a), d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g = c.isub(d).iushrn(this.shift), x = g;
      return g.cmp(this.m) >= 0 ? x = g.isub(this.m) : g.cmpn(0) < 0 && (x = g.iadd(this.m)), x._forceRed(this);
    }, Vt.prototype.invm = function(f) {
      var a = this.imod(f._invmp(this.m).mul(this.r2));
      return a._forceRed(this);
    };
  })(e, On);
})(Ln);
var K = Ln.exports;
const jn = "bignumber/5.7.0";
var Rr = K.BN;
const Ae = new L(jn), wi = {}, Qn = 9007199254740991;
function C0(e) {
  return e != null && (V.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Qt(e) || typeof e == "bigint" || ir(e));
}
let Jn = false;
class V {
  constructor(t, r2) {
    t !== wi && Ae.throwError("cannot call constructor directly; use BigNumber.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r2, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return Lt(j(this).fromTwos(t));
  }
  toTwos(t) {
    return Lt(j(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? V.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return Lt(j(this).add(j(t)));
  }
  sub(t) {
    return Lt(j(this).sub(j(t)));
  }
  div(t) {
    return V.from(t).isZero() && Wt("division-by-zero", "div"), Lt(j(this).div(j(t)));
  }
  mul(t) {
    return Lt(j(this).mul(j(t)));
  }
  mod(t) {
    const r2 = j(t);
    return r2.isNeg() && Wt("division-by-zero", "mod"), Lt(j(this).umod(r2));
  }
  pow(t) {
    const r2 = j(t);
    return r2.isNeg() && Wt("negative-power", "pow"), Lt(j(this).pow(r2));
  }
  and(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && Wt("unbound-bitwise-result", "and"), Lt(j(this).and(r2));
  }
  or(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && Wt("unbound-bitwise-result", "or"), Lt(j(this).or(r2));
  }
  xor(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && Wt("unbound-bitwise-result", "xor"), Lt(j(this).xor(r2));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "mask"), Lt(j(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "shl"), Lt(j(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "shr"), Lt(j(this).shrn(t));
  }
  eq(t) {
    return j(this).eq(j(t));
  }
  lt(t) {
    return j(this).lt(j(t));
  }
  lte(t) {
    return j(this).lte(j(t));
  }
  gt(t) {
    return j(this).gt(j(t));
  }
  gte(t) {
    return j(this).gte(j(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j(this).isZero();
  }
  toNumber() {
    try {
      return j(this).toNumber();
    } catch {
      Wt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae.throwError("this platform does not support BigInt", L.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Jn || (Jn = true, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", L.errors.UNEXPECTED_ARGUMENT, {})), j(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof V) return t;
    if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new V(wi, vr(t)) : t.match(/^-?[0-9]+$/) ? new V(wi, vr(new Rr(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number") return t % 1 && Wt("underflow", "BigNumber.from", t), (t >= Qn || t <= -Qn) && Wt("overflow", "BigNumber.from", t), V.from(String(t));
    const r2 = t;
    if (typeof r2 == "bigint") return V.from(r2.toString());
    if (ir(r2)) return V.from(Kt(r2));
    if (r2) if (r2.toHexString) {
      const i2 = r2.toHexString();
      if (typeof i2 == "string") return V.from(i2);
    } else {
      let i2 = r2._hex;
      if (i2 == null && r2.type === "BigNumber" && (i2 = r2.hex), typeof i2 == "string" && (Qt(i2) || i2[0] === "-" && Qt(i2.substring(1)))) return V.from(i2);
    }
    return Ae.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
}
function vr(e) {
  if (typeof e != "string") return vr(e.toString(16));
  if (e[0] === "-") return e = e.substring(1), e[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e), e = vr(e), e === "0x00" ? e : "-" + e;
  if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x") return "0x00";
  for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00"; ) e = "0x" + e.substring(4);
  return e;
}
function Lt(e) {
  return V.from(vr(e));
}
function j(e) {
  const t = V.from(e).toHexString();
  return t[0] === "-" ? new Rr("-" + t.substring(3), 16) : new Rr(t.substring(2), 16);
}
function Wt(e, t, r2) {
  const i2 = { fault: e, operation: t };
  return r2 != null && (i2.value = r2), Ae.throwError(e, L.errors.NUMERIC_FAULT, i2);
}
const Ht = new L(jn), mr = {}, Gn = V.from(0), Yn = V.from(-1);
function Vn(e, t, r2, i2) {
  const n = { fault: t, operation: r2 };
  return i2 !== void 0 && (n.value = i2), Ht.throwError(e, L.errors.NUMERIC_FAULT, n);
}
let gr = "0";
for (; gr.length < 256; ) gr += gr;
function xi(e) {
  if (typeof e != "number") try {
    e = V.from(e).toNumber();
  } catch {
  }
  return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + gr.substring(0, e) : Ht.throwArgumentError("invalid decimal size", "decimals", e);
}
function Mi(e, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  e = V.from(e);
  const i2 = e.lt(Gn);
  i2 && (e = e.mul(Yn));
  let n = e.mod(r2).toString();
  for (; n.length < r2.length - 1; ) n = "0" + n;
  n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o = e.div(r2).toString();
  return r2.length === 1 ? e = o : e = o + "." + n, i2 && (e = "-" + e), e;
}
function be(e, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht.throwArgumentError("invalid decimal value", "value", e);
  const i2 = e.substring(0, 1) === "-";
  i2 && (e = e.substring(1)), e === "." && Ht.throwArgumentError("missing value", "value", e);
  const n = e.split(".");
  n.length > 2 && Ht.throwArgumentError("too many decimal points", "value", e);
  let o = n[0], h2 = n[1];
  for (o || (o = "0"), h2 || (h2 = "0"); h2[h2.length - 1] === "0"; ) h2 = h2.substring(0, h2.length - 1);
  for (h2.length > r2.length - 1 && Vn("fractional component exceeds decimals", "underflow", "parseFixed"), h2 === "" && (h2 = "0"); h2.length < r2.length - 1; ) h2 += "0";
  const p = V.from(o), b = V.from(h2);
  let m = p.mul(r2).add(b);
  return i2 && (m = m.mul(Yn)), m;
}
class dr {
  constructor(t, r2, i2, n) {
    t !== mr && Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r2, this.width = i2, this.decimals = n, this.name = (r2 ? "" : "u") + "fixed" + String(i2) + "x" + String(n), this._multiplier = xi(n), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof dr) return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let r2 = true, i2 = 128, n = 18;
    if (typeof t == "string") {
      if (t !== "fixed") if (t === "ufixed") r2 = false;
      else {
        const o = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        o || Ht.throwArgumentError("invalid fixed format", "format", t), r2 = o[1] !== "u", i2 = parseInt(o[2]), n = parseInt(o[3]);
      }
    } else if (t) {
      const o = (h2, p, b) => t[h2] == null ? b : (typeof t[h2] !== p && Ht.throwArgumentError("invalid fixed format (" + h2 + " not " + p + ")", "format." + h2, t[h2]), t[h2]);
      r2 = o("signed", "boolean", r2), i2 = o("width", "number", i2), n = o("decimals", "number", n);
    }
    return i2 % 8 && Ht.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i2), n > 80 && Ht.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new dr(mr, r2, i2, n);
  }
}
class Ut {
  constructor(t, r2, i2, n) {
    t !== mr && Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n, this._hex = r2, this._value = i2, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i2 = be(t._value, t.format.decimals);
    return Ut.fromValue(r2.add(i2), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i2 = be(t._value, t.format.decimals);
    return Ut.fromValue(r2.sub(i2), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i2 = be(t._value, t.format.decimals);
    return Ut.fromValue(r2.mul(i2).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i2 = be(t._value, t.format.decimals);
    return Ut.fromValue(r2.mul(this.format._multiplier).div(i2), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut.from(t[0], this.format);
    const i2 = !t[1].match(/^(0*)$/);
    return this.isNegative() && i2 && (r2 = r2.subUnsafe(Wn.toFormat(r2.format))), r2;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut.from(t[0], this.format);
    const i2 = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i2 && (r2 = r2.addUnsafe(Wn.toFormat(r2.format))), r2;
  }
  round(t) {
    t == null && (t = 0);
    const r2 = this.toString().split(".");
    if (r2.length === 1 && r2.push("0"), (t < 0 || t > 80 || t % 1) && Ht.throwArgumentError("invalid decimal count", "decimals", t), r2[1].length <= t) return this;
    const i2 = Ut.from("1" + gr.substring(0, t), this.format), n = O0.toFormat(this.format);
    return this.mulUnsafe(i2).addUnsafe(n).floor().divUnsafe(i2);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null) return this._hex;
    t % 8 && Ht.throwArgumentError("invalid byte width", "width", t);
    const r2 = V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return oe(r2, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return Ut.fromString(this._value, t);
  }
  static fromValue(t, r2, i2) {
    return i2 == null && r2 != null && !C0(r2) && (i2 = r2, r2 = null), r2 == null && (r2 = 0), i2 == null && (i2 = "fixed"), Ut.fromString(Mi(t, r2), dr.from(i2));
  }
  static fromString(t, r2) {
    r2 == null && (r2 = "fixed");
    const i2 = dr.from(r2), n = be(t, i2.decimals);
    !i2.signed && n.lt(Gn) && Vn("unsigned value cannot be negative", "overflow", "value", t);
    let o = null;
    i2.signed ? o = n.toTwos(i2.width).toHexString() : (o = n.toHexString(), o = oe(o, i2.width / 8));
    const h2 = Mi(n, i2.decimals);
    return new Ut(mr, o, h2, i2);
  }
  static fromBytes(t, r2) {
    r2 == null && (r2 = "fixed");
    const i2 = dr.from(r2);
    if (Ot(t).length > i2.width / 8) throw new Error("overflow");
    let n = V.from(t);
    i2.signed && (n = n.fromTwos(i2.width));
    const o = n.toTwos((i2.signed ? 0 : 1) + i2.width).toHexString(), h2 = Mi(n, i2.decimals);
    return new Ut(mr, o, h2, i2);
  }
  static from(t, r2) {
    if (typeof t == "string") return Ut.fromString(t, r2);
    if (ir(t)) return Ut.fromBytes(t, r2);
    try {
      return Ut.fromValue(t, 0, r2);
    } catch (i2) {
      if (i2.code !== L.errors.INVALID_ARGUMENT) throw i2;
    }
    return Ht.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
}
const Wn = Ut.from(1), O0 = Ut.from("0.5");
var Or;
(function(e) {
  e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Or || (Or = {}));
var nr;
(function(e) {
  e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(nr || (nr = {}));
function T0(e) {
  if (e.length % 4 !== 0) throw new Error("bad data");
  let t = [];
  for (let r2 = 0; r2 < e.length; r2 += 4) t.push(parseInt(e.substring(r2, r2 + 4), 16));
  return t;
}
function Si(e, t) {
  t || (t = function(n) {
    return [parseInt(n, 16)];
  });
  let r2 = 0, i2 = {};
  return e.split(",").forEach((n) => {
    let o = n.split(":");
    r2 += parseInt(o[0], 16), i2[r2] = t(o[1]);
  }), i2;
}
function $n(e) {
  let t = 0;
  return e.split(",").map((r2) => {
    let i2 = r2.split("-");
    i2.length === 1 ? i2[1] = "0" : i2[1] === "" && (i2[1] = "1");
    let n = t + parseInt(i2[0], 16);
    return t = parseInt(i2[1], 16), { l: n, h: t };
  });
}
$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)), Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0), $n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function U0(e) {
  e = atob(e);
  const t = [];
  for (let r2 = 0; r2 < e.length; r2++) t.push(e.charCodeAt(r2));
  return Ot(t);
}
function ef(e, t) {
  t == null && (t = 1);
  const r2 = [], i2 = r2.forEach, n = function(o, h2) {
    i2.call(o, function(p) {
      h2 > 0 && Array.isArray(p) ? n(p, h2 - 1) : r2.push(p);
    });
  };
  return n(e, t), r2;
}
function k0(e) {
  const t = {};
  for (let r2 = 0; r2 < e.length; r2++) {
    const i2 = e[r2];
    t[i2[0]] = i2[1];
  }
  return t;
}
function q0(e) {
  let t = 0;
  function r2() {
    return e[t++] << 8 | e[t++];
  }
  let i2 = r2(), n = 1, o = [0, 1];
  for (let H = 1; H < i2; H++) o.push(n += r2());
  let h2 = r2(), p = t;
  t += h2;
  let b = 0, m = 0;
  function w() {
    return b == 0 && (m = m << 8 | e[t++], b = 8), m >> --b & 1;
  }
  const y = 31, S = Math.pow(2, y), I = S >>> 1, N = I >> 1, C = S - 1;
  let F = 0;
  for (let H = 0; H < y; H++) F = F << 1 | w();
  let U = [], J = 0, Bt = S;
  for (; ; ) {
    let H = Math.floor(((F - J + 1) * n - 1) / Bt), z = 0, Pt = i2;
    for (; Pt - z > 1; ) {
      let Yt = z + Pt >>> 1;
      H < o[Yt] ? Pt = Yt : z = Yt;
    }
    if (z == 0) break;
    U.push(z);
    let W = J + Math.floor(Bt * o[z] / n), Rt = J + Math.floor(Bt * o[z + 1] / n) - 1;
    for (; !((W ^ Rt) & I); ) F = F << 1 & C | w(), W = W << 1 & C, Rt = Rt << 1 & C | 1;
    for (; W & ~Rt & N; ) F = F & I | F << 1 & C >>> 1 | w(), W = W << 1 ^ I, Rt = (Rt ^ I) << 1 | I | 1;
    J = W, Bt = 1 + Rt - W;
  }
  let G = i2 - 4;
  return U.map((H) => {
    switch (H - G) {
      case 3:
        return G + 65792 + (e[p++] << 16 | e[p++] << 8 | e[p++]);
      case 2:
        return G + 256 + (e[p++] << 8 | e[p++]);
      case 1:
        return G + e[p++];
      default:
        return H - 1;
    }
  });
}
function K0(e) {
  let t = 0;
  return () => e[t++];
}
function H0(e) {
  return K0(q0(e));
}
function z0(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function L0(e, t) {
  let r2 = Array(e);
  for (let i2 = 0; i2 < e; i2++) r2[i2] = 1 + t();
  return r2;
}
function rf(e, t) {
  let r2 = Array(e);
  for (let i2 = 0, n = -1; i2 < e; i2++) r2[i2] = n += 1 + t();
  return r2;
}
function j0(e, t) {
  let r2 = Array(e);
  for (let i2 = 0, n = 0; i2 < e; i2++) r2[i2] = n += z0(t());
  return r2;
}
function Pr(e, t) {
  let r2 = rf(e(), e), i2 = e(), n = rf(i2, e), o = L0(i2, e);
  for (let h2 = 0; h2 < i2; h2++) for (let p = 0; p < o[h2]; p++) r2.push(n[h2] + p);
  return t ? r2.map((h2) => t[h2]) : r2;
}
function Q0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(G0(r2, e));
  }
  for (; ; ) {
    let r2 = e() - 1;
    if (r2 < 0) break;
    t.push(Y0(r2, e));
  }
  return k0(ef(t));
}
function J0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0) break;
    t.push(r2);
  }
  return t;
}
function nf(e, t, r2) {
  let i2 = Array(e).fill(void 0).map(() => []);
  for (let n = 0; n < t; n++) j0(e, r2).forEach((o, h2) => i2[h2].push(o));
  return i2;
}
function G0(e, t) {
  let r2 = 1 + t(), i2 = t(), n = J0(t), o = nf(n.length, 1 + e, t);
  return ef(o.map((h2, p) => {
    const b = h2[0], m = h2.slice(1);
    return Array(n[p]).fill(void 0).map((w, y) => {
      let S = y * i2;
      return [b + y * r2, m.map((I) => I + S)];
    });
  }));
}
function Y0(e, t) {
  let r2 = 1 + t();
  return nf(r2, 1 + e, t).map((n) => [n[0], n.slice(1)]);
}
function V0(e) {
  let t = Pr(e).sort((i2, n) => i2 - n);
  return r2();
  function r2() {
    let i2 = [];
    for (; ; ) {
      let m = Pr(e, t);
      if (m.length == 0) break;
      i2.push({ set: new Set(m), node: r2() });
    }
    i2.sort((m, w) => w.set.size - m.set.size);
    let n = e(), o = n % 3;
    n = n / 3 | 0;
    let h2 = !!(n & 1);
    n >>= 1;
    let p = n == 1, b = n == 2;
    return { branches: i2, valid: o, fe0f: h2, save: p, check: b };
  }
}
function W0() {
  return H0(U0("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"));
}
const Dr = W0();
new Set(Pr(Dr)), new Set(Pr(Dr)), Q0(Dr), V0(Dr);
const X0 = new Uint8Array(32);
X0.fill(0);
const os = new Uint8Array(32);
os.fill(0), V.from(-1);
const ss = V.from(0), as = V.from(1);
V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(as.toHexString(), 32), oe(ss.toHexString(), 32);
var se = {}, Q = {}, yr = af;
function af(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
af.equal = function(t, r2, i2) {
  if (t != r2) throw new Error(i2 || "Assertion failed: " + t + " != " + r2);
};
var Ii = { exports: {} };
typeof Object.create == "function" ? Ii.exports = function(t, r2) {
  r2 && (t.super_ = r2, t.prototype = Object.create(r2.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Ii.exports = function(t, r2) {
  if (r2) {
    t.super_ = r2;
    var i2 = function() {
    };
    i2.prototype = r2.prototype, t.prototype = new i2(), t.prototype.constructor = t;
  }
};
var us = yr, hs = Ii.exports;
Q.inherits = hs;
function cs(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? false : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function ls(e, t) {
  if (Array.isArray(e)) return e.slice();
  if (!e) return [];
  var r2 = [];
  if (typeof e == "string") if (t) {
    if (t === "hex") for (e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r2.push(parseInt(e[n] + e[n + 1], 16));
  } else for (var i2 = 0, n = 0; n < e.length; n++) {
    var o = e.charCodeAt(n);
    o < 128 ? r2[i2++] = o : o < 2048 ? (r2[i2++] = o >> 6 | 192, r2[i2++] = o & 63 | 128) : cs(e, n) ? (o = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++n) & 1023), r2[i2++] = o >> 18 | 240, r2[i2++] = o >> 12 & 63 | 128, r2[i2++] = o >> 6 & 63 | 128, r2[i2++] = o & 63 | 128) : (r2[i2++] = o >> 12 | 224, r2[i2++] = o >> 6 & 63 | 128, r2[i2++] = o & 63 | 128);
  }
  else for (n = 0; n < e.length; n++) r2[n] = e[n] | 0;
  return r2;
}
Q.toArray = ls;
function ds(e) {
  for (var t = "", r2 = 0; r2 < e.length; r2++) t += hf(e[r2].toString(16));
  return t;
}
Q.toHex = ds;
function uf(e) {
  var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
  return t >>> 0;
}
Q.htonl = uf;
function ps(e, t) {
  for (var r2 = "", i2 = 0; i2 < e.length; i2++) {
    var n = e[i2];
    t === "little" && (n = uf(n)), r2 += cf(n.toString(16));
  }
  return r2;
}
Q.toHex32 = ps;
function hf(e) {
  return e.length === 1 ? "0" + e : e;
}
Q.zero2 = hf;
function cf(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q.zero8 = cf;
function vs(e, t, r2, i2) {
  var n = r2 - t;
  us(n % 4 === 0);
  for (var o = new Array(n / 4), h2 = 0, p = t; h2 < o.length; h2++, p += 4) {
    var b;
    i2 === "big" ? b = e[p] << 24 | e[p + 1] << 16 | e[p + 2] << 8 | e[p + 3] : b = e[p + 3] << 24 | e[p + 2] << 16 | e[p + 1] << 8 | e[p], o[h2] = b >>> 0;
  }
  return o;
}
Q.join32 = vs;
function ms(e, t) {
  for (var r2 = new Array(e.length * 4), i2 = 0, n = 0; i2 < e.length; i2++, n += 4) {
    var o = e[i2];
    t === "big" ? (r2[n] = o >>> 24, r2[n + 1] = o >>> 16 & 255, r2[n + 2] = o >>> 8 & 255, r2[n + 3] = o & 255) : (r2[n + 3] = o >>> 24, r2[n + 2] = o >>> 16 & 255, r2[n + 1] = o >>> 8 & 255, r2[n] = o & 255);
  }
  return r2;
}
Q.split32 = ms;
function gs(e, t) {
  return e >>> t | e << 32 - t;
}
Q.rotr32 = gs;
function As(e, t) {
  return e << t | e >>> 32 - t;
}
Q.rotl32 = As;
function bs(e, t) {
  return e + t >>> 0;
}
Q.sum32 = bs;
function ys(e, t, r2) {
  return e + t + r2 >>> 0;
}
Q.sum32_3 = ys;
function ws(e, t, r2, i2) {
  return e + t + r2 + i2 >>> 0;
}
Q.sum32_4 = ws;
function xs(e, t, r2, i2, n) {
  return e + t + r2 + i2 + n >>> 0;
}
Q.sum32_5 = xs;
function Ms(e, t, r2, i2) {
  var n = e[t], o = e[t + 1], h2 = i2 + o >>> 0, p = (h2 < i2 ? 1 : 0) + r2 + n;
  e[t] = p >>> 0, e[t + 1] = h2;
}
Q.sum64 = Ms;
function Es(e, t, r2, i2) {
  var n = t + i2 >>> 0, o = (n < t ? 1 : 0) + e + r2;
  return o >>> 0;
}
Q.sum64_hi = Es;
function Ss(e, t, r2, i2) {
  var n = t + i2;
  return n >>> 0;
}
Q.sum64_lo = Ss;
function Ns(e, t, r2, i2, n, o, h2, p) {
  var b = 0, m = t;
  m = m + i2 >>> 0, b += m < t ? 1 : 0, m = m + o >>> 0, b += m < o ? 1 : 0, m = m + p >>> 0, b += m < p ? 1 : 0;
  var w = e + r2 + n + h2 + b;
  return w >>> 0;
}
Q.sum64_4_hi = Ns;
function Is(e, t, r2, i2, n, o, h2, p) {
  var b = t + i2 + o + p;
  return b >>> 0;
}
Q.sum64_4_lo = Is;
function _s(e, t, r2, i2, n, o, h2, p, b, m) {
  var w = 0, y = t;
  y = y + i2 >>> 0, w += y < t ? 1 : 0, y = y + o >>> 0, w += y < o ? 1 : 0, y = y + p >>> 0, w += y < p ? 1 : 0, y = y + m >>> 0, w += y < m ? 1 : 0;
  var S = e + r2 + n + h2 + b + w;
  return S >>> 0;
}
Q.sum64_5_hi = _s;
function Bs(e, t, r2, i2, n, o, h2, p, b, m) {
  var w = t + i2 + o + p + m;
  return w >>> 0;
}
Q.sum64_5_lo = Bs;
function Cs(e, t, r2) {
  var i2 = t << 32 - r2 | e >>> r2;
  return i2 >>> 0;
}
Q.rotr64_hi = Cs;
function Rs(e, t, r2) {
  var i2 = e << 32 - r2 | t >>> r2;
  return i2 >>> 0;
}
Q.rotr64_lo = Rs;
function Os(e, t, r2) {
  return e >>> r2;
}
Q.shr64_hi = Os;
function Ps(e, t, r2) {
  var i2 = e << 32 - r2 | t >>> r2;
  return i2 >>> 0;
}
Q.shr64_lo = Ps;
var fr = {}, lf = Q, Ds = yr;
function Fr() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr.BlockHash = Fr, Fr.prototype.update = function(t, r2) {
  if (t = lf.toArray(t, r2), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i2 = t.length % this._delta8;
    this.pending = t.slice(t.length - i2, t.length), this.pending.length === 0 && (this.pending = null), t = lf.join32(t, 0, t.length - i2, this.endian);
    for (var n = 0; n < t.length; n += this._delta32) this._update(t, n, n + this._delta32);
  }
  return this;
}, Fr.prototype.digest = function(t) {
  return this.update(this._pad()), Ds(this.pending === null), this._digest(t);
}, Fr.prototype._pad = function() {
  var t = this.pendingTotal, r2 = this._delta8, i2 = r2 - (t + this.padLength) % r2, n = new Array(i2 + this.padLength);
  n[0] = 128;
  for (var o = 1; o < i2; o++) n[o] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var h2 = 8; h2 < this.padLength; h2++) n[o++] = 0;
    n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = t >>> 24 & 255, n[o++] = t >>> 16 & 255, n[o++] = t >>> 8 & 255, n[o++] = t & 255;
  } else for (n[o++] = t & 255, n[o++] = t >>> 8 & 255, n[o++] = t >>> 16 & 255, n[o++] = t >>> 24 & 255, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, h2 = 8; h2 < this.padLength; h2++) n[o++] = 0;
  return n;
};
var or = {}, ae = {}, Fs = Q, ue = Fs.rotr32;
function Ts(e, t, r2, i2) {
  if (e === 0) return df(t, r2, i2);
  if (e === 1 || e === 3) return vf(t, r2, i2);
  if (e === 2) return pf(t, r2, i2);
}
ae.ft_1 = Ts;
function df(e, t, r2) {
  return e & t ^ ~e & r2;
}
ae.ch32 = df;
function pf(e, t, r2) {
  return e & t ^ e & r2 ^ t & r2;
}
ae.maj32 = pf;
function vf(e, t, r2) {
  return e ^ t ^ r2;
}
ae.p32 = vf;
function Us(e) {
  return ue(e, 2) ^ ue(e, 13) ^ ue(e, 22);
}
ae.s0_256 = Us;
function ks(e) {
  return ue(e, 6) ^ ue(e, 11) ^ ue(e, 25);
}
ae.s1_256 = ks;
function qs(e) {
  return ue(e, 7) ^ ue(e, 18) ^ e >>> 3;
}
ae.g0_256 = qs;
function Ks(e) {
  return ue(e, 17) ^ ue(e, 19) ^ e >>> 10;
}
ae.g1_256 = Ks;
var sr = Q, Hs = fr, zs = ae, _i = sr.rotl32, wr = sr.sum32, Ls = sr.sum32_5, js = zs.ft_1, mf = Hs.BlockHash, Qs = [1518500249, 1859775393, 2400959708, 3395469782];
function he() {
  if (!(this instanceof he)) return new he();
  mf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
sr.inherits(he, mf);
var Js = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r2) {
  for (var i2 = this.W, n = 0; n < 16; n++) i2[n] = t[r2 + n];
  for (; n < i2.length; n++) i2[n] = _i(i2[n - 3] ^ i2[n - 8] ^ i2[n - 14] ^ i2[n - 16], 1);
  var o = this.h[0], h2 = this.h[1], p = this.h[2], b = this.h[3], m = this.h[4];
  for (n = 0; n < i2.length; n++) {
    var w = ~~(n / 20), y = Ls(_i(o, 5), js(w, h2, p, b), m, i2[n], Qs[w]);
    m = b, b = p, p = _i(h2, 30), h2 = o, o = y;
  }
  this.h[0] = wr(this.h[0], o), this.h[1] = wr(this.h[1], h2), this.h[2] = wr(this.h[2], p), this.h[3] = wr(this.h[3], b), this.h[4] = wr(this.h[4], m);
}, he.prototype._digest = function(t) {
  return t === "hex" ? sr.toHex32(this.h, "big") : sr.split32(this.h, "big");
};
var ar = Q, Gs = fr, ur = ae, Ys = yr, ie = ar.sum32, Vs = ar.sum32_4, Ws = ar.sum32_5, Xs = ur.ch32, Zs = ur.maj32, $s = ur.s0_256, ta = ur.s1_256, ea = ur.g0_256, ra = ur.g1_256, gf = Gs.BlockHash, ia = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce() {
  if (!(this instanceof ce)) return new ce();
  gf.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ia, this.W = new Array(64);
}
ar.inherits(ce, gf);
var Af = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r2) {
  for (var i2 = this.W, n = 0; n < 16; n++) i2[n] = t[r2 + n];
  for (; n < i2.length; n++) i2[n] = Vs(ra(i2[n - 2]), i2[n - 7], ea(i2[n - 15]), i2[n - 16]);
  var o = this.h[0], h2 = this.h[1], p = this.h[2], b = this.h[3], m = this.h[4], w = this.h[5], y = this.h[6], S = this.h[7];
  for (Ys(this.k.length === i2.length), n = 0; n < i2.length; n++) {
    var I = Ws(S, ta(m), Xs(m, w, y), this.k[n], i2[n]), N = ie($s(o), Zs(o, h2, p));
    S = y, y = w, w = m, m = ie(b, I), b = p, p = h2, h2 = o, o = ie(I, N);
  }
  this.h[0] = ie(this.h[0], o), this.h[1] = ie(this.h[1], h2), this.h[2] = ie(this.h[2], p), this.h[3] = ie(this.h[3], b), this.h[4] = ie(this.h[4], m), this.h[5] = ie(this.h[5], w), this.h[6] = ie(this.h[6], y), this.h[7] = ie(this.h[7], S);
}, ce.prototype._digest = function(t) {
  return t === "hex" ? ar.toHex32(this.h, "big") : ar.split32(this.h, "big");
};
var Bi = Q, bf = Af;
function ye() {
  if (!(this instanceof ye)) return new ye();
  bf.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Bi.inherits(ye, bf);
var na = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
  return t === "hex" ? Bi.toHex32(this.h.slice(0, 7), "big") : Bi.split32(this.h.slice(0, 7), "big");
};
var jt = Q, fa = fr, oa = yr, le = jt.rotr64_hi, de = jt.rotr64_lo, yf = jt.shr64_hi, wf = jt.shr64_lo, Be = jt.sum64, Ci = jt.sum64_hi, Ri = jt.sum64_lo, sa = jt.sum64_4_hi, aa = jt.sum64_4_lo, ua = jt.sum64_5_hi, ha = jt.sum64_5_lo, xf = fa.BlockHash, ca = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne() {
  if (!(this instanceof ne)) return new ne();
  xf.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ca, this.W = new Array(160);
}
jt.inherits(ne, xf);
var Mf = ne;
ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t, r2) {
  for (var i2 = this.W, n = 0; n < 32; n++) i2[n] = t[r2 + n];
  for (; n < i2.length; n += 2) {
    var o = xa(i2[n - 4], i2[n - 3]), h2 = Ma(i2[n - 4], i2[n - 3]), p = i2[n - 14], b = i2[n - 13], m = ya(i2[n - 30], i2[n - 29]), w = wa(i2[n - 30], i2[n - 29]), y = i2[n - 32], S = i2[n - 31];
    i2[n] = sa(o, h2, p, b, m, w, y, S), i2[n + 1] = aa(o, h2, p, b, m, w, y, S);
  }
}, ne.prototype._update = function(t, r2) {
  this._prepareBlock(t, r2);
  var i2 = this.W, n = this.h[0], o = this.h[1], h2 = this.h[2], p = this.h[3], b = this.h[4], m = this.h[5], w = this.h[6], y = this.h[7], S = this.h[8], I = this.h[9], N = this.h[10], C = this.h[11], F = this.h[12], U = this.h[13], J = this.h[14], Bt = this.h[15];
  oa(this.k.length === i2.length);
  for (var G = 0; G < i2.length; G += 2) {
    var H = J, z = Bt, Pt = Aa(S, I), W = ba(S, I), Rt = la(S, I, N, C, F), Yt = da(S, I, N, C, F, U), Y = this.k[G], Vt = this.k[G + 1], A = i2[G], f = i2[G + 1], a = ua(H, z, Pt, W, Rt, Yt, Y, Vt, A, f), c = ha(H, z, Pt, W, Rt, Yt, Y, Vt, A, f);
    H = ma(n, o), z = ga(n, o), Pt = pa(n, o, h2, p, b), W = va(n, o, h2, p, b, m);
    var d = Ci(H, z, Pt, W), g = Ri(H, z, Pt, W);
    J = F, Bt = U, F = N, U = C, N = S, C = I, S = Ci(w, y, a, c), I = Ri(y, y, a, c), w = b, y = m, b = h2, m = p, h2 = n, p = o, n = Ci(a, c, d, g), o = Ri(a, c, d, g);
  }
  Be(this.h, 0, n, o), Be(this.h, 2, h2, p), Be(this.h, 4, b, m), Be(this.h, 6, w, y), Be(this.h, 8, S, I), Be(this.h, 10, N, C), Be(this.h, 12, F, U), Be(this.h, 14, J, Bt);
}, ne.prototype._digest = function(t) {
  return t === "hex" ? jt.toHex32(this.h, "big") : jt.split32(this.h, "big");
};
function la(e, t, r2, i2, n) {
  var o = e & r2 ^ ~e & n;
  return o < 0 && (o += 4294967296), o;
}
function da(e, t, r2, i2, n, o) {
  var h2 = t & i2 ^ ~t & o;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function pa(e, t, r2, i2, n) {
  var o = e & r2 ^ e & n ^ r2 & n;
  return o < 0 && (o += 4294967296), o;
}
function va(e, t, r2, i2, n, o) {
  var h2 = t & i2 ^ t & o ^ i2 & o;
  return h2 < 0 && (h2 += 4294967296), h2;
}
function ma(e, t) {
  var r2 = le(e, t, 28), i2 = le(t, e, 2), n = le(t, e, 7), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
function ga(e, t) {
  var r2 = de(e, t, 28), i2 = de(t, e, 2), n = de(t, e, 7), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
function Aa(e, t) {
  var r2 = le(e, t, 14), i2 = le(e, t, 18), n = le(t, e, 9), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
function ba(e, t) {
  var r2 = de(e, t, 14), i2 = de(e, t, 18), n = de(t, e, 9), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
function ya(e, t) {
  var r2 = le(e, t, 1), i2 = le(e, t, 8), n = yf(e, t, 7), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
function wa(e, t) {
  var r2 = de(e, t, 1), i2 = de(e, t, 8), n = wf(e, t, 7), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
function xa(e, t) {
  var r2 = le(e, t, 19), i2 = le(t, e, 29), n = yf(e, t, 6), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
function Ma(e, t) {
  var r2 = de(e, t, 19), i2 = de(t, e, 29), n = wf(e, t, 6), o = r2 ^ i2 ^ n;
  return o < 0 && (o += 4294967296), o;
}
var Oi = Q, Ef = Mf;
function we() {
  if (!(this instanceof we)) return new we();
  Ef.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Oi.inherits(we, Ef);
var Ea = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
  return t === "hex" ? Oi.toHex32(this.h.slice(0, 12), "big") : Oi.split32(this.h.slice(0, 12), "big");
}, or.sha1 = Js, or.sha224 = na, or.sha256 = Af, or.sha384 = Ea, or.sha512 = Mf;
var Sf = {}, Xe = Q, Sa = fr, Tr = Xe.rotl32, Nf = Xe.sum32, xr = Xe.sum32_3, If = Xe.sum32_4, _f = Sa.BlockHash;
function pe() {
  if (!(this instanceof pe)) return new pe();
  _f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe.inherits(pe, _f), Sf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, r2) {
  for (var i2 = this.h[0], n = this.h[1], o = this.h[2], h2 = this.h[3], p = this.h[4], b = i2, m = n, w = o, y = h2, S = p, I = 0; I < 80; I++) {
    var N = Nf(Tr(If(i2, Bf(I, n, o, h2), t[_a[I] + r2], Na(I)), Ca[I]), p);
    i2 = p, p = h2, h2 = Tr(o, 10), o = n, n = N, N = Nf(Tr(If(b, Bf(79 - I, m, w, y), t[Ba[I] + r2], Ia(I)), Ra[I]), S), b = S, S = y, y = Tr(w, 10), w = m, m = N;
  }
  N = xr(this.h[1], o, y), this.h[1] = xr(this.h[2], h2, S), this.h[2] = xr(this.h[3], p, b), this.h[3] = xr(this.h[4], i2, m), this.h[4] = xr(this.h[0], n, w), this.h[0] = N;
}, pe.prototype._digest = function(t) {
  return t === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Bf(e, t, r2, i2) {
  return e <= 15 ? t ^ r2 ^ i2 : e <= 31 ? t & r2 | ~t & i2 : e <= 47 ? (t | ~r2) ^ i2 : e <= 63 ? t & i2 | r2 & ~i2 : t ^ (r2 | ~i2);
}
function Na(e) {
  return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function Ia(e) {
  return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var _a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], Ba = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], Ca = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], Ra = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], Oa = Q, Pa = yr;
function hr(e, t, r2) {
  if (!(this instanceof hr)) return new hr(e, t, r2);
  this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(Oa.toArray(t, r2));
}
var Da = hr;
hr.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa(t.length <= this.blockSize);
  for (var r2 = t.length; r2 < this.blockSize; r2++) t.push(0);
  for (r2 = 0; r2 < t.length; r2++) t[r2] ^= 54;
  for (this.inner = new this.Hash().update(t), r2 = 0; r2 < t.length; r2++) t[r2] ^= 106;
  this.outer = new this.Hash().update(t);
}, hr.prototype.update = function(t, r2) {
  return this.inner.update(t, r2), this;
}, hr.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
  var t = e;
  t.utils = Q, t.common = fr, t.sha = or, t.ripemd = Sf, t.hmac = Da, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function cr(e, t, r2) {
  return r2 = { path: t, exports: {}, require: function(i2, n) {
    return Fa(i2, n ?? r2.path);
  } }, e(r2, r2.exports), r2.exports;
}
function Fa() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi = Cf;
function Cf(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
Cf.equal = function(t, r2, i2) {
  if (t != r2) throw new Error(i2 || "Assertion failed: " + t + " != " + r2);
};
var fe = cr(function(e, t) {
  var r2 = t;
  function i2(h2, p) {
    if (Array.isArray(h2)) return h2.slice();
    if (!h2) return [];
    var b = [];
    if (typeof h2 != "string") {
      for (var m = 0; m < h2.length; m++) b[m] = h2[m] | 0;
      return b;
    }
    if (p === "hex") {
      h2 = h2.replace(/[^a-z0-9]+/ig, ""), h2.length % 2 !== 0 && (h2 = "0" + h2);
      for (var m = 0; m < h2.length; m += 2) b.push(parseInt(h2[m] + h2[m + 1], 16));
    } else for (var m = 0; m < h2.length; m++) {
      var w = h2.charCodeAt(m), y = w >> 8, S = w & 255;
      y ? b.push(y, S) : b.push(S);
    }
    return b;
  }
  r2.toArray = i2;
  function n(h2) {
    return h2.length === 1 ? "0" + h2 : h2;
  }
  r2.zero2 = n;
  function o(h2) {
    for (var p = "", b = 0; b < h2.length; b++) p += n(h2[b].toString(16));
    return p;
  }
  r2.toHex = o, r2.encode = function(p, b) {
    return b === "hex" ? o(p) : p;
  };
}), Jt = cr(function(e, t) {
  var r2 = t;
  r2.assert = Pi, r2.toArray = fe.toArray, r2.zero2 = fe.zero2, r2.toHex = fe.toHex, r2.encode = fe.encode;
  function i2(b, m, w) {
    var y = new Array(Math.max(b.bitLength(), w) + 1);
    y.fill(0);
    for (var S = 1 << m + 1, I = b.clone(), N = 0; N < y.length; N++) {
      var C, F = I.andln(S - 1);
      I.isOdd() ? (F > (S >> 1) - 1 ? C = (S >> 1) - F : C = F, I.isubn(C)) : C = 0, y[N] = C, I.iushrn(1);
    }
    return y;
  }
  r2.getNAF = i2;
  function n(b, m) {
    var w = [[], []];
    b = b.clone(), m = m.clone();
    for (var y = 0, S = 0, I; b.cmpn(-y) > 0 || m.cmpn(-S) > 0; ) {
      var N = b.andln(3) + y & 3, C = m.andln(3) + S & 3;
      N === 3 && (N = -1), C === 3 && (C = -1);
      var F;
      N & 1 ? (I = b.andln(7) + y & 7, (I === 3 || I === 5) && C === 2 ? F = -N : F = N) : F = 0, w[0].push(F);
      var U;
      C & 1 ? (I = m.andln(7) + S & 7, (I === 3 || I === 5) && N === 2 ? U = -C : U = C) : U = 0, w[1].push(U), 2 * y === F + 1 && (y = 1 - y), 2 * S === U + 1 && (S = 1 - S), b.iushrn(1), m.iushrn(1);
    }
    return w;
  }
  r2.getJSF = n;
  function o(b, m, w) {
    var y = "_" + m;
    b.prototype[m] = function() {
      return this[y] !== void 0 ? this[y] : this[y] = w.call(this);
    };
  }
  r2.cachedProperty = o;
  function h2(b) {
    return typeof b == "string" ? r2.toArray(b, "hex") : b;
  }
  r2.parseBytes = h2;
  function p(b) {
    return new K(b, "hex", "le");
  }
  r2.intFromLE = p;
}), Ur = Jt.getNAF, Ta = Jt.getJSF, kr = Jt.assert;
function Ce(e, t) {
  this.type = e, this.p = new K(t.p, 16), this.red = t.prime ? K.red(t.prime) : K.mont(this.p), this.zero = new K(0).toRed(this.red), this.one = new K(1).toRed(this.red), this.two = new K(2).toRed(this.red), this.n = t.n && new K(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r2 = this.n && this.p.div(this.n);
  !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze = Ce;
Ce.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r2) {
  kr(t.precomputed);
  var i2 = t._getDoubles(), n = Ur(r2, 1, this._bitLength), o = (1 << i2.step + 1) - (i2.step % 2 === 0 ? 2 : 1);
  o /= 3;
  var h2 = [], p, b;
  for (p = 0; p < n.length; p += i2.step) {
    b = 0;
    for (var m = p + i2.step - 1; m >= p; m--) b = (b << 1) + n[m];
    h2.push(b);
  }
  for (var w = this.jpoint(null, null, null), y = this.jpoint(null, null, null), S = o; S > 0; S--) {
    for (p = 0; p < h2.length; p++) b = h2[p], b === S ? y = y.mixedAdd(i2.points[p]) : b === -S && (y = y.mixedAdd(i2.points[p].neg()));
    w = w.add(y);
  }
  return w.toP();
}, Ce.prototype._wnafMul = function(t, r2) {
  var i2 = 4, n = t._getNAFPoints(i2);
  i2 = n.wnd;
  for (var o = n.points, h2 = Ur(r2, i2, this._bitLength), p = this.jpoint(null, null, null), b = h2.length - 1; b >= 0; b--) {
    for (var m = 0; b >= 0 && h2[b] === 0; b--) m++;
    if (b >= 0 && m++, p = p.dblp(m), b < 0) break;
    var w = h2[b];
    kr(w !== 0), t.type === "affine" ? w > 0 ? p = p.mixedAdd(o[w - 1 >> 1]) : p = p.mixedAdd(o[-w - 1 >> 1].neg()) : w > 0 ? p = p.add(o[w - 1 >> 1]) : p = p.add(o[-w - 1 >> 1].neg());
  }
  return t.type === "affine" ? p.toP() : p;
}, Ce.prototype._wnafMulAdd = function(t, r2, i2, n, o) {
  var h2 = this._wnafT1, p = this._wnafT2, b = this._wnafT3, m = 0, w, y, S;
  for (w = 0; w < n; w++) {
    S = r2[w];
    var I = S._getNAFPoints(t);
    h2[w] = I.wnd, p[w] = I.points;
  }
  for (w = n - 1; w >= 1; w -= 2) {
    var N = w - 1, C = w;
    if (h2[N] !== 1 || h2[C] !== 1) {
      b[N] = Ur(i2[N], h2[N], this._bitLength), b[C] = Ur(i2[C], h2[C], this._bitLength), m = Math.max(b[N].length, m), m = Math.max(b[C].length, m);
      continue;
    }
    var F = [r2[N], null, null, r2[C]];
    r2[N].y.cmp(r2[C].y) === 0 ? (F[1] = r2[N].add(r2[C]), F[2] = r2[N].toJ().mixedAdd(r2[C].neg())) : r2[N].y.cmp(r2[C].y.redNeg()) === 0 ? (F[1] = r2[N].toJ().mixedAdd(r2[C]), F[2] = r2[N].add(r2[C].neg())) : (F[1] = r2[N].toJ().mixedAdd(r2[C]), F[2] = r2[N].toJ().mixedAdd(r2[C].neg()));
    var U = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J = Ta(i2[N], i2[C]);
    for (m = Math.max(J[0].length, m), b[N] = new Array(m), b[C] = new Array(m), y = 0; y < m; y++) {
      var Bt = J[0][y] | 0, G = J[1][y] | 0;
      b[N][y] = U[(Bt + 1) * 3 + (G + 1)], b[C][y] = 0, p[N] = F;
    }
  }
  var H = this.jpoint(null, null, null), z = this._wnafT4;
  for (w = m; w >= 0; w--) {
    for (var Pt = 0; w >= 0; ) {
      var W = true;
      for (y = 0; y < n; y++) z[y] = b[y][w] | 0, z[y] !== 0 && (W = false);
      if (!W) break;
      Pt++, w--;
    }
    if (w >= 0 && Pt++, H = H.dblp(Pt), w < 0) break;
    for (y = 0; y < n; y++) {
      var Rt = z[y];
      Rt !== 0 && (Rt > 0 ? S = p[y][Rt - 1 >> 1] : Rt < 0 && (S = p[y][-Rt - 1 >> 1].neg()), S.type === "affine" ? H = H.mixedAdd(S) : H = H.add(S));
    }
  }
  for (w = 0; w < n; w++) p[w] = null;
  return o ? H : H.toP();
};
function Xt(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Xt, Xt.prototype.eq = function() {
  throw new Error("Not implemented");
}, Xt.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r2) {
  t = Jt.toArray(t, r2);
  var i2 = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i2) {
    t[0] === 6 ? kr(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr(t[t.length - 1] % 2 === 1);
    var n = this.point(t.slice(1, 1 + i2), t.slice(1 + i2, 1 + 2 * i2));
    return n;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i2) return this.pointFromX(t.slice(1, 1 + i2), t[0] === 3);
  throw new Error("Unknown point format");
}, Xt.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Xt.prototype._encode = function(t) {
  var r2 = this.curve.p.byteLength(), i2 = this.getX().toArray("be", r2);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i2) : [4].concat(i2, this.getY().toArray("be", r2));
}, Xt.prototype.encode = function(t, r2) {
  return Jt.encode(this._encode(r2), t);
}, Xt.prototype.precompute = function(t) {
  if (this.precomputed) return this;
  var r2 = { doubles: null, naf: null, beta: null };
  return r2.naf = this._getNAFPoints(8), r2.doubles = this._getDoubles(4, t), r2.beta = this._getBeta(), this.precomputed = r2, this;
}, Xt.prototype._hasDoubles = function(t) {
  if (!this.precomputed) return false;
  var r2 = this.precomputed.doubles;
  return r2 ? r2.points.length >= Math.ceil((t.bitLength() + 1) / r2.step) : false;
}, Xt.prototype._getDoubles = function(t, r2) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i2 = [this], n = this, o = 0; o < r2; o += t) {
    for (var h2 = 0; h2 < t; h2++) n = n.dbl();
    i2.push(n);
  }
  return { step: t, points: i2 };
}, Xt.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var r2 = [this], i2 = (1 << t) - 1, n = i2 === 1 ? null : this.dbl(), o = 1; o < i2; o++) r2[o] = r2[o - 1].add(n);
  return { wnd: t, points: r2 };
}, Xt.prototype._getBeta = function() {
  return null;
}, Xt.prototype.dblp = function(t) {
  for (var r2 = this, i2 = 0; i2 < t; i2++) r2 = r2.dbl();
  return r2;
};
var Di = cr(function(e) {
  typeof Object.create == "function" ? e.exports = function(r2, i2) {
    i2 && (r2.super_ = i2, r2.prototype = Object.create(i2.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }));
  } : e.exports = function(r2, i2) {
    if (i2) {
      r2.super_ = i2;
      var n = function() {
      };
      n.prototype = i2.prototype, r2.prototype = new n(), r2.prototype.constructor = r2;
    }
  };
}), Ua = Jt.assert;
function Zt(e) {
  Ze.call(this, "short", e), this.a = new K(e.a, 16).toRed(this.red), this.b = new K(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di(Zt, Ze);
var ka = Zt;
Zt.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r2, i2;
    if (t.beta) r2 = new K(t.beta, 16).toRed(this.red);
    else {
      var n = this._getEndoRoots(this.p);
      r2 = n[0].cmp(n[1]) < 0 ? n[0] : n[1], r2 = r2.toRed(this.red);
    }
    if (t.lambda) i2 = new K(t.lambda, 16);
    else {
      var o = this._getEndoRoots(this.n);
      this.g.mul(o[0]).x.cmp(this.g.x.redMul(r2)) === 0 ? i2 = o[0] : (i2 = o[1], Ua(this.g.mul(i2).x.cmp(this.g.x.redMul(r2)) === 0));
    }
    var h2;
    return t.basis ? h2 = t.basis.map(function(p) {
      return { a: new K(p.a, 16), b: new K(p.b, 16) };
    }) : h2 = this._getEndoBasis(i2), { beta: r2, lambda: i2, basis: h2 };
  }
}, Zt.prototype._getEndoRoots = function(t) {
  var r2 = t === this.p ? this.red : K.mont(t), i2 = new K(2).toRed(r2).redInvm(), n = i2.redNeg(), o = new K(3).toRed(r2).redNeg().redSqrt().redMul(i2), h2 = n.redAdd(o).fromRed(), p = n.redSub(o).fromRed();
  return [h2, p];
}, Zt.prototype._getEndoBasis = function(t) {
  for (var r2 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i2 = t, n = this.n.clone(), o = new K(1), h2 = new K(0), p = new K(0), b = new K(1), m, w, y, S, I, N, C, F = 0, U, J; i2.cmpn(0) !== 0; ) {
    var Bt = n.div(i2);
    U = n.sub(Bt.mul(i2)), J = p.sub(Bt.mul(o));
    var G = b.sub(Bt.mul(h2));
    if (!y && U.cmp(r2) < 0) m = C.neg(), w = o, y = U.neg(), S = J;
    else if (y && ++F === 2) break;
    C = U, n = i2, i2 = U, p = o, o = J, b = h2, h2 = G;
  }
  I = U.neg(), N = J;
  var H = y.sqr().add(S.sqr()), z = I.sqr().add(N.sqr());
  return z.cmp(H) >= 0 && (I = m, N = w), y.negative && (y = y.neg(), S = S.neg()), I.negative && (I = I.neg(), N = N.neg()), [{ a: y, b: S }, { a: I, b: N }];
}, Zt.prototype._endoSplit = function(t) {
  var r2 = this.endo.basis, i2 = r2[0], n = r2[1], o = n.b.mul(t).divRound(this.n), h2 = i2.b.neg().mul(t).divRound(this.n), p = o.mul(i2.a), b = h2.mul(n.a), m = o.mul(i2.b), w = h2.mul(n.b), y = t.sub(p).sub(b), S = m.add(w).neg();
  return { k1: y, k2: S };
}, Zt.prototype.pointFromX = function(t, r2) {
  t = new K(t, 16), t.red || (t = t.toRed(this.red));
  var i2 = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n = i2.redSqrt();
  if (n.redSqr().redSub(i2).cmp(this.zero) !== 0) throw new Error("invalid point");
  var o = n.fromRed().isOdd();
  return (r2 && !o || !r2 && o) && (n = n.redNeg()), this.point(t, n);
}, Zt.prototype.validate = function(t) {
  if (t.inf) return true;
  var r2 = t.x, i2 = t.y, n = this.a.redMul(r2), o = r2.redSqr().redMul(r2).redIAdd(n).redIAdd(this.b);
  return i2.redSqr().redISub(o).cmpn(0) === 0;
}, Zt.prototype._endoWnafMulAdd = function(t, r2, i2) {
  for (var n = this._endoWnafT1, o = this._endoWnafT2, h2 = 0; h2 < t.length; h2++) {
    var p = this._endoSplit(r2[h2]), b = t[h2], m = b._getBeta();
    p.k1.negative && (p.k1.ineg(), b = b.neg(true)), p.k2.negative && (p.k2.ineg(), m = m.neg(true)), n[h2 * 2] = b, n[h2 * 2 + 1] = m, o[h2 * 2] = p.k1, o[h2 * 2 + 1] = p.k2;
  }
  for (var w = this._wnafMulAdd(1, n, o, h2 * 2, i2), y = 0; y < h2 * 2; y++) n[y] = null, o[y] = null;
  return w;
};
function Ft(e, t, r2, i2) {
  Ze.BasePoint.call(this, e, "affine"), t === null && r2 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K(t, 16), this.y = new K(r2, 16), i2 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Di(Ft, Ze.BasePoint), Zt.prototype.point = function(t, r2, i2) {
  return new Ft(this, t, r2, i2);
}, Zt.prototype.pointFromJSON = function(t, r2) {
  return Ft.fromJSON(this, t, r2);
}, Ft.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta) return t.beta;
    var r2 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i2 = this.curve, n = function(o) {
        return i2.point(o.x.redMul(i2.endo.beta), o.y);
      };
      t.beta = r2, r2.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n) } };
    }
    return r2;
  }
}, Ft.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Ft.fromJSON = function(t, r2, i2) {
  typeof r2 == "string" && (r2 = JSON.parse(r2));
  var n = t.point(r2[0], r2[1], i2);
  if (!r2[2]) return n;
  function o(p) {
    return t.point(p[0], p[1], i2);
  }
  var h2 = r2[2];
  return n.precomputed = { beta: null, doubles: h2.doubles && { step: h2.doubles.step, points: [n].concat(h2.doubles.points.map(o)) }, naf: h2.naf && { wnd: h2.naf.wnd, points: [n].concat(h2.naf.points.map(o)) } }, n;
}, Ft.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
  return this.inf;
}, Ft.prototype.add = function(t) {
  if (this.inf) return t;
  if (t.inf) return this;
  if (this.eq(t)) return this.dbl();
  if (this.neg().eq(t)) return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
  var r2 = this.y.redSub(t.y);
  r2.cmpn(0) !== 0 && (r2 = r2.redMul(this.x.redSub(t.x).redInvm()));
  var i2 = r2.redSqr().redISub(this.x).redISub(t.x), n = r2.redMul(this.x.redSub(i2)).redISub(this.y);
  return this.curve.point(i2, n);
}, Ft.prototype.dbl = function() {
  if (this.inf) return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0) return this.curve.point(null, null);
  var r2 = this.curve.a, i2 = this.x.redSqr(), n = t.redInvm(), o = i2.redAdd(i2).redIAdd(i2).redIAdd(r2).redMul(n), h2 = o.redSqr().redISub(this.x.redAdd(this.x)), p = o.redMul(this.x.redSub(h2)).redISub(this.y);
  return this.curve.point(h2, p);
}, Ft.prototype.getX = function() {
  return this.x.fromRed();
}, Ft.prototype.getY = function() {
  return this.y.fromRed();
}, Ft.prototype.mul = function(t) {
  return t = new K(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Ft.prototype.mulAdd = function(t, r2, i2) {
  var n = [this, r2], o = [t, i2];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n, o) : this.curve._wnafMulAdd(1, n, o, 2);
}, Ft.prototype.jmulAdd = function(t, r2, i2) {
  var n = [this, r2], o = [t, i2];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n, o, true) : this.curve._wnafMulAdd(1, n, o, 2, true);
}, Ft.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft.prototype.neg = function(t) {
  if (this.inf) return this;
  var r2 = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i2 = this.precomputed, n = function(o) {
      return o.neg();
    };
    r2.precomputed = { naf: i2.naf && { wnd: i2.naf.wnd, points: i2.naf.points.map(n) }, doubles: i2.doubles && { step: i2.doubles.step, points: i2.doubles.points.map(n) } };
  }
  return r2;
}, Ft.prototype.toJ = function() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Tt(e, t, r2, i2) {
  Ze.BasePoint.call(this, e, "jacobian"), t === null && r2 === null && i2 === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K(0)) : (this.x = new K(t, 16), this.y = new K(r2, 16), this.z = new K(i2, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di(Tt, Ze.BasePoint), Zt.prototype.jpoint = function(t, r2, i2) {
  return new Tt(this, t, r2, i2);
}, Tt.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(), r2 = t.redSqr(), i2 = this.x.redMul(r2), n = this.y.redMul(r2).redMul(t);
  return this.curve.point(i2, n);
}, Tt.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt.prototype.add = function(t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var r2 = t.z.redSqr(), i2 = this.z.redSqr(), n = this.x.redMul(r2), o = t.x.redMul(i2), h2 = this.y.redMul(r2.redMul(t.z)), p = t.y.redMul(i2.redMul(this.z)), b = n.redSub(o), m = h2.redSub(p);
  if (b.cmpn(0) === 0) return m.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w = b.redSqr(), y = w.redMul(b), S = n.redMul(w), I = m.redSqr().redIAdd(y).redISub(S).redISub(S), N = m.redMul(S.redISub(I)).redISub(h2.redMul(y)), C = this.z.redMul(t.z).redMul(b);
  return this.curve.jpoint(I, N, C);
}, Tt.prototype.mixedAdd = function(t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var r2 = this.z.redSqr(), i2 = this.x, n = t.x.redMul(r2), o = this.y, h2 = t.y.redMul(r2).redMul(this.z), p = i2.redSub(n), b = o.redSub(h2);
  if (p.cmpn(0) === 0) return b.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m = p.redSqr(), w = m.redMul(p), y = i2.redMul(m), S = b.redSqr().redIAdd(w).redISub(y).redISub(y), I = b.redMul(y.redISub(S)).redISub(o.redMul(w)), N = this.z.redMul(p);
  return this.curve.jpoint(S, I, N);
}, Tt.prototype.dblp = function(t) {
  if (t === 0) return this;
  if (this.isInfinity()) return this;
  if (!t) return this.dbl();
  var r2;
  if (this.curve.zeroA || this.curve.threeA) {
    var i2 = this;
    for (r2 = 0; r2 < t; r2++) i2 = i2.dbl();
    return i2;
  }
  var n = this.curve.a, o = this.curve.tinv, h2 = this.x, p = this.y, b = this.z, m = b.redSqr().redSqr(), w = p.redAdd(p);
  for (r2 = 0; r2 < t; r2++) {
    var y = h2.redSqr(), S = w.redSqr(), I = S.redSqr(), N = y.redAdd(y).redIAdd(y).redIAdd(n.redMul(m)), C = h2.redMul(S), F = N.redSqr().redISub(C.redAdd(C)), U = C.redISub(F), J = N.redMul(U);
    J = J.redIAdd(J).redISub(I);
    var Bt = w.redMul(b);
    r2 + 1 < t && (m = m.redMul(I)), h2 = F, b = Bt, w = J;
  }
  return this.curve.jpoint(h2, w.redMul(o), b);
}, Tt.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt.prototype._zeroDbl = function() {
  var t, r2, i2;
  if (this.zOne) {
    var n = this.x.redSqr(), o = this.y.redSqr(), h2 = o.redSqr(), p = this.x.redAdd(o).redSqr().redISub(n).redISub(h2);
    p = p.redIAdd(p);
    var b = n.redAdd(n).redIAdd(n), m = b.redSqr().redISub(p).redISub(p), w = h2.redIAdd(h2);
    w = w.redIAdd(w), w = w.redIAdd(w), t = m, r2 = b.redMul(p.redISub(m)).redISub(w), i2 = this.y.redAdd(this.y);
  } else {
    var y = this.x.redSqr(), S = this.y.redSqr(), I = S.redSqr(), N = this.x.redAdd(S).redSqr().redISub(y).redISub(I);
    N = N.redIAdd(N);
    var C = y.redAdd(y).redIAdd(y), F = C.redSqr(), U = I.redIAdd(I);
    U = U.redIAdd(U), U = U.redIAdd(U), t = F.redISub(N).redISub(N), r2 = C.redMul(N.redISub(t)).redISub(U), i2 = this.y.redMul(this.z), i2 = i2.redIAdd(i2);
  }
  return this.curve.jpoint(t, r2, i2);
}, Tt.prototype._threeDbl = function() {
  var t, r2, i2;
  if (this.zOne) {
    var n = this.x.redSqr(), o = this.y.redSqr(), h2 = o.redSqr(), p = this.x.redAdd(o).redSqr().redISub(n).redISub(h2);
    p = p.redIAdd(p);
    var b = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), m = b.redSqr().redISub(p).redISub(p);
    t = m;
    var w = h2.redIAdd(h2);
    w = w.redIAdd(w), w = w.redIAdd(w), r2 = b.redMul(p.redISub(m)).redISub(w), i2 = this.y.redAdd(this.y);
  } else {
    var y = this.z.redSqr(), S = this.y.redSqr(), I = this.x.redMul(S), N = this.x.redSub(y).redMul(this.x.redAdd(y));
    N = N.redAdd(N).redIAdd(N);
    var C = I.redIAdd(I);
    C = C.redIAdd(C);
    var F = C.redAdd(C);
    t = N.redSqr().redISub(F), i2 = this.y.redAdd(this.z).redSqr().redISub(S).redISub(y);
    var U = S.redSqr();
    U = U.redIAdd(U), U = U.redIAdd(U), U = U.redIAdd(U), r2 = N.redMul(C.redISub(t)).redISub(U);
  }
  return this.curve.jpoint(t, r2, i2);
}, Tt.prototype._dbl = function() {
  var t = this.curve.a, r2 = this.x, i2 = this.y, n = this.z, o = n.redSqr().redSqr(), h2 = r2.redSqr(), p = i2.redSqr(), b = h2.redAdd(h2).redIAdd(h2).redIAdd(t.redMul(o)), m = r2.redAdd(r2);
  m = m.redIAdd(m);
  var w = m.redMul(p), y = b.redSqr().redISub(w.redAdd(w)), S = w.redISub(y), I = p.redSqr();
  I = I.redIAdd(I), I = I.redIAdd(I), I = I.redIAdd(I);
  var N = b.redMul(S).redISub(I), C = i2.redAdd(i2).redMul(n);
  return this.curve.jpoint(y, N, C);
}, Tt.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(), r2 = this.y.redSqr(), i2 = this.z.redSqr(), n = r2.redSqr(), o = t.redAdd(t).redIAdd(t), h2 = o.redSqr(), p = this.x.redAdd(r2).redSqr().redISub(t).redISub(n);
  p = p.redIAdd(p), p = p.redAdd(p).redIAdd(p), p = p.redISub(h2);
  var b = p.redSqr(), m = n.redIAdd(n);
  m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m);
  var w = o.redIAdd(p).redSqr().redISub(h2).redISub(b).redISub(m), y = r2.redMul(w);
  y = y.redIAdd(y), y = y.redIAdd(y);
  var S = this.x.redMul(b).redISub(y);
  S = S.redIAdd(S), S = S.redIAdd(S);
  var I = this.y.redMul(w.redMul(m.redISub(w)).redISub(p.redMul(b)));
  I = I.redIAdd(I), I = I.redIAdd(I), I = I.redIAdd(I);
  var N = this.z.redAdd(p).redSqr().redISub(i2).redISub(b);
  return this.curve.jpoint(S, I, N);
}, Tt.prototype.mul = function(t, r2) {
  return t = new K(t, r2), this.curve._wnafMul(this, t);
}, Tt.prototype.eq = function(t) {
  if (t.type === "affine") return this.eq(t.toJ());
  if (this === t) return true;
  var r2 = this.z.redSqr(), i2 = t.z.redSqr();
  if (this.x.redMul(i2).redISub(t.x.redMul(r2)).cmpn(0) !== 0) return false;
  var n = r2.redMul(this.z), o = i2.redMul(t.z);
  return this.y.redMul(o).redISub(t.y.redMul(n)).cmpn(0) === 0;
}, Tt.prototype.eqXToP = function(t) {
  var r2 = this.z.redSqr(), i2 = t.toRed(this.curve.red).redMul(r2);
  if (this.x.cmp(i2) === 0) return true;
  for (var n = t.clone(), o = this.curve.redN.redMul(r2); ; ) {
    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return false;
    if (i2.redIAdd(o), this.x.cmp(i2) === 0) return true;
  }
}, Tt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var qr = cr(function(e, t) {
  var r2 = t;
  r2.base = Ze, r2.short = ka, r2.mont = null, r2.edwards = null;
}), Kr = cr(function(e, t) {
  var r2 = t, i2 = Jt.assert;
  function n(p) {
    p.type === "short" ? this.curve = new qr.short(p) : p.type === "edwards" ? this.curve = new qr.edwards(p) : this.curve = new qr.mont(p), this.g = this.curve.g, this.n = this.curve.n, this.hash = p.hash, i2(this.g.validate(), "Invalid curve"), i2(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r2.PresetCurve = n;
  function o(p, b) {
    Object.defineProperty(r2, p, { configurable: true, enumerable: true, get: function() {
      var m = new n(b);
      return Object.defineProperty(r2, p, { configurable: true, enumerable: true, value: m }), m;
    } });
  }
  o("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["9"] }), o("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h2;
  try {
    h2 = null.crash();
  } catch {
    h2 = void 0;
  }
  o("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h2] });
});
function Re(e) {
  if (!(this instanceof Re)) return new Re(e);
  this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = fe.toArray(e.entropy, e.entropyEnc || "hex"), r2 = fe.toArray(e.nonce, e.nonceEnc || "hex"), i2 = fe.toArray(e.pers, e.persEnc || "hex");
  Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r2, i2);
}
var Rf = Re;
Re.prototype._init = function(t, r2, i2) {
  var n = t.concat(r2).concat(i2);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o = 0; o < this.V.length; o++) this.K[o] = 0, this.V[o] = 1;
  this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re.prototype._hmac = function() {
  return new se.hmac(this.hash, this.K);
}, Re.prototype._update = function(t) {
  var r2 = this._hmac().update(this.V).update([0]);
  t && (r2 = r2.update(t)), this.K = r2.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re.prototype.reseed = function(t, r2, i2, n) {
  typeof r2 != "string" && (n = i2, i2 = r2, r2 = null), t = fe.toArray(t, r2), i2 = fe.toArray(i2, n), Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i2 || [])), this._reseed = 1;
}, Re.prototype.generate = function(t, r2, i2, n) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof r2 != "string" && (n = i2, i2 = r2, r2 = null), i2 && (i2 = fe.toArray(i2, n || "hex"), this._update(i2));
  for (var o = []; o.length < t; ) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
  var h2 = o.slice(0, t);
  return this._update(i2), this._reseed++, fe.encode(h2, r2);
};
var Fi = Jt.assert;
function kt(e, t) {
  this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti = kt;
kt.fromPublic = function(t, r2, i2) {
  return r2 instanceof kt ? r2 : new kt(t, { pub: r2, pubEnc: i2 });
}, kt.fromPrivate = function(t, r2, i2) {
  return r2 instanceof kt ? r2 : new kt(t, { priv: r2, privEnc: i2 });
}, kt.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: false, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt.prototype.getPublic = function(t, r2) {
  return typeof t == "string" && (r2 = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r2 ? this.pub.encode(r2, t) : this.pub;
}, kt.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt.prototype._importPrivate = function(t, r2) {
  this.priv = new K(t, r2 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt.prototype._importPublic = function(t, r2) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? Fi(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r2);
}, kt.prototype.derive = function(t) {
  return t.validate() || Fi(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt.prototype.sign = function(t, r2, i2) {
  return this.ec.sign(t, this, r2, i2);
}, kt.prototype.verify = function(t, r2) {
  return this.ec.verify(t, r2, this);
}, kt.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa = Jt.assert;
function Hr(e, t) {
  if (e instanceof Hr) return e;
  this._importDER(e, t) || (qa(e.r && e.s, "Signature without r or s"), this.r = new K(e.r, 16), this.s = new K(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var zr = Hr;
function Ka() {
  this.place = 0;
}
function Ui(e, t) {
  var r2 = e[t.place++];
  if (!(r2 & 128)) return r2;
  var i2 = r2 & 15;
  if (i2 === 0 || i2 > 4) return false;
  for (var n = 0, o = 0, h2 = t.place; o < i2; o++, h2++) n <<= 8, n |= e[h2], n >>>= 0;
  return n <= 127 ? false : (t.place = h2, n);
}
function Of(e) {
  for (var t = 0, r2 = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r2; ) t++;
  return t === 0 ? e : e.slice(t);
}
Hr.prototype._importDER = function(t, r2) {
  t = Jt.toArray(t, r2);
  var i2 = new Ka();
  if (t[i2.place++] !== 48) return false;
  var n = Ui(t, i2);
  if (n === false || n + i2.place !== t.length || t[i2.place++] !== 2) return false;
  var o = Ui(t, i2);
  if (o === false) return false;
  var h2 = t.slice(i2.place, o + i2.place);
  if (i2.place += o, t[i2.place++] !== 2) return false;
  var p = Ui(t, i2);
  if (p === false || t.length !== p + i2.place) return false;
  var b = t.slice(i2.place, p + i2.place);
  if (h2[0] === 0) if (h2[1] & 128) h2 = h2.slice(1);
  else return false;
  if (b[0] === 0) if (b[1] & 128) b = b.slice(1);
  else return false;
  return this.r = new K(h2), this.s = new K(b), this.recoveryParam = null, true;
};
function ki(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r2 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e.push(r2 | 128); --r2; ) e.push(t >>> (r2 << 3) & 255);
  e.push(t);
}
Hr.prototype.toDER = function(t) {
  var r2 = this.r.toArray(), i2 = this.s.toArray();
  for (r2[0] & 128 && (r2 = [0].concat(r2)), i2[0] & 128 && (i2 = [0].concat(i2)), r2 = Of(r2), i2 = Of(i2); !i2[0] && !(i2[1] & 128); ) i2 = i2.slice(1);
  var n = [2];
  ki(n, r2.length), n = n.concat(r2), n.push(2), ki(n, i2.length);
  var o = n.concat(i2), h2 = [48];
  return ki(h2, o.length), h2 = h2.concat(o), Jt.encode(h2, t);
};
var Ha = function() {
  throw new Error("unsupported");
}, Pf = Jt.assert;
function $t(e) {
  if (!(this instanceof $t)) return new $t(e);
  typeof e == "string" && (Pf(Object.prototype.hasOwnProperty.call(Kr, e), "Unknown curve " + e), e = Kr[e]), e instanceof Kr.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var za = $t;
$t.prototype.keyPair = function(t) {
  return new Ti(this, t);
}, $t.prototype.keyFromPrivate = function(t, r2) {
  return Ti.fromPrivate(this, t, r2);
}, $t.prototype.keyFromPublic = function(t, r2) {
  return Ti.fromPublic(this, t, r2);
}, $t.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r2 = new Rf({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Ha(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i2 = this.n.byteLength(), n = this.n.sub(new K(2)); ; ) {
    var o = new K(r2.generate(i2));
    if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
  }
}, $t.prototype._truncateToN = function(t, r2) {
  var i2 = t.byteLength() * 8 - this.n.bitLength();
  return i2 > 0 && (t = t.ushrn(i2)), !r2 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t.prototype.sign = function(t, r2, i2, n) {
  typeof i2 == "object" && (n = i2, i2 = null), n || (n = {}), r2 = this.keyFromPrivate(r2, i2), t = this._truncateToN(new K(t, 16));
  for (var o = this.n.byteLength(), h2 = r2.getPrivate().toArray("be", o), p = t.toArray("be", o), b = new Rf({ hash: this.hash, entropy: h2, nonce: p, pers: n.pers, persEnc: n.persEnc || "utf8" }), m = this.n.sub(new K(1)), w = 0; ; w++) {
    var y = n.k ? n.k(w) : new K(b.generate(this.n.byteLength()));
    if (y = this._truncateToN(y, true), !(y.cmpn(1) <= 0 || y.cmp(m) >= 0)) {
      var S = this.g.mul(y);
      if (!S.isInfinity()) {
        var I = S.getX(), N = I.umod(this.n);
        if (N.cmpn(0) !== 0) {
          var C = y.invm(this.n).mul(N.mul(r2.getPrivate()).iadd(t));
          if (C = C.umod(this.n), C.cmpn(0) !== 0) {
            var F = (S.getY().isOdd() ? 1 : 0) | (I.cmp(N) !== 0 ? 2 : 0);
            return n.canonical && C.cmp(this.nh) > 0 && (C = this.n.sub(C), F ^= 1), new zr({ r: N, s: C, recoveryParam: F });
          }
        }
      }
    }
  }
}, $t.prototype.verify = function(t, r2, i2, n) {
  t = this._truncateToN(new K(t, 16)), i2 = this.keyFromPublic(i2, n), r2 = new zr(r2, "hex");
  var o = r2.r, h2 = r2.s;
  if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0 || h2.cmpn(1) < 0 || h2.cmp(this.n) >= 0) return false;
  var p = h2.invm(this.n), b = p.mul(t).umod(this.n), m = p.mul(o).umod(this.n), w;
  return this.curve._maxwellTrick ? (w = this.g.jmulAdd(b, i2.getPublic(), m), w.isInfinity() ? false : w.eqXToP(o)) : (w = this.g.mulAdd(b, i2.getPublic(), m), w.isInfinity() ? false : w.getX().umod(this.n).cmp(o) === 0);
}, $t.prototype.recoverPubKey = function(e, t, r2, i2) {
  Pf((3 & r2) === r2, "The recovery param is more than two bits"), t = new zr(t, i2);
  var n = this.n, o = new K(e), h2 = t.r, p = t.s, b = r2 & 1, m = r2 >> 1;
  if (h2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m) throw new Error("Unable to find sencond key candinate");
  m ? h2 = this.curve.pointFromX(h2.add(this.curve.n), b) : h2 = this.curve.pointFromX(h2, b);
  var w = t.r.invm(n), y = n.sub(o).mul(w).umod(n), S = p.mul(w).umod(n);
  return this.g.mulAdd(y, h2, S);
}, $t.prototype.getKeyRecoveryParam = function(e, t, r2, i2) {
  if (t = new zr(t, i2), t.recoveryParam !== null) return t.recoveryParam;
  for (var n = 0; n < 4; n++) {
    var o;
    try {
      o = this.recoverPubKey(e, t, n);
    } catch {
      continue;
    }
    if (o.eq(r2)) return n;
  }
  throw new Error("Unable to find valid recovery factor");
};
var La = cr(function(e, t) {
  var r2 = t;
  r2.version = "6.5.4", r2.utils = Jt, r2.rand = function() {
    throw new Error("unsupported");
  }, r2.curve = qr, r2.curves = Kr, r2.ec = za, r2.eddsa = null;
});
La.ec;
var Ff;
(function(e) {
  e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(Ff || (Ff = {}));
const nu = "did:pkh:", Lr = (e) => e == null ? void 0 : e.split(":"), zi = (e) => {
  const t = e && Lr(e);
  if (t) return e.includes(nu) ? t[3] : t[1];
}, Li = (e) => {
  const t = e && Lr(e);
  if (t) return t.pop();
};
const state = proxy({
  status: "uninitialized"
});
const SIWEController = {
  state,
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  _getClient() {
    if (!state._client) {
      throw new Error("SIWEController client not set");
    }
    return state._client;
  },
  async getNonce(address) {
    const client = this._getClient();
    const nonce = await client.getNonce(address);
    this.setNonce(nonce);
    return nonce;
  },
  async getSession() {
    try {
      const client = this._getClient();
      const session = await client.getSession();
      if (session) {
        this.setSession(session);
        this.setStatus("success");
      }
      return session;
    } catch {
      return void 0;
    }
  },
  createMessage(args) {
    const client = this._getClient();
    const message = client.createMessage(args);
    this.setMessage(message);
    return message;
  },
  async verifyMessage(args) {
    const client = this._getClient();
    const isValid = await client.verifyMessage(args);
    return isValid;
  },
  async signIn() {
    const client = this._getClient();
    const session = await client.signIn();
    return session;
  },
  async signOut() {
    var _a2;
    const client = this._getClient();
    await client.signOut();
    this.setStatus("ready");
    this.setSession(void 0);
    (_a2 = client.onSignOut) == null ? void 0 : _a2.call(client);
  },
  onSignIn(args) {
    var _a2;
    const client = this._getClient();
    (_a2 = client.onSignIn) == null ? void 0 : _a2.call(client, args);
  },
  onSignOut() {
    var _a2;
    const client = this._getClient();
    (_a2 = client.onSignOut) == null ? void 0 : _a2.call(client);
  },
  setSIWEClient(client) {
    state._client = ref(client);
    state.status = "ready";
    OptionsController.setIsSiweEnabled(client.options.enabled);
  },
  setNonce(nonce) {
    state.nonce = nonce;
  },
  setStatus(status) {
    state.status = status;
  },
  setMessage(message) {
    state.message = message;
  },
  setSession(session) {
    state.session = session;
    state.status = session ? "success" : "ready";
  }
};
const styles = i`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingSiwe = class W3mConnectingSiwe2 extends h {
  constructor() {
    var _a2;
    super(...arguments);
    this.dappImageUrl = (_a2 = OptionsController.state.metadata) == null ? void 0 : _a2.icons;
    this.walletImageUrl = StorageUtil.getConnectedWalletImageUrl();
  }
  firstUpdated() {
    var _a2;
    const visuals = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelectorAll("wui-visual-thumbnail");
    if (visuals == null ? void 0 : visuals[0]) {
      this.createAnimation(visuals[0], "translate(18px)");
    }
    if (visuals == null ? void 0 : visuals[1]) {
      this.createAnimation(visuals[1], "translate(-18px)");
    }
  }
  render() {
    var _a2;
    return ke`
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${(_a2 = this.dappImageUrl) == null ? void 0 : _a2[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
  }
  createAnimation(element, translation) {
    element.animate([{ transform: "translateX(0px)" }, { transform: translation }], {
      duration: 1600,
      easing: "cubic-bezier(0.56, 0, 0.48, 1)",
      direction: "alternate",
      iterations: Infinity
    });
  }
};
W3mConnectingSiwe.styles = styles;
W3mConnectingSiwe = __decorate$1([
  customElement("w3m-connecting-siwe")
], W3mConnectingSiwe);
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingSiweView = class W3mConnectingSiweView2 extends h {
  constructor() {
    var _a2;
    super(...arguments);
    this.dappName = (_a2 = OptionsController.state.metadata) == null ? void 0 : _a2.name;
    this.isSigning = false;
  }
  render() {
    this.onRender();
    return ke`
      <wui-flex justifyContent="center" .padding=${["2xl", "0", "xxl", "0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0", "4xl", "l", "4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? "Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0", "3xl", "l", "3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l", "xl", "xl", "xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? "Signing..." : "Sign"}
        </wui-button>
      </wui-flex>
    `;
  }
  onRender() {
    if (SIWEController.state.session) {
      ModalController.close();
    }
  }
  async onSign() {
    var _a2, _b, _c;
    this.isSigning = true;
    EventsController.sendEvent({
      event: "CLICK_SIGN_SIWE_MESSAGE",
      type: "track",
      properties: {
        network: ((_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id) || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    try {
      SIWEController.setStatus("loading");
      const session = await SIWEController.signIn();
      SIWEController.setStatus("success");
      EventsController.sendEvent({
        event: "SIWE_AUTH_SUCCESS",
        type: "track",
        properties: {
          network: ((_b = NetworkController.state.caipNetwork) == null ? void 0 : _b.id) || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return session;
    } catch (error) {
      const preferredAccountType = AccountController.state.preferredAccountType;
      const isSmartAccount = preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT;
      if (isSmartAccount) {
        SnackController.showError("This application might not support Smart Accounts");
      } else {
        SnackController.showError("Signature declined");
      }
      SIWEController.setStatus("error");
      return EventsController.sendEvent({
        event: "SIWE_AUTH_ERROR",
        type: "track",
        properties: {
          network: ((_c = NetworkController.state.caipNetwork) == null ? void 0 : _c.id) || "",
          isSmartAccount
        }
      });
    } finally {
      this.isSigning = false;
    }
  }
  async onCancel() {
    var _a2;
    const { isConnected } = AccountController.state;
    if (isConnected) {
      await ConnectionController.disconnect();
      ModalController.close();
    } else {
      RouterController.push("Connect");
    }
    EventsController.sendEvent({
      event: "CLICK_CANCEL_SIWE",
      type: "track",
      properties: {
        network: ((_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id) || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
  }
};
__decorate([
  r()
], W3mConnectingSiweView.prototype, "isSigning", void 0);
W3mConnectingSiweView = __decorate([
  customElement("w3m-connecting-siwe-view")
], W3mConnectingSiweView);
export {
  SIWEController,
  W3mConnectingSiwe,
  W3mConnectingSiweView,
  Li as getDidAddress,
  zi as getDidChainId
};
