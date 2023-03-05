/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
const vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
  let counter = 0;
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
        return count ++
    }
  }
}

console.log(vowelsCounter("abracadabra"));

/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/ 
function capSentence(text) {
    return text.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
  }
  
//   console.log(capSentence('i must confess, this is so much fun.'))

/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    array = array.concat(size)
    let result = [];
    for (let num of array) {
      if (!result.includes(num)) {
        result.push(num)
      }
    }
    return result
  }
  console.log(chunkArray([1,2,3,3,3], [1,4,5,2]))

/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n) {
 return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))

/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/
function falsyBouncer(array) {
    return array.filter(Boolean)
   }
   
   console.log(falsyBouncer([1, 0, null, '', 5]))

   /*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

function fibonacci(n) {
    if (n <= 1) {
      return 1;
    } 
      return fibonacci(n - 1) + fibonacci(n - 2)
  }
  
  console.log(fibonacci(20))

  /*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



