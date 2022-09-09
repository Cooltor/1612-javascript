"use strict";

// FOR
// ===============

// Syntaxe:
// for (inintialisation; condition de bouclage; incrémentation) { instructions }

for (let i = 0; i < 10; i++)
{
    console.log( i );
}

var date = new Date();
var year = date.getFullYear();
for (let i = year; i > year-10; i--)
{
    console.log( i );
}

var fruits = [
    "Pommes", // 0
    "Poires", // 1
    "Bananes", // 2
    "Melons", // 3
];
for (let i = 0; i < fruits.length; i++ )
{
    console.log(`${i} :: J'aime les ${fruits[i]}`);
}














// WHILE
// ===============

// Syntaxe:
// while (condition) { instructions }

let i = 0; // Initialisation de la boucle
while (i < 10) // condition de bouclage
{
    console.log("je m'affiche");
    i++; // incrementation
}



var fruits = [
    "Pommes", // 0
    "Poires", // 1
    "Bananes", // 2
    "Melons", // 3
];

console.log(fruits);

while (fruits.length) // condition de bouclage: Tant que la tableau fruits possède des entrées
{
    console.log( fruits[0] );
    fruits.shift(); // on depile une entrée à chaque itération
}

console.log(fruits);







// DO WHILE
// ===============

// Syntaxe:
// do { instructions } while (condition)


var j = 10;
var k = 10;

// While effectue un test avant l'execution des instructions
while (j < 5)
{
    console.log("WHILE : " + j);
    j++;
}

// Do While execute une fois l'instruction avant d'effectuer le test de bouclage
do {
    console.log("DO WHILE : " + k);
    k++;
} while (k < 5)








// FOR IN
// ===============

// Syntaxe:
// for (let key in object) { instructions }

var user = {
    firstname: "Bob",
    lastname: "Sponge",
};

for (let key in user) 
{
    console.log( key );
    console.log( user[ key ] );
}




var fruits = [
    "Pommes", // 0
    "Poires", // 1
    "Bananes", // 2
    "Melons", // 3
];

for (let key in fruits)
{
    console.log( key );
    console.log( fruits[ key ] );
}











// FOR OF
// ===============

// Syntaxe:
// for (let value of array) { instructions }
// -> extrait les valeurs d'un tableau

var user = {
    firstname: "Bob",
    lastname: "Sponge",
};

var fruits = [
    "Pommes", // 0
    "Poires", // 1
    "Bananes", // 2
    "Melons", // 3
];

// FOR OF sur un objet ne fonctionne pas
// for (let val of user) 
// {
//     console.log( val );
// }

console.log( "" );

for (let fruit of fruits)
{
    console.log( fruit );
}







// FOREACH
// ===============

// Syntaxe:
// 


var fruits = [
    "Pommes", // 0
    "Poires", // 1
    "Bananes", // 2
    "Melons", // 3
];

fruits.forEach( (value, index) => {
    console.log(value, index);
} );

fruits.forEach(function(value, index){
    console.log(value, index);
});