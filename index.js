const { users, groups } = require('./src/utils')

if (process.platform !== 'linux') {
  throw new Error('linux-user must be running on Linux')
}

// if (process.argv.length <= 2) {
//   console.log("Usage: " + __filename + " path/to")
//   process.exit(-1)
// }
//
// const path = process.argv[2]

const BACKUP_PATH = './backup.tar.gz'

users().then(u => console.log(u))
groups().then(u => console.log(u))

// OPTIMIZE
const fileModeToHexa = mode => {
  let access = ''

  access = access.concat(mode & 1 ? 'x' : '-',)
  access = access.concat(mode & 2 ? 'w' : '-',)
  access = access.concat(mode & 4 ? 'r' : '-',)
  access = access.concat(mode & 10 ? 'x' : '-',)
  access = access.concat(mode & 20 ? 'w' : '-',)
  access = access.concat(mode & 40 ? 'r' : '-',)
  access = access.concat(mode & 100 ? 'x' : '-',)
  access = access.concat(mode & 200 ? 'w' : '-',)
  access = access.concat(mode & 400 ? 'r' : '-')

  return access
}

const fileStats = async path => {
  const { birthtime, gid, mode, size, uid } = await fs.stat(path)

  return {
    access: fileModeToHexa(mode),
    birthtime,
    gid,
    path,
    size: size / 1000000.0,
    uid
  }
}



// fileStats(BACKUP_PATH).then(d => {
//   console.log(d)
// })


/*
fs.readJson('./package.json')
  .then(packageObj => {
    console.log(packageObj.version)
  })
  .catch(err => {
    console.error(err)
  })
*/
