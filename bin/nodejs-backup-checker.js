#!/usr/bin/env node

if (process.platform !== 'linux') {
  throw new Error('linux-user must be running on Linux')
}

require('commander')
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('compare', 'compare backup files with generated configuration')
  .command('generate', 'generate configuration from backup files')
  .parse(process.argv)
