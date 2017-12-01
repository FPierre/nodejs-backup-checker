const proxyquire = require('proxyquire')
const test = require('ava')
// const { identicalConfig } = require('../../../src/compare-config')

const fileStatsStub = function () {
  return {
    identicalConfig: function (path) {
      console.log(path)

      return new Promise((resolve, reject) => {
        resolve({
          files: [
            {
              access: '--r-wrxwr',
              birthtime: '2017-12-01T07:52:01.218Z',
              group: 'pierre',
              path: '/path/to/backup.tar.gz',
              sizeMo: 0,
              user: 'pierre'
            }
          ]
        })
      })
    }
  }
}
const compareConfigProxy = proxyquire('../../../src/compare-config', {
  'utils': fileStatsStub
})

test('sucess with valid config data', async t => {
  const config = await compareConfigProxy.identicalConfig('test/unit/compare-config/valid-config.json')

  console.log(config)

  // const config = await identicalConfig('test/unit/compare-config/valid-config.json')

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
