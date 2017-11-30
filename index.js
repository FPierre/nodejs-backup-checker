#!/usr/bin/env node

const program = require('commander')

const { compareConfig } = require('./src/compare-config')
const { generateConfig } = require('./src/generate-config')

if (process.platform !== 'linux') {
  throw new Error('linux-user must be running on Linux')
}

program
  .version('0.0.1')
  .option('-c, --configuration [file]', 'Configuration path')
  .option('-g, --generate [file]', 'Backup path')
  .parse(process.argv)

if (program.configuration) {
  const configPath = program.configuration
  compareConfig(configPath).then(console.log('compared'))
}

if (program.generate) {
  const backupPath = program.generate
  generateConfig(backupPath).then(console.log('generated'))
}

// if (process.argv.length <= 2) {
//   console.log(`Usage: ${__filename} path/to`)
//   process.exit(-1)
// }

// const path = process.argv[2]
