// ******************************* DESTRUCTURING OBJECTS *********************************

const character = { firstName: "Frodo Baggins", race: "Hobbit", age: 50 }

// Senza destructuring
// const name = character.firstName
// const race = character.race
// const age = character.age

// Con destructuring

const { firstName: name, race, age, dob } = character

console.log(name)
console.log(race)
console.log(age)
console.log(dob)

// ******************************* DESTRUCTURING ARRAYS *********************************

// Senza destructuring
const scores = [20, 30, 40]
const firstScore = scores[0]
const secondScore = scores[1]

// Con destructuring
const [first, , third] = scores
console.log(first)
console.log(third)
