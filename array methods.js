const characters = [
  {
    firstName: "Frodo",
    race: "Hobbit",
    age: 50,
  },
  {
    firstName: "Gandalf",
    race: "Human",
    age: 1000,
  },
  {
    firstName: "Gimli",
    race: "Dwarf",
    age: 500,
  },
  {
    firstName: "Legolas",
    race: "Elf",
    age: 2600,
  },
]

const charactersNames = characters.map(character => character.firstName)

console.log(charactersNames) // Ho ottenuto un array di 4 STRINGHE a partire da un array di 4 OGGETTI

const charactersAges = characters.map(character => character.age)

console.log(charactersAges) // Ho ottenuto un array di 4 NUMERI a partire da un array di 4 OGGETTI

const youngCharacters = characters.filter(character => character.age < 100) // all'interno della arrow function metto un criterio che mi deve restituire una condizione di verità (true/false)
console.log(youngCharacters) // Ho ottenuto un array di 1 OGGETTO (l'unico che ha passato il test) a partire da un array di 4 OGGETTI

const totalAges = characters.reduce((partialSum, character) => partialSum + character.age, 0) // 0 è il valore inizale del cosiddetto ACCUMULATOR (qua chiamato partialSum). Ad ogni iterazione del reduce, il valore dell'accumulatore verrà aggiornato in base al criterio che stiamo adottando (in questo caso una somma)
console.log(totalAges)

characters.filter().map().reduce() // posso anche concatenare i 3 metodi (il reduce però deve essere ultimo perché non restituisce un array a differenza di map e filter)
