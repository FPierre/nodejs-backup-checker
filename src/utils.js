const crypto = require('crypto')
const fs = require('fs-extra')

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

    return users.map(user => user.split(':')[0])
  } catch (e) {
    console.log(e)
  }
}

const systemGroups = async () => {
  try {
    let content = await fs.readFile('/etc/group')
    const groups = content.toString().split('\n')

    return groups.map(group => group.split(':')[0])
    // const [name, , gid] = group.split(':')
    //
    // return {
    //   name,
    //   gid: Number(gid)
    // }
  } catch (e) {
    console.log(e)
  }
}

const sha1 = data => {
  const generator = crypto.createHash('sha1')
  generator.update(data)

  return generator.digest('hex')
}

const fileStats = async path => {
  const { birthtime, mode, size, uid } = await fs.stat(path)

  const access = fileModeToHexa(mode)

  // OPTIMIZE: do not change often, use cache?
  // https://github.com/wxygeek/linux-user/blob/master/lib/user.js
  const users = await systemUsers()
  const groups = await systemGroups()

  const user = users.find(user => user.uid === uid)
  const group = groups.find(group => group.uid === uid)

  return {
    access,
    birthtime,
    group,
    path,
    size: size / 1000000.0,
    user
  }
}

module.exports = {
  fileStats,
  sha1
}
