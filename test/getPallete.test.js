var getPallete = require("../lib/pallete")
var assert = require("assert")

describe("getPallete", ()=>{
	it("seharusnya array dengan 3 item",function(){
		var pallete = getPallete()
		assert(Array.isArray(pallete))
		assert.equal(pallete.length, 4, "did not return 3 items")
	})
})