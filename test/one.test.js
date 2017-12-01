// test/one.test.js
const test = require('ava')
const one = require('../lib/one')

test('Test of one == one', (t) => {
  t.is(one.getOne(), 1)
})

test('Test simple input', (t) => {
  t.is(one.getCaptcha('1111'), 4)
  t.is(one.getCaptcha('1122'), 3)
})
