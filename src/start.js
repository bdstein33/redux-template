require('localenv');
require('babel-register')({
  only: [__dirname]
});

var Debug = require('debug');
Debug.enable(process.env.DEBUG);

require('./server');
