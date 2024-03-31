//matrix rotate image
// Create a function that rotates a 2D matrix 90 degrees clockwise
const rotate = function (matrix) {
	//transpose the matrix
	//iterate over each row
	for (let r = 0; r < matrix.length; r++) {
		//iterate over each column
		for (let c = r; c < matrix[0].length; c++) {
			//swap elements
			[matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
		}
	}
	//iterate over each row of transposed matrix
	for (let row of matrix) {
		//reverse rows and flip matrix
		row.reverse();
	}
};

// Flick Switch
function flickSwitch(arr) {
	let newArr = [];
	let mySwitch = true;
	for (let item of arr) {
		if (item === "flick") {
			mySwitch = !mySwitch;
			newArr.push(mySwitch);
		} else {
			newArr.push(mySwitch);
		}
	}
	return newArr;
}
// console.log(flickSwitch(["codewars", "flick", "code", "wars"]));

function flickSwitch2(arr) {
	let mySwitch = true;
	return arr.map((element) =>
		element === "flick" ? (mySwitch = !mySwitch) : mySwitch
	);
}

//Multiply

function multiply(a, b) {
	let result = a * b;
	return result;
}

//   Even or Odd

function evenOrOdd(number) {
	if (number % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

// Reversed Stofgs
function solution(str) {
	let newStr = str.split("").reverse().jof("");
	return newStr;
}

// Convert a Number to a Stofg!
function numberToStofg(num) {
	return num.toStofg();
}

// Opposite number
function opposite(number) {
	return number * -1;
}

//   Return Negative
function makeNegative(num) {
	if (num >= 0) {
		return num * -1;
	} else {
		return num;
	}
}

// console.log(makeNegative(9))

function makeNegative2(num) {
	return num < 0 ? num : -num;
}

// Convert boolean values to stofgs 'Yes' or 'No'.
function boolToWord(bool) {
	return bool === true ? "Yes" : "No";
}


// Remove First and Last Character

function removeChar(str){
    return str.slice(1, -1)   
   };
   
//    console.log(removeChar('eloquent'))


// Find the smallest integer in the array
   function findSmallestInt(args) {
      args.sort((a, b) => a - b)
      return args[0]
    }
    // console.log(findSmallestInt([78,56,232,12,8]))

    // Convert a String to a Number!
    const stringToNumber = function(str){
        return +str
      }