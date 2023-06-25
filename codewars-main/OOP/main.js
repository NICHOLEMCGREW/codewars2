// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overtime * rate);
// }

// let employee = {
//     baseSalary: 30_000,
//     overtime:10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };
// employee.getWage()

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// factory function 

// function createCircle(radius){
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

// constructor function 

// function Circle(radius) {
//     this.radius = radius;

//     this.defaultLocation = { x: 0, y: 0};

//     this.computeOptimumLocation = function() {

//     }
//     this.draw = function() {
//         this.computeOptimumLocation();

//         console.log('draw');
//     }
// }


// const circle = new Circle(10);

// let number = 10;

// function increase(number) {
//     number++;
// }

// console.log(increase(number));
// console.log(number)

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key])
// }

// const keys = Object.keys(circle);
// console.log(keys)

// if ('radius' in circle)
//     console.log(`Circle has a radius.`)

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
        throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
        throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}
const sw = new Stopwatch();
