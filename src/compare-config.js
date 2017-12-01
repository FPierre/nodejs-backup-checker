const fs = require('fs-extra')
const { fileStats } = require('./utils')

const identical = (backupStats, configStats) => {
  return backupStats.access === configStats.access &&
         backupStats.group === configStats.group &&
         backupStats.size === configStats.size &&
         backupStats.user === configStats.user
}

const compareConfig = async configPath => {
  const { files: filesConfig } = await fs.readJson(configPath)

  for (const fileConfig of filesConfig) {
    const stats = await fileStats(fileConfig.path)

    // console.log(fileConfig)
    // console.log(stats)

    console.log(identical(stats, fileConfig) ? 'ok' : 'ko')
    return identical(stats, fileConfig)
  }
}

module.exports = {
  compareConfig
}
