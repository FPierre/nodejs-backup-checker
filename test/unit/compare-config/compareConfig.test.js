const test = require('ava')

const { compareConfig } = require('../../../src/compare-config')

test('', async t => {
  await compareConfig('./backup.json')

  t.pass()
})
