/**
 * Created by muhammad.rizky on 12/28/2017.
 */
var hex2rgb = require("../lib/hex2rgb")
var assert = require("assert")

describe("hexTOrgb",function () {


    it.skip("seharusnya mengembalikan error jika bukan hex code",function(done){
            hex2rgb("biru", function (error, result) {
                assert(error)
                done()
            })

    })

    it("seharusnya mengembalikan converted nilai rgb",function (done) {

        //assert.deepEqual("#fff", [255,255,255])

        hex2rgb("#fff", function (error, result) {
            assert.strictEqual(error,null)
            assert.deepEqual(result, [255,255,255])
            done()
        })

    })

    it("should be pending if we not put callback on it ...") //should be pending if we not put callback on it
})