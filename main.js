const { singleThread } = require('./FileReaderSingle');
const { multiThread } = require('./FileReaderMulti');

multiThread();
singleThread();