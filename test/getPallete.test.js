var getPalette = require("../lib/palette")
var assert = require("assert")
var fs = require("fs")

var configFile = process.cwd()+"/config.json"
function writeConfe(config,callback) {
	fs.writeFile(configFile,JSON.stringify(config),callback)
}


describe("describe Palette",function () {

	var confeg = {}
	before(function (done) {
		fs.readFile(configFile,function (err, contents) {
            confeg = JSON.parse(contents.toString())
			done()
        })
    })

	afterEach(function (done) {
        writeConfe(confeg,done)
    })

    it("seharusnya melempar error jika bukan array",function(done){

        writeConfe({palette:"string"},function (err) {
			assert.throws(getPalette,/is not an array/)
			done()
        })
    })

	it("seharusnya array dengan 3 item secara default",function(){
		var palette = getPalette()
		assert(Array.isArray(palette),"tidak mengembalikan array")
	    assert.equal(palette.length, 3, "tidak menghasilkan 3 items")
	})

})