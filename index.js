#!/usr/bin/env node

const program = require('commander')
const { fileStats } = require('./src/utils')
const { readConfigFile } = require('./src/config-file')
const { identical } = require('./src/compare')

if (process.platform !== 'linux') {
  throw new Error('linux-user must be running on Linux')
}

program
  .version('0.0.1')
  .option('-c, --configuration [file]', 'Configuration file')
  .parse(process.argv)

const configPath = program.configuration

readConfigFile(configPath).then(config => {
  const { files } = config

  files.forEach(file => {
    console.log(file)

    fileStats(file.path).then(d => {
      console.log(d)

      const iden = identical(d, file)
      console.log(iden ? 'ok' : 'ko')
    })
  })
})


// if (process.argv.length <= 2) {
//   console.log(`Usage: ${__filename} path/to`)
//   process.exit(-1)
// }

// const path = process.argv[2]
