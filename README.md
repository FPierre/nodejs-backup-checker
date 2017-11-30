# Node.js Backup Checker

## Usage

Compare `backup.tar.gz` file with expected result stored in `backup.json` configuration file:

```bash
$ node index.js -c backup.json backup.tar.gz
```

Example `backup.json`:

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
