const fs = require('fs-extra')
const test = require('ava')

const { generateConfig } = require('../../../src/generate-config')

const CONFIGURATION_PATH = 'test/unit/generate-config/nodejs-backup-checker.json'

test.before(async () => {
  fs.remove(CONFIGURATION_PATH)
})

test.after(async () => {
  fs.remove(CONFIGURATION_PATH)
})

test('success with backup file', async t => {
  t.false(await fs.pathExists(CONFIGURATION_PATH))

  await generateConfig('test/unit/generate-config/backup.tar.gz', CONFIGURATION_PATH)

  t.true(await fs.pathExists(CONFIGURATION_PATH))
})
