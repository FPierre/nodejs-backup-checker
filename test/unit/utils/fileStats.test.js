const test = require('ava')

const { fileStats } = require('../../../src/utils')

test('', async t => {
  const actual = await fileStats('./backup.tar.gz')
  const expected = {
    access: 'rwxrwxrwx',
    birthtime: '2017-11-30 07:38:42',
    group: undefined,
    path: './backup.tar.gz',
    size: 0,
    user: undefined
  }

  t.deepEqual(actual, expected)
})
