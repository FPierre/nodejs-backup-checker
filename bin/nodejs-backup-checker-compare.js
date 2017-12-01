#!/usr/bin/env node

const program = require('commander')
const { identicalConfig } = require('../src/compare-config')

const help = () => {
  program.parse(process.argv)

  if (program.args.length < 1) {
    return program.help()
  }
}

help()

const configPath = program.args[0]
identicalConfig(configPath).then(console.log('compared'))
