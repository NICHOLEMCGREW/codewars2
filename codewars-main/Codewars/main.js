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
    }  else if ((a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) || (a.match(/[a-z]/g) && b.match(/[a-z]/g))) {
        return 1;
    } else {
        return 0;
    }
}

// console.log(sameCase("B", "B"))

// Quarter of the year

const quarterOf = (month) => {
switch(month) {
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
}

// console.log(quarterOf(5))

// Multiplication table for number

function multiTable(number) {
    const rows = []
    for (let i = 1; i <= 10; i++) {
        rows.push(`${i} * ${number} = ${i * number}`);
    }
    return rows.join('\n')
  }
//   console.log(multiTable(5))

multiTable = number => [...Array(10)].map((_,index) => `${index + 1} * ${number} = ${(index + 1) * number}`).join('\n');

// Who ate the cookie?

function whoAteTheCookie(x) {
    if (typeof x === 'string') {
        return "`Who ate the last cookie? It was Zach";
    } else if (typeof x === float) {
        return "`Who ate the last cookie? It was Monica";
    } else {
    } return "`Who ate the last cookie? It was the dog";
}

// console.log(whoAteTheCookie('joe'))

cookie = x => `Who ate the last cookie? It was ${{string:'Zach', number:'Monica'}[typeof x] || 'the dog'}!`

function cookie(x) {
    return `Who ate the last cookie? It was ${{string:'Zach', number:'Monica'}[typeof x] || 'the dog'}!`
}


// Welcome!

    greet = language => 
    (hello => hello[language] || 'Welcome')
    ({
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso' 
    })

        // console.log(greet('czech'))



// Grasshopper - Function syntax debugging

function main (verb, noun) {
  return verb + noun
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
    let newArr = n.toString().split('');
    while(newArr[newArr.length - 1] === '0') {
        newArr.pop()
    }
    return +newArr.join('')
  }

//   console.log(noBoringZeros(455600))


//   Reverse List Order

  function reverseList(list) {
    return list.reverse()
  }
//   console.log(reverseList([4,5,6]))

//   Training JS #18: Methods of String object--concat() split() and its good friend join()

splitAndMerge = (string, separator) => string.split(' ').map(element => element.split('').join(separator)).join(' ')


// Potenciation

function power(x,y){
    return x ** y
  }

//   console.log(power(4, 3 ))

  

  // Find the Integral

  function integrate(coefficient, exponent) {
    let addOne = exponent + 1;
    let divideOne = coefficient / addOne;
    return `${divideOne}x^${addOne}`
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

logs = (x, a, b) => Math.log(a * b) / Math.log(x)

// Miles per gallon to kilometers per liter

function converter (mpg) {
    let kpl = Number((mpg * 0.354006).toFixed(2))
    return kpl
  }

//   console.log(converter(46711))

// Add Length

function addLength(str) {
    const words = str.split(' ');
    return words.map(words => `${words} ${words.length}`);
    }

    // console.log(addLength('hello'))

    function nameLength(str) {
        const words = str.split(" ");
        return words.map(words => `${words} ${words.length}`);
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
        return array.filter((x,i) => x == 0 || x % i === 0)
      }
    // console.log(multipleOfIndex([0, 2, 3, 6, 9])) 

    // Removing Elements

         function removeEveryOther(arr){
          return arr.filter((item, index) => index % 2 === 0)
        }
        
        // console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

        // Find the position!

        position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`

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

sakuraFall = v => v > 0 ? 400 / v : 0
//   console.log(sakuraFall(10))

//   Find Multiples of a Number

function findMultiples(integer, limit) {
    let multiples = []
    for (let i = integer; i <= limit; i += integer) {
        multiples.push(i)
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
   
   const newA = a.reduce((acc, curr) => acc + curr ** 2, 0)
   const newB = b.reduce((acc, curr) => acc + curr ** 3, 0)

   if (newA > newB) {
    console.log('true')
   } else {
    console.log('b is bigger!')
   }    
}
// greaterThan([1, 2, 4, 5], [2, 3, 4, 5])


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

let arr = [22, -6, 32, 82, 9, 25]

function multiples() {
    return arr.filter((element, index) => element == 0 || element % index === 0)
}

// console.log(multiples())




//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let array = ['2', 8, 9, '3', 20]

function addNums() {
       return array.reduce((acc, curr) => acc + Number(curr), 0)
}
// console.log(addNums())


// Count Odd Numbers below n

function oddCount(n){
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
    let max = Math.max(l1 % l2, l2 % l1, l1 % 3, l2 % 3)
    let result;
    if (l1 * 3 <= max || l2 * 3 <= max) {
       
    }
    return max
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
        let min = Math.min(l1, l2)
        let max = Math.max(l1, l2)
        console.log(min)
        console.log(max)
        if (max / 3 >= min) {
            console.log(max / 3)
        } else {
            console.log(min)
        }

  }
    // console.log(maxlen(5, 17))

    // Valid Parentheses

    function validParentheses(parenStr) {
        let count = 0;
        for (i = 0; i < parenStr.length; i++) {
            if (parenStr[i] == '(') {
                count++
            } else {
                count--
            }
            if (count < 0) {
                return false
            }
        }
        return count == 0
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
    let num = numbers.split(' ');
    let max = Math.max.apply(null, num);
    let min = Math.min.apply(null, num);
    let result = (`${max} ${min}`)
    return result
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
function squareSum(numbers){
    let square = numbers.reduce((acc, curVal) => {
        return acc + curVal ** 2;
    }, 0);
    return square
}
// console.log(squareSum([1,2]))

// Welcome to the City

let name = []
let city;
let state;

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// console.log(sayHello([nichole mcgrew], yukon, oklahoma))

sayHello2 = (name, city, state) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

// Total pressure calculation

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return (givenMass1/molarMass1 + givenMass2/molarMass2) * 0.082 * (temp + 273.15) / volume;
  }

  
// Two numbers are positive

    function twoArePositive(a, b, c) {
        let count = 0;
      if (a > 0) {
        count ++;
      } if (b > 0) {
        count ++
      } if (c > 0) {
        count ++
      } if (count == 2) {
        return true
      } else {
        return false;
      }
    }

// console.log(twoArePositive(2, 4, -3))

// const twoArePositive = (...a) => a.filter(b => b > 0).length === 2;

// Square Every Digit

function squareDigits(num){
        let digits = num.toString().split('');
        return (+digits.map((n) => n * n).join(''))
  }

//   console.log(squareDigits(3212))

// Name on billboard

function billboard(name, price = 30){
    let answer = price
  for(var i = 0; i < name.length - 1; i++){
    answer += price
  }
  return answer 
}

// console.log(billboard('nichole'))


// Disemvowel Trolls

function disemvowel(str) {
    let newStr = str.replace(/[aeiou]/gi, '')
    return newStr;
  }

//   console.log(disemvowel("This website is for losers LOL!"))


// Double Char

  function doubleChar(str) {
    return str.split('').map( x => x + x ).join('');
  }
  
  // console.log(doubleChar("abcd"))

// Remove duplicates from list

function distinct(a) {
    let result = [];

    for (let num of a) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }
    return result;
  }


  // Stringy Strings

  function stringy(size) {
    let string = ''
    for (let i = 0; i < size; i++) {
      if (i % 2 == 0) {
        string += '1';
      } else {
        string += '0';
      }
    }   
    return string;
  }

  // console.log(stringy(6))

  // Remove First and Last Character Part Two

  function array5(string) {
    let newStr = string.split(',')
    for (let i = 0; i < newStr.length; i++) {
      if (newStr.length < 3 && Number.isNaN(string) === false) {
        return null;
      } else {
        newStr.shift()
        newStr.pop()
        return newStr.join(' ')
      }
    }
  }

  // console.log(array5('1,2,3'))

  function removeStr(arr) {
    return arr.split(',').splice(1,-1).join(" ") || null;
  }

  // Printing Array elements with Comma delimiters

  function printArray(array){
    for (let i = 0; i < array.length; i++) {
      let newArr = array.join('').split('""')
      console.log(array[i])
      return newArr;
    }
  }

  // console.log(printArray(["h","o","l","a"]))

  
// Counting sheep...

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count++
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
    let min = Math.min(...args)
    return min;
  }
}


// Keep Hydrated!

function litres(time) {
  let drink = Math.floor(.5 * time)
  if (drink < 1) {
    return 0;
  }
  return drink;
}

// console.log(litres(1.4))

// vowel remover

function shortcut (string) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  return string.split('').filter(item => !vowels.includes(item)).join('')
}

// console.log(shortcut('hello'))

// Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  return arr.slice(0, n)
}

// console.log(take([0, 1, 2, 3, 5, 8, 13], 3)) // [0, 1, 2]


// Grasshopper - Basic Function Fixer

function addFive(num) {
  let total = num + 5
  return total
}

// Reversing Words in a String

function reverse(string){
  return string.split(' ').reverse().join(' ')
}

// console.log(reverse('I am an expert at this'))


// multiplication table

function multiTable(number) {
  let array = []
  for (let i = 1; i <= 10; i++) {
    array.push(`${i} * ${number} = ${number * i}`)
  }
  return array.join('\n')
}

// Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol){
  let discounted = discount / 100 * normPrice
  return Math.floor(hol / discounted)
}

console.log(dutyFree(12, 50, 1000))

