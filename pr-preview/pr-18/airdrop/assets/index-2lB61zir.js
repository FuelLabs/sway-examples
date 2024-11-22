var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _a, _b, _string, _tuples, _stringTuples, _path;
function equals$2(aa, bb) {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
}
function coerce(o) {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
}
function fromString$1(str) {
  return new TextEncoder().encode(str);
}
function toString$2(b) {
  return new TextDecoder().decode(b);
}
function base$1(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      pbegin++;
    }
    var it2 = size - length2;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base$1;
var _brrp__multiformats_scope_baseX = src;
class Encoder {
  constructor(name, prefix, baseEncode) {
    __publicField(this, "name");
    __publicField(this, "prefix");
    __publicField(this, "baseEncode");
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    __publicField(this, "name");
    __publicField(this, "prefix");
    __publicField(this, "baseDecode");
    __publicField(this, "prefixCodePoint");
    this.name = name;
    this.prefix = prefix;
    const prefixCodePoint = prefix.codePointAt(0);
    if (prefixCodePoint === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefixCodePoint;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or$1(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders2) {
    __publicField(this, "decoders");
    this.decoders = decoders2;
  }
  or(decoder) {
    return or$1(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder != null) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
function or$1(left, right) {
  return new ComposedDecoder({
    ...left.decoders ?? { [left.prefix]: left },
    ...right.decoders ?? { [right.prefix]: right }
  });
}
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    __publicField(this, "name");
    __publicField(this, "prefix");
    __publicField(this, "baseEncode");
    __publicField(this, "baseDecode");
    __publicField(this, "encoder");
    __publicField(this, "decoder");
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
function from({ name, prefix, encode: encode2, decode: decode2 }) {
  return new Codec(name, prefix, encode2, decode2);
}
function baseX({ name, prefix, alphabet: alphabet2 }) {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name);
  return from({
    prefix,
    name,
    encode: encode2,
    decode: (text) => coerce(decode2(text))
  });
}
function decode$5(string2, alphabet2, bitsPerChar, name) {
  const codes2 = {};
  for (let i = 0; i < alphabet2.length; ++i) {
    codes2[alphabet2[i]] = i;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes2[string2[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || (255 & buffer << 8 - bits) !== 0) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
}
function encode$3(data, alphabet2, bitsPerChar) {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits !== 0) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while ((out.length * bitsPerChar & 7) !== 0) {
      out += "=";
    }
  }
  return out;
}
function rfc4648({ name, prefix, bitsPerChar, alphabet: alphabet2 }) {
  return from({
    prefix,
    name,
    encode(input) {
      return encode$3(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$5(input, alphabet2, bitsPerChar, name);
    }
  });
}
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
const base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
const base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32hex,
  base32hexpad,
  base32hexpadupper,
  base32hexupper,
  base32pad,
  base32padupper,
  base32upper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
const base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
var encode_1 = encode$2;
var MSB$1 = 128, REST$1 = 127, MSBALL = ~REST$1, INT = Math.pow(2, 31);
function encode$2(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB$1;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB$1;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode$2.bytes = offset - oldOffset + 1;
  return out;
}
var decode$4 = read;
var MSB$1$1 = 128, REST$1$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1$1) << shift : (b & REST$1$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1$1);
  read.bytes = counter - offset;
  return res;
}
var N1$1 = Math.pow(2, 7);
var N2$1 = Math.pow(2, 14);
var N3$1 = Math.pow(2, 21);
var N4$1 = Math.pow(2, 28);
var N5$1 = Math.pow(2, 35);
var N6$1 = Math.pow(2, 42);
var N7$1 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1$1 ? 1 : value < N2$1 ? 2 : value < N3$1 ? 3 : value < N4$1 ? 4 : value < N5$1 ? 5 : value < N6$1 ? 6 : value < N7$1 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode$4,
  encodingLength: length
};
var _brrp_varint = varint;
function decode$3(data, offset = 0) {
  const code = _brrp_varint.decode(data, offset);
  return [code, _brrp_varint.decode.bytes];
}
function encodeTo(int, target, offset = 0) {
  _brrp_varint.encode(int, target, offset);
  return target;
}
function encodingLength$1(int) {
  return _brrp_varint.encodingLength(int);
}
function create(code, digest) {
  const size = digest.byteLength;
  const sizeOffset = encodingLength$1(code);
  const digestOffset = sizeOffset + encodingLength$1(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
}
function decode$2(multihash) {
  const bytes = coerce(multihash);
  const [code, sizeOffset] = decode$3(bytes);
  const [size, digestOffset] = decode$3(bytes.subarray(sizeOffset));
  const digest = bytes.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code, size, digest, bytes);
}
function equals$1(a, b) {
  if (a === b) {
    return true;
  } else {
    const data = b;
    return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals$2(a.bytes, data.bytes);
  }
}
class Digest {
  /**
   * Creates a multihash digest.
   */
  constructor(code, size, digest, bytes) {
    __publicField(this, "code");
    __publicField(this, "size");
    __publicField(this, "digest");
    __publicField(this, "bytes");
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
}
function format$3(link, base3) {
  const { bytes, version } = link;
  switch (version) {
    case 0:
      return toStringV0(bytes, baseCache(link), base3 ?? base58btc.encoder);
    default:
      return toStringV1(bytes, baseCache(link), base3 ?? base32.encoder);
  }
}
const cache = /* @__PURE__ */ new WeakMap();
function baseCache(cid) {
  const baseCache2 = cache.get(cid);
  if (baseCache2 == null) {
    const baseCache3 = /* @__PURE__ */ new Map();
    cache.set(cid, baseCache3);
    return baseCache3;
  }
  return baseCache2;
}
class CID {
  /**
   * @param version - Version of the CID
   * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param multihash - (Multi)hash of the of the content.
   */
  constructor(version, code, multihash, bytes) {
    __publicField(this, "code");
    __publicField(this, "version");
    __publicField(this, "multihash");
    __publicField(this, "bytes");
    __publicField(this, "/");
    __publicField(this, _a, "CID");
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this["/"] = bytes;
  }
  /**
   * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
   * please either use `CID.asCID(cid)` or switch to new signalling mechanism
   *
   * @deprecated
   */
  get asCID() {
    return this;
  }
  // ArrayBufferView
  get byteOffset() {
    return this.bytes.byteOffset;
  }
  // ArrayBufferView
  get byteLength() {
    return this.bytes.byteLength;
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      case 1: {
        const { code, multihash } = this;
        if (code !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return CID.createV0(multihash);
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code, digest } = this.multihash;
        const multihash = create(code, digest);
        return CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 1. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return CID.equals(this, other);
  }
  static equals(self2, other) {
    const unknown = other;
    return unknown != null && self2.code === unknown.code && self2.version === unknown.version && equals$1(self2.multihash, unknown.multihash);
  }
  toString(base3) {
    return format$3(this, base3);
  }
  toJSON() {
    return { "/": format$3(this) };
  }
  link() {
    return this;
  }
  // Legacy
  [(_a = Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom"))]() {
    return `CID(${this.toString()})`;
  }
  /**
   * Takes any input `value` and returns a `CID` instance if it was
   * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
   * it will return value back. If `value` is not instance of this CID
   * class, but is compatible CID it will return new instance of this
   * `CID` class. Otherwise returns null.
   *
   * This allows two different incompatible versions of CID library to
   * co-exist and interop as long as binary interface is compatible.
   */
  static asCID(input) {
    if (input == null) {
      return null;
    }
    const value = input;
    if (value instanceof CID) {
      return value;
    } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
      const { version, code, multihash, bytes } = value;
      return new CID(version, code, multihash, bytes ?? encodeCID(version, code, multihash.bytes));
    } else if (value[cidSymbol] === true) {
      const { version, multihash, code } = value;
      const digest = decode$2(multihash);
      return CID.create(version, code, digest);
    } else {
      return null;
    }
  }
  /**
   * @param version - Version of the CID
   * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param digest - (Multi)hash of the of the content.
   */
  static create(version, code, digest) {
    if (typeof code !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    if (!(digest.bytes instanceof Uint8Array)) {
      throw new Error("Invalid digest");
    }
    switch (version) {
      case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new CID(version, code, digest, digest.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new CID(version, code, digest, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  /**
   * Simplified version of `create` for CIDv0.
   */
  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }
  /**
   * Simplified version of `create` for CIDv1.
   *
   * @param code - Content encoding format code.
   * @param digest - Multihash of the content.
   */
  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }
  /**
   * Decoded a CID from its binary representation. The byte array must contain
   * only the CID with no additional bytes.
   *
   * An error will be thrown if the bytes provided do not contain a valid
   * binary representation of a CID.
   */
  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);
    if (remainder.length !== 0) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  /**
   * Decoded a CID from its binary representation at the beginning of a byte
   * array.
   *
   * Returns an array with the first element containing the CID and the second
   * element containing the remainder of the original byte array. The remainder
   * will be a zero-length byte array if the provided bytes only contained a
   * binary CID representation.
   */
  static decodeFirst(bytes) {
    const specs = CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest) : CID.createV1(specs.codec, digest);
    return [cid, bytes.subarray(specs.size)];
  }
  /**
   * Inspect the initial bytes of a CID to determine its properties.
   *
   * Involves decoding up to 4 varints. Typically this will require only 4 to 6
   * bytes but for larger multicodec code values and larger multihash digest
   * lengths these varints can be quite large. It is recommended that at least
   * 10 bytes be made available in the `initialBytes` argument for a complete
   * inspection.
   */
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length2] = decode$3(initialBytes.subarray(offset));
      offset += length2;
      return i;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${version}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return { version, codec, multihashCode, digestSize, multihashSize, size };
  }
  /**
   * Takes cid in a string representation and creates an instance. If `base`
   * decoder is not provided will use a default from the configuration. It will
   * throw an error if encoding of the CID is not compatible with supplied (or
   * a default decoder).
   */
  static parse(source, base3) {
    const [prefix, bytes] = parseCIDtoBytes(source, base3);
    const cid = CID.decode(bytes);
    if (cid.version === 0 && source[0] !== "Q") {
      throw Error("Version 0 CID string must not include multibase prefix");
    }
    baseCache(cid).set(prefix, source);
    return cid;
  }
}
function parseCIDtoBytes(source, base3) {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 ?? base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 ?? base58btc;
      return [base58btc.prefix, decoder.decode(source)];
    }
    case base32.prefix: {
      const decoder = base3 ?? base32;
      return [base32.prefix, decoder.decode(source)];
    }
    case base36.prefix: {
      const decoder = base3 ?? base36;
      return [base36.prefix, decoder.decode(source)];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32, base36 or base58btc encoded CID multibase decoder must be provided");
      }
      return [source[0], base3.decode(source)];
    }
  }
}
function toStringV0(bytes, cache2, base3) {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache2.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes).slice(1);
    cache2.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
}
function toStringV1(bytes, cache2, base3) {
  const { prefix } = base3;
  const cid = cache2.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes);
    cache2.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
}
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
function encodeCID(version, code, multihash) {
  const codeOffset = encodingLength$1(version);
  const hashOffset = codeOffset + encodingLength$1(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version, bytes, 0);
  encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
}
const cidSymbol = Symbol.for("@ipld/js-cid/CID");
function equals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
const base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
const base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
const base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
const alphabetBytesToChars = alphabet.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
  const codePoint = c.codePointAt(0);
  if (codePoint == null) {
    throw new Error(`Invalid character: ${c}`);
  }
  p[codePoint] = i;
  return p;
}, []);
function encode$1(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, "");
}
function decode$1(str) {
  const byts = [];
  for (const char of str) {
    const codePoint = char.codePointAt(0);
    if (codePoint == null) {
      throw new Error(`Invalid character: ${char}`);
    }
    const byt = alphabetCharsToBytes[codePoint];
    if (byt == null) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode: encode$1,
  decode: decode$1
});
const base256emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
const base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
const base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString$2(buf),
  decode: (str) => fromString$1(str)
});
const identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const bases = { ...identityBase, ...base2$1, ...base8$1, ...base10$1, ...base16$1, ...base32$1, ...base36$1, ...base58, ...base64$1, ...base256emoji$1 };
function allocUnsafe(size = 0) {
  return new Uint8Array(size);
}
function createCodec(name, prefix, encode2, decode2) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode: encode2
    },
    decoder: {
      decode: decode2
    }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i = 0; i < buf.length; i++) {
    string2 += String.fromCharCode(buf[i]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function toString$1(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (base3 == null) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  return base3.encoder.encode(array).substring(1);
}
const N1 = Math.pow(2, 7);
const N2 = Math.pow(2, 14);
const N3 = Math.pow(2, 21);
const N4 = Math.pow(2, 28);
const N5 = Math.pow(2, 35);
const N6 = Math.pow(2, 42);
const N7 = Math.pow(2, 49);
const MSB = 128;
const REST = 127;
function encodingLength(value) {
  if (value < N1) {
    return 1;
  }
  if (value < N2) {
    return 2;
  }
  if (value < N3) {
    return 3;
  }
  if (value < N4) {
    return 4;
  }
  if (value < N5) {
    return 5;
  }
  if (value < N6) {
    return 6;
  }
  if (value < N7) {
    return 7;
  }
  if (Number.MAX_SAFE_INTEGER != null && value > Number.MAX_SAFE_INTEGER) {
    throw new RangeError("Could not encode varint");
  }
  return 8;
}
function encodeUint8Array(value, buf, offset = 0) {
  switch (encodingLength(value)) {
    case 8: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 7: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 6: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 5: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 4: {
      buf[offset++] = value & 255 | MSB;
      value >>>= 7;
    }
    case 3: {
      buf[offset++] = value & 255 | MSB;
      value >>>= 7;
    }
    case 2: {
      buf[offset++] = value & 255 | MSB;
      value >>>= 7;
    }
    case 1: {
      buf[offset++] = value & 255;
      value >>>= 7;
      break;
    }
    default:
      throw new Error("unreachable");
  }
  return buf;
}
function encodeUint8ArrayList(value, buf, offset = 0) {
  switch (encodingLength(value)) {
    case 8: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 7: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 6: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 5: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 4: {
      buf.set(offset++, value & 255 | MSB);
      value >>>= 7;
    }
    case 3: {
      buf.set(offset++, value & 255 | MSB);
      value >>>= 7;
    }
    case 2: {
      buf.set(offset++, value & 255 | MSB);
      value >>>= 7;
    }
    case 1: {
      buf.set(offset++, value & 255);
      value >>>= 7;
      break;
    }
    default:
      throw new Error("unreachable");
  }
  return buf;
}
function decodeUint8Array(buf, offset) {
  let b = buf[offset];
  let res = 0;
  res += b & REST;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 1];
  res += (b & REST) << 7;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 2];
  res += (b & REST) << 14;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 3];
  res += (b & REST) << 21;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 4];
  res += (b & REST) * N4;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 5];
  res += (b & REST) * N5;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 6];
  res += (b & REST) * N6;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 7];
  res += (b & REST) * N7;
  if (b < MSB) {
    return res;
  }
  throw new RangeError("Could not decode varint");
}
function decodeUint8ArrayList(buf, offset) {
  let b = buf.get(offset);
  let res = 0;
  res += b & REST;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 1);
  res += (b & REST) << 7;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 2);
  res += (b & REST) << 14;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 3);
  res += (b & REST) << 21;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 4);
  res += (b & REST) * N4;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 5);
  res += (b & REST) * N5;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 6);
  res += (b & REST) * N6;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 7);
  res += (b & REST) * N7;
  if (b < MSB) {
    return res;
  }
  throw new RangeError("Could not decode varint");
}
function encode(value, buf, offset = 0) {
  if (buf == null) {
    buf = allocUnsafe(encodingLength(value));
  }
  if (buf instanceof Uint8Array) {
    return encodeUint8Array(value, buf, offset);
  } else {
    return encodeUint8ArrayList(value, buf, offset);
  }
}
function decode(buf, offset = 0) {
  if (buf instanceof Uint8Array) {
    return decodeUint8Array(buf, offset);
  } else {
    return decodeUint8ArrayList(buf, offset);
  }
}
function asUint8Array(buf) {
  return buf;
}
function concat(arrays, length2) {
  if (length2 == null) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array(output);
}
class Parser {
  constructor() {
    __publicField(this, "index", 0);
    __publicField(this, "input", "");
  }
  new(input) {
    this.index = 0;
    this.input = input;
    return this;
  }
  /** Run a parser, and restore the pre-parse state if it fails. */
  readAtomically(fn) {
    const index = this.index;
    const result = fn();
    if (result === void 0) {
      this.index = index;
    }
    return result;
  }
  /** Run a parser, but fail if the entire input wasn't consumed. Doesn't run atomically. */
  parseWith(fn) {
    const result = fn();
    if (this.index !== this.input.length) {
      return void 0;
    }
    return result;
  }
  /** Peek the next character from the input */
  peekChar() {
    if (this.index >= this.input.length) {
      return void 0;
    }
    return this.input[this.index];
  }
  /** Read the next character from the input */
  readChar() {
    if (this.index >= this.input.length) {
      return void 0;
    }
    return this.input[this.index++];
  }
  /** Read the next character from the input if it matches the target. */
  readGivenChar(target) {
    return this.readAtomically(() => {
      const char = this.readChar();
      if (char !== target) {
        return void 0;
      }
      return char;
    });
  }
  /**
   * Helper for reading separators in an indexed loop. Reads the separator
   * character iff index > 0, then runs the parser. When used in a loop,
   * the separator character will only be read on index > 0 (see
   * readIPv4Addr for an example)
   */
  readSeparator(sep, index, inner) {
    return this.readAtomically(() => {
      if (index > 0) {
        if (this.readGivenChar(sep) === void 0) {
          return void 0;
        }
      }
      return inner();
    });
  }
  /**
   * Read a number off the front of the input in the given radix, stopping
   * at the first non-digit character or eof. Fails if the number has more
   * digits than max_digits or if there is no number.
   */
  readNumber(radix, maxDigits, allowZeroPrefix, maxBytes) {
    return this.readAtomically(() => {
      let result = 0;
      let digitCount = 0;
      const leadingChar = this.peekChar();
      if (leadingChar === void 0) {
        return void 0;
      }
      const hasLeadingZero = leadingChar === "0";
      const maxValue = 2 ** (8 * maxBytes) - 1;
      while (true) {
        const digit = this.readAtomically(() => {
          const char = this.readChar();
          if (char === void 0) {
            return void 0;
          }
          const num = Number.parseInt(char, radix);
          if (Number.isNaN(num)) {
            return void 0;
          }
          return num;
        });
        if (digit === void 0) {
          break;
        }
        result *= radix;
        result += digit;
        if (result > maxValue) {
          return void 0;
        }
        digitCount += 1;
        if (maxDigits !== void 0) {
          if (digitCount > maxDigits) {
            return void 0;
          }
        }
      }
      if (digitCount === 0) {
        return void 0;
      } else if (!allowZeroPrefix && hasLeadingZero && digitCount > 1) {
        return void 0;
      } else {
        return result;
      }
    });
  }
  /** Read an IPv4 address. */
  readIPv4Addr() {
    return this.readAtomically(() => {
      const out = new Uint8Array(4);
      for (let i = 0; i < out.length; i++) {
        const ix = this.readSeparator(".", i, () => this.readNumber(10, 3, false, 1));
        if (ix === void 0) {
          return void 0;
        }
        out[i] = ix;
      }
      return out;
    });
  }
  /** Read an IPv6 Address. */
  readIPv6Addr() {
    const readGroups = (groups) => {
      for (let i = 0; i < groups.length / 2; i++) {
        const ix = i * 2;
        if (i < groups.length - 3) {
          const ipv4 = this.readSeparator(":", i, () => this.readIPv4Addr());
          if (ipv4 !== void 0) {
            groups[ix] = ipv4[0];
            groups[ix + 1] = ipv4[1];
            groups[ix + 2] = ipv4[2];
            groups[ix + 3] = ipv4[3];
            return [ix + 4, true];
          }
        }
        const group = this.readSeparator(":", i, () => this.readNumber(16, 4, true, 2));
        if (group === void 0) {
          return [ix, false];
        }
        groups[ix] = group >> 8;
        groups[ix + 1] = group & 255;
      }
      return [groups.length, false];
    };
    return this.readAtomically(() => {
      const head = new Uint8Array(16);
      const [headSize, headIp4] = readGroups(head);
      if (headSize === 16) {
        return head;
      }
      if (headIp4) {
        return void 0;
      }
      if (this.readGivenChar(":") === void 0) {
        return void 0;
      }
      if (this.readGivenChar(":") === void 0) {
        return void 0;
      }
      const tail = new Uint8Array(14);
      const limit = 16 - (headSize + 2);
      const [tailSize] = readGroups(tail.subarray(0, limit));
      head.set(tail.subarray(0, tailSize), 16 - tailSize);
      return head;
    });
  }
  /** Read an IP Address, either IPv4 or IPv6. */
  readIPAddr() {
    return this.readIPv4Addr() ?? this.readIPv6Addr();
  }
}
const MAX_IPV6_LENGTH = 45;
const MAX_IPV4_LENGTH = 15;
const parser = new Parser();
function parseIPv4(input) {
  if (input.length > MAX_IPV4_LENGTH) {
    return void 0;
  }
  return parser.new(input).parseWith(() => parser.readIPv4Addr());
}
function parseIPv6(input) {
  if (input.includes("%")) {
    input = input.split("%")[0];
  }
  if (input.length > MAX_IPV6_LENGTH) {
    return void 0;
  }
  return parser.new(input).parseWith(() => parser.readIPv6Addr());
}
function parseIP(input) {
  if (input.includes("%")) {
    input = input.split("%")[0];
  }
  if (input.length > MAX_IPV6_LENGTH) {
    return void 0;
  }
  return parser.new(input).parseWith(() => parser.readIPAddr());
}
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (base3 == null) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function isIPv4(input) {
  return Boolean(parseIPv4(input));
}
function isIPv6(input) {
  return Boolean(parseIPv6(input));
}
function isIP(input) {
  return Boolean(parseIP(input));
}
const isV4 = isIPv4;
const isV6 = isIPv6;
const toBytes = function(ip) {
  let offset = 0;
  ip = ip.toString().trim();
  if (isV4(ip)) {
    const bytes = new Uint8Array(offset + 4);
    ip.split(/\./g).forEach((byte) => {
      bytes[offset++] = parseInt(byte, 10) & 255;
    });
    return bytes;
  }
  if (isV6(ip)) {
    const sections = ip.split(":", 8);
    let i;
    for (i = 0; i < sections.length; i++) {
      const isv4 = isV4(sections[i]);
      let v4Buffer;
      if (isv4) {
        v4Buffer = toBytes(sections[i]);
        sections[i] = toString$1(v4Buffer.slice(0, 2), "base16");
      }
      if (v4Buffer != null && ++i < 8) {
        sections.splice(i, 0, toString$1(v4Buffer.slice(2, 4), "base16"));
      }
    }
    if (sections[0] === "") {
      while (sections.length < 8)
        sections.unshift("0");
    } else if (sections[sections.length - 1] === "") {
      while (sections.length < 8)
        sections.push("0");
    } else if (sections.length < 8) {
      for (i = 0; i < sections.length && sections[i] !== ""; i++)
        ;
      const argv = [i, 1];
      for (i = 9 - sections.length; i > 0; i--) {
        argv.push("0");
      }
      sections.splice.apply(sections, argv);
    }
    const bytes = new Uint8Array(offset + 16);
    for (i = 0; i < sections.length; i++) {
      const word = parseInt(sections[i], 16);
      bytes[offset++] = word >> 8 & 255;
      bytes[offset++] = word & 255;
    }
    return bytes;
  }
  throw new Error("invalid ip address");
};
const toString = function(buf, offset = 0, length2) {
  offset = ~~offset;
  length2 = length2 ?? buf.length - offset;
  const view = new DataView(buf.buffer);
  if (length2 === 4) {
    const result = [];
    for (let i = 0; i < length2; i++) {
      result.push(buf[offset + i]);
    }
    return result.join(".");
  }
  if (length2 === 16) {
    const result = [];
    for (let i = 0; i < length2; i += 2) {
      result.push(view.getUint16(offset + i).toString(16));
    }
    return result.join(":").replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3").replace(/:{3,4}/, "::");
  }
  return "";
};
const V = -1;
const names = {};
const codes = {};
const table = [
  [4, 32, "ip4"],
  [6, 16, "tcp"],
  [33, 16, "dccp"],
  [41, 128, "ip6"],
  [42, V, "ip6zone"],
  [43, 8, "ipcidr"],
  [53, V, "dns", true],
  [54, V, "dns4", true],
  [55, V, "dns6", true],
  [56, V, "dnsaddr", true],
  [132, 16, "sctp"],
  [273, 16, "udp"],
  [275, 0, "p2p-webrtc-star"],
  [276, 0, "p2p-webrtc-direct"],
  [277, 0, "p2p-stardust"],
  [280, 0, "webrtc-direct"],
  [281, 0, "webrtc"],
  [290, 0, "p2p-circuit"],
  [301, 0, "udt"],
  [302, 0, "utp"],
  [400, V, "unix", false, true],
  // `ipfs` is added before `p2p` for legacy support.
  // All text representations will default to `p2p`, but `ipfs` will
  // still be supported
  [421, V, "ipfs"],
  // `p2p` is the preferred name for 421, and is now the default
  [421, V, "p2p"],
  [443, 0, "https"],
  [444, 96, "onion"],
  [445, 296, "onion3"],
  [446, V, "garlic64"],
  [448, 0, "tls"],
  [449, V, "sni"],
  [460, 0, "quic"],
  [461, 0, "quic-v1"],
  [465, 0, "webtransport"],
  [466, V, "certhash"],
  [477, 0, "ws"],
  [478, 0, "wss"],
  [479, 0, "p2p-websocket-star"],
  [480, 0, "http"],
  [481, V, "http-path"],
  [777, V, "memory"]
];
table.forEach((row) => {
  const proto = createProtocol(...row);
  codes[proto.code] = proto;
  names[proto.name] = proto;
});
function createProtocol(code, size, name, resolvable, path2) {
  return {
    code,
    size,
    name,
    resolvable: Boolean(resolvable),
    path: Boolean(path2)
  };
}
function getProtocol(proto) {
  if (typeof proto === "number") {
    if (codes[proto] != null) {
      return codes[proto];
    }
    throw new Error(`no protocol with code: ${proto}`);
  } else if (typeof proto === "string") {
    if (names[proto] != null) {
      return names[proto];
    }
    throw new Error(`no protocol with name: ${proto}`);
  }
  throw new Error(`invalid protocol id type: ${typeof proto}`);
}
getProtocol("ip4");
getProtocol("ip6");
getProtocol("ipcidr");
function convertToString$1(proto, buf) {
  const protocol = getProtocol(proto);
  switch (protocol.code) {
    case 4:
    case 41:
      return bytes2ip(buf);
    case 42:
      return bytes2str(buf);
    case 6:
    case 273:
    case 33:
    case 132:
      return bytes2port(buf).toString();
    case 53:
    case 54:
    case 55:
    case 56:
    case 400:
    case 449:
    case 777:
      return bytes2str(buf);
    case 421:
      return bytes2mh(buf);
    case 444:
      return bytes2onion(buf);
    case 445:
      return bytes2onion(buf);
    case 466:
      return bytes2mb(buf);
    case 481:
      return globalThis.encodeURIComponent(bytes2str(buf));
    default:
      return toString$1(buf, "base16");
  }
}
function convertToBytes(proto, str) {
  const protocol = getProtocol(proto);
  switch (protocol.code) {
    case 4:
      return ip2bytes(str);
    case 41:
      return ip2bytes(str);
    case 42:
      return str2bytes(str);
    case 6:
    case 273:
    case 33:
    case 132:
      return port2bytes(parseInt(str, 10));
    case 53:
    case 54:
    case 55:
    case 56:
    case 400:
    case 449:
    case 777:
      return str2bytes(str);
    case 421:
      return mh2bytes(str);
    case 444:
      return onion2bytes(str);
    case 445:
      return onion32bytes(str);
    case 466:
      return mb2bytes(str);
    case 481:
      return str2bytes(globalThis.decodeURIComponent(str));
    default:
      return fromString(str, "base16");
  }
}
const decoders = Object.values(bases).map((c) => c.decoder);
const anybaseDecoder = function() {
  let acc = decoders[0].or(decoders[1]);
  decoders.slice(2).forEach((d) => acc = acc.or(d));
  return acc;
}();
function ip2bytes(ipString) {
  if (!isIP(ipString)) {
    throw new Error("invalid ip address");
  }
  return toBytes(ipString);
}
function bytes2ip(ipBuff) {
  const ipString = toString(ipBuff, 0, ipBuff.length);
  if (ipString == null) {
    throw new Error("ipBuff is required");
  }
  if (!isIP(ipString)) {
    throw new Error("invalid ip address");
  }
  return ipString;
}
function port2bytes(port) {
  const buf = new ArrayBuffer(2);
  const view = new DataView(buf);
  view.setUint16(0, port);
  return new Uint8Array(buf);
}
function bytes2port(buf) {
  const view = new DataView(buf.buffer);
  return view.getUint16(buf.byteOffset);
}
function str2bytes(str) {
  const buf = fromString(str);
  const size = Uint8Array.from(encode(buf.length));
  return concat([size, buf], size.length + buf.length);
}
function bytes2str(buf) {
  const size = decode(buf);
  buf = buf.slice(encodingLength(size));
  if (buf.length !== size) {
    throw new Error("inconsistent lengths");
  }
  return toString$1(buf);
}
function mh2bytes(hash) {
  let mh;
  if (hash[0] === "Q" || hash[0] === "1") {
    mh = decode$2(base58btc.decode(`z${hash}`)).bytes;
  } else {
    mh = CID.parse(hash).multihash.bytes;
  }
  const size = Uint8Array.from(encode(mh.length));
  return concat([size, mh], size.length + mh.length);
}
function mb2bytes(mbstr) {
  const mb = anybaseDecoder.decode(mbstr);
  const size = Uint8Array.from(encode(mb.length));
  return concat([size, mb], size.length + mb.length);
}
function bytes2mb(buf) {
  const size = decode(buf);
  const hash = buf.slice(encodingLength(size));
  if (hash.length !== size) {
    throw new Error("inconsistent lengths");
  }
  return "u" + toString$1(hash, "base64url");
}
function bytes2mh(buf) {
  const size = decode(buf);
  const address = buf.slice(encodingLength(size));
  if (address.length !== size) {
    throw new Error("inconsistent lengths");
  }
  return toString$1(address, "base58btc");
}
function onion2bytes(str) {
  const addr = str.split(":");
  if (addr.length !== 2) {
    throw new Error(`failed to parse onion addr: ["'${addr.join('", "')}'"]' does not contain a port number`);
  }
  if (addr[0].length !== 16) {
    throw new Error(`failed to parse onion addr: ${addr[0]} not a Tor onion address.`);
  }
  const buf = base32.decode("b" + addr[0]);
  const port = parseInt(addr[1], 10);
  if (port < 1 || port > 65536) {
    throw new Error("Port number is not in range(1, 65536)");
  }
  const portBuf = port2bytes(port);
  return concat([buf, portBuf], buf.length + portBuf.length);
}
function onion32bytes(str) {
  const addr = str.split(":");
  if (addr.length !== 2) {
    throw new Error(`failed to parse onion addr: ["'${addr.join('", "')}'"]' does not contain a port number`);
  }
  if (addr[0].length !== 56) {
    throw new Error(`failed to parse onion addr: ${addr[0]} not a Tor onion3 address.`);
  }
  const buf = base32.decode(`b${addr[0]}`);
  const port = parseInt(addr[1], 10);
  if (port < 1 || port > 65536) {
    throw new Error("Port number is not in range(1, 65536)");
  }
  const portBuf = port2bytes(port);
  return concat([buf, portBuf], buf.length + portBuf.length);
}
function bytes2onion(buf) {
  const addrBytes = buf.slice(0, buf.length - 2);
  const portBytes = buf.slice(buf.length - 2);
  const addr = toString$1(addrBytes, "base32");
  const port = bytes2port(portBytes);
  return `${addr}:${port}`;
}
function stringToMultiaddrParts(str) {
  str = cleanPath(str);
  const tuples = [];
  const stringTuples = [];
  let path2 = null;
  const parts = str.split("/").slice(1);
  if (parts.length === 1 && parts[0] === "") {
    return {
      bytes: new Uint8Array(),
      string: "/",
      tuples: [],
      stringTuples: [],
      path: null
    };
  }
  for (let p = 0; p < parts.length; p++) {
    const part = parts[p];
    const proto = getProtocol(part);
    if (proto.size === 0) {
      tuples.push([proto.code]);
      stringTuples.push([proto.code]);
      continue;
    }
    p++;
    if (p >= parts.length) {
      throw ParseError("invalid address: " + str);
    }
    if (proto.path === true) {
      path2 = cleanPath(parts.slice(p).join("/"));
      tuples.push([proto.code, convertToBytes(proto.code, path2)]);
      stringTuples.push([proto.code, path2]);
      break;
    }
    const bytes = convertToBytes(proto.code, parts[p]);
    tuples.push([proto.code, bytes]);
    stringTuples.push([proto.code, convertToString$1(proto.code, bytes)]);
  }
  return {
    string: stringTuplesToString(stringTuples),
    bytes: tuplesToBytes(tuples),
    tuples,
    stringTuples,
    path: path2
  };
}
function bytesToMultiaddrParts(bytes) {
  const tuples = [];
  const stringTuples = [];
  let path2 = null;
  let i = 0;
  while (i < bytes.length) {
    const code = decode(bytes, i);
    const n = encodingLength(code);
    const p = getProtocol(code);
    const size = sizeForAddr(p, bytes.slice(i + n));
    if (size === 0) {
      tuples.push([code]);
      stringTuples.push([code]);
      i += n;
      continue;
    }
    const addr = bytes.slice(i + n, i + n + size);
    i += size + n;
    if (i > bytes.length) {
      throw ParseError("Invalid address Uint8Array: " + toString$1(bytes, "base16"));
    }
    tuples.push([code, addr]);
    const stringAddr = convertToString$1(code, addr);
    stringTuples.push([code, stringAddr]);
    if (p.path === true) {
      path2 = stringAddr;
      break;
    }
  }
  return {
    bytes: Uint8Array.from(bytes),
    string: stringTuplesToString(stringTuples),
    tuples,
    stringTuples,
    path: path2
  };
}
function stringTuplesToString(tuples) {
  const parts = [];
  tuples.map((tup) => {
    const proto = getProtocol(tup[0]);
    parts.push(proto.name);
    if (tup.length > 1 && tup[1] != null) {
      parts.push(tup[1]);
    }
    return null;
  });
  return cleanPath(parts.join("/"));
}
function tuplesToBytes(tuples) {
  return concat(tuples.map((tup) => {
    const proto = getProtocol(tup[0]);
    let buf = Uint8Array.from(encode(proto.code));
    if (tup.length > 1 && tup[1] != null) {
      buf = concat([buf, tup[1]]);
    }
    return buf;
  }));
}
function sizeForAddr(p, addr) {
  if (p.size > 0) {
    return p.size / 8;
  } else if (p.size === 0) {
    return 0;
  } else {
    const size = decode(addr instanceof Uint8Array ? addr : Uint8Array.from(addr));
    return size + encodingLength(size);
  }
}
function cleanPath(str) {
  return "/" + str.trim().split("/").filter((a) => a).join("/");
}
function ParseError(str) {
  return new Error("Error parsing address: " + str);
}
const inspect = Symbol.for("nodejs.util.inspect.custom");
const symbol = Symbol.for("@multiformats/js-multiaddr/multiaddr");
const DNS_CODES = [
  getProtocol("dns").code,
  getProtocol("dns4").code,
  getProtocol("dns6").code,
  getProtocol("dnsaddr").code
];
class NoAvailableResolverError extends Error {
  constructor(message = "No available resolver") {
    super(message);
    this.name = "NoAvailableResolverError";
  }
}
const _Multiaddr = class _Multiaddr {
  constructor(addr) {
    __publicField(this, "bytes");
    __privateAdd(this, _string);
    __privateAdd(this, _tuples);
    __privateAdd(this, _stringTuples);
    __privateAdd(this, _path);
    __publicField(this, _b, true);
    if (addr == null) {
      addr = "";
    }
    let parts;
    if (addr instanceof Uint8Array) {
      parts = bytesToMultiaddrParts(addr);
    } else if (typeof addr === "string") {
      if (addr.length > 0 && addr.charAt(0) !== "/") {
        throw new Error(`multiaddr "${addr}" must start with a "/"`);
      }
      parts = stringToMultiaddrParts(addr);
    } else if (isMultiaddr$1(addr)) {
      parts = bytesToMultiaddrParts(addr.bytes);
    } else {
      throw new Error("addr must be a string, Buffer, or another Multiaddr");
    }
    this.bytes = parts.bytes;
    __privateSet(this, _string, parts.string);
    __privateSet(this, _tuples, parts.tuples);
    __privateSet(this, _stringTuples, parts.stringTuples);
    __privateSet(this, _path, parts.path);
  }
  toString() {
    return __privateGet(this, _string);
  }
  toJSON() {
    return this.toString();
  }
  toOptions() {
    let family;
    let transport;
    let host;
    let port;
    let zone = "";
    const tcp = getProtocol("tcp");
    const udp = getProtocol("udp");
    const ip4 = getProtocol("ip4");
    const ip6 = getProtocol("ip6");
    const dns6 = getProtocol("dns6");
    const ip6zone = getProtocol("ip6zone");
    for (const [code, value] of this.stringTuples()) {
      if (code === ip6zone.code) {
        zone = `%${value ?? ""}`;
      }
      if (DNS_CODES.includes(code)) {
        transport = tcp.name;
        port = 443;
        host = `${value ?? ""}${zone}`;
        family = code === dns6.code ? 6 : 4;
      }
      if (code === tcp.code || code === udp.code) {
        transport = getProtocol(code).name;
        port = parseInt(value ?? "");
      }
      if (code === ip4.code || code === ip6.code) {
        transport = getProtocol(code).name;
        host = `${value ?? ""}${zone}`;
        family = code === ip6.code ? 6 : 4;
      }
    }
    if (family == null || transport == null || host == null || port == null) {
      throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".');
    }
    const opts = {
      family,
      host,
      transport,
      port
    };
    return opts;
  }
  protos() {
    return __privateGet(this, _tuples).map(([code]) => Object.assign({}, getProtocol(code)));
  }
  protoCodes() {
    return __privateGet(this, _tuples).map(([code]) => code);
  }
  protoNames() {
    return __privateGet(this, _tuples).map(([code]) => getProtocol(code).name);
  }
  tuples() {
    return __privateGet(this, _tuples).map(([code, value]) => {
      if (value == null) {
        return [code];
      }
      return [code, value];
    });
  }
  stringTuples() {
    return __privateGet(this, _stringTuples).map(([code, value]) => {
      if (value == null) {
        return [code];
      }
      return [code, value];
    });
  }
  encapsulate(addr) {
    addr = new _Multiaddr(addr);
    return new _Multiaddr(this.toString() + addr.toString());
  }
  decapsulate(addr) {
    const addrString = addr.toString();
    const s = this.toString();
    const i = s.lastIndexOf(addrString);
    if (i < 0) {
      throw new Error(`Address ${this.toString()} does not contain subaddress: ${addr.toString()}`);
    }
    return new _Multiaddr(s.slice(0, i));
  }
  decapsulateCode(code) {
    const tuples = this.tuples();
    for (let i = tuples.length - 1; i >= 0; i--) {
      if (tuples[i][0] === code) {
        return new _Multiaddr(tuplesToBytes(tuples.slice(0, i)));
      }
    }
    return this;
  }
  getPeerId() {
    try {
      let tuples = [];
      this.stringTuples().forEach(([code, name]) => {
        if (code === names.p2p.code) {
          tuples.push([code, name]);
        }
        if (code === names["p2p-circuit"].code) {
          tuples = [];
        }
      });
      const tuple = tuples.pop();
      if ((tuple == null ? void 0 : tuple[1]) != null) {
        const peerIdStr = tuple[1];
        if (peerIdStr[0] === "Q" || peerIdStr[0] === "1") {
          return toString$1(base58btc.decode(`z${peerIdStr}`), "base58btc");
        }
        return toString$1(CID.parse(peerIdStr).multihash.bytes, "base58btc");
      }
      return null;
    } catch (e) {
      return null;
    }
  }
  getPath() {
    return __privateGet(this, _path);
  }
  equals(addr) {
    return equals(this.bytes, addr.bytes);
  }
  async resolve(options) {
    const resolvableProto = this.protos().find((p) => p.resolvable);
    if (resolvableProto == null) {
      return [this];
    }
    const resolver = resolvers.get(resolvableProto.name);
    if (resolver == null) {
      throw new NoAvailableResolverError(`no available resolver for ${resolvableProto.name}`);
    }
    const result = await resolver(this, options);
    return result.map((str) => multiaddr(str));
  }
  nodeAddress() {
    const options = this.toOptions();
    if (options.transport !== "tcp" && options.transport !== "udp") {
      throw new Error(`multiaddr must have a valid format - no protocol with name: "${options.transport}". Must have a valid transport protocol: "{tcp, udp}"`);
    }
    return {
      family: options.family,
      address: options.host,
      port: options.port
    };
  }
  isThinWaistAddress(addr) {
    const protos = (addr ?? this).protos();
    if (protos.length !== 2) {
      return false;
    }
    if (protos[0].code !== 4 && protos[0].code !== 41) {
      return false;
    }
    if (protos[1].code !== 6 && protos[1].code !== 273) {
      return false;
    }
    return true;
  }
  /**
   * Returns Multiaddr as a human-readable string
   * https://nodejs.org/api/util.html#utilinspectcustom
   *
   * @example
   * ```js
   * import { multiaddr } from '@multiformats/multiaddr'
   *
   * console.info(multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // 'Multiaddr(/ip4/127.0.0.1/tcp/4001)'
   * ```
   */
  [(_b = symbol, inspect)]() {
    return `Multiaddr(${__privateGet(this, _string)})`;
  }
};
_string = new WeakMap();
_tuples = new WeakMap();
_stringTuples = new WeakMap();
_path = new WeakMap();
let Multiaddr = _Multiaddr;
const resolvers = /* @__PURE__ */ new Map();
function isMultiaddr$1(value) {
  return Boolean(value == null ? void 0 : value[symbol]);
}
function multiaddr(addr) {
  return new Multiaddr(addr);
}
const DNS4 = base("dns4");
const DNS6 = base("dns6");
const DNSADDR = base("dnsaddr");
const DNS = or(base("dns"), DNSADDR, DNS4, DNS6);
const IP = or(base("ip4"), base("ip6"));
const TCP = or(and(IP, base("tcp")), and(DNS, base("tcp")));
const UDP = and(IP, base("udp"));
const UTP = and(UDP, base("utp"));
const QUIC = and(UDP, base("quic"));
const QUICV1 = and(UDP, base("quic-v1"));
const _WebSockets = or(and(TCP, base("ws")), and(DNS, base("ws")));
const WebSockets = or(and(_WebSockets, base("p2p")), _WebSockets);
const _WebSocketsSecure = or(and(TCP, base("wss")), and(DNS, base("wss")), and(TCP, base("tls"), base("ws")), and(DNS, base("tls"), base("ws")));
const WebSocketsSecure = or(and(_WebSocketsSecure, base("p2p")), _WebSocketsSecure);
const HTTP = or(and(TCP, base("http")), and(IP, base("http")), and(DNS, base("http")));
const HTTPS = or(and(TCP, base("https")), and(IP, base("https")), and(DNS, base("https")));
const _WebRTCDirect = and(UDP, base("webrtc-direct"), base("certhash"));
const WebRTCDirect = or(and(_WebRTCDirect, base("p2p")), _WebRTCDirect);
const _WebTransport = and(QUICV1, base("webtransport"), base("certhash"), base("certhash"));
const WebTransport = or(and(_WebTransport, base("p2p")), _WebTransport);
const P2PWebRTCStar = or(and(WebSockets, base("p2p-webrtc-star"), base("p2p")), and(WebSocketsSecure, base("p2p-webrtc-star"), base("p2p")), and(WebSockets, base("p2p-webrtc-star")), and(WebSocketsSecure, base("p2p-webrtc-star")));
const P2PWebRTCDirect = or(and(HTTP, base("p2p-webrtc-direct"), base("p2p")), and(HTTPS, base("p2p-webrtc-direct"), base("p2p")), and(HTTP, base("p2p-webrtc-direct")), and(HTTPS, base("p2p-webrtc-direct")));
const Reliable = or(_WebSockets, _WebSocketsSecure, HTTP, HTTPS, P2PWebRTCStar, P2PWebRTCDirect, TCP, UTP, QUIC, DNS, WebRTCDirect, WebTransport);
const _P2P = or(and(Reliable, base("p2p")), P2PWebRTCStar, P2PWebRTCDirect, WebRTCDirect, WebTransport, base("p2p"));
const _Circuit = or(and(_P2P, base("p2p-circuit"), _P2P), and(_P2P, base("p2p-circuit")), and(base("p2p-circuit"), _P2P), and(Reliable, base("p2p-circuit")), and(base("p2p-circuit"), Reliable), base("p2p-circuit"));
const CircuitRecursive = () => or(and(_Circuit, CircuitRecursive), _Circuit);
const Circuit = CircuitRecursive();
const P2P = or(and(Circuit, _P2P, Circuit), and(_P2P, Circuit), and(Circuit, _P2P), Circuit, _P2P);
function makeMatchesFunction(partialMatch) {
  function matches(a) {
    let ma;
    try {
      ma = multiaddr(a);
    } catch (err) {
      return false;
    }
    const out = partialMatch(ma.protoNames());
    if (out === null) {
      return false;
    }
    if (out === true || out === false) {
      return out;
    }
    return out.length === 0;
  }
  return matches;
}
function and(...args) {
  function partialMatch(a) {
    if (a.length < args.length) {
      return null;
    }
    let out = a;
    args.some((arg) => {
      out = typeof arg === "function" ? arg().partialMatch(a) : arg.partialMatch(a);
      if (Array.isArray(out)) {
        a = out;
      }
      if (out === null) {
        return true;
      }
      return false;
    });
    return out;
  }
  return {
    toString: function() {
      return "{ " + args.join(" ") + " }";
    },
    input: args,
    matches: makeMatchesFunction(partialMatch),
    partialMatch
  };
}
function or(...args) {
  function partialMatch(a) {
    let out = null;
    args.some((arg) => {
      const res = typeof arg === "function" ? arg().partialMatch(a) : arg.partialMatch(a);
      if (res != null) {
        out = res;
        return true;
      }
      return false;
    });
    return out;
  }
  const result = {
    toString: function() {
      return "{ " + args.join(" ") + " }";
    },
    input: args,
    matches: makeMatchesFunction(partialMatch),
    partialMatch
  };
  return result;
}
function base(n) {
  const name = n;
  function matches(a) {
    let ma;
    try {
      ma = multiaddr(a);
    } catch (err) {
      return false;
    }
    const pnames = ma.protoNames();
    if (pnames.length === 1 && pnames[0] === name) {
      return true;
    }
    return false;
  }
  function partialMatch(protos) {
    if (protos.length === 0) {
      return null;
    }
    if (protos[0] === name) {
      return protos.slice(1);
    }
    return null;
  }
  return {
    toString: function() {
      return name;
    },
    matches,
    partialMatch
  };
}
const isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
function getDefaultBase() {
  if (isReactNative) {
    return "http://localhost";
  }
  if (!self.location) {
    return "";
  }
  return self.location.protocol + "//" + self.location.host;
}
const URL = self.URL;
const defaultBase$1 = getDefaultBase();
let URLWithLegacySupport$2 = class URLWithLegacySupport {
  constructor(url2 = "", base3 = defaultBase$1) {
    this.super = new URL(url2, base3);
    this.path = this.pathname + this.search;
    this.auth = this.username && this.password ? this.username + ":" + this.password : null;
    this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null;
  }
  get hash() {
    return this.super.hash;
  }
  get host() {
    return this.super.host;
  }
  get hostname() {
    return this.super.hostname;
  }
  get href() {
    return this.super.href;
  }
  get origin() {
    return this.super.origin;
  }
  get password() {
    return this.super.password;
  }
  get pathname() {
    return this.super.pathname;
  }
  get port() {
    return this.super.port;
  }
  get protocol() {
    return this.super.protocol;
  }
  get search() {
    return this.super.search;
  }
  get searchParams() {
    return this.super.searchParams;
  }
  get username() {
    return this.super.username;
  }
  set hash(hash) {
    this.super.hash = hash;
  }
  set host(host) {
    this.super.host = host;
  }
  set hostname(hostname) {
    this.super.hostname = hostname;
  }
  set href(href) {
    this.super.href = href;
  }
  set password(password) {
    this.super.password = password;
  }
  set pathname(pathname) {
    this.super.pathname = pathname;
  }
  set port(port) {
    this.super.port = port;
  }
  set protocol(protocol) {
    this.super.protocol = protocol;
  }
  set search(search) {
    this.super.search = search;
  }
  set username(username) {
    this.super.username = username;
  }
  /**
   * @param {any} o
   */
  static createObjectURL(o) {
    return URL.createObjectURL(o);
  }
  /**
   * @param {string} o
   */
  static revokeObjectURL(o) {
    URL.revokeObjectURL(o);
  }
  toJSON() {
    return this.super.toJSON();
  }
  toString() {
    return this.super.toString();
  }
  format() {
    return this.toString();
  }
};
function format$2(obj) {
  if (typeof obj === "string") {
    const url2 = new URL(obj);
    return url2.toString();
  }
  if (!(obj instanceof URL)) {
    const userPass = (
      // @ts-ignore its not supported in node but we normalise
      obj.username && obj.password ? `${obj.username}:${obj.password}@` : ""
    );
    const auth = obj.auth ? obj.auth + "@" : "";
    const port = obj.port ? ":" + obj.port : "";
    const protocol = obj.protocol ? obj.protocol + "//" : "";
    const host = obj.host || "";
    const hostname = obj.hostname || "";
    const search = obj.search || (obj.query ? "?" + obj.query : "");
    const hash = obj.hash || "";
    const pathname = obj.pathname || "";
    const path2 = obj.path || pathname + search;
    return `${protocol}${userPass || auth}${host || hostname + port}${path2}${hash}`;
  }
}
var urlBrowser = {
  URLWithLegacySupport: URLWithLegacySupport$2,
  URLSearchParams: self.URLSearchParams,
  defaultBase: defaultBase$1,
  format: format$2
};
const { URLWithLegacySupport: URLWithLegacySupport$1, format: format$1 } = urlBrowser;
var relative$1 = (url2, location = {}, protocolMap = {}, defaultProtocol) => {
  let protocol = location.protocol ? location.protocol.replace(":", "") : "http";
  protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ":";
  let urlParsed;
  try {
    urlParsed = new URLWithLegacySupport$1(url2);
  } catch (err) {
    urlParsed = {};
  }
  const base3 = Object.assign({}, location, {
    protocol: protocol || urlParsed.protocol,
    host: location.host || urlParsed.host
  });
  return new URLWithLegacySupport$1(url2, format$1(base3)).toString();
};
const {
  URLWithLegacySupport: URLWithLegacySupport2,
  format,
  URLSearchParams,
  defaultBase
} = urlBrowser;
const relative = relative$1;
var isoUrl = {
  URL: URLWithLegacySupport2,
  URLSearchParams,
  format,
  relative,
  defaultBase
};
const pathGatewayPattern = /^https?:\/\/[^/]+\/(ip[fn]s)\/([^/?#]+)/;
const pathPattern = /^\/(ip[fn]s)\/([^/?#]+)/;
const defaultProtocolMatch = 1;
const defaultHashMath = 2;
const subdomainGatewayPattern = /^https?:\/\/([^/]+)\.(ip[fn]s)\.[^/?]+/;
const subdomainIdMatch = 1;
const subdomainProtocolMatch = 2;
const fqdnWithTld = /^(([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])\.)+([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])$/;
function isMultihash(hash) {
  const formatted = convertToString(hash);
  if (formatted === false) {
    return false;
  }
  try {
    decode$2(base58btc.decode(`z${formatted}`));
  } catch {
    return false;
  }
  return true;
}
function isMultiaddr(input) {
  try {
    return Boolean(multiaddr(input));
  } catch {
    return false;
  }
}
function isBase32EncodedMultibase(hash) {
  try {
    let cid;
    if (isString(hash)) {
      cid = CID.parse(hash);
    } else {
      cid = CID.asCID(hash);
    }
    if (cid == null) {
      return false;
    }
    base32.decode(cid.toString());
  } catch {
    return false;
  }
  return true;
}
function isCID(hash) {
  try {
    if (isString(hash)) {
      return Boolean(CID.parse(hash));
    }
    if (hash instanceof Uint8Array) {
      return Boolean(CID.decode(hash));
    }
    return Boolean(CID.asCID(hash));
  } catch {
    return false;
  }
}
function isPeerMultiaddr(input) {
  return isMultiaddr(input) && P2P.matches(input);
}
function isIpfs(input, pattern, protocolMatch = defaultProtocolMatch, hashMatch = defaultHashMath) {
  const formatted = convertToString(input);
  if (formatted === false) {
    return false;
  }
  const match = formatted.match(pattern);
  if (match == null) {
    return false;
  }
  if (match[protocolMatch] !== "ipfs") {
    return false;
  }
  let hash = match[hashMatch];
  if (hash != null && pattern === subdomainGatewayPattern) {
    hash = hash.toLowerCase();
  }
  return isCID(hash);
}
function isIpns(input, pattern, protocolMatch = defaultProtocolMatch, hashMatch = defaultHashMath) {
  const formatted = convertToString(input);
  if (formatted === false) {
    return false;
  }
  const match = formatted.match(pattern);
  if (match == null) {
    return false;
  }
  if (match[protocolMatch] !== "ipns") {
    return false;
  }
  let ipnsId = match[hashMatch];
  if (ipnsId != null && pattern === subdomainGatewayPattern) {
    ipnsId = ipnsId.toLowerCase();
    if (isCID(ipnsId))
      return true;
    try {
      if (!ipnsId.includes(".") && ipnsId.includes("-")) {
        ipnsId = ipnsId.replace(/--/g, "@").replace(/-/g, ".").replace(/@/g, "-");
      }
      const { hostname } = new isoUrl.URL(`http://${ipnsId}`);
      return fqdnWithTld.test(hostname);
    } catch (e) {
      return false;
    }
  }
  return true;
}
function isString(input) {
  return typeof input === "string";
}
function convertToString(input) {
  if (input instanceof Uint8Array) {
    return toString$1(input, "base58btc");
  }
  if (isString(input)) {
    return input;
  }
  return false;
}
const ipfsSubdomain = (url2) => isIpfs(url2, subdomainGatewayPattern, subdomainProtocolMatch, subdomainIdMatch);
const ipnsSubdomain = (url2) => isIpns(url2, subdomainGatewayPattern, subdomainProtocolMatch, subdomainIdMatch);
const subdomain = (url2) => ipfsSubdomain(url2) || ipnsSubdomain(url2);
const ipfsUrl = (url2) => isIpfs(url2, pathGatewayPattern) || ipfsSubdomain(url2);
const ipnsUrl = (url2) => isIpns(url2, pathGatewayPattern) || ipnsSubdomain(url2);
const url = (url2) => ipfsUrl(url2) || ipnsUrl(url2) || subdomain(url2);
const path = (path2) => isIpfs(path2, pathPattern) || isIpns(path2, pathPattern);
const base32cid = (cid) => isCID(cid) && isBase32EncodedMultibase(cid);
const ipfsPath = (path2) => isIpfs(path2, pathPattern);
const ipnsPath = (path2) => isIpns(path2, pathPattern);
const urlOrPath = (x) => url(x) || path(x);
const cidPath = (path2) => isString(path2) && !isCID(path2) && isIpfs(`/ipfs/${path2}`, pathPattern);
export {
  base32cid,
  isCID as cid,
  cidPath,
  ipfsPath,
  ipfsSubdomain,
  ipfsUrl,
  ipnsPath,
  ipnsSubdomain,
  ipnsUrl,
  isMultiaddr as multiaddr,
  isMultihash as multihash,
  path,
  pathGatewayPattern,
  pathPattern,
  isPeerMultiaddr as peerMultiaddr,
  subdomain,
  subdomainGatewayPattern,
  url,
  urlOrPath
};
