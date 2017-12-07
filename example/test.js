var envReplace = require('../index')
var config = require('./testCofig')
envReplace(config)
console.log(config)