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

const counter = Counter(10)
counter.increment()
counter.increment()
counter.increment()