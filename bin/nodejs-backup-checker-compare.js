#!/usr/bin/env node

const program = require('commander')
const { compareConfig } = require('../src/compare-config')

const help = () => {
  program.parse(process.argv)

  if (program.args.length < 1) {
    return program.help()
  }
}

help()

const configPath = program.args[0]
compareConfig(configPath).then(console.log('compared'))
