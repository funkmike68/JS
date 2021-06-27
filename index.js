/*
// Arrays

const favTeams = ["Cardinals", "Tigers", "Blues", "Warriors", "Rams"];

// Accessing a value from an array. The index count in an array starts off at 0.
// The 4th item would give you 'Warriors'.
console.log(favTeams[3]);

const aunts = ["May", "Barbara", "Helen", "Jenette", "Celeste"];

// An array value can be assigned to a variable
const favAunt = aunts[0];
console.log(`I just love my aunt ${favAunt}!`);

console.log(`My aunt ${aunts[1]} loves to play board games.`);

// Reassigning a value withing an array
aunts[4] = "Alice";

console.log(`My aunt ${aunts[4]} truly loved the finer things in life.`);
*/

// Functions - declare, invoke
function hola() {
  // logic
  console.log("Hola Glenny!");
}

hola();

function food() {
  console.log(`I love pizza!`);
}

food();

// Functions - parameters, arguments
function greet(person) {
  console.log(`Hola ${person}.`);
}

greet("Glenny");

function meal(dinner) {
  console.log(`We are having steak and ${dinner} for dinner tonight.`);
}

const dish = "chicken";

meal("jumbo shrimp");
meal("lobster");
// Variables can also be used
meal(dish);
