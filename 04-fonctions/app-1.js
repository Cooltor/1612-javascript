"use strict";

// Une fonction est une procédure stockée et nommée.
// Une procedure est une suite d'instruction.
// On stock la procédure dans une "closure"

// On déclare un fonction avec le mot clé "function".
// On ajoute le nom de la fonction.
// On definit la closure avec des accolades {}

console.log("aaa");

// Exemple de déclaration d'une fonction

function MaFonction()
{
    console.log("ccc");
    alert("Hello");
    alert("There");
    console.log("ddd");
}

console.log("bbb");


// Exemple d'appel d'une fonction

MaFonction();


console.log("eee");


// Que fait le script ?
// -------
// 
// Le script déclenche le log("aaa");
// puis il met en memoire la definition de la fonction "MaFonction"
// Le script déclenche ensuite le log("bbb");
// On appel la fonction "MaFonction" >> on execute la procédure
// La procédure déclenche le log("ccc"); puis les "alert()" et enfin déclenche le log("ddd");
// Une fois la procédure terminée, le script déclenche le log("eee");