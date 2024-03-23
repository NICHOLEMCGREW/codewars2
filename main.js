// // // // to toUpperCase

// // // function makeUpperCase(str) {
// // //     return str.toUpperCase()
// // //   }
// // //   console.log(makeUpperCase('hi'))

// // // //   You Can't Code Under Pressure #1

// // // function doubleInteger(i) {
// // //     return i*2;
// // //   }
// // //   console.log(doubleInteger(5))

// // // //   Return the day

// // // function whatday(num) {
// // //     switch(num) {
// // //        case 1:
// // //         return "Monday"
// // //         break;
// // //         case 2:
// // //         return "Tuesday"
// // //         break;
// // //         case 3:
// // //         return "Wednesday"
// // //         break;
// // //         case 4:
// // //         return "Thursday"
// // //         break;
// // //         case 5:
// // //         return "Friday"
// // //         break;
// // //         case 6:
// // //         return "Saturday"
// // //         break;
// // //         case 7:
// // //         return "Sunday"
// // //         break;
// // //         default:
// // //         return "Wrong, please enter a number between 1 and 7"
// // //     }

// // //   }
// // //   console.log(whatday(1))

// // // //   Man in the west

// // // function checkTheBucket(bucket){
// // //     return bucket.includes('gold');
// // //   }
// // //   console.log(checkTheBucket(["stone", "stone", "gold", "stone", "stone"]))

// // // //   Sum The Strings

// // // function sumStr(a,b) {
// // //     let sum = Number(a) + Number(b)
// // //     if(a == "" || b == "") {
// // //         return 0
// // //     }
// // //     return sum.toString()
// // // }

// // // console.log(sumStr("4", "5"))

// // // 6.75 USD => CNY

// // // function usdcny(usd) {
// // //   let convert = usd * 6.75
// // //   return convert.toFixed(2) + ' Chinese Yuan'
// // // }

// // // console.log(usdcny(1860))

// // // Check same case

// // // function sameCase(a, b){
// // //     if(a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()) {
// // //         return -1
// // //     } else if(a == a.toLowerCase() && b == b.toLowerCase() || a == a.toUpperCase() && b == b.toUpperCase()) {
// // //         return 1
// // //     }
// // //     return 0
// // //   }
// // //   console.log(sameCase(":", "H"))

// // // Length and two values

// // // function alternate(n, firstValue, secondValue){
// // //     let result = []
// // //         for(let i = 0; i < n; i++) {
// // //             if(!(i % 2)) {
// // //                 result.push(firstValue)
// // //             } else {
// // //                 result.push(secondValue)
// // //             }
// // //         }
// // //         return result
// // //   }
// // //   console.log(alternate(5, "one", "two"))

// // // const alternate = (n, firstValue, secondValue) => Array.from({length: n}, (_, i) => !(i % 2) ? firstValue : secondValue)

// // // Convert a String to a Number!

// // // const stringToNumber = function(str){
// // //     return Number(str)
// // //   }
// // //   console.log(stringToNumber("333"))

// // // Array Iteration

// // // let bestColors = ['green', 'blue', 'yellow', 'black']

// // // bestColors.forEach((x, i) => console.log(x))

// // // let stopwatch = {}

// // // stopwatch.currentTime = 12

// // // stopwatch.tellTime = function(time){
// // //   console.log(`The current time is ${time}.`)
// // // }

// // // stopwatch.tellTime(stopwatch.currentTime)

// // // const _if = (bool, func1, func2) => bool ? func1() : func2()

// // // multiplayer RPG

// // // const aurora = {
// // //     name: "Aurora",
// // //     health: 150,
// // //     strength: 25,
// // //     xp: 0,

// // //     describe() {
// // //         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
// // //     }
// // // };

// // // aurora.health -= 20;
// // // aurora.strength += 10;
// // // aurora.xp += 15;

// // // console.log(aurora.describe());

// // // const glacius = {
// // //     name: "Glacius",
// // //     health: 130,
// // //     strength: 30,
// // //     xp: 0,

// // //     describe() {
// // //         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
// // //     }
// // // }

// // // console.log(glacius.describe())

// // // The JS Way Dogs

// // // class Dog {
// // //     constructor(name, species, size) {
// // //         this.name = name;
// // //         this.species = species;
// // //         this.size = size;
// // //     }
// // //     bark(size){
// // //         if(this.size > 60) {
// // //             return "Grrr! Grrr!";
// // //         } else {
// // //             return "Woof! Woof!";
// // //         }
// // //     }
// // // }

// // // const fang = new Dog("Fang", "boarhound", 75);
// // // console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// // // console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// // // const snowy = new Dog("Snowy", "terrier", 22);
// // // console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// // // console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// // // Account list

// // // class Account {
// // //     constructor(owner) {
// // //         this.owner = owner;
// // //         this.balance = 0;
// // //     }

// // //     credit(amount) {
// // //         this.balance += amount;
// // //     }
// // //     describe() {
// // //         return `owner: ${this.owner}, balance: ${this.balance}`;
// // //     }
// // // }

// // // const accountList = [];

// // // accountList.push(new Account("Sean"));
// // // accountList.push(new Account("Brad"));
// // // accountList.push(new Account("Georges"));

// // // accountList.forEach(account => {
// // //     account.credit(1000);
// // //     console.log(account.describe());
// // // })

// // // Cat years, Dog years
// // // const humanYearsCatYearsDogYears = (humanYears) => {
// // //     let catYears = 0;
// // //     let dogYears = 0;

// // //       if (humanYears === 1) {
// // //         catYears += 15;
// // //         dogYears += 15;
// // //       } else if (humanYears === 2) {
// // //         catYears = 24;
// // //         dogYears = 24;
// // //       } else if (humanYears >= 3) {
// // //         catYears = 24 + (humanYears - 2) * 4;
// // //         dogYears = 24 + (humanYears - 2) * 5;
// // //       }
// // //     return [humanYears, catYears, dogYears];
// // //   }
// // //   console.log(humanYearsCatYearsDogYears(10))

// // // const humanYearsCatYearsDogYears = (humanYears) => {
// // //     let catYears = 0;
// // //     let dogYears = 0;

// // //     for (let i = 1; i <= humanYears; i++) {
// // //       if (i === 1) {
// // //         catYears += 15;
// // //         dogYears += 15;
// // //       }
// // //       else if (i === 2) {
// // //         catYears += 9;
// // //         dogYears += 9;
// // //       }
// // //       else {
// // //         catYears += 4;
// // //         dogYears += 5;
// // //       }
// // //     }
// // //     return [humanYears,catYears,dogYears];
// // //   }

// // //   console.log(humanYearsCatYearsDogYears(10))

// // // Dollars and Cents

// // // formatMoney = amount => `$${amount.toFixed(2)}`

// // // Draw stairs

// // // drawStairs = n => [...Array(n)].map((_, index) => ' '.repeat(index) + 'I').join('\n')

// // // Remove exclamation marks

// // // function removeExclamationMarks(s) {
// // //     return s.replace(/!/g,'')
// // //   }
// // //   console.log(removeExclamationMarks('Hello World!!'))

// // // const removeExclamationMarks = s => s.replace(/!/g,'')

// // // A wolf in sheep's clothing

// //     // function warnTheSheep(queue) {
// //     //     const wolfIndex = queue.indexOf('wolf')
// //     //     const sheepIndex = queue.length - wolfIndex - 1
// //     //         if(wolfIndex === queue.length - 1){
// //     //             return `Pls go away and stop eating my sheep`
// //     //         } else {
// //     //             return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
// //     //         }
// //     //     }

// //     // altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// //     // String.prototype.toAlternatingCase = function (c) {
// //     //     return [...this].map(
// //     //         (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()),
// //     //     ).join``;
// //     //   }

// //     // function AgencyContractor(hourlyRate, hours, taxRate){
// //         //     this.hours = hours
// //         //     this.taxRate = taxRate
// //         //     let rate = hourlyRate
// //         //     let calculateProfit = function(){
// //         //         return rate * this.hours * (1 - this.taxRate)
// //         //     }
// //         //     this.invoiceClient = function(){
// //         //         return `Your invoice total is ${rate * this.hours}`
// //         //     }
// //         // }

// //         // let leon = new AgencyContractor(250, 160, .35)
// //         // console.log(leon.invoiceClient())

// //         // Closest elevator

// // //         elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? "left" : "right"

// // //         // Sum of differences in array

// // //         function sumOfDifferences(arr) {
// // //             arr.sort((a,b) => b - a)
// // //             let sum = 0;
// // //             for (let i = 0; i < arr.length - 1; ++i) {
// // //                 sum += arr[i] - arr[i + 1];
// // //         }
// // //             return sum
// // //         }

// // //         console.log(sumOfDifferences([1, 2, 10]))

// // //         let arr = [1, 2, 10];

// // // arr.sort((a,b) => b - a);

// // // let sum = 0;
// // // for (let i = 0; i < arr.length - 1; ++i) {
// // //     sum += arr[i] - arr[i + 1];
// // // }

// // // console.log(sum);

// // // Vowel Count

// // // function getCount(str) {
// // //     const count = str.match(/[aeiou]/gi);
// // //     return count === null ? 0 : count.length;
// // //   }

// // //   console.log(getCount("abracadabra"));

// // // const flip=(d, a)=>{
// // //     return d == 'R' ? a.sort((x,y) => x - y) : a.sort((x,y) => y - x)
// // //   }

// // // //   Coefficients of the Quadratic Equation

// // // quadratic = (x1, x2) => [1, -(x1 + x2), x1 * x2]

// // // // Total amount of points

// // // function points(games) {
// // //     let total = 0;
// // //     games.map(game => {
// // //         if (game[0] === game[2]) {
// // //             total += 1;
// // //         } else if (game[0] > game[2]) {
// // //             total += 3;
// // //         }
// // //     });
// // //     return total;
// // // }

// // // // Sum of positive

// // // function positiveSum(arr) {
// // //     let sum = 0;
// // //     for (let i = 0; i < arr.length; i++) {
// // //         if (arr[i] > 0) {
// // //             sum += arr[i]
// // //         }
// // //     }
// // //     return sum;
// // // }

// // // console.log(positiveSum([1,-2,3,4,5]))

// // // Merge two sorted arrays into one

// // // function mergeArrays(arr1, arr2) {
// // //     return Array.from(new Set(arr1.concat(arr2).sort((x,y) => x - y)))
// // // }

// // // console.log(mergeArrays([1,4,3,2], [5,6,7,8]))

// // // Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// // // function remove(string) {
// // //     if(string[0] == "!"){
// // //         string.slice(1)
// // //     }
// // //     return string.split('!').slice().join('') + "!"
// // //   }

// // //   console.log(remove("!Hi!!"))

// // // CSV representation of array

// // // const toCsvText = array =>
// // //     array.join('\n')

// // Training JS #1: create your first JS function and print "Hello World!"

// //     function helloWorld(){
// //         let str = 'Hello World!'
// //         console.log(str)
// // }

// // Training JS #2: Basic data types--Number

// // let v1 = 50,
// //     v2 = 100,
// //     v3 = 150,
// //     v4 = 200,
// //     v5 = 2,
// //     v6 = 250;

// // function equal1(){
// //   let a = v1,
// //       b = v1;
// //   return a + b;
// // }

// // //Please refer to the example above to complete the following functions
// // function equal2(){
// //   let a = v4 , //set number value to a
// //       b = v2 ; //set number value to b
// //   return a - b;
// // }

// // function equal3(){
// //   let a = v1, //set number value to a
// //       b = v5 ; //set number value to b
// //   return a * b;
// // }

// // function equal4(){
// //   let a = v4 , //set number value to a
// //       b = v5 ; //set number value to b
// //   return a / b;
// // }

// // function equal5(){
// //   let a = v2 , //set number value to a
// //       b = v6 ; //set number value to b
// //   return a % b;
// // }

// // Basic Training: Add item to an Array

