const fs=require('fs');
const readStream=fs.createReadStream('./docs/blogs3.txt',{encoding:'utf8'});//encoding:'utf8' is written to get the data in string format
const writeStream=fs.createWriteStream('./docs/blog4.txt');
// readStream.on('data',(chunk)=>{
//     console.log('----New Chunks------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);//short form of upper code
