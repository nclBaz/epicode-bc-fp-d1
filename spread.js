const originalArray = [1, 2, 3]
const copyArray = [...originalArray]

const arr1 = [1, 2]
const arr2 = [2, 4]
const merged = [...arr1, ...arr2]
console.log(merged)

const originalObj = { firstName: "Gandalf", role: "Wizard" }
const copyObj = { ...originalObj, age: 3000 }
console.log(copyObj)

const frodo = { firstName: "Frodo", race: "Hobbit", age: 50 }

const copyObj2 = { ...frodo, ...copyObj }
console.log(copyObj2)