// // var websites = [];
// // websites.push ('codewars')
// // console.log(websites)

// // Training JS #3: Basic data types--String

// // var a1="A",a2="a",b1="B",b2="b",a="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// // function Dad(){
// //   //select some variable to combine "Dad"
// //   return d1 + a2 +d2;
// // }
// // function Bee(){
// //   //select some variable to combine "Bee"
// //   return b1 + e2 + e2;
// // }
// // function banana(){
// //   //select some variable to combine "banana"
// //   return b2+a2+n2+a2+n2+a2;
// // }
// // //answer some questions if you finished works above
// // function answer1(){
// //     //the answer should be "yes" or "no"
// //     return "yes";
// //   }
// //   function answer2(){
// //     //the answer should be "yes" or "no"
// //     return "yes";
// //   }
// //   function answer3(){
// //     //the answer should be "yes" or "no"
// //     return "yes";
// //   }

// // Training JS #4: Basic data types--Array

// // function getLength(arr){
// //     //return length of arr
// //     return arr.length
// //   }

// //   function getFirst(arr){
// //     //return the first element of arr
// //     return arr[0]
// //   }

// //   function getLast(arr){
// //     //return the last element of arr
// //     return arr[arr.length - 1]
// //   }

// //   function pushElement(arr){
// //     var el=1;
// //     //push el to arr
// //     arr.push(el)
// //     return arr
// //   }

// //   function popElement(arr){
// //     //pop an element from arr
// //     arr.pop()
// //     return arr
// //   }

// // Training JS #7: if..else and ternary operator

// // function saleHotdogs(n){
// //     if(n < 5) {
// //         return 100
// //     } else if(n >= 5 && n < 10) {
// //         return 95
// //     } else if(n >= 10) {
// //         return 90
// //     }
// //   }

// //   function saleHotdogs(n){
// //     return n < 5 ? n*100 : n >= 5 && n < 10 ? n*95 : n*90
// //   }

// // Training JS #10: loop statement --for

// // function pickIt(arr){
// //     var odd=[],even=[];
// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i] % 2 !== 0){
// //             odd.push(arr[i])
// //         } else {
// //             even.push(arr[i])
// //         }
// //     }
// //     return [odd,even];
// //   }

// // Training JS #9: loop statement --while and do..while

// function padIt(str,n){
//   while (n > 0){
//     if (n% 2 ){
//       str = '*' + str
//     } else {
//       str = str + '*'
//     }
//     n--
//   }
//   return str
// }

// function sum1_100(){
//   var sum=0,num=1;
//   do{
//     sum+=num;
//     num++;
//   }while (num<=100)
//   return sum;
// }

// padIt = (str, n) => //while
// '*'.repeat((n + 1) /2) + str + '*'.repeat(n / 2)

// // Training JS #34: methods of Math---pow() sqrt() and cbrt()

// function cutCube(volume,n){

// }

// Function 2 - squaring an argument

// function square(num) {
//   let numsquared = num ** 2
//   return numsquared;
// }
// console.log(square(2))

// // Calculate BMI

// function bmi(weight, height) {
//   let bmi = weight/height ** 2
//   if(bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal"
//   } else if (bmi <= 30.0) {
//     return "Overweight"
//   } else if (bmi > 30) {
//     return "Obese"
//   }
// }

// FIXME: Get Full Name
// class Dinglemouse{

//   constructor( firstName, lastName ){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(){
//     if(this.firstName == "") {
//       return this.lastName;
//     } else if(this.lastName == "") {
//       return this.firstName;
//     } else {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
// }

// Third Angle of a Triangle

// function otherAngle(a, b) {
//   let c = 0;
//   return (180 - a - b);
// }
// console.log(otherAngle(30, 60))

// Check your arguments

// function objectType(obj) {
//   if (arguments.length < 1) {
//     return null;
//   }
//   return Object.prototype.toString.call(obj);
// }

// // Debug the functions EASY

// function multi(arr) {
//  let product = 1;
//  for (let i = 0; i < arguments.length; i++) {
//   product = product * arguments[i];
//  }
//  return product;
// }
// function add(arr) {
//   return arr + arr;
// }
// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// console.log(multi(5, 1, 5))
// console.log(add(9, 8, 5))
// console.log(reverse('hi'))

// // Debug Sum of Digits of a Number

// const getSumOfDigits = integer =>
// String(integer).split('').reduce((p, c) => p + Number(c), 0)

// console.log(getSumOfDigits(123))

// // Pillars

// function pillars(numPill, dist, width) {
//   return numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0
// }

// !a == a ?!

// const a = [];

// Quadrants

function quadrant(x, y) {
	if (x > 0 && y > 0) {
		return 1;
	} else if (x < 0 && y > 0) {
		return 2;
	} else if (x < 0 && y < 0) {
		return 3;
	} else {
		return 4;
	}
}

// console.log(quadrant(1, 2))

// Check same case

function sameCase(a, b) {
	if (!/^[A-Za-z]$/.test(a) || !/^[A-Za-z]$/.test(b)) {
		return -1;
	} else if (
		(a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) ||
		(a.match(/[a-z]/g) && b.match(/[a-z]/g))
	) {
		return 1;
	} else {
		return 0;
	}
}

// console.log(sameCase("B", "B"))

// Quarter of the year

const quarterOf = (month) => {
	switch (month) {
		case 1:
		case 2:
		case 3:
			return 1;
			break;
		case 4:
		case 5:
		case 6:
			return 2;
			break;
		case 7:
		case 8:
		case 9:
			return 3;
			break;
		case 10:
		case 11:
		case 12:
			return 4;
			break;
	}
};

// console.log(quarterOf(5))

// Multiplication table for number

function multiTable(number) {
	const rows = [];
	for (let i = 1; i <= 10; i++) {
		rows.push(`${i} * ${number} = ${i * number}`);
	}
	return rows.join("\n");
}
//   console.log(multiTable(5))

multiTable = (number) =>
	[...Array(10)]
		.map((_, index) => `${index + 1} * ${number} = ${(index + 1) * number}`)
		.join("\n");

// Who ate the cookie?

function whoAteTheCookie(x) {
	if (typeof x === "string") {
		return "`Who ate the last cookie? It was Zach";
	} else if (typeof x === float) {
		return "`Who ate the last cookie? It was Monica";
	} else {
	}
	return "`Who ate the last cookie? It was the dog";
}

// console.log(whoAteTheCookie('joe'))

cookie = (x) =>
	`Who ate the last cookie? It was ${
		{ string: "Zach", number: "Monica" }[typeof x] || "the dog"
	}!`;

function cookie(x) {
	return `Who ate the last cookie? It was ${
		{ string: "Zach", number: "Monica" }[typeof x] || "the dog"
	}!`;
}

// Welcome!

greet = (language) =>
	((hello) => hello[language] || "Welcome")({
		english: "Welcome",
		czech: "Vitejte",
		danish: "Velkomst",
		dutch: "Welkom",
		estonian: "Tere tulemast",
		finnish: "Tervetuloa",
		flemish: "Welgekomen",
		french: "Bienvenue",
		german: "Willkommen",
		irish: "Failte",
		italian: "Benvenuto",
		latvian: "Gaidits",
		lithuanian: "Laukiamas",
		polish: "Witamy",
		spanish: "Bienvenido",
		swedish: "Valkommen",
		welsh: "Croeso",
	});

// console.log(greet('czech'))

// Grasshopper - Function syntax debugging

function main(verb, noun) {
	return verb + noun;
}

// Volume of a Cuboid

// The volume of a cuboid = Length × Width × Height Cubic units.

class Kata {
	static getVolumeOfCuboid(length, width, height) {
		const volume = length * width * height;
		return volume;
	}
}

//   No zeros for heros

function noBoringZeros(n) {
	let newArr = n.toString().split("");
	while (newArr[newArr.length - 1] === "0") {
		newArr.pop();
	}
	return +newArr.join("");
}

//   console.log(noBoringZeros(455600))

//   Reverse List Order

function reverseList(list) {
	return list.reverse();
}
//   console.log(reverseList([4,5,6]))

//   Training JS #18: Methods of String object--concat() split() and its good friend join()

splitAndMerge = (string, separator) =>
	string
		.split(" ")
		.map((element) => element.split("").join(separator))
		.join(" ");

// Potenciation

function power(x, y) {
	return x ** y;
}

//   console.log(power(4, 3 ))

// Find the Integral

function integrate(coefficient, exponent) {
	let addOne = exponent + 1;
	let divideOne = coefficient / addOne;
	return `${divideOne}x^${addOne}`;
}

//   console.log(integrate(3,2))

// String repeat

function repeatStr(n, s) {
	let retpeatedStr = "";
	while (n > 0) {
		retpeatedStr += s;
		n--;
	}
	return retpeatedStr;
}
//   console.log(repeatStr(3, "*"))

// easy logs

logs = (x, a, b) => Math.log(a * b) / Math.log(x);

// Miles per gallon to kilometers per liter

function converter(mpg) {
	let kpl = Number((mpg * 0.354006).toFixed(2));
	return kpl;
}

//   console.log(converter(46711))

// Add Length

function addLength(str) {
	const words = str.split(" ");
	return words.map((words) => `${words} ${words.length}`);
}

// console.log(addLength('hello'))

function nameLength(str) {
	const words = str.split(" ");
	return words.map((words) => `${words} ${words.length}`);
}

// console.log(nameLength("hawaii pizza"));

// Multiple of index

// multipleOfIndex = array => array.filter((element, index) => element % index == 0 && array.length >= 0)

// function multipleOfIndex(array) {
//    return array.filter((element, index) => element % index === 0)
//   }

// multipleOfIndex=(array) => array.filter((x,i)=>(i!==0)&&(x%i == 0))

// function multipleOfIndex(array) {
//     let res = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % i == 0) {
//             res.push(array[i]);
//         } else if (array[i] == 0) {
//             res.push(0)
//         }
//     }
//     return res;
//   }

function multipleOfIndex(array) {
	return array.filter((x, i) => x == 0 || x % i === 0);
}
// console.log(multipleOfIndex([0, 2, 3, 6, 9]))

// Removing Elements

function removeEveryOther(arr) {
	return arr.filter((item, index) => index % 2 === 0);
}

// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

// Find the position!

position = (letter) => `Position of alphabet: ${letter.charCodeAt() - 96}`;

// console.log(position('a'))

// Log without dates

// function checkLogs(log) {
//     for (let i = 0; i <= log.length; i++) {
//         if (log[i] == '23:59:59') {
//             return 1
//         }
//     }
//   }

//   console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]))

//   console.log(Date.parse("02:15:59"))

// The falling speed of petals

// sakuraFall = v => v > 0 ? 400 / v : 0
//   console.log(sakuraFall(10))

//   Find Multiples of a Number

function findMultiples(integer, limit) {
	let multiples = [];
	for (let i = integer; i <= limit; i += integer) {
		multiples.push(i);
	}
	return multiples;
}

// console.log(findMultiples(5, 25))

//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

// let list = ['yes', 'no', 'maybe']

function reverseList(list) {
	// let reversed = list.split(' ').reverse().join(' ')
	return list.reverse();
}

// console.log(reverseList(['yes', 'no', 'maybe']))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// let a = [1, 2, 4, 5]
// let b = [2, 3, 4, 5]

function greaterThan(a, b) {
	const newA = a.reduce((acc, curr) => acc + curr ** 2, 0);
	const newB = b.reduce((acc, curr) => acc + curr ** 3, 0);

	if (newA > newB) {
		console.log("true");
	} else {
		console.log("b is bigger!");
	}
}
// greaterThan([1, 2, 4, 5], [2, 3, 4, 5])

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

let arr = [22, -6, 32, 82, 9, 25];

function multiples() {
	return arr.filter((element, index) => element == 0 || element % index === 0);
}

// console.log(multiples())

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let array = ["2", 8, 9, "3", 20];

