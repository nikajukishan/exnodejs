const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
//console.warn(dirPath);
//multipal file create code.
//for(i=0;i<5;i++)
//{
  //  fs.writeFileSync(dirPath+"/hello"+i+".txt","kishan nikaju multipal files created");
//}
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is ",item)
    })
})