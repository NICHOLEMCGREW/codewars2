// function printVariable(variable) {
//     console.log(variable)
// }

// function nameCallback(name, callback) {
//     callback(`Hello ${name}`)
// }
// nameCallback("Nichole", function(variable) {
// console.log(variable)
// })

// function func(x) {
//     x("hello world")
// }

// func(printVariable)

// function sumCallback(a, b, callback) {
//    callback(a + b)
// }

// function handleSum(sum) {
//     console.log(sum)
// }
// sumCallback(1, 2, handleSum)

// function sum(a, b) {
// 	return a + b;
// }

// let sumArrow = (a, b) => a + b;

// console.log(sumArrow(1, 2));

// let printName = (name) => {
// 	console.log(name);
// };
// printName("nichole");

// let printHi = name => "Hi" + " " +name

// console.log(printHi('nichole'))

// let hiArrow = () => {
//     console.log('hi')
// }
// hiArrow()

// function func(x, callback) {
//     callback(x)
// }

// func(10, variable => console.log(variable))

// function doStuff(a, b, name) {
//     print(sum(a, b))
//     print(sayHi(name))
//   }

//   function print(variable) {
//     console.log(variable)
//   }

//   function sum(a, b) {
//     return a + b
//   }

//   function sayHi(name) {
//     return "Hi " + name
//   }

//   doStuff(1, 2, "Nichole")

// function sum(a, b) {
//     return a + b
// }

// let sumArrow = (a, b) => {
//     return a + b
// }
// console.log(sumArrow(1, 2))

// function sayHi(name) {
// 	let result = "Hi " + name;
// 	// console.log(result)
// }
// let name = "Kyle";
// sayHi(name);

// function print(variable) {
// 	let c = 3;
// 	return function func(variable2) {
// 		// console.log(variable)
// 		// console.log(variable2)
// 		// console.log(c)
// 	};
// }

// let a2 = print(1);
// a(2);

// let a = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// a.push(11)
// console.log(a)

// let alpha = ["a", "b", "c", "d", "e"];
// // console.log(alpha[2])

// const a = [
// 	[1, 2, 3, 4, 5],
// 	[6, 7, 8, 9, 10],
// 	[11, 12, 13, 14, 15],
// ];

// // console.log(a[0][3])
// // console.log(a[1][2])
// // console.log(a[2][0])

// let name = "Kyle";
// const age = 25;
// const favNum = 3;

// let person = {
// 	name: "Kyle",
//     hobbies: ["Weight Lifting", "Programming"],
//     address: {
//         street: '12345 Main St',
//         city: "Somewhere"
//     },
// 	age: 25,
// 	favNum: 3,
// 	sayHi2() {
// 		// console.log("Hi");
// 	},
//     property: "value"
// };

// person.sayHi2();

// let car = {
//     make: "Nissan",
//     model: "Rougue",
//     isUsed: true,
//     makeNoise() {
//         // console.log('Vroom')
//     }
// }

// car.makeNoise()
// const property = "make"
// // console.log(car.make)

// // console.log(person.address.city)

// let book = {
//     title: 'Young Forever',
//     author: {
// name: "Joe Joe",
// age: 34
//     }
// }

// book.title = 'New Title'
// book.author.name = "Benny"
// console.log(book.title)
// console.log(book.author)

// let a = 10
// let b = "Hi"
// c = [1, 2]
// let d = c
// d = [3,4,5]
// d.push(3)

// console.log(a, b, c, d)

// const a = [1, 2] // 0x01
// const elementToAdd = 3 //3

// add(a, elementToAdd) // 0x01, 3

// console.log(a)
// console.log(elementToAdd)

// function add(array, element) {
//     element = element + 1 //4
//     array.push(element) // 0x01
// }

// const array = a
// array.push(4)

// console.log(a === b)

// console.log("hello")

// function createUser(name, age) {
//     return { name: name, age: age, human: true}
// }

// function User(name, age) {
//     this.name = name
//     this.age = age
//     this.human = true
// }

// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.human = true
//     }

//     printName() {
//         console.log(this.name)
//     }
// }
// const user = new User('nichole', 25)
// const user2 = new User('Kyle', 25)
// // const userFunc = createUser('Kyle', 33)
// user.printName()
// user2.printName()
// console.log(user)

// new Date()

// console.log(window)
// const element = document.createElement('span')
// element.innerText = "Hello World"
// document.body.appendChild(element)

// const divWithId = document.getElementById("div-id")

// const divWithClass = document.getElementsByClassName('div-class')

// divWithId.style.color = 'red'


// const divsWithClassArray = Array.from(divWithClass)

// divsWithClassArray.forEach(div => (div.style.color = 'green'))

// divWithClass[0].style.color ="pink"
// console.log(divWithClass)

// const dataAttribute = document.querySelector('[data-test]')

// const input = document.querySelector('input')
// dataAttribute.style.color = 'green'


// const divsWithClasses = document.querySelectorAll('.div-class')
 
// divsWithClasses.forEach(div => div.style.color = 'red')

// console.log(input)

// const btn = document.querySelector('[data-btn]')
// const input = document.querySelector('[data-input-text]')
const form = document.querySelector('[data-form]')

form.addEventListener('submit', e => {
    console.log('submitted form')
})

// input.addEventListener('input', e => {
//     console.log(e.target.value === '')
// })

// function printClick() {
//     console.log('clicked')
// }

// btn.addEventListener('click', e => {
//     console.log(e)
// })


// btn.removeEventListener('click', printClick)