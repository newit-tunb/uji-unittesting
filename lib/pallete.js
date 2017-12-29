function getData() {

    return ["#00fac3","#cc9aee","#78acc3"];

}

module.exports = function(fecth){

	fecth = fecth || getData
	var p = fecth()
	if(!Array.isArray(p)){
		throw new Error("pallet bukan array")
	}
	return p
}