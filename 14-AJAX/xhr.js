"use strict";

const url_html = "data.html";
const url_json = "data.json";
const method = "GET";

const btn = document.getElementById('xhr');


btn.addEventListener('click', event => {

    // XHR Instance
    const xhr = new XMLHttpRequest();
    
    // Create the query
    xhr.open(method, url_html);
    
    console.log( xhr );

});
