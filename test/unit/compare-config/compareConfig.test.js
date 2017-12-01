const path = require('path')
const test = require('ava')

const { compareConfig } = require('../../../src/compare-config')

test('sucess with valid config data', async t => {
  t.true(await compareConfig('test/unit/compare-config/valid-config.json'))
})

test('fails without valid config', async t => {
  t.false(await compareConfig('test/unit/compare-config/invalid-config.json'))
})
