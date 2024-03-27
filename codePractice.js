//matrix rotate image
// Create a function that rotates a 2D matrix 90 degrees clockwise 
const rotate = function(matrix) {
    //transpose the matrix
    //iterate over each row
    for(let r = 0; r < matrix.length; r++) {
        //iterate over each column
        for(let c = r; c < matrix[0].length; c++) {
            //swap elements
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }
    //iterate over each row of transposed matrix
    for (let row of matrix) {
        //reverse rows and flip matrix
        row.reverse()
    }
}