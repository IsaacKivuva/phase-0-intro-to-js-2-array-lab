// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
        return (cats)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
        return(cats)
}

function destructivelyRemoveLastCat(){
    cats.pop()
        return(cats)
}

function destructivelyRemoveFirstCat(){
    cats.shift()
        return(cats)
}

function appendCat(name){
    const newcats=[...cats, name];
        return(newcats)

}

function  prependCat(name){
    const newcats=[name, ...cats];
        return (newcats)
}

function removeLastCat(){
   return cats.slice (0, -1)
}

function removeFirstCat(){
    return cats.slice (1)
}