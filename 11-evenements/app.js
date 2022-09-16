"use strict";


const txt_onClick_1   = "Ce texte apparait au click du premier bouton";
const txt_onClick_2   = "Ce texte apparait au click du second bouton";
const txt_onDblClick  = "Ce texte apparait au double click du troisieme bouton";
const txt_OnMouseOver = "Ce texte apparait au survol du quatrieme bouton";


// Get <#demo>
let nodeDemo = document.getElementById('demo');


// First button Function 
// --

function setTextToDemo_1()
{
    nodeDemo.innerHTML = txt_onClick_1;
}




// Second button function
// --


let nodeBtn_1 = document.getElementById('btn_1');

nodeBtn_1.addEventListener('click', setTextToDemo_2);

function setTextToDemo_2()
{
    nodeDemo.innerHTML = txt_onClick_2;
}


// Third button function
// --

function setTextToDemo_3()
{
    nodeDemo.innerHTML = txt_onDblClick;
}

let nodeBtn_2 = document.getElementById('btn_2');

nodeBtn_2.addEventListener('dblclick', setTextToDemo_3);


// Fourth button function
// --

function setTextToDemo_4()
{
    nodeDemo.innerHTML = txt_OnMouseOver;
}

let nodeBtn_3 = document.getElementById('btn_3');

nodeBtn_3.addEventListener('mouseover', setTextToDemo_4);




// -----------------------------------------------------------------------------

// Get HTML Nodes
let source = document.getElementById('txt_source');
let target = document.getElementById('txt_target');

// On Key Up event
source.addEventListener('keyup', event => {

    // Read the value of the <input> source
    let value = source.value;

    // Set the value to the <p> target
    target.innerHTML = value;

});

// Add class .highlight on Focus
source.addEventListener('focus', event => {
    source.classList.add('highlight');
});

// Remove class .highlight on Blur + reset the input text
source.addEventListener('blur', event => {
    source.classList.remove('highlight');
    source.value = '';
});



var prevWinWidth = 0;

window.addEventListener('resize', event => {
    console.log( window.innerWidth, window.innerHeight );

    if (
        window.innerWidth < 300 && 
        window.innerWidth < prevWinWidth
    )
    {
        alert("Trop petit");
    }

    prevWinWidth = window.innerWidth;
})