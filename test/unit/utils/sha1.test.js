const test = require('ava')

const { sha1 } = require('../../../src/utils')

test('success', t => {
  t.is(sha1('a'), '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8')
})
