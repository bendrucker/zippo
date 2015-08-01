'use strict'

var nonDigit = /[^\d]/g

exports.parse = function parseZip (zip) {
  return zip.replace(nonDigit, '').substring(0, 5)
}

exports.validate = function validateZip (zip) {
  return zip.length === 5 && !nonDigit.test(zip)
}
