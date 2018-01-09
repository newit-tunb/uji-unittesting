var fs = require("fs")
function getConfig(path) {
	return JSON.parse(fs.readFileSync(path).toString())
}

module.exports = function(configPath){

    configPath = configPath || process.cwd()+ "/config.json"
	var palette = getConfig(configPath).palette
	if(!Array.isArray(palette)){

		throw new Error("palette is not an array")
	}
	return palette
}