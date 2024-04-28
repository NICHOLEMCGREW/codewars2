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
// console.log(bmi(80, 1.80))

// Find Maximum and Minimum Values of a List
var min = function(list){
   list.sort((a, b) => a - b) 
  return list[0];
}

var max = function(list){
  list.sort((a, b) => b - a) 
  return list[0];
}

// const min = (list) => Math.min(...list)
// const max = (list) => Math.max(...list)

// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  let avg = classPoints.reduce((a,c) => a + c) / classPoints.length
  if (avg < yourPoints) {
    return true
  } else {
    return false
  }
}

// Jenny's secret message

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

// Grasshopper - Grade book
function getGrade (s1, s2, s3) {
 let avg = (s1 + s2 + s3) / 3
 if (avg <= 100 && avg >= 90) return 'A'
 if (avg < 90 && avg >= 80) return 'B'
 if (avg < 80 && avg >= 70) return 'C'
 if (avg < 70 && avg >= 60) return 'D'
 if (avg < 60) return 'F'
}

// Reversed Words
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
// console.log(reverseWords("yoda doesn't speak like this" ))

// Get the mean of an array

function getAverage(marks){
  let mean = marks.reduce((a, c) => a + c) / marks.length
  return Math.floor(mean)
}
// console.log(getAverage([2,2,2,2]))

// Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === 'scissors' && p2 === 'paper' || p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock') {
    return "Player 1 won!"
  } else if (p2 === 'scissors' && p1 === 'paper' || p2 === 'rock' && p1 === 'scissors' || p2 === 'paper' && p1 === 'rock') {
    return "Player 2 won!"
  } else if (p1 === p2) {
    return 'Draw!'
  }
};

// Array plus array
function arrayPlusArray(arr1, arr2) {
  arr1 = arr1.reduce((a, c) => a + c)
  arr2 = arr2.reduce((a, c) => a + c)
  return arr1 + arr2; 
}




// Beginner Series #2 Clock

function past(h, m, s){
h = h * 3600
m = m * 60
let milli = (h + m + s) * 1000
return milli
}

function milli (h, m, s) {
  return ((h*3600) +(m*60) +s)*1000
}

// Is he gonna survive?
function hero(bullets, dragons){
  if (bullets === 0 || bullets < dragons * 2) {
    return false
  }  else return true
  } 
  // console.log(hero(0, 5))

  function hero(bullets, dragons) {
    return bullets >= dragons * 2
  }


// Abbreviate a Two Word Name
function abbrevName(name){
let [first, last] = name.split(' ')
return (first[0] + '.' + last[0]).toUpperCase()
}
// console.log(abbrevName("Sam Harris"))



// shorter concat [reverse longer]
function shorterReverseLonger(a,b){
  let short = ''
  let long = ''
  if (a.length < b.length) {
    return a + b.split('').reverse().join('') + a
  } else {
    return b + a.split('').reverse().join('') + b
  }
}
// console.log(shorterReverseLonger("first", "abcde"))

function shorter_reverse_longer(a,b){
  return a.length >= b.length ? b + a.split('').reverse().join('') + b : 
  a + b.split('').reverse().join('') + a;
}

// You only need one - Beginner
function check(a, x) {
return a.includes(x)
}
// console.log(check(['t', 'e', 's', 't'], 'e'))

// Fake Binary
function fakeBin(x){
  let newStr = ''
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      newStr += 0
    } else {
      newStr += 1
    }
  }
return newStr
}
// console.log(fakeBin('45385593107843568'))

// Count by X
function countBy(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x*i)
  }
  return result;
  }
// console.log(countBy(2,5))

// Reversed sequence
const reverseSeq = n => {
  let reversed = []
  for (let i = n; i > 0; i--) {
    reversed.push(i)
  }
  return reversed
};
// console.log(reverseSeq(5))

// Return the first M multiples of N
function multiples(m, n){
 
}
// console.log(multiples(3, 5))