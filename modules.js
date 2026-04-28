// // const fs=require('fs');
// // const os=require('os');
// // fs.writeFileSync("dummy.txt","trying with modules")
// // console.log(os.platform());
// // console.log(os.hostname());
// // console.log(os.cpus());

// console.log("abc");
// console.log(process.cwd());
// console.log(process.pid);

// const greet=(name)=>{
//     console.log(`hello, ${name}`);

// }
// greet(`mario`);
// greet(`yoshi`);
// console.log(global);


// setTimeout(()=>{
//     console.log('in the timeout');
//     clearInterval(int);
// },3000);

// const int=setInterval(()=>{
//     console.log('in the interval');
// },1000);
// console.log(__dirname);
// console.log(__filename);

// console.log(document.querySelector);
// const xyz=require('./peoples');
// console.log(xyz.people, xyz.ages);

const {people, ages}=require('./peoples');
console.log(people,ages);

const os=require('os');
console.log(os.platform, os.homedir());



