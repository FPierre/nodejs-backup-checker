const { fileStats } = require('./src/utils')

if (process.platform !== 'linux') {
  throw new Error('linux-user must be running on Linux')
}

// if (process.argv.length <= 2) {
//   console.log("Usage: " + __filename + " path/to")
//   process.exit(-1)
// }

// const path = process.argv[2]

const BACKUP_PATH = './backup.tar.gz'

fileStats(BACKUP_PATH).then(d => {
  console.log(d)
})

// fs.readJson('./package.json')
//   .then(packageObj => {
//     console.log(packageObj.version)
//   })
//   .catch(err => {
//     console.error(err)
//   })
