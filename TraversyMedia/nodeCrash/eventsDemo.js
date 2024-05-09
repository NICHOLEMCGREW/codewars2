import { EventEmitter } from "events";

const myEmitter = new EventEmitter()

function greetHandler(name) {
    console.log('hello ' + name)
}

function goodbyeHandler(name) {
    console.log('Goodbye ' + name)
}

// Register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

// Emit events
myEmitter.emit('greet', 'Jon')
myEmitter.emit('goodbye', 'joe')

// Error handling
myEmitter.on('error', (err) => {
    console.log('An error occured:', err)
})

// Simulte error
myEmitter.emit('error', new Error('Something when wrong'))