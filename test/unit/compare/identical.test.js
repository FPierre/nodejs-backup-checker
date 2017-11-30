const test = require('ava')

const { identical } = require('../../../src/compare')

test('', t => {
  const backupFile = {
    access: 'rwxrwxrwx',
    group: 'pierre',
    size: 100,
    user: 'pierre'
  }

  const configFile = {
    access: 'rwxrwxrwx',
    group: 'pierre',
    size: 100,
    user: 'pierre'
  }

  t.true(identical(backupFile, configFile))
})

test('', t => {
  const backupFile = {
    access: '-wxrwxrwx',
    group: 'pierre',
    size: 100,
    user: 'pierre'
  }

  const configFile = {
    access: 'rwxrwxrwx',
    group: 'pierre',
    size: 100,
    user: 'pierre'
  }

  t.false(identical(backupFile, configFile))
})
