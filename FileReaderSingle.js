const fs = require('fs');

function singleThread() {
    console.time('read-10-files');
    for (let i = 0; i < 10; i++) {
        fs.copyFileSync('docs/out.txt', `docs/copy ${i}.txt`);
    }
    console.timeEnd('read-10-files');            
}

module.exports = { singleThread }