"use strict";

// IF
// =======================
console.log("IF");
console.log("----------");

// Syntaxe :
// if (condition) { instructions }

var display = true;

if (display == true) 
{
    console.log("Je m'affiche par ce que \"display\" est \"true\"");
}

console.log("");



// IF ... ELSE
// =======================
console.log("IF ... ELSE");
console.log("----------");

// Syntaxe :
// if (condition) { intructions } else { instructions alternatives }

var time = "day";

if (time == "day")
{
    console.log("Il fait jour.");
}
else
{
    console.log("Il fait nuit.");
}

console.log("");



// IF ... ELSE IF
// =======================

// Syntaxe :
// if (condition 1) { instructions si condition 1 OK } 
// else if (condition 2) { instructions si condition 2 OK }

var note = 20;

if (note < 10)
{
    console.log("T'es nul !");
}
else if (note < 16) 
{
    console.log("T'es pas trop nul !");
}
else if (note <= 19) 
{
    console.log("Peux mieux faire !!!!!!");
}

console.log("");



// IF ... ELSE IF ... ELSE
// =======================

// Syntaxe :
// if (condition 1) { instructions si condition 1 OK } 
// else if (condition 2) { instructions si condition 2 OK }
// else { instructions alternatives }

var note = "13";

// console.log( typeof(note) );
// console.log( typeof(+note) );
// console.log( +note );
// console.log( isNaN(+note) );
// console.log( !isNaN(+note) );

if ( !isNaN(+note) )
{
    if (note < 10)
    {
        console.log("T'es nul !");
    }
    else if (note < 16) 
    {
        console.log("T'es pas trop nul !");
    }
    else if (note < 19) 
    {
        console.log("Peux mieux faire !!!!!!");
    }
    else {
        console.log("Bravo !");
    }
}
else {
    console.log("Note n'est pas un type nombre");
}
