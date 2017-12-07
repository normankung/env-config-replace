# env-config-replace
Use env variables to replace default configuration
Simply replace your config file with the env variables

## Install 
```
npm install env-replacement
```

## Getting Start

Just require the package and use it as a function to parse your config file

test.json
```
{
    "foo":4000,
    "bar":{
        "x":true,
        "y":"false"
    },
    "haa":"test"
}
```

test.js
```
var envReplace = require('../index')
var config = require('./testCofig')
envReplace(config)
console.log(config)
```
Use command line to set your env and start the node script

```
FOO=6000 BAR_X=false BAR_Y=TRUE node test.js
```

You will get such result 
```
{ foo: 6000, bar: { x: false, y: 'TRUE' }, haa: 'test' }
```