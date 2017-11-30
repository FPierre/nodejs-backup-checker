const identical = (backupFile, configFile) => {
  // return JSON.stringify(backupFile) === JSON.stringify(configFile)

  return backupFile.access === configFile.access &&
         backupFile.group === configFile.group &&
         backupFile.size === configFile.size &&
         backupFile.user === configFile.user
}

module.exports = {
  identical
}