function addNums() {
	return array.reduce((acc, curr) => acc + Number(curr), 0);
}
// console.log(addNums())

// Count Odd Numbers below n

function oddCount(n) {
	return Math.floor(n / 2);
}

//   console.log(oddCount(15023))

//   Three sticks

function maxlen(l1, l2) {
	// let maxl1 = l1 % 3
	// let maxl2 = l2 % 3
	// let l1Len = Math.max(l1 / l2)
	// let l2Len = Math.max(l2 / l1)
	// if (maxl1 >= l2 || maxl2 >= l1) {
	//     return Math.max(maxl1, maxl2)
	//  }
	let max = Math.max(l1 % l2, l2 % l1, l1 % 3, l2 % 3);
	let result;
	if (l1 * 3 <= max || l2 * 3 <= max) {
	}
	return max;
}

// function maxlen(l1, l2) {
//     let l1Len = Math.max(l1 % l2)
//     let l2Len = Math.max(l2 % l1)
//     if (l1Len > l2Len) {
//         return l1Len
//     } else {
//         return l2Len
//     }
//   }

function maxlen(l1, l2) {
	let min = Math.min(l1, l2);
	let max = Math.max(l1, l2);
	console.log(min);
	console.log(max);
	if (max / 3 >= min) {
		console.log(max / 3);
	} else {
		console.log(min);
	}
}
// console.log(maxlen(5, 17))

// Valid Parentheses

function validParentheses(parenStr) {
	let count = 0;
	for (i = 0; i < parenStr.length; i++) {
		if (parenStr[i] == "(") {
			count++;
		} else {
			count--;
		}
		if (count < 0) {
			return false;
		}
	}
	return count == 0;
}

// console.log(validParentheses("()"))

// Find your caterer

// function findCaterer(budget, people){
//     let package;
//     let basic = 15 * people
//     let economy = 20 * people
//     let premium = (30 * people)
//     if (premium && people >= 60) {
//         premium = ((30 * people) * .80)

//     }
//   }
//   console.log(findCaterer(200, 5))

//   function findCaterer(budget, people){
//     let cost = budget/people
//     let premDiscount = ((30 * people) * .20)
//     if (cost <= 15) {
//         return 1;
//     } else if (cost < 30 && people <= 60) {
//         return 2;
//     } else if (people > 60 || cost == 24) {
//         cost = cost - premDiscount
//         return 3 ;
//     } else if ((budget == 0 || people == 0)) {
//         return -1;
//     }
//     }
//     console.log(findCaterer(200, 5))

//     let caterer1 =  15 * 60
//     let caterer2 = 20 * 60
//     let caterer3 = 30 * 60

// Highest and Lowest

function highAndLow(numbers) {
	let num = numbers.split(" ");
	let max = Math.max.apply(null, num);
	let min = Math.min.apply(null, num);
	let result = `${max} ${min}`;
	return result;
}
//   numbersOutput("1 2 3 4 5");

//   Is n divisible by (...)

// function isDivisible(n){
//     let ;
//     let arr = n.toString().split(',');
//     for (let i = 0; i <= arr; i++) {
//         console.log(arr)
//         if (arr[i] % numbers == 0) {
//             return true
//         } else {
//             return false
//         }
//     }
//   }

//   console.log(isDivisible(12,3,4))

// function isDivisible() {
//     const argumentsArray = Array.from(arguments)

//     const
//     // for (let i = 0; i < arguments.length; i++) {
//         // console.log(arguments)
//         console.log(arguments[0])
//         // console.log(arguments[i])
//         console.log(argumentsArray)
//         console.log(argumentsArray[0])
//         }
//     // }

// console.log(isDivisible(3,3,4))

// let arr2 = [12,3,4];
// arr2.every((value)=> {
//     console.log((value % arr2[0] == 0));
// });

// const arr5 = [12, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = arr5.filter(number => {
//   if(arr5[0] % number === 0) {
//     return
//   };
// });

// console.log(even)

// Square(n) Sum
function squareSum(numbers) {
	let square = numbers.reduce((acc, curVal) => {
		return acc + curVal ** 2;
	}, 0);
	return square;
}
// console.log(squareSum([1,2]))

// Welcome to the City

let name = [];
let city;
let state;

