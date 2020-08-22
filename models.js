'use strict'
const fs = require('fs');

const dataFilePath = __dirname + '/data.json'
let dataImg = '';
console.log(dataFilePath);

function getLink() {
  let array = JSON.parse(fs.readFileSync(dataFilePath));
  let random = Math.floor(Math.random() * array.length);
  dataImg = array[random].cat
  console.log('data inside radfile' , dataImg)
}

// fs.readFile(dataFilePath, (data) => { // 2secs  0.5secs
//   data = JSON.parse(data);
//   let random = Math.floor(Math.random() * data.length);
//   dataImg = data[random].cat
//   console.log('data inside radfile' , dataImg)
// })

getLink()



module.exports = dataImg;  