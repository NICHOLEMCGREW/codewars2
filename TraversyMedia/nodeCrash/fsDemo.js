// import fs from 'fs'
import { readFile } from 'fs'
import fs from 'fs/promises'

// readFile() - callback
// fs.readFile('./test.tst', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// readFileSync() - Synchronuous version
// const data = fs.readFileSync('./test.tst', 'utf-8')
// console.log(data)

// readFile() - Promise .then()
// fs.readFile('./test.tst', 'utf-8')
//     .then(() => console.log(data))
//     .catch((err) => console.log(err))

//readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.tst', 'utf-8')
        console.log(data)
    } catch (error) {
     console.log(error)   
    }
}

// writeFile()
const writeFile = async () => {
    try {
        await fs.readFile('./test.tst', 'Helloooooo')
        console.log('file writen to') 
    } catch (error) {
        console.log(error)  
    }
}

//appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.tst', '\nThis is appended text')
        console.log('File appended to...')
    } catch (error) {
        console.log(error)  
        
    }
}

readFile()
appendFile()
writeFile()