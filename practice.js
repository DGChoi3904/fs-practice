import fs from 'fs';
let rStream = fs.createReadStream("./testFile.txt")
let wStream = fs.createWriteStream("./testFile2.txt")

console.log(rStream.readable);
rStream.on("data", (chunk)=>{
  let temp = chunk;
  console.log(temp)
  wStream.write(temp);
})
wStream.end();
// GPT가 준 예제
rStream.on('data', chunk => {
  wStream.write(chunk);
});

rStream.on('end', () => {
  wStream.end();
  console.log('Done copying file');
});

rStream.on('error', err => {
  console.error(err);
});
