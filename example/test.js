var envReplace = require('../index')
var config = require('./test.json')
envReplace(config)
console.log(config)