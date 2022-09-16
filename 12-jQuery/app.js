"use strict";

// Cibler un élément HTML
// --

// En vanilla JS
const _vanilla = document.getElementById('vanilla');
console.log(_vanilla);

// En jQuery
const _jQuery = $('#jQuery');
console.log(_jQuery);




// Créer un élément HTML
// --

// En vanilla JS
let myVanillaDiv = document.createElement('DIV');

// En jQuery
let myJQueryDiv = $('<div>');




// Injecter du contenu dans un élément HTML
// --

// En vanilla JS
myVanillaDiv.innerHTML = "Ceci est une chaine pour Vanilla JS";

// En jQuery
myJQueryDiv.html("Ceci est une chaine pour jQuery");




// Modifier le CSS d'un élément HTML
// --

// En vanilla JS
myVanillaDiv.style.backgroundColor = "#FF0000";
myVanillaDiv.style.color = "#FFFFFF";
myVanillaDiv.style.padding = "10px";

// En jQuery
// myJQueryDiv.css("background-color", "#FF0000");
// myJQueryDiv.css("color", "#FFFFFF");
// myJQueryDiv.css("padding", "10px");

// myJQueryDiv
//     .css("background-color", "#FF0000")
//     .css("color", "#FFFFFF")
//     .css("padding", "10px")
// ;

myJQueryDiv.css({
    backgroundColor: "#FF0000",
    color: "#FFFFFF",
    padding: "10px"
});



// Injecter un élément dans le DOM
// --

// En vanilla JS
_vanilla.append(myVanillaDiv);

// En jQuery
_jQuery.append(myJQueryDiv);



// Les evenements
// --

// En vanilla JS
const btn_vanilla = document.getElementById('vanilla-click');

btn_vanilla.addEventListener('click', event => {
    console.log("Je suis un évenement déclenché en Vanilla JS");
});

// En jQuery
const btn_jquery = $('#jquery-click');

btn_jquery.on('click', event => {
    console.log("Je suis un évenement déclenché en jQuery");
});



// Récupérer les propriétés d'un éléments
// Ajouter une valeur sur un attribut
// --

// En vanilla JS
const btn_vanilla_prop = document.getElementById('vanilla-properties');

btn_vanilla_prop.addEventListener('click', event => {

    // Recupération (GET)
    // --

    // ID de #vanilla
    console.log( _vanilla.id );

    // Liste des classes de #vanilla
    console.log( _vanilla.classList );

    // Récup la hauteur en pixel de #vanilla
    console.log( _vanilla.clientHeight );


    // Ajouter une valeur (SET)
    // --
    
    // Ajouter une class
    _vanilla.classList.add("my-new-vanilla-class");


});

// En jQuery
const btn_jquery_prop = $('#jquery-properties');

btn_jquery_prop.on('click', event => {

    // Recupération (GET)
    // --

    // ID de #jQuery
    console.log( _jQuery.attr('id') );

    // Liste des classes de #vanilla
    console.log( _jQuery.attr('class') );

    // Récup la hauteur en pixel de #vanilla
    console.log( _jQuery.height() );
    console.log( _jQuery.css('padding') );

    // Ajouter une valeur (SET)
    // --

    // Ajouter une class
    _jQuery.addClass("my-new-jquery-class");

});
