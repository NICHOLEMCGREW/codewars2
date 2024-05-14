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

// Convert string to camel case
function toCamelCase(str){
  str.split('')
    
}
// console.log(toCamelCase("the_stealth_warrior"))


// Area or Perimeter
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w
  } else {
    return (l*2) + (w*2)
  }
};
// console.log(areaOrPerimeter(3,  3))


// Get Planet Name By ID
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';break;
  }
  
  return name;
}
// console.log(getPlanetName(2))

// Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

// Unfinished Loop - Bug Fixing #1
function createArray(number){
  let newArray = [];
  
  for(let counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}
// console.log(createArray(2))

// Capitalization and Mutability
function capitalizeWord(word) {

}
// console.log(capitalizeWord('word'))

// Grasshopper - If/else syntax debug
// function checkAlive (health) {
//   if () {
//     health < 0
//     return false
//   } else () {
//     return true
//   }
// }

// Total amount of points
function points(games) {
  return games
  .map(game => {
    const [x, y] = game.split(":").map(s => parseInt(s))
    if (x > y) return 3
    if (x < y) return 0
  })
.reduce((total, currentValue) => total + currentValue)
}

const points1 = games =>
  games.reduce((prev, curr) => prev += curr[0] > curr[2] ? 3 : 
  prev += curr[0] < curr[2] ? 0 : 1 ,0)

  
// Is this my tail?
function correctTail(body, tail) {
  sub = body.substr(body.length-(tail.length))
  if (sub == tail) {
    return true

  } else {
    return false
  }
  }
  // console.log(correctTail("Fox", "x"))

  // Will you make it?
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
      return true
    } else {
      return false
    }
  };
// console.log(zeroFuel(50, 25, 2))

// const zeroFuel1 = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump


// If you can't sleep, just count sheep!!

var countSheep = function (num){
  let text = '';
  for (let i = 1; i <= num; i++){
     text += i + ' sheep...'
  }
  return text
}
// console.log(countSheep(2))


// Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
// console.log(removeExclamationMarks("Hello World!"))

// Transportation on vacation
function rentalCarCost(d) {
  let cost = d * 40;
  if (d >= 7) {
    cost = cost - 50;
  } else if (d >= 3 && d < 7) {
    cost = cost - 20
  }
  return cost
}
// console.log(rentalCarCost(2))

// FIXME: Replace all dots
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}
// console.log(replaceDots("one.two.three"))

// Grasshopper - Debug
function weatherInfo (temp) {
  let celsius = (5/9) *(temp - 32).toFixed(0)
  if (celsius > 0)
    return (celsius + " is above freezing temperature")
  else
    return (celsius + " is freezing temperature")
}


// console.log(weatherInfo(50))

// Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  if (current === 'green') {
    return "yellow"
  } else if (current === 'yellow') {
    return 'red'
  } else if (current === 'red') {
    return 'green'
  }
}

// 101 Dalmatians - squash the bugs, not the dogs!\
function howManyDalmations(number) {
  if (number <= 10) {
    return "Hardly any"
  } else if (number <= 50) {
    return "More than a handful!"
  } else if (number <= 100) {
    return "Woah that's a lot of dogs!"
  } else {
    return "101 DALMATIONS!!!"
  }
}
  
// Incorrect division method
const solve = (x, y) => x / y
  

// Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - (a + b) 
}


// Sum Mixed Array
function sumMix(x){
return x.map(Number).reduce((acc, cur) => acc + cur,0)
}
// console.log(sumMix([9, 3, '7', '3']))

// Fix your code before the garden dies!
function rainAmount(mm){
  if (mm >= 40) {
       return "Your plant has had more than enough water for today!"
  } else {
       return "You need to give your plant " + (40 - mm) + "mm of water"
  };
}

// Create the base - Dungeon crawler #1
class Game {
  constructor(name, level) {
    this.player = new Player(name);
    this.level = parseInt(level) || 0;
    this.floors = [];
  }

  incrementLevel() {
    this.level++;
  }
}

class Player {
  constructor(name) {
    this.name = name && typeof name === 'string' && name.trim() !== '' ? name : 'Player';
    this.health = 100.00;
    this.position = { x: 0, y: 0 };
    this.damage = 10.00;
    this.luck = 1.00;
  }
}

class Monster {
  constructor(level) {
    this.level = parseInt(level) || 0;
  }
}

class Map {
  constructor(level) {
    this.level = parseInt(level) || 0;
  }
}

// 2525. Categorize Box According to Criteria
var categorizeBox = function(length, width, height, mass) {
  volume = length * width * height;
  let bulky = (length >= 10**4 || width >= 10**4 || height >= 10**4 || volume >= 10**9) 
  let heavy = (mass >= 100)
  if (bulky) {
    return 'Bulky';
  } else if (heavy) {
    return "Heavy";
  } else if (bulky && heavy) {
    return 'Both'
  }
  return "Neither";
};


// Sum without highest and lowest number
function sumArray(array) {
  if(array && array.length > 1) {
    const sorted = array.sort((a,b) => a-b).slice(1, -1)
    return sorted.reduce((a, c) => a + c, 0)
  }
    return 0
}
// console.log(sumArray([ 6, 2, 1, 8, 10 ]))


// Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  let cm = 27.777778
  return Math.floor(s * cm)
}


// Double Char
function doubleChar(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i]
  }
  return newStr
}
// console.log(doubleChar("Adidas"))


// Grasshopper - Check for factor
function checkForFactor (base, factor) {
  if ( base % factor === 0) {
    return true
  } else {
    return false
  }
}

// Capitalization and Mutability
function capitalizeWord(word) {

}
console.log(capitalizeWord('word'))

// String Templates - Bug Fixing #5
function buildString(...template){
  return `I like ${template.join(',')}!`;
}


// Function 2 - squaring an argument

function square(num) {
  return num**num
}

// Keep up the hoop
function hoopCount (n) {
  if (n >= 10) {
    return "Great, now move on to tricks"
  } else {
    return "Keep at it until you get it"
  }
}

