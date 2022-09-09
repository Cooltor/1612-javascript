"use strict";

// Fonction avec arguments
// --

function addition(a, b) 
{
    // console.log("argument a : ", a);
    // console.log("argument b : ", b);

    var c = a + b;

    console.log( c );
}

// addition(5, 10);
// addition(45, 2);
// addition(3, -2);
// addition(5, 3);
// addition(4, 2);
// addition(4);


// Fonction avec argument facultatif
// --
function multiplication(a, b=1)
{
    var c = a * b;

    console.log( c );
}

multiplication(5, 3);

// Lors de l'appel de la fonction, un seul paramètre est renseigné
// l'argument "b" de la fonction prend la valeur "1" qui est la valeur affectée 
// à "b" lors de la déclaration de la fonction
multiplication(5);