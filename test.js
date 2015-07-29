'use strict'

var test = require('tape')
var zip = require('./')

test(function (t) {
  t.equal(zip.parse('94105'), '94105')
  t.equal(zip.parse('94105abc'), '94105')
  t.equal(zip.parse('94105123'), '94105')

  t.ok(zip.validate('94105'))
  t.notOk(zip.validate('9410'))
  t.notOk(zip.validate('9410a'))
  t.notOk(zip.validate('941051'))

  t.end()
})
