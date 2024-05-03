// 2667. Create Hello World Function

const createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

// 2620. Counter
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
       return n++; 
    };
}; 

class Counter {
    constructor(n) {
        this.n = n;
    }

    increment() {
        return ++this.n;
    }
}

// const counter = Counter(10);
// counter.increment()
// counter.increment()
// counter.increment()

// 2621. Sleep

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    
}



// 1. Two Sum

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
}
    //Paramaters: array of integers, and a target integer
    
    //Result: array of two integers which identify the indexes of the array values that add up to the target

    //Examples: Input: nums = [3,2,4], target = 6 Output: [1,2]

    //Pseudocode: use nested loops to compare each value in the array to all other values to see if they add up to the target, then when they do, return the index of both values. Complexity will be 0(n)^2

    function twoSums(nums, target) {
        let numObject = {}
            for (let i = 0; i < nums.length; i++) {
                let otherNum = target - nums[i]
                if (numObject[otherNum] !== undefined) {
                    return [numObject[otherNum], i]
                }
                numObject[nums[i]] = i
            }
    }


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