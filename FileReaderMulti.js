const fs = require('fs');
const { Worker } = require('worker_threads');

function multiThread() {
    console.time('read-10-files-multi');
    for (let i = 0; i < 10; i++) {
        const worker = new Worker('./file-copy-service.js');

        worker.on('message', (data) => {
            if (data === 9) {
                console.timeEnd('read-10-files-multi');
            }

            worker.terminate();
        });

        worker.postMessage(i);
    }

}

module.exports = { multiThread }