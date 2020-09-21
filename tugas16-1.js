function min(nilai){
	return Math.min.apply(Math, nilai)
}

function max(nilai){
	return Math.max.apply(Math, nilai)
}

var deret = [45,100,99,3,2,4,1,2,3,19,22,14,10]

console.log("Nilai minimal :", min(deret))
console.log("Nilai minimal :", max(deret))