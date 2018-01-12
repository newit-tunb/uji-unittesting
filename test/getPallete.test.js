var getPalette = require("../lib/palette")
var assert = require("chai").assert

describe("describe Palette",function () {


    it("seharusnya melempar error jika bukan array",function(done){

    		var notArray = function () {
				getPalette(process.cwd() + "/test/fixtures/config-palette-non-array.json")
            }
			assert.throws(notArray,/is not an array/)
			done()
    })

	it("seharusnya array dengan 3 item secara default",function(){
		var palette = getPalette()
		assert.isArray(palette,"tidak mengembalikan array")
	    assert.lengthOf(palette, 3, "tidak menghasilkan 3 items")
	})

})