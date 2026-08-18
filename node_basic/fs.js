// 文件涉及到 读写删创

import fs from 'node:fs';

fs.writeFile('file.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});

try {
  fs.writeFileSync('fileSync.txt', 'Hello, world! Sync',);
  console.log('File written successfully Sync');
} catch (err) {
  console.error(err);
}

// 异步读取文件
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

setTimeout(() => {
  // 同步读取文件
  const data = fs.readFileSync('fileSync.txt', 'utf8');
  console.log('同步读取文件', data);
}, 2000);

fs.unlink('file.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully');
});

