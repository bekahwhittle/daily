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

function first (array, n=1) {
	return array.slice(0, n);s
 }

let letters = ['a', 'b', 'c', 'd', 'e'];

console.log(first(letters, 3));
console.log(first(letters, 2));
console.log(first(letters));


// If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 
// 6 is not, so that's the first non consecutive number.

// n + 1 or n - 1 

function nonConsecutive (arrayAlso) {
	for (let i = 0; i < arrayAlso.length - 1; i++) {
		
		if (arrayAlso[i + 1] !== arrayAlso[i] + 1) {
			return arrayAlso[i + 1];
		}

	}
	return null;
}

let numbers = [2, 3, 4, 8, 9, 11];

console.log(nonConsecutive(numbers));



// me jumping off a cliff wahoo
// floor > 6 - die in an instant
// floor < = 6 - won't die immeditaley

function sc(floor) {
	let ground = 'Pa!';
	let scream = 'Ah~';
	let fallingScream = scream.repeat(floor - 1);

	if (floor > 6) {
		return fallingScream + ground;
	} else if (floor <= 1) {
		return "💁🏼‍♀️";
	} else {
		return fallingScream + ground + scream; 
	}

}

let floor = 10;

console.log(sc(floor));



// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]

function generateRange(min, max, step){
	// 4 + 2 = newInt + step -until- max;
	let thisArray = [];

	for (var i = min; i <= max; i+= step) {
		thisArray.push(i);
	}
	return thisArray;
}

console.log(generateRange(4, 12, 2));


// squash the bugs!! 

// function findLongest(str) {
// 	var spl = str.split(" ");
// 	console.log(spl);
// 	var longest;
	
// 	for (var i in spl) {
// 		if (spl[i].length > longest) {
// 			longest = spl[i].length;
// 		}
// 	}
// 	  return longest
// }

function findLongest(str) {
	var spl = str.split(" "),
	longest = 0;
	
	for (var i in spl) {
	  if (spl[i].length > longest) {
		longest = spl[i].length;
	  }
	}
  
	return longest;
  }

let str = "The quick white fox jumped around the massive dog";

console.log(findLongest(str));

// short long short 
// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

function solution(a, b){
	let aLng = a.length;
	let bLng = b.length;

	if (aLng > bLng) {
		let newString = b + a + b;
		return  newString
	} else {
		let newString = a + b + a;
		return  newString
	}

}
let a = "U";
let b = "False";

console.log(solution(a, b));


// return the number of positive odd numbers below n
// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]

function oddCount(n) {
	// let oddArray = [];

	// for (var i = 1; i < n; i += 2) {
	// 	oddArray.push(i);
	// }

	// let oddCount = oddArray.length;
	// return oddCount;

	return Math.floor(n/2);
	// this works because it divides your number by 2 
	// and then gives the lower value 
}

console.log(oddCount(15));

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"

function getMiddle(s) {

	// var middleIndex = string.length / 2;
	// if (string.length % 2 == 0) {
	//   return string.slice(middleIndex - 1, middleIndex + 1);
	// } else {
	//   return string.charAt(middleIndex);
	// }

	let stringLength = s.length;

	if (stringLength%2 == 0) {
		let newString = s.split('');
		let index = stringLength / 2;
		let evenIndex = index - 1;
		let evenString = newString[evenIndex] + newString[index];

		return evenString;
	} else {
		let newString = s.split('');
		let oddIndex = Math.floor(stringLength / 2);
		let oddString = newString[oddIndex];

		return oddString;
	}

}

console.log(getMiddle("testing"));

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// take the letter and multiply it by where it's at in the array 
// c = 1st so 1 time but w = 2nd so 2 times

function mumbler (s) {
	let mumbleArray = s.split('');

	return mumbleArray.map((character, index) => {
		return character.toUpperCase() + character.toLowerCase().repeat(index);
	})
	
}

console.log(mumbler("abc"));

// vowels
// a, e, i, o, and u as vowels for this Kata


function getCount(str) {
	let vowels = ['a','e','i','o','u'];

	return str.split('').filter(letter => {
	  return vowels.includes(letter) ? true : false;
	}).length;

}

console.log(getCount("hello"));


// recursive digital roop
function digital_root(n) {
	let rootArray = n.toString().split('');

	let digitalRoot = rootArray.map((number) => {
		return number;
	})

	return rootArray;

}

console.log(digital_root(45));

// create a class that counted bubbles based on a timer
// Grid Illumination

function multiply(a, b){
  return a * b;
}

console.log(multiply(5, 5));

// first non repeating letter - 
// does the next letter in the index of array = itself or its previous index ++;

function firstNonRepeatingLetter(letters) {
	for (let i = 0; i <= letters.length; i++) {
		let nonRepeat = letters.charAt(i);
		console.log(letters.indexOf(nonRepeat));
		if (letters.indexOf(nonRepeat) == letters.lastIndexOf(nonRepeat)) {
			return nonRepeat;
		}
	}
}

console.log(firstNonRepeatingLetter("moonmen"));


// first repeating letter

function firstRepeatingLetters (ltrStr) {

	for (let i = 0; i <= ltrStr.length; i++) {
		let ltr = ltrStr.charAt(i);

		if (ltrStr.indexOf(ltr) != ltrStr.lastIndexOf(ltr)) {
			return ltr;
		}
	}

}

console.log(firstRepeatingLetters('jkklmnn'));


//  I was asked to solve a problem on HackerRank (hackerrank.com) within an hour. 
//  The problem is to determine whether a string s follows the "pattern" of another string p. 
//  For example, s="helloworldworldhello" follows p="abba". Note that there is no space separating the words.

function wordPattern (words) {
	return words;
}

console.log(wordPattern("words"));


// done or not sudoku challenge 

function doneOrNot(board) {
	// let complete = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	board.map((row) => {
		if (row.length < 5) {
			console.log(row, row.length, "not done");
		}
		row.map((number) => {
			if (number == 0) {
				console.log("not done");
			} else {
				console.log("done");
			}
		})
	})
}

let newBoard = [[0,1,2,3], [1,2,5,6]];

console.log(doneOrNot(newBoard));