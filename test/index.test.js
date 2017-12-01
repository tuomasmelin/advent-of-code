// test/one.test.js
const test = require('ava')
const i = require('../index')

test('get input for day works', (d) => {
  d.not(i.getInput(1), null)
})
