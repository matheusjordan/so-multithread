const { parentPort, workerData } = require('worker_threads');
const fs = require('fs');

parentPort.on('message', (data) => {
    fs.copyFileSync('docs/file.txt', `docs/copy ${data}.txt`);
    parentPort.postMessage(data);
})