function sayHello(name, city, state) {
	return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// console.log(sayHello([nichole mcgrew], yukon, oklahoma))

sayHello2 = (name, city, state) =>
	`Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;

// Total pressure calculation

// solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
//     return (givenMass1/molarMass1 + givenMass2/molarMass2) * 0.082 * (temp + 273.15) / volume;
//   }

// Two numbers are positive

function twoArePositive(a, b, c) {
	let count = 0;
	if (a > 0) {
		count++;
	}
	if (b > 0) {
		count++;
	}
	if (c > 0) {
		count++;
	}
	if (count == 2) {
		return true;
	} else {
		return false;
	}
}

// console.log(twoArePositive(2, 4, -3))

// const twoArePositive = (...a) => a.filter(b => b > 0).length === 2;

// Square Every Digit

function squareDigits(num) {
	let digits = num.toString().split("");
	return +digits.map((n) => n * n).join("");
}

//   console.log(squareDigits(3212))

// Name on billboard

function billboard(name, price = 30) {
	let answer = price;
	for (var i = 0; i < name.length - 1; i++) {
		answer += price;
	}
	return answer;
}

// console.log(billboard('nichole'))

// Disemvowel Trolls

function disemvowel(str) {
	let newStr = str.replace(/[aeiou]/gi, "");
	return newStr;
}

//   console.log(disemvowel("This website is for losers LOL!"))

// Double Char

function doubleChar(str) {
	return str
		.split("")
		.map((x) => x + x)
		.join("");
}

// console.log(doubleChar("abcd"))

// Remove duplicates from list

function distinct(a) {
	let result = [];

	for (let num of a) {
		if (!result.includes(num)) {
			result.push(num);
		}
	}
	return result;
}

// Stringy Strings

function stringy(size) {
	let string = "";
	for (let i = 0; i < size; i++) {
		if (i % 2 == 0) {
			string += "1";
		} else {
			string += "0";
		}
	}
	return string;
}

// console.log(stringy(6))

// Remove First and Last Character Part Two

function array5(string) {
	let newStr = string.split(",");
	for (let i = 0; i < newStr.length; i++) {
		if (newStr.length < 3 && Number.isNaN(string) === false) {
			return null;
		} else {
			newStr.shift();
			newStr.pop();
			return newStr.join(" ");
		}
	}
}

// console.log(array5('1,2,3'))

function removeStr(arr) {
	return arr.split(",").splice(1, -1).join(" ") || null;
}

// Printing Array elements with Comma delimiters

function printArray(array) {
	for (let i = 0; i < array.length; i++) {
		let newArr = array.join("").split('""');
		console.log(array[i]);
		return newArr;
	}
}

// console.log(printArray(["h","o","l","a"]))

// Counting sheep...

function countSheeps(arrayOfSheep) {
	let count = 0;
	for (let i = 0; i < arrayOfSheep.length; i++) {
		if (arrayOfSheep[i] == true) {
			count++;
		}
	}
	return count;
}

// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true ]))

// Find the smallest integer in the array

class SmallestIntegerFinder {
	findSmallestInt(args) {
		let min = Math.min(...args);
		return min;
	}
}

// Keep Hydrated!

function litres(time) {
	let drink = Math.floor(0.5 * time);
	if (drink < 1) {
		return 0;
	}
	return drink;
}

// console.log(litres(1.4))

// vowel remover

function shortcut(string) {
	return string
		.split("")
		.filter((item) => !vowels.includes(item))
		.join("");
}

// console.log(shortcut('hello'))

// Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
	return arr.slice(0, n);
}

// console.log(take([0, 1, 2, 3, 5, 8, 13], 3)) // [0, 1, 2]

// Grasshopper - Basic Function Fixer

function addFive(num) {
	let total = num + 5;
	return total;
}

// Reversing Words in a String

function reverse(string) {
	return string.split(" ").reverse().join(" ");
}

// console.log(reverse('I am an expert at this'))

// multiplication table

function multiTable(number) {
	let array = [];
	for (let i = 1; i <= 10; i++) {
		array.push(`${i} * ${number} = ${number * i}`);
	}
	return array.join("\n");
}

// Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol) {
	let discounted = (discount / 100) * normPrice;
	return Math.floor(hol / discounted);
}

// console.log(dutyFree(12, 50, 1000))

// Dollars and Cents

function formatMoney(amount) {
	return "$" + amount.toFixed(2);
}

// Convert to Binary

toBinary = (n) => +n.toString(2);

// console.log(toBinary(2))

// NBA full 48 minutes average

function pointsPer48(ppg, mpg) {
	return +((ppg / mpg) * 48).toFixed(1) || 0;
}

// console.log(pointsPer48(12, 20)) //28

// heads or tails

const headsOrTails = (_) => (Math.random() < 0.5 ? "heads" : "tails");

// sort
let sorted = arr.sort((a, b) => a - b);

//forEach
let bestColors = ["green", "blue", "yello", "black"];
// bestColors.forEach((x, i) => console.log(x))

// Exes and Ohs

function XO(str) {
	let xCount = 0;
	let oCount = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == "X".toLowerCase()) {
			xCount++;
		} else if (str[i] == "o".toLowerCase()) {
			oCount++;
		}
		return oCount;
	}
}

// console.log(XO('xxOo'))

// How much water do I need?

function howMuchWater(water, load, clothes) {
	if (clothes > 2 * load) {
		return "Too much clothes";
	} else if (clothes < load) {
		return "Not enough clothes";
	} else {
		return +(water * 1.1 ** (clothes - load)).toFixed(2);
	}
}

// console.log(howMuchWater(10,10,21))

// Take the Derivative

function derive(coefficient, exponent) {
	let multi = coefficient * exponent;
	return `${multi}x^${exponent - 1}`;
}

// Holiday VI - Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
	sharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
	return sharkDistance / sharkSpeed < pontoonDistance / youSpeed
		? "Shark Bait!"
		: "Alive!";
}

// console.log(shark(7, 146, 3, 13, false))

// The falling speed of petals

function sakuraFall(v) {
	if (v < 0) {
		return 0;
	} else {
		return 400 / v;
	}
}

sakuraFall = (v) => (v > 0 ? 400 / v : 0);
// console.log(sakuraFall(-1))

// Parse float

function parseF(s) {
	return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

// console.log(parseF("1"))

// Get the Middle Character

function getMiddle(s) {
	const i = Math.floor(s.length / 2);
	let result = s[i];
	if (s.length % 2 === 0 && i > 0) {
		result = s[i - 1] + result;
	}
	return result;
}

// console.log(getMiddle("testting"))

// Sum of Digits / Digital Root

// function digitalRoot(n) {
//   if (n < 10)
//     return n;
//   let res = n;
//   while (res >= 10) {
//     res = 0;

//     while (n > 0) {
//       res += n % 10;
//       n = Math.floor(n / 10);
//   }
//   n = res;
//   }
//   return res;
// }

// console.log(digitalRoot(15))

// let arr = String(n).split("").map((n) => {
//   const sum = arr.reduce(function(result, item) {
//     return result + item;
//   }, 0)
//   return sum

// Mumbling

// function accum(s) {
// 	let result = '',
//       arr = s.toLowerCase().split('')
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i].toUpperCase()
//     for (let j = i; j > 0; j--) {
//       result += arr[i]
//     }
//     if (i < arr.length - 1) {
//       result += '-'
//     }
//   }
//   return result;
// }

// console.log(accum('Zpr'))

const accum = (s) =>
	s
		.toLowerCase()
		.split("")
		.map((element, index) => element.toUpperCase() + element.repeat(index))
		.join("-");

// Convert number to reversed array of digits

function digitize(n) {
	return Array.from(String(n), Number).reverse();
}

// console.log(digitize(35231))

// Abbreviate a Two Word Name

function abbrevName(name) {
	let nameArray = name.split(" ");
	return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// Returning Strings

function greet(name) {
	return `Hello, ${name} how are you doing today?`;
}

// A Needle in the Haystack

function findNeedle(haystack) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] == "needle") {
			return `found the needle at position ${i}`;
		}
	}
}

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// Beginner - Lost Without a Map

function maps(x) {
	return x.map(function (x) {
		return x * 2;
	});
}
// console.log(maps([1, 2, 3]))

// Multiples of 3 or 5

// function solution(number){
//   // let multiples = []
//   for (let i = 0; i < number.length; i++) {
//     if (number % 3 == 0) {
//       console.log('fizz')
//     }
//   }
// }

// console.log(solution(9));

function solution(number) {
	let sum = 0;
	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

// console.log(solution(9))

// Isograms

function isIsogram(str) {
	return (
		str
			.toLowerCase()
			.split("")
			.filter((item, pos, arr) => arr.indexOf(item) == pos).length == str.length
	);
}

// console.log(isIsogram("isogram"))

// Exes and Ohs

function XO(str) {
	let equal = 0;
	str.split``.forEach((c) => {
		"x" === c.toLowerCase() && equal++;
		"o" === c.toLowerCase() && equal--;
	});
	return equal === 0;
}

// console.log(XO('xxxo'))

// Opposites Attract

function lovefunc(flower1, flower2) {
	if (
		(flower1 % 2 === 0 && flower2 % 2 !== 0) ||
		(flower2 % 2 === 0 && flower1 % 2 !== 0)
	) {
		return true;
	} else {
		return false;
	}
}

// console.log(lovefunc(1,4))

// Convert a Boolean to a String

function booleanToString(b) {
	if (b == true) {
		return "true";
	} else {
		return "false";
	}
}

// console.log.log(booleanToString(true))

// Beginner Series #2 Clock

function past(h, m, s) {
	h = h * 60 * 60 * 1000;
	m = m * 60000;
	s = s * 1000;
	return h + m + s;
}

// console.log(past(0,1,1))

// Are You Playing Banjo?

function areYouPlayingBanjo(name) {
	for (let i = 0; i < name.length; i++) {
		if (name[0] == "r" || name[0] == "R") {
			return `${name} plays banjo`;
		} else {
			return `${name} does not play banjo`;
		}
	}
}

// console.log(areYouPlayingBanjo('Richole'))

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
	let avg =
		classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;
	if (yourPoints > avg) {
		return true;
	} else {
		return false;
	}
}

// console.log(betterThanAverage([3, 3], 5))

// Sum Arrays
function sum(numbers) {
	"use strict";
	if (numbers) {
		return numbers.reduce((acc, curr) => acc + curr, 0);
	} else {
		return 0;
	}
}
// console.log(sum([1, 5.2, 4, 0, -1]))

// Invert values

function invert(array) {
	return array.map((x) => x * -1);
}

// console.log(invert([1,2,3,4,5]))

// Fake Binary

function fakeBin(x) {
	let bin = String(x)
		.split("")
		.map((x) => {
			if (x < 5) {
				return "0";
			} else {
				return "1";
			}
		});
	return bin.join("");
}

// console.log(fakeBin('45385593107843568'))

// Is he gonna survive?

function hero(bullets, dragons) {
	if (bullets / 2 >= dragons) {
		return true;
	} else {
		return false;
	}
}
// console.log(hero(10, 5))

function hero(bullets, dragons) {
	return bullets >= dragons * 2;
}

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return fuelLeft * mpg >= distanceToPump;
};

// console.log(zeroFuel(50, 25, 2))

// DNA to RNA Conversion

function DNAtoRNA(dna) {
	let convert = String(dna)
		.split("")
		.map((dna) => {
			if (dna == "T") {
				return "U";
			} else {
				return dna;
			}
		});
	return convert.join("");
}
// console.log(DNAtoRNA("GACCGCCGCC"))

function DNAtoRNA(dna) {
	return dna.replace(/T/g, "U");
}

// Sentence Smash

function smash(words) {
	return words.join(" ");
}
//  console.log(["hello", "world"])

// Count by X

function countBy(x, n) {
	let z = [];
	for (let i = 1; i <= n; i++) {
		z.push(i * x);
	}
	return z;
}

// console.log(countBy(2,5))

// Convert a string to an array

function stringToArray(string) {
	return Array.from(string.split(" "));
}
// console.log(stringToArray("I love arrays they are my favorite"))

// Rock Paper Scissors!

const rps = (p1, p2) => {
	if (
		(p1 == "scissors" && p2 == "paper") ||
		(p1 == "paper" && p2 == "rock") ||
		(p1 == "rock" && p2 == "scissors")
	) {
		return "Player 1 won!";
	} else if (p1 == p2) {
		return "Draw!";
	} else {
		return "Player 2 won!";
	}
};

// console.log(rps('rock', 'scissors'))

// Get the mean of an array

function getAverage(marks) {
	marks = marks.reduce((acc, curr) => acc + curr) / marks.length;
	return Math.round(Math.floor(marks));
}

// console.log(getAverage([1,1,1,1,1,1,1,2]))

// Sum without highest and lowest number

function sumArray(array) {
	if (array == null) {
		return 0;
	} else if (array.length < 2) {
		return 0;
	} else {
		array = array.sort(function (a, b) {
			return a - b;
		});
		let sum = 0;
		for (let i = 1; i < array.length - 1; i++) {
			sum += array[i];
		}
		return sum;
	}
}

// console.log(sumArray([ 6, 2, 1, 8, 10 ]))

// Grasshopper - Grade book

function getGrade(s1, s2, s3) {
	let avg = (s1 + s2 + s3) / 3;
	if (avg >= 90) {
		return "A";
	} else if (avg >= 80) {
		return "B";
	} else if (avg >= 70) {
		return "C";
	} else if (avg >= 60) {
		return "D";
	} else if (avg < 60) {
		return "F";
	}
}

// Grasshopper - Personalized Message

function greet(name, owner) {
	return name === owner ? "Hello boss" : "Hello guest";
}

// console.log(greet('Daniel', 'Daniel'))

// Count the Monkeys!

function monkeyCount(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr;
}

// console.log(monkeyCount(5))

// Transportation on vacation

function rentalCarCost(d) {
	let total = d * 40;
	if (d >= 7) return (total = total - 50);
	if (d >= 3) return total - 20;
	return total;
}

// console.log(rentalCarCost(7))

// The Feast of Many Beasts

function feast(beast, dish) {
	return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

// console.log(feast("great blue heron", "garlic naan"))

// Do I get a bonus?

function bonusTime(salary, bonus) {
	if (bonus) {
		salary = salary * 10;
	}
	return `£${salary}`;
}

// console.log(bonusTime(10000, true))

// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
	return current === "yellow"
		? "red"
		: current === "green"
		? "yellow"
		: "green";
}

// console.log(updateLight("green"))

// L1: Set Alarm

const setAlarm = (employed, vacation) => employed && !vacation;

// Will there be enough space?

function enough(cap, on, wait) {
	if (cap - (on + wait) >= 0) return 0;
	return on + wait - cap;
}

// console.log(enough(58, 58, 76))

// Beginner Series #4 Cockroach

function cockroachSpeed(s) {
	return Math.round(Math.floor(s * 27.777778));
}

// console.log(cockroachSpeed(1.08))

// Keep up the hoop

function hoopCount(n) {
	return n < 10
		? "Great, now move on to tricks"
		: "Keep at it until you get it";
}

// Find the first non-consecutive number

function firstNonConsecutive(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] + 1 !== arr[i]) return arr[i];
	}
	return null;
}

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))

// Grasshopper - Check for factor

function checkForFactor(base, factor) {
	return base % factor === 0;
}

// console.log(checkForFactor(10,2))

// Correct the mistakes of the character recognition software

function correct(string) {
	return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}

// console.log(correct("L0ND0N"))

// let originalString = "The color of the sky changes throughout the day.";

// let newString = originalString.replace("color", "colour");

// console.log(newString);

// All Star Code Challenge #18

function strCount(str, letter) {
	// let count = 0, i = 0;
	// for (i; i < str.length; i++) {
	//   if (str[i] == letter) {
	//     count++
	//   }
	// }
	// return count

	return str.split(letter).length - 1;
}

// console.log(strCount('Hello', 'l'))

// Parse nice int from char problem

function getAge(inputString) {
	return Number(inputString[0]);
}

// console.log(getAge("4 years old"))

// Switch it Up!

function switchItUp(number) {
	switch (number) {
		case 1:
			return "One";
			break;
		case 2:
			return "Two";
			break;
		case 3:
			return "Three";
			break;
		case 4:
			return "Four";
			break;
		case 5:
			return "Five";
			break;
		case 6:
			return "Six";
			break;
		case 7:
			return "Seven";
			break;
		case 8:
			return "Eight";
			break;
		case 9:
			return "Nine";
			break;
		case 0:
			return "Zero";
			break;
	}
}

// console.log(switchItUp(1))

// Switch it Up!
function isPalindrome(x) {
	return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
		? true
		: false;
}

// console.log(isPalindrome("aba"))

// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
	return numbers.filter((number) => number % divisor === 0);
}
// console.log(divisibleBy([1,2,3,4,5,6], 2))

// Powers of 2
function powersOfTwo(n) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		arr.push(Math.pow(2, i));
	}
	return arr;
}

// Difference of Volumes of Cuboids

function findDifference(a, b) {
	let aVolume = a.reduce((x, z) => x * z);
	let bVolume = b.reduce((x, z) => x * z);
	if (aVolume > bVolume) {
		return aVolume - bVolume;
	} else {
		return bVolume - aVolume;
	}
}
// console.log(findDifference([3, 2, 5], [1, 4, 4]))

// What is between?

function between(a, b) {
	let arr = [];
	for (let i = a; i <= b; i++) {
		arr.push(i);
	}
	return arr;
}
// console.log(between(1, 4))

// Sort and Star

function twoSort(s) {
	return s.sort()[0].split("").join("***");
}
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

// Simple Fun #352: Reagent Formula

isValid = (formula) =>
	!(formula.includes(1) && formula.includes(2)) &&
	!(formula.includes(3) && formula.includes(4)) &&
	formula.includes(5) == formula.includes(6) &&
	(formula.includes(7) || formula.includes(8));

// console.log(isValid([1,3,7]))

// Grasshopper - Terminal game move function

function move(position, roll) {
	return position + roll * 2;
}

// Stringy Strings
function stringy(size) {
	let string = "";
	for (let i = 0; i < size; i++) {
		if (i % 2 == 0) {
			string += "1";
		} else {
			string += "0";
		}
	}
	return string;
}

// console.log(stringy('string'))

// stringy = (size) => size.toString(1)
// console.log(stringy('string'))

// My head is at the wrong end!

function fixTheMeerkat(arr) {
	return arr.reverse();
}

//  console.log(fixTheMeerkat(["tails", "body", "heads"]))

// Super Duper Easy

function problem(x) {
	if (typeof x == "string") {
		return "Error";
	} else {
		return x * 50 + 6;
	}
}

// Well of Ideas - Easy Version

function well(x) {
	let count = 0;
	for (let i = 0; i <= x.length; i++) {
		if (x[i] === "good") {
			count++;
		}
	}
	if (count == 1 || count == 2) {
		return "Publish!";
	} else if (count > 2) {
		return "I smell a series!";
	} else {
		return "Fail!";
	}
}

// Short Long Short

function solution(a, b) {
	return a.length < b.length ? a + b + a : b + a + b;
}

// console.log(solution('45', '1'))

// Vowel remover

function shortcut(string) {
	return string.replace(/[aeiou]/gi, "");
}
// console.log(shortcut('hello'))

var a = [1, 4, 7],
	count = a[a.length - 1];
var missing = [];
for (var i = 1; i <= count; i++) {
	if (a.indexOf(i) == -1) {
		missing.push(i);
	}
}
// console.log(missing.toString());

var a = [5],
	count = 5;
var missing = new Array();

for (var i = 1; i <= count; i++) {
	if (a.indexOf(i) == -1) {
		missing.push(i);
	}
}
// console.log(missing);

function missingArray(params) {
	var arr = [1, 3, 5, 8, 9];
	var missing = [];
	let newArr = arr.concat(missing);
	for (let i = 0; i < arr[arr.length - 1]; i++) {
		if (!arr.includes(i)) {
			missing.push(i);
		}
		return missing;
	}
}

// console.log(missingArray());

let array1 = [10, 20, 30, 40, 50];
let result = [];

// Copy items from array1 to result using push()
for (let i = 0; i < array1.length; i++) {
	result.push(array1[i]);
}

// console.log(result);

// Lario and Muigi Pipe Problem
function pipeFix(numbers) {
	const newNums = [];
	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
		newNums.push(i);
	}
	return newNums;
}
// console.log(pipeFix([1,2,3,5,6,8,9]))

// Find the force of gravity between two objects

// solution = (arr_val, arr_unit) =>
// (c => 6.67e-11 * arr_val[0] * arr_val[1] * c[arr_unit[0]] * c[arr_unit[1]]/ (arr_val[2] * c[arr_unit[2]]) ** 2)
// ({kg: 1, g: 1e-3, mg: 1e-6, μg: 1e-9, lb: .453592, m: 1, cm: 1e-2, mm: 1e-3, μm: 1e-6, ft: .3048})

// Drink about

function peopleWithAgeDrink(old) {
	age < 14
		? "drink toddy"
		: age < 18
		? "drink coke"
		: age < 21
		? "drink beer"
		: "drink whisky";
}

// console.log(peopleWithAgeDrink(20))

// For Twins: 2. Math operations
function iceBrickVolume(radius, bottleLength, rimLength) {
	const height = bottleLength - rimLength;
	const hypSqrd = (radius * 2) ** 2;
	const side = Math.sqrt(hypSqrd) / 2;
	return side ** 2 * height * 2;
}

// Expressions Matter

const expressionMatter = (a, b, c) =>
	Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));

// Name Shuffler

function nameShuffler(str) {
	return str.split(" ").reverse().join(" ");
}
// console.log(nameShuffler('john McClane'))

// Exclusive "or" (xor) Logical Operator

function xor(a, b) {
	if ((a == false && b == true) || (a == true && b == false)) {
		return true;
	} else {
		return false;
	}
}

// The Wide-Mouthed frog!

function mouthSize(animal) {
	return animal.toLowerCase() == "alligator" ? "small" : "wide";
}

// Grasshopper - Terminal game combat function

function combat(health, damage) {
	return health < damage ? 0 : health - damage;
}

// console.log(combat(0, 5))

// To square(root) or not to square(root)

function squareOrSquareRoot(array) {
	return array.map((number) => {
		if (Number.isInteger(Math.pow(number, 0.5))) {
			return Math.pow(number, 0.5);
		} else {
			return Math.pow(number, 2);
		}
	});
}

// Get Nth Even Number

function nthEven(n) {
	return n * 2 - 2;
}
// console.log(nthEven(3))

// Plural

function plural(n) {
	return n !== 1;
}

// console.log(plural(0))

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
	return s.replace(/[aeiou]/gi, "!");
}

// console.log(replace("Hi!"))

// Bin to Decimal

function binToDec(bin) {
	let decimal = 0;
	let binaryLength = bin.length;
	for (let i = binaryLength - 1; i >= 0; i--) {
		if (bin[i] == "1") decimal += Math.pow(2, binaryLength - 1 - i);
	}
	return decimal;
}

// Hello, Name or World!
function hello(name) {
	if (!name) return "Hello, World!";
	return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}
// console.log(hello('jOhN'))

// Ensure question

function ensureQuestion(s) {
	if (s.includes("?")) {
		return s;
	} else {
		return s + "?";
	}
}

// String cleaning

function stringClean(s) {
	return s.replace(/[0-9]/g, "");
}

// What's the real floor?

function getRealFloor(n) {
	n = n - 1;
	if (n == 0) return 0;
	if (n < 0) return n;
	if (n == 13) n = n - 2;
	// else if (n == 13) n = 12;
	return n;
}

function getRealFloor(n) {
	if (n == 1) return n - 1;
	if (n > 13) return n - 2;
	if (n == 0) return 0;
	if (n < 0) return n;
	return n - 1;
}
// console.log(getRealFloor(14))

// Grasshopper - Array Mean

const findAverage = function (nums) {
	return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
};
// console.log(findAverage([1, 3, 5, 7]))

// Generate range of integers

function generateRange(min, max, step) {
	return Array.from(
		{ length: (max - min) / step + 1 },
		(value, index) => min + index * step
	);
}
// console.log(generateRange(2, 10, 2))

// Training JS #5: Basic data types--Object
// function animal(obj){
//   const animal = {
//     // name: 'dog',
//     // legs: 4,
//     // color: 'white'
//   }
//   let call = `This ${color} ${name} has ${legs} legs.`
//   return call
// }

// animal({name:"dog",legs:4,color:"white"})

// Enumerable Magic - Does My List Include This?

function include(arr, item) {
	if (arr.includes(item)) {
		return true;
	} else {
		return false;
	}
}

// How many lightsabers do you own?

function howManyLightsabersDoYouOwn(name) {
	if (name == "Zach") {
		return 18;
	} else {
		return 0;
	}
}

// Hex to Decima

function hexToDec(hexString) {
	return parseInt(hexString);
}

// How old will I be in 2099?

function calculateAge(birthYear, currentYear) {
	const diff = currentYear - birthYear;
	if (birthYear === currentYear) return "You were born this very year!";
	if (diff === 1) return "You are 1 year old.";
	if (diff > 1) return `You are ${diff} years old.`;
	if (diff === -1) return "You will be born in 1 year.";
	return `You will be born in ${diff * -1} years.`;
}

// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
	if (sperm.includes("Y")) {
		return "Congratulations! You're going to have a son.";
	} else {
		return "Congratulations! You're going to have a daughter.";
	}
}

// get character from ASCII Value

function getChar(c) {
	let ref = {
		31: "",
		32: " ",
		33: "!",
		34: '"',
		35: "#",
		36: "$",
		37: "%",
		38: "&",
		39: "'",
		40: "(",
		41: ")",
		42: "*",
		43: "+",
		44: ",",
		45: "-",
		46: ".",
		47: "/",
		48: "0",
		49: "1",
		50: "2",
		51: "3",
		52: "4",
		53: "5",
		54: "6",
		55: "7",
		56: "8",
		57: "9",
		58: ":",
		59: ";",
		60: "<",
		61: "=",
		62: ">",
		63: "?",
		64: "@",
		65: "A",
		66: "B",
		67: "C",
		68: "D",
		69: "E",
		70: "F",
		71: "G",
		72: "H",
		73: "I",
		74: "J",
		75: "K",
		76: "L",
		77: "M",
		78: "N",
		79: "O",
		80: "P",
		81: "Q",
		82: "R",
		83: "S",
		84: "T",
		85: "U",
		86: "V",
		87: "W",
		88: "X",
		89: "Y",
		90: "Z",
		91: "[",
		92: "\\",
		93: "]",
		94: "^",
		95: "_",
		96: "`",
		97: "a",
		98: "b",
		99: "c",
		100: "d",
		101: "e",
		102: "f",
		103: "g",
		104: "h",
		105: "i",
		106: "j",
		107: "k",
		108: "l",
		109: "m",
		110: "n",
		111: "o",
		112: "p",
		113: "q",
		114: "r",
		115: "s",
		116: "t",
		117: "u",
		118: "v",
		119: "w",
		120: "x",
		121: "y",
		122: "z",
		123: "{",
		124: "|",
		125: "}",
		126: "~",
		127: "",
	};
	return ref[c];
}
// console.log(getChar(55))

