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

    //   Function 1 - hello world
    function greet() {
        return  "hello world" 
    }

    const greet1 = () => "hello world!"

    // Convert a Boolean to a String
    function booleanToString2(b){
        if (b) {
            return 'true'
        } else {
            return 'false'
        }
      }

      function booleanToString(b) {
      return b ? 'true' : 'false'
      }      

    //   Sum of positive
    function positiveSum(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 0) {
            sum += arr[i]
          }  
        }
        return sum
    }

    // console.log(positiveSum([-1,2,3,4,5]))

    // String repeat
    function repeatStr (n, s) {
        let newStr = '';
        for( let i = 1; i <= n; i++){
            newStr += s
        }
        return newStr
      }

    //   console.log(repeatStr(3, "*"))

    
// Square(n) Sum
function squareSum(numbers){
numbers = numbers.map(num => num * num)
sum = numbers.reduce((a, c) => a + c, 0)
return sum
}

// console.log(squareSum([1,2]))


// Grasshopper - Summation
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
  }

//   console.log(summation(8))

// Remove String Spaces
function noSpace(x){
let newStr = x.split(' ').join('')
return newStr
}
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// You Can't Code Under Pressure #1
function doubleInteger(i) {
  i = i + i
  return i;
}

// Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2){
  if (operation === '+') {
   return value1 + value2
  } else if (operation === '-') {
    return value1 - value2
   } else if (operation === '*') {
    return value1 * value2
   } else if (operation === '/') {
    return value1 / value2
   }
}

function basicOp2(operation, value1, value2){
  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
      default:
        return 0
  }
}

// Keep Hydrated!
function litres(time) {
  return Math.floor(time/2)
}

// console.log(litres(2))

// Beginner - Lost Without a Map
function maps(x){
return x.map(x => x * 2)
}

// Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m
  } else {
    return 0
  }
}

// Counting sheep...
function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count += 1
    }
  }
  return count
}

// Opposites Attract

function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true
  } else {
    return false
  }
}

// console.log(lovefunc(1,4))

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}


// Sum Numbers
function sum (numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0)
};
// console.log(sum([1, 5.2, 4, 0, -1]))

// Simple multiplication
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8
  } else {
    return number * 9
  }
}


// MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}


// A Needle in the Haystack
function findNeedle(haystack) {
  for(let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return `found the needle at position ${i}`
    }
  }
}
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

// Calculate average
function findAverage(array) {
  if (array != 0) {
    return array.reduce((a, c) => a + c, 0) / array.length
  } else {
    return 0
  }
}


// Invert values
function invert(array) {
  const newArr = array.map((x) => x * -1)
  return newArr
}

// console.log(invert([1,2,3,4,5]))

// Beginner - Reduce but Grow
function grow(x){
for (let i = 0; i < x.length; i++) {
 return x.reduce((acc, curr) => acc * curr)
}
}
// console.log(grow([1, 2, 3]))


// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (n % y == 0 && n % x == 0) {
    return true
  } else {
    return false
  }
}
// console.log(isDivisible(3,3,9))

// Convert a string to an array
function stringToArray(string){
return string.split(' ').map((x) => x)
}
// console.log(stringToArray("Robin Singh"))

// Grasshopper - Personalized Message
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss'
  } else {
    return 'Hello guest'
  }
}

// Quarter of the year
const quarterOf = (month) => {
  if (month >= 1 && month <= 4) {
    return 1
  } else if (month > 4 && month <= 6) {
    return 2
  } else if (month > 6 && month <= 9) {
    return 3
  } else {
    return 4
  }
}

// Sentence Smash
function smash (words) {
  return String(words).split(',').join(' ')
};
// console.log(smash(["hello", "world"]))


// Calculate BMI
function bmi(weight, height) {
  let bmi = weight/(height**2)
  if (bmi <= 18.5) return 'Underweight'
  if (bmi <= 25.0) return 'Normal'
  if (bmi <= 30.0) return 'Overweight'
  if (bmi > 30) return 'Obese'
}
console.log(bmi(80, 1.80))