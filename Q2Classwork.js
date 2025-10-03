let passengers = 0
let planes = 0
let rp = 0

// input
rl = require('readline')
rli = rl.createInterface({input: process.stdin})
rli.on('line', passpla)

function passpla(line){
  [planes, passengers] = line.trim().split(' ')
  console.log(planes, passengers)
  planef(planes, passengers)
}

function planef(planes, passengers){
  passengers = roundup(passengers)
  console.log(passengers)
  rp = (passengers - (planes * 100)) / 100
  
  if(rp < 0) console.log(0)
  else console.log (rp)
}

function roundup(passengers){
  return (Math.ceil(passengers/100) * 100)
}