const name = "Aragorn"
const title = "King of Gondor"

// Senza template literals
const message1 = "Hello, " + name + "! You are the " + title + "."
console.log(message1)

// Con i template literals
const message2 = `Hello, ${name}! 
You are the ${title}.`
console.log(message2)
