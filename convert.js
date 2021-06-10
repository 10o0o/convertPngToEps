"use strict";
exports.__esModule = true;
var symbology_1 = require("symbology");
(function () {
    symbology_1.createFile({
        symbology: symbology_1.SymbologyType.EANX_CHK,
        fileName: '../test.eps'
    }, '8809801020178');
})();
