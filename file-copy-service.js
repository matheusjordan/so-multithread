const { parentPort, workerData } = require('worker_threads');
const fs = require('fs');

parentPort.on('message', (data) => {
    fs.copyFileSync('docs/out.txt', `docs/copy-multi ${data}.txt`);
    parentPort.postMessage(data);

})


