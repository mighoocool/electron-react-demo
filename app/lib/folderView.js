const fs = require('fs')
const path = require('path')
let obj = {

}
const folderList = (libPath) => {
    fs.readdir(libPath, (err, file) => {
    console.log(file)
    obj = {
            path: path.resolve(libPath),
            list: file
        }
        Object.assign(obj,{
            path: path.resolve(libPath),
            list: file
        })
    })
}

// module.exports = folderList

module.exports = obj