const fs = require('fs')
const path = require('path')
const readline = require('readline')
// fs.watchFile(path.resolve('file.txt'), (curr, prev) => {
//     console.log(curr);
//     return console.log(`file was updated ${new Date().toISOString()}`);
// })

// fs.watch(path.resolve('file.txt'), (evenType, filename) => {
//     console.log('file was updated');
//     console.log(evenType);
//     console.log(filename);
// })

const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// rl.question('Как вас зовут? \n', (ans) => {
//     if(!ans){
//         console.log('строка не должна быть пустой');
//     }else{
//         console.log(`Привет ${ans}`);
//     }

//     rl.close()
// })

// const file = fs.createWriteStream('./main.txt')

// for(let i = 0; i< 100000;i++){
//     file.write('Node is awesome \n')
// }

// const rs = fs.createReadStream('./main.txt');

// rs.on('data', (data) => {
//     console.log(`read chunk: ${data}`);
// })

// rs.on('end', () => {
//     console.log('no more data');
// })

// (async () => {
//     let start = new Date().getTime()
//     for await (const chunk of rs) {
//         console.log(`Read chunk: ${chunk.toString()}`);
//     }
//     let end = new Date().getTime()
//     console.log(`${start - end} ms`);
// })()






