const fs = require('fs-extra')

const users = async () => {
  let content = null

  try {
    content = await fs.readFile('/etc/passwd')
  } catch (e) {
    console.log(e)
  }

  let users = content.toString().split('\n')

  return users.map(user => {
    const [username, , uid] = user.split(':')

    return {
      username,
      uid: Number(uid)
    }
  })
}

const groups = async () => {
  let content = null

  try {
    content = await fs.readFile('/etc/group')
  } catch (e) {
    console.log(e)
  }

  const groups = content.toString().split('\n')

  return groups.map(group => {
    const [groupname, , gid] = group.split(':')

    return {
      groupname,
      gid: Number(gid)
    }
  })
}

module.exports = {
  users,
  groups
}
