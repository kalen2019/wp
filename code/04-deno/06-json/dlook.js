var e2c = { dog: '狗', cat: '貓', a: '一隻', chase: '追', eat: '吃' };

function look (e) {
  return e2c[e]
}

<<<<<<< HEAD:code/04-node/06-json/dlook.js
console.log('process.argv=', process.argv)
let e = process.argv[2] // 從 process.argv 這個陣列取出第二個元素
=======
console.log('args=', Deno.args)
let e = Deno.args[0] // 從 process.argv 這個陣列取出第二個元素
>>>>>>> 807bc85875a6abc5d80f47d2d4c426f4e98454c8:code/04-deno/06-json/dlook.js
let c = look(e)
console.log(e + '=' + c)
