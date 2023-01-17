import User from "./useModule.js"
// const User = require('./useModule')
// const {sayHello, person, listofFriends } = require('./utils')
// console.log(sayHello('Sanzhar'));
// console.log(person);
// const moment = require('moment')
// const path = require('path')
// console.log(global);
// console.log(moment().format('DD-MM-YYYY hh:ss a'));
// console.log(path.join('title', 'sancho', 'docs'));
// console.log(user.getAge());
// console.log(__dirname);
// console.log(__filename);
// console.log(process);
// for (let i = 0; i<10; i++){
//     if(i===5){
//         process.exit()
//     }else{
//         console.log(i);
//     }
// }
// console.log(module);
            
            
            
            
            
            
const user = new User('James', 22)
console.log(user);
console.log(user.getAge());
