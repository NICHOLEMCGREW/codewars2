// 2667. Create Hello World Function

const createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

// 2620. Counter
function createCounter(){
    let value = 0;

    function increment() {
        return ++value;
    }

    return {
        increment: increment
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter2.increment())