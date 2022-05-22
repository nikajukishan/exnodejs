const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/kishan.txt`;
//create file
//fs.writeFileSync(filePath,'simple file');

//read file
//fs.readFile(filePath,'utf8',(err,item)=>{
 //   console.log(item);
//});

//file update
//fs.appendFile(filePath,'and file name is kishan.txt',(err)=>{
  //  if(!err) console.log("file is updated");
//});

//rename file
//fs.rename(filePath,`${dirPath}/nikaju.txt`,(err)=>{
//    if(!err) console.log('file name is updated');
//});

//delete file
fs.unlinkSync(`${dirPath}/nikaju.txt`);
