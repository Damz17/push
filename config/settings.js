const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6283856618385'] // nomer mu
global.packname = '©' // nama pack sticker
global.author = 'wel'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
