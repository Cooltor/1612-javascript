"use strict";

// L'objet WINDOW
// =====
// console.log( window );



// L'objet DOCUMENT
// =====
// console.log( window.document );
// console.log( document );



// Cibler un noeux HTML
// =====

// cibler L'element body
// --
// console.log( document.body );


// Cibler un element par son attribut ID
// --
// getElementById : retourne un noeux HTML
// --
// console.log( document.getElementById('myFirstId') );
// console.log( document.getElementById('mySecondId') ); // Retourne null


// Cibler des éléments avec les attribut de classe
// --
// getElementsByClassName : retourne une collection de noeux HTML
// --
// console.log( document.getElementsByClassName('green-text') );
// console.log( document.getElementsByClassName('list') );


// Cibler des éléments par leur type
// --
// getElementsByTagName : retourne une collection de noeux HTML
// --
// console.log( document.getElementsByTagName('span') );
// console.log( document.getElementsByTagName('body')[0] );


// Cibler des éléments avec QuerySelector(All)
// --
// querySelector : retourne un noeux HTML
// querySelectorAll : retourne une collection de noeux HTML (NodeList)
// --

// console.log( document.querySelector('[type=password]') );
// console.log( document.querySelectorAll('[type=password]') );
// console.log( document.querySelector('[type]') );
// console.log( document.querySelectorAll('[type]') );
// console.log( document.querySelectorAll('[data-price]') );
// console.log( document.querySelectorAll('#myFirstId') );
// console.log( document.querySelectorAll('.green-text') );
// console.log( document.querySelectorAll('span') );


// TP: Ajouter une classe sur l'element input de type password
// --

// Get the input with password type
let nodePassword = document.querySelector('[type=password]');

// Add the class "my-password" to the list of classes of the nodePassword
    nodePassword.classList.add('my-password');
