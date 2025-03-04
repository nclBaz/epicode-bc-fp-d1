// TERNARY

const age = 0
//const result = age >= 18 ? "You can drive" : "You cannot drive"

// TRUTHY AND FALSY

if (false) console.log("Questo codice non verrà eseguito")

if ("") console.log("Questo codice non verrà eseguito")

if (0) console.log("Questo codice non verrà eseguito")

if (null) console.log("Questo codice non verrà eseguito")

if (undefined) console.log("Questo codice non verrà eseguito")

if (NaN) console.log("Questo codice non verrà eseguito")

if (1) console.log("Questo codice verrà eseguito")
if ("Ciao") console.log("Questo codice verrà eseguito")
if ([1, 2, 3]) console.log("Questo codice verrà eseguito")

// SHORT CIRCUIT - &&

const isLoggedIn = false

const showMenu = function () {
  return "Ecco il menù solo per utenti loggati"
}

const menù = isLoggedIn && showMenu() // Ci servirà per fare cose del tipo, se questa cosa è vera allora mostra questo elemento nella pagina, altrimenti no
console.log(menù)

// SHORT CIRCUIT - ||
const user = { name: "Aldo", surname: "Baglio", username: "aldobaglio" }
const username = user.username || "No username"
console.log(username)

// SHORT CIRCUIT - ??
const posts = [
  { title: "JS", likes: 10 },
  { title: "Java", likes: 0 },
]

const likes = posts[1].likes ?? "NO DATA"
// const likes = posts[1].likes || "NO DATA" <-- Ci restituisce un risultato poco veritiero
console.log(likes)
