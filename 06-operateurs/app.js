"use strict";

console.log( "Opérateurs d'affectation" );
console.log( "===================" );
console.log( "" );

// On affecte la valeur 42 à la variable "a".
var a = 42;

var b = 10;
    b += 30;  // b = b + 30;
console.log("b",  b);
console.log( "" );

var c = "Hello ";
    c += "there !"; // c = c + "there !";
console.log("c",  c);
console.log( "" );

var d = 10;
    d -= 4;  // d = d - 4;
console.log("d",  d);
console.log( "" );




console.log( "Opérateurs de coalescence des nuls" );
console.log( "===================" );
console.log( "" );


var inputFile;

// renseigne le fichier
// inputFile = null;

var file = inputFile ?? "pas de fichier";

console.log( "inputFile" , inputFile);
console.log( "file" , file);
console.log( "" );




console.log( "Opérateurs de comparaisons" );
console.log( "===================" );
console.log( "" );



// Egalité 
console.log( "Egalité" );
console.log( "--" );

console.log( "3 == 3"       , 3 == 3 );
console.log( "3 == 2"       , 3 == 2 );
console.log( "3 == \"3\""   , 3 == "3" );
console.log( "" );



// Inégalité 
console.log( "Inégalité" );
console.log( "--" );

console.log( "3 != 3"       , 3 != 3 );
console.log( "3 != 2"       , 3 != 2 );
console.log( "3 != \"3\""   , 3 != "3" );
console.log( "" );



// Égalité stricte 
console.log( "Égalité stricte" );
console.log( "--" );

console.log( "3 === 3"       , 3 === 3 );
console.log( "3 === 2"       , 3 === 2 );
console.log( "3 === \"3\""   , 3 === "3" );
console.log( "" );



// Inégalité stricte
console.log( "Inégalité stricte" );
console.log( "--" );

console.log( "3 !== 3"       , 3 !== 3 );
console.log( "3 !== 2"       , 3 !== 2 );
console.log( "3 !== \"3\""   , 3 !== "3" );
console.log( "" );



// Supériorité stricte
console.log( "Supériorité stricte" );
console.log( "--" );

console.log( "3 > 2"       , 3 > 2 );
console.log( "3 > 3"       , 3 > 3 );
console.log( "3 > 5"       , 3 > 4 );
console.log( "" );



// Supériorité ou égale
console.log( "Supériorité ou égale" );
console.log( "--" );

console.log( "3 >= 2"       , 3 >= 2 );
console.log( "3 >= 3"       , 3 >= 3 );
console.log( "3 >= 5"       , 3 >= 4 );
console.log( "" );



// Infériorité stricte
console.log( "Infériorité stricte" );
console.log( "--" );

console.log( "3 < 2"       , 3 < 2 );
console.log( "3 < 3"       , 3 < 3 );
console.log( "3 < 5"       , 3 < 4 );
console.log( "" );



// Infériorité ou égale
console.log( "Infériorité ou égale" );
console.log( "--" );

console.log( "3 <= 2"       , 3 <= 2 );
console.log( "3 <= 3"       , 3 <= 3 );
console.log( "3 <= 5"       , 3 <= 4 );
console.log( "" );



console.log( "Opérateurs arithmétiques" );
console.log( "===================" );
console.log( "" );



// opérations arithmétiques standard 
console.log( "opérations arithmétiques standard" );
console.log( "--" );

console.log( "3 + 3"       , 3 + 3 );
console.log( "5 - 3"       , 5 - 3 );
console.log( "3 * 3"       , 3 * 3 );
console.log( "10 / 3"      , 10 / 3 );
console.log( "" );



// Incrémentation 
console.log( "Incrémentation" );
console.log( "--" );
// a++;
// a = a + 1;

var a = 1;
console.log( "a"        , a );
console.log( "a++"      , a++ ); // Post Incrémentation = Retourne la valeur PUIS ajoute 1 à la variable.
console.log( "a"        , a );
console.log( "" );

var b = 1;
console.log( "b"        , b );
console.log( "++b"      , ++b ); // Pré Incrémentation = ajoute 1 à la variable PUIS retourne la valeur.
console.log( "b"        , b );
console.log( "" );



// Décrémentation 
console.log( "Décrémentation" );
console.log( "--" );

var a = 1;
console.log( "a"        , a );
console.log( "a--"      , a-- ); // Post Décrémentation = Retourne la valeur PUIS soustrait 1 à la variable.
console.log( "a"        , a );
console.log( "" );

var b = 1;
console.log( "b"        , b );
console.log( "--b"      , --b ); // Pré Décrémentation = soustrait 1 à la variable PUIS retourne la valeur.
console.log( "b"        , b );
console.log( "" );



// Moins unaire 
console.log( "Moins unaire" );
console.log( "--" );

var c = 3;
console.log( "c"        , c );
console.log( "-c"        , -c );
console.log( "" );



// Plus unaire 
console.log( "Plus unaire" );
console.log( "--" );

var d = "3";
console.log( "d"        , d     , typeof(d) );
console.log( "+d"       , +d    , typeof(+d) );
console.log( "" );



// Opérateur d'exponentiation 
console.log( "Opérateur d'exponentiation" );
console.log( "--" );

var e = 5;
console.log( "e**e"        , e**e );
console.log( "" );



// Reste (modulo) 
console.log( "Reste (modulo)" );
console.log( "--" );

console.log( "10 % 2"        , 10 % 2 );
console.log( "15 % 2"        , 15 % 2 );
console.log( "" );





console.log( "Opérateurs logiques" );
console.log( "===================" );
console.log( "" );



// ET logique (&&) 
console.log( "ET logique (&&)" );
console.log( "--" );

console.log( "true && true"     , true && true);
console.log( "true && false"    , true && false);
console.log( "false && false"   , false && false);

var age = 18;
var gender = "M";
console.log( "age >= 18 && gender == \"M\""   , ((age >= 18) && (gender == "F"))  );

console.log( "" );



// OU logique  (||)
console.log( "OU logique (||)" );
console.log( "--" );

console.log( "true || true"     , true || true);
console.log( "true || false"    , true || false);
console.log( "false || false"   , false || false);

console.log( "" );



// NON logique (!) 
console.log( "NON logique (!)" );
console.log( "--" );

console.log( "!true"     , !true );
console.log( "!false"    , !false );
console.log( "" );





console.log( "Opérateurs pour chaines de caractères" );
console.log( "===================" );
console.log( "" );


console.log( "\"Hello \" + \"There !\""     , "Hello " + "There !" );
console.log(  "Hello ".concat("There !") );
console.log(  "chaine" + 42 );
console.log(  42 + "chaine" );
console.log( "" );





console.log( "Opérateurs ternaire" );
console.log( "===================" );
console.log( "" );

console.log( "Syntaxe : condition ? val1 : val2" );
console.log( "" );


var age = 13;
var isAdult = age >= 18 ? true : false;

console.log( "isAdult", isAdult );

var age = 13;
var isAdult;

if (age >= 18) 
{
    isAdult = true; 
}
else
{
    isAdult = false; 
}

var note = 19.9;
var noteMax = 40;
var moyenne = note >= noteMax/2 ? "oui" : "non";
console.log( moyenne );