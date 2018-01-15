/**
 * Created by muhammad.rizky on 12/28/2017.
 */
var hex2rgb = require("../lib/hex2rgb")
var should = require("chai").should()

describe("hexTOrgb",function () {


    it("seharusnya mengembalikan error jika bukan hex code",function(done){
            hex2rgb("biru", function (error, result) {
                error.should.exist
                done()
            })

    })

    it("seharusnya mengembalikan converted nilai rgb",function (done) {

        //assert.deepEqual("#fff", [255,255,255])

        hex2rgb("#fff", function (error, result) {
            should.not.exist(error)
            result.should.deep.equal([255,255,255])
            done()
        })

    })

})