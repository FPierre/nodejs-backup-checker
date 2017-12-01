#!/usr/bin/env node

const program = require('commander')
const { generateConfig } = require('../src/generate-config')

const help = () => {
  program.parse(process.argv)

  if (program.args.length < 1) {
    return program.help()
  }
}

help()

const backupPath = program.args[0]
generateConfig(backupPath).then(console.log('generated'))
