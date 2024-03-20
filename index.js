// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
console.log (cats)

function destructivelyAppendCat(name){
    cats.push("Ralph")
    console.log(cats)
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
    console.log (cats)
}

function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats)
}

function appendCat(name){
    const newCats = cats.slice(0,3)
    newCats.push("Broom")
    return newCats
}

function prependCat(name){
    const addCats = cats.slice(0,3)
    addCats.unshift("Arnold")
    return addCats
}

function removeLastCat(){
    const removeLast = cats.slice(0,3)
    removeLast.pop()
    return removeLast
}

function removeFirstCat(){
    const removeFirst = cats.slice(0,3)
    removeFirst.shift()
    return removeFirst
}