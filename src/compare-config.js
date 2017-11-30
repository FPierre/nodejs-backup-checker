const { readConfigFile } = require('./config-file')
const { fileStats } = require('./utils')

const identical = (backupFile, configFile) => {
  return backupFile.access === configFile.access &&
         backupFile.group === configFile.group &&
         backupFile.size === configFile.size &&
         backupFile.user === configFile.user
}

const compareConfig = async configPath => {
  const config = await readConfigFile(configPath)

  config.files.forEach(file => {
    // console.log(file)
    const backup = fileStats(file.path)
    // console.log(backup)
    console.log(identical(backup, file) ? 'ok' : 'ko')
  })
}

module.exports = {
  compareConfig
}
