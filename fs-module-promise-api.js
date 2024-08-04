import { promises as fs } from 'fs';
// This is using the promise API, and does not require a callback function to handle the result.
async function readFileAsync(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log('File contents:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readFileAsync('example.txt');
