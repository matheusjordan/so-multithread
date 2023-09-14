const fs = require('fs');

function createFile() {
    console.time('create-file');
    const stream = fs.createWriteStream('./docs/out.txt', 'utf-8');
    const txt = '9254835974458887629672873635789957411886024698554157393849494864228024962939550688297074527198420261051675205999609689838587412'

    for (let i = 0; i < 64000; i++) {
        stream.write(txt);
    }

    stream.close();
    console.timeEnd('create-file');

}

module.exports = {
    createFile
}