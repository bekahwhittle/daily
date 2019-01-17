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

function romanNum (str) {
	var	result = 0;
	var	decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

	for (var i = 0; i < decimal.length; i++) {
		while (str.indexOf(roman[i]) === 0) {
			result += decimal[i];
			// add matching roman string to result
			str = str.replace(roman[i], '');
		}
	}
	return result;
}

console.log(romanNum('XXI'));

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) => ['a'];
// first(arr, 2) => ['a', 'b']
// first(arr, 3) => ['a', 'b', 'c'];
// first(arr, 0) => [];


function first (array, n) {
	if (array == null) {
		return void 0;
	}
	if (n == null) {
		console.log('my bad')
	}
	if (n < 0) {
		return [];
	}

	return array.slice(0, n);
}

let letters = ['a', 'b', 'c', 'd', 'e'];

console.log(first(letters, 3));
console.log(first(letters, 2));
console.log(first(letters));



