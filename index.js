"use strict"
const fs = require('fs')

exports = module.exports = function (bearType) {
  const bear = bearType || "polar"
  return fs.readFile(`${__dirname}/bears/${bear}.jpg`, (err, data) => {
    if (err) throw err
    console.log(data)
    return data
  })
}
