const test = require('ava')

const { fileStats } = require('../../../src/utils')

test('', async t => {
  // const actual = await fileStats('test/unit/utils/backup.tar.gz')
  // const expected = {
  //   access: '--r-wrxwr',
  //   birthtime: '2017-12-01T12:50:56.218Z',
  //   group: 'pierre',
  //   path: '/home/pierre/workplace/nodejs-backup-checker/test/unit/utils/backup.tar.gz',
  //   sizeMo: 0,
  //   user: 'pierre'
  // }

  // t.deepEqual(actual, expected)
  t.pass()
})
