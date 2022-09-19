"use strict";

const url_html = "data.html";
const url_json = "data.json";
const method = "GET";

const btn = document.getElementById('xhr');
const data = document.getElementById('data');
const loader = document.getElementById('loader');


btn.addEventListener('click', event => {

    // XHR Instance
    const xhr = new XMLHttpRequest();
    
    // Create the query
    xhr.open(method, url_json);
    
    // Execute the query
    xhr.send();


    xhr.onload = function() {
        console.log(`ON LOAD`);
        console.log(`Response (onLoad): ${xhr.response}`);
        console.log(`----------`);
        // data.innerHTML = xhr.response;
    };
    
    xhr.onerror = () => {
        console.log(`Network Error`);
    };
      
    xhr.onprogress = event => {
        console.log(`ON PROGRESS`);
        console.log(`event.loaded (onProgress): ${event.loaded}`);
        console.log(`event.lengthComputable (onProgress): ${event.lengthComputable}`);
        console.log(`event.total (onProgress): ${event.total}`);
        console.log(`----------`);
    };

    xhr.onreadystatechange = () => {
        console.log(`ON READYSTATE CHANGE`);
        console.log(`xhr.readyState`, xhr.readyState);

        switch (xhr.readyState) {
            case 0: console.log(`ReadyState: ${xhr.readyState} : UNSENT`); break;
            case 1: console.log(`ReadyState: ${xhr.readyState} : OPENED`); break;
            case 2: 
                console.log(`ReadyState: ${xhr.readyState} : HEADERS_RECEIVED`); 
                // Debut anim chargement
                loader.style.display = "block";
                break;

            case 3: console.log(`ReadyState: ${xhr.readyState} : LOADING`); break;

            case 4: 
                console.log(`ReadyState: ${xhr.readyState} : DONE`); 
                console.log(`Status: ${xhr.status}`); 

                switch (xhr.status) {
                    case 404:
                        affiche("Ooops file not found !");
                        break;
                
                    case 200:
                        affiche(xhr.response);
                        break;
                }

                // Fin anim chargement
                loader.style.display = "none";

            break;
        }
        
        console.log(`----------`);
    };

});


function affiche(data) {
    data.innerHTML = data
}