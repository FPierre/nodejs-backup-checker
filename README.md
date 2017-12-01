# Node.js Backup Checker [![Build Status](https://travis-ci.org/FPierre/nodejs-backup-checker.svg?branch=master)](https://travis-ci.org/FPierre/nodejs-backup-checker) [![Coverage Status](https://coveralls.io/repos/fpierre/nodejs-backup-checker//badge.svg?branch=master)](https://coveralls.io/r/fpierre/nodejs-backup-checker/?branch=master)

Read-only verification: it does not change your backup content.

## Installation

```bash
$ npm install -g nodejs-backup-checker
```

## Usage

Generate the configuration file for an backup file:

```bash
$ nodejs-backup-checker generate /path/to/backup.tar.gz
```

Compare backup file with expected content stored in configuration file:

```bash
$ nodejs-backup-checker compare /path/to/backup.json
```

Example of configuration file:

```json
{
  "files": [
    {
      "access": "rwxrwxrwx",
      "group": "pierre",
      "path": "/home/pierre/backup.tar.gz",
      "size": 100,
      "user": "pierre",
      "sha1": null
    }
  ]
}
```

| Field  | Description                      | Required | Type    |
| :----: | -------------------------------- | :------: | :-----: |
| access | Expected file access             | true     | string  |
| group  | Expected owner group             | true     | string  |
| path   | Absolute path to concerned file  | true     | string  |
| size   | Minimum expected file size in Mo | false    | integer |
| user   | Expected user name               | true     | string  |
| sha1   | TODO                             | false    | string  |

## TODO

* sha1 for `compare` command
* Check config file integrity before compare
* Write log file to report compare
* `generate` command must take `-c` option to provide configuration file path
* Improve test isolation (related to filesystem)
