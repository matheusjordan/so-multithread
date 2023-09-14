const { singleThread } = require('./FileReaderSingle');
const { multiThread } = require('./FileReaderMulti');
const { createFile } = require('./FileCreator');

createFile();
// multiThread();
// singleThread();