// const getChar = String.fromCharCode;

// Triple Trouble

function tripleTrouble(one, two, three) {
	let combined = "";
	for (let i = 0; i < one.length; i++) {
		combined += one[i];
		combined += two[i];
		combined += three[i];
	}
	return combined;
}
//  console.log(tripleTrouble("aaa","bbb","ccc"))

// Simple Fun #1: Seats in Theater
seatsInTheater = (nCols, nRows, col, row) => (nCols - col + 1) * (nRows - row);
// console.log(seatsInTheater(16,11,5,3))

// SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
	let aSum = a.reduce((acc, curr) => acc + curr ** 2, 0);
	console.log(aSum);
	let bSum = b.reduce((acc, curr) => acc + curr ** 3, 0);
	console.log(bSum);

	if (aSum > bSum) {
		return true;
	} else {
		return false;
	}
}
// console.log(arrayMadness([5,3,2,4,1],[15]))

// Alan Partridge II - Apple Turnover

function apple(x) {
	if (x ** 2 > 1000) {
		return "It's hotter than the sun!!";
	} else {
		return "Help yourself to a honeycomb Yorkie for the glovebox.";
	}
}

// Find the Remainder
function remainder(n, m) {
	return n > m ? a % b : b % a;
}

// Regular Ball Super Ball
var Ball = function (ballType) {
	this.ballType = ballType || "regular";
};

// L1: Bartender, drinks!
function getDrinkByProfession(param) {
	param = param.toLowerCase();

	switch (param) {
		case "jabroni":
			return "Patron Tequila";
		case "school counselor":
			return "Anything with Alcohol";
		case "programmer":
			return "Hipster Craft Beer";
		case "bike gang member":
			return "Moonshine";
		case "politician":
			return "Your tax dollars";
		case "rapper":
			return "Cristal";
		default:
			return "Beer";
	}
}

// No Loops 2 - You only need one
function check(a, x) {
	if (typeof a == "string") {
		a = a.toLowerCase();
	}
	if (a.includes(x)) {
		return true;
	} else {
		return false;
	}
}
// console.log(check([80,117,115,104,45,85,112,115], 45))

// Do you speak "English"?
function spEng(sentence) {
	sentence = sentence.toLowerCase();
	return sentence.includes("english");
}

// Grasshopper - Messi Goals

let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// How many stairs will Suzuki climb in 20 years?
stairsIn20 = (s) =>
	20 *
	s.reduce(
		(prev1, curr1) => prev1 + curr1.reduce((prev2, curr2) => prev2 + curr2, 0),
		0
	);

// Price of Mangoes
mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3));

// Fundamentals: Return
function add(a, b) {
	return a + b;
}

function divide(a, b) {
	return a / b;
}

function multiply(a, b) {
	return a * b;
}

function mod(a, b) {
	return a % b;
}

function exponent(a, b) {
	return a ** b;
}

function subt(a, b) {
	return a - b;
}

// Sum of Multiples

function sumMul(n, m) {
	if (n >= m) return "INVALID";
	let total = 0;
	let i = n;
	while (i < m) {
		total += i;
		i += n;
	}
	return total;
}
// console.log(sumMul(2,9))

// Printing Array elements with Comma delimiters
function printArray(array) {
	for (let i = 0; i < array.length; i++) {
		let newArr = array.join(",");
		return newArr;
	}
}
// console.log(printArray(["h","o","l","a"]))

// Find out whether the shape is a cube

const cubeChecker = function (volume, side) {
	if (volume > 0 && side ** 3 == volume) {
		return true;
	} else {
		return false;
	}
};

// Surface Area and Volume of a Box

getSize = (width, height, depth) => [
	2 * (width * height + width * depth + height * depth),
	width * height * depth,
];

// Area of a Square
function squareArea(A) {
	return +Math.pow((2 * A) / Math.PI, 2).toFixed(2);
}

// circumfrence = 4*A = 2*pi*R
// Radius = 4*A/(2*pi) = 2*A/pi
// area =

