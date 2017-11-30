# Node.js Backup Checker

## Installation

```bash
$ npm install -g nodejs-backup-checker
```

## Usage

Generate the configuration file for an backup file:

```bash
$ nodejs-backup-checker -g /path/to/backup.tar.gz
```

Compare backup file with expected content stored in configuration file:

```bash
$ nodejs-backup-checker -c /path/to/backup.json /path/to/backup.tar.gz
```

Example of configuration file:

```json
{
  "files": [
    {
      "access": "rwxrwxrwx",
      "group": "pierre",       
      "path": "backup.tar.gz",
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
| path   | Path to concerned file           | true     | string  |
| size   | Minimum expected file size in Mo | false    | integer |
| user   | Expected user name               | true     | string  |
| sha1   | TODO                             | false    | string  |

## TODO

* Interactive mode
* CLI mode (e.g with CRON)
* Do not include email send (OS responsability)
