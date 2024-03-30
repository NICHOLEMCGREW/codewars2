//matrix rotate image
// Create a function that rotates a 2D matrix 90 degrees clockwise
const rotate = function (matrix) {
	//transpose the matrix
	//iterate over each row
	for (let r = 0; r < matrix.length; r++) {
		//iterate over each column
		for (let c = r; c < matrix[0].length; c++) {
			//swap elements
			[matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
		}
	}
	//iterate over each row of transposed matrix
	for (let row of matrix) {
		//reverse rows and flip matrix
		row.reverse();
	}
};

// Flick Switch
function flickSwitch(arr) {
	let newArr = [];
	let mySwitch = true;
	for (let item of arr) {
		if (item === "flick") {
			mySwitch = !mySwitch;
			newArr.push(mySwitch);
		} else {
			newArr.push(mySwitch);
		}
	}
	return newArr;
}
console.log(flickSwitch(["codewars", "flick", "code", "wars"]));

function flickSwitch2(arr) {
 let mySwitch = true
 return arr.map(element => element === 'flick' ? mySwitch = !mySwitch : mySwitch)
}

//Multiply

function multiply(a, b){
   let result = (a * b)
   return result
  }
  
//   Even or Odd

function evenOrOdd(number) {
  if(number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}