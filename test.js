const fs = require('fs')
const tape = require('tape')
const test = require('tape-drain')(tape)
const aBear = require('./')
const bear = fs.readFile('bear.jpg', (err, data) => {
  if (err) throw err
  return data
})

test('bear is a bear', function (t) {
  t.drain({buffer: true}).equal(aBear, bear)
  t.end()
})