// simple calculator
function calculator(a, b, sign) {
	if (sign == "+") {
		return a + b;
	} else if (sign == "-") {
		return a - b;
	} else if (sign == "*") {
		return a * b;
	} else if (sign == "/") {
		return a / b;
	} else {
		return "unknown value";
	}
}

// Neutralisation
function neutralise(s1, s2) {
	let newStr = [];
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] == "+" && s2[i] == "+") newStr.push("+");
		if (s1[i] == "-" && s2[i] == "-") newStr.push("-");
		if ((s1[i] == "-" && s2[i] == "+") || (s1[i] == "+" && s2[i] == "-"))
			newStr.push("0");
	}
	return newStr.join("").toString();
}
// console.log(neutralise("--++--", "++--++"))

// Find Nearest square number
nearestSq = (n) => Math.pow(Math.round(Math.sqrt(n)), 2);

// Contamination #1 -String-
function contamination(text, char) {
	let result = "";
	if (text == "" || char == "") {
		result = "";
	} else if (text.length > 0 || char.length > 0) {
		result = char.repeat(text.length);
	}
	return result;
}
// console.log(contamination("abc","z"))

// Formatting decimal places #0

function twoDecimalPlaces(n) {
	return +n.toFixed(2);
}

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove(string) {
	return string.replace(/!+$/, "");
}
// console.log(remove('Hi!'))

// Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages) {
	let newArr = [];
	newArr.push(Math.min(...ages));
	newArr.push(Math.max(...ages));
	newArr.push(Math.max(...ages) - Math.min(...ages));
	return newArr;
}
// console.log(differenceInAges([82, 15, 6, 38, 35]))

// Regex count lowercase letters

function lowercaseCount(str) {
	let count = 0;
	for (const char of str) {
		if (char.match(/[a-z]/)) {
			count += 1;
		}
	}
	return count;
}

// Simple validation of a username with regex
validateUsr = (username) => /^[a-z\d_]{4,16}$/.test(username);

// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right/

function remove(s, n) {
	for (let i = 0; i < n; i++) {
		s = s.replace("!", "");
	}
	return s;
}
// console.log(remove("Hi!!!",1))

// Smallest unused ID
function nextId(ids) {
	for (let i = 0; i <= ids.length; i++) {
		if (!ids.includes(i)) return i;
	}
}

// Remove the time
function shortenToDate(longDate) {
	let index = longDate.lastIndexOf(" ");
	return (longDate = longDate.substring(0, index));
}

// Grasshopper - Combine strings

combineNames = (stra, strb) => stra.concat(" ", strb);
// console.log(combineNames('James', 'Stevens'))

// Training JS #6: Basic data types--Boolean and conditional statements if..else
trueOrFalse = (val) => (val ? "true" : "false");

// Who is going to pay for the wall?
function whoIsPaying(name) {
	let arr = [];
	if (name.length <= 2) {
		arr.push(name);
	} else {
		arr.push(name, name[0] + name[1]);
	}
	return arr;
}
// console.log(whoIsPaying("Mexico"))

// Kata Example Twist
// add the value "codewars" to the websites array 1,000 times
var websites = new Array(1000).fill("codewars");

// Get number from string
function getNumberFromString(s) {
	return s.replace(/\D/g, "");
}
// console.log(getNumberFromString("this5 is number: 7"))

// Tip Calculator
function calculateTip(amount, rating) {
	switch (rating.toLowerCase()) {
		case "terrible":
			return 0;
		case "poor":
			return Math.ceil(amount * 0.05);
		case "good":
			return Math.ceil(amount * 0.1);
		case "great":
			return Math.ceil(amount * 0.15);
		case "excellent":
			return Math.ceil(amount * 0.2);
		default:
			return "Rating not recognised";
	}
}

calculateTip = (amount, rating) =>
	((tipScale) =>
		tipScale < 0
			? "Rating not recognised"
			: Math.ceil(amount * tipScale * 0.05))(
		["terrible", "poor", "good", "great", "excellent"].indexOf(
			rating.toLowerCase()
		)
	);

// Sleigh Authentication
function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
	return name == "Santa Claus" && password == "Ho Ho Ho!";
};

// Power
function numberToPower(number, power) {
	let result = 1;
	for (let i = 0; i < power; i++) {
		result *= number;
	}
	return result;
}
// console.log(numberToPower(4, 2))

// validate code with simple regex
validateCode = (code) => /^[123]/.test(code);

// get ascii value of character

getASCII = (c) => c.charCodeAt(0);

// Regexp Basics - is it a digit?

String.prototype.digit = function () {
	return /^\d$/.test(this);
};

// ES6 string addition
function joinStrings(string1, string2) {
	return `${string1.toString()} ${string2.toString()}`;
}
// console.log(joinStrings('hello', 'string2'))

// Duck Duck Goose
duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

// Is it a number?
isDigit = (s) => s == parseFloat(s);

// Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
	return Object.values(gunners).includes("nay")
		? "Shiver me timbers!"
		: "Fire!";
};

// Simple Comparison?
function add(a, b) {
	return a == b;
}

// Polish alphabet
correctPolishLetters = (string) =>
	string.replace(
		/[ąćęłńóśź]/g,
		(replacer) => "acelnoszz"["ąćęłńóśź".indexOf(replacer)]
	);

// Count words
function countWords(str) {
	return (str.match(/[^\s]+/g) || []).length;
}

// console.log(countWords("Hello, World!"))

// Template Strings

const TempleStrings = function (obj, feature) {
	return `${obj} are ${feature}`;
};

// Take an Arrow to the knee, Functionally
var ArrowFunc = function (arr) {
	return arr.map((arr) => String.fromCharCode(arr)).join(""); //Complete this function
};

// Safen User Input Part I - htmlspecialchars

htmlspecialchars = (formData) =>
	formData.replace(
		/[<>"&]/g,
		(replacerFuction) =>
			({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "&": "&amp;" }[
				replacerFuction
			])
	);

// Enumerable Magic #1 - True for All?
all = (arr, fun) => arr.every(fun);

// A Strange Trip to the Market
function isLockNessMonster(s) {
	return (
		s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50")
	);
}
// console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))

// UEFA EURO 2016
function uefaEuro2016(teams, scores) {
	if (scores[0] > scores[1]) {
		return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
	} else if (scores[1] > scores[0]) {
		return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
	} else {
		return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
	}
}
// console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]))

//Simple Change Machine
function changeMe(moneyIn) {
	switch (moneyIn) {
		case "£5":
			return "20p ".repeat(25).trim();
		case "£2":
			return "20p ".repeat(10).trim();
		case "£1":
			return "20p ".repeat(5).trim();
		case "50p":
			return "20p 20p 10p";
		case "20p":
			return "10p 10p";
		default:
			return moneyIn;
	}
}

// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
function quote(fighter) {
	return fighter.toLowerCase() === "george saint pierre"
		? "I am not impressed by your performance."
		: "I'd like to take this chance to apologize.. To absolutely NOBODY!";
}
// console.log(quote('George Saint Pierre'))

// Flick Switch
function flickSwitch(arr) {
	let on = true;
	return arr.map((item) => {
		if (item === "flick") {
			on = !on;
		}
		return on;
	});
}

// console.log(flickSwitch(["codewars", "flick", "code", "wars"]))

// Leonardo Dicaprio and Oscars

function leo(oscar) {
	if (oscar === 88) {
		return "Leo finally won the oscar! Leo is happy";
	} else if (oscar === 86) {
		return "Not even for Wolf of wallstreet?!";
	} else if (oscar < 88) {
		return "When will you give Leo an Oscar?";
	} else if (oscar > 88) {
		return "Leo got one already!";
	}
}

// Up and down, the string grows

// STRANGE_STRING = `No grow, actual length: ${original} ⇒ ${toUpper}`
// const toUpper = STRANGE_STRING.toUpperCase().toLowerCase().length
// const original = STRANGE_STRING.length

//
// Aspect Ratio Cropping - Part 1

function aspectRatio(x, y) {
	return [Math.ceil((16 / 9) * y), y];
}
// console.log(aspectRatio(640, 480))

// Classy Classes
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	get Info() {
		return `${this.name}s age is ${this.age}`;
	}
}

let john = new Person("john", 34);

// Simple Fun #261: Whose Move
function whoseMove(lastPlayer, win) {
	if (
		(lastPlayer == "white" && win == true) ||
		(lastPlayer == "black" && win == false)
	) {
		return "white";
	} else {
		return "black";
	}
}

// pick a set of first elements
first = (arr, n) => (n == undefined ? arr.slice(0, 1) : arr.slice(0, n));

// Pythagorean Triple
function isPythagoreanTriple(integers) {
	integers = integers.sort((a, b) => a - b);
	let a = integers[0] * integers[0];
	let b = integers[1] * integers[1];
	let c = integers[2] * integers[2];
	if (a + b == c) {
		return true;
	} else {
		return false;
	}
}
// console.log(isPythagoreanTriple([5, 12, 13]))

// 8kyu interpreters: HQ9+
function HQ9(code) {
	return {
		H: "Hello World!",
		Q: "Q",
		9: "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.",
	}[code];
}

// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?

function isOpposite(s1, s2) {
	let str = "";
	if (s1.length != s2.length || s1.length == 0 || s2.length == 0) return false;
	for (let i = 1; i < s1.length; i++) {
		s1[i] === s1[i].toUpperCase()
			? (str += s1[i].toLowerCase())
			: (str += s1[i].toUpperCase());
	}
	return str === s2;
}
// console.log(isOpposite("WPdgaAIz","wPdgAAiz"))

// Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo() {
	return !true;
}

// Grader

function grader(score) {
	if (score > 1 || score < 0.6) return "F";
	if (score >= 0.9) return "A";
	if (score >= 0.8) return "B";
	if (score >= 0.7) return "C";
	if (score >= 0.6) return "D";
}

// Grasshopper - Order of operations

function orderOperations() {
	return (2 + 2) * (2 + 2) * 2;
}

// Fuel Calculator: Total Cost

function fuelPrice(litres, pricePerLitre) {
	for (let i = 2; i <= 10; i += 2) if (litres >= i) pricePerLitre -= 0.05;
	return +(litres * pricePerLitre).toFixed(2);
}
// console.log(fuelPrice(8, 2.5))

// Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr) {
	return []
		.concat(...arr)
		.sort((a, b) => b - a)
		.join(">");
}
//  console.log(bigToSmall([[1,2],[3,4],[5,6]]))

// Color Ghost

var Ghost = function () {
	this.color = ["white", "yellow", "red", "purple"][
		Math.floor(Math.random() * 4)
	];
};

// Geometry Basics: Circle Circumference in 2D
circleCircumference = (circle) => 2 * Math.PI * circle.radius;

// ASCII Total
function uniTotal(string) {
	let sum = 0;
	for (let i = 0; i < string.length; i++) {
		sum += string.charCodeAt(i);
	}
	return sum;
}
// console.log(uniTotal('aa'))

// Calculate Price Excluding VAT
//return price without vat
function excludingVatPrice(price) {
	let VAT = price - (price / (1 + 0.15)) * 0.15;
	if (price == null) {
		return -1;
	} else {
		return +VAT.toFixed(2);
	}
}
// console.log(excludingVatPrice(230))

// Freudian translator
toFreud = (string) =>
	!string
		? ""
		: string
				.split(" ")
				.map((word) => "sex")
				.join(" ");

//  Return Two Highest Values in List
twoHighest = (arr) => [...new Set(arr.sort((a, b) => b - a))].slice(0, 2);

