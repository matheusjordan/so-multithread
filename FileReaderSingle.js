const fs = require('fs');

function singleThread() {
    console.time('read-10-files');
    for (let i = 0; i < 10; i++) {
        fs.copyFile('docs/file.txt', `docs/copy ${i}.txt`, (err) => {
            if (err) throw err;
            console.log('File copied!');
        });
    }
    console.timeEnd('read-10-files');
}

module.exports = { singleThread }