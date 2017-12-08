const fs = require('fs');

// const configLib = fs.openSync('./test.txt','a+')


const configLib = fs.open('./test.txt','a+',(err,fd)=>{
    console.dir(fd)
})

// const configLib = fs.readFile('./test.txt',(err,file)=>{
//     console.dir(file)
// })

exports.configLib = configLib

// fs.open('./test.txt','a+',(err,fd)=>{
//     console.log(fd)
// })