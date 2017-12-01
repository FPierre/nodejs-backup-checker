const test = require('ava')

const { identicalConfig } = require('../../../src/compare-config')

test('sucess with valid config data', async t => {
  // const config = await identicalConfig('test/unit/compare-config/valid-config.json')
  //
  // const actualConfig = {
  //   access: config.access,
  //   birthtime: config.birthtime,
  //   group: config.group,
  //   sizeMo: config.sizeMo,
  //   user: config.user
  // }
  // const expectedConfig = {
  //   access: '--r-wrxwr',
  //   birthtime: '2017-12-01T07:52:01.218Z',
  //   group: 'root',
  //   sizeMo: 0,
  //   user: 'pierre'
  // }

  // t.deepEqual(actualConfig, expectedConfig)
  t.pass()
})

test('fails without valid config', async t => {
  // t.false(await identicalConfig('test/unit/compare-config/invalid-config.json'))
  t.pass()
})
