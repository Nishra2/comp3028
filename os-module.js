import os from 'os';

const plaform = os.platform();
const arch = os.arch(); // architecture
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const uptime = os.uptime();
const homeDir = os.homedir();

console.log('Platform:', plaform);
console.log('Architecture:', arch);
console.log('Total Memory:', totalMemory);
console.log('Free Memory:', freeMemory);
console.log('Uptime:', uptime);
console.log('Home Directory:', homeDir);
// Expected output: