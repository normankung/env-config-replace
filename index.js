function replaceByEnv(configs, paramParentArray = []) {
    var env = process.env
    for (let config in configs) {

        let childParamParentArray = JSON.parse(JSON.stringify(paramParentArray))
        childParamParentArray.push(config)
        if (typeof configs[config] == 'object' && !Array.isArray(configs[config])) {
            replaceByEnv(configs[config], childParamParentArray)
        } else {
            let envName = ""
            for (let paramString of paramParentArray) {
                envName += paramString.toUpperCase()
                envName += "_"
            }
            envName += config.toUpperCase()
            if (env[envName]) {
                configs[config] = switchToOrignalType(configs[config], env[envName])
            }
        }
    }
}
// switch config type by original config
function switchToOrignalType(oConfig, eConfig) {

    var typeOfOConfig = typeof oConfig;
    switch (typeOfOConfig) {
        case 'string':
            {
                return eConfig
            }
        case 'number':
            {
                try {
                    return parseInt(eConfig, 10)
                } catch (e) {
                    console.log(e);
                    return oConfig
                }
            }
        case 'boolean':
            {
                return (eConfig === 'true')
            }
        case 'object':
            {
                if (Array.isArray(oConfig)) {
                    try {

                        return JSON.parse(eConfig);
                    } catch (e) {
                        console.log(e);
                        return oConfig
                    }
                }
            }
        default:
            {
                return eConfig
            }
    }
}
module.exports = replaceByEnv