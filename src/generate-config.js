const fs = require('fs-extra')

const { fileStats } = require('./utils')

const writeReport = (path, report) => {
  const data = {
    files: [report]
  }

  fs.writeJson(path, data, { spaces: 2 })
}

const generateConfig = async backupPath => {
  const configPath = './sandbox/nodejs-backup-checker.json'
  const stats = await fileStats(backupPath)

  return writeReport(configPath, stats)
}

module.exports = {
  generateConfig
}
