import { a as eventsExports, h as buffer, i as require$$3, c as commonjsGlobal, j as inherits_browserExports, s as safeBufferExports, d as getAugmentedNamespace } from "./index-CCWU6epd.js";
var readableBrowser = { exports: {} };
var streamBrowser = eventsExports.EventEmitter;
var buffer_list;
var hasRequiredBuffer_list;
function requireBuffer_list() {
  if (hasRequiredBuffer_list) return buffer_list;
  hasRequiredBuffer_list = 1;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var _require = buffer, Buffer2 = _require.Buffer;
  var _require2 = require$$3, inspect = _require2.inspect;
  var custom = inspect && inspect.custom || "inspect";
  function copyBuffer(src, target, offset) {
    Buffer2.prototype.copy.call(src, target, offset);
  }
  buffer_list = /* @__PURE__ */ function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v2) {
        var entry = {
          data: v2,
          next: null
        };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v2) {
        var entry = {
          data: v2,
          next: this.head
        };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s2) {
        if (this.length === 0) return "";
        var p2 = this.head;
        var ret = "" + p2.data;
        while (p2 = p2.next) ret += s2 + p2.data;
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n2) {
        if (this.length === 0) return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n2 >>> 0);
        var p2 = this.head;
        var i2 = 0;
        while (p2) {
          copyBuffer(p2.data, ret, i2);
          i2 += p2.data.length;
          p2 = p2.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n2, hasStrings) {
        var ret;
        if (n2 < this.head.data.length) {
          ret = this.head.data.slice(0, n2);
          this.head.data = this.head.data.slice(n2);
        } else if (n2 === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n2) {
        var p2 = this.head;
        var c2 = 1;
        var ret = p2.data;
        n2 -= ret.length;
        while (p2 = p2.next) {
          var str = p2.data;
          var nb = n2 > str.length ? str.length : n2;
          if (nb === str.length) ret += str;
          else ret += str.slice(0, n2);
          n2 -= nb;
          if (n2 === 0) {
            if (nb === str.length) {
              ++c2;
              if (p2.next) this.head = p2.next;
              else this.head = this.tail = null;
            } else {
              this.head = p2;
              p2.data = str.slice(nb);
            }
            break;
          }
          ++c2;
        }
        this.length -= c2;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n2) {
        var ret = Buffer2.allocUnsafe(n2);
        var p2 = this.head;
        var c2 = 1;
        p2.data.copy(ret);
        n2 -= p2.data.length;
        while (p2 = p2.next) {
          var buf = p2.data;
          var nb = n2 > buf.length ? buf.length : n2;
          buf.copy(ret, ret.length - n2, 0, nb);
          n2 -= nb;
          if (n2 === 0) {
            if (nb === buf.length) {
              ++c2;
              if (p2.next) this.head = p2.next;
              else this.head = this.tail = null;
            } else {
              this.head = p2;
              p2.data = buf.slice(nb);
            }
            break;
          }
          ++c2;
        }
        this.length -= c2;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_2, options) {
        return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
  return buffer_list;
}
function destroy(err, cb) {
  var _this = this;
  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;
  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }
    return this;
  }
  if (this._readableState) {
    this._readableState.destroyed = true;
  }
  if (this._writableState) {
    this._writableState.destroyed = true;
  }
  this._destroy(err || null, function(err2) {
    if (!cb && err2) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err2);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err2);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err2);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });
  return this;
}
function emitErrorAndCloseNT(self2, err) {
  emitErrorNT(self2, err);
  emitCloseNT(self2);
}
function emitCloseNT(self2) {
  if (self2._writableState && !self2._writableState.emitClose) return;
  if (self2._readableState && !self2._readableState.emitClose) return;
  self2.emit("close");
}
function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }
  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}
function emitErrorNT(self2, err) {
  self2.emit("error", err);
}
function errorOrDestroy(stream, err) {
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
  else stream.emit("error", err);
}
var destroy_1 = {
  destroy,
  undestroy,
  errorOrDestroy
};
var errorsBrowser = {};
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var codes = {};
function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }
  function getMessage(arg1, arg2, arg3) {
    if (typeof message === "string") {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }
  var NodeError = /* @__PURE__ */ function(_Base) {
    _inheritsLoose(NodeError2, _Base);
    function NodeError2(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }
    return NodeError2;
  }(Base);
  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
}
function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function(i2) {
      return String(i2);
    });
    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
}
function startsWith(str, search, pos) {
  return str.substr(0, search.length) === search;
}
function endsWith(str, search, this_len) {
  if (this_len === void 0 || this_len > str.length) {
    this_len = str.length;
  }
  return str.substring(this_len - search.length, this_len) === search;
}
function includes(str, search, start) {
  if (typeof start !== "number") {
    start = 0;
  }
  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}
createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
  var determiner;
  if (typeof expected === "string" && startsWith(expected, "not ")) {
    determiner = "must not be";
    expected = expected.replace(/^not /, "");
  } else {
    determiner = "must be";
  }
  var msg;
  if (endsWith(name, " argument")) {
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  } else {
    var type = includes(name, ".") ? "property" : "argument";
    msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  }
  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
  return "The " + name + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function(name) {
  return "Cannot call " + name + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
  return "Unknown encoding: " + arg;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
errorsBrowser.codes = codes;
var ERR_INVALID_OPT_VALUE = errorsBrowser.codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state2, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : "highWaterMark";
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }
    return Math.floor(hwm);
  }
  return state2.objectMode ? 16 : 16 * 1024;
}
var state = {
  getHighWaterMark
};
var browser = deprecate;
function deprecate(fn, msg) {
  if (config("noDeprecation")) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config("throwDeprecation")) {
        throw new Error(msg);
      } else if (config("traceDeprecation")) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function config(name) {
  try {
    if (!commonjsGlobal.localStorage) return false;
  } catch (_2) {
    return false;
  }
  var val = commonjsGlobal.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === "true";
}
var _stream_writable;
var hasRequired_stream_writable;
function require_stream_writable() {
  if (hasRequired_stream_writable) return _stream_writable;
  hasRequired_stream_writable = 1;
  _stream_writable = Writable;
  function CorkedRequest(state2) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state2);
    };
  }
  var Duplex2;
  Writable.WritableState = WritableState;
  var internalUtil = {
    deprecate: browser
  };
  var Stream = streamBrowser;
  var Buffer2 = buffer.Buffer;
  var OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var destroyImpl = destroy_1;
  var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
  var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK2 = _require$codes2.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes2.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED2 = _require$codes2.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes2.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes2.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes2.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy2 = destroyImpl.errorOrDestroy;
  inherits_browserExports(Writable, Stream);
  function nop() {
  }
  function WritableState(options, stream, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_2) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object)) return true;
        if (this !== Writable) return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object) {
      return object instanceof this;
    };
  }
  function Writable(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    var isDuplex = this instanceof Duplex2;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function") this._write = options.write;
      if (typeof options.writev === "function") this._writev = options.writev;
      if (typeof options.destroy === "function") this._destroy = options.destroy;
      if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy2(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy2(stream, er);
    process.nextTick(cb, er);
  }
  function validChunk(stream, state2, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy2(stream, er);
      process.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    var ret = false;
    var isBuf = !state2.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state2.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state2.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state2, chunk, cb)) {
      state2.pendingcb++;
      ret = writeOrBuffer(this, state2, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state2 = this._writableState;
    if (state2.corked) {
      state2.corked--;
      if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) clearBuffer(this, state2);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state2, chunk, encoding) {
    if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream, state2, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state2, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state2.objectMode ? 1 : chunk.length;
    state2.length += len;
    var ret = state2.length < state2.highWaterMark;
    if (!ret) state2.needDrain = true;
    if (state2.writing || state2.corked) {
      var last = state2.lastBufferedRequest;
      state2.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state2.lastBufferedRequest;
      } else {
        state2.bufferedRequest = state2.lastBufferedRequest;
      }
      state2.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state2, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state2, writev, len, chunk, encoding, cb) {
    state2.writelen = len;
    state2.writecb = cb;
    state2.writing = true;
    state2.sync = true;
    if (state2.destroyed) state2.onwrite(new ERR_STREAM_DESTROYED2("write"));
    else if (writev) stream._writev(chunk, state2.onwrite);
    else stream._write(chunk, encoding, state2.onwrite);
    state2.sync = false;
  }
  function onwriteError(stream, state2, sync, er, cb) {
    --state2.pendingcb;
    if (sync) {
      process.nextTick(cb, er);
      process.nextTick(finishMaybe, stream, state2);
      stream._writableState.errorEmitted = true;
      errorOrDestroy2(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy2(stream, er);
      finishMaybe(stream, state2);
    }
  }
  function onwriteStateUpdate(state2) {
    state2.writing = false;
    state2.writecb = null;
    state2.length -= state2.writelen;
    state2.writelen = 0;
  }
  function onwrite(stream, er) {
    var state2 = stream._writableState;
    var sync = state2.sync;
    var cb = state2.writecb;
    if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK2();
    onwriteStateUpdate(state2);
    if (er) onwriteError(stream, state2, sync, er, cb);
    else {
      var finished = needFinish(state2) || stream.destroyed;
      if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
        clearBuffer(stream, state2);
      }
      if (sync) {
        process.nextTick(afterWrite, stream, state2, finished, cb);
      } else {
        afterWrite(stream, state2, finished, cb);
      }
    }
  }
  function afterWrite(stream, state2, finished, cb) {
    if (!finished) onwriteDrain(stream, state2);
    state2.pendingcb--;
    cb();
    finishMaybe(stream, state2);
  }
  function onwriteDrain(stream, state2) {
    if (state2.length === 0 && state2.needDrain) {
      state2.needDrain = false;
      stream.emit("drain");
    }
  }
  function clearBuffer(stream, state2) {
    state2.bufferProcessing = true;
    var entry = state2.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l2 = state2.bufferedRequestCount;
      var buffer2 = new Array(l2);
      var holder = state2.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer2[count] = entry;
        if (!entry.isBuf) allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer2.allBuffers = allBuffers;
      doWrite(stream, state2, true, state2.length, buffer2, "", holder.finish);
      state2.pendingcb++;
      state2.lastBufferedRequest = null;
      if (holder.next) {
        state2.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state2.corkedRequestsFree = new CorkedRequest(state2);
      }
      state2.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state2.objectMode ? 1 : chunk.length;
        doWrite(stream, state2, false, len, chunk, encoding, cb);
        entry = entry.next;
        state2.bufferedRequestCount--;
        if (state2.writing) {
          break;
        }
      }
      if (entry === null) state2.lastBufferedRequest = null;
    }
    state2.bufferedRequest = entry;
    state2.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED2("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
    if (state2.corked) {
      state2.corked = 1;
      this.uncork();
    }
    if (!state2.ending) endWritable(this, state2, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function needFinish(state2) {
    return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
  }
  function callFinal(stream, state2) {
    stream._final(function(err) {
      state2.pendingcb--;
      if (err) {
        errorOrDestroy2(stream, err);
      }
      state2.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state2);
    });
  }
  function prefinish2(stream, state2) {
    if (!state2.prefinished && !state2.finalCalled) {
      if (typeof stream._final === "function" && !state2.destroyed) {
        state2.pendingcb++;
        state2.finalCalled = true;
        process.nextTick(callFinal, stream, state2);
      } else {
        state2.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state2) {
    var need = needFinish(state2);
    if (need) {
      prefinish2(stream, state2);
      if (state2.pendingcb === 0) {
        state2.finished = true;
        stream.emit("finish");
        if (state2.autoDestroy) {
          var rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream, state2, cb) {
    state2.ending = true;
    finishMaybe(stream, state2);
    if (cb) {
      if (state2.finished) process.nextTick(cb);
      else stream.once("finish", cb);
    }
    state2.ended = true;
    stream.writable = false;
  }
  function onCorkedFinish(corkReq, state2, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state2.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state2.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return _stream_writable;
}
var _stream_duplex;
var hasRequired_stream_duplex;
function require_stream_duplex() {
  if (hasRequired_stream_duplex) return _stream_duplex;
  hasRequired_stream_duplex = 1;
  var objectKeys = Object.keys || function(obj) {
    var keys2 = [];
    for (var key in obj) keys2.push(key);
    return keys2;
  };
  _stream_duplex = Duplex2;
  var Readable = require_stream_readable();
  var Writable = require_stream_writable();
  inherits_browserExports(Duplex2, Readable);
  {
    var keys = objectKeys(Writable.prototype);
    for (var v2 = 0; v2 < keys.length; v2++) {
      var method = keys[v2];
      if (!Duplex2.prototype[method]) Duplex2.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex2(options) {
    if (!(this instanceof Duplex2)) return new Duplex2(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false) this.readable = false;
      if (options.writable === false) this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended) return;
    process.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex2.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return _stream_duplex;
}
var string_decoder = {};
var hasRequiredString_decoder;
function requireString_decoder() {
  if (hasRequiredString_decoder) return string_decoder;
  hasRequiredString_decoder = 1;
  var Buffer2 = safeBufferExports.Buffer;
  var isEncoding = Buffer2.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while (true) {
      switch (enc) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return enc;
        default:
          if (retried) return;
          enc = ("" + enc).toLowerCase();
          retried = true;
      }
    }
  }
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
  }
  string_decoder.StringDecoder = StringDecoder;
  function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case "utf16le":
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case "utf8":
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case "base64":
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer2.allocUnsafe(nb);
  }
  StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r2;
    var i2;
    if (this.lastNeed) {
      r2 = this.fillLast(buf);
      if (r2 === void 0) return "";
      i2 = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i2 = 0;
    }
    if (i2 < buf.length) return r2 ? r2 + this.text(buf, i2) : this.text(buf, i2);
    return r2 || "";
  };
  StringDecoder.prototype.end = utf8End;
  StringDecoder.prototype.text = utf8Text;
  StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  function utf8CheckByte(byte) {
    if (byte <= 127) return 0;
    else if (byte >> 5 === 6) return 2;
    else if (byte >> 4 === 14) return 3;
    else if (byte >> 3 === 30) return 4;
    return byte >> 6 === 2 ? -1 : -2;
  }
  function utf8CheckIncomplete(self2, buf, i2) {
    var j2 = buf.length - 1;
    if (j2 < i2) return 0;
    var nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) self2.lastNeed = nb - 1;
      return nb;
    }
    if (--j2 < i2 || nb === -2) return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) self2.lastNeed = nb - 2;
      return nb;
    }
    if (--j2 < i2 || nb === -2) return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2) nb = 0;
        else self2.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }
  function utf8CheckExtraBytes(self2, buf, p2) {
    if ((buf[0] & 192) !== 128) {
      self2.lastNeed = 0;
      return "�";
    }
    if (self2.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 192) !== 128) {
        self2.lastNeed = 1;
        return "�";
      }
      if (self2.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 192) !== 128) {
          self2.lastNeed = 2;
          return "�";
        }
      }
    }
  }
  function utf8FillLast(buf) {
    var p2 = this.lastTotal - this.lastNeed;
    var r2 = utf8CheckExtraBytes(this, buf);
    if (r2 !== void 0) return r2;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p2, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p2, 0, buf.length);
    this.lastNeed -= buf.length;
  }
  function utf8Text(buf, i2) {
    var total = utf8CheckIncomplete(this, buf, i2);
    if (!this.lastNeed) return buf.toString("utf8", i2);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i2, end);
  }
  function utf8End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r2 + "�";
    return r2;
  }
  function utf16Text(buf, i2) {
    if ((buf.length - i2) % 2 === 0) {
      var r2 = buf.toString("utf16le", i2);
      if (r2) {
        var c2 = r2.charCodeAt(r2.length - 1);
        if (c2 >= 55296 && c2 <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r2.slice(0, -1);
        }
      }
      return r2;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i2, buf.length - 1);
  }
  function utf16End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r2 + this.lastChar.toString("utf16le", 0, end);
    }
    return r2;
  }
  function base64Text(buf, i2) {
    var n2 = (buf.length - i2) % 3;
    if (n2 === 0) return buf.toString("base64", i2);
    this.lastNeed = 3 - n2;
    this.lastTotal = 3;
    if (n2 === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i2, buf.length - n2);
  }
  function base64End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r2;
  }
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }
  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
  }
  return string_decoder;
}
var ERR_STREAM_PREMATURE_CLOSE = errorsBrowser.codes.ERR_STREAM_PREMATURE_CLOSE;
function once$1(callback) {
  var called = false;
  return function() {
    if (called) return;
    called = true;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callback.apply(this, args);
  };
}
function noop$1() {
}
function isRequest$1(stream) {
  return stream.setHeader && typeof stream.abort === "function";
}
function eos$1(stream, opts, callback) {
  if (typeof opts === "function") return eos$1(stream, null, opts);
  if (!opts) opts = {};
  callback = once$1(callback || noop$1);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;
  var onlegacyfinish = function onlegacyfinish2() {
    if (!stream.writable) onfinish();
  };
  var writableEnded = stream._writableState && stream._writableState.finished;
  var onfinish = function onfinish2() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };
  var readableEnded = stream._readableState && stream._readableState.endEmitted;
  var onend = function onend2() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };
  var onerror = function onerror2(err) {
    callback.call(stream, err);
  };
  var onclose = function onclose2() {
    var err;
    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };
  var onrequest = function onrequest2() {
    stream.req.on("finish", onfinish);
  };
  if (isRequest$1(stream)) {
    stream.on("complete", onfinish);
    stream.on("abort", onclose);
    if (stream.req) onrequest();
    else stream.on("request", onrequest);
  } else if (writable && !stream._writableState) {
    stream.on("end", onlegacyfinish);
    stream.on("close", onlegacyfinish);
  }
  stream.on("end", onend);
  stream.on("finish", onfinish);
  if (opts.error !== false) stream.on("error", onerror);
  stream.on("close", onclose);
  return function() {
    stream.removeListener("complete", onfinish);
    stream.removeListener("abort", onclose);
    stream.removeListener("request", onrequest);
    if (stream.req) stream.req.removeListener("finish", onfinish);
    stream.removeListener("end", onlegacyfinish);
    stream.removeListener("close", onlegacyfinish);
    stream.removeListener("finish", onfinish);
    stream.removeListener("end", onend);
    stream.removeListener("error", onerror);
    stream.removeListener("close", onclose);
  };
}
var endOfStream = eos$1;
var async_iterator;
var hasRequiredAsync_iterator;
function requireAsync_iterator() {
  if (hasRequiredAsync_iterator) return async_iterator;
  hasRequiredAsync_iterator = 1;
  var _Object$setPrototypeO;
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var finished = endOfStream;
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult(value, done2) {
    return {
      value,
      done: done2
    };
  }
  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data, false));
      }
    }
  }
  function onReadable(iter) {
    process.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve(createIterResult(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next() {
      var _this = this;
      var error = this[kError];
      if (error !== null) {
        return Promise.reject(error);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve, reject) {
          process.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve = iterator[kLastResolve];
      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(void 0, true));
      }
      iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  async_iterator = createReadableStreamAsyncIterator;
  return async_iterator;
}
var fromBrowser;
var hasRequiredFromBrowser;
function requireFromBrowser() {
  if (hasRequiredFromBrowser) return fromBrowser;
  hasRequiredFromBrowser = 1;
  fromBrowser = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return fromBrowser;
}
var _stream_readable;
var hasRequired_stream_readable;
function require_stream_readable() {
  if (hasRequired_stream_readable) return _stream_readable;
  hasRequired_stream_readable = 1;
  _stream_readable = Readable;
  var Duplex2;
  Readable.ReadableState = ReadableState;
  eventsExports.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream = streamBrowser;
  var Buffer2 = buffer.Buffer;
  var OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var debugUtil = require$$3;
  var debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug2() {
    };
  }
  var BufferList = requireBuffer_list();
  var destroyImpl = destroy_1;
  var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
  var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes2.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder;
  var createReadableStreamAsyncIterator;
  var from;
  inherits_browserExports(Readable, Stream);
  var errorOrDestroy2 = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    if (!(this instanceof Readable)) return new Readable(options);
    var isDuplex = this instanceof Duplex2;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function") this._read = options.read;
      if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state2 = this._readableState;
    var skipChunkCheck;
    if (!state2.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state2.defaultEncoding;
        if (encoding !== state2.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state2 = stream._readableState;
    if (chunk === null) {
      state2.reading = false;
      onEofChunk(stream, state2);
    } else {
      var er;
      if (!skipChunkCheck) er = chunkInvalid(state2, chunk);
      if (er) {
        errorOrDestroy2(stream, er);
      } else if (state2.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state2.endEmitted) errorOrDestroy2(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else addChunk(stream, state2, chunk, true);
        } else if (state2.ended) {
          errorOrDestroy2(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state2.destroyed) {
          return false;
        } else {
          state2.reading = false;
          if (state2.decoder && !encoding) {
            chunk = state2.decoder.write(chunk);
            if (state2.objectMode || chunk.length !== 0) addChunk(stream, state2, chunk, false);
            else maybeReadMore(stream, state2);
          } else {
            addChunk(stream, state2, chunk, false);
          }
        }
      } else if (!addToFront) {
        state2.reading = false;
        maybeReadMore(stream, state2);
      }
    }
    return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
  }
  function addChunk(stream, state2, chunk, addToFront) {
    if (state2.flowing && state2.length === 0 && !state2.sync) {
      state2.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state2.length += state2.objectMode ? 1 : chunk.length;
      if (addToFront) state2.buffer.unshift(chunk);
      else state2.buffer.push(chunk);
      if (state2.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state2);
  }
  function chunkInvalid(state2, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p2 = this._readableState.buffer.head;
    var content = "";
    while (p2 !== null) {
      content += decoder.write(p2.data);
      p2 = p2.next;
    }
    this._readableState.buffer.clear();
    if (content !== "") this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n2) {
    if (n2 >= MAX_HWM) {
      n2 = MAX_HWM;
    } else {
      n2--;
      n2 |= n2 >>> 1;
      n2 |= n2 >>> 2;
      n2 |= n2 >>> 4;
      n2 |= n2 >>> 8;
      n2 |= n2 >>> 16;
      n2++;
    }
    return n2;
  }
  function howMuchToRead(n2, state2) {
    if (n2 <= 0 || state2.length === 0 && state2.ended) return 0;
    if (state2.objectMode) return 1;
    if (n2 !== n2) {
      if (state2.flowing && state2.length) return state2.buffer.head.data.length;
      else return state2.length;
    }
    if (n2 > state2.highWaterMark) state2.highWaterMark = computeNewHighWaterMark(n2);
    if (n2 <= state2.length) return n2;
    if (!state2.ended) {
      state2.needReadable = true;
      return 0;
    }
    return state2.length;
  }
  Readable.prototype.read = function(n2) {
    debug("read", n2);
    n2 = parseInt(n2, 10);
    var state2 = this._readableState;
    var nOrig = n2;
    if (n2 !== 0) state2.emittedReadable = false;
    if (n2 === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
      debug("read: emitReadable", state2.length, state2.ended);
      if (state2.length === 0 && state2.ended) endReadable(this);
      else emitReadable(this);
      return null;
    }
    n2 = howMuchToRead(n2, state2);
    if (n2 === 0 && state2.ended) {
      if (state2.length === 0) endReadable(this);
      return null;
    }
    var doRead = state2.needReadable;
    debug("need readable", doRead);
    if (state2.length === 0 || state2.length - n2 < state2.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state2.ended || state2.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state2.reading = true;
      state2.sync = true;
      if (state2.length === 0) state2.needReadable = true;
      this._read(state2.highWaterMark);
      state2.sync = false;
      if (!state2.reading) n2 = howMuchToRead(nOrig, state2);
    }
    var ret;
    if (n2 > 0) ret = fromList(n2, state2);
    else ret = null;
    if (ret === null) {
      state2.needReadable = state2.length <= state2.highWaterMark;
      n2 = 0;
    } else {
      state2.length -= n2;
      state2.awaitDrain = 0;
    }
    if (state2.length === 0) {
      if (!state2.ended) state2.needReadable = true;
      if (nOrig !== n2 && state2.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream, state2) {
    debug("onEofChunk");
    if (state2.ended) return;
    if (state2.decoder) {
      var chunk = state2.decoder.end();
      if (chunk && chunk.length) {
        state2.buffer.push(chunk);
        state2.length += state2.objectMode ? 1 : chunk.length;
      }
    }
    state2.ended = true;
    if (state2.sync) {
      emitReadable(stream);
    } else {
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        state2.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  }
  function emitReadable(stream) {
    var state2 = stream._readableState;
    debug("emitReadable", state2.needReadable, state2.emittedReadable);
    state2.needReadable = false;
    if (!state2.emittedReadable) {
      debug("emitReadable", state2.flowing);
      state2.emittedReadable = true;
      process.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    var state2 = stream._readableState;
    debug("emitReadable_", state2.destroyed, state2.length, state2.ended);
    if (!state2.destroyed && (state2.length || state2.ended)) {
      stream.emit("readable");
      state2.emittedReadable = false;
    }
    state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
    flow(stream);
  }
  function maybeReadMore(stream, state2) {
    if (!state2.readingMore) {
      state2.readingMore = true;
      process.nextTick(maybeReadMore_, stream, state2);
    }
  }
  function maybeReadMore_(stream, state2) {
    while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
      var len = state2.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state2.length)
        break;
    }
    state2.readingMore = false;
  }
  Readable.prototype._read = function(n2) {
    errorOrDestroy2(this, new ERR_METHOD_NOT_IMPLEMENTED2("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state2 = this._readableState;
    switch (state2.pipesCount) {
      case 0:
        state2.pipes = dest;
        break;
      case 1:
        state2.pipes = [state2.pipes, dest];
        break;
      default:
        state2.pipes.push(dest);
        break;
    }
    state2.pipesCount += 1;
    debug("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state2.endEmitted) process.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state2.awaitDrain);
          state2.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0) errorOrDestroy2(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state2.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state2 = src._readableState;
      debug("pipeOnDrain", state2.awaitDrain);
      if (state2.awaitDrain) state2.awaitDrain--;
      if (state2.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state2.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state2 = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state2.pipesCount === 0) return this;
    if (state2.pipesCount === 1) {
      if (dest && dest !== state2.pipes) return this;
      if (!dest) dest = state2.pipes;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      if (dest) dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state2.pipes;
      var len = state2.pipesCount;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      for (var i2 = 0; i2 < len; i2++) dests[i2].emit("unpipe", this, {
        hasUnpiped: false
      });
      return this;
    }
    var index = indexOf(state2.pipes, dest);
    if (index === -1) return this;
    state2.pipes.splice(index, 1);
    state2.pipesCount -= 1;
    if (state2.pipesCount === 1) state2.pipes = state2.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state2 = this._readableState;
    if (ev === "data") {
      state2.readableListening = this.listenerCount("readable") > 0;
      if (state2.flowing !== false) this.resume();
    } else if (ev === "readable") {
      if (!state2.endEmitted && !state2.readableListening) {
        state2.readableListening = state2.needReadable = true;
        state2.flowing = false;
        state2.emittedReadable = false;
        debug("on readable", state2.length, state2.reading);
        if (state2.length) {
          emitReadable(this);
        } else if (!state2.reading) {
          process.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state2 = self2._readableState;
    state2.readableListening = self2.listenerCount("readable") > 0;
    if (state2.resumeScheduled && !state2.paused) {
      state2.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state2 = this._readableState;
    if (!state2.flowing) {
      debug("resume");
      state2.flowing = !state2.readableListening;
      resume(this, state2);
    }
    state2.paused = false;
    return this;
  };
  function resume(stream, state2) {
    if (!state2.resumeScheduled) {
      state2.resumeScheduled = true;
      process.nextTick(resume_, stream, state2);
    }
  }
  function resume_(stream, state2) {
    debug("resume", state2.reading);
    if (!state2.reading) {
      stream.read(0);
    }
    state2.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state2.flowing && !state2.reading) stream.read(0);
  }
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream) {
    var state2 = stream._readableState;
    debug("flow", state2.flowing);
    while (state2.flowing && stream.read() !== null) ;
  }
  Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state2 = this._readableState;
    var paused = false;
    stream.on("end", function() {
      debug("wrapped end");
      if (state2.decoder && !state2.ended) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length) _this.push(chunk);
      }
      _this.push(null);
    });
    stream.on("data", function(chunk) {
      debug("wrapped data");
      if (state2.decoder) chunk = state2.decoder.write(chunk);
      if (state2.objectMode && (chunk === null || chunk === void 0)) return;
      else if (!state2.objectMode && (!chunk || !chunk.length)) return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i2 in stream) {
      if (this[i2] === void 0 && typeof stream[i2] === "function") {
        this[i2] = /* @__PURE__ */ function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i2);
      }
    }
    for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
      stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
    }
    this._read = function(n3) {
      debug("wrapped _read", n3);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = requireAsync_iterator();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state2) {
      if (this._readableState) {
        this._readableState.flowing = state2;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.length;
    }
  });
  function fromList(n2, state2) {
    if (state2.length === 0) return null;
    var ret;
    if (state2.objectMode) ret = state2.buffer.shift();
    else if (!n2 || n2 >= state2.length) {
      if (state2.decoder) ret = state2.buffer.join("");
      else if (state2.buffer.length === 1) ret = state2.buffer.first();
      else ret = state2.buffer.concat(state2.length);
      state2.buffer.clear();
    } else {
      ret = state2.buffer.consume(n2, state2.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    var state2 = stream._readableState;
    debug("endReadable", state2.endEmitted);
    if (!state2.endEmitted) {
      state2.ended = true;
      process.nextTick(endReadableNT, state2, stream);
    }
  }
  function endReadableNT(state2, stream) {
    debug("endReadableNT", state2.endEmitted, state2.length);
    if (!state2.endEmitted && state2.length === 0) {
      state2.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state2.autoDestroy) {
        var wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from === void 0) {
        from = requireFromBrowser();
      }
      return from(Readable, iterable, opts);
    };
  }
  function indexOf(xs, x2) {
    for (var i2 = 0, l2 = xs.length; i2 < l2; i2++) {
      if (xs[i2] === x2) return i2;
    }
    return -1;
  }
  return _stream_readable;
}
var _stream_transform = Transform$3;
var _require$codes$1 = errorsBrowser.codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require_stream_duplex();
inherits_browserExports(Transform$3, Duplex);
function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (cb === null) {
    return this.emit("error", new ERR_MULTIPLE_CALLBACK());
  }
  ts.writechunk = null;
  ts.writecb = null;
  if (data != null)
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}
function Transform$3(options) {
  if (!(this instanceof Transform$3)) return new Transform$3(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === "function") this._transform = options.transform;
    if (typeof options.flush === "function") this._flush = options.flush;
  }
  this.on("prefinish", prefinish);
}
function prefinish() {
  var _this = this;
  if (typeof this._flush === "function" && !this._readableState.destroyed) {
    this._flush(function(er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}
Transform$3.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};
Transform$3.prototype._transform = function(chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
Transform$3.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};
Transform$3.prototype._read = function(n2) {
  var ts = this._transformState;
  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    ts.needTransform = true;
  }
};
Transform$3.prototype._destroy = function(err, cb) {
  Duplex.prototype._destroy.call(this, err, function(err2) {
    cb(err2);
  });
};
function done(stream, er, data) {
  if (er) return stream.emit("error", er);
  if (data != null)
    stream.push(data);
  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}
var _stream_passthrough = PassThrough;
var Transform$2 = _stream_transform;
inherits_browserExports(PassThrough, Transform$2);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform$2.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};
var eos;
function once(callback) {
  var called = false;
  return function() {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}
var _require$codes = errorsBrowser.codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
  if (err) throw err;
}
function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === "function";
}
function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on("close", function() {
    closed = true;
  });
  if (eos === void 0) eos = endOfStream;
  eos(stream, {
    readable: reading,
    writable: writing
  }, function(err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function(err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true;
    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === "function") return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED("pipe"));
  };
}
function call(fn) {
  fn();
}
function pipe(from, to) {
  return from.pipe(to);
}
function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== "function") return noop;
  return streams.pop();
}
function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }
  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS("streams");
  }
  var error;
  var destroys = streams.map(function(stream, i2) {
    var reading = i2 < streams.length - 1;
    var writing = i2 > 0;
    return destroyer(stream, reading, writing, function(err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}
var pipeline_1 = pipeline;
(function(module, exports2) {
  exports2 = module.exports = require_stream_readable();
  exports2.Stream = exports2;
  exports2.Readable = exports2;
  exports2.Writable = require_stream_writable();
  exports2.Duplex = require_stream_duplex();
  exports2.Transform = _stream_transform;
  exports2.PassThrough = _stream_passthrough;
  exports2.finished = endOfStream;
  exports2.pipeline = pipeline_1;
})(readableBrowser, readableBrowser.exports);
var readableBrowserExports = readableBrowser.exports;
const { Transform: Transform$1 } = readableBrowserExports;
var keccak$1 = (KeccakState) => class Keccak2 extends Transform$1 {
  constructor(rate, capacity, delimitedSuffix, hashBitLength, options) {
    super(options);
    this._rate = rate;
    this._capacity = capacity;
    this._delimitedSuffix = delimitedSuffix;
    this._hashBitLength = hashBitLength;
    this._options = options;
    this._state = new KeccakState();
    this._state.initialize(rate, capacity);
    this._finalized = false;
  }
  _transform(chunk, encoding, callback) {
    let error = null;
    try {
      this.update(chunk, encoding);
    } catch (err) {
      error = err;
    }
    callback(error);
  }
  _flush(callback) {
    let error = null;
    try {
      this.push(this.digest());
    } catch (err) {
      error = err;
    }
    callback(error);
  }
  update(data, encoding) {
    if (!Buffer.isBuffer(data) && typeof data !== "string") throw new TypeError("Data must be a string or a buffer");
    if (this._finalized) throw new Error("Digest already called");
    if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);
    this._state.absorb(data);
    return this;
  }
  digest(encoding) {
    if (this._finalized) throw new Error("Digest already called");
    this._finalized = true;
    if (this._delimitedSuffix) this._state.absorbLastFewBits(this._delimitedSuffix);
    let digest = this._state.squeeze(this._hashBitLength / 8);
    if (encoding !== void 0) digest = digest.toString(encoding);
    this._resetState();
    return digest;
  }
  // remove result from memory
  _resetState() {
    this._state.initialize(this._rate, this._capacity);
    return this;
  }
  // because sometimes we need hash right now and little later
  _clone() {
    const clone = new Keccak2(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    this._state.copy(clone._state);
    clone._finalized = this._finalized;
    return clone;
  }
};
const { Transform } = readableBrowserExports;
var shake = (KeccakState) => class Shake extends Transform {
  constructor(rate, capacity, delimitedSuffix, options) {
    super(options);
    this._rate = rate;
    this._capacity = capacity;
    this._delimitedSuffix = delimitedSuffix;
    this._options = options;
    this._state = new KeccakState();
    this._state.initialize(rate, capacity);
    this._finalized = false;
  }
  _transform(chunk, encoding, callback) {
    let error = null;
    try {
      this.update(chunk, encoding);
    } catch (err) {
      error = err;
    }
    callback(error);
  }
  _flush() {
  }
  _read(size) {
    this.push(this.squeeze(size));
  }
  update(data, encoding) {
    if (!Buffer.isBuffer(data) && typeof data !== "string") throw new TypeError("Data must be a string or a buffer");
    if (this._finalized) throw new Error("Squeeze already called");
    if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);
    this._state.absorb(data);
    return this;
  }
  squeeze(dataByteLength, encoding) {
    if (!this._finalized) {
      this._finalized = true;
      this._state.absorbLastFewBits(this._delimitedSuffix);
    }
    let data = this._state.squeeze(dataByteLength);
    if (encoding !== void 0) data = data.toString(encoding);
    return data;
  }
  _resetState() {
    this._state.initialize(this._rate, this._capacity);
    return this;
  }
  _clone() {
    const clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);
    this._state.copy(clone._state);
    clone._finalized = this._finalized;
    return clone;
  }
};
const createKeccak = keccak$1;
const createShake = shake;
var api = function(KeccakState) {
  const Keccak2 = createKeccak(KeccakState);
  const Shake = createShake(KeccakState);
  return function(algorithm, options) {
    const hash2 = typeof algorithm === "string" ? algorithm.toLowerCase() : algorithm;
    switch (hash2) {
      case "keccak224":
        return new Keccak2(1152, 448, null, 224, options);
      case "keccak256":
        return new Keccak2(1088, 512, null, 256, options);
      case "keccak384":
        return new Keccak2(832, 768, null, 384, options);
      case "keccak512":
        return new Keccak2(576, 1024, null, 512, options);
      case "sha3-224":
        return new Keccak2(1152, 448, 6, 224, options);
      case "sha3-256":
        return new Keccak2(1088, 512, 6, 256, options);
      case "sha3-384":
        return new Keccak2(832, 768, 6, 384, options);
      case "sha3-512":
        return new Keccak2(576, 1024, 6, 512, options);
      case "shake128":
        return new Shake(1344, 256, 31, options);
      case "shake256":
        return new Shake(1088, 512, 31, options);
      default:
        throw new Error("Invald algorithm: " + algorithm);
    }
  };
};
var keccakStateUnroll = {};
const P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
keccakStateUnroll.p1600 = function(s2) {
  for (let round = 0; round < 24; ++round) {
    const lo0 = s2[0] ^ s2[10] ^ s2[20] ^ s2[30] ^ s2[40];
    const hi0 = s2[1] ^ s2[11] ^ s2[21] ^ s2[31] ^ s2[41];
    const lo1 = s2[2] ^ s2[12] ^ s2[22] ^ s2[32] ^ s2[42];
    const hi1 = s2[3] ^ s2[13] ^ s2[23] ^ s2[33] ^ s2[43];
    const lo2 = s2[4] ^ s2[14] ^ s2[24] ^ s2[34] ^ s2[44];
    const hi2 = s2[5] ^ s2[15] ^ s2[25] ^ s2[35] ^ s2[45];
    const lo3 = s2[6] ^ s2[16] ^ s2[26] ^ s2[36] ^ s2[46];
    const hi3 = s2[7] ^ s2[17] ^ s2[27] ^ s2[37] ^ s2[47];
    const lo4 = s2[8] ^ s2[18] ^ s2[28] ^ s2[38] ^ s2[48];
    const hi4 = s2[9] ^ s2[19] ^ s2[29] ^ s2[39] ^ s2[49];
    let lo = lo4 ^ (lo1 << 1 | hi1 >>> 31);
    let hi = hi4 ^ (hi1 << 1 | lo1 >>> 31);
    const t1slo0 = s2[0] ^ lo;
    const t1shi0 = s2[1] ^ hi;
    const t1slo5 = s2[10] ^ lo;
    const t1shi5 = s2[11] ^ hi;
    const t1slo10 = s2[20] ^ lo;
    const t1shi10 = s2[21] ^ hi;
    const t1slo15 = s2[30] ^ lo;
    const t1shi15 = s2[31] ^ hi;
    const t1slo20 = s2[40] ^ lo;
    const t1shi20 = s2[41] ^ hi;
    lo = lo0 ^ (lo2 << 1 | hi2 >>> 31);
    hi = hi0 ^ (hi2 << 1 | lo2 >>> 31);
    const t1slo1 = s2[2] ^ lo;
    const t1shi1 = s2[3] ^ hi;
    const t1slo6 = s2[12] ^ lo;
    const t1shi6 = s2[13] ^ hi;
    const t1slo11 = s2[22] ^ lo;
    const t1shi11 = s2[23] ^ hi;
    const t1slo16 = s2[32] ^ lo;
    const t1shi16 = s2[33] ^ hi;
    const t1slo21 = s2[42] ^ lo;
    const t1shi21 = s2[43] ^ hi;
    lo = lo1 ^ (lo3 << 1 | hi3 >>> 31);
    hi = hi1 ^ (hi3 << 1 | lo3 >>> 31);
    const t1slo2 = s2[4] ^ lo;
    const t1shi2 = s2[5] ^ hi;
    const t1slo7 = s2[14] ^ lo;
    const t1shi7 = s2[15] ^ hi;
    const t1slo12 = s2[24] ^ lo;
    const t1shi12 = s2[25] ^ hi;
    const t1slo17 = s2[34] ^ lo;
    const t1shi17 = s2[35] ^ hi;
    const t1slo22 = s2[44] ^ lo;
    const t1shi22 = s2[45] ^ hi;
    lo = lo2 ^ (lo4 << 1 | hi4 >>> 31);
    hi = hi2 ^ (hi4 << 1 | lo4 >>> 31);
    const t1slo3 = s2[6] ^ lo;
    const t1shi3 = s2[7] ^ hi;
    const t1slo8 = s2[16] ^ lo;
    const t1shi8 = s2[17] ^ hi;
    const t1slo13 = s2[26] ^ lo;
    const t1shi13 = s2[27] ^ hi;
    const t1slo18 = s2[36] ^ lo;
    const t1shi18 = s2[37] ^ hi;
    const t1slo23 = s2[46] ^ lo;
    const t1shi23 = s2[47] ^ hi;
    lo = lo3 ^ (lo0 << 1 | hi0 >>> 31);
    hi = hi3 ^ (hi0 << 1 | lo0 >>> 31);
    const t1slo4 = s2[8] ^ lo;
    const t1shi4 = s2[9] ^ hi;
    const t1slo9 = s2[18] ^ lo;
    const t1shi9 = s2[19] ^ hi;
    const t1slo14 = s2[28] ^ lo;
    const t1shi14 = s2[29] ^ hi;
    const t1slo19 = s2[38] ^ lo;
    const t1shi19 = s2[39] ^ hi;
    const t1slo24 = s2[48] ^ lo;
    const t1shi24 = s2[49] ^ hi;
    const t2slo0 = t1slo0;
    const t2shi0 = t1shi0;
    const t2slo16 = t1shi5 << 4 | t1slo5 >>> 28;
    const t2shi16 = t1slo5 << 4 | t1shi5 >>> 28;
    const t2slo7 = t1slo10 << 3 | t1shi10 >>> 29;
    const t2shi7 = t1shi10 << 3 | t1slo10 >>> 29;
    const t2slo23 = t1shi15 << 9 | t1slo15 >>> 23;
    const t2shi23 = t1slo15 << 9 | t1shi15 >>> 23;
    const t2slo14 = t1slo20 << 18 | t1shi20 >>> 14;
    const t2shi14 = t1shi20 << 18 | t1slo20 >>> 14;
    const t2slo10 = t1slo1 << 1 | t1shi1 >>> 31;
    const t2shi10 = t1shi1 << 1 | t1slo1 >>> 31;
    const t2slo1 = t1shi6 << 12 | t1slo6 >>> 20;
    const t2shi1 = t1slo6 << 12 | t1shi6 >>> 20;
    const t2slo17 = t1slo11 << 10 | t1shi11 >>> 22;
    const t2shi17 = t1shi11 << 10 | t1slo11 >>> 22;
    const t2slo8 = t1shi16 << 13 | t1slo16 >>> 19;
    const t2shi8 = t1slo16 << 13 | t1shi16 >>> 19;
    const t2slo24 = t1slo21 << 2 | t1shi21 >>> 30;
    const t2shi24 = t1shi21 << 2 | t1slo21 >>> 30;
    const t2slo20 = t1shi2 << 30 | t1slo2 >>> 2;
    const t2shi20 = t1slo2 << 30 | t1shi2 >>> 2;
    const t2slo11 = t1slo7 << 6 | t1shi7 >>> 26;
    const t2shi11 = t1shi7 << 6 | t1slo7 >>> 26;
    const t2slo2 = t1shi12 << 11 | t1slo12 >>> 21;
    const t2shi2 = t1slo12 << 11 | t1shi12 >>> 21;
    const t2slo18 = t1slo17 << 15 | t1shi17 >>> 17;
    const t2shi18 = t1shi17 << 15 | t1slo17 >>> 17;
    const t2slo9 = t1shi22 << 29 | t1slo22 >>> 3;
    const t2shi9 = t1slo22 << 29 | t1shi22 >>> 3;
    const t2slo5 = t1slo3 << 28 | t1shi3 >>> 4;
    const t2shi5 = t1shi3 << 28 | t1slo3 >>> 4;
    const t2slo21 = t1shi8 << 23 | t1slo8 >>> 9;
    const t2shi21 = t1slo8 << 23 | t1shi8 >>> 9;
    const t2slo12 = t1slo13 << 25 | t1shi13 >>> 7;
    const t2shi12 = t1shi13 << 25 | t1slo13 >>> 7;
    const t2slo3 = t1slo18 << 21 | t1shi18 >>> 11;
    const t2shi3 = t1shi18 << 21 | t1slo18 >>> 11;
    const t2slo19 = t1shi23 << 24 | t1slo23 >>> 8;
    const t2shi19 = t1slo23 << 24 | t1shi23 >>> 8;
    const t2slo15 = t1slo4 << 27 | t1shi4 >>> 5;
    const t2shi15 = t1shi4 << 27 | t1slo4 >>> 5;
    const t2slo6 = t1slo9 << 20 | t1shi9 >>> 12;
    const t2shi6 = t1shi9 << 20 | t1slo9 >>> 12;
    const t2slo22 = t1shi14 << 7 | t1slo14 >>> 25;
    const t2shi22 = t1slo14 << 7 | t1shi14 >>> 25;
    const t2slo13 = t1slo19 << 8 | t1shi19 >>> 24;
    const t2shi13 = t1shi19 << 8 | t1slo19 >>> 24;
    const t2slo4 = t1slo24 << 14 | t1shi24 >>> 18;
    const t2shi4 = t1shi24 << 14 | t1slo24 >>> 18;
    s2[0] = t2slo0 ^ ~t2slo1 & t2slo2;
    s2[1] = t2shi0 ^ ~t2shi1 & t2shi2;
    s2[10] = t2slo5 ^ ~t2slo6 & t2slo7;
    s2[11] = t2shi5 ^ ~t2shi6 & t2shi7;
    s2[20] = t2slo10 ^ ~t2slo11 & t2slo12;
    s2[21] = t2shi10 ^ ~t2shi11 & t2shi12;
    s2[30] = t2slo15 ^ ~t2slo16 & t2slo17;
    s2[31] = t2shi15 ^ ~t2shi16 & t2shi17;
    s2[40] = t2slo20 ^ ~t2slo21 & t2slo22;
    s2[41] = t2shi20 ^ ~t2shi21 & t2shi22;
    s2[2] = t2slo1 ^ ~t2slo2 & t2slo3;
    s2[3] = t2shi1 ^ ~t2shi2 & t2shi3;
    s2[12] = t2slo6 ^ ~t2slo7 & t2slo8;
    s2[13] = t2shi6 ^ ~t2shi7 & t2shi8;
    s2[22] = t2slo11 ^ ~t2slo12 & t2slo13;
    s2[23] = t2shi11 ^ ~t2shi12 & t2shi13;
    s2[32] = t2slo16 ^ ~t2slo17 & t2slo18;
    s2[33] = t2shi16 ^ ~t2shi17 & t2shi18;
    s2[42] = t2slo21 ^ ~t2slo22 & t2slo23;
    s2[43] = t2shi21 ^ ~t2shi22 & t2shi23;
    s2[4] = t2slo2 ^ ~t2slo3 & t2slo4;
    s2[5] = t2shi2 ^ ~t2shi3 & t2shi4;
    s2[14] = t2slo7 ^ ~t2slo8 & t2slo9;
    s2[15] = t2shi7 ^ ~t2shi8 & t2shi9;
    s2[24] = t2slo12 ^ ~t2slo13 & t2slo14;
    s2[25] = t2shi12 ^ ~t2shi13 & t2shi14;
    s2[34] = t2slo17 ^ ~t2slo18 & t2slo19;
    s2[35] = t2shi17 ^ ~t2shi18 & t2shi19;
    s2[44] = t2slo22 ^ ~t2slo23 & t2slo24;
    s2[45] = t2shi22 ^ ~t2shi23 & t2shi24;
    s2[6] = t2slo3 ^ ~t2slo4 & t2slo0;
    s2[7] = t2shi3 ^ ~t2shi4 & t2shi0;
    s2[16] = t2slo8 ^ ~t2slo9 & t2slo5;
    s2[17] = t2shi8 ^ ~t2shi9 & t2shi5;
    s2[26] = t2slo13 ^ ~t2slo14 & t2slo10;
    s2[27] = t2shi13 ^ ~t2shi14 & t2shi10;
    s2[36] = t2slo18 ^ ~t2slo19 & t2slo15;
    s2[37] = t2shi18 ^ ~t2shi19 & t2shi15;
    s2[46] = t2slo23 ^ ~t2slo24 & t2slo20;
    s2[47] = t2shi23 ^ ~t2shi24 & t2shi20;
    s2[8] = t2slo4 ^ ~t2slo0 & t2slo1;
    s2[9] = t2shi4 ^ ~t2shi0 & t2shi1;
    s2[18] = t2slo9 ^ ~t2slo5 & t2slo6;
    s2[19] = t2shi9 ^ ~t2shi5 & t2shi6;
    s2[28] = t2slo14 ^ ~t2slo10 & t2slo11;
    s2[29] = t2shi14 ^ ~t2shi10 & t2shi11;
    s2[38] = t2slo19 ^ ~t2slo15 & t2slo16;
    s2[39] = t2shi19 ^ ~t2shi15 & t2shi16;
    s2[48] = t2slo24 ^ ~t2slo20 & t2slo21;
    s2[49] = t2shi24 ^ ~t2shi20 & t2shi21;
    s2[0] ^= P1600_ROUND_CONSTANTS[round * 2];
    s2[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1];
  }
};
const keccakState = keccakStateUnroll;
function Keccak() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  this.blockSize = null;
  this.count = 0;
  this.squeezing = false;
}
Keccak.prototype.initialize = function(rate, capacity) {
  for (let i2 = 0; i2 < 50; ++i2) this.state[i2] = 0;
  this.blockSize = rate / 8;
  this.count = 0;
  this.squeezing = false;
};
Keccak.prototype.absorb = function(data) {
  for (let i2 = 0; i2 < data.length; ++i2) {
    this.state[~~(this.count / 4)] ^= data[i2] << 8 * (this.count % 4);
    this.count += 1;
    if (this.count === this.blockSize) {
      keccakState.p1600(this.state);
      this.count = 0;
    }
  }
};
Keccak.prototype.absorbLastFewBits = function(bits) {
  this.state[~~(this.count / 4)] ^= bits << 8 * (this.count % 4);
  if ((bits & 128) !== 0 && this.count === this.blockSize - 1) keccakState.p1600(this.state);
  this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4);
  keccakState.p1600(this.state);
  this.count = 0;
  this.squeezing = true;
};
Keccak.prototype.squeeze = function(length) {
  if (!this.squeezing) this.absorbLastFewBits(1);
  const output = Buffer.alloc(length);
  for (let i2 = 0; i2 < length; ++i2) {
    output[i2] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255;
    this.count += 1;
    if (this.count === this.blockSize) {
      keccakState.p1600(this.state);
      this.count = 0;
    }
  }
  return output;
};
Keccak.prototype.copy = function(dest) {
  for (let i2 = 0; i2 < 50; ++i2) dest.state[i2] = this.state[i2];
  dest.blockSize = this.blockSize;
  dest.count = this.count;
  dest.squeezing = this.squeezing;
};
var keccak = Keccak;
var js = api(keccak);
var sha_js = { exports: {} };
var Buffer$7 = safeBufferExports.Buffer;
function Hash$6(blockSize, finalSize) {
  this._block = Buffer$7.alloc(blockSize);
  this._finalSize = finalSize;
  this._blockSize = blockSize;
  this._len = 0;
}
Hash$6.prototype.update = function(data, enc) {
  if (typeof data === "string") {
    enc = enc || "utf8";
    data = Buffer$7.from(data, enc);
  }
  var block = this._block;
  var blockSize = this._blockSize;
  var length = data.length;
  var accum = this._len;
  for (var offset = 0; offset < length; ) {
    var assigned = accum % blockSize;
    var remainder = Math.min(length - offset, blockSize - assigned);
    for (var i2 = 0; i2 < remainder; i2++) {
      block[assigned + i2] = data[offset + i2];
    }
    accum += remainder;
    offset += remainder;
    if (accum % blockSize === 0) {
      this._update(block);
    }
  }
  this._len += length;
  return this;
};
Hash$6.prototype.digest = function(enc) {
  var rem = this._len % this._blockSize;
  this._block[rem] = 128;
  this._block.fill(0, rem + 1);
  if (rem >= this._finalSize) {
    this._update(this._block);
    this._block.fill(0);
  }
  var bits = this._len * 8;
  if (bits <= 4294967295) {
    this._block.writeUInt32BE(bits, this._blockSize - 4);
  } else {
    var lowBits = (bits & 4294967295) >>> 0;
    var highBits = (bits - lowBits) / 4294967296;
    this._block.writeUInt32BE(highBits, this._blockSize - 8);
    this._block.writeUInt32BE(lowBits, this._blockSize - 4);
  }
  this._update(this._block);
  var hash2 = this._hash();
  return enc ? hash2.toString(enc) : hash2;
};
Hash$6.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var hash = Hash$6;
var inherits$5 = inherits_browserExports;
var Hash$5 = hash;
var Buffer$6 = safeBufferExports.Buffer;
var K$3 = [
  1518500249,
  1859775393,
  2400959708 | 0,
  3395469782 | 0
];
var W$5 = new Array(80);
function Sha() {
  this.init();
  this._w = W$5;
  Hash$5.call(this, 64, 56);
}
inherits$5(Sha, Hash$5);
Sha.prototype.init = function() {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
function rotl5$1(num) {
  return num << 5 | num >>> 27;
}
function rotl30$1(num) {
  return num << 30 | num >>> 2;
}
function ft$1(s2, b2, c2, d2) {
  if (s2 === 0) return b2 & c2 | ~b2 & d2;
  if (s2 === 2) return b2 & c2 | b2 & d2 | c2 & d2;
  return b2 ^ c2 ^ d2;
}
Sha.prototype._update = function(M2) {
  var W2 = this._w;
  var a2 = this._a | 0;
  var b2 = this._b | 0;
  var c2 = this._c | 0;
  var d2 = this._d | 0;
  var e2 = this._e | 0;
  for (var i2 = 0; i2 < 16; ++i2) W2[i2] = M2.readInt32BE(i2 * 4);
  for (; i2 < 80; ++i2) W2[i2] = W2[i2 - 3] ^ W2[i2 - 8] ^ W2[i2 - 14] ^ W2[i2 - 16];
  for (var j2 = 0; j2 < 80; ++j2) {
    var s2 = ~~(j2 / 20);
    var t2 = rotl5$1(a2) + ft$1(s2, b2, c2, d2) + e2 + W2[j2] + K$3[s2] | 0;
    e2 = d2;
    d2 = c2;
    c2 = rotl30$1(b2);
    b2 = a2;
    a2 = t2;
  }
  this._a = a2 + this._a | 0;
  this._b = b2 + this._b | 0;
  this._c = c2 + this._c | 0;
  this._d = d2 + this._d | 0;
  this._e = e2 + this._e | 0;
};
Sha.prototype._hash = function() {
  var H2 = Buffer$6.allocUnsafe(20);
  H2.writeInt32BE(this._a | 0, 0);
  H2.writeInt32BE(this._b | 0, 4);
  H2.writeInt32BE(this._c | 0, 8);
  H2.writeInt32BE(this._d | 0, 12);
  H2.writeInt32BE(this._e | 0, 16);
  return H2;
};
var sha = Sha;
var inherits$4 = inherits_browserExports;
var Hash$4 = hash;
var Buffer$5 = safeBufferExports.Buffer;
var K$2 = [
  1518500249,
  1859775393,
  2400959708 | 0,
  3395469782 | 0
];
var W$4 = new Array(80);
function Sha1() {
  this.init();
  this._w = W$4;
  Hash$4.call(this, 64, 56);
}
inherits$4(Sha1, Hash$4);
Sha1.prototype.init = function() {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
function rotl1(num) {
  return num << 1 | num >>> 31;
}
function rotl5(num) {
  return num << 5 | num >>> 27;
}
function rotl30(num) {
  return num << 30 | num >>> 2;
}
function ft(s2, b2, c2, d2) {
  if (s2 === 0) return b2 & c2 | ~b2 & d2;
  if (s2 === 2) return b2 & c2 | b2 & d2 | c2 & d2;
  return b2 ^ c2 ^ d2;
}
Sha1.prototype._update = function(M2) {
  var W2 = this._w;
  var a2 = this._a | 0;
  var b2 = this._b | 0;
  var c2 = this._c | 0;
  var d2 = this._d | 0;
  var e2 = this._e | 0;
  for (var i2 = 0; i2 < 16; ++i2) W2[i2] = M2.readInt32BE(i2 * 4);
  for (; i2 < 80; ++i2) W2[i2] = rotl1(W2[i2 - 3] ^ W2[i2 - 8] ^ W2[i2 - 14] ^ W2[i2 - 16]);
  for (var j2 = 0; j2 < 80; ++j2) {
    var s2 = ~~(j2 / 20);
    var t2 = rotl5(a2) + ft(s2, b2, c2, d2) + e2 + W2[j2] + K$2[s2] | 0;
    e2 = d2;
    d2 = c2;
    c2 = rotl30(b2);
    b2 = a2;
    a2 = t2;
  }
  this._a = a2 + this._a | 0;
  this._b = b2 + this._b | 0;
  this._c = c2 + this._c | 0;
  this._d = d2 + this._d | 0;
  this._e = e2 + this._e | 0;
};
Sha1.prototype._hash = function() {
  var H2 = Buffer$5.allocUnsafe(20);
  H2.writeInt32BE(this._a | 0, 0);
  H2.writeInt32BE(this._b | 0, 4);
  H2.writeInt32BE(this._c | 0, 8);
  H2.writeInt32BE(this._d | 0, 12);
  H2.writeInt32BE(this._e | 0, 16);
  return H2;
};
var sha1 = Sha1;
var inherits$3 = inherits_browserExports;
var Hash$3 = hash;
var Buffer$4 = safeBufferExports.Buffer;
var K$1 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
var W$3 = new Array(64);
function Sha256$1() {
  this.init();
  this._w = W$3;
  Hash$3.call(this, 64, 56);
}
inherits$3(Sha256$1, Hash$3);
Sha256$1.prototype.init = function() {
  this._a = 1779033703;
  this._b = 3144134277;
  this._c = 1013904242;
  this._d = 2773480762;
  this._e = 1359893119;
  this._f = 2600822924;
  this._g = 528734635;
  this._h = 1541459225;
  return this;
};
function ch(x2, y2, z2) {
  return z2 ^ x2 & (y2 ^ z2);
}
function maj$1(x2, y2, z2) {
  return x2 & y2 | z2 & (x2 | y2);
}
function sigma0$1(x2) {
  return (x2 >>> 2 | x2 << 30) ^ (x2 >>> 13 | x2 << 19) ^ (x2 >>> 22 | x2 << 10);
}
function sigma1$1(x2) {
  return (x2 >>> 6 | x2 << 26) ^ (x2 >>> 11 | x2 << 21) ^ (x2 >>> 25 | x2 << 7);
}
function gamma0(x2) {
  return (x2 >>> 7 | x2 << 25) ^ (x2 >>> 18 | x2 << 14) ^ x2 >>> 3;
}
function gamma1(x2) {
  return (x2 >>> 17 | x2 << 15) ^ (x2 >>> 19 | x2 << 13) ^ x2 >>> 10;
}
Sha256$1.prototype._update = function(M2) {
  var W2 = this._w;
  var a2 = this._a | 0;
  var b2 = this._b | 0;
  var c2 = this._c | 0;
  var d2 = this._d | 0;
  var e2 = this._e | 0;
  var f2 = this._f | 0;
  var g2 = this._g | 0;
  var h2 = this._h | 0;
  for (var i2 = 0; i2 < 16; ++i2) W2[i2] = M2.readInt32BE(i2 * 4);
  for (; i2 < 64; ++i2) W2[i2] = gamma1(W2[i2 - 2]) + W2[i2 - 7] + gamma0(W2[i2 - 15]) + W2[i2 - 16] | 0;
  for (var j2 = 0; j2 < 64; ++j2) {
    var T1 = h2 + sigma1$1(e2) + ch(e2, f2, g2) + K$1[j2] + W2[j2] | 0;
    var T2 = sigma0$1(a2) + maj$1(a2, b2, c2) | 0;
    h2 = g2;
    g2 = f2;
    f2 = e2;
    e2 = d2 + T1 | 0;
    d2 = c2;
    c2 = b2;
    b2 = a2;
    a2 = T1 + T2 | 0;
  }
  this._a = a2 + this._a | 0;
  this._b = b2 + this._b | 0;
  this._c = c2 + this._c | 0;
  this._d = d2 + this._d | 0;
  this._e = e2 + this._e | 0;
  this._f = f2 + this._f | 0;
  this._g = g2 + this._g | 0;
  this._h = h2 + this._h | 0;
};
Sha256$1.prototype._hash = function() {
  var H2 = Buffer$4.allocUnsafe(32);
  H2.writeInt32BE(this._a, 0);
  H2.writeInt32BE(this._b, 4);
  H2.writeInt32BE(this._c, 8);
  H2.writeInt32BE(this._d, 12);
  H2.writeInt32BE(this._e, 16);
  H2.writeInt32BE(this._f, 20);
  H2.writeInt32BE(this._g, 24);
  H2.writeInt32BE(this._h, 28);
  return H2;
};
var sha256 = Sha256$1;
var inherits$2 = inherits_browserExports;
var Sha256 = sha256;
var Hash$2 = hash;
var Buffer$3 = safeBufferExports.Buffer;
var W$2 = new Array(64);
function Sha224() {
  this.init();
  this._w = W$2;
  Hash$2.call(this, 64, 56);
}
inherits$2(Sha224, Sha256);
Sha224.prototype.init = function() {
  this._a = 3238371032;
  this._b = 914150663;
  this._c = 812702999;
  this._d = 4144912697;
  this._e = 4290775857;
  this._f = 1750603025;
  this._g = 1694076839;
  this._h = 3204075428;
  return this;
};
Sha224.prototype._hash = function() {
  var H2 = Buffer$3.allocUnsafe(28);
  H2.writeInt32BE(this._a, 0);
  H2.writeInt32BE(this._b, 4);
  H2.writeInt32BE(this._c, 8);
  H2.writeInt32BE(this._d, 12);
  H2.writeInt32BE(this._e, 16);
  H2.writeInt32BE(this._f, 20);
  H2.writeInt32BE(this._g, 24);
  return H2;
};
var sha224 = Sha224;
var inherits$1 = inherits_browserExports;
var Hash$1 = hash;
var Buffer$2 = safeBufferExports.Buffer;
var K = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
var W$1 = new Array(160);
function Sha512() {
  this.init();
  this._w = W$1;
  Hash$1.call(this, 128, 112);
}
inherits$1(Sha512, Hash$1);
Sha512.prototype.init = function() {
  this._ah = 1779033703;
  this._bh = 3144134277;
  this._ch = 1013904242;
  this._dh = 2773480762;
  this._eh = 1359893119;
  this._fh = 2600822924;
  this._gh = 528734635;
  this._hh = 1541459225;
  this._al = 4089235720;
  this._bl = 2227873595;
  this._cl = 4271175723;
  this._dl = 1595750129;
  this._el = 2917565137;
  this._fl = 725511199;
  this._gl = 4215389547;
  this._hl = 327033209;
  return this;
};
function Ch(x2, y2, z2) {
  return z2 ^ x2 & (y2 ^ z2);
}
function maj(x2, y2, z2) {
  return x2 & y2 | z2 & (x2 | y2);
}
function sigma0(x2, xl) {
  return (x2 >>> 28 | xl << 4) ^ (xl >>> 2 | x2 << 30) ^ (xl >>> 7 | x2 << 25);
}
function sigma1(x2, xl) {
  return (x2 >>> 14 | xl << 18) ^ (x2 >>> 18 | xl << 14) ^ (xl >>> 9 | x2 << 23);
}
function Gamma0(x2, xl) {
  return (x2 >>> 1 | xl << 31) ^ (x2 >>> 8 | xl << 24) ^ x2 >>> 7;
}
function Gamma0l(x2, xl) {
  return (x2 >>> 1 | xl << 31) ^ (x2 >>> 8 | xl << 24) ^ (x2 >>> 7 | xl << 25);
}
function Gamma1(x2, xl) {
  return (x2 >>> 19 | xl << 13) ^ (xl >>> 29 | x2 << 3) ^ x2 >>> 6;
}
function Gamma1l(x2, xl) {
  return (x2 >>> 19 | xl << 13) ^ (xl >>> 29 | x2 << 3) ^ (x2 >>> 6 | xl << 26);
}
function getCarry(a2, b2) {
  return a2 >>> 0 < b2 >>> 0 ? 1 : 0;
}
Sha512.prototype._update = function(M2) {
  var W2 = this._w;
  var ah = this._ah | 0;
  var bh = this._bh | 0;
  var ch2 = this._ch | 0;
  var dh = this._dh | 0;
  var eh = this._eh | 0;
  var fh = this._fh | 0;
  var gh = this._gh | 0;
  var hh = this._hh | 0;
  var al = this._al | 0;
  var bl = this._bl | 0;
  var cl = this._cl | 0;
  var dl = this._dl | 0;
  var el = this._el | 0;
  var fl = this._fl | 0;
  var gl = this._gl | 0;
  var hl = this._hl | 0;
  for (var i2 = 0; i2 < 32; i2 += 2) {
    W2[i2] = M2.readInt32BE(i2 * 4);
    W2[i2 + 1] = M2.readInt32BE(i2 * 4 + 4);
  }
  for (; i2 < 160; i2 += 2) {
    var xh = W2[i2 - 15 * 2];
    var xl = W2[i2 - 15 * 2 + 1];
    var gamma02 = Gamma0(xh, xl);
    var gamma0l = Gamma0l(xl, xh);
    xh = W2[i2 - 2 * 2];
    xl = W2[i2 - 2 * 2 + 1];
    var gamma12 = Gamma1(xh, xl);
    var gamma1l = Gamma1l(xl, xh);
    var Wi7h = W2[i2 - 7 * 2];
    var Wi7l = W2[i2 - 7 * 2 + 1];
    var Wi16h = W2[i2 - 16 * 2];
    var Wi16l = W2[i2 - 16 * 2 + 1];
    var Wil = gamma0l + Wi7l | 0;
    var Wih = gamma02 + Wi7h + getCarry(Wil, gamma0l) | 0;
    Wil = Wil + gamma1l | 0;
    Wih = Wih + gamma12 + getCarry(Wil, gamma1l) | 0;
    Wil = Wil + Wi16l | 0;
    Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
    W2[i2] = Wih;
    W2[i2 + 1] = Wil;
  }
  for (var j2 = 0; j2 < 160; j2 += 2) {
    Wih = W2[j2];
    Wil = W2[j2 + 1];
    var majh = maj(ah, bh, ch2);
    var majl = maj(al, bl, cl);
    var sigma0h = sigma0(ah, al);
    var sigma0l = sigma0(al, ah);
    var sigma1h = sigma1(eh, el);
    var sigma1l = sigma1(el, eh);
    var Kih = K[j2];
    var Kil = K[j2 + 1];
    var chh = Ch(eh, fh, gh);
    var chl = Ch(el, fl, gl);
    var t1l = hl + sigma1l | 0;
    var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
    t1l = t1l + chl | 0;
    t1h = t1h + chh + getCarry(t1l, chl) | 0;
    t1l = t1l + Kil | 0;
    t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
    t1l = t1l + Wil | 0;
    t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
    var t2l = sigma0l + majl | 0;
    var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    el = dl + t1l | 0;
    eh = dh + t1h + getCarry(el, dl) | 0;
    dh = ch2;
    dl = cl;
    ch2 = bh;
    cl = bl;
    bh = ah;
    bl = al;
    al = t1l + t2l | 0;
    ah = t1h + t2h + getCarry(al, t1l) | 0;
  }
  this._al = this._al + al | 0;
  this._bl = this._bl + bl | 0;
  this._cl = this._cl + cl | 0;
  this._dl = this._dl + dl | 0;
  this._el = this._el + el | 0;
  this._fl = this._fl + fl | 0;
  this._gl = this._gl + gl | 0;
  this._hl = this._hl + hl | 0;
  this._ah = this._ah + ah + getCarry(this._al, al) | 0;
  this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
  this._ch = this._ch + ch2 + getCarry(this._cl, cl) | 0;
  this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
  this._eh = this._eh + eh + getCarry(this._el, el) | 0;
  this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
  this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
  this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
};
Sha512.prototype._hash = function() {
  var H2 = Buffer$2.allocUnsafe(64);
  function writeInt64BE(h2, l2, offset) {
    H2.writeInt32BE(h2, offset);
    H2.writeInt32BE(l2, offset + 4);
  }
  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);
  writeInt64BE(this._gh, this._gl, 48);
  writeInt64BE(this._hh, this._hl, 56);
  return H2;
};
var sha512 = Sha512;
var inherits = inherits_browserExports;
var SHA512 = sha512;
var Hash = hash;
var Buffer$1 = safeBufferExports.Buffer;
var W = new Array(160);
function Sha384() {
  this.init();
  this._w = W;
  Hash.call(this, 128, 112);
}
inherits(Sha384, SHA512);
Sha384.prototype.init = function() {
  this._ah = 3418070365;
  this._bh = 1654270250;
  this._ch = 2438529370;
  this._dh = 355462360;
  this._eh = 1731405415;
  this._fh = 2394180231;
  this._gh = 3675008525;
  this._hh = 1203062813;
  this._al = 3238371032;
  this._bl = 914150663;
  this._cl = 812702999;
  this._dl = 4144912697;
  this._el = 4290775857;
  this._fl = 1750603025;
  this._gl = 1694076839;
  this._hl = 3204075428;
  return this;
};
Sha384.prototype._hash = function() {
  var H2 = Buffer$1.allocUnsafe(48);
  function writeInt64BE(h2, l2, offset) {
    H2.writeInt32BE(h2, offset);
    H2.writeInt32BE(l2, offset + 4);
  }
  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);
  return H2;
};
var sha384 = Sha384;
var exports = sha_js.exports = function SHA(algorithm) {
  algorithm = algorithm.toLowerCase();
  var Algorithm = exports[algorithm];
  if (!Algorithm) throw new Error(algorithm + " is not supported (we accept pull requests)");
  return new Algorithm();
};
exports.sha = sha;
exports.sha1 = sha1;
exports.sha224 = sha224;
exports.sha256 = sha256;
exports.sha384 = sha384;
exports.sha512 = sha512;
var sha_jsExports = sha_js.exports;
function r$2(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) for (t2 = 0; t2 < e2.length; t2++) e2[t2] && (f2 = r$2(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  else for (t2 in e2) e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; ) (e2 = arguments[f2++]) && (t2 = r$2(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const clsx_m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx,
  default: clsx
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(clsx_m);
var n, l$1, u$1, t$1, i$1, o$1, r$1, f$1, e$1, c$1, s$1, a$1, h$1 = {}, p$1 = [], v$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y$1 = Array.isArray;
function d$1(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function w$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function _$1(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (r2 in l2.defaultProps) void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return g$1(l2, f2, i2, o2, null);
}
function g$1(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u$1 : r2, __i: -1, __u: 0 };
  return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function m$1() {
  return { current: null };
}
function k$1(n2) {
  return n2.children;
}
function b$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function x$1(n2, l2) {
  if (null == l2) return n2.__ ? x$1(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? x$1(n2) : null;
}
function C$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C$1(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !P$1.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(P$1);
}
function P$1() {
  var n2, u2, t2, o2, r2, e2, c2, s2;
  for (i$1.sort(f$1); n2 = i$1.shift(); ) n2.__d && (u2 = i$1.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d$1({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x$1(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j$1(c2, o2, s2), o2.__e != e2 && C$1(o2)), i$1.length > u2 && i$1.sort(f$1));
  P$1.__r = 0;
}
function S(n2, l2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, v2, y2, d2, w2, _2 = t2 && t2.__k || p$1, g2 = l2.length;
  for (u2.__d = e2, $(u2, l2, _2), e2 = u2.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u2.__k[a2]) && "boolean" != typeof y2 && "function" != typeof y2 && (v2 = -1 === y2.__i ? h$1 : _2[y2.__i] || h$1, y2.__i = a2, O(n2, y2, v2, i2, o2, r2, f2, e2, c2, s2), d2 = y2.__e, y2.ref && v2.ref != y2.ref && (v2.ref && N(v2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || v2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u2.__d = e2, u2.__e = w2;
}
function $(n2, l2, u2) {
  var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) r2 = t2 + a2, null != (i2 = n2.__k[t2] = null == (i2 = l2[t2]) || "boolean" == typeof i2 || "function" == typeof i2 ? null : "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? g$1(null, i2, null, null, null) : y$1(i2) ? g$1(k$1, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? g$1(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) ? (i2.__ = n2, i2.__b = n2.__b + 1, f2 = L(i2, u2, r2, s2), i2.__i = f2, o2 = null, -1 !== f2 && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 == r2 - 1 ? a2-- : f2 == r2 + 1 ? a2++ : f2 > r2 ? s2 > e2 - r2 ? a2 += f2 - r2 : a2-- : f2 < r2 && (f2 == r2 - a2 ? a2 -= f2 - r2 : a2++), f2 !== t2 + a2 && (i2.__u |= 65536))) : (o2 = u2[r2]) && null == o2.key && o2.__e && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x$1(o2)), V(o2, o2, false), u2[r2] = null, s2--);
  if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x$1(o2)), V(o2, o2));
}
function I(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = I(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = x$1(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function H(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (y$1(n2) ? n2.some(function(n3) {
    H(n3, l2);
  }) : l2.push(n2)), l2;
}
function L(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u2;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f2 < l2.length; ) {
    if (r2 >= 0) {
      if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return r2;
      r2--;
    }
    if (f2 < l2.length) {
      if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return f2;
      f2++;
    }
  }
  return -1;
}
function T$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || v$1.test(l2) ? u2 : u2 + "px";
}
function A$1(n2, l2, u2, t2, i2) {
  var o2;
  n: if ("style" === l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T$1(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T$1(n2.style, l2, u2[l2]);
  }
  else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = e$1, n2.addEventListener(l2, o2 ? s$1 : c$1, o2)) : n2.removeEventListener(l2, o2 ? s$1 : c$1, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F$1(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = e$1++;
      else if (u2.t < t2.u) return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, h2, p2, v2, w2, _2, g2, m2, x2, C2, M2, P2, $2, I2, H2, L2, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (m2 = u2.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? g2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(m2, M2) : (u2.__c = h2 = new b$1(m2, M2), h2.constructor = T2, h2.render = q$1), C2 && C2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d$1({}, h2.__s)), d$1(h2.__s, T2.getDerivedStateFromProps(m2, h2.__s))), v2 = h2.props, w2 = h2.state, h2.__v = u2, p2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m2, h2.__s, M2) || u2.__v === t2.__v)) {
        for (u2.__v !== t2.__v && (h2.props = m2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
          n3 && (n3.__ = u2);
        }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
        h2._sb = [], h2.__h.length && f2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, M2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, w2, _2);
      });
    }
    if (h2.context = M2, h2.props = m2, h2.__P = n2, h2.__e = false, $2 = l$1.__r, I2 = 0, x2) {
      for (h2.state = h2.__s, h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
      h2._sb = [];
    } else do {
      h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++I2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d$1(d$1({}, i2), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, w2)), S(n2, y$1(L2 = null != a2 && a2.type === k$1 && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u2, t2, i2, o2, r2, f2, e2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && f2.push(h2), g2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != r2) {
      for (u2.__u |= c2 ? 160 : 32; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r2[r2.indexOf(e2)] = null, u2.__e = e2;
    } else u2.__e = t2.__e, u2.__k = t2.__k;
    l$1.__e(n3, u2, t2);
  }
  else null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = z$1(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l$1.diffed) && a2(u2);
}
function j$1(n2, u2, t2) {
  u2.__d = void 0;
  for (var i2 = 0; i2 < t2.length; i2++) N(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function z$1(l2, u2, t2, i2, o2, r2, f2, e2, c2) {
  var s2, a2, p2, v2, d2, _2, g2, m2 = t2.props, k2 = u2.props, b2 = u2.type;
  if ("svg" === b2 ? o2 = "http://www.w3.org/2000/svg" : "math" === b2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != r2) {
    for (s2 = 0; s2 < r2.length; s2++) if ((d2 = r2[s2]) && "setAttribute" in d2 == !!b2 && (b2 ? d2.localName === b2 : 3 === d2.nodeType)) {
      l2 = d2, r2[s2] = null;
      break;
    }
  }
  if (null == l2) {
    if (null === b2) return document.createTextNode(k2);
    l2 = document.createElementNS(o2, b2, k2.is && k2), r2 = null, e2 = false;
  }
  if (null === b2) m2 === k2 || e2 && l2.data === k2 || (l2.data = k2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), m2 = t2.props || h$1, !e2 && null != r2) for (m2 = {}, s2 = 0; s2 < l2.attributes.length; s2++) m2[(d2 = l2.attributes[s2]).name] = d2.value;
    for (s2 in m2) if (d2 = m2[s2], "children" == s2) ;
    else if ("dangerouslySetInnerHTML" == s2) p2 = d2;
    else if ("key" !== s2 && !(s2 in k2)) {
      if ("value" == s2 && "defaultValue" in k2 || "checked" == s2 && "defaultChecked" in k2) continue;
      A$1(l2, s2, null, d2, o2);
    }
    for (s2 in k2) d2 = k2[s2], "children" == s2 ? v2 = d2 : "dangerouslySetInnerHTML" == s2 ? a2 = d2 : "value" == s2 ? _2 = d2 : "checked" == s2 ? g2 = d2 : "key" === s2 || e2 && "function" != typeof d2 || m2[s2] === d2 || A$1(l2, s2, d2, m2[s2], o2);
    if (a2) e2 || p2 && (a2.__html === p2.__html || a2.__html === l2.innerHTML) || (l2.innerHTML = a2.__html), u2.__k = [];
    else if (p2 && (l2.innerHTML = ""), S(l2, y$1(v2) ? v2 : [v2], u2, t2, i2, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o2, r2, f2, r2 ? r2[0] : t2.__k && x$1(t2, 0), e2, c2), null != r2) for (s2 = r2.length; s2--; ) null != r2[s2] && w$1(r2[s2]);
    e2 || (s2 = "value", void 0 !== _2 && (_2 !== l2[s2] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m2[s2]) && A$1(l2, s2, _2, m2[s2], o2), s2 = "checked", void 0 !== g2 && g2 !== l2[s2] && A$1(l2, s2, g2, m2[s2], o2));
  }
  return l2;
}
function N(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function V(n2, u2, t2) {
  var i2, o2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && V(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || w$1(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$1(u2, t2, i2) {
  var o2, r2, f2, e2;
  l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], O(t2, u2 = (!o2 && i2 || t2).__k = _$1(k$1, null, [u2]), r2 || h$1, h$1, t2.namespaceURI, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), j$1(f2, u2, e2);
}
function D$1(n2, l2) {
  B$1(n2, l2, D$1);
}
function E(l2, u2, t2) {
  var i2, o2, r2, f2, e2 = d$1({}, l2.props);
  for (r2 in l2.type && l2.type.defaultProps && (f2 = l2.type.defaultProps), u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : e2[r2] = void 0 === u2[r2] && void 0 !== f2 ? f2[r2] : u2[r2];
  return arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), g$1(l2.type, e2, i2 || l2.key, o2 || l2.ref, null);
}
function G(n2, l2) {
  var u2 = { __c: l2 = "__cC" + a$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, t2;
    return this.getChildContext || (u3 = [], (t2 = {})[l2] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u3 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, M(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3 && u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = p$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$1 = 0, t$1 = function(n2) {
  return null != n2 && null == n2.constructor;
}, b$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d$1({}, this.state), "function" == typeof n2 && (n2 = n2(d$1({}, u2), this.props)), n2 && d$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, b$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, b$1.prototype.render = k$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, P$1.__r = 0, e$1 = 0, c$1 = F$1(false), s$1 = F$1(true), a$1 = 0;
const preact_module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: b$1,
  Fragment: k$1,
  cloneElement: E,
  createContext: G,
  createElement: _$1,
  createRef: m$1,
  h: _$1,
  hydrate: D$1,
  get isValidElement() {
    return t$1;
  },
  get options() {
    return l$1;
  },
  render: B$1,
  toChildArray: H
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(preact_module);
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function d(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function h(n2) {
  return o = 1, p(D, n2);
}
function p(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : D(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n2, u2) {
  var i2 = d(t++, 3);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r.__H.__h.push(i2));
}
function _(n2, u2) {
  var i2 = d(t++, 4);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r.__h.push(i2));
}
function A(n2) {
  return o = 5, T(function() {
    return { current: n2 };
  }, []);
}
function F(n2, t2, r2) {
  o = 6, _(function() {
    return "function" == typeof n2 ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r2 ? r2 : r2.concat(n2));
}
function T(n2, r2) {
  var u2 = d(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q(n2, t2) {
  return o = 8, T(function() {
    return n2;
  }, t2);
}
function x(n2) {
  var u2 = r.context[n2.__c], i2 = d(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function P(n2, t2) {
  c.useDebugValue && c.useDebugValue(t2 ? t2(n2) : n2);
}
function b(n2) {
  var u2 = d(t++, 10), i2 = h();
  return u2.__ = n2, r.componentDidCatch || (r.componentDidCatch = function(n3, t2) {
    u2.__ && u2.__(n3, t2), i2[1](n3);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function g() {
  var n2 = d(t++, 11);
  if (!n2.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function j() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z), n2.__H.__h.forEach(B), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c.__e(t2, n2.__v);
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const hooks_module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: q,
  useContext: x,
  useDebugValue: P,
  useEffect: y,
  useErrorBoundary: b,
  useId: g,
  useImperativeHandle: F,
  useLayoutEffect: _,
  useMemo: T,
  useReducer: p,
  useRef: A,
  useState: h
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(hooks_module);
export {
  require$$1 as a,
  require$$2 as b,
  js as j,
  require$$0 as r,
  sha_jsExports as s
};