// Be Concise I - The Ternary Operator
function describeAge(age) {
	return (
		"You're a(n) " +
		(age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
	);
}

// Job Matching #1
function match(candidate, job) {
	if (!candidate.minSalary || !job.maxSalary) throw error;
	return candidate.minSalary * 0.9 <= maxSalary;
}

// Age Range Compatibility Equation
function datingRange(age) {
	let min = Math.floor(age / 2 + 7);
	let max = Math.floor((age - 7) * 2);
	if (age <= 14) {
		min = Math.floor(age - 0.1 * age);
		max = Math.floor(age + 0.1 * age);
	}
	let range = `${min}-${max}`;
	return range;
}
// console.log(datingRange(17))

// Days in the year
function yearDays(year) {
	const lastTwo = String(year).slice(-2);
	let days = 365;
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		return `${year} has ${days + 1} days`;
	} else {
		return `${year} has ${days} days`;
	}
}
// console.log(yearDays(-1000))

// Geometry Basics: Circle Area in 2D
circleArea = (circle) => Math.PI * circle.radius ** 2;

// Jaden Casing Strings

String.prototype.toJadenCase = function () {
	return this.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
};

// Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
	return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;
}

distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

// Training JS #5: Basic data types--Object

function animal(obj) {
	return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// OOP: Object Oriented Piracy

function Ship(draft, crew) {
	const CREW_WIEGHT = 1.5;
	const MIN_BOOTY = 20;

	this.draft = draft;
	this.crew = crew;
	this.crewWeight = this.crew * CREW_WIEGHT;

	this.isWorthIt = () => this.draft - this.crewWeight > MIN_BOOTY;
}

// class Ship {
//   constructor(draft, crew) {
//     this.draft = draft
//     this.crew = crew
//   }

//   isWorthIt() {
//     return this.draft - 1.5 * this.crew > 20;
//   }
// }

// Find the odd int?

// function findOdd(A) {
//   let counts = A.reduce(function (obj, item) {
//     if (!obj[item]) {
//       obj[item] = 0;
//     }
//     obj[item]++;
//     return obj;
//   }, {})
//   return counts
// }
// console.log(findOdd([0,1,0,1,0]))

// let arr1 = [0,1,0,1,0];
// let counts = {};

// for (let i = 0; i < arr1.length; i++) {
//   if (counts[arr1[i]] % 3 == 0) {
//    return counts[arr1[i]]++;
//   } else {
//     counts[arr1[i]] = 1;
//   }
// }
// console.log(counts);

// const occurrences = [0,1,0,1,0].reduce(function (acc, curr) {
//   return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
// }, {});

// console.log(occurrences)

// Training JS #21: Methods of String object--trim() and the string template

function fiveLine(s) {
	let string = s.trim();
	let arr = [string];
	for (let i = 2; i <= 5; i++) {
		arr.push(string.repeat(i));
	}
	return arr.join("\n");
}

// console.log(fiveLine('a'))

// var str="Hello World!";
// console.log(str.indexOf("o",5))
// console.log(str.lastIndexOf("o",5))
// console.log(str.search("o"))
// //output:
// 7
// 4
// 4

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

const firstToLast = (str, c) =>
	str.indexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c);

// Find the index of the second occurrence of a letter in a string

function secondSymbol(s, symbol) {
	return s.indexOf(symbol, s.indexOf(symbol) + 1);
}

// Training JS #16: Methods of String object--slice(), substring() and substr()

const cutIt = (arr) =>
	arr.map((element) =>
		element.slice(0, Math.min(...arr.map((element) => element.length)))
	);

function cutIt2(arr) {
	const minLength = Math.min(...arr.map((x) => x.length));
	return arr.map((x) => x.slice(0, minLength));
}

const cutIt3 = (arr) =>
	arr.map((val) => val.slice(0, Math.min(...arr.map((val) => val.length))));

// Ce*s*r*d Strings
function uncensor(infected, discovered) {
	let result = "",
		discoveredIndex = 0;
	for (
		let infectedIndex = 0;
		infectedIndex < infected.length;
		infectedIndex++
	) {
		if (infected[infectedIndex] == "*") {
			result += discovered[discoveredIndex];
			discoveredIndex++;
		} else {
			result += infected[infectedIndex];
		}
	}
	return result;
}

function uncensor2(infected, discovered) {
	const arr = [...discovered];
	return [...infected].map((el) => (el === "*" ? arr.shift() : el)).join("");
}

// Consecutive Vowels in a String
// function getTheVowels(word) {
//   let vowelCount = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   const letters = word.split('');
//   for (let char of word) {
//     if (vowels.includes(char)) {
//       vowelCount++
//     }
//   }
//   return vowelCount
// }

function getTheVowels2(word) {
	let vowels = "aeiou",
		vowelsIndex = 0,
		result = 0;
	for (let index = 0; index < word.length; index++) {
		if (word[index] == vowels[vowelsIndex]) {
			result++;
			if (vowelsIndex == 4) {
				vowelsIndex = 0;
			} else {
				vowelsIndex++;
			}
		}
	}
	return result;
}

const getTheVowels = (word, vowels = "aeiou") =>
	word
		.split("")
		.reduce((prev, curr) => prev + (curr == vowels[prev % vowels.length]), 0);

// Convert string to camel case

// function toCamelCase(str){
//  str = str.split('_').join(' ').replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
//   return str
// }
// // console.log(toCamelCase("the_stealth_warrior"))

// // Grouping in string
// function isConsecutive(str) {
//   const numbers = str.split(/\D+/).filter(Boolean).map(Number);

// console.log(str)
//   for (let i = 1; i <= numbers.length; i++) {
//     const currentNum = numbers[i].toString();
//     const prevNum = numbers[i - 1].toString()

//    if (
//     currentNum.length === prevNum.length &&
//     currentNum !== prevNum &&
//     parseInt(currentNum, 10) !== parseInt(prevNum, 10) + 1
//    ) {
//     return false;
//    }
//   }
//   return true;
//   }

const isConsecutive2 = (str) => {
	const numbers = str.split(/\D+/);

	for (let i = 0; i <= numbers.length; i++) {
		if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
			return false;
		}
	}

	return true;
};

const isConsecutive = (str) => {
	// str = str.split(/\D+/);

	for (let i = 0; i < str.length; i++) {
		if (str[i] + 1 === str[i] || str[i] + 1 === str[i + 1]) {
			return true;
		}
	}
	return false;
};
// console.log(isConsecutive("001234400522"))

// Split Strings
function solution(str) {
	let i = 0;
	let result = [];
	if (str.length % 2 !== 0) {
		str += "_";
	}
	while (i < str.length) {
		result.push(str[i] + str[i + 1]);
		i += 2;
	}
	return result;
}
// console.log(solution("abcdef"))

// PREP
// P-Parameters
// R-Retuns
// E-Exmples
// P-Pseudocode

// Simple Pig Latin
// Parameters - a string with a varying number of words in it. Words may have puncuation marks seperated by a space.
// Result - A string of one or multiple words seperated by spaces with 'ay' appended to the end of each word UNLESS that word is a punctuation mark.
// Examples -  pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
//Pseudocoe - split the string into individual words, then split each word into two parts - the first letter, and the rest of the string. Reverse the order of these parts, and concatinate them back together. Check if a word is actually a puctuation mark and if it is NOT, then add "ay" to the end. Concatenate the individual words back into a single string and return.

//push, slice, charCodeAt, spilt, join, map, reverse, match

function pigIt(str) {
	let marks = [".", "!", "?", '"', ","];
	result = str
		.split(" ")
		.map((word) => word.slice(1) + word[0] + (marks.includes(word) ? "" : "ay"))
		.join(" ");
	return result;
}
// pigIt('Pig latin is cool')

// Moving Zeros To The End

//Parameters: A single array with multiple types of elements including numbers, strings, booleans
//Return: A single array with the same elements BUT the zeros are moved to the end of the array. The other elements should remain in the same location in the array.
//Examples: moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
//Pseudocode: iterate over the starting array and identify the zeros. We could take the exisiting zeros and move them to the end of the array or we could count the zeros, remove them, then append the correct number of zeros to the end of the array.
//proposed solution - iterate through the original array and assign each value to a new array bucket depending on if zero or not. join the buckets together and output.

function moveZeros(arr) {
	let catchall = [];
	let zeros = [];
	for (let i = 0; i < arr.length; i++) {
		arr[i] === 0 ? zeros.push(arr[i]) : catchall.push(arr[i]);
	}
	return [...catchall, ...zeros];
}

//Parameters - an integer that is non-negative indicating a count of secods, which are the basic unit on our clock. the max number of seconds will be 359999 or less.
//Returns - a clock value containg hours, minutes, seconds, with the specific format of HH:MM:SS, with values 9 and below having a leading zero.
//Example - humanReadable(0), '00:00:00', 'humanReadable(0)');(humanReadable(59), '00:00:59', 'humanReadable(59)');(humanReadable(60), '00:01:00', 'humanReadable(60)');

//Take in integer and divide by 60 the appropriate amount of times and assign the result to hours, minutes, and secods. Pad leading zeros where needed, and print hours, minutes, seconds with a colon between them.

// Human Readable Time

function humanReadable(seconds) {
	let hours = Math.floor(seconds / 3600);
	seconds = seconds - hours * 3600;
	hours = hours.toString().padStart(2, "0");
	let minutes = Math.floor(seconds / 60);
	seconds = (seconds - minutes * 60).toString().padStart(2, "0");
	minutes = minutes.toString().padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
}

//PARAMETERS: an array of positive integers, whole numbers greater than 0, the array has a min of 4 integers

//RESULTS: sum of the two lowest ints in the array, a single number.

//EXAMPLES: (sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13")

//PSEUDOCODE: sort the array from smallest to largest, capture the two smallest array members and sum.

// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
	let arr = numbers.sort((a, b) => a - b);
	return arr[0] + arr[1];
}

//PARAMETERS: a triangle of consecutive odd numbers with n rows, where n starts at 1, input is the row number

//RESULTS: sum of the numbers in row n

//EXAMPLES: assert.strictEqual(rowSumOddNumbers(42), 74088);

//PSEUDOCODE:

// Sum of odd numbers

function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}

//PARAMETERS: an array containing ones and zeros, could be varying length

//RESULTS: an integer equivalent of the binary value represented in the array

//EXAMPLES: Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
//     Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
//     Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
//     Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
// });

//PSEUDOCODE: take the array and join the elements together into a string and then convert string and return the integer equivalent.

// Ones and Zeros
const binaryArrayToNumber = (arr) => {
	parseInt(arr.join(""), 2);
};

//PARAMETERS: an array of integers, or an empty array

//RESULTS: whether the sum of the array of elements is even or odd, displayed as the word "even" or "odd"

//EXAMPLES:  assert.strictEqual(oddOrEven([0]), 'even')
// assert.strictEqual(oddOrEven([1]), 'odd')
// assert.strictEqual(oddOrEven([]), 'even')

//PSEUDOCODE: use reduce method to sum the array of elements and then check whether it is odd or even using a modulus, then return the appropriate string value.

// Odd or Even?
function oddOrEven(array) {
	array.reduce((sum, current) => sum + current, 0) % 2 ? "odd" : "even";
}

//PARAMETERS: an array of varying length containing string values

//RESULTS: an array of strings containing the original values with the line number and a colon + space in front

//EXAMPLES:  assert.deepEqual(number([]), [], 'Empty array should return empty array');
// assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

//PSEUDOCODE: iterate over each array value prepend the line number (starting with one), and add a colon and a space between the line number and the value

// Testing 1-2-3

var number = function (array) {
	return array.map((alpha, index) => `${index + 1}: ${alpha}`);
};

// Remove anchor from URL
function removeUrlAnchor(url) {
	return url.split("#")[0];
}
// console.log(removeUrlAnchor('www.codewars.com#about'))

// Arrays practice

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// nums.push(6)
// nums.unshift(0)
// nums.pop()
// nums.shift()
// nums.splice(3)
// nums.slice(1, 4)
// nums.filter(n => n%2==0)
// nums.map(n => n*2)
// let indexOf = nums.indexOf(4)
// let lastIndexOf = nums.lastIndexOf(9)

// console.log(indexOf)

