"use strict";

const content       = document.getElementById('content');

const mouse_pos_x   = document.getElementById('mouse_pos_x');
const mouse_pos_y   = document.getElementById('mouse_pos_y');
const scroll_pos_x  = document.getElementById('scroll_pos_x');
const scroll_pos_y  = document.getElementById('scroll_pos_y');



function getHeight() 
{
    var body = document.body,
        html = document.documentElement;
    
    return Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
}



// Create many div in #content
// --

for (let i=0; i<200; i++)
{
    // Create a <div>
    const div = document.createElement('DIV');

    // Add "i" into the <div>
    div.innerText = i;

    // Put the <div> into the <#content>
    content.append(div);
}

console.log( getHeight() );


// Get Mouse positions
// --

document.onmousemove = event => {

    // Get mouse positions
    // const clientX = event.clientX;
    // const clientY = event.clientY;

    const {
        clientX,
        clientY
    } = event;

    // Set mouse positions
    mouse_pos_x.innerText = clientX;
    mouse_pos_y.innerText = clientY;
}



// Get Scroll positions
// --

document.onscroll = event => {

    // Get scroll positions
    const {
        scrollX,
        scrollY
    } = window;

    // Set scroll positions
    scroll_pos_x.innerText = scrollX;
    scroll_pos_y.innerText = scrollY;
}
