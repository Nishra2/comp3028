import fs from 'fs';

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

readFile('example.txt')
  .then(data => {
    console.log('File contents:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
