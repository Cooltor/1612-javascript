"use strict";


// Chaine de caractères (string)
// --

// -> suite de caractères
// -> ecrit entre simple ou double quotes ou backtick

var a = "Ceci est un chaine de caractères";
var b = 'Ceci est un chaine de caractères';
var c = 'aujourd\'hui';
var d = `Ceci est un chaine de caractères`;

var e = {
    'name': "Bruce"
};

var x = "There !";
var y = "Bobby";

// console.log( "Hello " + y + " and " + x );
// console.log( `Hello ${y} and ${x}` );

console.log(a, typeof(a));

// Nombre (Number)
// --

var f = 42;
var g = 4.2;
var h = "42";

console.log(f , typeof(f));
console.log(g , typeof(g));
console.log(h , typeof(h));



// Booleen (bool / boolean)
// --

var i = true;
var j = false;

console.log(i , typeof(i));
console.log(j , typeof(j));



// Tableau (array)
// --
// Un tableau est une collection de données
// avec index numérique

// Déclaration d'un tableau

var k = new Array();
var l = [];

console.log(k , typeof(k));
console.log(l , typeof(l));

var fruits = [
    "Pommes", // 0
    "Poires", // 1
    "Bananes" // 2
];
console.log(fruits , typeof(fruits));
console.log( fruits[1], typeof(fruits[1]) );




// Objet (Object)
// --
// Un objet est une collection de données
// avec clé nominative

var m = new Object();
var n = {};

console.log(m , typeof(m));
console.log(n , typeof(n));

var user = {
    firstname: "Bruce",
    lastname: "Wayne"
};

console.log( user.firstname );
console.log( `${user.firstname} ${user.lastname}` );



// Les fonctions
// --

// Declaration de la fonction anonyme
var createUser = function(username, isAdmin) {

};

// Appel de la fonction anonyme
createUser("bob");

// On ecrase la fonction
createUser = 42;


var user = {
    firstname: "Clark",
    lastname: "Kent",

    fly: function(time){
        console.log(`il vole ${time} minutes`);
    },
    laserEye: function() {
        console.log(`il grille ses ennemis avec les yeux...`);
    }
};

console.log( user.firstname );

user.fly(120);
user.laserEye();