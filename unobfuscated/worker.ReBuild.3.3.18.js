// @ts-nocheck
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// node_modules/tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
    (function(nacl) {
      "use strict";
      var gf = function(init2) {
        var i, r = new Float64Array(16);
        if (init2) for (i = 0; i < init2.length; i++) r[i] = init2[i];
        return r;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x, i, h, l) {
        x[i] = h >> 24 & 255;
        x[i + 1] = h >> 16 & 255;
        x[i + 2] = h >> 8 & 255;
        x[i + 3] = h & 255;
        x[i + 4] = l >> 24 & 255;
        x[i + 5] = l >> 16 & 255;
        x[i + 6] = l >> 8 & 255;
        x[i + 7] = l & 255;
      }
      function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for (i = 0; i < n; i++) d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
      }
      function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
      }
      function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x1 >>> 0 & 255;
        o[5] = x1 >>> 8 & 255;
        o[6] = x1 >>> 16 & 255;
        o[7] = x1 >>> 24 & 255;
        o[8] = x2 >>> 0 & 255;
        o[9] = x2 >>> 8 & 255;
        o[10] = x2 >>> 16 & 255;
        o[11] = x2 >>> 24 & 255;
        o[12] = x3 >>> 0 & 255;
        o[13] = x3 >>> 8 & 255;
        o[14] = x3 >>> 16 & 255;
        o[15] = x3 >>> 24 & 255;
        o[16] = x4 >>> 0 & 255;
        o[17] = x4 >>> 8 & 255;
        o[18] = x4 >>> 16 & 255;
        o[19] = x4 >>> 24 & 255;
        o[20] = x5 >>> 0 & 255;
        o[21] = x5 >>> 8 & 255;
        o[22] = x5 >>> 16 & 255;
        o[23] = x5 >>> 24 & 255;
        o[24] = x6 >>> 0 & 255;
        o[25] = x6 >>> 8 & 255;
        o[26] = x6 >>> 16 & 255;
        o[27] = x6 >>> 24 & 255;
        o[28] = x7 >>> 0 & 255;
        o[29] = x7 >>> 8 & 255;
        o[30] = x7 >>> 16 & 255;
        o[31] = x7 >>> 24 & 255;
        o[32] = x8 >>> 0 & 255;
        o[33] = x8 >>> 8 & 255;
        o[34] = x8 >>> 16 & 255;
        o[35] = x8 >>> 24 & 255;
        o[36] = x9 >>> 0 & 255;
        o[37] = x9 >>> 8 & 255;
        o[38] = x9 >>> 16 & 255;
        o[39] = x9 >>> 24 & 255;
        o[40] = x10 >>> 0 & 255;
        o[41] = x10 >>> 8 & 255;
        o[42] = x10 >>> 16 & 255;
        o[43] = x10 >>> 24 & 255;
        o[44] = x11 >>> 0 & 255;
        o[45] = x11 >>> 8 & 255;
        o[46] = x11 >>> 16 & 255;
        o[47] = x11 >>> 24 & 255;
        o[48] = x12 >>> 0 & 255;
        o[49] = x12 >>> 8 & 255;
        o[50] = x12 >>> 16 & 255;
        o[51] = x12 >>> 24 & 255;
        o[52] = x13 >>> 0 & 255;
        o[53] = x13 >>> 8 & 255;
        o[54] = x13 >>> 16 & 255;
        o[55] = x13 >>> 24 & 255;
        o[56] = x14 >>> 0 & 255;
        o[57] = x14 >>> 8 & 255;
        o[58] = x14 >>> 16 & 255;
        o[59] = x14 >>> 24 & 255;
        o[60] = x15 >>> 0 & 255;
        o[61] = x15 >>> 8 & 255;
        o[62] = x15 >>> 16 & 255;
        o[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x5 >>> 0 & 255;
        o[5] = x5 >>> 8 & 255;
        o[6] = x5 >>> 16 & 255;
        o[7] = x5 >>> 24 & 255;
        o[8] = x10 >>> 0 & 255;
        o[9] = x10 >>> 8 & 255;
        o[10] = x10 >>> 16 & 255;
        o[11] = x10 >>> 24 & 255;
        o[12] = x15 >>> 0 & 255;
        o[13] = x15 >>> 8 & 255;
        o[14] = x15 >>> 16 & 255;
        o[15] = x15 >>> 24 & 255;
        o[16] = x6 >>> 0 & 255;
        o[17] = x6 >>> 8 & 255;
        o[18] = x6 >>> 16 & 255;
        o[19] = x6 >>> 24 & 255;
        o[20] = x7 >>> 0 & 255;
        o[21] = x7 >>> 8 & 255;
        o[22] = x7 >>> 16 & 255;
        o[23] = x7 >>> 24 & 255;
        o[24] = x8 >>> 0 & 255;
        o[25] = x8 >>> 8 & 255;
        o[26] = x8 >>> 16 & 255;
        o[27] = x8 >>> 24 & 255;
        o[28] = x9 >>> 0 & 255;
        o[29] = x9 >>> 8 & 255;
        o[30] = x9 >>> 16 & 255;
        o[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
      }
      function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++) z[i] = 0;
        for (i = 0; i < 8; i++) z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
      }
      function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++) z[i] = 0;
        for (i = 0; i < 8; i++) z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++) c[cpos + i] = x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++) c[cpos + i] = x[i];
        }
        return 0;
      }
      function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
      }
      function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t2 << 6) & 8191;
          t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          c = 0;
          d0 = c;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c += d0 >>> 13;
          d0 &= 8191;
          d1 = c;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c += d1 >>> 13;
          d1 &= 8191;
          d2 = c;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h2 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c += d2 >>> 13;
          d2 &= 8191;
          d3 = c;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h2 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c += d3 >>> 13;
          d3 &= 8191;
          d4 = c;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h2 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c += d4 >>> 13;
          d4 &= 8191;
          d5 = c;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h2 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c += d5 >>> 13;
          d5 &= 8191;
          d6 = c;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h2 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c += d6 >>> 13;
          d6 &= 8191;
          d7 = c;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h2 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c += d7 >>> 13;
          d7 &= 8191;
          d8 = c;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h2 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c += d8 >>> 13;
          d8 &= 8191;
          d9 = c;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h2 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c += d9 >>> 13;
          d9 &= 8191;
          c = (c << 2) + c | 0;
          c = c + d0 | 0;
          d0 = c & 8191;
          c = c >>> 13;
          d1 += c;
          h0 = d0;
          h1 = d1;
          h2 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask, f, i;
        if (this.leftover) {
          i = this.leftover;
          this.buffer[i++] = 1;
          for (; i < 16; i++) this.buffer[i] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i = 2; i < 10; i++) {
          this.h[i] += c;
          c = this.h[i] >>> 13;
          this.h[i] &= 8191;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 8191;
        for (i = 1; i < 10; i++) {
          g[i] = this.h[i] + c;
          c = g[i] >>> 13;
          g[i] &= 8191;
        }
        g[9] -= 1 << 13;
        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++) g[i] &= mask;
        mask = ~mask;
        for (i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 65535;
        for (i = 1; i < 8; i++) {
          f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
          this.h[i] = f & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i = 0; i < want; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i = 0; i < bytes; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
      }
      function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32) return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for (i = 0; i < 16; i++) c[i] = 0;
        return 0;
      }
      function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32) return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for (i = 0; i < 32; i++) m[i] = 0;
        return 0;
      }
      function set25519(r, a) {
        var i;
        for (i = 0; i < 16; i++) r[i] = a[i] | 0;
      }
      function car25519(o) {
        var i, v, c = 1;
        for (i = 0; i < 16; i++) {
          v = o[i] + c + 65535;
          c = Math.floor(v / 65536);
          o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i = 0; i < 16; i++) {
          t = c & (p[i] ^ q[i]);
          p[i] ^= t;
          q[i] ^= t;
        }
      }
      function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for (i = 0; i < 16; i++) t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
          m[0] = t[0] - 65517;
          for (i = 1; i < 15; i++) {
            m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 65535;
          }
          m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
          b = m[15] >> 16 & 1;
          m[14] &= 65535;
          sel25519(t, m, 1 - b);
        }
        for (i = 0; i < 16; i++) {
          o[2 * i] = t[i] & 255;
          o[2 * i + 1] = t[i] >> 8;
        }
      }
      function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
      }
      function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
      }
      function unpack25519(o, n) {
        var i;
        for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 32767;
      }
      function A(o, a, b) {
        for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
      }
      function Z(o, a, b) {
        for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
      }
      function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
      }
      function S(o, a) {
        M(o, a, a);
      }
      function inv25519(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i[a];
        for (a = 253; a >= 0; a--) {
          S(c, c);
          if (a !== 2 && a !== 4) M(c, c, i);
        }
        for (a = 0; a < 16; a++) o[a] = c[a];
      }
      function pow2523(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i[a];
        for (a = 250; a >= 0; a--) {
          S(c, c);
          if (a !== 1) M(c, c, i);
        }
        for (a = 0; a < 16; a++) o[a] = c[a];
      }
      function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for (i = 0; i < 31; i++) z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for (i = 0; i < 16; i++) {
          b[i] = x[i];
          d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for (i = 254; i >= 0; --i) {
          r = z[i >>> 3] >>> (i & 7) & 1;
          sel25519(a, b, r);
          sel25519(c, d, r);
          A(e, a, c);
          Z(a, a, c);
          A(c, b, d);
          Z(b, b, d);
          S(d, e);
          S(f, a);
          M(a, c, a);
          M(c, b, e);
          A(e, a, c);
          Z(a, a, c);
          S(b, a);
          Z(c, d, f);
          M(a, c, _121665);
          A(a, a, d);
          M(c, c, a);
          M(a, d, f);
          M(d, b, x);
          S(b, e);
          sel25519(a, b, r);
          sel25519(c, d, r);
        }
        for (i = 0; i < 16; i++) {
          x[i + 16] = a[i];
          x[i + 32] = c[i];
          x[i + 48] = b[i];
          x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
      }
      function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
      }
      function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
      }
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
      function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i = 0; i < 16; i++) {
            j = 8 * i + pos;
            wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
            wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
          }
          for (i = 0; i < 80; i++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 65535 | d << 16;
            tl = a & 65535 | b << 16;
            h = th;
            l = tl;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 65535 | d << 16;
            bl7 = a & 65535 | b << 16;
            h = bh3;
            l = bl3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 65535 | d << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h = wh[j];
                l = wl[j];
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                h = wh[(j + 9) % 16];
                l = wl[(j + 9) % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j] = c & 65535 | d << 16;
                wl[j] = a & 65535 | b << 16;
              }
            }
          }
          h = ah0;
          l = al0;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[0];
          l = hl[0];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[0] = ah0 = c & 65535 | d << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h = ah1;
          l = al1;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[1];
          l = hl[1];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[1] = ah1 = c & 65535 | d << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h = ah2;
          l = al2;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[2];
          l = hl[2];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[2] = ah2 = c & 65535 | d << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h = ah3;
          l = al3;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[3];
          l = hl[3];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[3] = ah3 = c & 65535 | d << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h = ah4;
          l = al4;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[4];
          l = hl[4];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[4] = ah4 = c & 65535 | d << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h = ah5;
          l = al5;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[5];
          l = hl[5];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[5] = ah5 = c & 65535 | d << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h = ah6;
          l = al6;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[6];
          l = hl[6];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[6] = ah6 = c & 65535 | d << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[7];
          l = hl[7];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[7] = ah7 = c & 65535 | d << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i = 0; i < n; i++) x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
      }
      function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
      }
      function cswap(p, q, b) {
        var i;
        for (i = 0; i < 4; i++) {
          sel25519(p[i], q[i], b);
        }
      }
      function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i = 255; i >= 0; --i) {
          b = s[i / 8 | 0] >> (i & 7) & 1;
          cswap(p, q, b);
          add(q, p);
          add(p, p);
          cswap(p, q, b);
        }
      }
      function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
        return 0;
      }
      var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r, x) {
        var carry, i, j, k;
        for (i = 63; i >= 32; --i) {
          carry = 0;
          for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
          }
          x[j] += carry;
          x[i] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x[j] += carry - (x[31] >> 4) * L[j];
          carry = x[j] >> 8;
          x[j] &= 255;
        }
        for (j = 0; j < 32; j++) x[j] -= carry * L[j];
        for (i = 0; i < 32; i++) {
          x[i + 1] += x[i] >> 8;
          r[i] = x[i] & 255;
        }
      }
      function reduce(r) {
        var x = new Float64Array(64), i;
        for (i = 0; i < 64; i++) x[i] = r[i];
        for (i = 0; i < 64; i++) r[i] = 0;
        modL(r, x);
      }
      function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for (i = 0; i < n; i++) sm[64 + i] = m[i];
        for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 32; i < 64; i++) sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++) x[i] = 0;
        for (i = 0; i < 32; i++) x[i] = r[i];
        for (i = 0; i < 32; i++) {
          for (j = 0; j < 32; j++) {
            x[i + j] += h[i] * d[j];
          }
        }
        modL(sm.subarray(32), x);
        return smlen;
      }
      function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for (i = 0; i < n; i++) m[i] = sm[i];
        for (i = 0; i < 32; i++) m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i = 0; i < n; i++) m[i] = 0;
          return -1;
        }
        for (i = 0; i < n; i++) m[i] = sm[i + 64];
        return n;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L,
        pack25519,
        unpack25519,
        M,
        A,
        S,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i = 0; i < arguments.length; i++) {
          if (!(arguments[i] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i = 0; i < arr.length; i++) arr[i] = 0;
      }
      nacl.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
      };
      nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32) return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
      };
      nacl.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
      };
      nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k);
      };
      nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
      };
      nacl.box.after = nacl.secretbox;
      nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k);
      };
      nacl.box.open.after = nacl.secretbox.open;
      nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl.box.nonceLength = crypto_box_NONCEBYTES;
      nacl.box.overheadLength = nacl.secretbox.overheadLength;
      nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m = new Uint8Array(mlen);
        for (var i = 0; i < m.length; i++) m[i] = tmp[i];
        return m;
      };
      nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
        return sig;
      };
      nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
        for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
      };
      nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i = 0; i < 32; i++) sk[i] = seed[i];
        crypto_sign_keypair(pk, sk, true);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl.sign.signatureLength = crypto_sign_BYTES;
      nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
      };
      nacl.hash.hashLength = crypto_hash_BYTES;
      nacl.verify = function(x, y) {
        checkArrayTypes(x, y);
        if (x.length === 0 || y.length === 0) return false;
        if (x.length !== y.length) return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
      };
      nacl.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto2 = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto2 && crypto2.getRandomValues) {
          var QUOTA = 65536;
          nacl.setPRNG(function(x, n) {
            var i, v = new Uint8Array(n);
            for (i = 0; i < n; i += QUOTA) {
              crypto2.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
            }
            for (i = 0; i < n; i++) x[i] = v[i];
            cleanup(v);
          });
        } else if (typeof __require !== "undefined") {
          crypto2 = require_crypto();
          if (crypto2 && crypto2.randomBytes) {
            nacl.setPRNG(function(x, n) {
              var i, v = crypto2.randomBytes(n);
              for (i = 0; i < n; i++) x[i] = v[i];
              cleanup(v);
            });
          }
        }
      })();
    })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
  }
});

// node_modules/jszip/dist/jszip.min.js
var require_jszip_min = __commonJS({
  "node_modules/jszip/dist/jszip.min.js"(exports, module) {
    !(function(e) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
      }
    })(function() {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t) return t(r, true);
              if (l) return l(r, true);
              var n = new Error("Cannot find module '" + r + "'");
              throw n.code = "MODULE_NOT_FOUND", n;
            }
            var i = o[r] = { exports: {} };
            a[r][0].call(i.exports, function(e3) {
              var t2 = a[r][1][e3];
              return u(t2 || e3);
            }, i, i.exports, s, a, o, h);
          }
          return o[r].exports;
        }
        for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
        return u;
      })({ 1: [function(e, t, r) {
        "use strict";
        var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e2) {
          for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
          return h.join("");
        }, r.decode = function(e2) {
          var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
          if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
          var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
          return l;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
        "use strict";
        var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
        function o(e2, t2, r2, n2, i2) {
          this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
        }
        o.prototype = { getContentWorker: function() {
          var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
          return e2.on("end", function() {
            if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e2;
        }, getCompressedWorker: function() {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o.createWorkerFrom = function(e2, t2, r2) {
          return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
        }, t.exports = o;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
        "use strict";
        var n = e("./stream/GenericWorker");
        r.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, r.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
        "use strict";
        var n = e("./utils");
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2) {
          return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, t, r) {
        "use strict";
        r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
      }, {}], 6: [function(e, t, r) {
        "use strict";
        var n = null;
        n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
        function h(e2, t2) {
          a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
        }
        r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
          this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
        }, h.prototype.flush = function() {
          a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this._pako = null;
        }, h.prototype._createPako = function() {
          this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t2 = this;
          this._pako.onData = function(e2) {
            t2.push({ data: e2, meta: t2.meta });
          };
        }, r.compressWorker = function(e2) {
          return new h("Deflate", e2);
        }, r.uncompressWorker = function() {
          return new h("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
        "use strict";
        function A(e2, t2) {
          var r2, n2 = "";
          for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
          return n2;
        }
        function n(e2, t2, r2, n2, i2, s2) {
          var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
          var S = 0;
          t2 && (S |= 8), l || !_ && !g || (S |= 2048);
          var z = 0, C = 0;
          w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= (function(e3, t3) {
            var r3 = e3;
            return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
          })(h.unixPermissions, w)) : (C = 20, z |= (function(e3) {
            return 63 & (e3 || 0);
          })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
          var E = "";
          return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
        }
        var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
        function s(e2, t2, r2, n2) {
          i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I.inherits(s, i), s.prototype.push = function(e2) {
          var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
        }, s.prototype.openedSource = function(e2) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
          var t2 = this.streamFiles && !e2.file.dir;
          if (t2) {
            var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r2.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s.prototype.closedSource = function(e2) {
          this.accumulate = false;
          var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
            return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
          })(e2), meta: { percent: 100 } });
          else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s.prototype.flush = function() {
          for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
          var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
            var s2 = I.transformTo("string", i2(n3));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
          })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
          this.push({ data: n2, meta: { percent: 100 } });
        }, s.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s.prototype.registerPrevious = function(e2) {
          this._sources.push(e2);
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s.prototype.error = function(e2) {
          var t2 = this._sources;
          if (!i.prototype.error.call(this, e2)) return false;
          for (var r2 = 0; r2 < t2.length; r2++) try {
            t2[r2].error(e2);
          } catch (e3) {
          }
          return true;
        }, s.prototype.lock = function() {
          i.prototype.lock.call(this);
          for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
        }, t.exports = s;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
        "use strict";
        var u = e("../compressions"), n = e("./ZipFileWorker");
        r.generateWorker = function(e2, a, t2) {
          var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
          try {
            e2.forEach(function(e3, t3) {
              h++;
              var r2 = (function(e4, t4) {
                var r3 = e4 || t4, n3 = u[r3];
                if (!n3) throw new Error(r3 + " is not a valid compression method !");
                return n3;
              })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
              t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
            }), o.entriesCount = h;
          } catch (e3) {
            o.error(e3);
          }
          return o;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
        "use strict";
        function n() {
          if (!(this instanceof n)) return new n();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e2 = new n();
            for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
            return e2;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
          return new n().loadAsync(e2, t2);
        }, n.external = e("./external"), t.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
        "use strict";
        var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
        function f(n2) {
          return new i.Promise(function(e2, t2) {
            var r2 = n2.decompressed.getContentWorker().pipe(new a());
            r2.on("error", function(e3) {
              t2(e3);
            }).on("end", function() {
              r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
            }).resume();
          });
        }
        t.exports = function(e2, o) {
          var h = this;
          return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
            var t2 = new s(o);
            return t2.load(e3), t2;
          }).then(function(e3) {
            var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
            if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f(r2[n2]));
            return i.Promise.all(t2);
          }).then(function(e3) {
            for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
              h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
            }
            return t2.zipComment.length && (h.comment = t2.zipComment), h;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../stream/GenericWorker");
        function s(e2, t2) {
          i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
        }
        n.inherits(s, i), s.prototype._bindStream = function(e2) {
          var t2 = this;
          (this._stream = e2).pause(), e2.on("data", function(e3) {
            t2.push({ data: e3, meta: { percent: 0 } });
          }).on("error", function(e3) {
            t2.isPaused ? this.generatedError = e3 : t2.error(e3);
          }).on("end", function() {
            t2.isPaused ? t2._upstreamEnded = true : t2.end();
          });
        }, s.prototype.pause = function() {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
        "use strict";
        var i = e("readable-stream").Readable;
        function n(e2, t2, r2) {
          i.call(this, t2), this._helper = e2;
          var n2 = this;
          e2.on("data", function(e3, t3) {
            n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
          }).on("error", function(e3) {
            n2.emit("error", e3);
          }).on("end", function() {
            n2.push(null);
          });
        }
        e("../utils").inherits(n, i), n.prototype._read = function() {
          this._helper.resume();
        }, t.exports = n;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
        "use strict";
        t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
          if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
          return new Buffer(e2, t2);
        }, allocBuffer: function(e2) {
          if (Buffer.alloc) return Buffer.alloc(e2);
          var t2 = new Buffer(e2);
          return t2.fill(0), t2;
        }, isBuffer: function(e2) {
          return Buffer.isBuffer(e2);
        }, isStream: function(e2) {
          return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
        } };
      }, {}], 15: [function(e, t, r) {
        "use strict";
        function s(e2, t2, r2) {
          var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
          s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
          var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
          r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
          var o2 = null;
          o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
          var h2 = new d(e2, o2, s2);
          this.files[e2] = h2;
        }
        var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
          "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
          var t2 = e2.lastIndexOf("/");
          return 0 < t2 ? e2.substring(0, t2) : "";
        }, g = function(e2) {
          return "/" !== e2.slice(-1) && (e2 += "/"), e2;
        }, b = function(e2, t2) {
          return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
        };
        function h(e2) {
          return "[object RegExp]" === Object.prototype.toString.call(e2);
        }
        var n = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e2) {
          var t2, r2, n2;
          for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
        }, filter: function(r2) {
          var n2 = [];
          return this.forEach(function(e2, t2) {
            r2(e2, t2) && n2.push(t2);
          }), n2;
        }, file: function(e2, t2, r2) {
          if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
          if (h(e2)) {
            var n2 = e2;
            return this.filter(function(e3, t3) {
              return !t3.dir && n2.test(e3);
            });
          }
          var i2 = this.files[this.root + e2];
          return i2 && !i2.dir ? i2 : null;
        }, folder: function(r2) {
          if (!r2) return this;
          if (h(r2)) return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
          var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
          return n2.root = t2.name, n2;
        }, remove: function(r2) {
          r2 = this.root + r2;
          var e2 = this.files[r2];
          if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
          else for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e2) {
          var t2, r2 = {};
          try {
            if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
            u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
            var n2 = r2.comment || this.comment || "";
            t2 = o.generateWorker(this, r2, n2);
          } catch (e3) {
            (t2 = new l("error")).error(e3);
          }
          return new a(t2, r2.type || "string", r2.mimeType);
        }, generateAsync: function(e2, t2) {
          return this.generateInternalStream(e2).accumulate(t2);
        }, generateNodeStream: function(e2, t2) {
          return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
        } };
        t.exports = n;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
        "use strict";
        t.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
          for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data[this.zero + e2];
        }, i.prototype.lastIndexOfSignature = function(e2) {
          for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
          return -1;
        }, i.prototype.readAndCheckSignature = function(e2) {
          var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
          return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
        }, i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return [];
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
        "use strict";
        var n = e("../utils");
        function i(e2) {
          this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
        }
        i.prototype = { checkOffset: function(e2) {
          this.checkIndex(this.index + e2);
        }, checkIndex: function(e2) {
          if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
        }, setIndex: function(e2) {
          this.checkIndex(e2), this.index = e2;
        }, skip: function(e2) {
          this.setIndex(this.index + e2);
        }, byteAt: function() {
        }, readInt: function(e2) {
          var t2, r2 = 0;
          for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
          return this.index += e2, r2;
        }, readString: function(e2) {
          return n.transformTo("string", this.readData(e2));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e2 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
        } }, t.exports = i;
      }, { "../utils": 32 }], 19: [function(e, t, r) {
        "use strict";
        var n = e("./Uint8ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data.charCodeAt(this.zero + e2);
        }, i.prototype.lastIndexOfSignature = function(e2) {
          return this.data.lastIndexOf(e2) - this.zero;
        }, i.prototype.readAndCheckSignature = function(e2) {
          return e2 === this.readData(4);
        }, i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
        "use strict";
        var n = e("./ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
          var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
        t.exports = function(e2) {
          var t2 = n.getTypeOf(e2);
          return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
        "use strict";
        r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../utils");
        function s(e2) {
          n.call(this, "ConvertWorker to " + e2), this.destType = e2;
        }
        i.inherits(s, n), s.prototype.processChunk = function(e2) {
          this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../crc32");
        function s() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
          this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
        }, t.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
        }
        n.inherits(s, i), s.prototype.processChunk = function(e2) {
          if (e2) {
            var t2 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t2 + e2.data.length;
          }
          i.prototype.processChunk.call(this, e2);
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataWorker");
          var t2 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
            t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
          }, function(e3) {
            t2.error(e3);
          });
        }
        n.inherits(s, i), s.prototype.cleanUp = function() {
          i.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e2 = null, t2 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e2 = this.data.substring(this.index, t2);
              break;
            case "uint8array":
              e2 = this.data.subarray(this.index, t2);
              break;
            case "array":
            case "nodebuffer":
              e2 = this.data.slice(this.index, t2);
          }
          return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
        "use strict";
        function n(e2) {
          this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(e2) {
          this.emit("data", e2);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e2) {
            this.emit("error", e2);
          }
          return true;
        }, error: function(e2) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
        }, on: function(e2, t2) {
          return this._listeners[e2].push(t2), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e2, t2) {
          if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
        }, pipe: function(e2) {
          return e2.registerPrevious(this);
        }, registerPrevious: function(e2) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e2 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
        }, flush: function() {
        }, processChunk: function(e2) {
          this.push(e2);
        }, withStreamInfo: function(e2, t2) {
          return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e2 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e2 : e2;
        } }, t.exports = n;
      }, {}], 29: [function(e, t, r) {
        "use strict";
        var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
        if (n.nodestream) try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
        function l(e2, o2) {
          return new a.Promise(function(t2, r2) {
            var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
            e2.on("data", function(e3, t3) {
              n2.push(e3), o2 && o2(t3);
            }).on("error", function(e3) {
              n2 = [], r2(e3);
            }).on("end", function() {
              try {
                var e3 = (function(e4, t3, r3) {
                  switch (e4) {
                    case "blob":
                      return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                    case "base64":
                      return u.encode(t3);
                    default:
                      return h.transformTo(e4, t3);
                  }
                })(s2, (function(e4, t3) {
                  var r3, n3 = 0, i3 = null, s3 = 0;
                  for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                  switch (e4) {
                    case "string":
                      return t3.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t3);
                    case "uint8array":
                      for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                      return i3;
                    case "nodebuffer":
                      return Buffer.concat(t3);
                    default:
                      throw new Error("concat : unsupported type '" + e4 + "'");
                  }
                })(i2, n2), a2);
                t2(e3);
              } catch (e4) {
                r2(e4);
              }
              n2 = [];
            }).resume();
          });
        }
        function f(e2, t2, r2) {
          var n2 = t2;
          switch (t2) {
            case "blob":
            case "arraybuffer":
              n2 = "uint8array";
              break;
            case "base64":
              n2 = "string";
          }
          try {
            this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
          } catch (e3) {
            this._worker = new s("error"), this._worker.error(e3);
          }
        }
        f.prototype = { accumulate: function(e2) {
          return l(this, e2);
        }, on: function(e2, t2) {
          var r2 = this;
          return "data" === e2 ? this._worker.on(e2, function(e3) {
            t2.call(r2, e3.data, e3.meta);
          }) : this._worker.on(e2, function() {
            h.delay(t2, arguments, r2);
          }), this;
        }, resume: function() {
          return h.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e2) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
        } }, t.exports = f;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
        "use strict";
        if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
        else {
          var n = new ArrayBuffer(0);
          try {
            r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
          } catch (e2) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
            } catch (e3) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e2) {
          r.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e, t, s) {
        "use strict";
        for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
        u[254] = u[254] = 1;
        function a() {
          n.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l() {
          n.call(this, "utf-8 encode");
        }
        s.utf8encode = function(e2) {
          return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
            for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          })(e2);
        }, s.utf8decode = function(e2) {
          return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
            for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
            else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
            }
            return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
          })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
        }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
          var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
          if (this.leftOver && this.leftOver.length) {
            if (h.uint8array) {
              var r2 = t2;
              (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
            } else t2 = this.leftOver.concat(t2);
            this.leftOver = null;
          }
          var n2 = (function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
          })(t2), i2 = t2;
          n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
        }, a.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
          this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
        }, s.Utf8EncodeWorker = l;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
        "use strict";
        var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
        function n(e2) {
          return e2;
        }
        function l(e2, t2) {
          for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
          return t2;
        }
        e("setimmediate"), a.newBlob = function(t2, r2) {
          a.checkSupport("blob");
          try {
            return new Blob([t2], { type: r2 });
          } catch (e2) {
            try {
              var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n2.append(t2), n2.getBlob(r2);
            } catch (e3) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i = { stringifyByChunk: function(e2, t2, r2) {
          var n2 = [], i2 = 0, s2 = e2.length;
          if (s2 <= r2) return String.fromCharCode.apply(null, e2);
          for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
          return n2.join("");
        }, stringifyByChar: function(e2) {
          for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
          return t2;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e2) {
            return false;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
          } catch (e2) {
            return false;
          }
        })() } };
        function s(e2) {
          var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
          if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
            return i.stringifyByChunk(e2, r2, t2);
          } catch (e3) {
            t2 = Math.floor(t2 / 2);
          }
          return i.stringifyByChar(e2);
        }
        function f(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
          return t2;
        }
        a.applyFromCharCode = s;
        var c = {};
        c.string = { string: n, array: function(e2) {
          return l(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.string.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return l(e2, new Uint8Array(e2.length));
        }, nodebuffer: function(e2) {
          return l(e2, r.allocBuffer(e2.length));
        } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
          return new Uint8Array(e2).buffer;
        }, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.arraybuffer = { string: function(e2) {
          return s(new Uint8Array(e2));
        }, array: function(e2) {
          return f(new Uint8Array(e2), new Array(e2.byteLength));
        }, arraybuffer: n, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(new Uint8Array(e2));
        } }, c.uint8array = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return e2.buffer;
        }, uint8array: n, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.nodebuffer = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.nodebuffer.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return f(e2, new Uint8Array(e2.length));
        }, nodebuffer: n }, a.transformTo = function(e2, t2) {
          if (t2 = t2 || "", !e2) return t2;
          a.checkSupport(e2);
          var r2 = a.getTypeOf(t2);
          return c[r2][e2](t2);
        }, a.resolve = function(e2) {
          for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
          }
          return r2.join("/");
        }, a.getTypeOf = function(e2) {
          return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(e2) {
          if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
          var t2, r2, n2 = "";
          for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
          return n2;
        }, a.delay = function(e2, t2, r2) {
          setImmediate(function() {
            e2.apply(r2 || null, t2 || []);
          });
        }, a.inherits = function(e2, t2) {
          function r2() {
          }
          r2.prototype = t2.prototype, e2.prototype = new r2();
        }, a.extend = function() {
          var e2, t2, r2 = {};
          for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
          return r2;
        }, a.prepareContent = function(r2, e2, n2, i2, s2) {
          return u.Promise.resolve(e2).then(function(n3) {
            return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
              var e3 = new FileReader();
              e3.onload = function(e4) {
                t2(e4.target.result);
              }, e3.onerror = function(e4) {
                r3(e4.target.error);
              }, e3.readAsArrayBuffer(n3);
            }) : n3;
          }).then(function(e3) {
            var t2 = a.getTypeOf(e3);
            return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
              return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
            })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
        function h(e2) {
          this.files = [], this.loadOptions = e2;
        }
        h.prototype = { checkSignature: function(e2) {
          if (!this.reader.readAndCheckSignature(e2)) {
            this.reader.index -= 4;
            var t2 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
          }
        }, isSignature: function(e2, t2) {
          var r2 = this.reader.index;
          this.reader.setIndex(e2);
          var n2 = this.reader.readString(4) === t2;
          return this.reader.setIndex(r2), n2;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
          this.zipComment = this.loadOptions.decodeFileName(r2);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e2, t2;
          for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
        }, readCentralDir: function() {
          var e2;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e2);
          var t2 = e2;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r2 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
          var n2 = t2 - r2;
          if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
          else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
        }, prepareReader: function(e2) {
          this.reader = n(e2);
        }, load: function(e2) {
          this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t.exports = h;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
        function l(e2, t2) {
          this.options = e2, this.loadOptions = t2;
        }
        l.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e2) {
          var t2, r2;
          if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t2 = (function(e3) {
            for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
            return null;
          })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
        }, readCentralPart: function(e2) {
          this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
          var t2 = e2.readInt(2);
          if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e2 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e2 = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
          }
        }, readExtraFields: function(e2) {
          var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
          e2.setIndex(i2);
        }, handleUTF8: function() {
          var e2 = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
          else {
            var t2 = this.findExtraFieldUnicodePath();
            if (null !== t2) this.fileNameStr = t2;
            else {
              var r2 = s.transformTo(e2, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r2);
            }
            var n2 = this.findExtraFieldUnicodeComment();
            if (null !== n2) this.fileCommentStr = n2;
            else {
              var i2 = s.transformTo(e2, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i2);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e2 = this.extraFields[28789];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e2 = this.extraFields[25461];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        } }, t.exports = l;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
        "use strict";
        function n(e2, t2, r2) {
          this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
        n.prototype = { internalStream: function(e2) {
          var t2 = null, r2 = "string";
          try {
            if (!e2) throw new Error("No output type specified.");
            var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
            "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
            var i2 = !this._dataBinary;
            i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
          } catch (e3) {
            (t2 = new h("error")).error(e3);
          }
          return new s(t2, r2, "");
        }, async: function(e2, t2) {
          return this.internalStream(e2).accumulate(t2);
        }, nodeStream: function(e2, t2) {
          return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
        }, _compressWorker: function(e2, t2) {
          if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
          var r2 = this._decompressWorker();
          return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
        }, _decompressWorker: function() {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        } };
        for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
        t.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
        (function(t2) {
          "use strict";
          var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
          if (e2) {
            var i = 0, s = new e2(u), a = t2.document.createTextNode("");
            s.observe(a, { characterData: true }), r = function() {
              a.data = i = ++i % 2;
            };
          } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
          else {
            var o = new t2.MessageChannel();
            o.port1.onmessage = u, r = function() {
              o.port2.postMessage(0);
            };
          }
          var h = [];
          function u() {
            var e3, t3;
            n = true;
            for (var r2 = h.length; r2; ) {
              for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
              r2 = h.length;
            }
            n = false;
          }
          l.exports = function(e3) {
            1 !== h.push(e3) || n || r();
          };
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e, t, r) {
        "use strict";
        var i = e("immediate");
        function u() {
        }
        var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
        function o(e2) {
          if ("function" != typeof e2) throw new TypeError("resolver must be a function");
          this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
        }
        function h(e2, t2, r2) {
          this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
        }
        function f(t2, r2, n2) {
          i(function() {
            var e2;
            try {
              e2 = r2(n2);
            } catch (e3) {
              return l.reject(t2, e3);
            }
            e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
          });
        }
        function c(e2) {
          var t2 = e2 && e2.then;
          if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
            t2.apply(e2, arguments);
          };
        }
        function d(t2, e2) {
          var r2 = false;
          function n2(e3) {
            r2 || (r2 = true, l.reject(t2, e3));
          }
          function i2(e3) {
            r2 || (r2 = true, l.resolve(t2, e3));
          }
          var s2 = p(function() {
            e2(i2, n2);
          });
          "error" === s2.status && n2(s2.value);
        }
        function p(e2, t2) {
          var r2 = {};
          try {
            r2.value = e2(t2), r2.status = "success";
          } catch (e3) {
            r2.status = "error", r2.value = e3;
          }
          return r2;
        }
        (t.exports = o).prototype.finally = function(t2) {
          if ("function" != typeof t2) return this;
          var r2 = this.constructor;
          return this.then(function(e2) {
            return r2.resolve(t2()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t2()).then(function() {
              throw e2;
            });
          });
        }, o.prototype.catch = function(e2) {
          return this.then(null, e2);
        }, o.prototype.then = function(e2, t2) {
          if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
          var r2 = new this.constructor(u);
          this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
          return r2;
        }, h.prototype.callFulfilled = function(e2) {
          l.resolve(this.promise, e2);
        }, h.prototype.otherCallFulfilled = function(e2) {
          f(this.promise, this.onFulfilled, e2);
        }, h.prototype.callRejected = function(e2) {
          l.reject(this.promise, e2);
        }, h.prototype.otherCallRejected = function(e2) {
          f(this.promise, this.onRejected, e2);
        }, l.resolve = function(e2, t2) {
          var r2 = p(c, t2);
          if ("error" === r2.status) return l.reject(e2, r2.value);
          var n2 = r2.value;
          if (n2) d(e2, n2);
          else {
            e2.state = a, e2.outcome = t2;
            for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
          }
          return e2;
        }, l.reject = function(e2, t2) {
          e2.state = s, e2.outcome = t2;
          for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
          return e2;
        }, o.resolve = function(e2) {
          if (e2 instanceof this) return e2;
          return l.resolve(new this(u), e2);
        }, o.reject = function(e2) {
          var t2 = new this(u);
          return l.reject(t2, e2);
        }, o.all = function(e2) {
          var r2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var n2 = e2.length, i2 = false;
          if (!n2) return this.resolve([]);
          var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
          for (; ++t2 < n2; ) h2(e2[t2], t2);
          return o2;
          function h2(e3, t3) {
            r2.resolve(e3).then(function(e4) {
              s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
            }, function(e4) {
              i2 || (i2 = true, l.reject(o2, e4));
            });
          }
        }, o.race = function(e2) {
          var t2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var r2 = e2.length, n2 = false;
          if (!r2) return this.resolve([]);
          var i2 = -1, s2 = new this(u);
          for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n2 || (n2 = true, l.resolve(s2, e3));
          }, function(e3) {
            n2 || (n2 = true, l.reject(s2, e3));
          });
          var a2;
          return s2;
        };
      }, { immediate: 36 }], 38: [function(e, t, r) {
        "use strict";
        var n = {};
        (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
        "use strict";
        var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
        function p(e2) {
          if (!(this instanceof p)) return new p(e2);
          this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
          var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
          if (r2 !== l) throw new Error(i[r2]);
          if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
            var n2;
            if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l) throw new Error(i[r2]);
            this._dict_set = true;
          }
        }
        function n(e2, t2) {
          var r2 = new p(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
          return r2.result;
        }
        p.prototype.push = function(e2, t2) {
          var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
          do {
            if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
            0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
          } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
          return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
        }, p.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, p.prototype.onEnd = function(e2) {
          e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, n(e2, t2);
        }, r.gzip = function(e2, t2) {
          return (t2 = t2 || {}).gzip = true, n(e2, t2);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
        "use strict";
        var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
        function a(e2) {
          if (!(this instanceof a)) return new a(e2);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
          var r2 = c.inflateInit2(this.strm, t2.windowBits);
          if (r2 !== m.Z_OK) throw new Error(n[r2]);
          this.header = new s(), c.inflateGetHeader(this.strm, this.header);
        }
        function o(e2, t2) {
          var r2 = new a(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
          return r2.result;
        }
        a.prototype.push = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
          do {
            if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
            h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
          } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
          return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
        }, a.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, a.prototype.onEnd = function(e2) {
          e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, o(e2, t2);
        }, r.ungzip = o;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r.assign = function(e2) {
          for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
            var r2 = t2.shift();
            if (r2) {
              if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
              for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
            }
          }
          return e2;
        }, r.shrinkBuf = function(e2, t2) {
          return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
        };
        var i = { arraySet: function(e2, t2, r2, n2, i2) {
          if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
          else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          var t2, r2, n2, i2, s2, a;
          for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
          for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
          return a;
        } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
          for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          return [].concat.apply([], e2);
        } };
        r.setTyped = function(e2) {
          e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
        }, r.setTyped(n);
      }, {}], 42: [function(e, t, r) {
        "use strict";
        var h = e("./common"), i = true, s = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e2) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e2) {
          s = false;
        }
        for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
        function l(e2, t2) {
          if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
          for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
          return r2;
        }
        u[254] = u[254] = 1, r.string2buf = function(e2) {
          var t2, r2, n2, i2, s2, a = e2.length, o = 0;
          for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }, r.buf2binstring = function(e2) {
          return l(e2, e2.length);
        }, r.binstring2buf = function(e2) {
          for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
          return t2;
        }, r.buf2string = function(e2, t2) {
          var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
          for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
          else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
          }
          return l(o, n2);
        }, r.utf8border = function(e2, t2) {
          var r2;
          for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
          return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
        };
      }, { "./common": 41 }], 43: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2, r2, n) {
          for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
            for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
            i %= 65521, s %= 65521;
          }
          return i | s << 16 | 0;
        };
      }, {}], 44: [function(e, t, r) {
        "use strict";
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, t, r) {
        "use strict";
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2, r2, n) {
          var i = o, s = n + r2;
          e2 ^= -1;
          for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
          return -1 ^ e2;
        };
      }, {}], 46: [function(e, t, r) {
        "use strict";
        var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
        function R(e2, t2) {
          return e2.msg = n[t2], t2;
        }
        function T(e2) {
          return (e2 << 1) - (4 < e2 ? 9 : 0);
        }
        function D(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        function F(e2) {
          var t2 = e2.state, r2 = t2.pending;
          r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
        }
        function N(e2, t2) {
          u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = t2;
        }
        function P(e2, t2) {
          e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
        }
        function L(e2, t2) {
          var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
          e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
          do {
            if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
              s2 += 2, r2++;
              do {
              } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
              if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
                if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
              }
            }
          } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
          return a2 <= e2.lookahead ? a2 : e2.lookahead;
        }
        function j(e2) {
          var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
          do {
            if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
              for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              i2 += f2;
            }
            if (0 === e2.strm.avail_in) break;
            if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
          } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
        }
        function Z(e2, t2) {
          for (var r2, n2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
              e2.strstart++;
            } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
            else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
            if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function W(e2, t2) {
          for (var r2, n2, i2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
              for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
              if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            } else if (e2.match_available) {
              if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A;
            } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
          }
          return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function M(e2, t2, r2, n2, i2) {
          this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
        }
        function H() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G(e2) {
          var t2;
          return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
        }
        function K(e2) {
          var t2 = G(e2);
          return t2 === m && (function(e3) {
            e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
          })(e2.state), t2;
        }
        function Y(e2, t2, r2, n2, i2, s2) {
          if (!e2) return _;
          var a2 = 1;
          if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2) return R(e2, _);
          8 === n2 && (n2 = 9);
          var o2 = new H();
          return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
        }
        h = [new M(0, 0, 0, 0, function(e2, t2) {
          var r2 = 65535;
          for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
            if (e2.lookahead <= 1) {
              if (j(e2), 0 === e2.lookahead && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            e2.strstart += e2.lookahead, e2.lookahead = 0;
            var n2 = e2.block_start + r2;
            if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A;
            if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
        }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
          return Y(e2, t2, v, 15, 8, 0);
        }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
          return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
        }, r.deflate = function(e2, t2) {
          var r2, n2, i2, s2;
          if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _) : _;
          if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _);
          if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C) if (2 === n2.wrap) e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
          else {
            var a2 = v + (n2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
          }
          if (69 === n2.status) if (n2.gzhead.extra) {
            for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
          } else n2.status = 73;
          if (73 === n2.status) if (n2.gzhead.name) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
          } else n2.status = 91;
          if (91 === n2.status) if (n2.gzhead.comment) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
          } else n2.status = 103;
          if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
            if (F(e2), 0 === e2.avail_out) return n2.last_flush = -1, m;
          } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f) return R(e2, -5);
          if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
          if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
            var o2 = 2 === n2.strategy ? (function(e3, t3) {
              for (var r3; ; ) {
                if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                  if (t3 === l) return A;
                  break;
                }
                if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
              for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                if (e3.lookahead <= S) {
                  if (j(e3), e3.lookahead <= S && t3 === l) return A;
                  if (0 === e3.lookahead) break;
                }
                if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                  s3 = e3.strstart + S;
                  do {
                  } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                  e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                }
                if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : h[n2.level].func(n2, t2);
            if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O) return 0 === e2.avail_out && (n2.last_flush = -1), m;
            if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m;
          }
          return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
        }, r.deflateEnd = function(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
        }, r.deflateSetDictionary = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
          if (!e2 || !e2.state) return _;
          if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _;
          for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
            for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
            r2.strstart = n2, r2.lookahead = x - 1, j(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
        }, r.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2) {
          var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
          r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
          e: do {
            p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
            t: for (; ; ) {
              if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
              else {
                if (!(16 & y)) {
                  if (0 == (64 & y)) {
                    v = m[(65535 & v) + (d & (1 << y) - 1)];
                    continue t;
                  }
                  if (32 & y) {
                    r2.mode = 12;
                    break e;
                  }
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break e;
                }
                w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                r: for (; ; ) {
                  if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                    if (0 == (64 & y)) {
                      v = _[(65535 & v) + (d & (1 << y) - 1)];
                      continue r;
                    }
                    e2.msg = "invalid distance code", r2.mode = 30;
                    break e;
                  }
                  if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (d >>>= y, p -= y, (y = s - a) < k) {
                    if (l < (y = k - y) && r2.sane) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (S = c, (x = 0) === f) {
                      if (x += u - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k, S = C;
                      }
                    } else if (f < y) {
                      if (x += u + f - y, (y -= f) < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        if (x = 0, f < w) {
                          for (w -= y = f; C[s++] = c[x++], --y; ) ;
                          x = s - k, S = C;
                        }
                      }
                    } else if (x += f - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y; ) ;
                      x = s - k, S = C;
                    }
                    for (; 2 < w; ) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                    w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                  } else {
                    for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                    w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n < i && s < o);
          n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
        };
      }, {}], 49: [function(e, t, r) {
        "use strict";
        var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
        function L(e2) {
          return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
        }
        function s() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
        }
        function o(e2) {
          var t2;
          return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
        }
        function h(e2, t2) {
          var r2, n2;
          return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
        }
        function u(e2, t2) {
          var r2, n2;
          return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
        }
        var l, f, c = true;
        function j(e2) {
          if (c) {
            var t2;
            for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
            for (; t2 < 256; ) e2.lens[t2++] = 9;
            for (; t2 < 280; ) e2.lens[t2++] = 7;
            for (; t2 < 288; ) e2.lens[t2++] = 8;
            for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
            T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
          }
          e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
        }
        function Z(e2, t2, r2, n2) {
          var i2, s2 = e2.state;
          return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
        }
        r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
          return u(e2, 15);
        }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U;
          12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
          e: for (; ; ) switch (r2.mode) {
            case P:
              if (0 === r2.wrap) {
                r2.mode = 13;
                break;
              }
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (2 & r2.wrap && 35615 === u2) {
                E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                break;
              }
              if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                e2.msg = "incorrect header check", r2.mode = 30;
                break;
              }
              if (8 != (15 & u2)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k;
              else if (k > r2.wbits) {
                e2.msg = "invalid window size", r2.mode = 30;
                break;
              }
              r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
              break;
            case 2:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.flags = u2, 8 != (255 & r2.flags)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (57344 & r2.flags) {
                e2.msg = "unknown header flags set", r2.mode = 30;
                break;
              }
              r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
            case 3:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
            case 4:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
            case 5:
              if (1024 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
              } else r2.head && (r2.head.extra = null);
              r2.mode = 6;
            case 6:
              if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
              r2.length = 0, r2.mode = 7;
            case 7:
              if (2048 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.name = null);
              r2.length = 0, r2.mode = 8;
            case 8:
              if (4096 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.comment = null);
              r2.mode = 9;
            case 9:
              if (512 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (65535 & r2.check)) {
                  e2.msg = "header crc mismatch", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
              break;
            case 10:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
            case 11:
              if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
              e2.adler = r2.check = 1, r2.mode = 12;
            case 12:
              if (5 === t2 || 6 === t2) break e;
            case 13:
              if (r2.last) {
                u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                break;
              }
              for (; l2 < 3; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                case 0:
                  r2.mode = 14;
                  break;
                case 1:
                  if (j(r2), r2.mode = 20, 6 !== t2) break;
                  u2 >>>= 2, l2 -= 2;
                  break e;
                case 2:
                  r2.mode = 17;
                  break;
                case 3:
                  e2.msg = "invalid block type", r2.mode = 30;
              }
              u2 >>>= 2, l2 -= 2;
              break;
            case 14:
              for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                e2.msg = "invalid stored block lengths", r2.mode = 30;
                break;
              }
              if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
            case 15:
              r2.mode = 16;
            case 16:
              if (d = r2.length) {
                if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                break;
              }
              r2.mode = 12;
              break;
            case 17:
              for (; l2 < 14; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                e2.msg = "too many length or distance symbols", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 18;
            case 18:
              for (; r2.have < r2.ncode; ) {
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
              }
              for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
              if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid code lengths set", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 19;
            case 19:
              for (; r2.have < r2.nlen + r2.ndist; ) {
                for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (b < 16) u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                else {
                  if (16 === b) {
                    for (z = _ + 2; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                  } else if (17 === b) {
                    for (z = _ + 3; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                  } else {
                    for (z = _ + 7; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                  }
                  if (r2.have + d > r2.nlen + r2.ndist) {
                    e2.msg = "invalid bit length repeat", r2.mode = 30;
                    break;
                  }
                  for (; d--; ) r2.lens[r2.have++] = k;
                }
              }
              if (30 === r2.mode) break;
              if (0 === r2.lens[256]) {
                e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                break;
              }
              if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid literal/lengths set", r2.mode = 30;
                break;
              }
              if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                e2.msg = "invalid distances set", r2.mode = 30;
                break;
              }
              if (r2.mode = 20, 6 === t2) break e;
            case 20:
              r2.mode = 21;
            case 21:
              if (6 <= o2 && 258 <= h2) {
                e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                break;
              }
              for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (g && 0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                r2.mode = 26;
                break;
              }
              if (32 & g) {
                r2.back = -1, r2.mode = 12;
                break;
              }
              if (64 & g) {
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break;
              }
              r2.extra = 15 & g, r2.mode = 22;
            case 22:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              r2.was = r2.length, r2.mode = 23;
            case 23:
              for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break;
              }
              r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
            case 24:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              if (r2.offset > r2.dmax) {
                e2.msg = "invalid distance too far back", r2.mode = 30;
                break;
              }
              r2.mode = 25;
            case 25:
              if (0 === h2) break e;
              if (d = c2 - h2, r2.offset > d) {
                if ((d = r2.offset - d) > r2.whave && r2.sane) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
              } else m = i2, p = a2 - r2.offset, d = r2.length;
              for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
              0 === r2.length && (r2.mode = 21);
              break;
            case 26:
              if (0 === h2) break e;
              i2[a2++] = r2.length, h2--, r2.mode = 21;
              break;
            case 27:
              if (r2.wrap) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 |= n2[s2++] << l2, l2 += 8;
                }
                if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                  e2.msg = "incorrect data check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 28;
            case 28:
              if (r2.wrap && r2.flags) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (4294967295 & r2.total)) {
                  e2.msg = "incorrect length check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 29;
            case 29:
              x = 1;
              break e;
            case 30:
              x = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U;
          }
          return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
        }, r.inflateEnd = function(e2) {
          if (!e2 || !e2.state) return U;
          var t2 = e2.state;
          return t2.window && (t2.window = null), e2.state = null, N;
        }, r.inflateGetHeader = function(e2, t2) {
          var r2;
          return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
        }, r.inflateSetDictionary = function(e2, t2) {
          var r2, n2 = t2.length;
          return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
        }, r.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
        "use strict";
        var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(e2, t2, r2, n, i, s, a, o) {
          var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
          for (b = 0; b <= 15; b++) O[b] = 0;
          for (v = 0; v < n; v++) O[t2[r2 + v]]++;
          for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) ;
          if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
          for (y = 1; y < w && 0 === O[y]; y++) ;
          for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
          if (0 < z && (0 === e2 || 1 !== w)) return -1;
          for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
          for (v = 0; v < n; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
          if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
          for (; ; ) {
            for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) ;
            for (h = 1 << b - 1; E & h; ) h >>= 1;
            if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
              if (b === w) break;
              b = t2[r2 + a[v]];
            }
            if (k < b && (E & f) !== l) {
              for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) x++, z <<= 1;
              if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
              i[l = E & f] = k << 24 | x << 16 | c - s | 0;
            }
          }
          return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, t, r) {
        "use strict";
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, t, r) {
        "use strict";
        var i = e("../utils/common"), o = 0, h = 1;
        function n(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
        n(z);
        var C = new Array(2 * f);
        n(C);
        var E = new Array(512);
        n(E);
        var A = new Array(256);
        n(A);
        var I = new Array(a);
        n(I);
        var O, B, R, T = new Array(f);
        function D(e2, t2, r2, n2, i2) {
          this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
        }
        function F(e2, t2) {
          this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
        }
        function N(e2) {
          return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
        }
        function P(e2, t2, r2) {
          e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
        }
        function L(e2, t2, r2) {
          P(e2, r2[2 * t2], r2[2 * t2 + 1]);
        }
        function j(e2, t2) {
          for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
          return r2 >>> 1;
        }
        function Z(e2, t2, r2) {
          var n2, i2, s2 = new Array(g + 1), a2 = 0;
          for (n2 = 1; n2 <= g; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
          for (i2 = 0; i2 <= t2; i2++) {
            var o2 = e2[2 * i2 + 1];
            0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
          }
        }
        function W(e2) {
          var t2;
          for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
          for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
          for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
          e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
        }
        function M(e2) {
          8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
        }
        function H(e2, t2, r2, n2) {
          var i2 = 2 * t2, s2 = 2 * r2;
          return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
        }
        function G(e2, t2, r2) {
          for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
          e2.heap[r2] = n2;
        }
        function K(e2, t2, r2) {
          var n2, i2, s2, a2, o2 = 0;
          if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; ) ;
          L(e2, m, t2);
        }
        function Y(e2, t2) {
          var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
          for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
          for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
          for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G(e2, s2, r2);
          for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; ) ;
          e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
            for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
            for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
            if (0 !== m2) {
              do {
                for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
              } while (0 < m2);
              for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
            }
          })(e2, t2), Z(s2, u2, e2.bl_count);
        }
        function X(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
        }
        function V(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; ) ;
            else 0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
        }
        n(T);
        var q = false;
        function J(e2, t2, r2, n2) {
          P(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            M(e3), n3 && (U(e3, r3), U(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
          })(e2, t2, r2, true);
        }
        r._tr_init = function(e2) {
          q || ((function() {
            var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
            for (n2 = r2 = 0; n2 < a - 1; n2++) for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A[r2++] = n2;
            for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++) E[i2++] = n2;
            for (i2 >>= 7; n2 < f; n2++) for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++) E[256 + i2++] = n2;
            for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
            for (e3 = 0; e3 <= 143; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (; e3 <= 255; ) z[2 * e3 + 1] = 9, e3++, s2[9]++;
            for (; e3 <= 279; ) z[2 * e3 + 1] = 7, e3++, s2[7]++;
            for (; e3 <= 287; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
            O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
          })(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
        }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
          var i2, s2, a2 = 0;
          0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
            var t3, r3 = 4093624447;
            for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
            if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
            for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
            return o;
          })(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = (function(e3) {
            var t3;
            for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--) ;
            return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
          })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            var i3;
            for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
            V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
          })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
        }, r._tr_tally = function(e2, t2, r2) {
          return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
        }, r._tr_align = function(e2) {
          P(e2, 2, 3), L(e2, m, z), (function(e3) {
            16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
          })(e2);
        };
      }, { "../utils/common": 41 }], 53: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, t, r) {
        (function(e2) {
          !(function(r2, n) {
            "use strict";
            if (!r2.setImmediate) {
              var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
              e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                process.nextTick(function() {
                  c(e4);
                });
              } : (function() {
                if (r2.postMessage && !r2.importScripts) {
                  var e4 = true, t3 = r2.onmessage;
                  return r2.onmessage = function() {
                    e4 = false;
                  }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                }
              })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                r2.postMessage(a + e4, "*");
              }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                c(e4.data);
              }, function(e4) {
                t2.port2.postMessage(e4);
              }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                var t3 = l.createElement("script");
                t3.onreadystatechange = function() {
                  c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                }, s.appendChild(t3);
              }) : function(e4) {
                setTimeout(c, 0, e4);
              }, e3.setImmediate = function(e4) {
                "function" != typeof e4 && (e4 = new Function("" + e4));
                for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                var n2 = { callback: e4, args: t3 };
                return h[o] = n2, i(o), o++;
              }, e3.clearImmediate = f;
            }
            function f(e4) {
              delete h[e4];
            }
            function c(e4) {
              if (u) setTimeout(c, 0, e4);
              else {
                var t3 = h[e4];
                if (t3) {
                  u = true;
                  try {
                    !(function(e5) {
                      var t4 = e5.callback, r3 = e5.args;
                      switch (r3.length) {
                        case 0:
                          t4();
                          break;
                        case 1:
                          t4(r3[0]);
                          break;
                        case 2:
                          t4(r3[0], r3[1]);
                          break;
                        case 3:
                          t4(r3[0], r3[1], r3[2]);
                          break;
                        default:
                          t4.apply(n, r3);
                      }
                    })(t3);
                  } finally {
                    f(e4), u = false;
                  }
                }
              }
            }
            function d(e4) {
              e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
            }
          })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }
});

// (disabled):buffer
var require_buffer = __commonJS({
  "(disabled):buffer"() {
  }
});

// node_modules/js-sha256/src/sha256.js
var require_sha256 = __commonJS({
  "node_modules/js-sha256/src/sha256.js"(exports, module) {
    (function() {
      "use strict";
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node && process.type != "renderer";
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [-2147483648, 8388608, 32768, 128];
      var SHIFT = [24, 16, 8, 0];
      var K = [
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
      var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
      var blocks = [];
      if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType, is224) {
        return function(message2) {
          return new Sha256(is224, true).update(message2)[outputType]();
        };
      };
      var createMethod = function(is224) {
        var method = createOutputMethod("hex", is224);
        if (NODE_JS) {
          method = nodeWrap(method, is224);
        }
        method.create = function() {
          return new Sha256(is224);
        };
        method.update = function(message2) {
          return method.create().update(message2);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createOutputMethod(type, is224);
        }
        return method;
      };
      var nodeWrap = function(method, is224) {
        var crypto2 = require_crypto();
        var Buffer2 = require_buffer().Buffer;
        var algorithm = is224 ? "sha224" : "sha256";
        var bufferFrom;
        if (Buffer2.from && !root.JS_SHA256_NO_BUFFER_FROM) {
          bufferFrom = Buffer2.from;
        } else {
          bufferFrom = function(message2) {
            return new Buffer2(message2);
          };
        }
        var nodeMethod = function(message2) {
          if (typeof message2 === "string") {
            return crypto2.createHash(algorithm).update(message2, "utf8").digest("hex");
          } else {
            if (message2 === null || message2 === void 0) {
              throw new Error(ERROR);
            } else if (message2.constructor === ArrayBuffer) {
              message2 = new Uint8Array(message2);
            }
          }
          if (Array.isArray(message2) || ArrayBuffer.isView(message2) || message2.constructor === Buffer2) {
            return crypto2.createHash(algorithm).update(bufferFrom(message2)).digest("hex");
          } else {
            return method(message2);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType, is224) {
        return function(key, message2) {
          return new HmacSha256(key, is224, true).update(message2)[outputType]();
        };
      };
      var createHmacMethod = function(is224) {
        var method = createHmacOutputMethod("hex", is224);
        method.create = function(key) {
          return new HmacSha256(key, is224);
        };
        method.update = function(key, message2) {
          return method.create(key).update(message2);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
      };
      function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is224) {
          this.h0 = 3238371032;
          this.h1 = 914150663;
          this.h2 = 812702999;
          this.h3 = 4144912697;
          this.h4 = 4290775857;
          this.h5 = 1750603025;
          this.h6 = 1694076839;
          this.h7 = 3204075428;
        } else {
          this.h0 = 1779033703;
          this.h1 = 3144134277;
          this.h2 = 1013904242;
          this.h3 = 2773480762;
          this.h4 = 1359893119;
          this.h5 = 2600822924;
          this.h6 = 528734635;
          this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
      }
      Sha256.prototype.update = function(message2) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message2;
        if (type !== "string") {
          if (type === "object") {
            if (message2 === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && message2.constructor === ArrayBuffer) {
              message2 = new Uint8Array(message2);
            } else if (!Array.isArray(message2)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message2)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
          notString = true;
        }
        var code, index = 0, i, length = message2.length, blocks2 = this.blocks;
        while (index < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = this.block;
            this.block = blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
              blocks2[i >>> 2] |= message2[index] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index < length && i < 64; ++index) {
              code = message2.charCodeAt(index);
              if (code < 128) {
                blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message2.charCodeAt(++index) & 1023);
                blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.block = blocks2[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Sha256.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[16] = this.block;
        blocks2[i >>> 2] |= EXTRA[i & 3];
        this.block = blocks2[16];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = this.block;
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks2[15] = this.bytes << 3;
        this.hash();
      };
      Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for (j = 16; j < 64; ++j) {
          t1 = blocks2[j - 15];
          s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
          t1 = blocks2[j - 2];
          s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
          blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
        }
        bc = b & c;
        for (j = 0; j < 64; j += 4) {
          if (this.first) {
            if (this.is224) {
              ab = 300032;
              t1 = blocks2[0] - 1413257819;
              h = t1 - 150054599 << 0;
              d = t1 + 24177077 << 0;
            } else {
              ab = 704751109;
              t1 = blocks2[0] - 210244248;
              h = t1 - 1521486534 << 0;
              d = t1 + 143694565 << 0;
            }
            this.first = false;
          } else {
            s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            ab = a & b;
            maj = ab ^ a & c ^ bc;
            ch = e & f ^ ~e & g;
            t1 = h + s1 + ch + K[j] + blocks2[j];
            t2 = s0 + maj;
            h = d + t1 << 0;
            d = t1 + t2 << 0;
          }
          s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
          s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
          da = d & a;
          maj = da ^ d & b ^ ab;
          ch = h & e ^ ~h & f;
          t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
          t2 = s0 + maj;
          g = c + t1 << 0;
          c = t1 + t2 << 0;
          s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
          s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
          cd = c & d;
          maj = cd ^ c & a ^ da;
          ch = g & h ^ ~g & e;
          t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
          t2 = s0 + maj;
          f = b + t1 << 0;
          b = t1 + t2 << 0;
          s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
          s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
          bc = b & c;
          maj = bc ^ b & d ^ cd;
          ch = f & g ^ ~f & h;
          t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
          t2 = s0 + maj;
          e = a + t1 << 0;
          a = t1 + t2 << 0;
          this.chromeBugWorkAround = true;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
      };
      Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >>> 28 & 15] + HEX_CHARS[h4 >>> 24 & 15] + HEX_CHARS[h4 >>> 20 & 15] + HEX_CHARS[h4 >>> 16 & 15] + HEX_CHARS[h4 >>> 12 & 15] + HEX_CHARS[h4 >>> 8 & 15] + HEX_CHARS[h4 >>> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >>> 28 & 15] + HEX_CHARS[h5 >>> 24 & 15] + HEX_CHARS[h5 >>> 20 & 15] + HEX_CHARS[h5 >>> 16 & 15] + HEX_CHARS[h5 >>> 12 & 15] + HEX_CHARS[h5 >>> 8 & 15] + HEX_CHARS[h5 >>> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >>> 28 & 15] + HEX_CHARS[h6 >>> 24 & 15] + HEX_CHARS[h6 >>> 20 & 15] + HEX_CHARS[h6 >>> 16 & 15] + HEX_CHARS[h6 >>> 12 & 15] + HEX_CHARS[h6 >>> 8 & 15] + HEX_CHARS[h6 >>> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) {
          hex += HEX_CHARS[h7 >>> 28 & 15] + HEX_CHARS[h7 >>> 24 & 15] + HEX_CHARS[h7 >>> 20 & 15] + HEX_CHARS[h7 >>> 16 & 15] + HEX_CHARS[h7 >>> 12 & 15] + HEX_CHARS[h7 >>> 8 & 15] + HEX_CHARS[h7 >>> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
      };
      Sha256.prototype.toString = Sha256.prototype.hex;
      Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
          h0 >>> 24 & 255,
          h0 >>> 16 & 255,
          h0 >>> 8 & 255,
          h0 & 255,
          h1 >>> 24 & 255,
          h1 >>> 16 & 255,
          h1 >>> 8 & 255,
          h1 & 255,
          h2 >>> 24 & 255,
          h2 >>> 16 & 255,
          h2 >>> 8 & 255,
          h2 & 255,
          h3 >>> 24 & 255,
          h3 >>> 16 & 255,
          h3 >>> 8 & 255,
          h3 & 255,
          h4 >>> 24 & 255,
          h4 >>> 16 & 255,
          h4 >>> 8 & 255,
          h4 & 255,
          h5 >>> 24 & 255,
          h5 >>> 16 & 255,
          h5 >>> 8 & 255,
          h5 & 255,
          h6 >>> 24 & 255,
          h6 >>> 16 & 255,
          h6 >>> 8 & 255,
          h6 & 255
        ];
        if (!this.is224) {
          arr.push(h7 >>> 24 & 255, h7 >>> 16 & 255, h7 >>> 8 & 255, h7 & 255);
        }
        return arr;
      };
      Sha256.prototype.array = Sha256.prototype.digest;
      Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
          dataView.setUint32(28, this.h7);
        }
        return buffer;
      };
      function HmacSha256(key, is224, sharedMemory) {
        var i, type = typeof key;
        if (type === "string") {
          var bytes = [], length = key.length, index = 0, code;
          for (i = 0; i < length; ++i) {
            code = key.charCodeAt(i);
            if (code < 128) {
              bytes[index++] = code;
            } else if (code < 2048) {
              bytes[index++] = 192 | code >>> 6;
              bytes[index++] = 128 | code & 63;
            } else if (code < 55296 || code >= 57344) {
              bytes[index++] = 224 | code >>> 12;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            } else {
              code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
              bytes[index++] = 240 | code >>> 18;
              bytes[index++] = 128 | code >>> 12 & 63;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            }
          }
          key = bytes;
        } else {
          if (type === "object") {
            if (key === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
              key = new Uint8Array(key);
            } else if (!Array.isArray(key)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
        }
        if (key.length > 64) {
          key = new Sha256(is224, true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
          var b = key[i] || 0;
          oKeyPad[i] = 92 ^ b;
          iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is224, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
      }
      HmacSha256.prototype = new Sha256();
      HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var innerHash = this.array();
          Sha256.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(innerHash);
          Sha256.prototype.finalize.call(this);
        }
      };
      var exports2 = createMethod();
      exports2.sha256 = exports2;
      exports2.sha224 = createMethod(true);
      exports2.sha256.hmac = createHmacMethod();
      exports2.sha224.hmac = createHmacMethod(true);
      if (COMMON_JS) {
        module.exports = exports2;
      } else {
        root.sha256 = exports2.sha256;
        root.sha224 = exports2.sha224;
        if (AMD) {
          define(function() {
            return exports2;
          });
        }
      }
    })();
  }
});

// node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers) {
    buf.set(buffer, i);
    i += buffer.length;
  }
  return buf;
}

// node_modules/jose/dist/webapi/lib/base64.js
function encodeBase64(input) {
  if (Uint8Array.prototype.toBase64) {
    return input.toBase64();
  }
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i = 0; i < input.length; i += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
  }
  return btoa(arr.join(""));
}
function decodeBase64(encoded) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(encoded);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// node_modules/jose/dist/webapi/util/base64url.js
function decode(input) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(typeof input === "string" ? input : decoder.decode(input), {
      alphabet: "base64url"
    });
  }
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
function encode(input) {
  let unencoded = input;
  if (typeof unencoded === "string") {
    unencoded = encoder.encode(unencoded);
  }
  if (Uint8Array.prototype.toBase64) {
    return unencoded.toBase64({ alphabet: "base64url", omitPadding: true });
  }
  return encodeBase64(unencoded).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

// node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
  constructor(message2, options) {
    super(message2, options);
    __publicField(this, "code", "ERR_JOSE_GENERIC");
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
__publicField(JOSEError, "code", "ERR_JOSE_GENERIC");
var JWTClaimValidationFailed = class extends JOSEError {
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    __publicField(this, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED");
    __publicField(this, "claim");
    __publicField(this, "reason");
    __publicField(this, "payload");
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
__publicField(JWTClaimValidationFailed, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED");
var JWTExpired = class extends JOSEError {
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    __publicField(this, "code", "ERR_JWT_EXPIRED");
    __publicField(this, "claim");
    __publicField(this, "reason");
    __publicField(this, "payload");
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
__publicField(JWTExpired, "code", "ERR_JWT_EXPIRED");
var JOSEAlgNotAllowed = class extends JOSEError {
  constructor() {
    super(...arguments);
    __publicField(this, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
  }
};
__publicField(JOSEAlgNotAllowed, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
var JOSENotSupported = class extends JOSEError {
  constructor() {
    super(...arguments);
    __publicField(this, "code", "ERR_JOSE_NOT_SUPPORTED");
  }
};
__publicField(JOSENotSupported, "code", "ERR_JOSE_NOT_SUPPORTED");
var JWSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    __publicField(this, "code", "ERR_JWS_INVALID");
  }
};
__publicField(JWSInvalid, "code", "ERR_JWS_INVALID");
var JWTInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    __publicField(this, "code", "ERR_JWT_INVALID");
  }
};
__publicField(JWTInvalid, "code", "ERR_JWT_INVALID");
var _a, _b;
var JWKSMultipleMatchingKeys = class extends (_b = JOSEError, _a = Symbol.asyncIterator, _b) {
  constructor(message2 = "multiple matching keys found in the JSON Web Key Set", options) {
    super(message2, options);
    __publicField(this, _a);
    __publicField(this, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
  }
};
__publicField(JWKSMultipleMatchingKeys, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
var JWSSignatureVerificationFailed = class extends JOSEError {
  constructor(message2 = "signature verification failed", options) {
    super(message2, options);
    __publicField(this, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
  }
};
__publicField(JWSSignatureVerificationFailed, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");

// node_modules/jose/dist/webapi/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usage) {
  if (usage && !key.usages.includes(usage)) {
    throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
  }
}
function checkSigCryptoKey(key, alg, usage) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!isAlgorithm(key.algorithm, "Ed25519"))
        throw unusable("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usage);
}

// node_modules/jose/dist/webapi/lib/invalid_key_input.js
function message(msg, actual, ...types) {
  types = types.filter(Boolean);
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else if (types.length === 2) {
    msg += `one of type ${types[0]} or ${types[1]}.`;
  } else {
    msg += `of type ${types[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalid_key_input_default = (actual, ...types) => {
  return message("Key must be ", actual, ...types);
};
function withAlg(alg, actual, ...types) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}

// node_modules/jose/dist/webapi/lib/is_key_like.js
function isCryptoKey(key) {
  return key?.[Symbol.toStringTag] === "CryptoKey";
}
function isKeyObject(key) {
  return key?.[Symbol.toStringTag] === "KeyObject";
}
var is_key_like_default = (key) => {
  return isCryptoKey(key) || isKeyObject(key);
};

// node_modules/jose/dist/webapi/lib/is_disjoint.js
var is_disjoint_default = (...headers) => {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
};

// node_modules/jose/dist/webapi/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
var is_object_default = (input) => {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
};

// node_modules/jose/dist/webapi/lib/check_key_length.js
var check_key_length_default = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};

// node_modules/jose/dist/webapi/lib/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
        case "EdDSA":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var jwk_to_key_default = async (jwk) => {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const keyData = { ...jwk };
  delete keyData.alg;
  delete keyData.use;
  return crypto.subtle.importKey("jwk", keyData, algorithm, jwk.ext ?? (jwk.d ? false : true), jwk.key_ops ?? keyUsages);
};

// node_modules/jose/dist/webapi/lib/validate_crit.js
var validate_crit_default = (Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) => {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
};

// node_modules/jose/dist/webapi/lib/validate_algorithms.js
var validate_algorithms_default = (option, algorithms) => {
  if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return void 0;
  }
  return new Set(algorithms);
};

// node_modules/jose/dist/webapi/lib/is_jwk.js
function isJWK(key) {
  return is_object_default(key) && typeof key.kty === "string";
}
function isPrivateJWK(key) {
  return key.kty !== "oct" && typeof key.d === "string";
}
function isPublicJWK(key) {
  return key.kty !== "oct" && typeof key.d === "undefined";
}
function isSecretJWK(key) {
  return key.kty === "oct" && typeof key.k === "string";
}

// node_modules/jose/dist/webapi/lib/normalize_key.js
var cache;
var handleJWK = async (key, jwk, alg, freeze = false) => {
  cache || (cache = /* @__PURE__ */ new WeakMap());
  let cached = cache.get(key);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const cryptoKey = await jwk_to_key_default({ ...jwk, alg });
  if (freeze)
    Object.freeze(key);
  if (!cached) {
    cache.set(key, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var handleKeyObject = (keyObject, alg) => {
  cache || (cache = /* @__PURE__ */ new WeakMap());
  let cached = cache.get(keyObject);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const isPublic = keyObject.type === "public";
  const extractable = isPublic ? true : false;
  let cryptoKey;
  if (keyObject.asymmetricKeyType === "x25519") {
    switch (alg) {
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : ["deriveBits"]);
  }
  if (keyObject.asymmetricKeyType === "ed25519") {
    if (alg !== "EdDSA" && alg !== "Ed25519") {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
      isPublic ? "verify" : "sign"
    ]);
  }
  if (keyObject.asymmetricKeyType === "rsa") {
    let hash;
    switch (alg) {
      case "RSA-OAEP":
        hash = "SHA-1";
        break;
      case "RS256":
      case "PS256":
      case "RSA-OAEP-256":
        hash = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "RSA-OAEP-384":
        hash = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "RSA-OAEP-512":
        hash = "SHA-512";
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg.startsWith("RSA-OAEP")) {
      return keyObject.toCryptoKey({
        name: "RSA-OAEP",
        hash
      }, extractable, isPublic ? ["encrypt"] : ["decrypt"]);
    }
    cryptoKey = keyObject.toCryptoKey({
      name: alg.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
      hash
    }, extractable, [isPublic ? "verify" : "sign"]);
  }
  if (keyObject.asymmetricKeyType === "ec") {
    const nist = /* @__PURE__ */ new Map([
      ["prime256v1", "P-256"],
      ["secp384r1", "P-384"],
      ["secp521r1", "P-521"]
    ]);
    const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
    if (!namedCurve) {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg === "ES256" && namedCurve === "P-256") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES384" && namedCurve === "P-384") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES512" && namedCurve === "P-521") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg.startsWith("ECDH-ES")) {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDH",
        namedCurve
      }, extractable, isPublic ? [] : ["deriveBits"]);
    }
  }
  if (!cryptoKey) {
    throw new TypeError("given KeyObject instance cannot be used for this algorithm");
  }
  if (!cached) {
    cache.set(keyObject, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var normalize_key_default = async (key, alg) => {
  if (key instanceof Uint8Array) {
    return key;
  }
  if (isCryptoKey(key)) {
    return key;
  }
  if (isKeyObject(key)) {
    if (key.type === "secret") {
      return key.export();
    }
    if ("toCryptoKey" in key && typeof key.toCryptoKey === "function") {
      try {
        return handleKeyObject(key, alg);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
      }
    }
    let jwk = key.export({ format: "jwk" });
    return handleJWK(key, jwk, alg);
  }
  if (isJWK(key)) {
    if (key.k) {
      return decode(key.k);
    }
    return handleJWK(key, key, alg, true);
  }
  throw new Error("unreachable");
};

// node_modules/jose/dist/webapi/lib/check_key_type.js
var tag = (key) => key?.[Symbol.toStringTag];
var jwkMatchesOp = (alg, key, usage) => {
  if (key.use !== void 0) {
    let expected;
    switch (usage) {
      case "sign":
      case "verify":
        expected = "sig";
        break;
      case "encrypt":
      case "decrypt":
        expected = "enc";
        break;
    }
    if (key.use !== expected) {
      throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
    }
  }
  if (key.alg !== void 0 && key.alg !== alg) {
    throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
  }
  if (Array.isArray(key.key_ops)) {
    let expectedKeyOp;
    switch (true) {
      case (usage === "sign" || usage === "verify"):
      case alg === "dir":
      case alg.includes("CBC-HS"):
        expectedKeyOp = usage;
        break;
      case alg.startsWith("PBES2"):
        expectedKeyOp = "deriveBits";
        break;
      case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
        if (!alg.includes("GCM") && alg.endsWith("KW")) {
          expectedKeyOp = usage === "encrypt" ? "wrapKey" : "unwrapKey";
        } else {
          expectedKeyOp = usage;
        }
        break;
      case (usage === "encrypt" && alg.startsWith("RSA")):
        expectedKeyOp = "wrapKey";
        break;
      case usage === "decrypt":
        expectedKeyOp = alg.startsWith("RSA") ? "unwrapKey" : "deriveBits";
        break;
    }
    if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
      throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
    }
  }
  return true;
};
var symmetricTypeCheck = (alg, key, usage) => {
  if (key instanceof Uint8Array)
    return;
  if (isJWK(key)) {
    if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
      return;
    throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
  }
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (isJWK(key)) {
    switch (usage) {
      case "decrypt":
      case "sign":
        if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a private JWK`);
      case "encrypt":
      case "verify":
        if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a public JWK`);
    }
  }
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key"));
  }
  if (key.type === "secret") {
    throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (key.type === "public") {
    switch (usage) {
      case "sign":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
      case "decrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
      default:
        break;
    }
  }
  if (key.type === "private") {
    switch (usage) {
      case "verify":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
      case "encrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
      default:
        break;
    }
  }
};
var check_key_type_default = (alg, key, usage) => {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(alg) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck(alg, key, usage);
  } else {
    asymmetricTypeCheck(alg, key, usage);
  }
};

// node_modules/jose/dist/webapi/lib/subtle_dsa.js
var subtle_dsa_default = (alg, algorithm) => {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: parseInt(alg.slice(-3), 10) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "Ed25519":
    case "EdDSA":
      return { name: "Ed25519" };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
};

// node_modules/jose/dist/webapi/lib/get_sign_verify_key.js
var get_sign_verify_key_default = async (alg, key, usage) => {
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    return crypto.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  checkSigCryptoKey(key, alg, usage);
  return key;
};

// node_modules/jose/dist/webapi/lib/verify.js
var verify_default = async (alg, key, signature, data) => {
  const cryptoKey = await get_sign_verify_key_default(alg, key, "verify");
  check_key_length_default(alg, cryptoKey);
  const algorithm = subtle_dsa_default(alg, cryptoKey.algorithm);
  try {
    return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
};

// node_modules/jose/dist/webapi/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!is_object_default(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !is_object_default(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode(jws.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const k = await normalize_key_default(key, alg);
  const verified = await verify_default(alg, k, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    try {
      payload = decode(jws.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key: k };
  }
  return result;
}

// node_modules/jose/dist/webapi/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/webapi/lib/epoch.js
var epoch_default = (date) => Math.floor(date.getTime() / 1e3);

// node_modules/jose/dist/webapi/lib/secs.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs_default = (str) => {
  const matched = REGEX.exec(str);
  if (!matched || matched[4] && matched[1]) {
    throw new TypeError("Invalid time period format");
  }
  const value = parseFloat(matched[2]);
  const unit = matched[3].toLowerCase();
  let numericDate;
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      numericDate = Math.round(value);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      numericDate = Math.round(value * minute);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      numericDate = Math.round(value * hour);
      break;
    case "day":
    case "days":
    case "d":
      numericDate = Math.round(value * day);
      break;
    case "week":
    case "weeks":
    case "w":
      numericDate = Math.round(value * week);
      break;
    default:
      numericDate = Math.round(value * year);
      break;
  }
  if (matched[1] === "-" || matched[4] === "ago") {
    return -numericDate;
  }
  return numericDate;
};

// node_modules/jose/dist/webapi/lib/jwt_claims_set.js
function validateInput(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
var normalizeTyp = (value) => {
  if (value.includes("/")) {
    return value.toLowerCase();
  }
  return `application/${value.toLowerCase()}`;
};
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
  let payload;
  try {
    payload = JSON.parse(decoder.decode(encodedPayload));
  } catch {
  }
  if (!is_object_default(payload)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== void 0)
    presenceCheck.push("iat");
  if (audience !== void 0)
    presenceCheck.push("aud");
  if (subject !== void 0)
    presenceCheck.push("sub");
  if (issuer !== void 0)
    presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs_default(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch_default(currentDate || /* @__PURE__ */ new Date());
  if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
  }
  if (payload.nbf !== void 0) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
    }
  }
  if (payload.exp !== void 0) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
    if (age - tolerance > max) {
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
    }
  }
  return payload;
}
var _payload;
var JWTClaimsBuilder = class {
  constructor(payload) {
    __privateAdd(this, _payload);
    if (!is_object_default(payload)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    __privateSet(this, _payload, structuredClone(payload));
  }
  data() {
    return encoder.encode(JSON.stringify(__privateGet(this, _payload)));
  }
  get iss() {
    return __privateGet(this, _payload).iss;
  }
  set iss(value) {
    __privateGet(this, _payload).iss = value;
  }
  get sub() {
    return __privateGet(this, _payload).sub;
  }
  set sub(value) {
    __privateGet(this, _payload).sub = value;
  }
  get aud() {
    return __privateGet(this, _payload).aud;
  }
  set aud(value) {
    __privateGet(this, _payload).aud = value;
  }
  set jti(value) {
    __privateGet(this, _payload).jti = value;
  }
  set nbf(value) {
    if (typeof value === "number") {
      __privateGet(this, _payload).nbf = validateInput("setNotBefore", value);
    } else if (value instanceof Date) {
      __privateGet(this, _payload).nbf = validateInput("setNotBefore", epoch_default(value));
    } else {
      __privateGet(this, _payload).nbf = epoch_default(/* @__PURE__ */ new Date()) + secs_default(value);
    }
  }
  set exp(value) {
    if (typeof value === "number") {
      __privateGet(this, _payload).exp = validateInput("setExpirationTime", value);
    } else if (value instanceof Date) {
      __privateGet(this, _payload).exp = validateInput("setExpirationTime", epoch_default(value));
    } else {
      __privateGet(this, _payload).exp = epoch_default(/* @__PURE__ */ new Date()) + secs_default(value);
    }
  }
  set iat(value) {
    if (typeof value === "undefined") {
      __privateGet(this, _payload).iat = epoch_default(/* @__PURE__ */ new Date());
    } else if (value instanceof Date) {
      __privateGet(this, _payload).iat = validateInput("setIssuedAt", epoch_default(value));
    } else if (typeof value === "string") {
      __privateGet(this, _payload).iat = validateInput("setIssuedAt", epoch_default(/* @__PURE__ */ new Date()) + secs_default(value));
    } else {
      __privateGet(this, _payload).iat = validateInput("setIssuedAt", value);
    }
  }
};
_payload = new WeakMap();

// node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const verified = await compactVerify(jwt, key, options);
  if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = validateClaimsSet(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/webapi/lib/sign.js
var sign_default = async (alg, key, data) => {
  const cryptoKey = await get_sign_verify_key_default(alg, key, "sign");
  check_key_length_default(alg, cryptoKey);
  const signature = await crypto.subtle.sign(subtle_dsa_default(alg, cryptoKey.algorithm), cryptoKey, data);
  return new Uint8Array(signature);
};

// node_modules/jose/dist/webapi/jws/flattened/sign.js
var _payload2, _protectedHeader, _unprotectedHeader;
var FlattenedSign = class {
  constructor(payload) {
    __privateAdd(this, _payload2);
    __privateAdd(this, _protectedHeader);
    __privateAdd(this, _unprotectedHeader);
    if (!(payload instanceof Uint8Array)) {
      throw new TypeError("payload must be an instance of Uint8Array");
    }
    __privateSet(this, _payload2, payload);
  }
  setProtectedHeader(protectedHeader) {
    if (__privateGet(this, _protectedHeader)) {
      throw new TypeError("setProtectedHeader can only be called once");
    }
    __privateSet(this, _protectedHeader, protectedHeader);
    return this;
  }
  setUnprotectedHeader(unprotectedHeader) {
    if (__privateGet(this, _unprotectedHeader)) {
      throw new TypeError("setUnprotectedHeader can only be called once");
    }
    __privateSet(this, _unprotectedHeader, unprotectedHeader);
    return this;
  }
  async sign(key, options) {
    if (!__privateGet(this, _protectedHeader) && !__privateGet(this, _unprotectedHeader)) {
      throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    }
    if (!is_disjoint_default(__privateGet(this, _protectedHeader), __privateGet(this, _unprotectedHeader))) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
      ...__privateGet(this, _protectedHeader),
      ...__privateGet(this, _unprotectedHeader)
    };
    const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, __privateGet(this, _protectedHeader), joseHeader);
    let b64 = true;
    if (extensions.has("b64")) {
      b64 = __privateGet(this, _protectedHeader).b64;
      if (typeof b64 !== "boolean") {
        throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
      }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
      throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    check_key_type_default(alg, key, "sign");
    let payload = __privateGet(this, _payload2);
    if (b64) {
      payload = encoder.encode(encode(payload));
    }
    let protectedHeader;
    if (__privateGet(this, _protectedHeader)) {
      protectedHeader = encoder.encode(encode(JSON.stringify(__privateGet(this, _protectedHeader))));
    } else {
      protectedHeader = encoder.encode("");
    }
    const data = concat(protectedHeader, encoder.encode("."), payload);
    const k = await normalize_key_default(key, alg);
    const signature = await sign_default(alg, k, data);
    const jws = {
      signature: encode(signature),
      payload: ""
    };
    if (b64) {
      jws.payload = decoder.decode(payload);
    }
    if (__privateGet(this, _unprotectedHeader)) {
      jws.header = __privateGet(this, _unprotectedHeader);
    }
    if (__privateGet(this, _protectedHeader)) {
      jws.protected = decoder.decode(protectedHeader);
    }
    return jws;
  }
};
_payload2 = new WeakMap();
_protectedHeader = new WeakMap();
_unprotectedHeader = new WeakMap();

// node_modules/jose/dist/webapi/jws/compact/sign.js
var _flattened;
var CompactSign = class {
  constructor(payload) {
    __privateAdd(this, _flattened);
    __privateSet(this, _flattened, new FlattenedSign(payload));
  }
  setProtectedHeader(protectedHeader) {
    __privateGet(this, _flattened).setProtectedHeader(protectedHeader);
    return this;
  }
  async sign(key, options) {
    const jws = await __privateGet(this, _flattened).sign(key, options);
    if (jws.payload === void 0) {
      throw new TypeError("use the flattened module for creating JWS with b64: false");
    }
    return `${jws.protected}.${jws.payload}.${jws.signature}`;
  }
};
_flattened = new WeakMap();

// node_modules/jose/dist/webapi/jwt/sign.js
var _protectedHeader2, _jwt;
var SignJWT = class {
  constructor(payload = {}) {
    __privateAdd(this, _protectedHeader2);
    __privateAdd(this, _jwt);
    __privateSet(this, _jwt, new JWTClaimsBuilder(payload));
  }
  setIssuer(issuer) {
    __privateGet(this, _jwt).iss = issuer;
    return this;
  }
  setSubject(subject) {
    __privateGet(this, _jwt).sub = subject;
    return this;
  }
  setAudience(audience) {
    __privateGet(this, _jwt).aud = audience;
    return this;
  }
  setJti(jwtId) {
    __privateGet(this, _jwt).jti = jwtId;
    return this;
  }
  setNotBefore(input) {
    __privateGet(this, _jwt).nbf = input;
    return this;
  }
  setExpirationTime(input) {
    __privateGet(this, _jwt).exp = input;
    return this;
  }
  setIssuedAt(input) {
    __privateGet(this, _jwt).iat = input;
    return this;
  }
  setProtectedHeader(protectedHeader) {
    __privateSet(this, _protectedHeader2, protectedHeader);
    return this;
  }
  async sign(key, options) {
    const sig = new CompactSign(__privateGet(this, _jwt).data());
    sig.setProtectedHeader(__privateGet(this, _protectedHeader2));
    if (Array.isArray(__privateGet(this, _protectedHeader2)?.crit) && __privateGet(this, _protectedHeader2).crit.includes("b64") && __privateGet(this, _protectedHeader2).b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    return sig.sign(key, options);
  }
};
_protectedHeader2 = new WeakMap();
_jwt = new WeakMap();

// src/authentication/auth.js
var import_tweetnacl = __toESM(require_nacl_fast(), 1);
async function generateJWTToken(request, env) {
  if (request.method !== "POST") return await respond(false, 405, "Method not allowed.");
  const password = await request.text();
  const savedPass = await env.kv.get("pwd");
  if (password !== savedPass) return await respond(false, 401, "Wrong password.");
  let secretKey = await env.kv.get("secretKey");
  if (!secretKey) {
    secretKey = generateSecretKey();
    await env.kv.put("secretKey", secretKey);
  }
  const secret = new TextEncoder().encode(secretKey);
  const jwtToken = await new SignJWT({ userID: globalThis.userID }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("24h").sign(secret);
  return await respond(true, 200, "Successfully generated Auth token", null, {
    "Set-Cookie": `jwtToken=${jwtToken}; HttpOnly; Secure; Max-Age=${7 * 24 * 60 * 60}; Path=/; SameSite=Strict`,
    "Content-Type": "text/plain"
  });
}
function generateSecretKey() {
  const key = (0, import_tweetnacl.randomBytes)(32);
  return Array.from(key, (byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function Authenticate(request, env) {
  try {
    const secretKey = await env.kv.get("secretKey");
    const secret = new TextEncoder().encode(secretKey);
    const cookie = request.headers.get("Cookie")?.match(/(^|;\s*)jwtToken=([^;]*)/);
    const token = cookie ? cookie[2] : null;
    if (!token) {
      console.log("Unauthorized: Token not available!");
      return false;
    }
    const { payload } = await jwtVerify(token, secret);
    console.log(`Successfully authenticated, User ID: ${payload.userID}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function logout() {
  return await respond(true, 200, "Successfully logged out!", null, {
    "Set-Cookie": "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "Content-Type": "text/plain"
  });
}
async function resetPassword(request, env) {
  let auth = await Authenticate(request, env);
  const oldPwd = await env.kv.get("pwd");
  if (oldPwd && !auth) return await respond(false, 401, "Unauthorized.");
  const newPwd = await request.text();
  if (newPwd === oldPwd) return await respond(false, 400, "Please enter a new Password.");
  await env.kv.put("pwd", newPwd);
  return await respond(true, 200, "Successfully logged in!", null, {
    "Set-Cookie": "jwtToken=; Path=/; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "Content-Type": "text/plain"
  });
}

// src/cores-configs/helpers.js
function isDomain(address) {
  if (!address) return false;
  const domainPattern = /^(?!-)(?:[A-Za-z0-9-]{1,63}.)+[A-Za-z]{2,}$/;
  return domainPattern.test(address);
}
async function resolveDNS(domain) {
  const dohURLv4 = `${globalThis.dohURL}?name=${encodeURIComponent(domain)}&type=A`;
  const dohURLv6 = `${globalThis.dohURL}?name=${encodeURIComponent(domain)}&type=AAAA`;
  try {
    const [ipv4Response, ipv6Response] = await Promise.all([
      fetch(dohURLv4, { headers: { accept: "application/dns-json" } }),
      fetch(dohURLv6, { headers: { accept: "application/dns-json" } })
    ]);
    const ipv4Addresses = await ipv4Response.json();
    const ipv6Addresses = await ipv6Response.json();
    const ipv4 = ipv4Addresses.Answer ? ipv4Addresses.Answer.map((record) => record.data) : [];
    const ipv6 = ipv6Addresses.Answer ? ipv6Addresses.Answer.map((record) => record.data) : [];
    return { ipv4, ipv6 };
  } catch (error) {
    throw new Error(`Error resolving DNS: ${error}`);
  }
}
async function getConfigAddresses(isFragment) {
  const { settings, hostName } = globalThis;
  const resolved = await resolveDNS(hostName);
  const defaultIPv6 = settings.VLTRenableIPv6 ? resolved.ipv6.map((ip) => `[${ip}]`) : [];
  const addrs = [
    hostName,
    "www.speedtest.net",
    ...resolved.ipv4,
    ...defaultIPv6,
    ...settings.cleanIPs
  ];
  return isFragment ? addrs : [...addrs, ...settings.customCdnAddrs];
}
function extractWireguardParams(warpConfigs, isWoW) {
  const index = isWoW ? 1 : 0;
  const warpConfig = warpConfigs[index].account.config;
  return {
    warpIPv6: `${warpConfig.interface.addresses.v6}/128`,
    reserved: warpConfig.client_id,
    publicKey: warpConfig.peers[0].public_key,
    privateKey: warpConfigs[index].privateKey
  };
}
function generateRemark(index, port, address, cleanIPs, protocol, configType) {
  let addressType;
  const type = configType ? ` ${configType}` : "";
  cleanIPs.includes(address) ? addressType = "Clean IP" : addressType = isDomain(address) ? "Domain" : isIPv4(address) ? "IPv4" : isIPv6(address) ? "IPv6" : "";
  return `\u{1F4A6} ${index} - ${protocol}${type} - ${addressType} : ${port}`;
}
function randomUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += Math.random() < 0.5 ? str[i].toUpperCase() : str[i];
  }
  return result;
}
function getRandomPath(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function base64ToDecimal(base64) {
  const binaryString = atob(base64);
  const hexString = Array.from(binaryString).map((char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join("");
  const decimalArray = hexString.match(/.{2}/g).map((hex) => parseInt(hex, 16));
  return decimalArray;
}
function isIPv4(address) {
  const ipv4Pattern = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
  return ipv4Pattern.test(address);
}
function isIPv6(address) {
  const ipv6Pattern = /^\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|::(?:[a-fA-F0-9]{1,4}:){0,7}|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6})\](?:\/(1[0-1][0-9]|12[0-8]|[0-9]?[0-9]))?$/;
  return ipv6Pattern.test(address);
}
function getDomain(url) {
  try {
    const newUrl = new URL(url);
    const host = newUrl.hostname;
    const isHostDomain = isDomain(host);
    return { host, isHostDomain };
  } catch {
    return { host: null, isHostDomain: false };
  }
}
function base64EncodeUnicode(str) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(str)));
}

// src/protocols/warp.js
var import_tweetnacl2 = __toESM(require_nacl_fast(), 1);
async function fetchWarpConfigs(env) {
  let warpConfigs = [];
  const apiBaseUrl = "https://api.cloudflareclient.com/v0a4005/reg";
  const warpKeys = [generateKeyPair(), generateKeyPair()];
  const commonPayload = {
    install_id: "",
    fcm_token: "",
    tos: (/* @__PURE__ */ new Date()).toISOString(),
    type: "Android",
    model: "PC",
    locale: "en_US",
    warp_enabled: true
  };
  const fetchAccount = async (key) => {
    try {
      const response = await fetch(apiBaseUrl, {
        method: "POST",
        headers: {
          "User-Agent": "insomnia/8.6.1",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...commonPayload, key: key.publicKey })
      });
      return await response.json();
    } catch (error) {
      throw new Error("Failed to get warp configs.", error);
    }
  };
  for (const key of warpKeys) {
    const accountData = await fetchAccount(key);
    warpConfigs.push({
      privateKey: key.privateKey,
      account: accountData
    });
  }
  const configs = JSON.stringify(warpConfigs);
  await env.kv.put("warpConfigs", configs);
  return configs;
}
var generateKeyPair = () => {
  const base64Encode = (array) => btoa(String.fromCharCode.apply(null, array));
  let privateKey = (0, import_tweetnacl2.randomBytes)(32);
  privateKey[0] &= 248;
  privateKey[31] &= 127;
  privateKey[31] |= 64;
  let publicKey = import_tweetnacl2.scalarMult.base(privateKey);
  const publicKeyBase64 = base64Encode(publicKey);
  const privateKeyBase64 = base64Encode(privateKey);
  return { publicKey: publicKeyBase64, privateKey: privateKeyBase64 };
};

// src/kv/handlers.js
async function getDataset(request, env) {
  let proxySettings, warpConfigs;
  try {
    proxySettings = await env.kv.get("proxySettings", { type: "json" });
    warpConfigs = await env.kv.get("warpConfigs", { type: "json" });
  } catch (error) {
    console.log(error);
    throw new Error(`An error occurred while getting KV - ${error}`);
  }
  if (!proxySettings) {
    proxySettings = await updateDataset(request, env);
    const configs = await fetchWarpConfigs(env);
    warpConfigs = configs;
  }
  if (globalThis.panelVersion !== proxySettings.panelVersion) proxySettings = await updateDataset(request, env);
  return { proxySettings, warpConfigs };
}
async function updateDataset(request, env) {
  let newSettings = request.method === "POST" ? await request.json() : null;
  const isReset = newSettings?.resetSettings;
  let currentSettings;
  if (!isReset) {
    try {
      currentSettings = await env.kv.get("proxySettings", { type: "json" });
    } catch (error) {
      console.log(error);
      throw new Error(`An error occurred while getting current KV settings - ${error}`);
    }
  }
  const populateField = (field, defaultValue, callback) => {
    if (isReset) return defaultValue;
    if (!newSettings) return currentSettings?.[field] ?? defaultValue;
    const value = newSettings[field];
    return typeof callback === "function" ? callback(value) : value;
  };
  const remoteDNS = populateField("remoteDNS", "https://8.8.8.8/dns-query");
  const initDoh = async () => {
    const { host, isHostDomain } = getDomain(remoteDNS);
    const dohHost = {
      host,
      isDomain: isHostDomain
    };
    if (isHostDomain) {
      const { ipv4, ipv6 } = await resolveDNS(host);
      dohHost.ipv4 = ipv4;
      dohHost.ipv6 = ipv6;
    }
    return dohHost;
  };
  const settings = {
    remoteDNS,
    dohHost: await initDoh(),
    localDNS: populateField("localDNS", "8.8.8.8"),
    antiSanctionDNS: populateField("antiSanctionDNS", "78.157.42.100"),
    VLTRFakeDNS: populateField("VLTRFakeDNS", false),
    proxyIPs: populateField("proxyIPs", []),
    outProxy: populateField("outProxy", ""),
    outProxyParams: populateField("outProxy", {}, (field) => extractChainProxyParams(field)),
    cleanIPs: populateField("cleanIPs", []),
    VLTRenableIPv6: populateField("VLTRenableIPv6", true),
    customCdnAddrs: populateField("customCdnAddrs", []),
    customCdnHost: populateField("customCdnHost", ""),
    customCdnSni: populateField("customCdnSni", ""),
    bestVLTRInterval: populateField("bestVLTRInterval", 30),
    VLConfigs: populateField("VLConfigs", true),
    TRConfigs: populateField("TRConfigs", true),
    ports: populateField("ports", [443]),
    fingerprint: populateField("fingerprint", "randomized"),
    fragmentLengthMin: populateField("fragmentLengthMin", 100),
    fragmentLengthMax: populateField("fragmentLengthMax", 200),
    fragmentIntervalMin: populateField("fragmentIntervalMin", 1),
    fragmentIntervalMax: populateField("fragmentIntervalMax", 1),
    fragmentPackets: populateField("fragmentPackets", "tlshello"),
    bypassLAN: populateField("bypassLAN", false),
    bypassIran: populateField("bypassIran", false),
    bypassChina: populateField("bypassChina", false),
    bypassRussia: populateField("bypassRussia", false),
    bypassOpenAi: populateField("bypassOpenAi", false),
    bypassMicrosoft: populateField("bypassMicrosoft", false),
    bypassOracle: populateField("bypassOracle", false),
    bypassDocker: populateField("bypassDocker", false),
    bypassAdobe: populateField("bypassAdobe", false),
    bypassEpicGames: populateField("bypassEpicGames", false),
    bypassIntel: populateField("bypassIntel", false),
    bypassAmd: populateField("bypassAmd", false),
    bypassNvidia: populateField("bypassNvidia", false),
    bypassAsus: populateField("bypassAsus", false),
    bypassHp: populateField("bypassHp", false),
    bypassLenovo: populateField("bypassLenovo", false),
    blockAds: populateField("blockAds", false),
    blockPorn: populateField("blockPorn", false),
    blockUDP443: populateField("blockUDP443", false),
    customBypassRules: populateField("customBypassRules", []),
    customBlockRules: populateField("customBlockRules", []),
    customBypassSanctionRules: populateField("customBypassSanctionRules", []),
    warpEndpoints: populateField("warpEndpoints", ["engage.cloudflareclient.com:2408"]),
    warpFakeDNS: populateField("warpFakeDNS", false),
    warpEnableIPv6: populateField("warpEnableIPv6", true),
    bestWarpInterval: populateField("bestWarpInterval", 30),
    xrayUdpNoises: populateField("xrayUdpNoises", [
      {
        type: "rand",
        packet: "50-100",
        delay: "1-1",
        count: 5
      }
    ]),
    hiddifyNoiseMode: populateField("hiddifyNoiseMode", "m4"),
    knockerNoiseMode: populateField("knockerNoiseMode", "quic"),
    noiseCountMin: populateField("noiseCountMin", 10),
    noiseCountMax: populateField("noiseCountMax", 15),
    noiseSizeMin: populateField("noiseSizeMin", 5),
    noiseSizeMax: populateField("noiseSizeMax", 10),
    noiseDelayMin: populateField("noiseDelayMin", 1),
    noiseDelayMax: populateField("noiseDelayMax", 1),
    amneziaNoiseCount: populateField("amneziaNoiseCount", 5),
    amneziaNoiseSizeMin: populateField("amneziaNoiseSizeMin", 50),
    amneziaNoiseSizeMax: populateField("amneziaNoiseSizeMax", 100),
    panelVersion: globalThis.panelVersion
  };
  try {
    await env.kv.put("proxySettings", JSON.stringify(settings));
  } catch (error) {
    console.log(error);
    throw new Error(`An error occurred while updating KV - ${error}`);
  }
  return settings;
}
function extractChainProxyParams(chainProxy) {
  let configParams = {};
  if (!chainProxy) return {};
  const url = new URL(chainProxy);
  const protocol = url.protocol.slice(0, -1);
  if (protocol === atob("dmxlc3M=")) {
    const params = new URLSearchParams(url.search);
    configParams = {
      protocol,
      uuid: url.username,
      server: url.hostname,
      port: url.port
    };
    params.forEach((value, key) => {
      configParams[key] = value;
    });
  } else {
    configParams = {
      protocol,
      user: url.username,
      pass: url.password,
      server: url.host,
      port: url.port
    };
  }
  return configParams;
}

// src/cores-configs/clash.js
async function buildClashDNS(isChain, isWarp) {
  const settings = globalThis.settings;
  const finalLocalDNS = settings.localDNS === "localhost" ? "system" : `${settings.localDNS}#DIRECT`;
  const isIPv62 = settings.VLTRenableIPv6 && !isWarp || settings.warpEnableIPv6 && isWarp;
  const dnsObject = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": isIPv62,
    "respect-rules": true,
    "use-system-hosts": false,
    "nameserver": [`${isWarp ? "1.1.1.1" : settings.remoteDNS}#\u2705 Selector`],
    "proxy-server-nameserver": [finalLocalDNS],
    "nameserver-policy": {
      "raw.githubusercontent.com": finalLocalDNS,
      "time.apple.com": finalLocalDNS
    }
  };
  if (settings.dohHost.isDomain && !isWarp) {
    const { ipv4, ipv6, host } = settings.dohHost;
    dnsObject["hosts"] = {
      [host]: settings.VLTRenableIPv6 ? [...ipv4, ...ipv6] : ipv4
    };
  }
  const dnsHost = getDomain(settings.antiSanctionDNS);
  if (dnsHost.isHostDomain) {
    dnsObject["nameserver-policy"][dnsHost.host] = finalLocalDNS;
  }
  if (isChain && !isWarp) {
    const chainOutboundServer = settings.outProxyParams.server;
    if (isDomain(chainOutboundServer)) {
      dnsObject["nameserver-policy"][chainOutboundServer] = `${settings.remoteDNS}#proxy-1`;
    }
  }
  const routingRules = getRoutingRules();
  settings.customBlockRules.filter(isDomain).forEach((domain) => {
    if (!dnsObject["hosts"]) dnsObject["hosts"] = {};
    dnsObject["hosts"][`+.${domain}`] = "127.0.0.1";
  });
  settings.customBypassRules.filter(isDomain).forEach((domain) => {
    dnsObject["nameserver-policy"][`+.${domain}`] = `${settings.localDNS}#DIRECT`;
  });
  settings.customBypassSanctionRules.filter(isDomain).forEach((domain) => {
    dnsObject["nameserver-policy"][`+.${domain}`] = `${settings.antiSanctionDNS}#DIRECT`;
  });
  routingRules.filter(({ rule, ruleProvider }) => rule && ruleProvider?.geosite).forEach(({ type, dns, ruleProvider }) => {
    if (type === "DIRECT") {
      dnsObject["nameserver-policy"][`rule-set:${ruleProvider.geosite}`] = dns;
    } else {
      if (!dnsObject["hosts"]) dnsObject["hosts"] = {};
      dnsObject["hosts"][`rule-set:${ruleProvider.geosite}`] = "127.0.0.1";
    }
  });
  const isFakeDNS = settings.VLTRFakeDNS && !isWarp || settings.warpFakeDNS && isWarp;
  if (isFakeDNS) Object.assign(dnsObject, {
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ["*", "+.lan", "+.local"]
  });
  return dnsObject;
}
function buildClashRoutingRules(isWarp) {
  const settings = globalThis.settings;
  const routingRules = getRoutingRules();
  settings.customBlockRules.forEach((value) => {
    const isDomainValue = isDomain(value);
    routingRules.push({
      rule: true,
      type: "REJECT",
      domain: isDomainValue ? value : null,
      ip: isDomainValue ? null : value
    });
  });
  const bypassRules = [
    ...settings.customBypassRules,
    ...settings.customBypassSanctionRules
  ];
  bypassRules.forEach((value) => {
    const isDomainValue = isDomain(value);
    routingRules.push({
      rule: true,
      type: "DIRECT",
      domain: isDomainValue ? value : null,
      ip: isDomainValue ? null : value
    });
  });
  const ruleProviders = {};
  function addRuleProvider(ruleProvider) {
    const { geosite, geoip, geositeURL, geoipURL, format } = ruleProvider;
    const fileExtension = format === "text" ? "txt" : format;
    const defineProvider = (type, behavior, url) => {
      if (!type) return;
      ruleProviders[type] = {
        type: "http",
        format,
        behavior,
        url,
        path: `./ruleset/${type}.${fileExtension}`,
        interval: 86400
      };
    };
    defineProvider(geosite, "domain", geositeURL);
    defineProvider(geoip, "ipcidr", geoipURL);
  }
  const groupedRules = /* @__PURE__ */ new Map();
  routingRules.filter(({ rule }) => rule).forEach((routingRule) => {
    const { type, domain, ip, ruleProvider } = routingRule;
    const { geosite, geoip } = ruleProvider || {};
    if (!groupedRules.has(type)) groupedRules.set(type, { domain: [], ip: [], geosite: [], geoip: [] });
    if (domain) groupedRules.get(type).domain.push(domain);
    if (ip) groupedRules.get(type).ip.push(ip);
    if (geosite) groupedRules.get(type).geosite.push(geosite);
    if (geoip) groupedRules.get(type).geoip.push(geoip);
    if (geosite || geoip) addRuleProvider(ruleProvider);
  });
  let rules = [];
  if (settings.bypassLAN) rules.push(`GEOIP,lan,DIRECT,no-resolve`);
  function addRoutingRule(geosites, geoips, domains, ips, type) {
    if (domains) domains.forEach((domain) => rules.push(`DOMAIN-SUFFIX,${domain},${type}`));
    if (geosites) geosites.forEach((geosite) => rules.push(`RULE-SET,${geosite},${type}`));
    if (ips) ips.forEach((value) => {
      const ipType = isIPv4(value) ? "IP-CIDR" : "IP-CIDR6";
      const ip = isIPv6(value) ? value.replace(/\[|\]/g, "") : value;
      const cidr = value.includes("/") ? "" : isIPv4(value) ? "/32" : "/128";
      rules.push(`${ipType},${ip}${cidr},${type},no-resolve`);
    });
    if (geoips) geoips.forEach((geoip) => rules.push(`RULE-SET,${geoip},${type}`));
  }
  if (isWarp && settings.blockUDP443) rules.push("AND,((NETWORK,udp),(DST-PORT,443)),REJECT");
  if (!isWarp) rules.push("NETWORK,udp,REJECT");
  for (const [type, rule] of groupedRules) {
    const { domain, ip, geosite, geoip } = rule;
    if (domain.length) addRoutingRule(null, null, domain, null, type);
    if (geosite.length) addRoutingRule(geosite, null, null, null, type);
    if (ip.length) addRoutingRule(null, null, null, ip, type);
    if (geoip.length) addRoutingRule(null, geoip, null, null, type);
  }
  rules.push("MATCH,\u2705 Selector");
  return { rules, ruleProviders };
}
function buildClashVLOutbound(remark, address, port, host, sni, proxyIPs, allowInsecure) {
  const settings = globalThis.settings;
  const tls = globalThis.defaultHttpsPorts.includes(port) ? true : false;
  const addr = isIPv6(address) ? address.replace(/\[|\]/g, "") : address;
  const path = `/${getRandomPath(16)}${proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : ""}`;
  const ipVersion = settings.VLTRenableIPv6 ? "dual" : "ipv4";
  const fingerprint = settings.fingerprint === "randomized" ? "random" : settings.fingerprint;
  const outbound = {
    "name": remark,
    "type": atob("dmxlc3M="),
    "server": addr,
    "port": port,
    "uuid": globalThis.userID,
    "packet-encoding": "packetaddr",
    "ip-version": ipVersion,
    "tls": tls,
    "network": "ws",
    "tfo": true,
    "mptcp": true,
    "ws-opts": {
      "path": path,
      "headers": { "Host": host },
      "max-early-data": 2560,
      "early-data-header-name": "Sec-WebSocket-Protocol"
    }
  };
  if (tls) {
    Object.assign(outbound, {
      "servername": sni,
      "alpn": ["http/1.1"],
      "client-fingerprint": fingerprint,
      "skip-cert-verify": allowInsecure
    });
  }
  return outbound;
}
function buildClashTROutbound(remark, address, port, host, sni, proxyIPs, allowInsecure) {
  const settings = globalThis.settings;
  const addr = isIPv6(address) ? address.replace(/\[|\]/g, "") : address;
  const path = `/tr${getRandomPath(16)}${proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : ""}`;
  const ipVersion = settings.VLTRenableIPv6 ? "dual" : "ipv4";
  const fingerprint = settings.fingerprint === "randomized" ? "random" : settings.fingerprint;
  return {
    "name": remark,
    "type": atob("dHJvamFu"),
    "server": addr,
    "port": port,
    "password": globalThis.TRPassword,
    "ip-version": ipVersion,
    "tls": true,
    "network": "ws",
    "tfo": true,
    "mptcp": true,
    "ws-opts": {
      "path": path,
      "headers": { "Host": host },
      "max-early-data": 2560,
      "early-data-header-name": "Sec-WebSocket-Protocol"
    },
    "sni": sni,
    "alpn": ["http/1.1"],
    "client-fingerprint": fingerprint,
    "skip-cert-verify": allowInsecure
  };
}
function buildClashWarpOutbound(warpConfigs, remark, endpoint, chain, isPro) {
  const settings = globalThis.settings;
  const ipv6Regex = /\[(.*?)\]/;
  const portRegex = /[^:]*$/;
  const endpointServer = endpoint.includes("[") ? endpoint.match(ipv6Regex)[1] : endpoint.split(":")[0];
  const endpointPort = endpoint.includes("[") ? +endpoint.match(portRegex)[0] : +endpoint.split(":")[1];
  const ipVersion = settings.warpEnableIPv6 ? "dual" : "ipv4";
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = extractWireguardParams(warpConfigs, chain);
  let outbound = {
    "name": remark,
    "type": "wireguard",
    "ip": "172.16.0.2/32",
    "ipv6": warpIPv6,
    "ip-version": ipVersion,
    "private-key": privateKey,
    "server": chain ? "162.159.192.1" : endpointServer,
    "port": chain ? 2408 : endpointPort,
    "public-key": publicKey,
    "allowed-ips": ["0.0.0.0/0", "::/0"],
    "reserved": reserved,
    "udp": true,
    "mtu": 1280
  };
  if (chain) outbound["dialer-proxy"] = chain;
  if (isPro) outbound["amnezia-wg-option"] = {
    "jc": String(settings.amneziaNoiseCount),
    "jmin": String(settings.amneziaNoiseSizeMin),
    "jmax": String(settings.amneziaNoiseSizeMax)
  };
  return outbound;
}
function buildClashChainOutbound() {
  const { outProxyParams } = globalThis.settings;
  const { protocol } = outProxyParams;
  if (["socks", "http"].includes(protocol)) {
    const { protocol: protocol2, server: server2, port: port2, user, pass } = outProxyParams;
    const proxyType = protocol2 === "socks" ? "socks5" : protocol2;
    return {
      "name": "",
      "type": proxyType,
      "server": server2,
      "port": +port2,
      "dialer-proxy": "",
      "username": user,
      "password": pass
    };
  }
  const { server, port, uuid, flow, security, type, sni, fp, alpn, pbk, sid, headerType, host, path, serviceName } = outProxyParams;
  const chainOutbound = {
    "name": "\u{1F4A6} Chain Best Ping \u{1F4A5}",
    "type": atob("dmxlc3M="),
    "server": server,
    "port": +port,
    "udp": true,
    "uuid": uuid,
    "flow": flow,
    "network": type,
    "dialer-proxy": "\u{1F4A6} Best Ping \u{1F4A5}"
  };
  if (security === "tls") {
    const tlsAlpns = alpn ? alpn?.split(",") : [];
    Object.assign(chainOutbound, {
      "tls": true,
      "servername": sni,
      "alpn": tlsAlpns,
      "client-fingerprint": fp
    });
  }
  if (security === "reality") Object.assign(chainOutbound, {
    "tls": true,
    "servername": sni,
    "client-fingerprint": fp,
    "reality-opts": {
      "public-key": pbk,
      "short-id": sid
    }
  });
  if (headerType === "http") {
    const httpPaths = path?.split(",");
    chainOutbound["http-opts"] = {
      "method": "GET",
      "path": httpPaths,
      "headers": {
        "Connection": ["keep-alive"],
        "Content-Type": ["application/octet-stream"]
      }
    };
  }
  if (type === "ws") {
    const wsPath = path?.split("?ed=")[0];
    const earlyData = +path?.split("?ed=")[1];
    chainOutbound["ws-opts"] = {
      "path": wsPath,
      "headers": {
        "Host": host
      },
      "max-early-data": earlyData,
      "early-data-header-name": "Sec-WebSocket-Protocol"
    };
  }
  if (type === "grpc") chainOutbound["grpc-opts"] = {
    "grpc-service-name": serviceName
  };
  return chainOutbound;
}
async function buildClashConfig(selectorTags, urlTestTags, secondUrlTestTags, isChain, isWarp, isPro) {
  const settings = globalThis.settings;
  const config = structuredClone(clashConfigTemp);
  config["dns"] = await buildClashDNS(isChain, isWarp);
  const { rules, ruleProviders } = buildClashRoutingRules(isWarp);
  config["rules"] = rules;
  config["rule-providers"] = ruleProviders;
  const selector = {
    "name": "\u2705 Selector",
    "type": "select",
    "proxies": selectorTags
  };
  const urlTest = {
    "name": isWarp ? `\u{1F4A6} Warp ${isPro ? "Pro " : ""}- Best Ping \u{1F680}` : "\u{1F4A6} Best Ping \u{1F4A5}",
    "type": "url-test",
    "url": "https://www.gstatic.com/generate_204",
    "interval": isWarp ? settings.bestWarpInterval : settings.bestVLTRInterval,
    "tolerance": 50,
    "proxies": urlTestTags
  };
  config["proxy-groups"].push(selector, urlTest);
  if (isWarp) {
    const secondUrlTest = structuredClone(urlTest);
    secondUrlTest["name"] = `\u{1F4A6} WoW ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`;
    secondUrlTest["proxies"] = secondUrlTestTags;
    config["proxy-groups"].push(secondUrlTest);
  }
  return config;
}
async function getClashWarpConfig(request, env, isPro) {
  const { warpConfigs } = await getDataset(request, env);
  const settings = globalThis.settings;
  const warpTags = [], wowTags = [];
  const outbounds = {
    proxies: [],
    chains: []
  };
  settings.warpEndpoints.forEach((endpoint, index) => {
    const warpTag = `\u{1F4A6} ${index + 1} - Warp ${isPro ? "Pro " : ""}\u{1F1EE}\u{1F1F7}`;
    warpTags.push(warpTag);
    const wowTag = `\u{1F4A6} ${index + 1} - WoW ${isPro ? "Pro " : ""}\u{1F30D}`;
    wowTags.push(wowTag);
    const warpOutbound = buildClashWarpOutbound(warpConfigs, warpTag, endpoint, "", isPro);
    outbounds.proxies.push(warpOutbound);
    const WoWOutbound = buildClashWarpOutbound(warpConfigs, wowTag, endpoint, warpTag);
    outbounds.chains.push(WoWOutbound);
  });
  const selectorTags = [
    `\u{1F4A6} Warp ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`,
    `\u{1F4A6} WoW ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`,
    ...warpTags,
    ...wowTags
  ];
  const config = await buildClashConfig(selectorTags, warpTags, wowTags, true, true, isPro);
  config["proxies"].push(...outbounds.proxies, ...outbounds.chains);
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getClashNormalConfig(env) {
  const { settings, hostName } = globalThis;
  let chainProxy;
  if (settings.outProxy) {
    try {
      chainProxy = buildClashChainOutbound();
    } catch (error) {
      console.log("An error occured while parsing chain proxy: ", error);
      chainProxy = void 0;
      const proxySettings = await env.kv.get("proxySettings", { type: "json" });
      await env.kv.put("proxySettings", JSON.stringify({
        ...proxySettings,
        outProxy: "",
        outProxyParams: {}
      }));
    }
  }
  let proxyIndex = 1;
  const protocols = [];
  if (settings.VLConfigs) protocols.push(atob("VkxFU1M="));
  if (settings.TRConfigs) protocols.push(atob("VHJvamFu"));
  const Addresses = await getConfigAddresses(false);
  const tags = [];
  const outbounds = {
    proxies: [],
    chains: []
  };
  protocols.forEach((protocol) => {
    let protocolIndex = 1;
    settings.ports.forEach((port) => {
      Addresses.forEach((addr) => {
        let VLOutbound, TROutbound;
        const isCustomAddr = settings.customCdnAddrs.includes(addr);
        const configType = isCustomAddr ? "C" : "";
        const sni = isCustomAddr ? settings.customCdnSni : randomUpperCase(hostName);
        const host = isCustomAddr ? settings.customCdnHost : hostName;
        const tag2 = generateRemark(protocolIndex, port, addr, settings.cleanIPs, protocol, configType).replace(" : ", " - ");
        if (protocol === atob("VkxFU1M=")) {
          VLOutbound = buildClashVLOutbound(
            chainProxy ? `proxy-${proxyIndex}` : tag2,
            addr,
            port,
            host,
            sni,
            settings.proxyIPs,
            isCustomAddr
          );
          outbounds.proxies.push(VLOutbound);
          tags.push(tag2);
        }
        if (protocol === atob("VHJvamFu") && globalThis.defaultHttpsPorts.includes(port)) {
          TROutbound = buildClashTROutbound(
            chainProxy ? `proxy-${proxyIndex}` : tag2,
            addr,
            port,
            host,
            sni,
            settings.proxyIPs,
            isCustomAddr
          );
          outbounds.proxies.push(TROutbound);
          tags.push(tag2);
        }
        if (chainProxy) {
          let chain = structuredClone(chainProxy);
          chain["name"] = tag2;
          chain["dialer-proxy"] = `proxy-${proxyIndex}`;
          outbounds.chains.push(chain);
        }
        proxyIndex++;
        protocolIndex++;
      });
    });
  });
  const selectorTags = ["\u{1F4A6} Best Ping \u{1F4A5}", ...tags];
  const config = await buildClashConfig(selectorTags, tags, null, chainProxy, false, false);
  config["proxies"].push(...outbounds.chains, ...outbounds.proxies);
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
var clashConfigTemp = {
  "mixed-port": 7890,
  "ipv6": true,
  "allow-lan": true,
  "mode": "rule",
  "log-level": "warning",
  "disable-keep-alive": false,
  "keep-alive-idle": 10,
  "keep-alive-interval": 15,
  "unified-delay": false,
  "geo-auto-update": true,
  "geo-update-interval": 168,
  "external-controller": "127.0.0.1:9090",
  "external-ui-url": "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
  "external-ui": "ui",
  "external-controller-cors": {
    "allow-origins": ["*"],
    "allow-private-network": true
  },
  "profile": {
    "store-selected": true,
    "store-fake-ip": true
  },
  "dns": {},
  "tun": {
    "enable": true,
    "stack": "mixed",
    "auto-route": true,
    "strict-route": true,
    "auto-detect-interface": true,
    "dns-hijack": [
      "any:53",
      "tcp://any:53"
    ],
    "mtu": 9e3
  },
  "sniffer": {
    "enable": true,
    "force-dns-mapping": true,
    "parse-pure-ip": true,
    "override-destination": false,
    "sniff": {
      "HTTP": {
        "ports": [80, 8080, 8880, 2052, 2082, 2086, 2095]
      },
      "TLS": {
        "ports": [443, 8443, 2053, 2083, 2087, 2096]
      }
    }
  },
  "proxies": [],
  "proxy-groups": [],
  "rule-providers": {},
  "rules": [],
  "ntp": {
    "enable": true,
    "server": "time.cloudflare.com",
    "port": 123,
    "interval": 30
  }
};
function getRoutingRules() {
  const settings = globalThis.settings;
  const finalLocalDNS = settings.localDNS === "localhost" ? "system" : `${settings.localDNS}#DIRECT`;
  return [
    {
      rule: true,
      type: "REJECT",
      ruleProvider: {
        format: "text",
        geosite: "malware",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware.txt",
        geoip: "malware-cidr",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware-ip.txt"
      }
    },
    {
      rule: true,
      type: "REJECT",
      ruleProvider: {
        format: "text",
        geosite: "phishing",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing.txt",
        geoip: "phishing-cidr",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing-ip.txt"
      }
    },
    {
      rule: true,
      type: "REJECT",
      ruleProvider: {
        format: "text",
        geosite: "cryptominers",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/cryptominers.txt"
      }
    },
    {
      rule: settings.blockAds,
      type: "REJECT",
      ruleProvider: {
        format: "text",
        geosite: "category-ads-all",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/category-ads-all.txt"
      }
    },
    {
      rule: settings.blockPorn,
      type: "REJECT",
      ruleProvider: {
        format: "text",
        geosite: "nsfw",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/nsfw.txt"
      }
    },
    // {
    //     rule: bypassLAN,
    //     type: 'DIRECT',
    //     noResolve: true,
    //     ruleProvider: {
    //         format: "yaml",
    //         geosite: "private",
    //         geoip: "private-cidr",
    //         geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml",
    //         geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.yaml"
    //     }
    // },
    {
      rule: settings.bypassIran,
      type: "DIRECT",
      dns: finalLocalDNS,
      ruleProvider: {
        format: "text",
        geosite: "ir",
        geoip: "ir-cidr",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ir.txt",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ircidr.txt"
      }
    },
    {
      rule: settings.bypassChina,
      type: "DIRECT",
      dns: finalLocalDNS,
      ruleProvider: {
        format: "yaml",
        geosite: "cn",
        geoip: "cn-cidr",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
        geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml"
      }
    },
    {
      rule: settings.bypassRussia,
      type: "DIRECT",
      dns: finalLocalDNS,
      ruleProvider: {
        format: "yaml",
        geosite: "ru",
        geoip: "ru-cidr",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ru.yaml",
        geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/ru.yaml"
      }
    },
    {
      rule: settings.bypassOpenAi,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "openai",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/openai.yaml"
      }
    },
    {
      rule: settings.bypassMicrosoft,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "microsoft",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.yaml"
      }
    },
    {
      rule: settings.bypassOracle,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "oracle",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/oracle.yaml"
      }
    },
    {
      rule: settings.bypassDocker,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "docker",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/docker.yaml"
      }
    },
    {
      rule: settings.bypassAdobe,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "adobe",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/adobe.yaml"
      }
    },
    {
      rule: settings.bypassEpicGames,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "epicgames",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/epicgames.yaml"
      }
    },
    {
      rule: settings.bypassIntel,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "intel",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/intel.yaml"
      }
    },
    {
      rule: settings.bypassAmd,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "amd",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/amd.yaml"
      }
    },
    {
      rule: settings.bypassNvidia,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "nvidia",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/nvidia.yaml"
      }
    },
    {
      rule: settings.bypassAsus,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "asus",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/asus.yaml"
      }
    },
    {
      rule: settings.bypassHp,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "hp",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/hp.yaml"
      }
    },
    {
      rule: settings.bypassLenovo,
      type: "DIRECT",
      dns: `${settings.antiSanctionDNS}#DIRECT`,
      ruleProvider: {
        format: "yaml",
        geosite: "lenovo",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/lenovo.yaml"
      }
    }
  ];
}

// src/cores-configs/normalConfigs.js
async function getNormalConfigs(isFragment) {
  const settings = globalThis.settings;
  let VLConfs = "", TRConfs = "", chainProxy = "";
  let proxyIndex = 1;
  const Addresses = await getConfigAddresses(isFragment);
  const buildConfig = (protocol, addr, port, host, sni, remark) => {
    const isTLS = globalThis.defaultHttpsPorts.includes(port);
    const security = isTLS ? "tls" : "none";
    const path = `${getRandomPath(16)}${settings.proxyIPs.length ? `/${btoa(settings.proxyIPs.join(","))}` : ""}`;
    const config = new URL(`${protocol}://config`);
    let pathPrefix = "";
    if (protocol === atob("dmxlc3M=")) {
      config.username = globalThis.userID;
      config.searchParams.append("encryption", "none");
    } else {
      config.username = globalThis.TRPassword;
      pathPrefix = "tr";
    }
    config.hostname = addr;
    config.port = port;
    config.searchParams.append("host", host);
    config.searchParams.append("type", "ws");
    config.searchParams.append("security", security);
    config.hash = remark;
    if (globalThis.client === "singbox") {
      config.searchParams.append("eh", "Sec-WebSocket-Protocol");
      config.searchParams.append("ed", "2560");
      config.searchParams.append("path", `/${pathPrefix}${path}`);
    } else {
      config.searchParams.append("path", `/${pathPrefix}${path}?ed=2560`);
    }
    if (isTLS) {
      config.searchParams.append("sni", sni);
      config.searchParams.append("fp", settings.fingerprint);
      config.searchParams.append("alpn", "http/1.1");
      if (globalThis.client === "hiddify-frag") {
        config.searchParams.append("fragment", `${settings.fragmentLengthMin}-${settings.fragmentLengthMax},${settings.fragmentIntervalMin}-${settings.fragmentIntervalMax},hellotls`);
      }
    }
    return config.href;
  };
  settings.ports.forEach((port) => {
    Addresses.forEach((addr) => {
      const isCustomAddr = settings.customCdnAddrs.includes(addr) && !isFragment;
      const configType = isCustomAddr ? "C" : isFragment ? "F" : "";
      const sni = isCustomAddr ? settings.customCdnSni : randomUpperCase(globalThis.hostName);
      const host = isCustomAddr ? settings.customCdnHost : globalThis.hostName;
      const VLRemark = generateRemark(proxyIndex, port, addr, settings.cleanIPs, atob("VkxFU1M="), configType);
      const TRRemark = generateRemark(proxyIndex, port, addr, settings.cleanIPs, atob("VHJvamFu"), configType);
      if (settings.VLConfigs) {
        const vlConfig = buildConfig(atob("dmxlc3M="), addr, port, host, sni, VLRemark);
        VLConfs += `${vlConfig}
`;
      }
      if (settings.TRConfigs) {
        const trConfig = buildConfig(atob("dHJvamFu"), addr, port, host, sni, TRRemark);
        TRConfs += `${trConfig}
`;
      }
      proxyIndex++;
    });
  });
  if (settings.outProxy) {
    let chainRemark = `#${encodeURIComponent("\u{1F4A6} Chain proxy \u{1F517}")}`;
    if (settings.outProxy.startsWith("socks") || settings.outProxy.startsWith("http")) {
      const regex = /^(?:socks|http):\/\/([^@]+)@/;
      const isUserPass = settings.outProxy.match(regex);
      const userPass = isUserPass ? isUserPass[1] : false;
      chainProxy = userPass ? settings.outProxy.replace(userPass, btoa(userPass)) + chainRemark : settings.outProxy + chainRemark;
    } else {
      chainProxy = settings.outProxy.split("#")[0] + chainRemark;
    }
  }
  const configs = btoa(VLConfs + TRConfs + chainProxy);
  const hiddifyHash = base64EncodeUnicode(isFragment ? `\u{1F4A6} ${atob("QlBC")} Fragment` : `\u{1F4A6} ${atob("QlBC")} Normal`);
  return new Response(configs, {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store",
      "Profile-Title": `base64:${hiddifyHash}`,
      "DNS": settings.remoteDNS
    }
  });
}
async function getHiddifyWarpConfigs(isPro) {
  const settings = globalThis.settings;
  let configs = "";
  settings.warpEndpoints.forEach((endpoint, index) => {
    const config = new URL("warp://config");
    config.host = endpoint;
    config.hash = `\u{1F4A6} ${index + 1} - Warp \u{1F1EE}\u{1F1F7}`;
    if (isPro) {
      config.searchParams.append("ifpm", settings.hiddifyNoiseMode);
      config.searchParams.append("ifp", `${settings.noiseCountMin}-${settings.noiseCountMax}`);
      config.searchParams.append("ifps", `${settings.noiseSizeMin}-${settings.noiseSizeMax}`);
      config.searchParams.append("ifpd", `${settings.noiseDelayMin}-${settings.noiseDelayMax}`);
    }
    const detour = new URL("warp://config");
    detour.host = "162.159.192.1:2408";
    detour.hash = `\u{1F4A6} ${index + 1} - WoW \u{1F30D}`;
    configs += `${config.href}&&detour=${detour.href}
`;
  });
  const hiddifyHash = base64EncodeUnicode(`\u{1F4A6} ${atob("QlBC")} Warp${isPro ? " Pro" : ""}`);
  return new Response(btoa(configs), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store",
      "Profile-Title": `base64:${hiddifyHash}`,
      "DNS": "1.1.1.1"
    }
  });
}

// src/cores-configs/sing-box.js
async function buildSingBoxDNS(isWarp) {
  const settings = globalThis.settings;
  const url = new URL(settings.remoteDNS);
  const dnsProtocol = url.protocol.replace(":", "");
  const servers = [
    {
      type: isWarp ? "udp" : dnsProtocol,
      server: isWarp ? "1.1.1.1" : settings.dohHost.host,
      detour: "\u2705 Selector",
      tag: "dns-remote"
    }
  ];
  function addDnsServer(type, server, server_port, detour, tag2, domain_resolver) {
    servers.push({
      type,
      ...server && { server },
      ...server_port && { server_port },
      ...detour && { detour },
      ...domain_resolver && {
        domain_resolver: {
          server: domain_resolver,
          strategy: "ipv4_only"
        }
      },
      tag: tag2
    });
  }
  if (settings.localDNS === "localhost") {
    addDnsServer("local", null, null, null, "dns-direct");
  } else {
    addDnsServer("udp", settings.localDNS, 53, null, "dns-direct");
  }
  const rules = [
    {
      domain: ["raw.githubusercontent.com"],
      server: "dns-direct"
    },
    {
      clash_mode: "Direct",
      server: "dns-direct"
    },
    {
      clash_mode: "Global",
      server: "dns-remote"
    }
  ];
  if (settings.outProxy) {
    const { server } = settings.outProxyParams;
    if (isDomain(server)) {
      rules.unshift({
        domain: server,
        server: "dns-remote"
      });
    }
  }
  if (settings.dohHost.isDomain && !isWarp) {
    const { ipv4, ipv6, host } = settings.dohHost;
    const answers = [
      ...ipv4.map((ip) => `${host}. IN A ${ip}`),
      ...settings.VLTRenableIPv6 ? ipv6.map((ip) => `${host}. IN AAAA ${ip}`) : []
    ];
    rules.unshift({
      domain: host,
      action: "predefined",
      answer: answers
    });
  }
  function addDnsRule(geosite, geoip, domain, dns) {
    let type, mode;
    const ruleSets = [];
    if (geoip) {
      mode = "and";
      type = "logical";
      ruleSets.push({ rule_set: geosite }, { rule_set: geoip });
    }
    const action = dns === "reject" ? "reject" : "route";
    const server = dns === "reject" ? null : dns;
    rules.push({
      ...type && { type },
      ...mode && { mode },
      ...ruleSets.length && { rules: ruleSets },
      ...geosite && !geoip && { rule_set: geosite },
      ...domain && { domain_suffix: domain },
      action,
      ...server && { server }
    });
  }
  const routingRules = getRoutingRules2();
  settings.customBlockRules.filter(isDomain).forEach((domain) => {
    routingRules.unshift({ rule: true, domain, type: "reject" });
  });
  settings.customBypassRules.filter(isDomain).forEach((domain) => {
    routingRules.push({ rule: true, domain, type: "direct", dns: "dns-direct" });
  });
  settings.customBypassSanctionRules.filter(isDomain).forEach((domain) => {
    routingRules.push({ rule: true, domain, type: "direct", dns: "dns-anti-sanction" });
  });
  const groupedRules = /* @__PURE__ */ new Map();
  routingRules.filter(({ rule }) => rule).forEach(({ geosite, geoip, domain, type, dns }) => {
    if (geosite && geoip && type === "direct") {
      addDnsRule(geosite, geoip, null, dns);
    } else {
      const dnsType = dns || type;
      if (!groupedRules.has(dnsType)) groupedRules.set(dnsType, { geosite: [], domain: [] });
      if (geosite) groupedRules.get(dnsType).geosite.push(geosite);
      if (domain) groupedRules.get(dnsType).domain.push(domain);
    }
  });
  for (const [dnsType, rule] of groupedRules) {
    const { geosite, domain } = rule;
    if (domain.length) addDnsRule(null, null, domain, dnsType);
    if (geosite.length) addDnsRule(geosite, null, null, dnsType);
  }
  const isSanctionRule = groupedRules.has("dns-anti-sanction");
  if (isSanctionRule) {
    const dnsHost = getDomain(settings.antiSanctionDNS);
    if (dnsHost.isHostDomain) {
      addDnsServer("https", dnsHost.host, 443, null, "dns-anti-sanction", "dns-direct");
    } else {
      addDnsServer("udp", settings.antiSanctionDNS, 53, null, "dns-anti-sanction", null);
    }
  }
  const isFakeDNS = settings.VLTRFakeDNS && !isWarp || settings.warpFakeDNS && isWarp;
  if (isFakeDNS) {
    const fakeip = {
      type: "fakeip",
      tag: "dns-fake",
      inet4_range: "198.18.0.0/15"
    };
    const isIPv62 = settings.VLTRenableIPv6 && !isWarp || settings.warpEnableIPv6 && isWarp;
    if (isIPv62) fakeip.inet6_range = "fc00::/18";
    servers.push(fakeip);
    rules.push({
      disable_cache: true,
      inbound: "tun-in",
      query_type: [
        "A",
        "AAAA"
      ],
      server: "dns-fake"
    });
  }
  return {
    servers,
    rules,
    strategy: "ipv4_only",
    independent_cache: true
  };
}
function buildSingBoxRoutingRules(isWarp) {
  const settings = globalThis.settings;
  const rules = [
    {
      ip_cidr: "172.18.0.2",
      action: "hijack-dns"
    },
    {
      clash_mode: "Direct",
      outbound: "direct"
    },
    {
      clash_mode: "Global",
      outbound: "\u2705 Selector"
    },
    {
      action: "sniff"
    },
    {
      protocol: "dns",
      action: "hijack-dns"
    }
  ];
  if (settings.bypassLAN) rules.push({
    ip_is_private: true,
    outbound: "direct"
  });
  function addRoutingRule(domain, ip, geosite, geoip, network, protocol, port, type) {
    const action = type === "reject" ? "reject" : "route";
    const outbound = type === "direct" ? "direct" : null;
    rules.push({
      ...geosite && { rule_set: geosite },
      ...geoip && { rule_set: geoip },
      ...domain && { domain_suffix: domain },
      ...ip && { ip_cidr: ip },
      ...network && { network },
      ...protocol && { protocol },
      ...port && { port },
      action,
      ...outbound && { outbound }
    });
  }
  if (isWarp && settings.blockUDP443) addRoutingRule(null, null, null, null, "udp", "quic", 443, "reject");
  if (!isWarp) addRoutingRule(null, null, null, null, "udp", null, null, "reject");
  const routingRules = getRoutingRules2();
  settings.customBlockRules.forEach((value) => {
    const isDomainValue = isDomain(value);
    routingRules.push({
      rule: true,
      type: "reject",
      domain: isDomainValue ? value : null,
      ip: isDomainValue ? null : isIPv6(value) ? value.replace(/\[|\]/g, "") : value
    });
  });
  const bypassRules = [...settings.customBypassRules, ...settings.customBypassSanctionRules];
  bypassRules.forEach((value) => {
    const isDomainValue = isDomain(value);
    routingRules.push({
      rule: true,
      type: "direct",
      domain: isDomainValue ? value : null,
      ip: isDomainValue ? null : isIPv6(value) ? value.replace(/\[|\]/g, "") : value
    });
  });
  const ruleSets = [];
  const addRuleSet = (geoRule) => {
    const { geosite, geositeURL, geoip, geoipURL } = geoRule;
    if (geosite) ruleSets.push({
      type: "remote",
      tag: geosite,
      format: "binary",
      url: geositeURL,
      download_detour: "direct"
    });
    if (geoip) ruleSets.push({
      type: "remote",
      tag: geoip,
      format: "binary",
      url: geoipURL,
      download_detour: "direct"
    });
  };
  const groupedRules = /* @__PURE__ */ new Map();
  routingRules.filter(({ rule }) => rule).forEach((routingRule) => {
    const { type, domain, ip, geosite, geoip } = routingRule;
    if (!groupedRules.has(type)) groupedRules.set(type, { domain: [], ip: [], geosite: [], geoip: [] });
    if (domain) groupedRules.get(type).domain.push(domain);
    if (ip) groupedRules.get(type).ip.push(ip);
    if (geosite) groupedRules.get(type).geosite.push(geosite);
    if (geoip) groupedRules.get(type).geoip.push(geoip);
    if (geosite || geoip) addRuleSet(routingRule);
  });
  for (const [type, rule] of groupedRules) {
    const { domain, ip, geosite, geoip } = rule;
    if (domain.length) addRoutingRule(domain, null, null, null, null, null, null, type);
    if (geosite.length) addRoutingRule(null, null, geosite, null, null, null, null, type);
    if (ip.length) addRoutingRule(null, ip, null, null, null, null, null, type);
    if (geoip.length) addRoutingRule(null, null, null, geoip, null, null, null, type);
  }
  return {
    rules,
    rule_set: ruleSets,
    auto_detect_interface: true,
    default_domain_resolver: {
      server: "dns-direct",
      strategy: settings.VLTRenableIPv6 ? "prefer_ipv4" : "ipv4_only",
      rewrite_ttl: 60
    },
    // override_android_vpn: true,
    final: "\u2705 Selector"
  };
}
function buildSingBoxVLOutbound(remark, address, port, host, sni, allowInsecure, isFragment) {
  const settings = globalThis.settings;
  const path = `/${getRandomPath(16)}${settings.proxyIPs.length ? `/${btoa(settings.proxyIPs.join(","))}` : ""}`;
  const tls = globalThis.defaultHttpsPorts.includes(port) ? true : false;
  const outbound = {
    tag: remark,
    type: atob("dmxlc3M="),
    server: address,
    server_port: port,
    uuid: globalThis.userID,
    network: "tcp",
    packet_encoding: "",
    transport: {
      early_data_header_name: "Sec-WebSocket-Protocol",
      max_early_data: 2560,
      headers: {
        Host: host
      },
      path,
      type: "ws"
    },
    tcp_fast_open: true,
    tcp_multi_path: true
  };
  if (tls) outbound.tls = {
    alpn: "http/1.1",
    enabled: true,
    insecure: allowInsecure,
    server_name: sni,
    record_fragment: isFragment,
    utls: {
      enabled: true,
      fingerprint: settings.fingerprint
    }
  };
  return outbound;
}
function buildSingBoxTROutbound(remark, address, port, host, sni, allowInsecure, isFragment) {
  const settings = globalThis.settings;
  const path = `/tr${getRandomPath(16)}${settings.proxyIPs.length ? `/${btoa(settings.proxyIPs.join(","))}` : ""}`;
  const tls = globalThis.defaultHttpsPorts.includes(port) ? true : false;
  const outbound = {
    tag: remark,
    type: atob("dHJvamFu"),
    password: globalThis.TRPassword,
    server: address,
    server_port: port,
    network: "tcp",
    transport: {
      early_data_header_name: "Sec-WebSocket-Protocol",
      max_early_data: 2560,
      headers: {
        Host: host
      },
      path,
      type: "ws"
    },
    tcp_fast_open: true,
    tcp_multi_path: true
  };
  if (tls) outbound.tls = {
    alpn: "http/1.1",
    enabled: true,
    insecure: allowInsecure,
    server_name: sni,
    record_fragment: isFragment,
    utls: {
      enabled: true,
      fingerprint: settings.fingerprint
    }
  };
  return outbound;
}
function buildSingBoxWarpOutbound(warpConfigs, remark, endpoint, chain) {
  const settings = globalThis.settings;
  const ipv6Regex = /\[(.*?)\]/;
  const portRegex = /[^:]*$/;
  const endpointServer = endpoint.includes("[") ? endpoint.match(ipv6Regex)[1] : endpoint.split(":")[0];
  const endpointPort = endpoint.includes("[") ? +endpoint.match(portRegex)[0] : +endpoint.split(":")[1];
  const server = chain ? "162.159.192.1" : endpointServer;
  const port = chain ? 2408 : endpointPort;
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = extractWireguardParams(warpConfigs, chain);
  const outbound = {
    tag: remark,
    type: "wireguard",
    address: [
      "172.16.0.2/32",
      warpIPv6
    ],
    mtu: 1280,
    peers: [
      {
        address: server,
        port,
        public_key: publicKey,
        reserved: base64ToDecimal(reserved),
        allowed_ips: [
          "0.0.0.0/0",
          "::/0"
        ],
        persistent_keepalive_interval: 5
      }
    ],
    private_key: privateKey,
    domain_resolver: {
      server: chain ? "dns-remote" : "dns-direct",
      strategy: settings.warpEnableIPv6 ? "prefer_ipv4" : "ipv4_only",
      rewrite_ttl: 60
    }
  };
  if (chain) outbound.detour = chain;
  return outbound;
}
function buildSingBoxChainOutbound() {
  const { outProxyParams } = globalThis.settings;
  const { protocol } = outProxyParams;
  if (["socks", "http"].includes(protocol)) {
    const { server: server2, port: port2, user, pass } = outProxyParams;
    const chainOutbound2 = {
      type: protocol,
      tag: "",
      server: server2,
      server_port: +port2,
      username: user,
      password: pass,
      detour: ""
    };
    if (protocol === "socks") chainOutbound2.version = "5";
    return chainOutbound2;
  }
  const { server, port, uuid, flow, security, type, sni, fp, alpn, pbk, sid, headerType, host, path, serviceName } = outProxyParams;
  const chainOutbound = {
    type: atob("dmxlc3M="),
    tag: "",
    server,
    server_port: +port,
    uuid,
    flow,
    detour: ""
  };
  if (security === "tls" || security === "reality") {
    const tlsAlpns = alpn ? alpn?.split(",").filter((value) => value !== "h2") : [];
    chainOutbound.tls = {
      enabled: true,
      server_name: sni,
      insecure: false,
      alpn: tlsAlpns,
      utls: {
        enabled: true,
        fingerprint: fp
      }
    };
    if (security === "reality") {
      chainOutbound.tls.reality = {
        enabled: true,
        public_key: pbk,
        short_id: sid
      };
      delete chainOutbound.tls.alpn;
    }
  }
  if (headerType === "http") {
    const httpHosts = host?.split(",");
    chainOutbound.transport = {
      type: "http",
      host: httpHosts,
      path,
      method: "GET",
      headers: {
        "Connection": ["keep-alive"],
        "Content-Type": ["application/octet-stream"]
      }
    };
  }
  if (type === "ws") {
    const wsPath = path?.split("?ed=")[0];
    const earlyData = +path?.split("?ed=")[1] || 0;
    chainOutbound.transport = {
      type: "ws",
      path: wsPath,
      headers: { Host: host },
      max_early_data: earlyData,
      early_data_header_name: "Sec-WebSocket-Protocol"
    };
  }
  if (type === "grpc") chainOutbound.transport = {
    type: "grpc",
    service_name: serviceName
  };
  return chainOutbound;
}
async function buildSingBoxConfig(selectorTags, urlTestTags, secondUrlTestTags, isWarp, isIPv62) {
  const settings = globalThis.settings;
  const config = structuredClone(singboxConfigTemp);
  config.dns = await buildSingBoxDNS(isWarp);
  config.route = buildSingBoxRoutingRules(isWarp);
  if (isIPv62) config.inbounds.find(({ type }) => type === "tun").address.push("fdfe:dcba:9876::1/126");
  config.outbounds.find(({ type }) => type === "selector").outbounds = selectorTags;
  const urlTest = {
    type: "urltest",
    tag: isWarp ? `\u{1F4A6} Warp - Best Ping \u{1F680}` : "\u{1F4A6} Best Ping \u{1F4A5}",
    outbounds: urlTestTags,
    url: "https://www.gstatic.com/generate_204",
    interval: isWarp ? `${settings.bestWarpInterval}s` : `${settings.bestVLTRInterval}s`
  };
  config.outbounds.push(urlTest);
  if (isWarp) {
    const secondUrlTest = structuredClone(urlTest);
    secondUrlTest.tag = `\u{1F4A6} WoW - Best Ping \u{1F680}`;
    secondUrlTest.outbounds = secondUrlTestTags;
    config.outbounds.push(secondUrlTest);
  }
  return config;
}
async function getSingBoxWarpConfig(request, env) {
  const settings = globalThis.settings;
  const { warpConfigs } = await getDataset(request, env);
  const warpTags = [], wowTags = [];
  const endpoints = {
    proxies: [],
    chains: []
  };
  settings.warpEndpoints.forEach((endpoint, index) => {
    const warpTag = `\u{1F4A6} ${index + 1} - Warp \u{1F1EE}\u{1F1F7}`;
    warpTags.push(warpTag);
    const wowTag = `\u{1F4A6} ${index + 1} - WoW \u{1F30D}`;
    wowTags.push(wowTag);
    const warpOutbound = buildSingBoxWarpOutbound(warpConfigs, warpTag, endpoint, "");
    endpoints.proxies.push(warpOutbound);
    const wowOutbound = buildSingBoxWarpOutbound(warpConfigs, wowTag, endpoint, warpTag);
    endpoints.chains.push(wowOutbound);
  });
  const selectorTags = [`\u{1F4A6} Warp - Best Ping \u{1F680}`, `\u{1F4A6} WoW - Best Ping \u{1F680}`, ...warpTags, ...wowTags];
  const config = await buildSingBoxConfig(selectorTags, warpTags, wowTags, true, settings.warpEnableIPv6);
  config.endpoints = [...endpoints.chains, ...endpoints.proxies];
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getSingBoxCustomConfig(env, isFragment) {
  const settings = globalThis.settings;
  let chainProxy;
  if (settings.outProxy) {
    try {
      chainProxy = buildSingBoxChainOutbound(settings.outProxyParams);
    } catch (error) {
      console.log("An error occured while parsing chain proxy: ", error);
      chainProxy = void 0;
      const proxySettings = await env.kv.get("proxySettings", { type: "json" });
      await env.kv.put("proxySettings", JSON.stringify({
        ...proxySettings,
        outProxy: "",
        outProxyParams: {}
      }));
    }
  }
  let proxyIndex = 1;
  const protocols = [];
  if (settings.VLConfigs) protocols.push(atob("VkxFU1M="));
  if (settings.TRConfigs) protocols.push(atob("VHJvamFu"));
  const tags = [];
  const Addresses = await getConfigAddresses(false);
  const outbounds = {
    proxies: [],
    chains: []
  };
  const ports = isFragment ? settings.ports.filter((port) => globalThis.defaultHttpsPorts.includes(port)) : settings.ports;
  protocols.forEach((protocol) => {
    let protocolIndex = 1;
    ports.forEach((port) => {
      Addresses.forEach((addr) => {
        let VLOutbound, TROutbound;
        const isCustomAddr = settings.customCdnAddrs.includes(addr);
        const configType = isCustomAddr ? "C" : "";
        const sni = isCustomAddr ? settings.customCdnSni : randomUpperCase(globalThis.hostName);
        const host = isCustomAddr ? settings.customCdnHost : globalThis.hostName;
        const tag2 = generateRemark(protocolIndex, port, addr, settings.cleanIPs, protocol, configType);
        if (protocol === atob("VkxFU1M=")) {
          VLOutbound = buildSingBoxVLOutbound(
            chainProxy ? `proxy-${proxyIndex}` : tag2,
            addr,
            port,
            host,
            sni,
            isCustomAddr,
            isFragment
          );
          outbounds.proxies.push(VLOutbound);
        }
        if (protocol === atob("VHJvamFu")) {
          TROutbound = buildSingBoxTROutbound(
            chainProxy ? `proxy-${proxyIndex}` : tag2,
            addr,
            port,
            host,
            sni,
            isCustomAddr,
            isFragment
          );
          outbounds.proxies.push(TROutbound);
        }
        if (chainProxy) {
          const chain = structuredClone(chainProxy);
          chain.tag = tag2;
          chain.detour = `proxy-${proxyIndex}`;
          outbounds.chains.push(chain);
        }
        tags.push(tag2);
        proxyIndex++;
        protocolIndex++;
      });
    });
  });
  const selectorTags = ["\u{1F4A6} Best Ping \u{1F4A5}", ...tags];
  const config = await buildSingBoxConfig(selectorTags, tags, null, false, settings.VLTRenableIPv6);
  config.outbounds.push(...outbounds.chains, ...outbounds.proxies);
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
var singboxConfigTemp = {
  log: {
    level: "warn",
    timestamp: true
  },
  dns: {},
  inbounds: [
    {
      type: "tun",
      tag: "tun-in",
      address: [
        "172.18.0.1/30"
      ],
      mtu: 9e3,
      auto_route: true,
      strict_route: true,
      endpoint_independent_nat: true,
      stack: "mixed"
    },
    {
      type: "mixed",
      tag: "mixed-in",
      listen: "0.0.0.0",
      listen_port: 2080
    }
  ],
  outbounds: [
    {
      type: "selector",
      tag: "\u2705 Selector",
      outbounds: []
    },
    {
      type: "direct",
      // domain_resolver: {
      //     server: "dns-direct",
      //     strategy: "ipv4_only"
      // },
      tag: "direct"
    }
  ],
  route: {},
  ntp: {
    enabled: true,
    server: "time.cloudflare.com",
    server_port: 123,
    domain_resolver: "dns-direct",
    interval: "30m",
    write_to_system: false
  },
  experimental: {
    cache_file: {
      enabled: true,
      store_fakeip: true
    },
    clash_api: {
      external_controller: "127.0.0.1:9090",
      external_ui: "ui",
      external_ui_download_url: "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
      external_ui_download_detour: "direct",
      default_mode: "Rule"
    }
  }
};
function getRoutingRules2() {
  const settings = globalThis.settings;
  return [
    {
      rule: true,
      type: "reject",
      geosite: "geosite-malware",
      geoip: "geoip-malware",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs"
    },
    {
      rule: true,
      type: "reject",
      geosite: "geosite-phishing",
      geoip: "geoip-phishing",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-phishing.srs"
    },
    {
      rule: true,
      type: "reject",
      geosite: "geosite-cryptominers",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cryptominers.srs"
    },
    {
      rule: settings.blockAds,
      type: "reject",
      geosite: "geosite-category-ads-all",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs"
    },
    {
      rule: settings.blockPorn,
      type: "reject",
      geosite: "geosite-nsfw",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nsfw.srs"
    },
    {
      rule: settings.bypassIran,
      type: "direct",
      dns: "dns-direct",
      geosite: "geosite-ir",
      geoip: "geoip-ir",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs"
    },
    {
      rule: settings.bypassChina,
      type: "direct",
      dns: "dns-direct",
      geosite: "geosite-cn",
      geoip: "geoip-cn",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cn.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-cn.srs"
    },
    {
      rule: settings.bypassRussia,
      type: "direct",
      dns: "dns-direct",
      geosite: "geosite-category-ru",
      geoip: "geoip-ru",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ru.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ru.srs"
    },
    {
      rule: settings.bypassOpenAi,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-openai",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-openai.srs"
    },
    {
      rule: settings.bypassMicrosoft,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-microsoft",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-microsoft.srs"
    },
    {
      rule: settings.bypassOracle,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-oracle",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-oracle.srs"
    },
    {
      rule: settings.bypassDocker,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-docker",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-docker.srs"
    },
    {
      rule: settings.bypassAdobe,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-adobe",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-adobe.srs"
    },
    {
      rule: settings.bypassEpicGames,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-epicgames",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-epicgames.srs"
    },
    {
      rule: settings.bypassIntel,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-intel",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-intel.srs"
    },
    {
      rule: settings.bypassAmd,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-amd",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-amd.srs"
    },
    {
      rule: settings.bypassNvidia,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-nvidia",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nvidia.srs"
    },
    {
      rule: settings.bypassAsus,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-asus",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-asus.srs"
    },
    {
      rule: settings.bypassHp,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-hp",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-hp.srs"
    },
    {
      rule: settings.bypassLenovo,
      type: "direct",
      dns: "dns-anti-sanction",
      geosite: "geosite-lenovo",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-lenovo.srs"
    }
  ];
}

// src/cores-configs/xray.js
async function buildXrayDNS(outboundAddrs, domainToStaticIPs, isWorkerLess, isWarp, customDns, customDnsHosts) {
  const settings = globalThis.settings;
  function buildDnsServer(address, domains, expectIPs, skipFallback2, tag2) {
    return {
      address,
      ...domains && { domains },
      ...expectIPs && { expectIPs },
      ...skipFallback2 && { skipFallback: skipFallback2 },
      ...tag2 && { tag: tag2 }
    };
  }
  const dnsHost = {};
  if (settings.dohHost.isDomain && !isWorkerLess && !isWarp) {
    const { ipv4, ipv6, host: host2 } = settings.dohHost;
    dnsHost[host2] = settings.VLTRenableIPv6 ? [...ipv4, ...ipv6] : ipv4;
  }
  const routingRules = getRoutingRules3();
  const blockRules = routingRules.filter(({ type }) => type === "block");
  settings.customBlockRules.filter(isDomain).forEach((domain) => {
    blockRules.push({ rule: true, domain });
  });
  blockRules.filter(({ rule }) => rule).forEach(({ domain }) => {
    dnsHost[domain] = ["127.0.0.1"];
  });
  const staticIPs = domainToStaticIPs ? await resolveDNS(domainToStaticIPs) : void 0;
  if (staticIPs) dnsHost[domainToStaticIPs] = settings.VLTRenableIPv6 ? [...staticIPs.ipv4, ...staticIPs.ipv6] : staticIPs.ipv4;
  const hosts = Object.keys(dnsHost).length ? { hosts: dnsHost } : {};
  const isIPv62 = settings.VLTRenableIPv6 && !isWarp || settings.warpEnableIPv6 && isWarp;
  const dnsObject = {
    ...hosts,
    servers: [],
    queryStrategy: isIPv62 ? "UseIP" : "UseIPv4",
    tag: "dns"
  };
  let skipFallback = true;
  let finalRemoteDNS = isWarp ? "1.1.1.1" : settings.remoteDNS;
  if (isWorkerLess) {
    if (!dnsObject.hosts) dnsObject.hosts = {};
    finalRemoteDNS = `https://${customDns}/dns-query`;
    dnsObject.hosts[customDns] = customDnsHosts;
    skipFallback = false;
    dnsObject.disableFallback = true;
  }
  const remoteDnsServer = buildDnsServer(finalRemoteDNS, null, null, null, "remote-dns");
  dnsObject.servers.push(remoteDnsServer);
  const bypassRules = routingRules.filter(({ type }) => type === "direct");
  if (isDomain(customDnsHosts?.[0])) bypassRules.push({ rule: true, domain: `full:${customDnsHosts[0]}`, dns: settings.localDNS });
  outboundAddrs.filter(isDomain).forEach((domain) => {
    bypassRules.push({ rule: true, domain: `full:${domain}`, dns: settings.localDNS });
  });
  settings.customBypassRules.filter(isDomain).forEach((domain) => {
    bypassRules.push({ rule: true, domain: `domain:${domain}`, dns: settings.localDNS });
  });
  settings.customBypassSanctionRules.filter(isDomain).forEach((domain) => {
    bypassRules.push({ rule: true, domain: `domain:${domain}`, dns: settings.antiSanctionDNS });
  });
  const { host, isHostDomain } = getDomain(settings.antiSanctionDNS);
  if (isHostDomain) {
    bypassRules.push({ rule: true, domain: `full:${host}`, dns: settings.localDNS });
  }
  const totalDomainRules = [];
  const groupedDomainRules = /* @__PURE__ */ new Map();
  bypassRules.filter(({ rule }) => rule).forEach(({ domain, ip, dns }) => {
    if (ip) {
      const server = buildDnsServer(dns, [domain], ip ? [ip] : null, skipFallback);
      dnsObject.servers.push(server);
    } else {
      if (!groupedDomainRules.has(dns)) groupedDomainRules.set(dns, []);
      groupedDomainRules.get(dns).push(domain);
    }
    if (domain) totalDomainRules.push(domain);
  });
  for (const [dns, domain] of groupedDomainRules) {
    if (domain.length) {
      const server = buildDnsServer(dns, domain, null, skipFallback);
      dnsObject.servers.push(server);
    }
  }
  const isFakeDNS = settings.VLTRFakeDNS && !isWarp || settings.warpFakeDNS && isWarp;
  if (isFakeDNS) {
    const fakeDNSServer = totalDomainRules.length ? buildDnsServer("fakedns", totalDomainRules, null, false) : "fakedns";
    dnsObject.servers.unshift(fakeDNSServer);
  }
  return dnsObject;
}
function buildXrayRoutingRules(isChain, isBalancer, isWorkerLess, isWarp) {
  const settings = globalThis.settings;
  const rules = [
    {
      inboundTag: [
        "socks-in"
      ],
      port: 53,
      outboundTag: "dns-out",
      type: "field"
    },
    {
      inboundTag: [
        "dns-in"
      ],
      outboundTag: "dns-out",
      type: "field"
    }
  ];
  function addRoutingRule(inboundTag, domain, ip, port, network2, outboundTag, isBalancer2) {
    rules.push({
      ...inboundTag && { inboundTag },
      ...domain && { domain },
      ...ip && { ip },
      ...port && { port },
      ...network2 && { network: network2 },
      ...isBalancer2 ? { balancerTag: outboundTag } : { outboundTag },
      type: "field"
    });
  }
  const finallOutboundTag = isChain ? "chain" : isWorkerLess ? "fragment" : "proxy";
  const outTag = isBalancer ? "all" : finallOutboundTag;
  addRoutingRule(["remote-dns"], null, null, null, null, outTag, isBalancer);
  addRoutingRule(["dns"], null, null, null, null, "direct");
  if (settings.bypassLAN) {
    addRoutingRule(null, ["geosite:private"], null, null, null, "direct");
    addRoutingRule(null, null, ["geoip:private"], null, null, "direct");
  }
  if (isWarp && settings.blockUDP443) addRoutingRule(null, null, null, 443, "udp", "block");
  const routingRules = getRoutingRules3();
  const bypassRules = [...settings.customBypassRules, ...settings.customBypassSanctionRules];
  bypassRules.forEach((value) => {
    const isDomainValue = isDomain(value);
    routingRules.push({
      rule: true,
      type: "direct",
      domain: isDomainValue ? `domain:${value}` : null,
      ip: isDomainValue ? null : value
    });
  });
  settings.customBlockRules.forEach((value) => {
    const isDomainValue = isDomain(value);
    routingRules.push({
      rule: true,
      type: "block",
      domain: isDomainValue ? `domain:${value}` : null,
      ip: isDomainValue ? null : value
    });
  });
  const groupedRules = /* @__PURE__ */ new Map();
  routingRules.filter(({ rule }) => rule).forEach(({ type, domain, ip }) => {
    if (!groupedRules.has(type)) groupedRules.set(type, { domain: [], ip: [] });
    if (domain) groupedRules.get(type).domain.push(domain);
    if (ip) groupedRules.get(type).ip.push(ip);
  });
  for (const [type, rule] of groupedRules) {
    const { domain, ip } = rule;
    if (domain.length) addRoutingRule(null, domain, null, null, null, type, null);
    if (ip.length) addRoutingRule(null, null, ip, null, null, type, null);
  }
  if (!isWarp && !isWorkerLess) addRoutingRule(null, null, null, null, "udp", "block", null);
  let network;
  if (isBalancer) {
    network = isWarp ? "tcp,udp" : "tcp";
  } else {
    network = isWarp || isWorkerLess ? "tcp,udp" : "tcp";
  }
  addRoutingRule(null, null, null, null, network, outTag, isBalancer);
  return rules;
}
function buildXrayVLOutbound(tag2, address, port, host, sni, proxyIPs, isFragment, allowInsecure) {
  const settings = globalThis.settings;
  const proxyIpPath = proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : "";
  const path = `/${getRandomPath(16)}${proxyIpPath}?ed=2560`;
  const outbound = {
    protocol: atob("dmxlc3M="),
    settings: {
      vnext: [
        {
          address,
          port,
          users: [
            {
              id: globalThis.userID,
              encryption: "none",
              level: 8
            }
          ]
        }
      ]
    },
    streamSettings: {
      network: "ws",
      security: "none",
      sockopt: {},
      wsSettings: {
        host,
        path
      }
    },
    tag: tag2
  };
  if (globalThis.defaultHttpsPorts.includes(port)) {
    outbound.streamSettings.security = "tls";
    outbound.streamSettings.tlsSettings = {
      allowInsecure,
      fingerprint: settings.fingerprint,
      alpn: ["http/1.1"],
      serverName: sni
    };
  }
  const sockopt = outbound.streamSettings.sockopt;
  if (isFragment) {
    sockopt.dialerProxy = "fragment";
  } else {
    sockopt.domainStrategy = settings.VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  return outbound;
}
function buildXrayTROutbound(tag2, address, port, host, sni, proxyIPs, isFragment, allowInsecure) {
  const settings = globalThis.settings;
  const proxyIpPath = proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : "";
  const path = `/tr${getRandomPath(16)}${proxyIpPath}?ed=2560`;
  const outbound = {
    protocol: atob("dHJvamFu"),
    settings: {
      servers: [
        {
          address,
          port,
          password: globalThis.TRPassword,
          level: 8
        }
      ]
    },
    streamSettings: {
      network: "ws",
      security: "none",
      sockopt: {},
      wsSettings: {
        host,
        path
      }
    },
    tag: tag2
  };
  if (globalThis.defaultHttpsPorts.includes(port)) {
    outbound.streamSettings.security = "tls";
    outbound.streamSettings.tlsSettings = {
      allowInsecure,
      fingerprint: settings.fingerprint,
      alpn: ["http/1.1"],
      serverName: sni
    };
  }
  const sockopt = outbound.streamSettings.sockopt;
  if (isFragment) {
    sockopt.dialerProxy = "fragment";
  } else {
    sockopt.domainStrategy = settings.VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  return outbound;
}
function buildXrayWarpOutbound(warpConfigs, endpoint, isWoW) {
  const settings = globalThis.settings;
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = extractWireguardParams(warpConfigs, isWoW);
  const outbound = {
    protocol: "wireguard",
    settings: {
      address: [
        "172.16.0.2/32",
        warpIPv6
      ],
      mtu: 1280,
      peers: [
        {
          endpoint: isWoW ? "162.159.192.1:2408" : endpoint,
          publicKey,
          keepAlive: 5
        }
      ],
      reserved: base64ToDecimal(reserved),
      secretKey: privateKey
    },
    tag: isWoW ? "chain" : "proxy"
  };
  let chain = "";
  if (isWoW) chain = "proxy";
  if (!isWoW && globalThis.client === "xray-pro") chain = "udp-noise";
  if (chain) outbound.streamSettings = {
    sockopt: {
      dialerProxy: chain
    }
  };
  if (globalThis.client === "xray-knocker" && !isWoW) {
    delete outbound.streamSettings;
    Object.assign(outbound.settings, {
      wnoise: settings.knockerNoiseMode,
      wnoisecount: settings.noiseCountMin === settings.noiseCountMax ? String(settings.noiseCountMin) : `${settings.noiseCountMin}-${settings.noiseCountMax}`,
      wpayloadsize: settings.noiseSizeMin === settings.noiseSizeMax ? String(settings.noiseSizeMin) : `${settings.noiseSizeMin}-${settings.noiseSizeMax}`,
      wnoisedelay: settings.noiseDelayMin === settings.noiseDelayMax ? String(settings.noiseDelayMin) : `${settings.noiseDelayMin}-${settings.noiseDelayMax}`
    });
  }
  return outbound;
}
function buildXrayChainOutbound() {
  const { outProxyParams, VLTRenableIPv6 } = globalThis.settings;
  const { protocol } = outProxyParams;
  if (["socks", "http"].includes(protocol)) {
    const { server: server2, port: port2, user, pass } = outProxyParams;
    return {
      protocol,
      settings: {
        servers: [
          {
            address: server2,
            port: +port2,
            users: [
              {
                user,
                pass,
                level: 8
              }
            ]
          }
        ]
      },
      streamSettings: {
        network: "tcp",
        sockopt: {
          dialerProxy: "proxy",
          domainStrategy: VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4"
        }
      },
      mux: {
        enabled: true,
        concurrency: 8,
        xudpConcurrency: 16,
        xudpProxyUDP443: "reject"
      },
      tag: "chain"
    };
  }
  const {
    server,
    port,
    uuid,
    flow,
    security,
    type,
    sni,
    fp,
    alpn,
    pbk,
    sid,
    spx,
    headerType,
    host,
    path,
    authority,
    serviceName,
    mode
  } = outProxyParams;
  const proxyOutbound = {
    mux: {
      concurrency: 8,
      enabled: true,
      xudpConcurrency: 16,
      xudpProxyUDP443: "reject"
    },
    protocol: atob("dmxlc3M="),
    settings: {
      vnext: [
        {
          address: server,
          port: +port,
          users: [
            {
              encryption: "none",
              flow,
              id: uuid,
              level: 8,
              security: "auto"
            }
          ]
        }
      ]
    },
    streamSettings: {
      network: type,
      security,
      sockopt: {
        dialerProxy: "proxy",
        domainStrategy: VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4"
      }
    },
    tag: "chain"
  };
  if (security === "tls") {
    const tlsAlpns = alpn ? alpn?.split(",") : [];
    proxyOutbound.streamSettings.tlsSettings = {
      allowInsecure: false,
      fingerprint: fp,
      alpn: tlsAlpns,
      serverName: sni
    };
  }
  if (security === "reality") {
    delete proxyOutbound.mux;
    proxyOutbound.streamSettings.realitySettings = {
      fingerprint: fp,
      publicKey: pbk,
      serverName: sni,
      shortId: sid,
      spiderX: spx
    };
  }
  if (headerType === "http") {
    const httpPaths = path?.split(",");
    const httpHosts = host?.split(",");
    proxyOutbound.streamSettings.tcpSettings = {
      header: {
        request: {
          headers: { Host: httpHosts },
          method: "GET",
          path: httpPaths,
          version: "1.1"
        },
        response: {
          headers: { "Content-Type": ["application/octet-stream"] },
          reason: "OK",
          status: "200",
          version: "1.1"
        },
        type: "http"
      }
    };
  }
  if (type === "tcp" && security !== "reality" && !headerType) proxyOutbound.streamSettings.tcpSettings = {
    header: {
      type: "none"
    }
  };
  if (type === "ws") proxyOutbound.streamSettings.wsSettings = {
    host,
    path
  };
  if (type === "grpc") {
    delete proxyOutbound.mux;
    proxyOutbound.streamSettings.grpcSettings = {
      authority,
      multiMode: mode === "multi",
      serviceName
    };
  }
  return proxyOutbound;
}
function buildFreedomOutbound(isFragment, isUdpNoises, tag2, length, interval) {
  const settings = globalThis.settings;
  const outbound = {
    tag: tag2,
    protocol: "freedom",
    settings: {}
  };
  if (isFragment) {
    outbound.settings.fragment = {
      packets: settings.fragmentPackets,
      length: length || `${settings.fragmentLengthMin}-${settings.fragmentLengthMax}`,
      interval: interval || `${settings.fragmentIntervalMin}-${settings.fragmentIntervalMax}`
    };
    outbound.settings.domainStrategy = settings.VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  if (isUdpNoises) {
    outbound.settings.noises = [];
    const noises = structuredClone(settings.xrayUdpNoises);
    noises.forEach((noise) => {
      const count = noise.count;
      delete noise.count;
      outbound.settings.noises.push(...Array.from({ length: count }, () => noise));
    });
    if (!isFragment) outbound.settings.domainStrategy = settings.warpEnableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  return outbound;
}
async function buildXrayConfig(remark, isBalancer, isChain, balancerFallback, isWarp, isFragment, isWorkerLess, outboundAddrs, domainToStaticIPs, customDns, customDnsHosts) {
  const settings = globalThis.settings;
  const config = structuredClone(xrayConfigTemp);
  config.remarks = remark;
  config.dns = await buildXrayDNS(outboundAddrs, domainToStaticIPs, isWorkerLess, isWarp, customDns, customDnsHosts);
  const isFakeDNS = settings.VLTRFakeDNS && !isWarp || settings.warpFakeDNS && isWarp;
  if (isFakeDNS) config.inbounds[0].sniffing.destOverride.push("fakedns");
  if (isFragment) {
    const fragmentOutbound = buildFreedomOutbound(true, isWorkerLess, "fragment");
    config.outbounds.unshift(fragmentOutbound);
  }
  if (isWarp && globalThis.client === "xray-pro") {
    const udpNoiseOutbound = buildFreedomOutbound(false, true, "udp-noise");
    config.outbounds.unshift(udpNoiseOutbound);
  }
  config.routing.rules = buildXrayRoutingRules(isChain, isBalancer, isWorkerLess, isWarp);
  if (isBalancer) {
    config.routing.balancers = [
      {
        tag: "all",
        selector: [isChain ? "chain" : "prox"],
        strategy: {
          type: "leastPing"
        },
        ...balancerFallback && { fallbackTag: "prox-2" }
      }
    ];
    config.observatory = {
      subjectSelector: [
        isChain ? "chain" : "prox"
      ],
      probeUrl: "https://www.gstatic.com/generate_204",
      probeInterval: `${isWarp ? settings.bestWarpInterval : settings.bestVLTRInterval}s`,
      enableConcurrency: true
    };
  }
  return config;
}
async function buildXrayBestPingConfig(totalAddresses, chainProxy, outbounds, isFragment) {
  const remark = isFragment ? `\u{1F4A6} ${atob("QlBC")} F - Best Ping \u{1F4A5}` : `\u{1F4A6} ${atob("QlBC")} - Best Ping \u{1F4A5}`;
  const config = await buildXrayConfig(remark, true, chainProxy, true, false, isFragment, false, totalAddresses, null);
  config.outbounds.unshift(...outbounds);
  return config;
}
async function buildXrayBestFragmentConfig(hostName, chainProxy, outbound) {
  const settings = globalThis.settings;
  const bestFragValues = [
    "10-20",
    "20-30",
    "30-40",
    "40-50",
    "50-60",
    "60-70",
    "70-80",
    "80-90",
    "90-100",
    "10-30",
    "20-40",
    "30-50",
    "40-60",
    "50-70",
    "60-80",
    "70-90",
    "80-100",
    "100-200"
  ];
  const config = await buildXrayConfig(`\u{1F4A6} ${atob("QlBC")} F - Best Fragment \u{1F60E}`, true, chainProxy, false, false, true, false, [], hostName);
  const bestFragOutbounds = [];
  bestFragValues.forEach((fragLength, index) => {
    if (chainProxy) {
      const chainOutbound = structuredClone(chainProxy);
      chainOutbound.tag = `chain-${index + 1}`;
      chainOutbound.streamSettings.sockopt.dialerProxy = `prox-${index + 1}`;
      bestFragOutbounds.push(chainOutbound);
    }
    const proxy = structuredClone(outbound);
    proxy.tag = `prox-${index + 1}`;
    proxy.streamSettings.sockopt.dialerProxy = `frag-${index + 1}`;
    const fragInterval = `${settings.fragmentIntervalMin}-${settings.fragmentIntervalMax}`;
    const fragmentOutbound = buildFreedomOutbound(true, false, `frag-${index + 1}`, fragLength, fragInterval);
    bestFragOutbounds.push(proxy, fragmentOutbound);
  });
  config.outbounds.unshift(...bestFragOutbounds);
  return config;
}
async function buildXrayWorkerLessConfig() {
  const cfDnsConfig = await buildXrayConfig(`\u{1F4A6} ${atob("QlBC")} F - WorkerLess - 1 \u2B50`, false, false, false, false, true, true, [], false, "cloudflare-dns.com", ["cloudflare.com"]);
  const googleDnsConfig = await buildXrayConfig(`\u{1F4A6} ${atob("QlBC")} F - WorkerLess - 2 \u2B50`, false, false, false, false, true, true, [], false, "dns.google", ["8.8.8.8", "8.8.4.4"]);
  return [cfDnsConfig, googleDnsConfig];
}
async function getXrayCustomConfigs(env, isFragment) {
  const settings = globalThis.settings;
  let chainProxy;
  if (settings.outProxy) {
    try {
      chainProxy = buildXrayChainOutbound();
    } catch (error) {
      console.log("An error occured while parsing chain proxy: ", error);
      chainProxy = void 0;
      const proxySettings = await env.kv.get("proxySettings", { type: "json" });
      await env.kv.put("proxySettings", JSON.stringify({
        ...proxySettings,
        outProxy: "",
        outProxyParams: {}
      }));
    }
  }
  const Addresses = await getConfigAddresses(settings.cleanIPs, settings.VLTRenableIPv6, settings.customCdnAddrs, isFragment);
  const totalPorts = settings.ports.filter((port) => isFragment ? globalThis.defaultHttpsPorts.includes(port) : true);
  let protocols = [];
  if (settings.VLConfigs) protocols.push(atob("VkxFU1M="));
  if (settings.TRConfigs) protocols.push(atob("VHJvamFu"));
  let configs = [];
  let outbounds = {
    proxies: [],
    chains: []
  };
  for (const protocol of protocols) {
    let protocolIndex = 1;
    for (const port of totalPorts) {
      for (const addr of Addresses) {
        const isCustomAddr = settings.customCdnAddrs.includes(addr) && !isFragment;
        const configType = isCustomAddr ? "C" : isFragment ? "F" : "";
        const sni = isCustomAddr ? settings.customCdnSni : randomUpperCase(globalThis.hostName);
        const host = isCustomAddr ? settings.customCdnHost : globalThis.hostName;
        const remark = generateRemark(protocolIndex, port, addr, settings.cleanIPs, protocol, configType);
        const customConfig = await buildXrayConfig(remark, false, chainProxy, false, false, isFragment, false, [addr], null);
        const outbound = protocol === atob("VkxFU1M=") ? buildXrayVLOutbound("proxy", addr, port, host, sni, settings.proxyIPs, isFragment, isCustomAddr) : buildXrayTROutbound("proxy", addr, port, host, sni, settings.proxyIPs, isFragment, isCustomAddr);
        customConfig.outbounds.unshift({ ...outbound });
        outbounds.proxies.push(outbound);
        if (chainProxy) {
          customConfig.outbounds.unshift(structuredClone(chainProxy));
          outbounds.chains.push(structuredClone(chainProxy));
        }
        configs.push(customConfig);
        protocolIndex++;
      }
    }
  }
  outbounds.proxies.forEach((outbound, index) => outbound.tag = `prox-${index + 1}`);
  if (chainProxy) outbounds.chains.forEach((outbound, index) => {
    outbound.tag = `chain-${index + 1}`;
    outbound.streamSettings.sockopt.dialerProxy = `prox-${index + 1}`;
  });
  const totalOutbounds = [...outbounds.chains, ...outbounds.proxies];
  const bestPing = await buildXrayBestPingConfig(Addresses, chainProxy, totalOutbounds, isFragment);
  const finalConfigs = [...configs, bestPing];
  if (isFragment) {
    const bestFragment = await buildXrayBestFragmentConfig(globalThis.hostName, chainProxy, outbounds.proxies[0]);
    const workerLessConfigs = await buildXrayWorkerLessConfig();
    finalConfigs.push(bestFragment, ...workerLessConfigs);
  }
  return new Response(JSON.stringify(finalConfigs, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getXrayWarpConfigs(request, env, isPro) {
  const settings = globalThis.settings;
  const { warpConfigs } = await getDataset(request, env);
  const proIndicator = isPro ? " Pro " : " ";
  const xrayWarpConfigs = [];
  const xrayWoWConfigs = [];
  const outbounds = {
    proxies: [],
    chains: []
  };
  for (const [index, endpoint] of settings.warpEndpoints.entries()) {
    const endpointHost = endpoint.split(":")[0];
    const warpConfig = await buildXrayConfig(`\u{1F4A6} ${index + 1} - Warp${proIndicator}\u{1F1EE}\u{1F1F7}`, false, false, false, true, false, false, [endpointHost], null);
    const WoWConfig = await buildXrayConfig(`\u{1F4A6} ${index + 1} - WoW${proIndicator}\u{1F30D}`, false, true, false, true, false, false, [endpointHost], null);
    const warpOutbound = buildXrayWarpOutbound(warpConfigs, endpoint, false);
    const WoWOutbound = buildXrayWarpOutbound(warpConfigs, endpoint, true);
    warpConfig.outbounds.unshift(structuredClone(warpOutbound));
    WoWConfig.outbounds.unshift(structuredClone(WoWOutbound), structuredClone(warpOutbound));
    xrayWarpConfigs.push(warpConfig);
    xrayWoWConfigs.push(WoWConfig);
    outbounds.proxies.push(warpOutbound);
    outbounds.chains.push(WoWOutbound);
  }
  outbounds.proxies.forEach((outbound, index) => outbound.tag = `prox-${index + 1}`);
  outbounds.chains.forEach((outbound, index) => {
    outbound.tag = `chain-${index + 1}`;
    outbound.streamSettings.sockopt.dialerProxy = `prox-${index + 1}`;
  });
  const totalOutbounds = [...outbounds.chains, ...outbounds.proxies];
  const outboundDomains = settings.warpEndpoints.map((endpoint) => endpoint.split(":")[0]).filter((address) => isDomain(address));
  const xrayWarpBestPing = await buildXrayConfig(`\u{1F4A6} Warp${proIndicator}- Best Ping \u{1F680}`, true, false, false, true, false, false, outboundDomains, null);
  xrayWarpBestPing.outbounds.unshift(...outbounds.proxies);
  const xrayWoWBestPing = await buildXrayConfig(`\u{1F4A6} WoW${proIndicator}- Best Ping \u{1F680}`, true, true, false, true, false, false, outboundDomains, null);
  xrayWoWBestPing.outbounds.unshift(...totalOutbounds);
  const configs = [...xrayWarpConfigs, ...xrayWoWConfigs, xrayWarpBestPing, xrayWoWBestPing];
  return new Response(JSON.stringify(configs, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
var xrayConfigTemp = {
  remarks: "",
  log: {
    loglevel: "warning"
  },
  dns: {},
  inbounds: [
    {
      port: 10808,
      protocol: "socks",
      settings: {
        auth: "noauth",
        udp: true,
        userLevel: 8
      },
      sniffing: {
        destOverride: ["http", "tls"],
        enabled: true,
        routeOnly: true
      },
      tag: "socks-in"
    },
    {
      port: 10853,
      protocol: "dokodemo-door",
      settings: {
        address: "1.1.1.1",
        network: "tcp,udp",
        port: 53
      },
      tag: "dns-in"
    }
  ],
  outbounds: [
    {
      protocol: "dns",
      tag: "dns-out"
    },
    {
      protocol: "freedom",
      settings: {
        domainStrategy: "UseIP"
      },
      tag: "direct"
    },
    {
      protocol: "blackhole",
      settings: {
        response: {
          type: "http"
        }
      },
      tag: "block"
    }
  ],
  policy: {
    levels: {
      8: {
        connIdle: 300,
        downlinkOnly: 1,
        handshake: 4,
        uplinkOnly: 1
      }
    },
    system: {
      statsOutboundUplink: true,
      statsOutboundDownlink: true
    }
  },
  routing: {
    domainStrategy: "IPIfNonMatch",
    rules: []
  },
  stats: {}
};
function getRoutingRules3() {
  const settings = globalThis.settings;
  return [
    { rule: settings.blockAds, type: "block", domain: "geosite:category-ads-all" },
    { rule: settings.blockAds, type: "block", domain: "geosite:category-ads-ir" },
    { rule: settings.blockPorn, type: "block", domain: "geosite:category-porn" },
    { rule: settings.bypassIran, type: "direct", domain: "geosite:category-ir", ip: "geoip:ir", dns: settings.localDNS },
    { rule: settings.bypassChina, type: "direct", domain: "geosite:cn", ip: "geoip:cn", dns: settings.localDNS },
    { rule: settings.bypassRussia, type: "direct", domain: "geosite:category-ru", ip: "geoip:ru", dns: settings.localDNS },
    { rule: settings.bypassOpenAi, type: "direct", domain: "geosite:openai", dns: settings.antiSanctionDNS },
    { rule: settings.bypassMicrosoft, type: "direct", domain: "geosite:microsoft", dns: settings.antiSanctionDNS },
    { rule: settings.bypassOracle, type: "direct", domain: "geosite:oracle", dns: settings.antiSanctionDNS },
    { rule: settings.bypassDocker, type: "direct", domain: "geosite:docker", dns: settings.antiSanctionDNS },
    { rule: settings.bypassAdobe, type: "direct", domain: "geosite:adobe", dns: settings.antiSanctionDNS },
    { rule: settings.bypassEpicGames, type: "direct", domain: "geosite:epicgames", dns: settings.antiSanctionDNS },
    { rule: settings.bypassIntel, type: "direct", domain: "geosite:intel", dns: settings.antiSanctionDNS },
    { rule: settings.bypassAmd, type: "direct", domain: "geosite:amd", dns: settings.antiSanctionDNS },
    { rule: settings.bypassNvidia, type: "direct", domain: "geosite:nvidia", dns: settings.antiSanctionDNS },
    { rule: settings.bypassAsus, type: "direct", domain: "geosite:asus", dns: settings.antiSanctionDNS },
    { rule: settings.bypassHp, type: "direct", domain: "geosite:hp", dns: settings.antiSanctionDNS },
    { rule: settings.bypassLenovo, type: "direct", domain: "geosite:lenovo", dns: settings.antiSanctionDNS }
  ];
}

// src/helpers/helpers.js
var import_jszip = __toESM(require_jszip_min(), 1);
function isValidUUID(uuid) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}
async function handlePanel(request, env) {
  switch (globalThis.pathName) {
    case "/panel":
      return await renderPanel(request, env);
    case "/panel/settings":
      return await getSettings(request, env);
    case "/panel/update-settings":
      return await updateSettings(request, env);
    case "/panel/reset-settings":
      return await resetSettings(request, env);
    case "/panel/reset-password":
      return await resetPassword(request, env);
    case "/panel/my-ip":
      return await getMyIP(request);
    case "/panel/update-warp":
      return await updateWarpConfigs(request, env);
    case "/panel/get-warp-configs":
      return await getWarpConfigs(request, env);
    default:
      return await fallback(request);
  }
}
async function handleError(error) {
  const encodedHtml = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiIC8+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCIgLz4KICAgIDx0aXRsZT5CUEIgUGFuZWwgdjMuMy4xODwvdGl0bGU+CiAgICA8bGluayByZWw9Imljb24iIGhyZWY9Ii9mYXZpY29uLmljbyIgLz4KICAgIDxzdHlsZT4KICAgICAgICA6cm9vdCB7CiAgICAgICAgICAgIC0tY29sb3I6IGJsYWNrOwogICAgICAgICAgICAtLWhlYWRlci1jb2xvcjogIzA5NjM5ZjsKICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOwogICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2RkZDsKICAgICAgICAgICAgLS1oZWFkZXItc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOwogICAgICAgIH0KCiAgICAgICAgYm9keSwKICAgICAgICBodG1sIHsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTsKICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICB9CgogICAgICAgIGJvZHkuZGFyay1tb2RlIHsKICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7CiAgICAgICAgICAgIC0taGVhZGVyLWNvbG9yOiAjMzQ5OERCOwogICAgICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7CiAgICAgICAgICAgIC0taGVhZGVyLXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsKICAgICAgICB9CgogICAgICAgIGgxIHsKICAgICAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7CiAgICAgICAgICAgIHRleHQtc2hhZG93OiB2YXIoLS1oZWFkZXItc2hhZG93KTsKICAgICAgICB9CgogICAgICAgIGEgewogICAgICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTsKICAgICAgICB9CgogICAgICAgIC5pY29uIHsKICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsKICAgICAgICAgICAgaGVpZ2h0OiAzcmVtOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iZXJyb3ItY29udGFpbmVyIj4KICAgICAgICA8aDE+CiAgICAgICAgICAgIDxpbWcgY2xhc3M9Imljb24iIHNyYz0iL2Zhdmljb24uaWNvIiBhbHQ9IkJQQiBMb2dvIj4gQlBCIFBhbmVsIDxzcGFuIGlkPSJwYW5lbC12ZXJzaW9uIgogICAgICAgICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZTogc21hbGxlcjsiPgogICAgICAgICAgICAgICAgdjMuMy4xOAogICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgPC9oMT4KICAgICAgICA8ZGl2IGlkPSJlcnJvci1tZXNzYWdlIj4KICAgICAgICAgICAgPGgyPuKdjCBTb21ldGhpbmcgd2VudCB3cm9uZyE8L2gyPgogICAgICAgICAgICA8cD4KICAgICAgICAgICAgICAgIDxiPl9fRVJST1JfTUVTU0FHRV9fPC9iPgogICAgICAgICAgICA8L3A+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICAgIDxzY3JpcHQ+CiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJykgPT09ICdlbmFibGVkJyAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpOwogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4=";
  const html = new TextDecoder("utf-8").decode(Uint8Array.from(atob(encodedHtml), (c) => c.charCodeAt(0))).replace("__ERROR_MESSAGE__", error.message);
  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html" }
  });
}
async function handleLogin(request, env) {
  if (globalThis.pathName === "/login") return await renderLogin(request, env);
  if (globalThis.pathName === "/login/authenticate") return await generateJWTToken(request, env);
  return await fallback(request);
}
async function handleSubscriptions(request, env) {
  const { proxySettings: settings } = await getDataset(request, env);
  globalThis.settings = settings;
  const { pathName, client, subPath } = globalThis;
  switch (decodeURIComponent(pathName)) {
    case `/sub/normal/${subPath}`:
      return await getNormalConfigs(false);
    case `/sub/full-normal/${subPath}`:
      switch (client) {
        case "sfa":
          return await getSingBoxCustomConfig(env, false);
        case "clash":
          return await getClashNormalConfig(env);
        case "xray":
          return await getXrayCustomConfigs(env, false);
        default:
          break;
      }
    case `/sub/fragment/${subPath}`:
      switch (client) {
        case "sfa":
          return await getSingBoxCustomConfig(env, true);
        case "hiddify-frag":
          return await getNormalConfigs(true);
        default:
          return await getXrayCustomConfigs(env, true);
      }
    case `/sub/warp/${subPath}`:
      switch (client) {
        case "clash":
          return await getClashWarpConfig(request, env, false);
        case "singbox":
          return await getSingBoxWarpConfig(request, env);
        case "hiddify":
          return await getHiddifyWarpConfigs(false);
        case "xray":
          return await getXrayWarpConfigs(request, env, false);
        default:
          break;
      }
    case `/sub/warp-pro/${subPath}`:
      switch (client) {
        case "clash-pro":
          return await getClashWarpConfig(request, env, true);
        case "hiddify-pro":
          return await getHiddifyWarpConfigs(true);
        case "xray-knocker":
        case "xray-pro":
          return await getXrayWarpConfigs(request, env, true);
        default:
          break;
      }
    default:
      return await fallback(request);
  }
}
async function updateSettings(request, env) {
  if (request.method === "POST") {
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized or expired session.");
    const proxySettings = await updateDataset(request, env);
    return await respond(true, 200, null, proxySettings);
  }
  return await respond(false, 405, "Method not allowed.");
}
async function resetSettings(request, env) {
  if (request.method === "POST") {
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized or expired session.");
    const proxySettings = await updateDataset(request, env);
    return await respond(true, 200, null, proxySettings);
  }
  return await respond(false, 405, "Method not allowed!");
}
async function getSettings(request, env) {
  try {
    const isPassSet = await env.kv.get("pwd") ? true : false;
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized or expired session.", { isPassSet });
    const { proxySettings } = await getDataset(request, env);
    const settings = {
      proxySettings,
      isPassSet,
      subPath: globalThis.subPath
    };
    return await respond(true, 200, null, settings);
  } catch (error) {
    throw new Error(error);
  }
}
async function fallback(request) {
  const url = new URL(request.url);
  url.hostname = globalThis.fallbackDomain;
  url.protocol = "https:";
  const newRequest = new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: "manual"
  });
  return await fetch(newRequest);
}
async function getMyIP(request) {
  const ip = await request.text();
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?nocache=${Date.now()}`);
    const geoLocation = await response.json();
    return await respond(true, 200, null, geoLocation);
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return await respond(false, 500, `Error fetching IP address: ${error}`);
  }
}
async function getWarpConfigs(request, env) {
  const isPro = globalThis.client === "amnezia";
  const auth = await Authenticate(request, env);
  if (!auth) return new Response("Unauthorized or expired session.", { status: 401 });
  const { warpConfigs, proxySettings } = await getDataset(request, env);
  const warpConfig = extractWireguardParams(warpConfigs, false);
  const { warpIPv6, publicKey, privateKey } = warpConfig;
  const { warpEndpoints, amneziaNoiseCount, amneziaNoiseSizeMin, amneziaNoiseSizeMax } = proxySettings;
  const zip = new import_jszip.default();
  const trimLines = (string) => string.split("\n").map((line) => line.trim()).join("\n");
  const amneziaNoise = isPro ? `Jc = ${amneziaNoiseCount}
        Jmin = ${amneziaNoiseSizeMin}
        Jmax = ${amneziaNoiseSizeMax}
        S1 = 0
        S2 = 0
        H1 = 0
        H2 = 0
        H3 = 0
        H4 = 0` : "";
  try {
    warpEndpoints.forEach((endpoint, index) => {
      zip.file(`${atob("QlBC")}-Warp-${index + 1}.conf`, trimLines(
        `[Interface]
                PrivateKey = ${privateKey}
                Address = 172.16.0.2/32, ${warpIPv6}
                DNS = 1.1.1.1, 1.0.0.1
                MTU = 1280
                ${amneziaNoise}
                [Peer]
                PublicKey = ${publicKey}
                AllowedIPs = 0.0.0.0/0, ::/0
                Endpoint = ${endpoint}
                PersistentKeepalive = 25`
      ));
    });
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const arrayBuffer = await zipBlob.arrayBuffer();
    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${atob("QlBC")}-Warp-${isPro ? "Pro-" : ""}configs.zip"`
      }
    });
  } catch (error) {
    return new Response(`Error generating ZIP file: ${error}`, { status: 500 });
  }
}
async function serveIcon() {
  const faviconBase64 = "AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGtEBSs/KFsRGRCyAwQC5wAAAPoBAgHtDxYOvyU2InFEZD8QTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAOVQ1LgcLB9UAAAD/AQEA/ykjGP9ANyb/MCod/wUEA/8AAAD/AgQC6yo/J1dMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAOVU2KwIDAu4AAAD/Wk01/9W3f//105L/9dOS//XTkv/jxIf/emlI/wYFA/8AAAD/JjgjZkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEptRQE2UDM3IjMgehQdEqsNFAzHBwsHzw4VDcUWIRWmJTcjcTpVNilMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGpDBgcKBtcAAAD/lYBY//XTkv/105L/9dOS//XTkv/105L/9dOS//TSkf+xjE7/DQoF/wABAPg6VTYsTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAS25GAC1DKlQHCwfXAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/DBILwzVPMjhMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACo/J1sAAAD/VUkz//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/xzIj/5LJh/5t5Qv8AAAD/EhoRrUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAPls5IA4VDbwAAAD/BAMC/0k+K/+VgFn/y695/+rKi//00pH/6MiK/8aqdv+JdlH/Ny8h/wAAAP8AAAD9FyIVmkVlQA1McEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwARGRC0AAAA/8Gmc//105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r90/+SyYf/jsWD/MiYV/wAAAPlCYj4STHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcANlAyNQIEAuoAAAD/S0As/9O2fv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv+/pHH/Lykc/wAAAP8JDQjSQF88GUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBIakMFAAEA9R4aEv/00pH/9dOS//XTkv/105L/9dOS//XTkv/105L/8s2K/+SyYf/ksmH/5LJh/3pfM/8AAAD/LkQrUExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAO1g3JQIDAu0CAQH/iXZR//TSkf/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+7Njv9bTjb/AAAA/wkNCM9GZ0EKTHBHAExwRwBMcEcATHBHAExwRwBMcEcAOFQ0LwAAAP9bTjb/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR/+i6bv/ksmH/5LJh/+SyYf+XdkD/AAAA/yo+J21McEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcARWZBDAcLBtgAAAD/lH9Y//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR/15PM/8AAAD/ExwRp0tuRgBMcEcATHBHAExwRwBMcEcATHBHAC1EKlYAAAD/iXZR//XTkv/105L/9dOS//XTkv/105L/9dOS/+3Ffv/ksmH/5LJh/+SyYf/ksmH/kXE9/wAAAP8qPidmTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHABspGYwAAAD/ZVc8//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/lunH/MSYU/wAAAP8sQSlUTHBHAExwRwBMcEcATHBHAExwRwAjNCB3AAAA/66WZ//105L/9dOS//XTkv/105L/9dOS//DKhf/ksmL/5LJh/+SyYf/ksmH/5LJh/2ROKv8AAAD/NE4xPExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEJhPRMAAQD2ExAL/+fHiv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6bxw/7WNTP8AAAD/CAwH0ktuRgBMcEcATHBHAExwRwBMcEcAHSobjwAAAP/JrXf/9dOS//XTkv/105L/9dOS//HMiP/ks2P/5LJh/+SyYf/ksmH/5LJh/92tXv8WEQn/AgMC60lrRARMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAlNyNuAAAA/4RyTv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+e4av/ksmH/QzQc/wAAAP82UDI2THBHAExwRwBMcEcATHBHABYhFaEAAAD/3b6D//XTkv/105L/9dOS//LNif/ltWX/5LJh/+SyYf/ksmH/5LJh/+OxYP9iTCn/AAAA/x4tHIRMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcADhYOuwQDAv/kxIf/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//TRkP/ksmL/5LJh/6J+RP8AAAD/HiwchkxwRwBMcEcATHBHAExwRwASGxGxAAAA/+7Njv/105L/9dOS//DLhv/ltGX/5LJh/+SyYf/ksmH/5LJh/9WmWv9bRyb/AAAA/wgMB9dFZkELTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAAIDAucqJBn/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/wyoX/5LJh/+SyYf/drF3/BQMC/w4WDr5McEcATHBHAExwRwBMcEcADxYOvgYGA//105L/9dOS/+/Igv/ksmL/5LJh/+SyYf/gr1//rohK/19KKP8LCQT/AAAA/wUIBd88WTgkTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEptRQAAAAD8QTgm//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r91/+SyYf/ksmH/5LJh/yMcD/8EBgTiTHBHAExwRwBMcEcATHBHAAsQCsoPDQn/zK95/7CUYf+Pbz3/dFsx/1ZDJP8xJhT/CAcD/wAAAP8AAAD/AgMC7B4sHIRFZUANTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBJbEQAAAAA/EM5J//105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKQ/+W0ZP/ksmH/5LJh/+SyYf81KRb/AAAA8kxwRwBMcEcATHBHAExwRwAHCwfYAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAEA8wsRC8ccKhqQMUguSUdpQwZMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAAABAO0yKx7/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+/Igv/ksmH/5LJh/+SyYf/ksmH/MicV/wAAAO9McEcATHBHAExwRwBMcEcAHiwcghAXDroZJReeIDAegik8JmQzTDBEPlw6IElsRAFMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAJDgnRFRIM//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/ou27/5LJh/+SyYf/ksmH/5LJh/xoUCv8HCwfYTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAFB4TpwAAAP/cvYL/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/yzYr/5LJh/+SyYf/ksmH/5LJh/8yfVv8AAAD/FB0Sq0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACQ1IXUAAAD/o4xh//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r50/+SyYf/ksmH/5LJh/+SyYf+AZDb/AAAA/yY5I2tMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwA0TjE7AAAA/2FUOv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/8s6L/+SyYv/ksmH/5LJh/+SyYf/ZqVz/GRMK/wABAPhBXzwYTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGpDBQECAfAXEw3/8tGQ//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+m8cP/ksmH/5LJh/+SyYf/ksmH/XEcn/wAAAP8aJxmOTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHADhTNC4fLh2FDhUNwAUIBeAAAADpBwsH2RIbEbMlNiJ0P147G0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwASHBGuAAAA/8Clcv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//DLhv/ksmH/5LJh/+SyYf/ksmH/kXE9/wAAAP8FCAXeRWVADUxwRwBMcEcATHBHAExwRwBMcEcARWVADhQdEqUAAAD/AAAA/wAAAP8PDQn/GhYP/wgHBf8AAAD/AAAA/wAAAPkaJhiQRWVADExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAKT0mYAAAAP9yYkT/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//TSkf/nuWz/5LJh/+SyYf/ksmH/mXhB/wYEAv8CAwLtOVU2LExwRwBMcEcATHBHAExwRwBMcEcAO1g3JggMB9cAAAD/KCIX/5aBWf/dvoT/9dOS//XTkv/z0ZD/zbF6/4NxTv8bFxD/AAAA/wcLB9k6VTYsTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEJiPRAAAQD3HhoR//PRkf/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/ux4D/5LJh/+SyYf/jsWD/el8z/wEBAP8CAwLwNlAyOExwRwBMcEcATHBHAExwRwBMcEcANlAyNQIDAu4BAAD/eWhI//HQkP/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/68qM/3JiQ/8CAQH/AgMC8TdRMzZMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAExwRqQAAAP+7oW//9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/00Y//5bVm/+SyYf/gr1//XUgn/wAAAP8CBALuNE4xOExwRwBMcEcATHBHAExwRwBMcEcAP106HQMEA+kAAAD/i3dS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/k35X/wAAAP8EBwThRWVADExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHADFJLkQAAAD/Y1U6//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r91/+SyYf/AllH/MCUU/wAAAP8JDQjRPFk4JUxwRwBMcEcATHBHAExwRwBMcEcARmhCCQsQCsoAAAD/gnBN//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv9tXkH/AAAA/x4sHIhMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBKbUUABwsH2Q0LB//oyIr/9dOS//XTkv/105L/9dOS//XTkv/105L/8MmE/+KxYP+DZjf/CQcD/wAAAP8VHxOgRmhBCkxwRwBMcEcATHBHAExwRwBMcEcAS25GABMdEqgAAAD/aFk+//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/786O/yIeFP8BAgH0QmI+EUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACIyH3kAAAD/jnpU//XTkv/105L/9dOS//XTkv/105L/9NGQ/8adWv82Khb/AAAA/wIDAvApPSdZTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACg7JWIAAAD/Licb/+/Ojv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv+GdFD/AAAA/yc6JWZMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwA/XTsbAAAA+iYgFv/z0ZH/9dOS//XTkv/105L/8M6O/4JtSP8JBwT/AAAA/w8WDrs9WjkgTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAD9dOxoCAwLuCAcE/8queP/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/zrF6/wAAAP8THRKqTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHABMcEqwAAAD/sJhp//XTkv/105L/qpJl/yMeFf8AAAD/BQcE4yo/KFhLbkYATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEtuRgARGRCyAAAA/5R/WP/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//PRkf8HBgT/CAwH1UxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAwRy1JAAAA/1JHMf/WuH//SD0q/wAAAP8AAAD/FiEVnUVlQA5McEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwArQChXAAAA/0I4J//00pH/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/FBEM/wECAeJMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGtDAwQHBOAGBQP/CgkG/wAAAP8LEArJNU4xOkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBCYj4UAwQC6QcGBP/Psnv/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR/wgHBf8IDAfWTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAiMyBzAAAA/wUHBOMqPidcSm1FAkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAFiEVngAAAP97akn/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/9K0fP8AAAD/EhwRrkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAR2lCBitAKV9FZUAOTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcANU8xOAAAAP4hHBP/7cyN//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv+MeVP/AAAA/yY4I2tMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASWxEAgoPCc0AAAD/qJBj//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/y0JD/KSMY/wABAPdAXzwVTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEZnQQ0AAQD0AAAA/wgHBP9lVjz/1bd+//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR//HMiP/tw3v/f2c+/wAAAP8YIxaZTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAPls6HR8tHIUDBAPoAAAA/wMDAv9IPiv/p49h/+zGgf/wyYT/8MqE//DJhP/wyYP/78iC/+7HgP/txX3/7MN6/+vAdf/pvHD/57hq/+SzYv/ksmH/on5E/wQDAf8CBALrQWA8GExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGpDBSxBKVUNFAzCAAAA/wAAAP8VEQn/ZE4q/7KLS//jsWD/5LJh/+SyYf/ksmH/5LJh/+SyYf/ksmH/5LJh/+SyYf/hsF//gGQ2/wYEAv8AAQD4MUkuQ0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHADlUNSwZJReXAAEA9AAAAP8AAAD/HBYM/2NNKv+hfkT/1qdb/+SyYf/ksmH/5LJh/+GvX/+jf0X/LyQT/wAAAP8CAwLwMUguQ0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAERkPw8qPyheEhsRsAABAPUAAAD/AAAA/wAAAP8WEQn/KB8R/yYeEP8KCAT/AAAA/wAAAP8PFw61PFk4JUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBFZkEKMkovRCExH38THBGwCQ0I0gMFA+QFBwTiCxELyB0rG484UjQwTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////gD////////8AH////////gAP///+AH/8AAf///wAH/wAB///8AAH/AAD///gAAP4AAP//8AAAfgAA///gAAB+AAD//+AAAD4AAP//wAAAPgAA///AAAAeAAH//8AAAB4AAf//wAAAHgAD///AAAAeAAf//8AAAB4AH///wAAAHgH////AAAAf/////8AAAB//////wAAAH//////AAAAf/////8AAAD+AP///4AAAPgAP///gAAB8AAf//+AAAPgAA///8AAB8AAB///wAAPgAAH///gAB+AAAP//+AAfwAAA///4AD+AAAD///wA/4AAAP///AH/AAAA///8B/4AAAD///4P/gAAAP///j/8AAAA//////gAAAD/////+AAAAf/////8AAAB//////8AAAP//////+AAB///////+AAP////////AD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=";
  return new Response(Uint8Array.from(atob(faviconBase64), (c) => c.charCodeAt(0)), {
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
async function renderPanel(request, env) {
  const pwd = await env.kv.get("pwd");
  if (pwd) {
    const auth = await Authenticate(request, env);
    if (!auth) return Response.redirect(`${globalThis.urlOrigin}/login`, 302);
  }
  const encodedHtml = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPgogICAgPHRpdGxlPkJQQiBQYW5lbCB2My4zLjE4PC90aXRsZT4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iL2Zhdmljb24uaWNvIiAvPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIj4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIKICAgICAgICBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrUm91bmRlZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwJmljb25fbmFtZXM9YXV0b3JlbmV3LGNvbnRlbnRfY29weSxkb3dubG9hZCxmaW5nZXJwcmludCxrZXlfdmVydGljYWwsb3Blbl9pbl9uZXcscXJfY29kZSxzZXR0aW5ncyxzaGFyZSx0ZXJtaW5hbCx0dW5lLHZlcmlmaWVkLHZpc2liaWxpdHksdmlzaWJpbGl0eV9vZmYmZGlzcGxheT1ibG9jayIgLz4KICAgIDxzdHlsZT46cm9vdCB7CiAgICAtLWNvbG9yOiBibGFjazsKICAgIC0tcHJpbWFyeS1jb2xvcjogIzA5NjM5ZjsKICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMzQ5OGRiOwogICAgLS1oZWFkZXItY29sb3I6ICMwOTYzOWY7CiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7CiAgICAtLWZvcm0tYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsKICAgIC0tdGFibGUtYWN0aXZlLWNvbG9yOiAjZjJmMmYyOwogICAgLS1oci10ZXh0LWNvbG9yOiAjM2IzYjNiOwogICAgLS1sYWJsZS10ZXh0LWNvbG9yOiAjMzMzOwogICAgLS1ib3JkZXItY29sb3I6ICNkZGQ7CiAgICAtLWJ1dHRvbi1jb2xvcjogIzA5NjM5ZjsKICAgIC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7CiAgICAtLWhlYWRlci1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7CiAgICAtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzOiAyOHB4OwogICAgLS1pbm5lci1jb250YWluZXItYm9yZGVyLXJhZGl1czogMTRweDsKICAgIC0tZWxlbWVudC1ib3JkZXItcmFkaXVzOiAxMHB4OwogICAgLS1jb250YWluZXItcGFkZGluZzogMjhweDsKICAgIC0tY29udGFpbmVyLWdhcDogMjBweDsKICAgIC0tY29udGFpbmVyLWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7CiAgICAtLWlubmVyLWNvbnRhaW5lci1wYWRkaW5nOiAxNHB4OwogICAgLS1pbm5lci1jb250YWluZXItZ2FwOiAxNHB4Owp9Cgpib2R5IHsKICAgIGZvbnQtZmFtaWx5OiBUd2Vtb2ppIENvdW50cnkgRmxhZ3MsIHN5c3RlbS11aTsKICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpOwogICAgY29sb3I6IHZhcigtLWNvbG9yKTsKICAgIHRleHQtYWxpZ246IGNlbnRlcjsKfQoKKiwKKjo6YmVmb3JlLAoqOjphZnRlciB7CiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9Cgpib2R5LmRhcmstbW9kZSB7CiAgICAtLWNvbG9yOiB3aGl0ZTsKICAgIC0tcHJpbWFyeS1jb2xvcjogIzA5NjM5RjsKICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMzQ5OERCOwogICAgLS1oZWFkZXItY29sb3I6ICMzNDk4REI7CiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7CiAgICAtLWZvcm0tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjsKICAgIC0tdGFibGUtYWN0aXZlLWNvbG9yOiAjMjUyNTI1OwogICAgLS1oci10ZXh0LWNvbG9yOiAjRDVENUQ1OwogICAgLS1sYWJsZS10ZXh0LWNvbG9yOiAjREZERkRGOwogICAgLS1ib3JkZXItY29sb3I6ICMzNTM1MzU7CiAgICAtLWJ1dHRvbi1jb2xvcjogIzM0OThEQjsKICAgIC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTsKICAgIC0taGVhZGVyLXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsKICAgIC0tY29udGFpbmVyLWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7Cn0KCmgxIHsKICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpOwogICAgdGV4dC1zaGFkb3c6IHZhcigtLWhlYWRlci1zaGFkb3cpOwp9CgouaWNvbiB7CiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwogICAgaGVpZ2h0OiAzcmVtOwp9CgouY29udGFpbmVyIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsKICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTsKICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTsKICAgIGJveC1zaGFkb3c6IHZhcigtLWNvbnRhaW5lci1ib3gtc2hhZG93KTsKfQoKLnNlY3Rpb24gLmNvbnRhaW5lciB7CiAgICBnYXA6IHZhcigtLWNvbnRhaW5lci1nYXApOwp9CgouaW5uZXItY29udGFpbmVyIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgZ2FwOiB2YXIoLS1pbm5lci1jb250YWluZXItZ2FwKTsKICAgIGJveC1zaGFkb3c6IHZhcigtLWNvbnRhaW5lci1ib3gtc2hhZG93KTsKICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7CiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbm5lci1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7CiAgICBwYWRkaW5nOiB2YXIoLS1pbm5lci1jb250YWluZXItcGFkZGluZyk7Cn0KCi5mb3JtLWNvbnRhaW5lciB7CiAgICBtYXgtd2lkdGg6IDkwJTsKICAgIG1hcmdpbjogMCBhdXRvOwogICAgYmFja2dyb3VuZDogdmFyKC0tZm9ybS1iYWNrZ3JvdW5kLWNvbG9yKTsKICAgIG1hcmdpbi1ib3R0b206IDMwcHg7Cn0KCi5jb25maWdGb3JtIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwp9Cgouc2VjdGlvbiB7CiAgICBkaXNwbGF5OiBmbGV4OwogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgIGdhcDogdmFyKC0tY29udGFpbmVyLWdhcCk7CiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1jb250YWluZXItZ2FwKTsKfQoKLmZvcm0tY29udHJvbCB7CiAgICB3aWR0aDogMTAwJTsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgIGdhcDogMTZweDsKfQoKLmZvcm0tY29udHJvbCBkaXYgewogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXg6IDE7CiAgICB3aWR0aDogMTAwJTsKfQoKLmZvcm0tY29udHJvbCBsYWJlbCB7CiAgICBmbGV4OiAxOwogICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgd2lkdGg6IDEwMCU7CiAgICBmb250LXdlaWdodDogYm9sZDsKICAgIGNvbG9yOiB2YXIoLS1sYWJsZS10ZXh0LWNvbG9yKTsKfQoKaW5wdXRbdHlwZT0idGV4dCJdLAppbnB1dFt0eXBlPSJudW1iZXIiXSwKaW5wdXRbdHlwZT0idXJsIl0sCnRleHRhcmVhLApzZWxlY3QgewogICAgd2lkdGg6IDEwMCU7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBwYWRkaW5nOiAxMHB4OwogICAgbGluZS1oZWlnaHQ6IDEuNTsKICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7CiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpOwogICAgY29sb3I6IHZhcigtLWxhYmxlLXRleHQtY29sb3IpOwogICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcik7CiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlOwp9Cgp0ZXh0YXJlYSB7CiAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgIHJlc2l6ZTogbm9uZTsKICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7CiAgICBtYXgtaGVpZ2h0OiBjYWxjKDVsaCArIDEwcHgpOwp9CgppbnB1dFt0eXBlPSJ0ZXh0Il06Zm9jdXMsCmlucHV0W3R5cGU9Im51bWJlciJdOmZvY3VzLAppbnB1dFt0eXBlPSJ1cmwiXTpmb2N1cywKdGV4dGFyZWE6Zm9jdXMsCnNlbGVjdDpmb2N1cyB7CiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7CiAgICBvdXRsaW5lOiBub25lOwp9CgouZm9ybS1jb250cm9sIGlucHV0W3R5cGU9InBhc3N3b3JkIl0gewogICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgd2lkdGg6IDUwJTsKICAgIHBhZGRpbmc6IDEwcHg7CiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOwogICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZWxlbWVudC1ib3JkZXItcmFkaXVzKTsKICAgIGNvbG9yOiB2YXIoLS1sYWJsZS10ZXh0LWNvbG9yKTsKICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJhY2tncm91bmQtY29sb3IpOwogICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTsKfQoKLmZvcm0tY29udHJvbCBpbnB1dFt0eXBlPSJwYXNzd29yZCJdOmZvY3VzIHsKICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsKICAgIG91dGxpbmU6IG5vbmU7Cn0KCi5mb3JtLWNvbnRyb2wgYSwKYS5saW5rIHsKICAgIHdpZHRoOiAxMDAlOwogICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOwp9CgphLnNjYW5uZXIgewogICAgbWFyZ2luLWxlZnQ6IDhweDsKICAgIHdpZHRoOiB1bnNldDsKICAgIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpOwp9CgpidXR0b24ucmV2ZXJzZSB7CiAgICB3aWR0aDogMTAwJTsKICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmFja2dyb3VuZC1jb2xvcik7CiAgICBmb250LXdlaWdodDogNjAwOwogICAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7CiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOwogICAgYm9yZGVyOiAxcHggc29saWQ7CiAgICBwYWRkaW5nOiAxMHB4Owp9CgoucHJvdG9jb2xzIHsKICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICBmbGV4LXdyYXA6IHdyYXA7Cn0KCi5wcm90byB7CiAgICBnYXA6IDhweDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgZmxleC1kaXJlY3Rpb246IHJvdzsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwp9CgoucHJvdG8gbGFiZWwgewogICAgd2lkdGg6IHVuc2V0OwogICAgZmxleDogdW5zZXQ7Cn0KCi5taW4tbWF4IHsKICAgIGZsZXg6IDE7CiAgICB3aWR0aDogMTAwJTsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgZ2FwOiA0cHg7Cn0KCi5taW4tbWF4IGlucHV0IHsKICAgIHdpZHRoOiAxMDAlOwp9CgoubWluLW1heCBzcGFuIHsKICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgIHdoaXRlLXNwYWNlOiBwcmU7Cn0KCi5wb3J0cy1ibG9jayB0aCB7CiAgICB0ZXh0LXdyYXA6IG5vd3JhcDsKICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7Cn0KCi5wb3J0cy1ibG9jayB0ZDpmaXJzdC1jaGlsZCB7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBmb250LXNpemU6IGxhcmdlcjsKfQoKLnBvcnRzLWJsb2NrIHRkOmxhc3QtY2hpbGQgewogICAgZGlzcGxheTogZ3JpZDsKICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyOwp9CgoucnVsZXMgewogICAgZ2FwOiAxNnB4OwogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICB3aWR0aDogMTAwJTsKICAgIGZsZXgtd3JhcDogd3JhcDsKfQoKLmZvcm0tY29udHJvbCBkaXYucm91dGluZyB7CiAgICBnYXA6IDVweDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4OiAxOwogICAgbWFyZ2luOiAwOwogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7Cn0KCi5yb3V0aW5nIGxhYmVsIHsKICAgIHRleHQtYWxpZ246IGxlZnQ7CiAgICB3aWR0aDogdW5zZXQ7CiAgICBmb250LXdlaWdodDogNDAwOwogICAgZm9udC1zaXplOiAxMDAlOwogICAgdGV4dC13cmFwOiBub3dyYXA7Cn0KCi5mb3JtLWNvbnRyb2wuYXBwbHkgewogICAgZmxleC13cmFwOiB3cmFwOwogICAgZmxleC1kaXJlY3Rpb246IHJvdzsKICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKSAwOwogICAgZ2FwOiA4cHg7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIGZsZXg6IHVuc2V0Owp9CgpidXR0b24uYXBwbHktc2V0dGluZ3MgewogICAgbWFyZ2luOiAwOwp9CgpidXR0b24ucGFuZWwtc2V0dGluZ3MgewogICAgZmxleDogdW5zZXQ7CiAgICBib3JkZXI6IG5vbmU7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB3aWR0aDogZml0LWNvbnRlbnQ7CiAgICBtYXJnaW46IDA7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOwp9CgoubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHsKICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW46IDAgNXB4IDAgNXB4OwogICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6CiAgICAgICAgJ0ZJTEwnIDAsCiAgICAgICAgJ3dnaHQnIDQwMCwKICAgICAgICAnR1JBRCcgMCwKICAgICAgICAnb3BzeicgMjQKfQoKZGV0YWlsczpub3QoOmxhc3Qtb2YtdHlwZSkgewogICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Cn0KCnN1bW1hcnkgewogICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0ZXh0LWFsaWduOiBsZWZ0OwogICAgdGV4dC13cmFwOiBub3dyYXA7Cn0KCnN1bW1hcnk6Om1hcmtlciB7CiAgICBmb250LXNpemU6IDEuNXJlbTsKICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOwp9CgpzdW1tYXJ5OmZvY3VzLXZpc2libGUgewogICAgb3V0bGluZTogbm9uZTsKfQoKaDIsCmgzIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBjb2xvcjogdmFyKC0taHItdGV4dC1jb2xvcik7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KCmhyIHsKICAgIG1hcmdpbjogMXB4IDA7CiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOwp9CgouZm9vdGVyLWNvbnRhaW5lciB7CiAgICBvdmVyZmxvdy14OiBhdXRvOwogICAgZGlzcGxheTogZmxleDsKfQoKLmZvb3RlciB7CiAgICBkaXNwbGF5OiBmbGV4OwogICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgIG1hcmdpbjogMTBweCBhdXRvOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgZ2FwOiAxMHB4Owp9CgouZm9vdGVyIGkgewogICAgZm9udC1zaXplOiAzNnB4Owp9CgouZm9vdGVyIGEsCi5mb290ZXIgYS5saW5rIHsKICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7CiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKICAgIHdpZHRoOiB1bnNldDsKICAgIGZsZXg6IHVuc2V0Owp9CgouZm9vdGVyIGJ1dHRvbiB7CiAgICBtYXJnaW46IHVuc2V0OwogICAgYmFja2dyb3VuZDogIzIxMjEyMTsKICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7Cn0KCi5mb290ZXIgLmxvZ291dCB7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgY29sb3I6IHZhcigtLWNvbG9yKTsKICAgIG1hcmdpbjogMDsKICAgIGJvcmRlcjogbm9uZTsKICAgIGN1cnNvcjogcG9pbnRlcjsKfQoKLmdpdGh1Yi1jb250YWluZXIgewogICAgZGlzcGxheTogZmxleDsKICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIGdhcDogOHB4OwogICAgZmxleC13cmFwOiB3cmFwOwp9CgpsYWJlbCB7CiAgICBkaXNwbGF5OiBibG9jazsKICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICBjb2xvcjogdmFyKC0tbGFibGUtdGV4dC1jb2xvcik7Cn0KCi5idXR0b24gewogICAgZGlzcGxheTogZmxleDsKICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIHdpZHRoOiAxNDBweDsKICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICBwYWRkaW5nOiAxNHB4IDE0cHg7CiAgICBmb250LXNpemU6IDE2cHg7CiAgICBmb250LXdlaWdodDogNjAwOwogICAgbGV0dGVyLXNwYWNpbmc6IDFweDsKICAgIGJvcmRlcjogbm9uZTsKICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7CiAgICBjb2xvcjogd2hpdGU7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIG91dGxpbmU6IG5vbmU7CiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsKICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7CiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87CiAgICBtYXJnaW4tbGVmdDogYXV0bzsKfQoKdGFibGUgYnV0dG9uIHsKICAgIG1hcmdpbi10b3A6IGF1dG87CiAgICBtYXJnaW4tYm90dG9tOiBhdXRvOwogICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7CiAgICBmb250LXNpemU6IDE2cHg7CiAgICBmb250LXdlaWdodDogNjAwOwogICAgYm9yZGVyOiBub25lOwogICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICBjb2xvcjogdmFyKC0tbGFibGUtdGV4dC1jb2xvcik7CiAgICBwYWRkaW5nOiAwOwp9Cgp0YWJsZSBidXR0b24gc3Bhbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgewogICAgZm9udC1zaXplOiAyOHB4OwogICAgbWFyZ2luOiAwOwp9CgouYnV0dG9uIHsKICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICBmb250LXNpemU6IDEuMXJlbTsKICAgIHdpZHRoOiBtYXgtY29udGVudDsKfQoKaW5wdXRbdHlwZT0iY2hlY2tib3giXSB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yKTsKfQoKLmJ1dHRvbi5kaXNhYmxlZCB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOwogICAgY29sb3I6IHdoaXRlOwogICAgY3Vyc29yOiBub3QtYWxsb3dlZDsKICAgIGJveC1zaGFkb3c6IG5vbmU7CiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKfQoKLmJ1dHRvbjpob3ZlciB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5OwogICAgYm94LXNoYWRvdzogMCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7Cn0KCnRhYmxlIGJ1dHRvbjpob3ZlciwKdGFibGUgYnV0dG9uOmZvY3VzIHsKICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsKfQoKLmhlYWRlci1jb250YWluZXIgYnV0dG9uOmhvdmVyIHsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsKfQoKLmhlYWRlci1jb250YWluZXIgewogICAgZ2FwOiAxMHB4OwogICAgZGlzcGxheTogZmxleDsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwp9CgouaGVhZGVyLWNvbnRhaW5lciBoMyB7CiAgICBkaXNwbGF5OiBmbGV4OwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Cn0KCmJ1dHRvbi5idXR0b246aG92ZXIgewogICAgY29sb3I6IHdoaXRlOwp9CgouYnV0dG9uOmFjdGl2ZSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsKICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7Cn0KCnRhYmxlIGJ1dHRvbjphY3RpdmUgewogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7Cn0KCi50YWJsZS1jb250YWluZXIgewogICAgb3ZlcmZsb3cteDogYXV0bzsKfQoKLmFkZC1ub2lzZSB7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgbWFyZ2luOiAwOwogICAgYm9yZGVyOiBub25lOwogICAgY3Vyc29yOiBwb2ludGVyOwp9CgouYWRkLW5vaXNlIGksCi5kZWxldGUtbm9pc2UgaSB7CiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKfQoKLmRlbGV0ZS1ub2lzZSB7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgbWFyZ2luOiAwOwogICAgYm9yZGVyOiBub25lOwogICAgY3Vyc29yOiBwb2ludGVyOwp9CgoudGFibGUtY29udGFpbmVyIHRhYmxlIHsKICAgIHdpZHRoOiAxMDAlOwogICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsKICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7CiAgICBib3JkZXItc3BhY2luZzogMDsKICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlubmVyLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTsKICAgIG1hcmdpbi1ib3R0b206IDIwcHg7CiAgICBvdmVyZmxvdzogaGlkZGVuOwp9CgoudGFibGUtY29udGFpbmVyIHRib2R5IHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwp9CgoudGFibGUtY29udGFpbmVyIHRyIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogcm93Owp9CgoudGFibGUtY29udGFpbmVyIHRyIHRkOmZpcnN0LWNoaWxkIHsKICAgIGNvbG9yOiB2YXIoLS1sYWJsZS10ZXh0LWNvbG9yKTsKICAgIHRleHQtd3JhcDogbm93cmFwOwp9CgoudGFibGUtY29udGFpbmVyIHRyIHRkOm50aC1jaGlsZCgyKSB7CiAgICBmbGV4LWRpcmVjdGlvbjogcm93OwogICAgZ2FwOiA4cHg7Cn0KCi5teS1pcCB7CiAgICBvdmVyZmxvdy14OiBhdXRvOwp9CgoubXktaXAgdGFibGUgewogICAgd2lkdGg6IDEwMCU7CiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOwogICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsKICAgIGJvcmRlci1zcGFjaW5nOiAwOwogICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW5uZXItY29udGFpbmVyLWJvcmRlci1yYWRpdXMpOwogICAgbWFyZ2luLWJvdHRvbTogMjBweDsKICAgIG92ZXJmbG93OiBoaWRkZW47Cn0KCi5teS1pcCB0aCwKLm15LWlwIHRkIHsKICAgIHRleHQtd3JhcDogbm93cmFwOwogICAgcGFkZGluZzogMTBweDsKICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOwp9CgoubXktaXAgdGQ6Zmlyc3QtY2hpbGQsCi5teS1pcCB0aCB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1hY3RpdmUtY29sb3IpOwogICAgZm9udC13ZWlnaHQ6IGJvbGQ7Cn0KCi50YWJsZS1jb250YWluZXIgdGgsCi50YWJsZS1jb250YWluZXIgdGQgewogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIHBhZGRpbmc6IDEwcHg7CiAgICB3aWR0aDogMTAwJTsKICAgIGdhcDogMTBweDsKICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOwp9CgoudGFibGUtY29udGFpbmVyIHRkIGRpdiB7CiAgICBkaXNwbGF5OiBmbGV4OwogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKfQoKLnRhYmxlLWNvbnRhaW5lciB0aCB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOwogICAgY29sb3I6IHdoaXRlOwogICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICBmb250LXNpemU6IDEuMXJlbTsKICAgIHdpZHRoOiA1MCU7Cn0KCi50YWJsZS1jb250YWluZXIgdHI6aG92ZXIgewogICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtYWN0aXZlLWNvbG9yKTsKfQoKLm1vZGFsIHsKICAgIGRpc3BsYXk6IG5vbmU7CiAgICBwb3NpdGlvbjogZml4ZWQ7CiAgICB6LWluZGV4OiAxOwogICAgbGVmdDogMDsKICAgIHRvcDogMDsKICAgIHdpZHRoOiAxMDAlOwogICAgaGVpZ2h0OiAxMDAlOwogICAgb3ZlcmZsb3c6IGF1dG87CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7Cn0KCi5tb2RhbC1jb250ZW50IHsKICAgIHdpZHRoOiBmaXQtY29udGVudDsKICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmFja2dyb3VuZC1jb2xvcik7CiAgICBtYXJnaW46IGF1dG87CiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDsKICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7CiAgICBib3JkZXItcmFkaXVzOiAxMHB4OwogICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogNTAlOwogICAgbGVmdDogNTAlOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Cn0KCi5tb2RhbC1oZWFkZXIgewogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgbWFyZ2luLWJvdHRvbTogMTBweDsKfQoKLnFyLXRpdGxlIHsKICAgIGFsaWduLXNlbGY6IGNlbnRlcjsKICAgIGZvbnQtd2VpZ2h0OiBib2xkOwp9CgouY2xvc2UgewogICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7CiAgICBjb2xvcjogdmFyKC0tY29sb3IpOwogICAgZmxvYXQ6IHJpZ2h0OwogICAgZm9udC1zaXplOiAyOHB4OwogICAgZm9udC13ZWlnaHQ6IGJvbGQ7Cn0KCi5jbG9zZTpob3ZlciwKLmNsb3NlOmZvY3VzIHsKICAgIGNvbG9yOiBibGFjazsKICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICAgIGN1cnNvcjogcG9pbnRlcjsKfQoKI3Bhc3N3b3JkRXJyb3IgewogICAgY29sb3I6IHJlZDsKICAgIG1hcmdpbi1ib3R0b206IDEwcHg7Cn0KCi5tb2RhbFFSIHsKICAgIGRpc3BsYXk6IG5vbmU7CiAgICBwb3NpdGlvbjogZml4ZWQ7CiAgICB6LWluZGV4OiAxOwogICAgbGVmdDogMDsKICAgIHRvcDogMDsKICAgIHdpZHRoOiAxMDAlOwogICAgaGVpZ2h0OiAxMDAlOwogICAgb3ZlcmZsb3c6IGF1dG87CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7Cn0KCi5mbG9hdGluZy1idXR0b24gewogICAgcG9zaXRpb246IGZpeGVkOwogICAgYm90dG9tOiAyMHB4OwogICAgbGVmdDogMjBweDsKICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTsKICAgIGNvbG9yOiB3aGl0ZTsKICAgIGJvcmRlcjogbm9uZTsKICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgIHdpZHRoOiA2MHB4OwogICAgaGVpZ2h0OiA2MHB4OwogICAgZm9udC1zaXplOiAyNHB4OwogICAgY3Vyc29yOiBwb2ludGVyOwogICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsKICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7Cn0KCi5mbG9hdGluZy1idXR0b246aG92ZXIgewogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOwp9Cgpib2R5LmRhcmstbW9kZSAuZmxvYXRpbmctYnV0dG9uIHsKICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTsKfQoKLmZsb2F0aW5nLWJ1dHRvbiBpIHsKICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTsKfQoKYm9keS5kYXJrLW1vZGUgLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7Cn0KCi5yZWZyZXNoLWdlby1sb2NhdGlvbiB7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgbWFyZ2luOiAwOwogICAgYm9yZGVyOiBub25lOwogICAgY3Vyc29yOiBwb2ludGVyOwp9CgoucmVmcmVzaC1teS1pcCB7CiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKfQoKZGV0YWlscyBoMyB7CiAgICBkaXNwbGF5OiBmbGV4OwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Cn0KCi51ZHAtbm9pc2UgewogICAgbWFyZ2luLWJvdHRvbTogMTBweDsKfQoKLnBhc3N3b3JkLXdyYXBwZXIgewogICAgcG9zaXRpb246IHJlbGF0aXZlOwp9CgoucGFzc3dvcmQtd3JhcHBlciBpbnB1dFt0eXBlPXBhc3N3b3JkXSwKLnBhc3N3b3JkLXdyYXBwZXIgaW5wdXRbdHlwZT10ZXh0XSB7CiAgICB3aWR0aDogMTAwJTsKICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7CiAgICBtYXJnaW46IDA7Cn0KCi50b2dnbGUtcGFzc3dvcmQgewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiA1MCU7CiAgICByaWdodDogMTBweDsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIHVzZXItc2VsZWN0OiBub25lOwogICAgY29sb3I6IGRhcmtncmF5Owp9CgoucGFzc3dvcmQtZXJyb3IgewogICAgY29sb3I6IHJlZDsKICAgIG1hcmdpbi1ib3R0b206IDEwcHg7Cn0KCnN1bW1hcnkgaDMgewogICAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwp9CgpAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7CiAgICAuZm9ybS1jb250YWluZXIgewogICAgICAgIG1heC13aWR0aDogNjAlOwogICAgfQoKICAgIC5mb3JtLWNvbnRyb2wgewogICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICB9CgogICAgLmZvcm0tY29udHJvbCBsYWJlbCB7CiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsKICAgIH0KfTwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGgxPgogICAgICAgIDxpbWcgY2xhc3M9Imljb24iIHNyYz0iL2Zhdmljb24uaWNvIiBhbHQ9IkJQQiBMb2dvIj4gQlBCIFBhbmVsIDxzcGFuIGlkPSJwYW5lbC12ZXJzaW9uIgogICAgICAgICAgICBzdHlsZT0iZm9udC1zaXplOiBzbWFsbGVyOyI+CiAgICAgICAgICAgIHYzLjMuMTgKICAgICAgICA8L3NwYW4+CiAgICA8L2gxPgogICAgPGRpdiBjbGFzcz0iZm9ybS1jb250YWluZXIgY29udGFpbmVyIj4KICAgICAgICA8aDI+PHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+c2V0dGluZ3M8L3NwYW4+IFNldHRpbmdzPC9oMj4KICAgICAgICA8Zm9ybSBpZD0iY29uZmlnRm9ybSIgY2xhc3M9ImNvbmZpZ0Zvcm0iIG9uc3VibWl0PSJ1cGRhdGVTZXR0aW5ncyhldmVudCkiPgogICAgICAgICAgICA8ZGV0YWlscyBjbGFzcz0iZGV0YWlscyI+CiAgICAgICAgICAgICAgICA8c3VtbWFyeT4KICAgICAgICAgICAgICAgICAgICA8aDM+VkxFU1MgLSBUcm9qYW48L2gzPgogICAgICAgICAgICAgICAgPC9zdW1tYXJ5PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbiI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0icmVtb3RlRE5TIj7wn4yPIFJlbW90ZSBETlM8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InVybCIgaWQ9InJlbW90ZUROUyIgbmFtZT0icmVtb3RlRE5TIiByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibG9jYWxETlMiPvCfj5rvuI8gTG9jYWwgRE5TPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0ibG9jYWxETlMiIG5hbWU9ImxvY2FsRE5TIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49Il4obG9jYWxob3N0fCg/OlxkezEsM31cLil7M31cZHsxLDN9KSQiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9IlBsZWFzZSBlbnRlciBhIHZhbGlkIEROUyBJUCBBZGRyZXNzISIgcmVxdWlyZWQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9IlZMVFJGYWtlRE5TIj7wn6eiIEZha2UgRE5TPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9IlZMVFJGYWtlRE5TIiBuYW1lPSJWTFRSRmFrZUROUyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0idHJ1ZSI+RW5hYmxlZDwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImZhbHNlIj5EaXNhYmxlZDwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9InByb3h5SVBzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfk40gUHJveHkgSVBzIC8gRG9tYWlucwogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9InNjYW5uZXIiIGhyZWY9Imh0dHBzOi8vd3d3Lm5zbG9va3VwLmlvL2RvbWFpbnMvYnBiLnlvdXNlZi5pc2VnYXJvLmNvbS9kbnMtcmVjb3Jkcy8iCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9IlByb3h5IElQcyIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+b3Blbl9pbl9uZXc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0idGV4dCIgaWQ9InByb3h5SVBzIiBuYW1lPSJwcm94eUlQcyIgcm93cz0iMSI+PC90ZXh0YXJlYT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ib3V0UHJveHkiPuKciO+4jyBDaGFpbiBQcm94eTwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9Im91dFByb3h5IiBuYW1lPSJvdXRQcm94eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImNsZWFuSVBzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKcqCBDbGVhbiBJUHMgLyBEb21haW5zCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0ic2Nhbm5lciIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2JpYS1wYWluLWJhY2hlL0Nsb3VkZmxhcmUtQ2xlYW4tSVAtU2Nhbm5lciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0iU2Nhbm5lciIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+b3Blbl9pbl9uZXc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0idGV4dCIgaWQ9ImNsZWFuSVBzIiBuYW1lPSJjbGVhbklQcyIgcm93cz0iMSI+PC90ZXh0YXJlYT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iVkxUUmVuYWJsZUlQdjYiPvCflJsgSVB2NjwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPSJWTFRSZW5hYmxlSVB2NiIgbmFtZT0iVkxUUmVuYWJsZUlQdjYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9InRydWUiPkVuYWJsZWQ8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJmYWxzZSI+RGlzYWJsZWQ8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJjdXN0b21DZG5BZGRycyI+8J+SgCBDdXN0b20gQ0ROIEFkZHJzPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSJ0ZXh0IiBpZD0iY3VzdG9tQ2RuQWRkcnMiIG5hbWU9ImN1c3RvbUNkbkFkZHJzIiByb3dzPSIxIj48L3RleHRhcmVhPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJjdXN0b21DZG5Ib3N0Ij7wn5KAIEN1c3RvbSBDRE4gSG9zdDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9ImN1c3RvbUNkbkhvc3QiIG5hbWU9ImN1c3RvbUNkbkhvc3QiPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJjdXN0b21DZG5TbmkiPvCfkoAgQ3VzdG9tIENETiBTTkk8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJjdXN0b21DZG5TbmkiIG5hbWU9ImN1c3RvbUNkblNuaSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImJlc3RWTFRSSW50ZXJ2YWwiPvCflIQgQmVzdCBJbnRlcnZhbDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0iYmVzdFZMVFJJbnRlcnZhbCIgbmFtZT0iYmVzdFZMVFJJbnRlcnZhbCIgbWluPSIxMCIgbWF4PSI5MCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9IlZMQ29uZmlncyI+4pqZ77iPIFByb3RvY29sczwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJwcm90b2NvbHMgaW5uZXItY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJwcm90byI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9IlZMQ29uZmlncyIgbmFtZT0iVkxDb25maWdzIiB2YWx1ZT0idHJ1ZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2hhbmdlPSJoYW5kbGVQcm90b2NvbENoYW5nZShldmVudCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJWTENvbmZpZ3MiPlZMRVNTPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJwcm90byI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9IlRSQ29uZmlncyIgbmFtZT0iVFJDb25maWdzIiB2YWx1ZT0idHJ1ZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2hhbmdlPSJoYW5kbGVQcm90b2NvbENoYW5nZShldmVudCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJUUkNvbmZpZ3MiPlRyb2phbjwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0idGxzLXBvcnRzIj7wn5SSIFRMUyBQb3J0czwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJ0bHMtcG9ydHMiIGNsYXNzPSJydWxlcyBpbm5lci1jb250YWluZXIiPjwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJub25lLXRscyIgY2xhc3M9ImZvcm0tY29udHJvbCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibm9uLXRscy1wb3J0cyI+8J+UkyBOb25lIFRMUyBQb3J0czwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJub24tdGxzLXBvcnRzIiBjbGFzcz0icnVsZXMgaW5uZXItY29udGFpbmVyIj48L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iZmluZ2VycHJpbnQiPvCfkYYgRmluZ2VycHJpbnQ8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0iZmluZ2VycHJpbnQiIG5hbWU9ImZpbmdlcnByaW50Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJjaHJvbWUiPmNocm9tZTwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImZpcmVmb3giPmZpcmVmb3g8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJzYWZhcmkiPnNhZmFyaTwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImlvcyI+aW9zPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iYW5kcm9pZCI+YW5kcm9pZDwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImVkZ2UiPmVkZ2U8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIzNjAiPjM2MDwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9InFxIj5xcTwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9InJhbmRvbSI+cmFuZG9tPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0icmFuZG9taXplZCI+cmFuZG9taXplZDwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGV0YWlscz4KICAgICAgICAgICAgPGRldGFpbHM+CiAgICAgICAgICAgICAgICA8c3VtbWFyeT4KICAgICAgICAgICAgICAgICAgICA8aDM+RnJhZ21lbnQ8L2gzPgogICAgICAgICAgICAgICAgPC9zdW1tYXJ5PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbiI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iZnJhZ21lbnRMZW5ndGhNaW4iPvCfk5AgTGVuZ3RoPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibWluLW1heCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0iZnJhZ21lbnRMZW5ndGhNaW4iIG5hbWU9ImZyYWdtZW50TGVuZ3RoTWluIiBtaW49IjEwIiByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPi08L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0iZnJhZ21lbnRMZW5ndGhNYXgiIG5hbWU9ImZyYWdtZW50TGVuZ3RoTWF4IiBtYXg9IjUwMCIgcmVxdWlyZWQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImZyYWdtZW50SW50ZXJ2YWxNaW4iPvCflZ4gSW50ZXJ2YWw8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJtaW4tbWF4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIGlkPSJmcmFnbWVudEludGVydmFsTWluIiBuYW1lPSJmcmFnbWVudEludGVydmFsTWluIiBtaW49IjEiIG1heD0iMzAiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9ImZyYWdtZW50SW50ZXJ2YWxNYXgiIG5hbWU9ImZyYWdtZW50SW50ZXJ2YWxNYXgiIG1pbj0iMSIgbWF4PSIzMCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iZnJhZ21lbnRQYWNrZXRzIj7wn5OmIFBhY2tldHM8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0iZnJhZ21lbnRQYWNrZXRzIiBuYW1lPSJmcmFnbWVudFBhY2tldHMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9InRsc2hlbGxvIj50bHNoZWxsbzwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjEtMSI+MS0xPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iMS0yIj4xLTI8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIxLTMiPjEtMzwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjEtNSI+MS01PC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kZXRhaWxzPgogICAgICAgICAgICA8ZGV0YWlscz4KICAgICAgICAgICAgICAgIDxzdW1tYXJ5PgogICAgICAgICAgICAgICAgICAgIDxoMz5XYXJwIEdlbmVyYWw8L2gzPgogICAgICAgICAgICAgICAgPC9zdW1tYXJ5PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbiI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0id2FycEVuZHBvaW50cyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICDinKggRW5kcG9pbnRzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0ic2Nhbm5lciIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2JpYS1wYWluLWJhY2hlL0JQQi1XYXJwLVNjYW5uZXIiIHRpdGxlPSJTY2FubmVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPm9wZW5faW5fbmV3PC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9InRleHQiIGlkPSJ3YXJwRW5kcG9pbnRzIiBuYW1lPSJ3YXJwRW5kcG9pbnRzIiByb3dzPSIxIiByZXF1aXJlZD48L3RleHRhcmVhPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImVuZHBvaW50U2Nhbm5lciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn5SOIFNjYW4gRW5kcG9pbnQKICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBpZD0iZW5kcG9pbnRTY2FubmVyIiBjbGFzcz0iYnV0dG9uIHJldmVyc2UiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0id2FycEZha2VETlMiPvCfp6IgRmFrZSBETlM8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0id2FycEZha2VETlMiIG5hbWU9IndhcnBGYWtlRE5TIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJ0cnVlIj5FbmFibGVkPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iZmFsc2UiPkRpc2FibGVkPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0id2FycEVuYWJsZUlQdjYiPvCflJsgSVB2NjwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPSJ3YXJwRW5hYmxlSVB2NiIgbmFtZT0id2FycEVuYWJsZUlQdjYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9InRydWUiPkVuYWJsZWQ8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJmYWxzZSI+RGlzYWJsZWQ8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJiZXN0V2FycEludGVydmFsIj7wn5SEIEJlc3QgSW50ZXJ2YWw8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9ImJlc3RXYXJwSW50ZXJ2YWwiIG5hbWU9ImJlc3RXYXJwSW50ZXJ2YWwiIG1pbj0iMTAiIG1heD0iOTAiPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJyZWZyZXNoQnRuIj7imbvvuI8gV2FycCBBY2NvdW50czwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ1dHRvbiByZXZlcnNlIiBvbmNsaWNrPSJ1cGRhdGVXYXJwQ29uZmlncygpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGU8c3BhbiBpZD0id2FycC11cGRhdGUiIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmF1dG9yZW5ldzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2RldGFpbHM+CiAgICAgICAgICAgIDxkZXRhaWxzPgogICAgICAgICAgICAgICAgPHN1bW1hcnk+CiAgICAgICAgICAgICAgICAgICAgPGgzPldhcnAgUFJPPC9oMz4KICAgICAgICAgICAgICAgIDwvc3VtbWFyeT4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlY3Rpb24iPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlY3Rpb24iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnR1bmU8L3NwYW4+IE1haHNhTkcgLSBIaWRkaWZ5PC9oMz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iaGlkZGlmeU5vaXNlTW9kZSI+8J+YteKAjfCfkqsgSGlkZGlmeSBNb2RlPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9ImhpZGRpZnlOb2lzZU1vZGUiIG5hbWU9ImhpZGRpZnlOb2lzZU1vZGUiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPSJeKG1bMS02XXxoX1swLTlBLUZhLWZdezJ9fGdfKFswLTlBLUZhLWZdezJ9Xyl7Mn1bMC05QS1GYS1mXXsyfSkkIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9IkVudGVyICdtMS1tNicsICdoX0hFWCcsICdnX0hFWF9IRVhfSEVYJyB3aGljaCBIRVggY2FuIGJlIGJldHdlZW4gMDAgdG8gZmYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJrbm9ja2VyTm9pc2VNb2RlIj7wn5i14oCN8J+SqyBNYWhzYU5HIE1vZGU8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0ia25vY2tlck5vaXNlTW9kZSIgbmFtZT0ia25vY2tlck5vaXNlTW9kZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49Il4obm9uZXxxdWljfHJhbmRvbXxbMC05QS1GYS1mXSspJCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSJFbnRlciAnbm9uZScsICdxdWljJywgJ3JhbmRvbScsIG9yIGFueSBIRVggc3RyaW5nIGxpa2UgJ2VlMDAwMDAwMDEwOGFhYWEnIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibm9pc2VDb3VudE1pbiI+8J+Omu+4jyBOb2lzZSBDb3VudDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibWluLW1heCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIGlkPSJub2lzZUNvdW50TWluIiBuYW1lPSJub2lzZUNvdW50TWluIiBtaW49IjEiIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0ibm9pc2VDb3VudE1heCIgbmFtZT0ibm9pc2VDb3VudE1heCIgbWluPSIxIiByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJub2lzZVNpemVNaW4iPvCfk48gTm9pc2UgU2l6ZTwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibWluLW1heCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIGlkPSJub2lzZVNpemVNaW4iIG5hbWU9Im5vaXNlU2l6ZU1pbiIgbWluPSIxIiByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+LTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9Im5vaXNlU2l6ZU1heCIgbmFtZT0ibm9pc2VTaXplTWF4IiBtaW49IjEiIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9Im5vaXNlRGVsYXlNaW4iPvCflZ4gTm9pc2UgRGVsYXk8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1pbi1tYXgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0ibm9pc2VEZWxheU1pbiIgbmFtZT0ibm9pc2VEZWxheU1pbiIgbWluPSIxIiByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+LTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9Im5vaXNlRGVsYXlNYXgiIG5hbWU9Im5vaXNlRGVsYXlNYXgiIG1pbj0iMSIgcmVxdWlyZWQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dHVuZTwvc3Bhbj4gQ2xhc2ggLSBBbW5lemlhPC9oMz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYW1uZXppYU5vaXNlQ291bnQiPvCfjprvuI8gTm9pc2UgQ291bnQ8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIGlkPSJhbW5lemlhTm9pc2VDb3VudCIgbmFtZT0iYW1uZXppYU5vaXNlQ291bnQiIG1pbj0iMSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImFtbmV6aWFOb2lzZVNpemVNaW4iPvCfk48gTm9pc2UgU2l6ZTwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibWluLW1heCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIGlkPSJhbW5lemlhTm9pc2VTaXplTWluIiBuYW1lPSJhbW5lemlhTm9pc2VTaXplTWluIiBtaW49IjEiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+LTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9ImFtbmV6aWFOb2lzZVNpemVNYXgiIG5hbWU9ImFtbmV6aWFOb2lzZVNpemVNYXgiIG1pbj0iMSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9InVkcC1ub2lzZS1jb250YWluZXIiIGNsYXNzPSJjb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJoZWFkZXItY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj50dW5lPC9zcGFuPiB2MnJheU5HIC0gdjJyYXlOPC9oMz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYWRkLW5vaXNlIiBvbmNsaWNrPSJhZGRVZHBOb2lzZSh0cnVlKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9ImZhIGZhLXBsdXMtY2lyY2xlIGZhLTJ4IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PC9pPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJub2lzZXMiIGNsYXNzPSJzZWN0aW9uIj48L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2RldGFpbHM+CiAgICAgICAgICAgIDxkZXRhaWxzPgogICAgICAgICAgICAgICAgPHN1bW1hcnk+CiAgICAgICAgICAgICAgICAgICAgPGgzPlJvdXRpbmcgUnVsZXM8L2gzPgogICAgICAgICAgICAgICAgPC9zdW1tYXJ5PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbiI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnR1bmU8L3NwYW4+IFByZXNldCBSdWxlczwvaDM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3MtcnVsZXMiPvCfn6kgQnlwYXNzIHJ1bGVzPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0iYnlwYXNzLXJ1bGVzIiBjbGFzcz0icnVsZXMgaW5uZXItY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NMQU4iIG5hbWU9ImJ5cGFzc0xBTiIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnlwYXNzTEFOIj5MQU48L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NJcmFuIiBuYW1lPSJieXBhc3NJcmFuIiB2YWx1ZT0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3NJcmFuIj5JcmFuPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYnlwYXNzQ2hpbmEiIG5hbWU9ImJ5cGFzc0NoaW5hIiB2YWx1ZT0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3NDaGluYSI+Q2hpbmE8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NSdXNzaWEiIG5hbWU9ImJ5cGFzc1J1c3NpYSIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnlwYXNzUnVzc2lhIj5SdXNzaWE8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImJsb2NrLXJ1bGVzIj7wn5+lIEJsb2NrIHJ1bGVzPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0iYmxvY2stcnVsZXMiIGNsYXNzPSJydWxlcyBpbm5lci1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyb3V0aW5nIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImJsb2NrQWRzIiBuYW1lPSJibG9ja0FkcyIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYmxvY2tBZHMiPkFkcy48L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJibG9ja1Bvcm4iIG5hbWU9ImJsb2NrUG9ybiIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYmxvY2tQb3JuIj5Qb3JuPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYmxvY2tVRFA0NDMiIG5hbWU9ImJsb2NrVURQNDQzIiB2YWx1ZT0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJibG9ja1VEUDQ0MyI+UVVJQzwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj50dW5lPC9zcGFuPiBDdXN0b20gUnVsZXM8L2gzPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iY3VzdG9tQnlwYXNzUnVsZXMiPvCfn6kgQnlwYXNzIElQcyAvIERvbWFpbnM8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0idGV4dCIgaWQ9ImN1c3RvbUJ5cGFzc1J1bGVzIiBuYW1lPSJjdXN0b21CeXBhc3NSdWxlcyIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz0iMSI+PC90ZXh0YXJlYT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImN1c3RvbUJsb2NrUnVsZXMiPvCfn6UgQmxvY2sgSVBzIC8gRG9tYWluczwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSJ0ZXh0IiBpZD0iY3VzdG9tQmxvY2tSdWxlcyIgbmFtZT0iY3VzdG9tQmxvY2tSdWxlcyIgcm93cz0iMSI+PC90ZXh0YXJlYT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dHVuZTwvc3Bhbj4gU2FuY3Rpb24gUnVsZXM8L2gzPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYW50aVNhbmN0aW9uRE5TIj7wn4yPIEFudGkgU2FuY3Rpb24gRE5TPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJhbnRpU2FuY3Rpb25ETlMiIG5hbWU9ImFudGlTYW5jdGlvbkROUyIgcmVxdWlyZWQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3Mtc2FuY3Rpb24tcnVsZXMiPvCfn6kgQnlwYXNzIHJ1bGVzPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0iYnlwYXNzLXNhbmN0aW9uLXJ1bGVzIiBjbGFzcz0icnVsZXMgaW5uZXItY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NPcGVuQWkiIG5hbWU9ImJ5cGFzc09wZW5BaSIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnlwYXNzT3BlbkFpIj5DaGF0R1BUPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYnlwYXNzTWljcm9zb2Z0IiBuYW1lPSJieXBhc3NNaWNyb3NvZnQiIHZhbHVlPSJ0cnVlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImJ5cGFzc01pY3Jvc29mdCI+TWljcm9zb2Z0PC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYnlwYXNzT3JhY2xlIiBuYW1lPSJieXBhc3NPcmFjbGUiIHZhbHVlPSJ0cnVlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImJ5cGFzc09yYWNsZSI+T3JhY2xlPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYnlwYXNzRG9ja2VyIiBuYW1lPSJieXBhc3NEb2NrZXIiIHZhbHVlPSJ0cnVlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImJ5cGFzc0RvY2tlciI+RG9ja2VyPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYnlwYXNzQWRvYmUiIG5hbWU9ImJ5cGFzc0Fkb2JlIiB2YWx1ZT0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3NBZG9iZSI+QWRvYmU8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NFcGljR2FtZXMiIG5hbWU9ImJ5cGFzc0VwaWNHYW1lcyIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnlwYXNzRXBpY0dhbWVzIj5FcGljIEdhbWVzPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYnlwYXNzSW50ZWwiIG5hbWU9ImJ5cGFzc0ludGVsIiB2YWx1ZT0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3NJbnRlbCI+SW50ZWw8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NBbWQiIG5hbWU9ImJ5cGFzc0FtZCIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnlwYXNzQW1kIj5BTUQ8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NOdmlkaWEiIG5hbWU9ImJ5cGFzc052aWRpYSIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnlwYXNzTnZpZGlhIj5OdmlkaWE8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NBc3VzIiBuYW1lPSJieXBhc3NBc3VzIiB2YWx1ZT0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3NBc3VzIj5Bc3VzPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJvdXRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYnlwYXNzSHAiIG5hbWU9ImJ5cGFzc0hwIiB2YWx1ZT0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJieXBhc3NIcCI+SFA8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm91dGluZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJieXBhc3NMZW5vdm8iIG5hbWU9ImJ5cGFzc0xlbm92byIgdmFsdWU9InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnlwYXNzTGVub3ZvIj5MZW5vdm88L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImN1c3RvbUJ5cGFzc1NhbmN0aW9uUnVsZXMiPvCfn6kgQnlwYXNzIERvbWFpbnM8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0idGV4dCIgaWQ9ImN1c3RvbUJ5cGFzc1NhbmN0aW9uUnVsZXMiIG5hbWU9ImN1c3RvbUJ5cGFzc1NhbmN0aW9uUnVsZXMiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9IjEiPjwvdGV4dGFyZWE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kZXRhaWxzPgogICAgICAgICAgICA8ZGl2IGlkPSJhcHBseSIgY2xhc3M9ImZvcm0tY29udHJvbCBhcHBseSI+CiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9InN1Ym1pdCIgaWQ9ImFwcGx5QnV0dG9uIiBjbGFzcz0iYnV0dG9uIGRpc2FibGVkIGFwcGx5LXNldHRpbmdzIiBmb3JtPSJjb25maWdGb3JtIj4KICAgICAgICAgICAgICAgICAgICBBcHBseSBTZXR0aW5ncyDwn5KlCiAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0icGFuZWwtc2V0dGluZ3MiIHRpdGxlPSJSZXNldCBwYW5lbCBzZXR0aW5ncyB0byBkZWZhdWx0IgogICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9InJlc2V0U2V0dGluZ3MoKSI+CiAgICAgICAgICAgICAgICAgICAgPGkgaWQ9InJlZnJlc2gtYnRuIiBjbGFzcz0iZmEgZmEtcmVmcmVzaCBmYS0yeCIgYXJpYS1oaWRkZW49InRydWUiPjwvaT4KICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJwYW5lbC1zZXR0aW5ncyIgdGl0bGU9IkV4cG9ydCBwYW5lbCBzZXR0aW5ncyIgb25jbGljaz0iZXhwb3J0U2V0dGluZ3MoKSI+CiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9ImZhIGZhLWNsb3VkLWRvd25sb2FkIGZhLTJ4IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PC9pPgogICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InBhbmVsLXNldHRpbmdzIiB0aXRsZT0iSW1wb3J0IHBhbmVsIHNldHRpbmdzIiBvbmNsaWNrPSJpbXBvcnRTZXR0aW5ncygpIj4KICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz0iZmEgZmEtY2xvdWQtdXBsb2FkIGZhLTJ4IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PC9pPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJmaWxlIiBpZD0iZmlsZUlucHV0IiBhY2NlcHQ9Ii5kYXQiIHN0eWxlPSJkaXNwbGF5OiBub25lOyIKICAgICAgICAgICAgICAgICAgICAgICAgb25jaGFuZ2U9InVwbG9hZFNldHRpbmdzKGV2ZW50KSIgLz4KICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Zvcm0+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udGFpbmVyIGNvbnRhaW5lciI+CiAgICAgICAgPGgyPjxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnNoYXJlPC9zcGFuPiBTdWJzY3JpcHRpb25zIC0gQ29uZmlnczwvaDI+CiAgICAgICAgPGRldGFpbHMgY2xhc3M9ImRldGFpbHMiPgogICAgICAgICAgICA8c3VtbWFyeT4KICAgICAgICAgICAgICAgIDxoMz5Ob3JtYWw8L2gzPgogICAgICAgICAgICA8L3N1bW1hcnk+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InRhYmxlLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICA8dGFibGUgaWQ9Im5vcm1hbC1jb25maWdzLXRhYmxlIj4KICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcHBsaWNhdGlvbjwvdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdWJzY3JpcHRpb248L3RoPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnYycmF5Tkc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TWFoc2FORzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj52MnJheU48L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlOLVBSTzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaGFkb3dyb2NrZXQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3RyZWlzYW5kPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhpZGRpZnk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRGlzcGxheSBRUiBjb2RlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9Im9wZW5RUignbm9ybWFsJywgJycsICdOb3JtYWwnLCAnTm9ybWFsIFN1YnNjcmlwdGlvbicpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5xcl9jb2RlPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJDb3B5IHN1YnNjcmlwdGlvbiBVUkwiIG9uY2xpY2s9InN1YlVSTCgnbm9ybWFsJywgJycsICdOb3JtYWwnKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+Y29udGVudF9jb3B5PC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+aHVzaTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OZWtvYm94PC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5la29yYXk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+S2FyaW5nPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRpc3BsYXkgUVIgY29kZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJvcGVuUVIoJ25vcm1hbCcsICdzaW5nYm94JywgJ05vcm1hbCcsICdOb3JtYWwgU3Vic2NyaXB0aW9uJywgdHJ1ZSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnFyX2NvZGU8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkNvcHkgc3Vic2NyaXB0aW9uIFVSTCIgb25jbGljaz0ic3ViVVJMKCdub3JtYWwnLCAnc2luZ2JveCcsICdOb3JtYWwnKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+Y29udGVudF9jb3B5PC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgIDwvdGFibGU+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGV0YWlscz4KICAgICAgICA8ZGV0YWlscz4KICAgICAgICAgICAgPHN1bW1hcnk+CiAgICAgICAgICAgICAgICA8aDM+RnVsbCBOb3JtYWw8L2gzPgogICAgICAgICAgICA8L3N1bW1hcnk+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InRhYmxlLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICA8dGFibGUgaWQ9ImZ1bGwtbm9ybWFsLWNvbmZpZ3MtdGFibGUiPgogICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFwcGxpY2F0aW9uPC90aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN1YnNjcmlwdGlvbjwvdGg+CiAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlORzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NYWhzYU5HPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnYycmF5Tjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj52MnJheU4tUFJPPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN0cmVpc2FuZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJEaXNwbGF5IFFSIGNvZGUiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz0ib3BlblFSKCdmdWxsLW5vcm1hbCcsICd4cmF5JywgJ0Z1bGwgTm9ybWFsJywgJ0Z1bGwgbm9ybWFsIFN1YnNjcmlwdGlvbicpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5xcl9jb2RlPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJDb3B5IHN1YnNjcmlwdGlvbiBVUkwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz0ic3ViVVJMKCdmdWxsLW5vcm1hbCcsICd4cmF5JywgJ0Z1bGwgTm9ybWFsJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmNvbnRlbnRfY29weTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNpbmctYm94PC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnYycmF5TiAoc2luZy1ib3gpPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRpc3BsYXkgUVIgY29kZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJvcGVuUVIoJ2Z1bGwtbm9ybWFsJywgJ3NmYScsICdGdWxsIE5vcm1hbCcsICdGdWxsIG5vcm1hbCBTdWJzY3JpcHRpb24nLCB0cnVlKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+cXJfY29kZTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iQ29weSBzdWJzY3JpcHRpb24gVVJMIiBvbmNsaWNrPSJzdWJVUkwoJ2Z1bGwtbm9ybWFsJywgJ3NmYScsICdGdWxsIE5vcm1hbCcpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5jb250ZW50X2NvcHk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRvd25sb2FkIGNvbmZpZyIgb25jbGljaz0iZGxVUkwoJ2Z1bGwtbm9ybWFsJywgJ3NmYScpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5kb3dubG9hZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNsYXNoIE1ldGE8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2xhc2ggVmVyZ2U8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RmxDbGFzaDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdGFzaDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj52MnJheU4gKG1paG9tbyk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRGlzcGxheSBRUiBjb2RlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9Im9wZW5RUignZnVsbC1ub3JtYWwnLCAnY2xhc2gnLCAnRnVsbCBOb3JtYWwnLCAnRnVsbCBub3JtYWwgU3Vic2NyaXB0aW9uJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnFyX2NvZGU8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkNvcHkgc3Vic2NyaXB0aW9uIFVSTCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJzdWJVUkwoJ2Z1bGwtbm9ybWFsJywgJ2NsYXNoJywgJ0Z1bGwgTm9ybWFsJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmNvbnRlbnRfY29weTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRG93bmxvYWQgY29uZmlnIiBvbmNsaWNrPSJkbFVSTCgnZnVsbC1ub3JtYWwnLCAnY2xhc2gnKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+ZG93bmxvYWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAgPC90YWJsZT4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kZXRhaWxzPgogICAgICAgIDxkZXRhaWxzPgogICAgICAgICAgICA8c3VtbWFyeT4KICAgICAgICAgICAgICAgIDxoMz5GcmFnbWVudDwvaDM+CiAgICAgICAgICAgIDwvc3VtbWFyeT4KICAgICAgICAgICAgPGRpdiBjbGFzcz0idGFibGUtY29udGFpbmVyIj4KICAgICAgICAgICAgICAgIDx0YWJsZSBpZD0iZnJhZy1zdWItdGFibGUiPgogICAgICAgICAgICAgICAgICAgIDx0aGVhZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFwcGxpY2F0aW9uPC90aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN1YnNjcmlwdGlvbjwvdGg+CiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD4KICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlORzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NYWhzYU5HPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnYycmF5Tjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj52MnJheU4tUFJPPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN0cmVpc2FuZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJEaXNwbGF5IFFSIGNvZGUiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz0ib3BlblFSKCdmcmFnbWVudCcsICcnLCAnRnJhZ21lbnQnLCAnRnJhZ21lbnQgU3Vic2NyaXB0aW9uJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnFyX2NvZGU8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkNvcHkgc3Vic2NyaXB0aW9uIFVSTCIgb25jbGljaz0ic3ViVVJMKCdmcmFnbWVudCcsICcnLCAnRnJhZ21lbnQnKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+Y29udGVudF9jb3B5PC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2luZy1ib3g8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlOIChzaW5nLWJveCk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRGlzcGxheSBRUiBjb2RlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9Im9wZW5RUignZnJhZ21lbnQnLCAnc2ZhJywgJ0ZyYWdtZW50JywgJ0ZyYWdtZW50IFN1YnNjcmlwdGlvbicsIHRydWUsIGZhbHNlKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+cXJfY29kZTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iQ29weSBzdWJzY3JpcHRpb24gVVJMIiBvbmNsaWNrPSJzdWJVUkwoJ2ZyYWdtZW50JywgJ3NmYScsICdGcmFnbWVudCcpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5jb250ZW50X2NvcHk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRvd25sb2FkIGNvbmZpZyIgb25jbGljaz0iZGxVUkwoJ2ZyYWdtZW50JywgJ3NmYScpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5kb3dubG9hZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhpZGRpZnk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRGlzcGxheSBRUiBjb2RlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9Im9wZW5RUignZnJhZ21lbnQnLCAnaGlkZGlmeS1mcmFnJywgJ0ZyYWdtZW50JywgJ0ZyYWdtZW50IFN1YnNjcmlwdGlvbicsIGZhbHNlLCB0cnVlKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+cXJfY29kZTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iQ29weSBzdWJzY3JpcHRpb24gVVJMIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9InN1YlVSTCgnZnJhZ21lbnQnLCAnaGlkZGlmeS1mcmFnJywgJ0ZyYWdtZW50JywgdHJ1ZSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmNvbnRlbnRfY29weTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICA8L3RhYmxlPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2RldGFpbHM+CiAgICAgICAgPGRldGFpbHM+CiAgICAgICAgICAgIDxzdW1tYXJ5PgogICAgICAgICAgICAgICAgPGgzPldhcnA8L2gzPgogICAgICAgICAgICA8L3N1bW1hcnk+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InRhYmxlLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICA8dGFibGUgaWQ9IndhcnAtY29uZmlncy10YWJsZSI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXBwbGljYXRpb248L3RoPgogICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3Vic2NyaXB0aW9uPC90aD4KICAgICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj52MnJheU5HPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnYycmF5Tjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdHJlaXNhbmQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRGlzcGxheSBRUiBjb2RlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9Im9wZW5RUignd2FycCcsICd4cmF5JywgJ1dhcnAnLCAnV2FycCBTdWJzY3JpcHRpb24nKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+cXJfY29kZTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iQ29weSBzdWJzY3JpcHRpb24gVVJMIiBvbmNsaWNrPSJzdWJVUkwoJ3dhcnAnLCAneHJheScsICdXYXJwJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmNvbnRlbnRfY29weTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNpbmctYm94PC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnYycmF5TiAoc2luZy1ib3gpPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRpc3BsYXkgUVIgY29kZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJvcGVuUVIoJ3dhcnAnLCAnc2luZ2JveCcsICdXYXJwJywgJ1dhcnAgU3Vic2NyaXB0aW9uJywgdHJ1ZSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnFyX2NvZGU8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkNvcHkgc3Vic2NyaXB0aW9uIFVSTCIgb25jbGljaz0ic3ViVVJMKCd3YXJwJywgJ3Npbmdib3gnLCAnV2FycCcpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5jb250ZW50X2NvcHk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRvd25sb2FkIGNvbmZpZyIgb25jbGljaz0iZGxVUkwoJ3dhcnAnLCAnc2luZ2JveCcpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5kb3dubG9hZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhpZGRpZnk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRGlzcGxheSBRUiBjb2RlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9Im9wZW5RUignd2FycCcsICdoaWRkaWZ5JywgJ1dhcnAnLCAnV2FycCBTdWJzY3JpcHRpb24nLCBmYWxzZSwgdHJ1ZSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnFyX2NvZGU8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkNvcHkgc3Vic2NyaXB0aW9uIFVSTCIgb25jbGljaz0ic3ViVVJMKCd3YXJwJywgJ2hpZGRpZnknLCAnV2FycCcsIHRydWUpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5jb250ZW50X2NvcHk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DbGFzaCBNZXRhPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNsYXNoIFZlcmdlPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZsQ2xhc2g8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3Rhc2g8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlOIChtaWhvbW8pPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRpc3BsYXkgUVIgY29kZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJvcGVuUVIoJ3dhcnAnLCAnY2xhc2gnLCAnV2FycCcsICdXYXJwIFN1YnNjcmlwdGlvbicpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5xcl9jb2RlPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJDb3B5IHN1YnNjcmlwdGlvbiBVUkwiIG9uY2xpY2s9InN1YlVSTCgnd2FycCcsICdjbGFzaCcsICdXYXJwJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmNvbnRlbnRfY29weTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRG93bmxvYWQgY29uZmlnIiBvbmNsaWNrPSJkbFVSTCgnd2FycCcsICdjbGFzaCcpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5kb3dubG9hZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldpcmVndWFyZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJEb3dubG9hZCBjb25maWdzIHppcCIgaWQ9ImRsQ29uZmlnc0J0biIgdHlwZT0iYnV0dG9uIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9ImRvd25sb2FkV2FycENvbmZpZ3MoZmFsc2UpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5kb3dubG9hZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICA8L3RhYmxlPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2RldGFpbHM+CiAgICAgICAgPGRldGFpbHM+CiAgICAgICAgICAgIDxzdW1tYXJ5PgogICAgICAgICAgICAgICAgPGgzPldhcnAgUFJPPC9oMz4KICAgICAgICAgICAgPC9zdW1tYXJ5PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0YWJsZS1jb250YWluZXIiPgogICAgICAgICAgICAgICAgPHRhYmxlIGlkPSJ3YXJwLXByby1jb25maWdzLXRhYmxlIj4KICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcHBsaWNhdGlvbjwvdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdWJzY3JpcHRpb248L3RoPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnYycmF5Tkc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlOPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN0cmVpc2FuZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJEaXNwbGF5IFFSIGNvZGUiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz0ib3BlblFSKCd3YXJwLXBybycsICd4cmF5LXBybycsICdXYXJwIFBybycsICdXYXJwIFBybyBTdWJzY3JpcHRpb24nKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+cXJfY29kZTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iQ29weSBzdWJzY3JpcHRpb24gVVJMIiBvbmNsaWNrPSJzdWJVUkwoJ3dhcnAtcHJvJywgJ3hyYXktcHJvJywgJ1dhcnAgUHJvJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmNvbnRlbnRfY29weTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1haHNhTkc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlOLVBSTzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJEaXNwbGF5IFFSIGNvZGUiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz0ib3BlblFSKCd3YXJwLXBybycsICd4cmF5LWtub2NrZXInLCAnV2FycCBQcm8nLCAnV2FycCBQcm8gU3Vic2NyaXB0aW9uJykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnFyX2NvZGU8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkNvcHkgc3Vic2NyaXB0aW9uIFVSTCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJzdWJVUkwoJ3dhcnAtcHJvJywgJ3hyYXkta25vY2tlcicsICdXYXJwIFBybycpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5jb250ZW50X2NvcHk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DbGFzaCBNZXRhPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNsYXNoIFZlcmdlPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZsQ2xhc2g8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3Rhc2g8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+dmVyaWZpZWQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+djJyYXlOIChtaWhvbW8pPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRpc3BsYXkgUVIgY29kZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJvcGVuUVIoJ3dhcnAtcHJvJywgJ2NsYXNoLXBybycsICdXYXJwIFBybycsICdXYXJwIFBybyBTdWJzY3JpcHRpb24nKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCI+cXJfY29kZTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iQ29weSBzdWJzY3JpcHRpb24gVVJMIiBvbmNsaWNrPSJzdWJVUkwoJ3dhcnAtcHJvJywgJ2NsYXNoLXBybycsICdXYXJwIFBybycpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5jb250ZW50X2NvcHk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9IkRvd25sb2FkIGNvbmZpZyIgb25jbGljaz0iZGxVUkwoJ3dhcnAtcHJvJywgJ2NsYXNoLXBybycpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5kb3dubG9hZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhpZGRpZnk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT0iRGlzcGxheSBRUiBjb2RlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9Im9wZW5RUignd2FycC1wcm8nLCAnaGlkZGlmeS1wcm8nLCAnV2FycCBQcm8nLCAnV2FycCBQcm8gU3Vic2NyaXB0aW9uJywgZmFsc2UsIHRydWUpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5xcl9jb2RlPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJDb3B5IHN1YnNjcmlwdGlvbiBVUkwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz0ic3ViVVJMKCd3YXJwLXBybycsICdoaWRkaWZ5LXBybycsICdXYXJwIFBybycsIHRydWUpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5jb250ZW50X2NvcHk8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj52ZXJpZmllZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbW5lemlhPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPnZlcmlmaWVkPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldHIFR1bm5lbDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPSJEb3dubG9hZCBjb25maWdzIHppcCIgaWQ9ImRsQW1uZXppYUNvbmZpZ3NCdG4iIHR5cGU9ImJ1dHRvbiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPSJkb3dubG9hZFdhcnBDb25maWdzKHRydWUpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5kb3dubG9hZDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICA8L3RhYmxlPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2RldGFpbHM+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udGFpbmVyIGNvbnRhaW5lciI+CiAgICAgICAgPGRpdiBpZD0icmVzZXRQYXNzTW9kYWwiIGNsYXNzPSJtb2RhbCI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWNvbnRlbnQiPgogICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImNsb3NlIiBpZD0iY2xvc2VSZXNldFBhc3MiIG9uY2xpY2s9ImNsb3NlUmVzZXRQYXNzKCkiPiZ0aW1lczs8L3NwYW4+CiAgICAgICAgICAgICAgICA8Zm9ybSBpZD0icGFzc3dvcmRDaGFuZ2VGb3JtIiBvbnN1Ym1pdD0icmVzZXRQYXNzd29yZChldmVudCkiPgogICAgICAgICAgICAgICAgICAgIDxoMj5DaGFuZ2UgUGFzc3dvcmQ8L2gyPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlY3Rpb24iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmV3UGFzc3dvcmQiPk5ldyBQYXNzd29yZDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJwYXNzd29yZC13cmFwcGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0icGFzc3dvcmQiIGlkPSJuZXdQYXNzd29yZCIgbmFtZT0ibmV3UGFzc3dvcmQiIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgdG9nZ2xlLXBhc3N3b3JkIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eV9vZmYKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJjb25maXJtUGFzc3dvcmQiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icGFzc3dvcmQtd3JhcHBlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InBhc3N3b3JkIiBpZD0iY29uZmlybVBhc3N3b3JkIiBuYW1lPSJjb25maXJtUGFzc3dvcmQiIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgdG9nZ2xlLXBhc3N3b3JkIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eV9vZmYKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0icGFzc3dvcmRFcnJvciIgY2xhc3M9InBhc3N3b3JkLWVycm9yIj48L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJjaGFuZ2VQYXNzd29yZEJ0biIgdHlwZT0ic3VibWl0IiBjbGFzcz0iYnV0dG9uIj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj4KICAgICAgICAgICAgICAgIDwvZm9ybT4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBpZD0icXJNb2RhbCIgY2xhc3M9Im1vZGFsUVIiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJtb2RhbC1jb250ZW50IiBjbGFzcz0ibW9kYWwtY29udGVudCI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJtb2RhbC1oZWFkZXIiPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSJjbG9zZVFSIiBjbGFzcz0iY2xvc2UiIG9uY2xpY2s9ImNsb3NlUVIoKSI+JnRpbWVzOzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0icXJjb2RlVGl0bGUiIGNsYXNzPSJxci10aXRsZSI+PC9zcGFuPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJxcmNvZGUtY29udGFpbmVyIj48L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyLWNvbnRhaW5lciI+CiAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIj5maW5nZXJwcmludDwvc3Bhbj4gTXkgSVA8L2gyPgogICAgICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgaWQ9InJlZnJlc2gtZ2VvLWxvY2F0aW9uIiBjbGFzcz0icmVmcmVzaC1nZW8tbG9jYXRpb24iIG9uY2xpY2s9ImZldGNoSVBJbmZvKCkiPgogICAgICAgICAgICAgICAgPGkgY2xhc3M9ImZhIGZhLXJlZnJlc2ggZmEtMnggcmVmcmVzaC1teS1pcCIgYXJpYS1oaWRkZW49InRydWUiPjwvaT4KICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ibXktaXAiPgogICAgICAgICAgICA8dGFibGUgaWQ9ImlwcyIgY2xhc3M9Im15LWlwIj4KICAgICAgICAgICAgICAgIDx0aGVhZD4KICAgICAgICAgICAgICAgICAgICA8dGg+SW5mb3JtYXRpb248L3RoPgogICAgICAgICAgICAgICAgICAgIDx0aD5DbG91ZGZsYXJlIHRhcmdldHM8L3RoPgogICAgICAgICAgICAgICAgICAgIDx0aD5PdGhlciB0YXJnZXRzPC90aD4KICAgICAgICAgICAgICAgIDwvdGhlYWQ+CiAgICAgICAgICAgICAgICA8dGJvZHk+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SVA8L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9ImNmLWlwIj48L3RkPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9ImlwIj48L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q291bnRyeTwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0iY2YtY291bnRyeSI+PC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSJjb3VudHJ5Ij48L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2l0eTwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0iY2YtY2l0eSI+PC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSJjaXR5Ij48L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SVNQPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSJjZi1pc3AiPjwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0iaXNwIj48L3RkPgogICAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICA8L3Rib2R5PgogICAgICAgICAgICA8L3RhYmxlPgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJmb290ZXItY29udGFpbmVyIj4KICAgICAgICA8ZGl2IGNsYXNzPSJmb290ZXIiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJnaXRodWItY29udGFpbmVyIj4KICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJmYSBmYS1naXRodWIiPjwvaT4KICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJsaW5rIiBpZD0iZ2l0aHViLWxpbmsiIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9iaWEtcGFpbi1iYWNoZS9CUEItV29ya2VyLVBhbmVsIgogICAgICAgICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIj5HaXRodWI8L2E+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8YnV0dG9uIGlkPSJvcGVuUmVzZXRQYXNzIiBjbGFzcz0iYnV0dG9uIiBvbmNsaWNrPSJvcGVuUmVzZXRQYXNzKCkiPkNoYW5nZSBQYXNzd29yZCA8c3BhbgogICAgICAgICAgICAgICAgICAgIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPmtleV92ZXJ0aWNhbDwvc3Bhbj48L2J1dHRvbj4KICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGlkPSJsb2dvdXQiIGNsYXNzPSJsb2dvdXQiIHRpdGxlPSJMb2cgb3V0IiBvbmNsaWNrPSJsb2dvdXQoZXZlbnQpIj4KICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJmYSBmYS1wb3dlci1vZmYgZmEtMngiIGFyaWEtaGlkZGVuPSJ0cnVlIj48L2k+CiAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8L2Rpdj4KICAgIDxidXR0b24gaWQ9ImRhcmtNb2RlVG9nZ2xlIiBjbGFzcz0iZmxvYXRpbmctYnV0dG9uIiBvbmNsaWNrPSJkYXJrTW9kZVRvZ2dsZSgpIj4KICAgICAgICA8aSBpZD0ibW9kZUljb24iIGNsYXNzPSJmYSBmYS0yeCBmYS1hZGp1c3QgZGFyay1tb2RlIiBhcmlhLWhpZGRlbj0idHJ1ZSI+PC9pPgogICAgPC9idXR0b24+CgogICAgPHNjcmlwdCB0eXBlPSJtb2R1bGUiIGRlZmVyPgogICAgICAgIGltcG9ydCB7IHBvbHlmaWxsQ291bnRyeUZsYWdFbW9qaXMgfSBmcm9tICJodHRwczovL2Nkbi5za3lwYWNrLmRldi9jb3VudHJ5LWZsYWctZW1vamktcG9seWZpbGwiOwogICAgICAgIHBvbHlmaWxsQ291bnRyeUZsYWdFbW9qaXMoKTsKICAgIDwvc2NyaXB0PgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3FyY29kZWpzLzEuMC4wL3FyY29kZS5taW4uanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdD4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqLwpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKSA9PT0gJ2VuYWJsZWQnICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7Cgpjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImNvbmZpZ0Zvcm0iKTsKY29uc3QgWwogICAgc2VsZWN0RWxlbWVudHMsCiAgICBudW1JbnB1dEVsZW1lbnRzLAogICAgaW5wdXRFbGVtZW50cywKICAgIHRleHRhcmVhRWxlbWVudHMsCiAgICBjaGVja2JveEVsZW1lbnRzCl0gPSBbCiAgICAnc2VsZWN0JywKICAgICdpbnB1dFt0eXBlPW51bWJlcl0nLAogICAgJ2lucHV0Om5vdChbdHlwZT1maWxlXSknLAogICAgJ3RleHRhcmVhJywKICAgICdpbnB1dFt0eXBlPWNoZWNrYm94XScKXS5tYXAocXVlcnkgPT4gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7Cgpjb25zdCBkZWZhdWx0SHR0cHNQb3J0cyA9IFs0NDMsIDg0NDMsIDIwNTMsIDIwODMsIDIwODcsIDIwOTZdOwpjb25zdCBkZWZhdWx0SHR0cFBvcnRzID0gWzgwLCA4MDgwLCA4ODgwLCAyMDUyLCAyMDgyLCAyMDg2LCAyMDk1XTsKCmZldGNoKCcvcGFuZWwvc2V0dGluZ3MnKQogICAgLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKQogICAgLnRoZW4oZGF0YSA9PiB7CiAgICAgICAgY29uc3QgeyBzdWNjZXNzLCBzdGF0dXMsIG1lc3NhZ2UsIGJvZHkgfSA9IGRhdGE7CiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAxICYmICFib2R5LmlzUGFzc1NldCkgewogICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIi5jbG9zZSIpOwogICAgICAgICAgICBvcGVuUmVzZXRQYXNzKCk7CiAgICAgICAgICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAgICAgICAgfQoKICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRocm93IG5ldyBFcnJvcihgc3RhdHVzICR7c3RhdHVzfSAtICR7bWVzc2FnZX1gKTsKICAgICAgICBjb25zdCB7IHN1YlBhdGgsIHByb3h5U2V0dGluZ3MgfSA9IGJvZHk7CiAgICAgICAgZ2xvYmFsVGhpcy5zdWJQYXRoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN1YlBhdGgpOwogICAgICAgIGluaXRpYXRlUGFuZWwocHJveHlTZXR0aW5ncyk7CiAgICB9KQogICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoIkRhdGEgcXVlcnkgZXJyb3I6IiwgZXJyb3IubWVzc2FnZSB8fCBlcnJvcikpCiAgICAuZmluYWxseSgoKSA9PiB7CiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHsKICAgICAgICAgICAgY29uc3QgcXJNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxck1vZGFsJyk7CiAgICAgICAgICAgIGNvbnN0IHFyY29kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxcmNvZGUtY29udGFpbmVyJyk7CiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gcXJNb2RhbCkgewogICAgICAgICAgICAgICAgcXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gIm5vbmUiOwogICAgICAgICAgICAgICAgcXJjb2RlQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9KTsKCmZ1bmN0aW9uIGluaXRpYXRlUGFuZWwocHJveHlTZXR0aW5ncykgewogICAgY29uc3QgewogICAgICAgIFZMQ29uZmlncywKICAgICAgICBUUkNvbmZpZ3MsCiAgICAgICAgcG9ydHMsCiAgICAgICAgeHJheVVkcE5vaXNlcwogICAgfSA9IHByb3h5U2V0dGluZ3M7CgogICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7CiAgICAgICAgYWN0aXZlUHJvdG9jb2xzOiBWTENvbmZpZ3MgKyBUUkNvbmZpZ3MsCiAgICAgICAgYWN0aXZlVGxzUG9ydHM6IHBvcnRzLmZpbHRlcihwb3J0ID0+IGRlZmF1bHRIdHRwc1BvcnRzLmluY2x1ZGVzKHBvcnQpKSwKICAgICAgICB4cmF5Tm9pc2VDb3VudDogeHJheVVkcE5vaXNlcy5sZW5ndGgsCiAgICB9KTsKCiAgICBwb3B1bGF0ZVBhbmVsKHByb3h5U2V0dGluZ3MpOwogICAgcmVuZGVyUG9ydHNCbG9jayhwb3J0cy5tYXAoTnVtYmVyKSk7CiAgICByZW5kZXJVZHBOb2lzZUJsb2NrKHhyYXlVZHBOb2lzZXMpOwogICAgaW5pdGlhdGVGb3JtKCk7CiAgICBmZXRjaElQSW5mbygpOwp9CgpmdW5jdGlvbiBwb3B1bGF0ZVBhbmVsKHByb3h5U2V0dGluZ3MpIHsKICAgIHNlbGVjdEVsZW1lbnRzLmZvckVhY2goZWxtID0+IGVsbS52YWx1ZSA9IHByb3h5U2V0dGluZ3NbZWxtLmlkXSk7CiAgICBjaGVja2JveEVsZW1lbnRzLmZvckVhY2goZWxtID0+IGVsbS5jaGVja2VkID0gcHJveHlTZXR0aW5nc1tlbG0uaWRdKTsKICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChlbG0gPT4gZWxtLnZhbHVlID0gcHJveHlTZXR0aW5nc1tlbG0uaWRdKTsKICAgIHRleHRhcmVhRWxlbWVudHMuZm9yRWFjaChlbG0gPT4gewogICAgICAgIGNvbnN0IGtleSA9IGVsbS5pZDsKICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KTsKICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3h5U2V0dGluZ3Nba2V5XT8uam9pbignXHJcbicpOwogICAgICAgIGNvbnN0IHJvd3NDb3VudCA9IHByb3h5U2V0dGluZ3Nba2V5XS5sZW5ndGg7CiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7CiAgICAgICAgaWYgKHJvd3NDb3VudCkgZWxlbWVudC5yb3dzID0gcm93c0NvdW50OwogICAgICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTsKICAgIH0pOwp9CgpmdW5jdGlvbiBpbml0aWF0ZUZvcm0oKSB7CiAgICBjb25zdCBjb25maWdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0Zvcm0nKTsKICAgIGdsb2JhbFRoaXMuaW5pdGlhbEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGNvbmZpZ0Zvcm0pOwogICAgZW5hYmxlQXBwbHlCdXR0b24oKTsKCiAgICBjb25maWdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZW5hYmxlQXBwbHlCdXR0b24pOwogICAgY29uZmlnRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlbmFibGVBcHBseUJ1dHRvbik7CgogICAgY29uc3QgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgidGV4dGFyZWEiKTsKICAgIHRleHRhcmVhcy5mb3JFYWNoKHRleHRhcmVhID0+IHsKICAgICAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnYXV0byc7CiAgICAgICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zY3JvbGxIZWlnaHR9cHhgOwogICAgICAgIH0pOwogICAgfSk7Cn0KCmZ1bmN0aW9uIGhhc0Zvcm1EYXRhQ2hhbmdlZCgpIHsKICAgIGNvbnN0IGNvbmZpZ0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnRm9ybScpOwogICAgY29uc3QgZm9ybURhdGFUb09iamVjdCA9IChmb3JtRGF0YSkgPT4gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7CiAgICBjb25zdCBjdXJyZW50Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoY29uZmlnRm9ybSk7CiAgICBjb25zdCBpbml0aWFsRm9ybURhdGFPYmogPSBmb3JtRGF0YVRvT2JqZWN0KGdsb2JhbFRoaXMuaW5pdGlhbEZvcm1EYXRhKTsKICAgIGNvbnN0IGN1cnJlbnRGb3JtRGF0YU9iaiA9IGZvcm1EYXRhVG9PYmplY3QoY3VycmVudEZvcm1EYXRhKTsKICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbml0aWFsRm9ybURhdGFPYmopICE9PSBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybURhdGFPYmopOwp9CgpmdW5jdGlvbiBlbmFibGVBcHBseUJ1dHRvbigpIHsKICAgIGNvbnN0IGFwcGx5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5QnV0dG9uJyk7CiAgICBjb25zdCBpc0NoYW5nZWQgPSBoYXNGb3JtRGF0YUNoYW5nZWQoKTsKICAgIGFwcGx5QnV0dG9uLmRpc2FibGVkID0gIWlzQ2hhbmdlZDsKICAgIGFwcGx5QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkJywgIWlzQ2hhbmdlZCk7Cn0KCmZ1bmN0aW9uIG9wZW5SZXNldFBhc3MoKSB7CiAgICBjb25zdCByZXNldFBhc3NNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFBhc3NNb2RhbCcpOwogICAgcmVzZXRQYXNzTW9kYWwuc3R5bGUuZGlzcGxheSA9ICJibG9jayI7CiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gImhpZGRlbiI7Cn0KCmZ1bmN0aW9uIGNsb3NlUmVzZXRQYXNzKCkgewogICAgY29uc3QgcmVzZXRQYXNzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRQYXNzTW9kYWwnKTsKICAgIHJlc2V0UGFzc01vZGFsLnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gIiI7Cn0KCmZ1bmN0aW9uIGNsb3NlUVIoKSB7CiAgICBjb25zdCBxck1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3FyTW9kYWwnKTsKICAgIGNvbnN0IHFyY29kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxcmNvZGUtY29udGFpbmVyJyk7CiAgICBxck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICBxcmNvZGVDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTsKfQoKZnVuY3Rpb24gZGFya01vZGVUb2dnbGUoKSB7CiAgICBjb25zdCBpc0RhcmtNb2RlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTsKICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIGlzRGFya01vZGUgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnKTsKfQoKYXN5bmMgZnVuY3Rpb24gZ2V0SXBEZXRhaWxzKGlwKSB7CiAgICB0cnkgewogICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9wYW5lbC9teS1pcCcsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGlwIH0pOwogICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7CiAgICAgICAgY29uc3QgeyBzdWNjZXNzLCBzdGF0dXMsIG1lc3NhZ2UsIGJvZHkgfSA9IGRhdGE7CiAgICAgICAgaWYgKCFzdWNjZXNzKSB0aHJvdyBuZXcgRXJyb3IoYHN0YXR1cyAke3N0YXR1c30gLSAke21lc3NhZ2V9YCk7CiAgICAgICAgcmV0dXJuIGJvZHk7CiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgIGNvbnNvbGUuZXJyb3IoIkZldGNoaW5nIElQIGVycm9yOiIsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpCiAgICB9Cn0KCmFzeW5jIGZ1bmN0aW9uIGZldGNoSVBJbmZvKCkgewogICAgY29uc3QgcmVmcmVzaEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicmVmcmVzaC1nZW8tbG9jYXRpb24iKS5xdWVyeVNlbGVjdG9yKCdpJyk7CiAgICByZWZyZXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zcGluJyk7CiAgICBjb25zdCB1cGRhdGVVSSA9IChpcCA9ICctJywgY291bnRyeSA9ICctJywgY291bnRyeUNvZGUgPSAnLScsIGNpdHkgPSAnLScsIGlzcCA9ICctJywgY2ZJUCkgPT4gewogICAgICAgIGNvbnN0IGZsYWcgPSBjb3VudHJ5Q29kZSAhPT0gJy0nID8gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uWy4uLmNvdW50cnlDb2RlXS5tYXAoYyA9PiAweDFGMUU2ICsgYy5jaGFyQ29kZUF0KDApIC0gNjUpKSA6ICcnOwogICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNmSVAgPyAnY2YtaXAnIDogJ2lwJykudGV4dENvbnRlbnQgPSBpcDsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZklQID8gJ2NmLWNvdW50cnknIDogJ2NvdW50cnknKS50ZXh0Q29udGVudCA9IGNvdW50cnkgKyAnICcgKyBmbGFnOwogICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNmSVAgPyAnY2YtY2l0eScgOiAnY2l0eScpLnRleHRDb250ZW50ID0gY2l0eTsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZklQID8gJ2NmLWlzcCcgOiAnaXNwJykudGV4dENvbnRlbnQgPSBpc3A7CiAgICB9OwoKICAgIHRyeSB7CiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcHdoby5pcy8nICsgJz9ub2NhY2hlPScgKyBEYXRlLm5vdygpLCB7IGNhY2hlOiAibm8tc3RvcmUiIH0pOwogICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7CiAgICAgICAgY29uc3QgeyBzdWNjZXNzLCBpcCwgbWVzc2FnZSB9ID0gZGF0YTsKICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRocm93IG5ldyBFcnJvcihgRmV0Y2ggT3RoZXIgdGFyZ2V0cyBJUCBmYWlsZWQgYXQgJHtyZXNwb25zZS51cmx9IC0gJHttZXNzYWdlfWApOwogICAgICAgIGNvbnN0IHsgY291bnRyeSwgY291bnRyeUNvZGUsIGNpdHksIGlzcCB9ID0gYXdhaXQgZ2V0SXBEZXRhaWxzKGlwKTsKICAgICAgICB1cGRhdGVVSShpcCwgY291bnRyeSwgY291bnRyeUNvZGUsIGNpdHksIGlzcCk7CiAgICAgICAgcmVmcmVzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3BpbicpOwogICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICBjb25zb2xlLmVycm9yKCJGZXRjaGluZyBJUCBlcnJvcjoiLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKQogICAgfQoKICAgIHRyeSB7CiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcHY0LmljYW5oYXppcC5jb20vP25vY2FjaGU9JyArIERhdGUubm93KCksIHsgY2FjaGU6ICJuby1zdG9yZSIgfSk7CiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgewogICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmV0Y2ggQ2xvdWRmbGFyZSB0YXJnZXRzIElQIGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c30gYXQgJHtyZXNwb25zZS51cmx9IC0gJHtlcnJvck1lc3NhZ2V9YCk7CiAgICAgICAgfQoKICAgICAgICBjb25zdCBpcCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsKICAgICAgICBjb25zdCB7IGNvdW50cnksIGNvdW50cnlDb2RlLCBjaXR5LCBpc3AgfSA9IGF3YWl0IGdldElwRGV0YWlscyhpcCk7CiAgICAgICAgdXBkYXRlVUkoaXAsIGNvdW50cnksIGNvdW50cnlDb2RlLCBjaXR5LCBpc3AsIHRydWUpOwogICAgICAgIHJlZnJlc2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXNwaW4nKTsKICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgY29uc29sZS5lcnJvcigiRmV0Y2hpbmcgSVAgZXJyb3I6IiwgZXJyb3IubWVzc2FnZSB8fCBlcnJvcikKICAgIH0KfQoKZnVuY3Rpb24gZG93bmxvYWRXYXJwQ29uZmlncyhpc0FtbmV6aWEpIHsKICAgIGNvbnN0IGNsaWVudCA9IGlzQW1uZXppYSA/ICI/YXBwPWFtbmV6aWEiIDogIiI7CiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICIvcGFuZWwvZ2V0LXdhcnAtY29uZmlncyIgKyBjbGllbnQ7Cn0KCmZ1bmN0aW9uIGdlbmVyYXRlU3ViVXJsKHBhdGgsIGFwcCwgdGFnLCBoaWRkaWZ5VHlwZSwgc2luZ2JveFR5cGUpIHsKICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpOwogICAgdXJsLnBhdGhuYW1lID0gYC9zdWIvJHtwYXRofS8ke2dsb2JhbFRoaXMuc3ViUGF0aH1gOwogICAgYXBwICYmIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdhcHAnLCBhcHApOwogICAgaWYgKHRhZykgdXJsLmhhc2ggPSBg8J+SpiAke2F0b2IoJ1FsQkMnKX0gJHt0YWd9YDsKCiAgICBpZiAoc2luZ2JveFR5cGUpIHJldHVybiBgc2luZy1ib3g6Ly9pbXBvcnQtcmVtb3RlLXByb2ZpbGU/dXJsPSR7dXJsLmhyZWZ9YDsKICAgIGlmIChoaWRkaWZ5VHlwZSkgcmV0dXJuIGBoaWRkaWZ5Oi8vaW1wb3J0LyR7dXJsLmhyZWZ9YDsKICAgIHJldHVybiB1cmwuaHJlZjsKfQoKZnVuY3Rpb24gc3ViVVJMKHBhdGgsIGFwcCwgdGFnLCBoaWRkaWZ5VHlwZSwgc2luZ2JveFR5cGUpIHsKICAgIGNvbnN0IHVybCA9IGdlbmVyYXRlU3ViVXJsKHBhdGgsIGFwcCwgdGFnLCBoaWRkaWZ5VHlwZSwgc2luZ2JveFR5cGUpOwogICAgY29weVRvQ2xpcGJvYXJkKHVybCk7Cn0KCmFzeW5jIGZ1bmN0aW9uIGRsVVJMKHBhdGgsIGFwcCkgewogICAgY29uc3QgdXJsID0gZ2VuZXJhdGVTdWJVcmwocGF0aCwgYXBwKTsKCiAgICB0cnkgewogICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTsKICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOwogICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfSBhdCAke3Jlc3BvbnNlLnVybH0gLSAke2RhdGF9YCk7CiAgICAgICAgZG93bmxvYWRKU09OKGRhdGEsICJjb25maWcuanNvbiIpOwogICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICBjb25zb2xlLmVycm9yKCJEb3dubG9hZCBlcnJvcjoiLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTsKICAgIH0KfQoKZnVuY3Rpb24gZG93bmxvYWRKU09OKGRhdGEsIGZpbGVOYW1lKSB7CiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KTsKICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7CiAgICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpOwogICAgbGluay5kb3dubG9hZCA9IGZpbGVOYW1lOwogICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTsKICAgIGxpbmsuY2xpY2soKTsKICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7Cn0KCmZ1bmN0aW9uIGV4cG9ydFNldHRpbmdzKCkgewogICAgY29uc3QgZm9ybSA9IHZhbGlkYXRlU2V0dGluZ3MoKTsKICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtLCBudWxsLCA0KTsKICAgIGNvbnN0IGVuY29kZWREYXRhID0gYnRvYShkYXRhKTsKICAgIGRvd25sb2FkSlNPTihlbmNvZGVkRGF0YSwgYCR7YXRvYignUWxCQycpfS1zZXR0aW5ncy5kYXRgKTsKfQoKZnVuY3Rpb24gaW1wb3J0U2V0dGluZ3MoKSB7CiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlSW5wdXQnKTsKICAgIGlucHV0LnZhbHVlID0gJyc7CiAgICBpbnB1dC5jbGljaygpOwp9Cgphc3luYyBmdW5jdGlvbiB1cGxvYWRTZXR0aW5ncyhldmVudCkgewogICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTsKICAgIGlmICghZmlsZSkgcmV0dXJuOwoKICAgIHRyeSB7CiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpOwogICAgICAgIGNvbnN0IGRhdGEgPSBhdG9iKHRleHQpOwogICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShkYXRhKTsKICAgICAgICB1cGRhdGVTZXR0aW5ncyhldmVudCwgc2V0dGluZ3MpOwogICAgICAgIGluaXRpYXRlUGFuZWwoc2V0dGluZ3MpOwogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGltcG9ydCBzZXR0aW5nczonLCBlcnIubWVzc2FnZSk7CiAgICB9Cn0KCmZ1bmN0aW9uIG9wZW5RUihwYXRoLCBhcHAsIHRhZywgdGl0bGUsIHNpbmdib3hUeXBlLCBoaWRkaWZ5VHlwZSkgewogICAgY29uc3QgcXJNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxck1vZGFsJyk7CiAgICBjb25zdCBxcmNvZGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXJjb2RlLWNvbnRhaW5lcicpOwogICAgY29uc3QgdXJsID0gZ2VuZXJhdGVTdWJVcmwocGF0aCwgYXBwLCB0YWcsIGhpZGRpZnlUeXBlLCBzaW5nYm94VHlwZSk7CiAgICBsZXQgcXJjb2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicXJjb2RlVGl0bGUiKTsKICAgIHFyY29kZVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7CiAgICBxck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAiYmxvY2siOwogICAgbGV0IHFyY29kZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgcXJjb2RlRGl2LmNsYXNzTmFtZSA9ICJxcmNvZGUiOwogICAgcXJjb2RlRGl2LnN0eWxlLnBhZGRpbmcgPSAiMnB4IjsKICAgIHFyY29kZURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAiI2ZmZmZmZiI7CiAgICAvKiBnbG9iYWwgUVJDb2RlICovCiAgICBuZXcgUVJDb2RlKHFyY29kZURpdiwgewogICAgICAgIHRleHQ6IHVybCwKICAgICAgICB3aWR0aDogMjU2LAogICAgICAgIGhlaWdodDogMjU2LAogICAgICAgIGNvbG9yRGFyazogIiMwMDAwMDAiLAogICAgICAgIGNvbG9yTGlnaHQ6ICIjZmZmZmZmIiwKICAgICAgICBjb3JyZWN0TGV2ZWw6IFFSQ29kZS5Db3JyZWN0TGV2ZWwuSAogICAgfSk7CiAgICBxcmNvZGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXJjb2RlRGl2KTsKfQoKZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHRleHQpIHsKICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpCiAgICAgICAgLnRoZW4oKCkgPT4gYWxlcnQoJ+KchSBDb3BpZWQgdG8gY2xpcGJvYXJkOlxuXG4nICsgdGV4dCkpCiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb3B5OicsIGVycm9yKSk7Cn0KCmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdhcnBDb25maWdzKCkgewogICAgY29uc3QgY29uZmlybVJlc2V0ID0gY29uZmlybSgn4pqg77iPIEFyZSB5b3Ugc3VyZT8nKTsKICAgIGlmICghY29uZmlybVJlc2V0KSByZXR1cm47CiAgICBjb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhcnAtdXBkYXRlJyk7CiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICd3YWl0JzsKICAgIHJlZnJlc2hCdG4uY2xhc3NMaXN0LmFkZCgnZmEtc3BpbicpOwoKICAgIHRyeSB7CiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3BhbmVsL3VwZGF0ZS13YXJwJywgeyBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyB9KTsKICAgICAgICBjb25zdCB7IHN1Y2Nlc3MsIHN0YXR1cywgbWVzc2FnZSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOwogICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnOwogICAgICAgIHJlZnJlc2hCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3BpbicpOwogICAgICAgIGlmICghc3VjY2VzcykgewogICAgICAgICAgICBhbGVydChg4pqg77iPIEFuIGVycm9yIG9jY3VyZWQsIFBsZWFzZSB0cnkgYWdhaW4hXG7im5QgJHttZXNzYWdlfWApOwogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHN0YXR1cyAke3N0YXR1c30gLSAke21lc3NhZ2V9YCk7CiAgICAgICAgfQoKICAgICAgICBhbGVydCgn4pyFIFdhcnAgY29uZmlncyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEnKTsKICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgY29uc29sZS5lcnJvcigiVXBkYXRpbmcgV2FycCBjb25maWdzIGVycm9yOiIsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpCiAgICB9Cn0KCmZ1bmN0aW9uIGhhbmRsZVByb3RvY29sQ2hhbmdlKGV2ZW50KSB7CiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHsKICAgICAgICBnbG9iYWxUaGlzLmFjdGl2ZVByb3RvY29scysrOwogICAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIGdsb2JhbFRoaXMuYWN0aXZlUHJvdG9jb2xzLS07CiAgICBpZiAoZ2xvYmFsVGhpcy5hY3RpdmVQcm90b2NvbHMgPT09IDApIHsKICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOwogICAgICAgIGV2ZW50LnRhcmdldC5jaGVja2VkID0gIWV2ZW50LnRhcmdldC5jaGVja2VkOwogICAgICAgIGFsZXJ0KCLim5QgQXQgbGVhc3Qgb25lIFByb3RvY29sIHNob3VsZCBiZSBzZWxlY3RlZCEiKTsKICAgICAgICBnbG9iYWxUaGlzLmFjdGl2ZVByb3RvY29scysrOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KfQoKZnVuY3Rpb24gaGFuZGxlUG9ydENoYW5nZShldmVudCkgewogICAgY29uc3QgcG9ydEZpZWxkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5uYW1lKTsKICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkgewogICAgICAgIGdsb2JhbFRoaXMuYWN0aXZlVGxzUG9ydHMucHVzaChwb3J0RmllbGQpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIGdsb2JhbFRoaXMuYWN0aXZlVGxzUG9ydHMgPSBnbG9iYWxUaGlzLmFjdGl2ZVRsc1BvcnRzLmZpbHRlcihwb3J0ID0+IHBvcnQgIT09IHBvcnRGaWVsZCk7CiAgICBpZiAoZ2xvYmFsVGhpcy5hY3RpdmVUbHNQb3J0cy5sZW5ndGggPT09IDApIHsKICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOwogICAgICAgIGV2ZW50LnRhcmdldC5jaGVja2VkID0gIWV2ZW50LnRhcmdldC5jaGVja2VkOwogICAgICAgIGFsZXJ0KCLim5QgQXQgbGVhc3Qgb25lIFRMUyBwb3J0IHNob3VsZCBiZSBzZWxlY3RlZCEiKTsKICAgICAgICBnbG9iYWxUaGlzLmFjdGl2ZVRsc1BvcnRzLnB1c2gocG9ydEZpZWxkKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICB9Cn0KCmZ1bmN0aW9uIHJlc2V0U2V0dGluZ3MoKSB7CiAgICBjb25zdCBjb25maXJtUmVzZXQgPSBjb25maXJtKCfimqDvuI8gVGhpcyB3aWxsIHJlc2V0IGFsbCBwYW5lbCBzZXR0aW5ncy5cblxu4p2TIEFyZSB5b3Ugc3VyZT8nKTsKICAgIGlmICghY29uZmlybVJlc2V0KSByZXR1cm47CiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJyZWZyZXNoLWJ0biIpOwogICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnZmEtc3BpbicpOwogICAgY29uc3QgYm9keSA9IHsgcmVzZXRTZXR0aW5nczogdHJ1ZSB9OwogICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnd2FpdCc7CgogICAgZmV0Y2goJy9wYW5lbC9yZXNldC1zZXR0aW5ncycsIHsKICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSwKICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLAogICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9CiAgICB9KQogICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkKICAgICAgICAudGhlbihkYXRhID0+IHsKICAgICAgICAgICAgY29uc3QgeyBzdWNjZXNzLCBzdGF0dXMsIG1lc3NhZ2UsIGJvZHkgfSA9IGRhdGE7CiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnOwogICAgICAgICAgICByZXNldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zcGluJyk7CiAgICAgICAgICAgIGlmICghc3VjY2VzcykgdGhyb3cgbmV3IEVycm9yKGBzdGF0dXMgJHtzdGF0dXN9IC0gJHttZXNzYWdlfWApOwogICAgICAgICAgICBpbml0aWF0ZVBhbmVsKGJvZHkpOwogICAgICAgICAgICBhbGVydCgn4pyFIFBhbmVsIHNldHRpbmdzIHJlc2V0IHRvIGRlZmF1bHQgc3VjY2Vzc2Z1bGx5IScpOwogICAgICAgIH0pCiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoIlJlc2V0aW5nIHNldHRpbmdzIGVycm9yOiIsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpKTsKfQoKZnVuY3Rpb24gdmFsaWRhdGVTZXR0aW5ncygpIHsKICAgIGNvbnN0IGVsZW1lbnRzVG9DaGVjayA9IFsKICAgICAgICAnY2xlYW5JUHMnLCAnY3VzdG9tQ2RuQWRkcnMnLCAnY3VzdG9tQ2RuU25pJywgJ2N1c3RvbUNkbkhvc3QnLAogICAgICAgICdjdXN0b21CeXBhc3NSdWxlcycsICdjdXN0b21CbG9ja1J1bGVzJywgJ2N1c3RvbUJ5cGFzc1NhbmN0aW9uUnVsZXMnCiAgICBdOwogICAgY29uc3QgY29uZmlnRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdGb3JtJyk7CiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShjb25maWdGb3JtKTsKCiAgICBjb25zdCB4cmF5VWRwTm9pc2VzID0gW107CiAgICBjb25zdCBmaWVsZHMgPSBbCiAgICAgICAgJ3VkcFhyYXlOb2lzZU1vZGUnLAogICAgICAgICd1ZHBYcmF5Tm9pc2VQYWNrZXQnLAogICAgICAgICd1ZHBYcmF5Tm9pc2VEZWxheU1pbicsCiAgICAgICAgJ3VkcFhyYXlOb2lzZURlbGF5TWF4JywKICAgICAgICAndWRwWHJheU5vaXNlQ291bnQnCiAgICBdLm1hcChmaWVsZCA9PiBmb3JtRGF0YS5nZXRBbGwoZmllbGQpKTsKCiAgICBjb25zdCBbbW9kZXMsIHBhY2tldHMsIGRlbGF5c01pbiwgZGVsYXlzTWF4LCBjb3VudHNdID0gZmllbGRzOwogICAgbW9kZXMuZm9yRWFjaCgobW9kZSwgaW5kZXgpID0+IHsKICAgICAgICB4cmF5VWRwTm9pc2VzLnB1c2goewogICAgICAgICAgICB0eXBlOiBtb2RlLAogICAgICAgICAgICBwYWNrZXQ6IHBhY2tldHNbaW5kZXhdLAogICAgICAgICAgICBkZWxheTogYCR7ZGVsYXlzTWluW2luZGV4XX0tJHtkZWxheXNNYXhbaW5kZXhdfWAsCiAgICAgICAgICAgIGNvdW50OiBjb3VudHNbaW5kZXhdCiAgICAgICAgfSk7CiAgICB9KTsKCiAgICBjb25zdCB2YWxpZGF0aW9ucyA9IFsKICAgICAgICB2YWxpZGF0ZU11bHRpcGxlSG9zdE5hbWVzKGVsZW1lbnRzVG9DaGVjayksCiAgICAgICAgdmFsaWRhdGVQcm94eUlQcygpLAogICAgICAgIHZhbGlkYXRlV2FycEVuZHBvaW50cygpLAogICAgICAgIHZhbGlkYXRlTWluTWF4KCksCiAgICAgICAgdmFsaWRhdGVDaGFpblByb3h5KCksCiAgICAgICAgdmFsaWRhdGVDdXN0b21DZG4oKSwKICAgICAgICB2YWxpZGF0ZVhyYXlOb2lzZXMoZmllbGRzKSwKICAgICAgICB2YWxpZGF0ZVNhbmN0aW9uRG5zKCkKICAgIF07CgogICAgaWYgKCF2YWxpZGF0aW9ucy5ldmVyeShCb29sZWFuKSkgcmV0dXJuIGZhbHNlOwoKICAgIGNvbnN0IGZvcm0gPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKTsKICAgIGZvcm0ueHJheVVkcE5vaXNlcyA9IHhyYXlVZHBOb2lzZXM7CiAgICBjb25zdCBwb3J0cyA9IFsuLi5kZWZhdWx0SHR0cFBvcnRzLCAuLi5kZWZhdWx0SHR0cHNQb3J0c107CgogICAgZm9ybS5wb3J0cyA9IHBvcnRzLnJlZHVjZSgoYWNjLCBwb3J0KSA9PiB7CiAgICAgICAgZm9ybURhdGEuaGFzKHBvcnQudG9TdHJpbmcoKSkgJiYgYWNjLnB1c2gocG9ydCk7CiAgICAgICAgcmV0dXJuIGFjYzsKICAgIH0sIFtdKTsKCiAgICBjaGVja2JveEVsZW1lbnRzLmZvckVhY2goZWxtID0+IHsKICAgICAgICBmb3JtW2VsbS5pZF0gPSBmb3JtRGF0YS5oYXMoZWxtLmlkKTsKICAgIH0pOwoKICAgIHNlbGVjdEVsZW1lbnRzLmZvckVhY2goZWxtID0+IHsKICAgICAgICBsZXQgdmFsdWUgPSBmb3JtW2VsbS5pZF07CiAgICAgICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHZhbHVlID0gdHJ1ZTsKICAgICAgICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHZhbHVlID0gZmFsc2U7CiAgICAgICAgZm9ybVtlbG0uaWRdID0gdmFsdWU7CiAgICB9KTsKCiAgICBudW1JbnB1dEVsZW1lbnRzLmZvckVhY2goZWxtID0+IHsKICAgICAgICBmb3JtW2VsbS5pZF0gPSBOdW1iZXIoZm9ybVtlbG0uaWRdKTsKICAgIH0pOwoKICAgIHRleHRhcmVhRWxlbWVudHMuZm9yRWFjaChlbG0gPT4gewogICAgICAgIGNvbnN0IGtleSA9IGVsbS5pZDsKICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1ba2V5XTsKICAgICAgICBmb3JtW2tleV0gPSB2YWx1ZSA9PT0gJycgPyBbXSA6IHZhbHVlLnNwbGl0KCdcbicpLm1hcCh2YWwgPT4gdmFsLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pOwogICAgfSk7CgogICAgcmV0dXJuIGZvcm07Cn0KCmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKGV2ZW50LCBkYXRhKSB7CiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOwogICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7CgogICAgY29uc3QgZm9ybSA9IGRhdGEgPyBkYXRhIDogdmFsaWRhdGVTZXR0aW5ncygpOwogICAgY29uc3QgYXBwbHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHlCdXR0b24nKTsKICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3dhaXQnOwogICAgY29uc3QgYXBwbHlCdXR0b25WYWwgPSBhcHBseUJ1dHRvbi52YWx1ZTsKICAgIGFwcGx5QnV0dG9uLnZhbHVlID0gJ+KMmyBMb2FkaW5nLi4uJzsKCiAgICBmZXRjaCgnL3BhbmVsL3VwZGF0ZS1zZXR0aW5ncycsIHsKICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKSwKICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLAogICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9CiAgICB9KQogICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkKICAgICAgICAudGhlbihkYXRhID0+IHsKCiAgICAgICAgICAgIGNvbnN0IHsgc3VjY2Vzcywgc3RhdHVzLCBtZXNzYWdlIH0gPSBkYXRhOwogICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MDEpIHsKICAgICAgICAgICAgICAgIGFsZXJ0KCfimqDvuI8gU2Vzc2lvbiBleHBpcmVkISBQbGVhc2UgbG9naW4gYWdhaW4uJyk7CiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nOwogICAgICAgICAgICB9CgogICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRocm93IG5ldyBFcnJvcihgc3RhdHVzICR7c3RhdHVzfSAtICR7bWVzc2FnZX1gKTsKICAgICAgICAgICAgaW5pdGlhdGVGb3JtKCk7CiAgICAgICAgICAgIGFsZXJ0KCfinIUgU2V0dGluZ3MgYXBwbGllZCBzdWNjZXNzZnVsbHkhJyk7CiAgICAgICAgfSkKICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcigiVXBkYXRlIHNldHRpbmdzIGVycm9yOiIsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpKQogICAgICAgIC5maW5hbGx5KCgpID0+IHsKICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7CiAgICAgICAgICAgIGFwcGx5QnV0dG9uLnZhbHVlID0gYXBwbHlCdXR0b25WYWw7CiAgICAgICAgfSk7Cn0KCmZ1bmN0aW9uIHZhbGlkYXRlU2FuY3Rpb25EbnMoKSB7CiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJhbnRpU2FuY3Rpb25ETlMiKS52YWx1ZS50cmltKCk7CgogICAgbGV0IGhvc3Q7CiAgICB0cnkgewogICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodmFsdWUpOwogICAgICAgIGhvc3QgPSB1cmwuaG9zdG5hbWU7CiAgICB9IGNhdGNoIHsKICAgICAgICBob3N0ID0gdmFsdWU7CiAgICB9CgogICAgY29uc3QgaXNWYWxpZCA9IGlzVmFsaWRIb3N0TmFtZShob3N0LCBmYWxzZSk7CiAgICBpZiAoIWlzVmFsaWQpIHsKICAgICAgICBhbGVydCgn4puUIEludmFsaWQgSVBzIG9yIERvbWFpbnMuXG7wn5GJJyArIGhvc3QpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KCiAgICByZXR1cm4gdHJ1ZTsKfQoKZnVuY3Rpb24gaXNWYWxpZEhvc3ROYW1lKHZhbHVlLCBpc0hvc3QpIHsKICAgIGNvbnN0IGlwdjZSZWdleCA9IC9eXFsoPzooPzpbYS1mQS1GMC05XXsxLDR9Oil7N31bYS1mQS1GMC05XXsxLDR9fCg/OlthLWZBLUYwLTldezEsNH06KXsxLDd9OnwoPzpbYS1mQS1GMC05XXsxLDR9Oil7MSw2fTpbYS1mQS1GMC05XXsxLDR9fCg/OlthLWZBLUYwLTldezEsNH06KXsxLDV9KD86OlthLWZBLUYwLTldezEsNH0pezEsMn18KD86W2EtZkEtRjAtOV17MSw0fTopezEsNH0oPzo6W2EtZkEtRjAtOV17MSw0fSl7MSwzfXwoPzpbYS1mQS1GMC05XXsxLDR9Oil7MSwzfSg/OjpbYS1mQS1GMC05XXsxLDR9KXsxLDR9fCg/OlthLWZBLUYwLTldezEsNH06KXsxLDJ9KD86OlthLWZBLUYwLTldezEsNH0pezEsNX18W2EtZkEtRjAtOV17MSw0fTooPzo6W2EtZkEtRjAtOV17MSw0fSl7MSw2fXw6KD86OlthLWZBLUYwLTldezEsNH0pezEsN30pXF0oPzpcLyg/OjEyWzAtOF18MVswMV0/XGR8WzAtOV0/XGQpKT8vOwogICAgY29uc3QgaXB2NFJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVxkfFswMV0/XGRcZD8pXC4pezN9KD86MjVbMC01XXwyWzAtNF1cZHxbMDFdP1xkXGQ/KSg/OlwvKD86XGR8WzEyXVxkfDNbMC0yXSkpPy87CiAgICBjb25zdCBkb21haW5SZWdleCA9IC9eKD89LnsxLDI1M30kKSg/Oig/OlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPylcLikrW2EtekEtWl17Miw2M30vOwogICAgY29uc3QgcG9ydFJlZ2V4ID0gLzooPzo2NTUzWzAtNV18NjU1WzAtMl1cZHw2NVswLTRdXGR7Mn18NlswLTRdXGR7M318WzEtNV0/XGR7MSw0fSkkLzsKICAgIGNvbnN0IGFwcGVuZCA9IGlzSG9zdCA/IHBvcnRSZWdleC5zb3VyY2UgOiAiJCI7CiAgICBjb25zdCBpcHY2UmVnID0gbmV3IFJlZ0V4cChpcHY2UmVnZXguc291cmNlICsgYXBwZW5kLCAnZ20nKTsKICAgIGNvbnN0IGlwdjRSZWcgPSBuZXcgUmVnRXhwKGlwdjRSZWdleC5zb3VyY2UgKyBhcHBlbmQsICdnbScpOwogICAgY29uc3QgZG9tYWluUmVnID0gbmV3IFJlZ0V4cChkb21haW5SZWdleC5zb3VyY2UgKyBhcHBlbmQsICdnbScpOwogICAgcmV0dXJuIGlwdjRSZWcudGVzdCh2YWx1ZSkgfHwgaXB2NlJlZy50ZXN0KHZhbHVlKSB8fCBkb21haW5SZWcudGVzdCh2YWx1ZSk7Cn0KCmZ1bmN0aW9uIHZhbGlkYXRlTXVsdGlwbGVIb3N0TmFtZXMoZWxlbWVudHMpIHsKICAgIGNvbnN0IGdldFZhbHVlID0gKGlkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWU/LnNwbGl0KCdcbicpLmZpbHRlcihCb29sZWFuKTsKCiAgICBjb25zdCBpcHMgPSBbXTsKICAgIGVsZW1lbnRzLmZvckVhY2goaWQgPT4gaXBzLnB1c2goLi4uZ2V0VmFsdWUoaWQpKSk7CiAgICBjb25zdCBpbnZhbGlkSVBzID0gaXBzPy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgJiYgIWlzVmFsaWRIb3N0TmFtZSh2YWx1ZS50cmltKCkpKTsKCiAgICBpZiAoaW52YWxpZElQcy5sZW5ndGgpIHsKICAgICAgICBhbGVydCgn4puUIEludmFsaWQgSVBzIG9yIERvbWFpbnMuXG7wn5GJIFBsZWFzZSBlbnRlciBlYWNoIElQL2RvbWFpbiBpbiBhIG5ldyBsaW5lLlxuXG4nICsgaW52YWxpZElQcy5tYXAoaXAgPT4gJ+KaoO+4jyAnICsgaXApLmpvaW4oJ1xuJykpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KCiAgICByZXR1cm4gdHJ1ZTsKfQoKZnVuY3Rpb24gdmFsaWRhdGVQcm94eUlQcygpIHsKICAgIGNvbnN0IHByb3h5SVBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3h5SVBzJykudmFsdWU/LnNwbGl0KCdcbicpLmZpbHRlcihCb29sZWFuKS5tYXAoaXAgPT4gaXAudHJpbSgpKTsKICAgIGNvbnN0IGludmFsaWRWYWx1ZXMgPSBwcm94eUlQcz8uZmlsdGVyKHZhbHVlID0+ICFpc1ZhbGlkSG9zdE5hbWUodmFsdWUpICYmICFpc1ZhbGlkSG9zdE5hbWUodmFsdWUsIHRydWUpKTsKCiAgICBpZiAoaW52YWxpZFZhbHVlcy5sZW5ndGgpIHsKICAgICAgICBhbGVydCgn4puUIEludmFsaWQgcHJveHkgSVBzLlxu8J+RiSBQbGVhc2UgZW50ZXIgZWFjaCBJUC9kb21haW4gaW4gYSBuZXcgbGluZS5cblxuJyArIGludmFsaWRWYWx1ZXMubWFwKGlwID0+ICfimqDvuI8gJyArIGlwKS5qb2luKCdcbicpKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICB9CgogICAgcmV0dXJuIHRydWU7Cn0KCmZ1bmN0aW9uIHZhbGlkYXRlV2FycEVuZHBvaW50cygpIHsKICAgIGNvbnN0IHdhcnBFbmRwb2ludHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FycEVuZHBvaW50cycpLnZhbHVlPy5zcGxpdCgnXG4nKTsKICAgIGNvbnN0IGludmFsaWRFbmRwb2ludHMgPSB3YXJwRW5kcG9pbnRzPy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgJiYgIWlzVmFsaWRIb3N0TmFtZSh2YWx1ZS50cmltKCksIHRydWUpKTsKCiAgICBpZiAoaW52YWxpZEVuZHBvaW50cy5sZW5ndGgpIHsKICAgICAgICBhbGVydCgn4puUIEludmFsaWQgZW5kcG9pbnQuXG5cbicgKyBpbnZhbGlkRW5kcG9pbnRzLm1hcChlbmRwb2ludCA9PiAn4pqg77iPICcgKyBlbmRwb2ludCkuam9pbignXG4nKSk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQoKICAgIHJldHVybiB0cnVlOwp9CgpmdW5jdGlvbiB2YWxpZGF0ZU1pbk1heCgpIHsKICAgIGNvbnN0IGdldFZhbHVlID0gKGlkKSA9PiBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUsIDEwKTsKICAgIGNvbnN0IFsKICAgICAgICBmcmFnbWVudExlbmd0aE1pbiwgZnJhZ21lbnRMZW5ndGhNYXgsCiAgICAgICAgZnJhZ21lbnRJbnRlcnZhbE1pbiwgZnJhZ21lbnRJbnRlcnZhbE1heCwKICAgICAgICBub2lzZUNvdW50TWluLCBub2lzZUNvdW50TWF4LAogICAgICAgIG5vaXNlU2l6ZU1pbiwgbm9pc2VTaXplTWF4LAogICAgICAgIG5vaXNlRGVsYXlNaW4sIG5vaXNlRGVsYXlNYXgsCgogICAgXSA9IFsKICAgICAgICAnZnJhZ21lbnRMZW5ndGhNaW4nLCAnZnJhZ21lbnRMZW5ndGhNYXgnLAogICAgICAgICdmcmFnbWVudEludGVydmFsTWluJywgJ2ZyYWdtZW50SW50ZXJ2YWxNYXgnLAogICAgICAgICdub2lzZUNvdW50TWluJywgJ25vaXNlQ291bnRNYXgnLAogICAgICAgICdub2lzZVNpemVNaW4nLCAnbm9pc2VTaXplTWF4JywKICAgICAgICAnbm9pc2VEZWxheU1pbicsICdub2lzZURlbGF5TWF4JwogICAgXS5tYXAoZ2V0VmFsdWUpOwoKICAgIGlmIChmcmFnbWVudExlbmd0aE1pbiA+PSBmcmFnbWVudExlbmd0aE1heCB8fAogICAgICAgIGZyYWdtZW50SW50ZXJ2YWxNaW4gPiBmcmFnbWVudEludGVydmFsTWF4IHx8CiAgICAgICAgbm9pc2VDb3VudE1pbiA+IG5vaXNlQ291bnRNYXggfHwKICAgICAgICBub2lzZVNpemVNaW4gPiBub2lzZVNpemVNYXggfHwKICAgICAgICBub2lzZURlbGF5TWluID4gbm9pc2VEZWxheU1heAogICAgKSB7CiAgICAgICAgYWxlcnQoJ+KblCBNaW5pbXVtIHNob3VsZCBiZSBzbWFsbGVyIG9yIGVxdWFsIHRvIE1heGltdW0hJyk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQoKICAgIHJldHVybiB0cnVlOwp9CgpmdW5jdGlvbiB2YWxpZGF0ZUNoYWluUHJveHkoKSB7CgogICAgY29uc3QgY2hhaW5Qcm94eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRQcm94eScpLnZhbHVlPy50cmltKCk7CiAgICBjb25zdCBpc1ZsZXNzID0gL3ZsZXNzOlwvXC9bXlxzQF0rQFteXHM6XSs6W15cc10rLy50ZXN0KGNoYWluUHJveHkpOwogICAgY29uc3QgaGFzU2VjdXJpdHkgPSAvc2VjdXJpdHk9Ly50ZXN0KGNoYWluUHJveHkpOwogICAgY29uc3QgaXNTb2Nrc0h0dHAgPSAvXihodHRwfHNvY2tzKTpcL1wvKD86KFteOkBdKyk6KFteOkBdKylAKT8oW146QF0rKTooXGQrKSQvLnRlc3QoY2hhaW5Qcm94eSk7CiAgICBjb25zdCBzZWN1cml0eVJlZ2V4ID0gL3NlY3VyaXR5PSh0bHN8bm9uZXxyZWFsaXR5KS87CiAgICBjb25zdCB2YWxpZFNlY3VyaXR5VHlwZSA9IHNlY3VyaXR5UmVnZXgudGVzdChjaGFpblByb3h5KTsKICAgIGNvbnN0IHZhbGlkVHJhbnNtaXNzaW9uID0gL3R5cGU9KHRjcHxncnBjfHdzKS8udGVzdChjaGFpblByb3h5KTsKCiAgICBpZiAoIShpc1ZsZXNzICYmIChoYXNTZWN1cml0eSAmJiB2YWxpZFNlY3VyaXR5VHlwZSB8fCAhaGFzU2VjdXJpdHkpICYmIHZhbGlkVHJhbnNtaXNzaW9uKSAmJiAhaXNTb2Nrc0h0dHAgJiYgY2hhaW5Qcm94eSkgewogICAgICAgIGFsZXJ0KCfim5QgSW52YWxpZCBDb25maWchXG4gLSBUaGUgY2hhaW4gcHJveHkgc2hvdWxkIGJlIFZMRVNTLCBTb2NrcyBvciBIdHRwIVxuIC0gVkxFU1MgdHJhbnNtaXNzaW9uIHNob3VsZCBiZSBHUlBDLFdTIG9yIFRDUFxuIC0gVkxFU1Mgc2VjdXJpdHkgc2hvdWxkIGJlIFRMUyxSZWFsaXR5IG9yIE5vbmVcbiAtIHNvY2tzIG9yIGh0dHAgc2hvdWxkIGJlIGxpa2U6XG4gKyAoc29ja3Mgb3IgaHR0cCk6Ly91c2VyOnBhc3NAaG9zdDpwb3J0XG4gKyAoc29ja3Mgb3IgaHR0cCk6Ly9ob3N0OnBvcnQnKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICB9CgogICAgbGV0IG1hdGNoID0gY2hhaW5Qcm94eS5tYXRjaChzZWN1cml0eVJlZ2V4KTsKICAgIGNvbnN0IHNlY3VyaXR5VHlwZSA9IG1hdGNoPy5bMV0gfHwgbnVsbDsKICAgIG1hdGNoID0gY2hhaW5Qcm94eS5tYXRjaCgvOihcZCspXD8vKTsKICAgIGNvbnN0IHZsZXNzUG9ydCA9IG1hdGNoPy5bMV0gfHwgbnVsbDsKCiAgICBpZiAoaXNWbGVzcyAmJiBzZWN1cml0eVR5cGUgPT09ICd0bHMnICYmIHZsZXNzUG9ydCAhPT0gJzQ0MycpIHsKICAgICAgICBhbGVydCgn4puUIFZMRVNTIFRMUyBwb3J0IGNhbiBiZSBvbmx5IDQ0MyB0byBiZSB1c2VkIGFzIGEgcHJveHkgY2hhaW4hJyk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQoKICAgIHJldHVybiB0cnVlOwp9CgpmdW5jdGlvbiB2YWxpZGF0ZUN1c3RvbUNkbigpIHsKICAgIGNvbnN0IGN1c3RvbUNkbkhvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tQ2RuSG9zdCcpLnZhbHVlOwogICAgY29uc3QgY3VzdG9tQ2RuU25pID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbUNkblNuaScpLnZhbHVlOwogICAgY29uc3QgY3VzdG9tQ2RuQWRkcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tQ2RuQWRkcnMnKS52YWx1ZT8uc3BsaXQoJ1xuJykuZmlsdGVyKEJvb2xlYW4pOwoKICAgIGNvbnN0IGlzQ3VzdG9tQ2RuID0gY3VzdG9tQ2RuQWRkcnMubGVuZ3RoIHx8IGN1c3RvbUNkbkhvc3QgIT09ICcnIHx8IGN1c3RvbUNkblNuaSAhPT0gJyc7CiAgICBpZiAoaXNDdXN0b21DZG4gJiYgIShjdXN0b21DZG5BZGRycy5sZW5ndGggJiYgY3VzdG9tQ2RuSG9zdCAmJiBjdXN0b21DZG5TbmkpKSB7CiAgICAgICAgYWxlcnQoJ+KblCBBbGwgIkN1c3RvbSIgZmllbGRzIHNob3VsZCBiZSBmaWxsZWQgb3IgZGVsZXRlZCB0b2dldGhlciEnKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICB9CgogICAgcmV0dXJuIHRydWU7Cn0KCmZ1bmN0aW9uIHZhbGlkYXRlWHJheU5vaXNlcyhmaWVsZHMpIHsKICAgIGNvbnN0IFttb2RlcywgcGFja2V0cywgZGVsYXlzTWluLCBkZWxheXNNYXhdID0gZmllbGRzOwogICAgY29uc3QgYmFzZTY0UmVnZXggPSAvXig/OltBLVphLXowLTkrL117NH0pKig/OltBLVphLXowLTkrL117Mn09PXxbQS1aYS16MC05Ky9dezN9PSk/JC87CiAgICBsZXQgc3VibWlzaW9uRXJyb3IgPSBmYWxzZTsKCiAgICBtb2Rlcy5mb3JFYWNoKChtb2RlLCBpbmRleCkgPT4gewogICAgICAgIGlmIChkZWxheXNNaW5baW5kZXhdID4gZGVsYXlzTWF4W2luZGV4XSkgewogICAgICAgICAgICBhbGVydCgn4puUIFRoZSBtaW5pbXVtIG5vaXNlIGRlbGF5IHNob3VsZCBiZSBzbWFsbGVyIG9yIGVxdWFsIHRvIG1heGltdW0hJyk7CiAgICAgICAgICAgIHN1Ym1pc2lvbkVycm9yID0gdHJ1ZTsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KCiAgICAgICAgc3dpdGNoIChtb2RlKSB7CgogICAgICAgICAgICBjYXNlICdiYXNlNjQnOiB7CiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NFJlZ2V4LnRlc3QocGFja2V0c1tpbmRleF0pKSB7CiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+KblCBUaGUgQmFzZTY0IG5vaXNlIHBhY2tldCBpcyBub3QgYSB2YWxpZCBiYXNlNjQgdmFsdWUhJyk7CiAgICAgICAgICAgICAgICAgICAgc3VibWlzaW9uRXJyb3IgPSB0cnVlOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNhc2UgJ3JhbmQnOiB7CiAgICAgICAgICAgICAgICBpZiAoISgvXlxkKy1cZCskLy50ZXN0KHBhY2tldHNbaW5kZXhdKSkpIHsKICAgICAgICAgICAgICAgICAgICBhbGVydCgn4puUIFRoZSBSYW5kb20gbm9pc2UgcGFja2V0IHNob3VsZCBiZSBhIHJhbmdlIGxpa2UgMC0xMCBvciAxMC0zMCEnKTsKICAgICAgICAgICAgICAgICAgICBzdWJtaXNpb25FcnJvciA9IHRydWU7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgY29uc3QgW21pbiwgbWF4XSA9IHBhY2tldHNbaW5kZXhdLnNwbGl0KCItIikubWFwKE51bWJlcik7CiAgICAgICAgICAgICAgICBpZiAobWluID4gbWF4KSB7CiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+KblCBUaGUgbWluaW11bSBSYW5kb20gbm9pc2UgcGFja2V0IHNob3VsZCBiZSBzbWFsbGVyIG9yIGVxdWFsIHRvIG1heGltdW0hJyk7CiAgICAgICAgICAgICAgICAgICAgc3VibWlzaW9uRXJyb3IgPSB0cnVlOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNhc2UgJ2hleCc6IHsKICAgICAgICAgICAgICAgIGlmICghKC9eKD89KD86WzAtOUEtRmEtZl17Mn0pKiQpWzAtOUEtRmEtZl0rJC8udGVzdChwYWNrZXRzW2luZGV4XSkpKSB7CiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+KblCBUaGUgSGV4IG5vaXNlIHBhY2tldCBpcyBub3QgYSB2YWxpZCBoZXggdmFsdWUhIEl0IHNob3VsZCBoYXZlIGV2ZW4gbGVuZ3RoIGFuZCBjb25zaXN0ZWQgb2YgMC05LCBhLWYgYW5kIEEtRi4nKTsKICAgICAgICAgICAgICAgICAgICBzdWJtaXNpb25FcnJvciA9IHRydWU7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9KTsKCiAgICByZXR1cm4gIXN1Ym1pc2lvbkVycm9yOwp9CgpmdW5jdGlvbiBsb2dvdXQoZXZlbnQpIHsKICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7CgogICAgZmV0Y2goJy9sb2dvdXQnLCB7IG1ldGhvZDogJ0dFVCcsIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pCiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKQogICAgICAgIC50aGVuKGRhdGEgPT4gewogICAgICAgICAgICBjb25zdCB7IHN1Y2Nlc3MsIHN0YXR1cywgbWVzc2FnZSB9ID0gZGF0YTsKICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aHJvdyBuZXcgRXJyb3IoYHN0YXR1cyAke3N0YXR1c30gLSAke21lc3NhZ2V9YCk7CiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7CiAgICAgICAgfSkKICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcigiTG9nb3V0IGVycm9yOiIsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpKTsKfQoKZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgiLnRvZ2dsZS1wYXNzd29yZCIpLmZvckVhY2godG9nZ2xlID0+IHsKICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsIGZ1bmN0aW9uICgpIHsKICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZzsKICAgICAgICBjb25zdCBpc1Bhc3N3b3JkID0gaW5wdXQudHlwZSA9PT0gInBhc3N3b3JkIjsKICAgICAgICBpbnB1dC50eXBlID0gaXNQYXNzd29yZCA/ICJ0ZXh0IiA6ICJwYXNzd29yZCI7CiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IGlzUGFzc3dvcmQgPyAidmlzaWJpbGl0eSIgOiAidmlzaWJpbGl0eV9vZmYiOwogICAgfSk7Cn0pOwoKZnVuY3Rpb24gcmVzZXRQYXNzd29yZChldmVudCkgewogICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsKICAgIGNvbnN0IHJlc2V0UGFzc01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0UGFzc01vZGFsJyk7CiAgICBjb25zdCBuZXdQYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Bhc3N3b3JkJyk7CiAgICBjb25zdCBjb25maXJtUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtUGFzc3dvcmQnKTsKICAgIGNvbnN0IHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRFcnJvcicpOwogICAgY29uc3QgbmV3UGFzc3dvcmQgPSBuZXdQYXNzd29yZElucHV0LnZhbHVlOwogICAgY29uc3QgY29uZmlybVBhc3N3b3JkID0gY29uZmlybVBhc3N3b3JkSW5wdXQudmFsdWU7CgogICAgaWYgKG5ld1Bhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQpIHsKICAgICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2giOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KCiAgICBjb25zdCBoYXNDYXBpdGFsTGV0dGVyID0gL1tBLVpdLy50ZXN0KG5ld1Bhc3N3b3JkKTsKICAgIGNvbnN0IGhhc051bWJlciA9IC9bMC05XS8udGVzdChuZXdQYXNzd29yZCk7CiAgICBjb25zdCBpc0xvbmdFbm91Z2ggPSBuZXdQYXNzd29yZC5sZW5ndGggPj0gODsKCiAgICBpZiAoIShoYXNDYXBpdGFsTGV0dGVyICYmIGhhc051bWJlciAmJiBpc0xvbmdFbm91Z2gpKSB7CiAgICAgICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICfimqDvuI8gUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBjYXBpdGFsIGxldHRlciwgb25lIG51bWJlciwgYW5kIGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLic7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQoKICAgIGZldGNoKCcvcGFuZWwvcmVzZXQtcGFzc3dvcmQnLCB7CiAgICAgICAgbWV0aG9kOiAnUE9TVCcsCiAgICAgICAgaGVhZGVyczogewogICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nCiAgICAgICAgfSwKICAgICAgICBib2R5OiBuZXdQYXNzd29yZCwKICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJwogICAgfSkKICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpCiAgICAgICAgLnRoZW4oZGF0YSA9PiB7CgogICAgICAgICAgICBjb25zdCB7IHN1Y2Nlc3MsIHN0YXR1cywgbWVzc2FnZSB9ID0gZGF0YTsKICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7CiAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gYOKaoO+4jyAke21lc3NhZ2V9YDsKICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgc3RhdHVzICR7c3RhdHVzfSAtICR7bWVzc2FnZX1gKTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgYWxlcnQoIuKchSBQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc3NmdWxseSEg8J+RjSIpOwogICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nOwoKICAgICAgICB9KQogICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCJSZXNldCBwYXNzd29yZCBlcnJvcjoiLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKSkKICAgICAgICAuZmluYWxseSgoKSA9PiB7CiAgICAgICAgICAgIHJlc2V0UGFzc01vZGFsLnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAiIjsKICAgICAgICB9KTsKfQoKZnVuY3Rpb24gcmVuZGVyUG9ydHNCbG9jayhwb3J0cykgewogICAgbGV0IG5vbmVUbHNQb3J0c0Jsb2NrID0gJycsIHRsc1BvcnRzQmxvY2sgPSAnJzsKICAgIGNvbnN0IHRvdGFsUG9ydHMgPSBbCiAgICAgICAgLi4uKHdpbmRvdy5vcmlnaW4uaW5jbHVkZXMoJ3dvcmtlcnMuZGV2JykgPyBkZWZhdWx0SHR0cFBvcnRzIDogW10pLAogICAgICAgIC4uLmRlZmF1bHRIdHRwc1BvcnRzCiAgICBdOwoKICAgIHRvdGFsUG9ydHMuZm9yRWFjaChwb3J0ID0+IHsKICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBwb3J0cy5pbmNsdWRlcyhwb3J0KSA/ICdjaGVja2VkJyA6ICcnOwogICAgICAgIGxldCBjbHNzID0gJycsIGhhbmRsZXIgPSAnJzsKICAgICAgICBpZiAoZGVmYXVsdEh0dHBzUG9ydHMuaW5jbHVkZXMocG9ydCkpIHsKICAgICAgICAgICAgY2xzcyA9ICdjbGFzcz0iaHR0cHMiJzsKICAgICAgICAgICAgaGFuZGxlciA9ICdvbmNsaWNrPSJoYW5kbGVQb3J0Q2hhbmdlKGV2ZW50KSInOwogICAgICAgIH0KCiAgICAgICAgY29uc3QgcG9ydEJsb2NrID0gYAogICAgICAgICAgICA8ZGl2IGNsYXNzPSJyb3V0aW5nIj4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgbmFtZT0ke3BvcnR9ICR7Y2xzc30gdmFsdWU9InRydWUiICR7aXNDaGVja2VkfSAke2hhbmRsZXJ9PgogICAgICAgICAgICAgICAgPGxhYmVsPiR7cG9ydH08L2xhYmVsPgogICAgICAgICAgICA8L2Rpdj5gOwoKICAgICAgICBkZWZhdWx0SHR0cHNQb3J0cy5pbmNsdWRlcyhwb3J0KQogICAgICAgICAgICA/IHRsc1BvcnRzQmxvY2sgKz0gcG9ydEJsb2NrCiAgICAgICAgICAgIDogbm9uZVRsc1BvcnRzQmxvY2sgKz0gcG9ydEJsb2NrOwogICAgfSk7CgogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRscy1wb3J0cyIpLmlubmVySFRNTCA9IHRsc1BvcnRzQmxvY2s7CiAgICBpZiAobm9uZVRsc1BvcnRzQmxvY2spIHsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibm9uLXRscy1wb3J0cyIpLmlubmVySFRNTCA9IG5vbmVUbHNQb3J0c0Jsb2NrOwogICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJub25lLXRscyIpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7CiAgICB9Cn0KCmZ1bmN0aW9uIGFkZFVkcE5vaXNlKGlzTWFudWFsLCBub2lzZUluZGV4LCB1ZHBOb2lzZSkgewogICAgY29uc3QgaW5kZXggPSBub2lzZUluZGV4ID8/IGdsb2JhbFRoaXMueHJheU5vaXNlQ291bnQ7CiAgICBjb25zdCBub2lzZSA9IHVkcE5vaXNlIHx8IHsKICAgICAgICB0eXBlOiAncmFuZCcsCiAgICAgICAgcGFja2V0OiAnNTAtMTAwJywKICAgICAgICBkZWxheTogJzEtNScsCiAgICAgICAgY291bnQ6IDUKICAgIH07CgogICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gImlubmVyLWNvbnRhaW5lciI7CiAgICBjb250YWluZXIuaWQgPSBgdWRwLW5vaXNlLSR7aW5kZXggKyAxfWA7CgogICAgY29udGFpbmVyLmlubmVySFRNTCA9IGAKICAgICAgICA8ZGl2IGNsYXNzPSJoZWFkZXItY29udGFpbmVyIj4KICAgICAgICAgICAgPGg0Pk5vaXNlICR7aW5kZXggKyAxfTwvaDQ+CiAgICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iZGVsZXRlLW5vaXNlIj4KICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJmYSBmYS1taW51cy1jaXJjbGUgZmEtMngiIGFyaWEtaGlkZGVuPSJ0cnVlIj48L2k+CiAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgIAogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9InNlY3Rpb24iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgPGxhYmVsPvCfmLXigI3wn5KrIHYycmF5IE1vZGU8L2xhYmVsPgogICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9InVkcFhyYXlOb2lzZU1vZGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJiYXNlNjQiICR7bm9pc2UudHlwZSA9PT0gJ2Jhc2U2NCcgPyAnc2VsZWN0ZWQnIDogJyd9PkJhc2U2NDwvb3B0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJyYW5kIiAke25vaXNlLnR5cGUgPT09ICdyYW5kJyA/ICdzZWxlY3RlZCcgOiAnJ30+UmFuZG9tPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9InN0ciIgJHtub2lzZS50eXBlID09PSAnc3RyJyA/ICdzZWxlY3RlZCcgOiAnJ30+U3RyaW5nPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImhleCIgJHtub2lzZS50eXBlID09PSAnaGV4JyA/ICdzZWxlY3RlZCcgOiAnJ30+SGV4PC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICA8bGFiZWw+8J+TpSBOb2lzZSBQYWNrZXQ8L2xhYmVsPgogICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0idWRwWHJheU5vaXNlUGFja2V0IiB2YWx1ZT0iJHtub2lzZS5wYWNrZXR9Ij4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250cm9sIj4KICAgICAgICAgICAgICAgIDxsYWJlbD7wn5WeIE5vaXNlIERlbGF5PC9sYWJlbD4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1pbi1tYXgiPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIG5hbWU9InVkcFhyYXlOb2lzZURlbGF5TWluIgogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0iJHtub2lzZS5kZWxheS5zcGxpdCgnLScpWzBdfSIgbWluPSIxIiByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLSA8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgbmFtZT0idWRwWHJheU5vaXNlRGVsYXlNYXgiCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSIke25vaXNlLmRlbGF5LnNwbGl0KCctJylbMV19IiBtaW49IjEiIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRyb2wiPgogICAgICAgICAgICAgICAgPGxhYmVsPvCfjprvuI8gTm9pc2UgQ291bnQ8L2xhYmVsPgogICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBuYW1lPSJ1ZHBYcmF5Tm9pc2VDb3VudCIgdmFsdWU9IiR7bm9pc2UuY291bnR9IiBtaW49IjEiIHJlcXVpcmVkPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PmA7CgogICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoIi5kZWxldGUtbm9pc2UiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVVkcE5vaXNlKTsKICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCJzZWxlY3QiKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBnZW5lcmF0ZVVkcE5vaXNlKTsKCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibm9pc2VzIikuYXBwZW5kKGNvbnRhaW5lcik7CiAgICBpZiAoaXNNYW51YWwpIGVuYWJsZUFwcGx5QnV0dG9uKCk7CiAgICBnbG9iYWxUaGlzLnhyYXlOb2lzZUNvdW50Kys7Cn0KCmZ1bmN0aW9uIGdlbmVyYXRlVWRwTm9pc2UoZXZlbnQpIHsKICAgIGNvbnN0IGdlbmVyYXRlUmFuZG9tQmFzZTY0ID0gbGVuZ3RoID0+IHsKICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KE1hdGguY2VpbChsZW5ndGggKiAzIC8gNCkpOwogICAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpOwogICAgICAgIGxldCBiYXNlNjQgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYXJyYXkpKTsKICAgICAgICByZXR1cm4gYmFzZTY0LnNsaWNlKDAsIGxlbmd0aCk7CiAgICB9CgogICAgY29uc3QgZ2VuZXJhdGVSYW5kb21IZXggPSBsZW5ndGggPT4gewogICAgICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIDIpKTsKICAgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycmF5KTsKICAgICAgICBsZXQgaGV4ID0gWy4uLmFycmF5XS5tYXAoYiA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTsKICAgICAgICByZXR1cm4gaGV4LnNsaWNlKDAsIGxlbmd0aCk7CiAgICB9CgogICAgY29uc3QgZ2VuZXJhdGVSYW5kb21TdHJpbmcgPSBsZW5ndGggPT4gewogICAgICAgIGNvbnN0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JzsKICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7CiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSksIHggPT4gY2hhcnNbeCAlIGNoYXJzLmxlbmd0aF0pLmpvaW4oJycpOwogICAgfTsKCiAgICBjb25zdCBub2lzZVBhY2tldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCIuaW5uZXItY29udGFpbmVyIikucXVlcnlTZWxlY3RvcignW25hbWU9InVkcFhyYXlOb2lzZVBhY2tldCJdJyk7CgogICAgc3dpdGNoIChldmVudC50YXJnZXQudmFsdWUpIHsKICAgICAgICBjYXNlICdiYXNlNjQnOgogICAgICAgICAgICBub2lzZVBhY2tldC52YWx1ZSA9IGdlbmVyYXRlUmFuZG9tQmFzZTY0KDY0KTsKICAgICAgICAgICAgYnJlYWs7CgogICAgICAgIGNhc2UgJ3JhbmQnOgogICAgICAgICAgICBub2lzZVBhY2tldC52YWx1ZSA9ICI1MC0xMDAiOwogICAgICAgICAgICBicmVhazsKCiAgICAgICAgY2FzZSAnaGV4JzoKICAgICAgICAgICAgbm9pc2VQYWNrZXQudmFsdWUgPSBnZW5lcmF0ZVJhbmRvbUhleCg2NCk7CiAgICAgICAgICAgIGJyZWFrOwoKICAgICAgICBjYXNlICdzdHInOgogICAgICAgICAgICBub2lzZVBhY2tldC52YWx1ZSA9IGdlbmVyYXRlUmFuZG9tU3RyaW5nKDY0KTsKICAgICAgICAgICAgYnJlYWs7CiAgICB9Cn0KCmZ1bmN0aW9uIGRlbGV0ZVVkcE5vaXNlKGV2ZW50KSB7CiAgICBpZiAoZ2xvYmFsVGhpcy54cmF5Tm9pc2VDb3VudCA9PT0gMSkgewogICAgICAgIGFsZXJ0KCfim5QgWW91IGNhbm5vdCBkZWxldGUgYWxsIG5vaXNlcyEnKTsKICAgICAgICByZXR1cm47CiAgICB9CgogICAgY29uc3QgY29uZmlybVJlc2V0ID0gY29uZmlybSgn4pqg77iPIFRoaXMgd2lsbCBkZWxldGUgdGhlIG5vaXNlLlxuXG7inZMgQXJlIHlvdSBzdXJlPycpOwogICAgaWYgKCFjb25maXJtUmVzZXQpIHJldHVybjsKICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCIuaW5uZXItY29udGFpbmVyIikucmVtb3ZlKCk7CiAgICBlbmFibGVBcHBseUJ1dHRvbigpOwogICAgZ2xvYmFsVGhpcy54cmF5Tm9pc2VDb3VudC0tOwp9CgpmdW5jdGlvbiByZW5kZXJVZHBOb2lzZUJsb2NrKHhyYXlVZHBOb2lzZXMpIHsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJub2lzZXMiKS5pbm5lckhUTUwgPSAnJzsKICAgIHhyYXlVZHBOb2lzZXMuZm9yRWFjaCgobm9pc2UsIGluZGV4KSA9PiB7CiAgICAgICAgYWRkVWRwTm9pc2UoZmFsc2UsIGluZGV4LCBub2lzZSk7CiAgICB9KTsKICAgIGdsb2JhbFRoaXMueHJheU5vaXNlQ291bnQgPSB4cmF5VWRwTm9pc2VzLmxlbmd0aDsKfTwvc2NyaXB0Pgo8L2JvZHk+Cgo8L2h0bWw+";
  const html = new TextDecoder("utf-8").decode(Uint8Array.from(atob(encodedHtml), (c) => c.charCodeAt(0)));
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
async function renderLogin(request, env) {
  const auth = await Authenticate(request, env);
  if (auth) return Response.redirect(`${urlOrigin}/panel`, 302);
  const encodedHtml = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPgogICAgPHRpdGxlPkJQQiBQYW5lbCB2My4zLjE4PC90aXRsZT4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iL2Zhdmljb24uaWNvIiAvPgogICAgPGxpbmsKICAgICAgICBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrUm91bmRlZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwJmljb25fbmFtZXM9bG9naW4sdmlzaWJpbGl0eSx2aXNpYmlsaXR5X29mZiZkaXNwbGF5PWJsb2NrIgogICAgICAgIHJlbD0ic3R5bGVzaGVldCIgLz4KICAgIDxzdHlsZT46cm9vdCB7CiAgICAtLWNvbG9yOiBibGFjazsKICAgIC0tcHJpbWFyeS1jb2xvcjogIzA5NjM5ZjsKICAgIC0taGVhZGVyLWNvbG9yOiAjMDk2MzlmOwogICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOwogICAgLS1mb3JtLWJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7CiAgICAtLWxhYmxlLXRleHQtY29sb3I6ICMzMzM7CiAgICAtLWgyLWNvbG9yOiAjM2IzYjNiOwogICAgLS1ib3JkZXItY29sb3I6ICNkZGQ7CiAgICAtLWlucHV0LWJhY2tncm91bmQtY29sb3I6IHdoaXRlOwogICAgLS1oZWFkZXItc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOwp9CgpodG1sLApib2R5IHsKICAgIGhlaWdodDogMTAwJTsKICAgIG1hcmdpbjogMDsKfQoKYm9keSB7CiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpOwogICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgdGV4dC1hbGlnbjogY2VudGVyOwp9Cgpib2R5LmRhcmstbW9kZSB7CiAgICAtLWNvbG9yOiB3aGl0ZTsKICAgIC0tcHJpbWFyeS1jb2xvcjogIzA5NjM5RjsKICAgIC0taGVhZGVyLWNvbG9yOiAjMzQ5OERCOwogICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyOwogICAgLS1mb3JtLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7CiAgICAtLWxhYmxlLXRleHQtY29sb3I6ICNERkRGREY7CiAgICAtLWgyLWNvbG9yOiAjRDVENUQ1OwogICAgLS1ib3JkZXItY29sb3I6ICMzNTM1MzU7CiAgICAtLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7CiAgICAtLWhlYWRlci1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7Cn0KCi5jb250YWluZXIgewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiA1MCU7CiAgICBsZWZ0OiA1MCU7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsKICAgIHdpZHRoOiA5MCU7Cn0KCmgxIHsKICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpOwogICAgdGV4dC1zaGFkb3c6IHZhcigtLWhlYWRlci1zaGFkb3cpOwp9CgouaWNvbiB7CiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwogICAgaGVpZ2h0OiAzcmVtOwp9CgpoMiB7CiAgICBjb2xvcjogdmFyKC0taDItY29sb3IpCn0KCi5mb3JtLWNvbnRhaW5lciB7CiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJhY2tncm91bmQtY29sb3IpOwogICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsKICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7CiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpOwogICAgcGFkZGluZzogMjBweDsKICAgIGdhcDogMjBweDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwp9CgoubG9naW4tZm9ybSB7CiAgICBkaXNwbGF5OiBmbGV4OwogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgIGdhcDogOHB4Owp9CgouZm9ybS1jb250cm9sIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgZ2FwOiAxNnB4Owp9CgpsYWJlbCB7CiAgICBmb250LXdlaWdodDogYm9sZDsKICAgIGNvbG9yOiB2YXIoLS1sYWJsZS10ZXh0LWNvbG9yKTsKfQoKLnBhc3N3b3JkLXdyYXBwZXIgewogICAgZGlzcGxheTogZmxleDsKICAgIHdpZHRoOiAxMDAlOwogICAgcG9zaXRpb246IHJlbGF0aXZlOwp9CgoucGFzc3dvcmQtd3JhcHBlciBpbnB1dFt0eXBlPXBhc3N3b3JkXSwKLnBhc3N3b3JkLXdyYXBwZXIgaW5wdXRbdHlwZT10ZXh0XSB7CiAgICB3aWR0aDogMTAwJTsKICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBtYXJnaW46IDA7Cn0KCi50b2dnbGUtcGFzc3dvcmQgewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiA1MCU7CiAgICByaWdodDogMTBweDsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIHVzZXItc2VsZWN0OiBub25lOwogICAgY29sb3I6IGRhcmtncmF5Owp9CgppbnB1dFt0eXBlPSJ0ZXh0Il0sCmlucHV0W3R5cGU9InBhc3N3b3JkIl0gewogICAgcGFkZGluZzogMTBweDsKICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7CiAgICBib3JkZXItcmFkaXVzOiAxMHB4OwogICAgY29sb3I6IHZhcigtLWxhYmxlLXRleHQtY29sb3IpOwogICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcik7Cn0KCi5oaW50IHsKICAgIGNvbG9yOiByZWQ7CiAgICBtYXJnaW4tYm90dG9tOiAxMHB4Owp9CgpidXR0b24gewogICAgZ2FwOiAxMHB4OwogICAgZGlzcGxheTogZmxleDsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIHdpZHRoOiAxMDAlOwogICAgcGFkZGluZzogMTJweDsKICAgIGZvbnQtc2l6ZTogMS4xcmVtOwogICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgIGJvcmRlcjogbm9uZTsKICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7CiAgICBjb2xvcjogd2hpdGU7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOwp9CgouYnV0dG9uOmhvdmVyLAouYnV0dG9uOmZvY3VzIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7CiAgICBib3gtc2hhZG93OiAwIDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsKfQoKLmJ1dHRvbjphY3RpdmUgewogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7CiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpOwp9CgoubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHsKICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOgogICAgICAgICdGSUxMJyAxLAogICAgICAgICd3Z2h0JyA0MDAsCiAgICAgICAgJ0dSQUQnIDAsCiAgICAgICAgJ29wc3onIDI0Cn0KCkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHsKICAgIC5jb250YWluZXIgewogICAgICAgIHdpZHRoOiA3MCU7CiAgICB9Cn0KCkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHsKICAgIC5jb250YWluZXIgewogICAgICAgIHdpZHRoOiA1MCU7CiAgICB9Cn0KCkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHsKICAgIC5jb250YWluZXIgewogICAgICAgIHdpZHRoOiAzMCU7CiAgICB9Cn08L3N0eWxlPgo8L2hlYWQ+Cgo8Ym9keT4KICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGgxPgogICAgICAgICAgICA8aW1nIGNsYXNzPSJpY29uIiBzcmM9Ii9mYXZpY29uLmljbyIgYWx0PSJCUEIgTG9nbyI+IEJQQiBQYW5lbCA8c3BhbiBpZD0icGFuZWwtdmVyc2lvbiIKICAgICAgICAgICAgICAgIHN0eWxlPSJmb250LXNpemU6IHNtYWxsZXI7Ij4KICAgICAgICAgICAgICAgIHYzLjMuMTgKICAgICAgICAgICAgPC9zcGFuPgogICAgICAgIDwvaDE+CiAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1jb250YWluZXIiPgogICAgICAgICAgICA8aDI+VXNlciBMb2dpbjwvaDI+CiAgICAgICAgICAgIDxmb3JtIGlkPSJsb2dpbkZvcm0iIGNsYXNzPSJsb2dpbi1mb3JtIj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCI+CiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0icGFzc3dvcmQiPlBhc3N3b3JkPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJwYXNzd29yZC13cmFwcGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InBhc3N3b3JkIiBpZD0icGFzc3dvcmQiIG5hbWU9InBhc3N3b3JkIiByZXF1aXJlZD4KICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9InRvZ2dsZVBhc3N3b3JkIiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHRvZ2dsZS1wYXNzd29yZCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5X29mZgogICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgaWQ9InBhc3N3b3JkRXJyb3IiIGNsYXNzPSJoaW50Ij48L2Rpdj4KICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0ic3VibWl0IiBjbGFzcz0iYnV0dG9uIj4KICAgICAgICAgICAgICAgICAgICBMb2dpbgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPgogICAgICAgICAgICAgICAgICAgICAgICBsb2dpbgogICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICA8L2Zvcm0+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICAgIDxzY3JpcHQ+bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJykgPT09ICdlbmFibGVkJyAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5Gb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7CiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOwogICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZTsKCiAgICB0cnkgewogICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9sb2dpbi9hdXRoZW50aWNhdGUnLCB7CiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICAgICAgICBoZWFkZXJzOiB7CiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGJvZHk6IHBhc3N3b3JkCiAgICAgICAgfSk7CgogICAgICAgIGNvbnN0IHsgc3VjY2Vzcywgc3RhdHVzLCBtZXNzYWdlIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7CiAgICAgICAgaWYgKCFzdWNjZXNzKSB7CiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicGFzc3dvcmRFcnJvciIpOwogICAgICAgICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ+KaoO+4jyBXcm9uZyBQYXNzd29yZCEnOwogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExvZ2luIGZhaWxlZCB3aXRoIHN0YXR1cyAke3N0YXR1c306ICR7bWVzc2FnZX1gKTsKICAgICAgICB9CgogICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wYW5lbCc7CiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpOwogICAgfQp9KTsKCmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJ0b2dnbGVQYXNzd29yZCIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgZnVuY3Rpb24gKCkgewogICAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJwYXNzd29yZCIpOwogICAgY29uc3QgaXNQYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudHlwZSA9PT0gInBhc3N3b3JkIjsKICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9IGlzUGFzc3dvcmQgPyAidGV4dCIgOiAicGFzc3dvcmQiOwogICAgdGhpcy50ZXh0Q29udGVudCA9IGlzUGFzc3dvcmQgPyAidmlzaWJpbGl0eV9vZmYiIDogInZpc2liaWxpdHkiOwp9KTs8L3NjcmlwdD4KPC9ib2R5PgoKPC9odG1sPg==";
  const html = new TextDecoder("utf-8").decode(Uint8Array.from(atob(encodedHtml), (c) => c.charCodeAt(0)));
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
async function renderSecrets() {
  const encodedHtml = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPgogICAgPHRpdGxlPkJQQiBQYW5lbCB2My4zLjE4PC90aXRsZT4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iL2Zhdmljb24uaWNvIiAvPgogICAgPGxpbmsKICAgICAgICBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrUm91bmRlZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwJmljb25fbmFtZXM9Y29udGVudF9jb3B5LHJlZnJlc2gmZGlzcGxheT1ibG9jayIKICAgICAgICByZWw9InN0eWxlc2hlZXQiIC8+CiAgICA8c3R5bGU+OnJvb3QgewogICAgLS1jb2xvcjogYmxhY2s7CiAgICAtLXByaW1hcnktY29sb3I6ICMwOTYzOWY7CiAgICAtLWhlYWRlci1jb2xvcjogIzA5NjM5ZjsKICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsKICAgIC0tZm9ybS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OwogICAgLS1sYWJsZS10ZXh0LWNvbG9yOiAjMzMzOwogICAgLS1oMi1jb2xvcjogIzNiM2IzYjsKICAgIC0tYm9yZGVyLWNvbG9yOiAjZGRkOwogICAgLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsKICAgIC0taGVhZGVyLXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTsKfQoKYm9keSB7CiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpOwogICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7CiAgICBjb2xvcjogdmFyKC0tbGFibGUtdGV4dC1jb2xvcik7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Cn0KCmJvZHkuZGFyay1tb2RlIHsKICAgIC0tY29sb3I6IHdoaXRlOwogICAgLS1wcmltYXJ5LWNvbG9yOiAjMDk2MzlGOwogICAgLS1oZWFkZXItY29sb3I6ICMzNDk4REI7CiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7CiAgICAtLWZvcm0tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjsKICAgIC0tbGFibGUtdGV4dC1jb2xvcjogI0RGREZERjsKICAgIC0taDItY29sb3I6ICNENUQ1RDU7CiAgICAtLWJvcmRlci1jb2xvcjogIzM1MzUzNTsKICAgIC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTsKICAgIC0taGVhZGVyLXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsKfQoKLmNvbnRhaW5lciB7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICB0b3A6IDUwJTsKICAgIGxlZnQ6IDUwJTsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgd2lkdGg6IDkwJTsKICAgIHBhZGRpbmc6IDIwcHg7Cn0KCmgxIHsKICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpOwogICAgdGV4dC1zaGFkb3c6IHZhcigtLWhlYWRlci1zaGFkb3cpOwp9CgouaWNvbiB7CiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwogICAgaGVpZ2h0OiAzcmVtOwp9CgpoMiB7CiAgICBjb2xvcjogdmFyKC0taDItY29sb3IpCn0KCmgzIHsKICAgIGNvbG9yOiB2YXIoLS1sYWJsZS10ZXh0LWNvbG9yKTsKfQoKLmZvcm0tY29udGFpbmVyIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgZ2FwOiAyMHB4OwogICAgYmFja2dyb3VuZDogdmFyKC0tZm9ybS1iYWNrZ3JvdW5kLWNvbG9yKTsKICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7CiAgICBib3JkZXItcmFkaXVzOiAyOHB4OwogICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsKICAgIHBhZGRpbmc6IDIwcHg7Cn0KCi52YWx1ZS1jb250YWluZXIgewogICAgY29sb3I6IHZhcigtLWxhYmxlLXRleHQtY29sb3IpOwogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICBnYXA6IDhweDsKfQoKLm91dHB1dC1jb250YWluZXIgewogICAgd2lkdGg6IDEwMCU7CiAgICBwYWRkaW5nOiA4cHg7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yKTsKICAgIGNvbG9yOiB2YXIoLS1sYWJsZS10ZXh0LWNvbG9yKTsKICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7CiAgICBib3JkZXItcmFkaXVzOiAxMHB4Owp9CgouY29weS1pY29uIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7Cn0KCi5jb3B5LWljb246aG92ZXIgewogICAgY29sb3I6ICMyOTgwYjk7Cn0KCmJ1dHRvbiB7CiAgICBnYXA6IDEwcHg7CiAgICBkaXNwbGF5OiBmbGV4OwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgd2lkdGg6IDEwMCU7CiAgICBwYWRkaW5nOiAxMnB4OwogICAgZm9udC1zaXplOiAxLjFyZW07CiAgICBmb250LXdlaWdodDogNjAwOwogICAgYm9yZGVyOiBub25lOwogICAgYm9yZGVyLXJhZGl1czogMTBweDsKICAgIGNvbG9yOiB3aGl0ZTsKICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOwogICAgY3Vyc29yOiBwb2ludGVyOwogICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7Cn0KCi5idXR0b246aG92ZXIsCi5idXR0b246Zm9jdXMgewogICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTsKICAgIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOwp9CgouYnV0dG9uOmFjdGl2ZSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsKICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7Cn0KCi5idXR0b246YWN0aXZlIHsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOwogICAgYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTsKfQoKLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczoKICAgICAgICAnRklMTCcgMCwKICAgICAgICAnd2dodCcgNDAwLAogICAgICAgICdHUkFEJyAwLAogICAgICAgICdvcHN6JyAyNAp9CgoucmVmcmVzaC1nZW8tbG9jYXRpb24gewogICAgYmFja2dyb3VuZDogbm9uZTsKICAgIG1hcmdpbjogMDsKICAgIGJvcmRlcjogbm9uZTsKICAgIGN1cnNvcjogcG9pbnRlcjsKfQoKQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgewogICAgLmNvbnRhaW5lciB7CiAgICAgICAgd2lkdGg6IDcwJTsKICAgIH0KfQoKQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgewogICAgLmNvbnRhaW5lciB7CiAgICAgICAgd2lkdGg6IDUwJTsKICAgIH0KfQoKQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgewogICAgLmNvbnRhaW5lciB7CiAgICAgICAgd2lkdGg6IDQwJTsKICAgIH0KfTwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KICAgICAgICA8aDE+CiAgICAgICAgICAgIDxpbWcgY2xhc3M9Imljb24iIHNyYz0iL2Zhdmljb24uaWNvIiBhbHQ9IkJQQiBMb2dvIj4gQlBCIFBhbmVsIDxzcGFuIGlkPSJwYW5lbC12ZXJzaW9uIgogICAgICAgICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZTogc21hbGxlcjsiPgogICAgICAgICAgICAgICAgdjMuMy4xOAogICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgPC9oMT4KICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWNvbnRhaW5lciI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InZhbHVlLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICA8aDI+U2VjcmV0cyBnZW5lcmF0b3I8L2gyPgogICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCIgb25jbGljaz0iZ2VuZXJhdGVDcmVkZW50aWFscygpIj4KICAgICAgICAgICAgICAgICAgICByZWZyZXNoCiAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgPGgzPlJhbmRvbSBVVUlEPC9oMz4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InZhbHVlLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3V0cHV0LWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSJ1dWlkIiBjbGFzcz0ib3V0cHV0Ij48L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9Im1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCIgb25jbGljaz0iY29weVRvQ2xpcGJvYXJkKCd1dWlkJykiPgogICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X2NvcHkKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICA8aDM+UmFuZG9tIFRyb2phbiBQYXNzd29yZDwvaDM+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ2YWx1ZS1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im91dHB1dC1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0idHItcGFzc3dvcmQiIGNsYXNzPSJvdXRwdXQiPjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIiBvbmNsaWNrPSJjb3B5VG9DbGlwYm9hcmQoJ3RyLXBhc3N3b3JkJykiPgogICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X2NvcHkKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICA8aDM+UmFuZG9tIFN1YnNjcmlwdGlvbiBVUkkgcGF0aDwvaDM+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ2YWx1ZS1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im91dHB1dC1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0ic3ViLXBhdGgiIGNsYXNzPSJvdXRwdXQiPjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIiBvbmNsaWNrPSJjb3B5VG9DbGlwYm9hcmQoJ3N1Yi1wYXRoJykiPgogICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X2NvcHkKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImJ1dHRvbiIgY2xhc3M9ImJ1dHRvbiIgb25jbGljaz0iY29weVRvQ2xpcGJvYXJkKCkiPgogICAgICAgICAgICAgICAgQ29weSBhbGwKICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQiPgogICAgICAgICAgICAgICAgICAgIGNvbnRlbnRfY29weQogICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAgPHNjcmlwdD5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKSA9PT0gJ2VuYWJsZWQnICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7CmdlbmVyYXRlQ3JlZGVudGlhbHMoKTsKbGV0IHV1aWQsIHBhc3N3b3JkLCB1cmlQYXRoOwoKZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKCkgewogICAgcmV0dXJuIGNyeXB0by5yYW5kb21VVUlEKCk7Cn0KCmZ1bmN0aW9uIGdlbmVyYXRlU3Ryb25nUGFzc3dvcmQoKSB7CiAgICBjb25zdCBjaGFyc2V0ID0KICAgICAgICAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkhQCMkJV4mKigpXytbXXt9fDs6JywuPD4/IjsKICAgIGxldCBwYXNzd29yZCA9ICcnOwogICAgY29uc3QgcmFuZG9tVmFsdWVzID0gbmV3IFVpbnQ4QXJyYXkoMTYpOwogICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYW5kb21WYWx1ZXMpOwoKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykgewogICAgICAgIHBhc3N3b3JkICs9IGNoYXJzZXRbcmFuZG9tVmFsdWVzW2ldICUgY2hhcnNldC5sZW5ndGhdOwogICAgfQogICAgcmV0dXJuIHBhc3N3b3JkOwp9CgpmdW5jdGlvbiBnZW5lcmF0ZVN1YlVSSVBhdGgoKSB7CiAgICBjb25zdCBjaGFyc2V0ID0gIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5IUBfX1NDUklQVF9fKl8tKzs6LC4iOwogICAgbGV0IHVyaVBhdGggPSAnJzsKICAgIGNvbnN0IHJhbmRvbVZhbHVlcyA9IG5ldyBVaW50OEFycmF5KDE2KTsKICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocmFuZG9tVmFsdWVzKTsKCiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHsKICAgICAgICB1cmlQYXRoICs9IGNoYXJzZXRbcmFuZG9tVmFsdWVzW2ldICUgY2hhcnNldC5sZW5ndGhdOwogICAgfQogICAgcmV0dXJuIHVyaVBhdGg7Cn0KCmZ1bmN0aW9uIGdlbmVyYXRlQ3JlZGVudGlhbHMoKSB7CiAgICB1dWlkID0gZ2VuZXJhdGVVVUlEKCk7CiAgICBwYXNzd29yZCA9IGdlbmVyYXRlU3Ryb25nUGFzc3dvcmQoKTsKICAgIHVyaVBhdGggPSBnZW5lcmF0ZVN1YlVSSVBhdGgoKTsKCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXVpZCcpLnRleHRDb250ZW50ID0gdXVpZDsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ci1wYXNzd29yZCcpLnRleHRDb250ZW50ID0gcGFzc3dvcmQ7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViLXBhdGgnKS50ZXh0Q29udGVudCA9IHVyaVBhdGg7Cn0KCndpbmRvdy5jb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAoZWxlbWVudElkKSB7CiAgICBjb25zdCB0ZXh0VG9Db3B5ID0gZWxlbWVudElkIAogICAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKS50ZXh0Q29udGVudAogICAgICAgIDogYFVVSUQ9JHt1dWlkfVxuVFJfUEFTUz0ke3Bhc3N3b3JkfVxuU1VCX1BBVEg9JHt1cmlQYXRofWA7CgogICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dFRvQ29weSkKICAgICAgICAudGhlbigoKSA9PiBhbGVydCgn4pyFIENvcGllZCB0byBjbGlwYm9hcmQhJykpCiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY29weSB0ZXh0OicsIGVycikpOwp9PC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4=";
  const html = new TextDecoder("utf-8").decode(Uint8Array.from(atob(encodedHtml), (c) => c.charCodeAt(0)));
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
async function updateWarpConfigs(request, env) {
  if (request.method === "POST") {
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized.");
    try {
      await fetchWarpConfigs(env);
      return await respond(true, 200, "Warp configs updated successfully!");
    } catch (error) {
      console.log(error);
      return await respond(false, 500, `An error occurred while updating Warp configs: ${error}`);
    }
  }
  return await respond(false, 405, "Method not allowd.");
}
async function respond(success, status, message2, body, customHeaders) {
  return new Response(JSON.stringify({
    success,
    status,
    message: message2 || "",
    body: body || ""
  }), {
    headers: customHeaders || {
      "Content-Type": message2 ? "text/plain" : "application/json"
    }
  });
}

// src/helpers/init.js
function init(request, env) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  globalThis.panelVersion = "3.3.18";
  globalThis.defaultHttpPorts = [80, 8080, 2052, 2082, 2086, 2095, 8880];
  globalThis.defaultHttpsPorts = [443, 8443, 2053, 2083, 2087, 2096];
  globalThis.userID = env.UUID;
  globalThis.TRPassword = env.TR_PASS;
  globalThis.proxyIPs = env.PROXY_IP || atob("YnBiLnlvdXNlZi5pc2VnYXJvLmNvbQ==");
  globalThis.hostName = request.headers.get("Host");
  globalThis.pathName = url.pathname;
  globalThis.client = searchParams.get("app");
  globalThis.urlOrigin = url.origin;
  globalThis.dohURL = env.DOH_URL || "https://cloudflare-dns.com/dns-query";
  globalThis.fallbackDomain = env.FALLBACK || "speed.cloudflare.com";
  globalThis.subPath = env.SUB_PATH || globalThis.userID;
  if (!["/secrets", "/favicon.ico"].includes(globalThis.pathName)) {
    if (typeof env.kv !== "object") throw new Error("KV Dataset is not properly set! Please refer to tutorials.", { cause: "init" });
    if (!globalThis.userID || !globalThis.TRPassword) throw new Error(`Please set UUID and ${atob("VHJvamFu")} password first. Please visit <a href="${globalThis.urlOrigin}/secrets" target="_blank">here</a> to generate them.`, { cause: "init" });
    if (!isValidUUID(globalThis.userID)) throw new Error(`Invalid UUID: ${globalThis.userID}`, { cause: "init" });
  }
}

// src/protocols/common.js
import { connect } from "cloudflare:sockets";
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, VLResponseHeader, log) {
  async function connectAndWrite(address, port) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address)) address = `${atob("d3d3Lg==")}${address}${atob("LnNzbGlwLmlv")}`;
    const tcpSocket2 = connect({
      hostname: address,
      port
    });
    remoteSocket.value = tcpSocket2;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket2.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket2;
  }
  async function retry() {
    let proxyIP, proxyIpPort;
    const encodedPanelProxyIPs = globalThis.pathName.split("/")[2] || "";
    const decodedProxyIPs = encodedPanelProxyIPs ? atob(encodedPanelProxyIPs) : globalThis.proxyIPs;
    const proxyIpList = decodedProxyIPs.split(",").map((ip) => ip.trim());
    const selectedProxyIP = proxyIpList[Math.floor(Math.random() * proxyIpList.length)];
    if (selectedProxyIP.includes("]:")) {
      const match = selectedProxyIP.match(/^(\[.*?\]):(\d+)$/);
      proxyIP = match[1];
      proxyIpPort = match[2];
    } else {
      [proxyIP, proxyIpPort] = selectedProxyIP.split(":");
    }
    const tcpSocket2 = await connectAndWrite(proxyIP || addressRemote, +proxyIpPort || portRemote);
    tcpSocket2.closed.catch((error) => {
      console.log("retry tcpSocket closed error", error);
    }).finally(() => {
      safeCloseWebSocket(webSocket);
    });
    remoteSocketToWS(tcpSocket2, webSocket, VLResponseHeader, null, log);
  }
  const tcpSocket = await connectAndWrite(addressRemote, portRemote);
  remoteSocketToWS(tcpSocket, webSocket, VLResponseHeader, retry, log);
}
async function remoteSocketToWS(remoteSocket, webSocket, VLResponseHeader, retry, log) {
  let VLHeader = VLResponseHeader;
  let hasIncomingData = false;
  await remoteSocket.readable.pipeTo(
    new WritableStream({
      start() {
      },
      async write(chunk, controller) {
        hasIncomingData = true;
        if (webSocket.readyState !== WS_READY_STATE_OPEN) {
          controller.error("webSocket.readyState is not open, maybe close");
        }
        if (VLHeader) {
          webSocket.send(await new Blob([VLHeader, chunk]).arrayBuffer());
          VLHeader = null;
        } else {
          webSocket.send(chunk);
        }
      },
      close() {
        log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
      },
      abort(reason) {
        console.error(`remoteConnection!.readable abort`, reason);
      }
    })
  ).catch((error) => {
    console.error(`VLRemoteSocketToWS has exception `, error.stack || error);
    safeCloseWebSocket(webSocket);
  });
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        if (readableStreamCancel) {
          return;
        }
        const message2 = event.data;
        controller.enqueue(message2);
      });
      webSocketServer.addEventListener("close", () => {
        safeCloseWebSocket(webSocketServer);
        if (readableStreamCancel) {
          return;
        }
        controller.close();
      });
      webSocketServer.addEventListener("error", (err) => {
        log("webSocketServer has error");
        controller.error(err);
      });
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    pull(controller) {
    },
    cancel(reason) {
      if (readableStreamCancel) {
        return;
      }
      log(`ReadableStream was canceled, due to ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    }
  });
  return stream;
}
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) {
    return { earlyData: null, error: null };
  }
  try {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode2 = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode2, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) {
    return { earlyData: null, error };
  }
}
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}

// src/protocols/vless.js
async function VlOverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = {
    value: null
  };
  let udpStreamWrite = null;
  let isDns = false;
  readableWebSocketStream.pipeTo(
    new WritableStream({
      async write(chunk, controller) {
        if (isDns && udpStreamWrite) {
          return udpStreamWrite(chunk);
        }
        if (remoteSocketWapper.value) {
          const writer = remoteSocketWapper.value.writable.getWriter();
          await writer.write(chunk);
          writer.releaseLock();
          return;
        }
        const {
          hasError,
          message: message2,
          portRemote = 443,
          addressRemote = "",
          rawDataIndex,
          VLVersion = new Uint8Array([0, 0]),
          isUDP
        } = processVLHeader(chunk, globalThis.userID);
        address = addressRemote;
        portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp " : "tcp "} `;
        if (hasError) {
          throw new Error(message2);
        }
        if (isUDP) {
          if (portRemote === 53) {
            isDns = true;
          } else {
            throw new Error("UDP proxy only enable for DNS which is port 53");
          }
        }
        const VLResponseHeader = new Uint8Array([VLVersion[0], 0]);
        const rawClientData = chunk.slice(rawDataIndex);
        if (isDns) {
          const { write } = await handleUDPOutBound(webSocket, VLResponseHeader, log);
          udpStreamWrite = write;
          udpStreamWrite(rawClientData);
          return;
        }
        handleTCPOutBound(
          remoteSocketWapper,
          addressRemote,
          portRemote,
          rawClientData,
          webSocket,
          VLResponseHeader,
          log
        );
      },
      close() {
        log(`readableWebSocketStream is close`);
      },
      abort(reason) {
        log(`readableWebSocketStream is abort`, JSON.stringify(reason));
      }
    })
  ).catch((err) => {
    log("readableWebSocketStream pipeTo error", err);
  });
  return new Response(null, {
    status: 101,
    webSocket: client
  });
}
function processVLHeader(VLBuffer, userID) {
  if (VLBuffer.byteLength < 24) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  const version = new Uint8Array(VLBuffer.slice(0, 1));
  let isValidUser = false;
  let isUDP = false;
  const slicedBuffer = new Uint8Array(VLBuffer.slice(1, 17));
  const slicedBufferString = stringify(slicedBuffer);
  isValidUser = slicedBufferString === userID;
  if (!isValidUser) {
    return {
      hasError: true,
      message: "invalid user"
    };
  }
  const optLength = new Uint8Array(VLBuffer.slice(17, 18))[0];
  const command = new Uint8Array(VLBuffer.slice(18 + optLength, 18 + optLength + 1))[0];
  if (command === 1) {
  } else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`
    };
  }
  const portIndex = 18 + optLength + 1;
  const portBuffer = VLBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(VLBuffer.slice(addressIndex, addressIndex + 1));
  const addressType = addressBuffer[0];
  let addressLength = 0;
  let addressValueIndex = addressIndex + 1;
  let addressValue = "";
  switch (addressType) {
    case 1:
      addressLength = 4;
      addressValue = new Uint8Array(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(VLBuffer.slice(addressValueIndex, addressValueIndex + 1))[0];
      addressValueIndex += 1;
      addressValue = new TextDecoder().decode(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      break;
    case 3: {
      addressLength = 16;
      const dataView = new DataView(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      addressValue = ipv6.join(":");
      break;
    }
    default:
      return {
        hasError: true,
        message: `invild  addressType is ${addressType}`
      };
  }
  if (!addressValue) {
    return {
      hasError: true,
      message: `addressValue is empty, addressType is ${addressType}`
    };
  }
  return {
    hasError: false,
    addressRemote: addressValue,
    addressType,
    portRemote,
    rawDataIndex: addressValueIndex + addressLength,
    VLVersion: version,
    isUDP
  };
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!isValidUUID(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
async function handleUDPOutBound(webSocket, VLResponseHeader, log) {
  let isVLHeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {
    },
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPakcetLength));
        index = index + 2 + udpPakcetLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {
    }
  });
  transformStream.readable.pipeTo(
    new WritableStream({
      async write(chunk) {
        const resp = await fetch(
          dohURL,
          // dns server url
          {
            method: "POST",
            headers: {
              "content-type": "application/dns-message"
            },
            body: chunk
          }
        );
        const dnsQueryResult = await resp.arrayBuffer();
        const udpSize = dnsQueryResult.byteLength;
        const udpSizeBuffer = new Uint8Array([udpSize >> 8 & 255, udpSize & 255]);
        if (webSocket.readyState === WS_READY_STATE_OPEN) {
          log(`doh success and dns message length is ${udpSize}`);
          if (isVLHeaderSent) {
            webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          } else {
            webSocket.send(await new Blob([VLResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
            isVLHeaderSent = true;
          }
        }
      }
    })
  ).catch((error) => {
    log("dns udp has error" + error);
  });
  const writer = transformStream.writable.getWriter();
  return {
    write(chunk) {
      writer.write(chunk);
    }
  };
}

// src/protocols/trojan.js
var import_js_sha256 = __toESM(require_sha256(), 1);
async function TrOverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = {
    value: null
  };
  let udpStreamWrite = null;
  readableWebSocketStream.pipeTo(
    new WritableStream({
      async write(chunk, controller) {
        if (udpStreamWrite) {
          return udpStreamWrite(chunk);
        }
        if (remoteSocketWapper.value) {
          const writer = remoteSocketWapper.value.writable.getWriter();
          await writer.write(chunk);
          writer.releaseLock();
          return;
        }
        const {
          hasError,
          message: message2,
          portRemote = 443,
          addressRemote = "",
          rawClientData
        } = parseTRHeader(chunk);
        address = addressRemote;
        portWithRandomLog = `${portRemote}--${Math.random()} tcp`;
        if (hasError) {
          throw new Error(message2);
        }
        handleTCPOutBound(
          remoteSocketWapper,
          addressRemote,
          portRemote,
          rawClientData,
          webSocket,
          null,
          log
        );
      },
      close() {
        log(`readableWebSocketStream is closed`);
      },
      abort(reason) {
        log(`readableWebSocketStream is aborted`, JSON.stringify(reason));
      }
    })
  ).catch((err) => {
    log("readableWebSocketStream pipeTo error", err);
  });
  return new Response(null, {
    status: 101,
    // @ts-ignore
    webSocket: client
  });
}
function parseTRHeader(buffer) {
  if (buffer.byteLength < 56) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  let crLfIndex = 56;
  if (new Uint8Array(buffer.slice(56, 57))[0] !== 13 || new Uint8Array(buffer.slice(57, 58))[0] !== 10) {
    return {
      hasError: true,
      message: "invalid header format (missing CR LF)"
    };
  }
  const password = new TextDecoder().decode(buffer.slice(0, crLfIndex));
  if (password !== (0, import_js_sha256.sha224)(globalThis.TRPassword)) {
    return {
      hasError: true,
      message: "invalid password"
    };
  }
  const socks5DataBuffer = buffer.slice(crLfIndex + 2);
  if (socks5DataBuffer.byteLength < 6) {
    return {
      hasError: true,
      message: "invalid SOCKS5 request data"
    };
  }
  const view = new DataView(socks5DataBuffer);
  const cmd = view.getUint8(0);
  if (cmd !== 1) {
    return {
      hasError: true,
      message: "unsupported command, only TCP (CONNECT) is allowed"
    };
  }
  const atype = view.getUint8(1);
  let addressLength = 0;
  let addressIndex = 2;
  let address = "";
  switch (atype) {
    case 1:
      addressLength = 4;
      address = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength)).join(".");
      break;
    case 3:
      addressLength = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + 1))[0];
      addressIndex += 1;
      address = new TextDecoder().decode(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      break;
    case 4: {
      addressLength = 16;
      const dataView = new DataView(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      address = ipv6.join(":");
      break;
    }
    default:
      return {
        hasError: true,
        message: `invalid addressType is ${atype}`
      };
  }
  if (!address) {
    return {
      hasError: true,
      message: `address is empty, addressType is ${atype}`
    };
  }
  const portIndex = addressIndex + addressLength;
  const portBuffer = socks5DataBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  return {
    hasError: false,
    addressRemote: address,
    portRemote,
    rawClientData: socks5DataBuffer.slice(portIndex + 4)
  };
}

// src/worker.js
var worker_default = {
  async fetch(request, env) {
    try {
      init(request, env);
      const upgradeHeader = request.headers.get("Upgrade");
      const path = globalThis.pathName;
      if (!upgradeHeader || upgradeHeader !== "websocket") {
        if (path.startsWith("/panel")) return await handlePanel(request, env);
        if (path.startsWith("/sub")) return await handleSubscriptions(request, env);
        if (path.startsWith("/login")) return await handleLogin(request, env);
        if (path.startsWith("/logout")) return await logout(request, env);
        if (path.startsWith("/secrets")) return await renderSecrets();
        if (path.startsWith("/favicon.ico")) return await serveIcon();
        return await fallback(request);
      } else {
        return path.startsWith("/tr") ? await TrOverWSHandler(request) : await VlOverWSHandler(request);
      }
    } catch (error) {
      return await handleError(error);
    }
  }
};
export {
  worker_default as default
};
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)

js-sha256/src/sha256.js:
  (**
   * [js-sha256]{@link https://github.com/emn178/js-sha256}
   *
   * @version 0.11.1
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2025
   * @license MIT
   *)
*/
