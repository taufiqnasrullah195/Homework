const https = require('https');
const fs = require('fs');

const url = 'https://gist.githubusercontent.com/RezaNurRochmat13/291dcd64a10ff8c19f6b8b74107c85e2/raw/9d42c4c26ac6f3d783f8ae0b35af8b8d574a54ca/homework.log';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFile('log.txt', data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File log.txt berhasil ditulis!');
    });
  });
}).on('error', (err) => {
  console.error(err);
});
