const fs = require('fs');

fs.open('./','a+',(err,fd)=>{
    console.log(fd)
})