const test = require('ava')

const { generateConfig } = require('../../../src/generate-config')

test('', async t => {
  await generateConfig('./backup.tar.gz')

  t.pass()
})
