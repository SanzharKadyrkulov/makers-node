// const path = require('path')
// const fs = require('fs')



// const directory = path.join('home', 'desktop', 'makers', 'my_projeect')
// const directory = path.join(__dirname, 'asd', 'asdk;')
// console.log();

// console.log(directory);


// const dir = path.resolve('home', 'controlers', 'node.js')
// console.log(dir);


// const fileExtension = path.extname('/components/utils/rest.cpp')
// console.log(fileExtension);

// const notes = __filename
// console.log(path.dirname(notes));
// console.log(path.basename(notes));
// console.log(path.extname(notes));

// console.log(path.normalize('projects/marathon-team/..//index.js'));
// console.log('start');
// const start = new Date().getTime();

// fs.readFile(path.resolve('history.txt'),'utf-8', (err, data) => {
//     if (err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
//     const end = new Date().getTime()
//     console.log(`zatrachennoe vremya - ${end-start} ms`);
// });

// try {
//     const data = fs.readFileSync(path.resolve('history.txt'), 'utf-8')
//     console.log(data);
    // const end = new Date().getTime()
    // console.log(`zatrachennoe vremya - ${end-start} ms`);

// } catch (err) {
//     console.log(err);
// }

// (async () => {
//     try {
//         const data = await fs.readFile(path.resolve('history.txt'), 'utf-8')

//         console.log(data);
//     } catch (e) {
//         console.error(e);
//     }
// })()


// const content = 'ext messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.'
// fs.writeFile(path.resolve('services', 'myFile.txt'), 'tyPidor')
//     .then(() => console.log('created'))
//     .catch((err) => console.error(err))
// fs.writeFile(path.resolve('history.txt'), 'replaced content')
// .then(() => console.log('replaced'))
// .catch((err) => console.error(err))

// const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
// </head>
// <body>
//     <h1>Hello world</h1>
// </body>
// </html>`;

// (async () => {
//     try {
//         await fs.writeFile(path.resolve('services', 'main.html'), html)
//         console.log('html document was created');
//     } catch (e) {
//         console.error(e);
//     }
// })();



// fs.appendFile(path.resolve('history.txt'), '\n\t Updated file', (err) => {
//     if (err) throw err
//     console.log('file was updated');
// })


// fs.unlink(path.resolve('history.txt'), (err) => {
//     if (err) throw err
//     console.log('file was deleted');
// })

// fs.mkdir(path.resolve('utils', 'functions', 'home'), {recursive: true}, (err) => {
//     if (err) throw err 
//     console.log("dir was created");
// })

// fs.rmdir(path.resolve('utils'), { recursive: true, force: true }, (err) =>{
//     if (err) throw err
//     console.log("folder was deleted");
// })

// fs.mkdir(path.resolve('js11', 'node', 'fs', ), { recursive: true }, (err) => {
//     if (err) throw err;
//     console.log('created');

//     fs.rename(path.resolve('js11', 'node', 'fs'),path.resolve('js11', 'node', 'api'), (err) => {
//         if (err) throw err;
//         console.log('was renamed');
//     })
// })


// const buf = Buffer.alloc(4, 1);
// console.log(buf);

// const klb = Buffer.alloc(1024)
// console.log(klb.length);

// const bufferAscii = Buffer.alloc(5, 'b', 'ascii')
// const bufferUTF8 = Buffer.alloc(5, 'b', 'utf8')
// console.log(bufferAscii);
// console.log(bufferUTF8);

const stringBuffer = Buffer.from('Hello this is buffer string')
// console.log(stringBuffer.toString());
// console.log(stringBuffer.toJSON());

// stringBuffer[0] = 104
// console.log(stringBuffer.toString());

// console.log('end');