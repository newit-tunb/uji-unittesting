/**
 * Created by muhammad.rizky on 12/28/2017.
 */
var hex2rgb = require("../lib/hex2rgb")
var assert = require("assert")

describe("hexTOrgb",function () {


    it("seharusnya melempar error jika bukan hex code",function(){
        assert.throws(function () {
            hex2rgb("biru")
        }, /hexadesimal tidak valid nih, kalo ga 3 digit ya 6/);
    })

    it("seharusnya mengembalikan converted nilai rgb",function () {
        var rgb = hex2rgb("fff")
        assert.deepEqual(rgb, [255,255,255])
    })

})