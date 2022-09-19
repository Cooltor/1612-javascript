"use strict";

// Create many div in #content
// --

for (let i=0; i<200; i++)
{
    // Create a <div>
    let div = document.createElement('DIV');

    // Add "i" into the <div>
    div.innerText = i;

    // Put the <div> into the <#content>
    document.getElementById('content').append(div);
}