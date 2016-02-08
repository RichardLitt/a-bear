const fs = require('fs')

function bear () {
  return fs.readFile('bear.jpg', (err, data) => {
    if (err) throw err
    console.log(data)
    return data
  })
}

exports = module.exports = bear()
