var getPallete = require("../lib/pallete")
var assert = require("assert")

describe("getPallete",function () {


    it("seharusnya melempar error jika bukan array",function(){

    	function fetch() {
			return "not array"
        }
        assert.throws(function () {
				getPallete(fetch)
            }, /bukan array/)
    })

	it("seharusnya array dengan 3 item",function(){
		var pallete = getPallete()
		assert(Array.isArray(pallete))
		assert.equal(pallete.length, 3, "tidak menghasilkan 3 items")
	})

})