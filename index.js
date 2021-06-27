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
