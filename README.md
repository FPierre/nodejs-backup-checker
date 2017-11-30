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

## TODO

* Interactive mode
* CLI mode (e.g with CRON)
* Do not include email send (OS responsability)
