"use strict";


// URL Definition
// --

const domain        = "https://jsonplaceholder.typicode.com";
// const domain        = "https://monsupersite.com";
// const path          = "/posts";
// const endpoint_1    = endpoint(domain, "/posts");
// const endpoint_2    = endpoint(domain, "/users");


// DOM getter
// --

const btnGetData    = document.getElementById('btnGetData');
const btnGetData_1  = document.getElementById('btnGetData_1');
const btnGetData_4  = document.getElementById('btnGetData_4');
const btnPostData   = document.getElementById('btnPostData');
const btnDeleteData = document.getElementById('btnDeleteData');
const btnArtists = document.querySelectorAll('[data-artist]');

// BTN Event
// --

btnGetData.addEventListener('click', fncGetData);
btnGetData_1.addEventListener('click' ,fncGetData);
btnGetData_4.addEventListener('click' ,fncGetData);
btnPostData.addEventListener('click', fncPostData);
btnDeleteData.addEventListener('click', fncDeleteData);

for (let btn of btnArtists)
{
    btn.addEventListener('click', getArtistInfo);
}

// Function denition
// --


function endpoint(domain, path)
{
    return `${domain}${path}`;
}



function fncGetData(event) 
{
    const btnTrigger = event.target;
    const postId = btnTrigger.dataset.post ?? null;
    const type = btnTrigger.dataset.type ?? null;

    const url = postId != null
        ? endpoint(domain, `/posts/${postId}`)
        : endpoint(domain, `/posts`)
    ;

    console.log( url );

    // Requete Asynchrone
    $.ajax(url, {
        method: "GET",
        success: response => {
            console.log( response );
        }
    });
}


function getArtistInfo(event) 
{
    const btn = event.target;
    const id = btn.dataset.id ?? null;
    const url = `https://api.discogs.com/artists/${id}`;

    // Requete Asynchrone
    $.ajax(url, {
        method: "GET",
        success: response => {
            console.log( response );
            // console.log( response.profile );
            console.log( '------------' );
        }
    });
}




function fncPostData(event) 
{
    console.log( "fncPostData", event );
}

function fncDeleteData(event) 
{
    console.log( "fncDeleteData", event );
}

 



    // btn_swapi.click(function(){


    // });