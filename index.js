const fs = require('fs')

exports = module.exports = function (bearType) {
  const bearFile = `${__dirname}/bears/${bearType}.jpg`
  return fs.readFile(bearFile, (err, data) => {
    if (err) throw err
    console.log(data)
    return data
  })
}
