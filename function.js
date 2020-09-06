var add = function(argument1, argument2){
	return console.log(argument1 + argument2);
}


//exercise 2
var sameArrays = function(array1,array2){
	if (array1.length !==array2.length){
		console.log(false);
	}
	for(var j=0;j<array1.length;j++){
	var x = ( array1[j]===array2[j]);
	}
	console.log(x);
}

