"use strict";

// Déclaration d'une variable

// -> reserve un espace memoire
// -> un nom



// AVEC LE MOT CLE "VAR"

// "var" permet de déclarer une variable globale

var a; // création d'un espace mémoire qui s'appel "a"



// AVEC LE MOT CLE "LET"

// "let" permet de déclarer une variable locale

let b; // création d'un espace mémoire qui s'appel "b"



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

var x = 1;
let y = 10;


for (var xx = 0; xx < 3; xx++) 
{

    // console.log( xx );
}

// "xx" affiche "3", la variable est accessible en dehors de la boucle "for"
console.log( xx );


for (let yy = 0; yy < 3; yy++) 
{
    console.log( yy );
}

// "yy" affiche une erreur, la variable est inaccessible en dehors de la boucle "for"
// console.log( yy );


function test()
{
    // Var dans une fonction est global à la fonction
    var zz = "plop";
    console.log( xx );
    console.log( zz );
}

test();


console.log( xx );
console.log( zz );

// console.log( x );
// console.log( y );



var abc = "abc";
var abc1 = "abc1";

var _1 = "";
// var 1abc = "";

var _1_2 = "";
// var a = a - b;

// var abcé = "";
// var a b = "";
var a, c = "";