// const pple = require('./people');

//we can distructure the object coming from the other file
// const {people, age} = require('./people')

//note without the using module.export on the people file, the pple will output an empty object

// console.log(people, age)

//file systems in node which help in reading, writing, directories, deleting files

//this is an inbuilt file system in node
const fs = require('fs');
// const { Z_FIXED } = require('zlib');

//reading the files
// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

//writing into a file
// fs.writeFile('./docs/blog1.txt', 'hello world',()=>{
//     console.log('file was written');
// })

//Note if the file doesnt exist it will create the file and write into it

//directories
// fs.mkdir('./assets', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('folder created');
// })

// to check if a folder(assets) exist
// if(fs.existsSync('./assets'))

//to remove directory
// fs.rmdir('./assets', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('folder removed');
// })

//to remove a file form a directory
// if (fs.existsSync('./assets/delete.txt')){
//     //unlink delete the file and also collect a callback function
//     fs.unlink('./assets/delete.txt', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("file deleted")
//     })
// }

////////streams and buffers
//--> reading a stream of data

// const readstream = fs.createReadStream('stream file directory', {encoding:'utf-8'});
//the utf-8 encoding is for converting to a normal text

// readstream.on('data', (chunk)=>{
//     console.log('----- NEW CHUNK ------');
//     console.log(chunk)
// })

//the on is a key word like onClick 
//the chunk contain each of the loaded files form a stream of files

//--> writing to a stream of data

// const writestream = fs.createWriteStream('directory to write to');
// writestream.write('what to write');


//--> using a pipe to read and write a stream

// readstream.pipeline(writestream)
//this read from the stream file and write into another file

