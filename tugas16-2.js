function min(nilai){
	return Math.min.apply(Math, nilai)
}

function max(nilai){
	return Math.max.apply(Math, nilai)
}

var deret = [45,100,99,3,2,81,22,55,1,2,3,4,5]

console.log("Nilai minimal :", min(deret))
console.log("Nilai minimal :", max(deret))