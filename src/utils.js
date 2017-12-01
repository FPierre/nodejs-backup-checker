const crypto = require('crypto')
const fs = require('fs-extra')
const path = require('path')

// OPTIMIZE
const fileModeToHexa = mode => {
  let access = ''

  access = access.concat(mode & 1 ? 'x' : '-')
  access = access.concat(mode & 2 ? 'w' : '-')
  access = access.concat(mode & 4 ? 'r' : '-')
  access = access.concat(mode & 10 ? 'x' : '-')
  access = access.concat(mode & 20 ? 'w' : '-')
  access = access.concat(mode & 40 ? 'r' : '-')
  access = access.concat(mode & 100 ? 'x' : '-')
  access = access.concat(mode & 200 ? 'w' : '-')
  access = access.concat(mode & 400 ? 'r' : '-')

  return access
}

const systemUsers = async () => {
  try {
    let content = await fs.readFile('/etc/passwd')
    const users = content.toString().split('\n')

    return users.map(user => {
      const [name, , uid] = user.split(':')

      return {
        user: name,
        uid: Number(uid)
      }
    })
  } catch (e) {
    console.log(e)
  }
}

const systemGroups = async () => {
  try {
    let content = await fs.readFile('/etc/group')
    const groups = content.toString().split('\n')

    return groups.map(group => {
      const [name, , gid] = group.split(':')

      return {
        group: name,
        gid: Number(gid)
      }
    })
  } catch (e) {
    console.log(e)
  }
}

const sha1 = data => {
  const generator = crypto.createHash('sha1')
  generator.update(data)

  return generator.digest('hex')
}

const fileStats = async filePath => {
  const { birthtime, gid, mode, size, uid } = await fs.stat(filePath)

  const users = await systemUsers()
  const groups = await systemGroups()
  const { user } = users.find(user => user.uid === uid)
  const { group } = groups.find(group => group.gid === gid)

  return {
    access: fileModeToHexa(mode),
    birthtime,
    group,
    path: path.resolve(filePath),
    sizeMo: size / 1000000.0,
    user
  }
}

module.exports = {
  fileStats,
  sha1
}
