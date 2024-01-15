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

