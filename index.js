console.log("yeehaw");


let arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
	return arr[index] = num * 2;
});

console.log(arr);

let doubled = arr.map( num => {
	return num * 2;
})

console.log(doubled);

let arr2 = arr.map( num => num * 2 ).filter( num => num > 10);

console.log(arr2);

// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// solution('XXI'); // should return 21

function romanNum (num) {
	var	result = '';
	var	decimal = [1000, 500, 100, 50, 10, 5, 1];
	var roman = ["M", "D", "C", "L", "X", "V", "I"];

	for (var i = 0; i < decimal.length; i++) {
		while (num%decimal[i] < num) {
			result += roman[i];
			// add matching roman string to result
			num -= decimal[i];
		}
	}
	return result;
}

console.log(romanNum(4));
