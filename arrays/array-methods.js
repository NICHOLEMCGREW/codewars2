// let arr = ["I", "study", "JavaScript", "right", "now"];

// let removed = arr.splice(0, 2)

let arr1 = ["I", "study", "JavaScript"];
arr1.splice(2, 0, "complex", "language")

let arr2 = [1, 2, 5];
arr2.splice(-1, 0, 3, 4)

let arr3 = ["t", "e", "s", "t"];
// arr.slice(1, 3)
// console.log(arr3.slice(-1))

let arr = [1, 2];
// console.log(arr.concat([3, 4], 5,6))

let users1 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let someUsers = users1.filter(item => item.id < 3)
  
  let names = 'Bilbo, Gandalf, Nazgul';
  let arr5 = names.split(', ', 2)

  for (let name of arr5) {
    //   console.log(`A message to ${name}.`)
  }

  let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
  }

  let users = [
    {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
  ]
  
  let soldiers = users.filter(army.canJoin, army)

//   console.log(soldiers)


// camelize
 function camelize(str) {
    return str.split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
 }
//  console.log(camelize("background-color"))

let arr6 = [5, 2, 1, -10, 8];

// console.log(arr6.sort((a, b) => b - a))

// let arr7 = ["HTML", "JavaScript", "CSS"];

// let sorted = arr7.sort((a, b) => a - b)
// return sorted.map((word, index) => word)

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// movies.forEach(movie => { 
// })

movies.unshift("Pacific Rim")
movies.pop()
movies.splice(0, 1)
for (const movie of movies) {

    // console.log(movie)
}

// Sum of values
const values2 = [3, 11, 7, 2, 9, 10];
let sum = values2.reduce((sum, cur) => sum + cur, 0)
// console.log(sum)

const values = [3, 11, 7, 2, 9, 10];
let max = values.sort((a, b) => a - b).slice(-1)
// console.log(max)

// List of words
// let d = []
// while(1) {
//     let word = prompt("Enter some word?");
//     if (word == 'stop') break
//     d.push(word)
// }
// console.log