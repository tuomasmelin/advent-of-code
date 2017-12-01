
'use strict'

var getOne = () => 1

var getCaptcha = (inp) => {
  var pairs = []
  if (inp[0] === inp[inp.length - 1]) {
    pairs.push(parseInt(inp[0]))
  }
  for (var i = 0; i < inp.length - 1; i++) {
    if (inp[i] === inp[i + 1]) {
      pairs.push(parseInt(inp[i]))
    }
  }
  return pairs.reduce(function (acc, value) {
    return acc + value
  })
}

module.exports.getOne = getOne
module.exports.getCaptcha = getCaptcha
