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
// const form = document.querySelector('[data-form]')

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     console.log('submitted form')
// })

// const link = document.querySelector('a')

// link.addEventListener('click', e => {
//     e.preventDefault()
//     console.log('something here')
// })

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

// const button = document.querySelector('button')

// button.addEventListener('click', e => {
// console.log("Arrow this")
// console.log(this)
// e.preventDefault()
// })

// button.addEventListener('click', function (e) {
//     console.log("Function this")
//     console.log(this)
//     e.preventDefault()
// })

// const test = document.querySelector('[data-test]')

// test.dataset.test = '5555'
// console.log(test.dataset)

// const buttons = document.querySelectorAll('button')

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const currentClicks = parseInt(button.dataset.clicks)
//         button.dataset.clicks = currentClicks + 1
//     })
// })

// const grandParent = document.querySelector('#grand-parent')

// grandParent.style.color = 'red'

// const parentOne = grandParent.children[0]
// const parentTwo = parentOne.nextElementSibling
// const childOne = parentOne.children[0]
// const childTwo = parentOne.children[1]

// const childOne = document.querySelector('#child-one')

// const parentOne = childOne.parentElement
// const grandParent = document.querySelector('.grand-parent')

// grandParent.style.color = 'red'

//1. Select all elements
// const form = document.querySelector('#new-item-form')
// const list = document.querySelector('#list')
// const input = document.querySelector('#item-input')

// //2. When I submit the form add a new element
// form.addEventListener('submit', e => {
//     e.preventDefault()

//     // 1. Create new item
//     const item = document.createElement('div')
//     item.innerText = input.value
//     item.classList.add('list-item')

//     // 2. Add item to list
//     list.appendChild(item)

//     // 3. Clear input
//     input.value = ''
//     // 4. Setup event listener to delete itema when clicked
//     item.addEventListener('click', () => {
//        item.remove()
//     })
// })

// const modal = document.querySelector('#modal')
// const openModalButton = document.querySelector('#open-modal-btn')
// const closeModalButton = document.querySelector('#close-modal-btn')
// const overlay = document.querySelector('#overlay')

// openModalButton.addEventListener('click', () => {
//     modal.classList.add("open")
//     overlay.classList.add("open")
// })

// closeModalButton.addEventListener('click', closeModal)

// overlay.addEventListener('click', closeModal)

// function closeModal() {
//     modal.classList.remove('open')
//     overlay.classList.remove('open')
// }

// const userIsLoggedIn = false
// if (userIsLoggedIn) {
//     console.log("User logged in")
// } else {
//     console.log("Please login")
// }

// let arr = [1,2,3,4,5]

//     if (arr.length === 0) {
//         console.log('empty')
//     } else if (arr.length < 5) {
//         console.log('small')
//     } else if (arr.length < 10) {
//         console.log('medium')
//     } else {
//         console.log('large')
//     }

// const isUserLoggedIn = true

// const welcomeMessage = isUserLoggedIn ? "welcome" : "please log in"

// isUserLoggedIn ? console.log('user is logged in') : console.log('not logged in')

const favoriteAnimal = "cat"

// if (favoriteAnimal === "cat") {
// 	console.log("cats are awesome")
// } else if (favoriteAnimal === "dog") {
// 	console.log("they are loud")
// } else if (favoriteAnimal === "shark") {
// 	console.log("thats interesting")
// } else {
// 	console.log("nice!")
// }

// switch (favoriteAnimal) {
// 	case "cat":
// 		console.log("cats are awesome")
//         break
// 	case "dog":
// 		console.log("they are loud")
//         break
//     case "shark":
//         console.log("thats interesting")
//         break
//     default:
//         console.log("nice!")
//         break
// }

// const number = 1

// switch (number) {
//     case 0:
//         console.log('zero')
//         break
//     case 1:
//     case 2:
//         console.log('small')
//         break
//     case 3:
//     case 4:
//         console.log('medium')
//         break
//     case 5:
//         console.log('large')
//         break
//     default:
//         console.log('try again')
//         break
// }

// const a = ['a','b','c']

// for (let i = 0; i < a.length; i++) {
//     const element = a[i]
//     console.log(element)
// }

// for (let i = 0; i < 5; i++) {
//     console.log('start ' + i)
//     if (i > 2) continue
//     console.log('end ' + i)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
//     if (i === 5) break
// }

// let i = 0
// while (i < 5) {
// 	console.log(i)
// 	i++
// }\

// const person = {
// 	name: "Kyle",
// 	friend: {
// 		name: "Joe",
// 		friend: {
// 			name: "Sally",
// 		},
// 	},
// }

// let currentPerson = person
// while (currentPerson != null) {
// 	if (currentPerson.name === "joe") break
// 	console.log(currentPerson.name)
// 	currentPerson = currentPerson.friend
// }