// Create Phone Number
function createPhoneNumber(numbers) {
	numbers.splice(3, 0, ") ");
	numbers.splice(7, 0, "-");
	return "(" + numbers.join("");
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

function createPhoneNumber(numbers) {
	return numbers.reduce(
		(phoneNum, arr) => phoneNum.replace("x", arr),
		"(xxx) xxx-xxxx"
	);
}
// Sum of positive

function positiveSum(arr) {
	let posNums = [];
	let posTotal = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			posNums.push(arr[i]);
			posTotal = posNums.reduce((acc, curr) => acc + curr, 0);
		}
	}
	return posTotal;
}
// console.log(positiveSum([1,-2,3,4,5]))

function arrayDiff(a, b) {
	return a.filter((val) => !b.includes(val));
}

// console.log(arrayDiff([1,2,2], [2]))

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
	numbers = numbers.sort((a, b) => a - b);
	return numbers[0] + numbers[1];
}
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

// The highest profit wins!
function minMax(arr) {
	arr = arr.sort((a, b) => a - b);
	return [arr[0], arr.pop()];
}

// console.log(minMax([1, 2, 3, 4, 5, 2]))

// Sort the odd
function sortArray(array) {
	let oddSort = array.filter((e) => e % 2).sort((a, b) => a - b);
	return array.map((e) => (e % 2 ? oddSort.shift() : e));
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]))

// Array.diff

function arrayDiff(a, b) {
	return a.filter((val) => !b.includes(val));
}
// console.log(arrayDiff([1,2,2], [2]))

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
	numbers.sort((a, b) => a - b);
	return numbers[0] + numbers[1];
}

// Take a Ten Minutes Walk
function isValidWalk(walk) {
	let ns = 0,
		we = 0;
	for (let dir of walk) {
		if (dir == "n") ns += 1;
		if (dir == "s") ns -= 1;
		if (dir == "w") we += 1;
		if (dir == "e") we -= 1;
	}
	return walk.length == 10 && ns === 0 && we === 0;
}

// Find the unique number
function findUniq(arr) {
	let repeated = arr.filter((item, index) => arr.indexOf(item) !== index);
	return arr.filter((item) => item !== repeated[0])[0];
}

// console.log(findUniq([ 1, 0, 0 ]))

// Remove the minimum
function removeSmallest(numbers) {
	let copy = numbers.slice(0);
	let min = numbers.indexOf(Math.min(...numbers));
	copy.splice(min, 1);
	return copy;
}

// console.log(removeSmallest([1, 1, 2, 3, 4, 5]))

// Two Sum

function twoSum(numbers, target) {
	let num1;
	let num2;
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			let res = numbers[i] + numbers[j];
			if (res == target) return [i, j];
		}
	}
}
// console.log(twoSum([1, 2, 3], 4))

// Which are in?
function inArray(a1, a2) {
	return a1.filter((a1) => a2.find((a2) => a2.match(a1))).sort();
}

// console.log(inArray(['arp','live','strong'], ["lively", "alive", "harp", "sharp", "armstrong"]))

// Create Phone Number
function createPhoneNumber(numbers) {
	return (
		"(" +
		numbers.splice(0, 3).join("") +
		") " +
		numbers.splice(0, 3).join("") +
		"-" +
		numbers.splice(0, 4).join("")
	);
}
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function createPhoneNumber(numbers){
//   numbers.splice(3, 0, ") ")
//   numbers.splice(7, 0, "-")
//   return '(' + numbers.join('')
// }

// Sum of positive
function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum;
}
// console.log(positiveSum([1,-2,3,4,5]))

// Array.diff
function arrayDiff(a, b) {
	return a.filter((e) => !b.includes(e));
}

// console.log(arrayDiff([1,2], [1]))

// Square(n) Sum

function squareSum(numbers) {
	return numbers.map((num) => num ** 2).reduce((a, c) => a + c, 0);
}

// console.log(squareSum([1,2]))

// Duplicate Encoder
// function duplicateEncode(word){
//   chars=[...word];
//   return chars.map((char, i, chars) => chars.indexOf(char)===i? "(":"")").join('');
// }

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
	numbers.sort((a, b) => a - b);
	return numbers[0] + numbers[1];
}
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

// Who likes it?
function likes(names) {
	if (names.length == 0) {
		return "no one likes this";
	} else if (names.length == 1) {
		return names + " likes this";
	} else if (names.length <= 2) {
		return names.join(" and ") + " like this";
	} else if (names.length > 3) {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	} else {
		return (
			names.slice(0, -1).join(", ") +
			" and " +
			names[names.length - 1] +
			" like this"
		);
	}
}
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

// Stop gninnipS My sdroW!
function spinWords(string) {
	let words = string.split(" ");
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > 5) {
			words[i] = words[i].split(" ").reverse().join("");
		}
		let result = words.join(" ");
		return result;
	}
}
// console.log(spinWords("Hey fellow warriors"))

function reverse(string) {
	let words = string.split(" ");
	for (let i = 0; i < words.length; i++) {
		if (words[i].length >= 5) {
			words[i] = words[i].split("").reverse().join("");
		}
	}
	let resultStr = words.join(" ");
	return resultStr;
}
// console.log(reverse("Hey fellow warriors"))

// Counting Duplicates
function duplicateCount(text) {
	let charFreq = {};
	let dups = 0;

	for (let char of text) {
		char = char.toLowerCase();
		charFreq[char] = (charFreq[char] || 0) + 1;

		if (charFreq[char] === 2) {
			dups++;
		}
	}

	return dups;
}
// console.log(duplicateCount("aabbcde"))

// Replace With Alphabet Position
function alphabetPosition(text) {
	const words = text.toLowerCase().replace(/[^a-z]/g, "");
	return [...words].map((v) => v.charCodeAt() - 96).join(" ");
}
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// Reverse words
function reverseWords(str) {
	str = str.split(" ");
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].split("").reverse().join("");
	}
	return str.join(" ");
}
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
	let count = 0;
	for (let letter of text.toLowerCase()) {
		if (vowels.includes(letter)) {
			return count++;
		}
	}
}

// console.log(vowelsCounter("abracadabra"));

function capSentence(text) {
	return text
		.toLowerCase()
		.split(" ")
		.map((x) => x[0].toUpperCase() + x.slice(1))
		.join(" ");
}

// console.log(capSentence('i must confess, this is so much fun.'))

function chunkArray(array, size) {
	array = array.concat(size);
	let result = [];
	for (let num of array) {
		if (!result.includes(num)) {
			result.push(num);
		}
	}
	return result;
}
// console.log(chunkArray([1,2,3,3,3], [1,4,5,2]))

function factorial(n) {
	return n != 1 ? n * factorial(n - 1) : 1;
}

//  console.log(factorial(5))

function falsyBouncer(array) {
	return array.filter(Boolean);
}

// console.log(falsyBouncer([1, 0, null, '', 5]))

function fibonacci(n) {
	if (n <= 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(20))

function fizzBuzz(n) {
	for (let i = 0; i <= n; i++) {
		if (i % 15 == 0) {
			console.log("fizzbuzz");
		} else if (i % 3 == 0) {
			console.log("fizz");
		} else if (i % 5 == 0) {
			console.log("buzz");
		}
	}
}

// console.log(fizzBuzz(30))

function hammingDistance(stringA, stringB) {
	let result = 0;

	if (stringA.length == stringB.length) {
		for (let i = 0; i < stringA.length; i++) {
			if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
				result++;
			}
		}
		return result;
	}
}

// console.log(hammingDistance('rover', 'river'))

function isAnagram(stringA, stringB) {
	a = stringA.split("").sort();
	b = stringB.split("").sort();
	for (let i = 0; i < a.length; i++) {
		if (a.length === b.length) {
			if (a[i] === b[i]) {
				return true;
			} else {
				return false;
			}
		}
	}
}
// console.log(isAnagram('silent', 'listen'))

function longestWord(text) {
	text = text.split(" ").sort();
	for (let i = 0; i < text.length; i++) {
		return text[i];
	}
}

// console.log(longestWord('Top Shelf Web Development Training on Scotch'))

function maxRecurringChar(text) {
	return text.split("").reduce(
		(acc, char) => {
			let len = text.split(char).length - 1;
			return len > acc[1] ? [char, len] : acc;
		},
		["", 0]
	)[0];
}

// console.log(maxRecurringChar('aabacada'))

function mergeArrays(...arrays) {
	let jointArr = [];

	arrays.forEach((array) => {
		jointArr = [...jointArr, ...array];
	});

	return [...new Set([...jointArr])];
}

// console.log(mergeArrays([1,2,3,3,3], [1,4,5,2]))

function palindromeChecker(text) {
	if (text.split("").reverse().join("") == text) {
		return true;
	} else {
		return false;
	}
}
// console.log(palindromeChecker('racecar'))

function whereIBelong(arr, num) {
	arr.sort((a, b) => a - b);

	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] >= num) {
			return i;
		}
	}
	return arr.length;
}

// console.log(whereIBelong([1,2,3,4], 3))

// arr of nums, target num, return indices of nums that add up to target
// [1,2,3,4,5] target 9 => return indices 3,4

//arr of nums - not empty, always nums, whole, positive, at least 2 nums
// return indices of the nums that add up to target -> []

// [1,2,3,4,5] target 9 => return indices [3,4]
// [5,6,9] target 11 => return indices [0,1]
// [22, 7, 100, 5], 12 => [1,3]

function findIndices(arr, target) {
	//grab a num
	for (let i = 0; i < arr.length; i++) {
		//comparing outisde num to internal nums
		for (let k = 0; k < arr.length; k++) {
			if (arr[i] + arr[k] === target && i !== k) {
				return [i, k];
			}
		}
	}
}

// console.log(findIndices([1,2,3,4,5], 9), '[3,4]')
// console.log(findIndices([5,6,9], 11), '[0,1]')
// console.log(findIndices([22, 7, 100, 5], 12), '[1,3]')

var lengthOfLastWord = function (s) {
	s = s.trim().split(" ");
	return s[s.length - 1].length;
};

// console.log(lengthOfLastWord("   fly me   to   the moon  "));


var plusOne = function(digits) {
  const n = digits.length;

  // Start from the rightmost digit
  for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit
      digits[i]++;

      // If there is no carry, we're done
      if (digits[i] < 10) {
          break;
      } else {
          // There is a carry, set the current digit to 0
          digits[i] = 0;
      }
  }

  // If there is still a carry after processing all digits, insert a new digit at the beginning
  if (digits[0] === 0) {
      digits.unshift(1);
  }

  return digits;  
 };
// console.log(plusOne([9]))

// Summing function for a sorted, contiguous array of integers that starts with the number 1

const sumContiguousArray2 = function(arr){
	//get the last function(ary){
  // get the last item 
  const lastItem = ary[ary.length - 1]
  // Gauss's trick 
  return lastItem * (lastItem + 1) / 2
}
const numss = [1,2,3,4,5]
// const sumOfArray = sumContiguousArray2(n function(arr){
	//get the last mss)



    //word -> palidrome
    //str -> letter, all lowercase, no spec, no funny biz
    //return true or false

    function isPallidrome(word){
        //split, reverse, join
        let reverseWord = word.split('').reverse().join('')
        //rev === word
        return reverseWord === word
    }

    // console.log(isPallidrome('racecar'), 'true')
    // console.log(isPallidrome('spongebob'), 'false')

	const sumContiguousArray3 = function(arr){
		//get the last item
		const lastItem = arr[arr.length - 1]
		//Gauss's trick
		return lastItem * (lastItem + 1) /2
	}
	const nums3 = [1,2,3,4,5]
	const sumOfArray2 = sumContiguousArray2(nums)


	/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

	reverse(nums, 0, nums.length - 1)
	reverse(nums, k, nums.length - 1)
	reverse(nums, 0, k - 1)
};

let reversed = function(nums, start, end) {
	while  (start < end) {
		let temp = nums[start]
		nums[start] = nums[end]
		nums[end] = temp
		start++
		end--
	}
}
	