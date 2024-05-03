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

function fizzBuzz(n) {
    for (let i = 0; i <= n; i++) {
      if (i % 15 == 0) {
        console.log("fizzbuzz")
      } else if (i % 3 == 0) {
        console.log("fizz")
      } else if (i % 5 == 0) {
        console.log("buzz")
      }
    }
  }
  
  console.log(fizzBuzz(30))
  

/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let result = 0
  
    if (stringA.length == stringB.length) {
  
        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
                result++
            }
        }
        return result
    }
  }
  
  console.log(hammingDistance('rover', 'river'))

  /* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


function isAnagram(stringA, stringB) {
    a = stringA.split('').sort() 
    b = stringB.split('').sort()
    for (let i = 0; i < a.length; i++) {
      if (a.length === b.length) {
      if (a[i] === b[i]) {
        return true;
      } else {
        return false
      }
    }
    }
  }
  console.log(isAnagram('silent', 'listen'))

  /* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function longestWord(text) {
    text = text.split(' ').sort()
    for (let i = 0; i < text.length; i++) {
      return text[i]
    }
  }
  
  console.log(longestWord('Top Shelf Web Development Training on Scotch'))

/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
    return text.split('').reduce((acc, char) => {
      let len = text.split(char).length - 1;
      return len > acc[1] ? [char, len] : acc
    }, ['',0])[0]
  }
  
  console.log(maxRecurringChar('aabacada'))

  /*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
    let jointArr = []
    
    arrays.forEach(array => {
      jointArr = [...jointArr, ...array]
    })
    
    return [...new Set([...jointArr])]
    }
    
    console.log(mergeArrays([1,2,3,3,3], [1,4,5,2]))

    /* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
    if (text.split('').reverse().join('') == text) {
      return true
    } else {
      return false
    }
  }
  console.log(palindromeChecker('racecar'))


  /*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


function whereIBelong(arr, num) {
    arr.sort((a,b) => a - b)
  
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] >= num) {
        return i
      }
    }
    return arr.length
  }
  
  console.log(whereIBelong([1,2,3,4], 3))
