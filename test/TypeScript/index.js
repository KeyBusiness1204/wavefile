"use strict";
/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/wavefile
 */
var index_js_1 = require("../../index.js");
var wav = new index_js_1["default"]();
wav.fromScratch(1, 8000, "32", new Uint32Array([0]));
wav.fromScratch(1, 8000, "32", new Float64Array([0]));
wav.fromScratch(1, 8000, "32", [0]);
wav.fromScratch(1, 8000, "32", [[0], [0]]);
try {
    wav.fromBuffer(new Uint8Array([0]));
}
catch (e) {
}
console.log(wav);
