const test = require('ava')

const { identicalConfig } = require('../../../src/compare-config')

test('sucess with valid config data', async t => {
  t.true(await identicalConfig('test/unit/compare-config/valid-config.json'))
})

test('fails without valid config', async t => {
  t.false(await identicalConfig('test/unit/compare-config/invalid-config.json'))
})
