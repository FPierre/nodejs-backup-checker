const fs = require('fs-extra')
const { fileStats } = require('./utils')

const generateConfig = async (backupPath, configPath = './nodejs-backup-checker.json') => {
  const stats = await fileStats(backupPath)

  return fs.writeJson(configPath, { files: [stats] }, { spaces: 2 })
}

module.exports = {
  generateConfig
}
