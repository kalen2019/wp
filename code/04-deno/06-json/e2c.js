var e2c = { dog: '狗', cat: '貓', a: '一隻', the: '這隻', chase: '追', eat: '吃' }

function mt (e) {
  var c = []
  for (let i in e) {
    var eword = e[i]
    var cword = e2c[eword]
    c.push(cword)
  }
  return c
}

<<<<<<< HEAD:code/04-node/06-json/e2c.js
console.log('process.argv.slice(2)=', process.argv.slice(2))
var c = mt(process.argv.slice(2))
=======
console.log('Deno.args=', Deno.args)
var c = mt(Deno.args)
>>>>>>> 807bc85875a6abc5d80f47d2d4c426f4e98454c8:code/04-deno/06-json/e2c.js
console.log(c)
