// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// Define your array manipulation functions here (e.g., destructivelyAppendCat, appendCat, etc.)
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats; // Return the new array
}
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats; // Return the new array  
} 
function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats; // Return the new array
}
function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats; // Return the new array
}
  