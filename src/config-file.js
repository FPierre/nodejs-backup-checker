// TODO: check config file integrity

const fs = require('fs-extra')

const readConfigFile = async path => {
  try {
    return await fs.readJson(path)
  } catch (e) {

  }
}

module.exports = {
  readConfigFile
}
