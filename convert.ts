import { SymbologyType, createFile } from 'symbology'

(() => {
  createFile({
    symbology: SymbologyType.EANX_CHK,
    fileName: '../test.eps'
  }, '8809801020178')
})()