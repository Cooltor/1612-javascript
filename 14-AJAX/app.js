"use strict";


// URL Definition
// --

const domain        = "https://jsonplaceholder.typicode.com";
const path          = "/posts";
const endpoint      = `${domain}${path}`;


// DOM getter
// --

const btnGetData    = document.getElementById('btnGetData');
const btnGetData_1  = document.getElementById('btnGetData_1');
const btnGetData_4  = document.getElementById('btnGetData_4');
const btnPostData   = document.getElementById('btnPostData');
const btnDeleteData = document.getElementById('btnDeleteData');


// BTN Event
// --

btnGetData.addEventListener('click', fncGetData);
btnGetData_1.addEventListener('click' ,fncGetData);
btnGetData_4.addEventListener('click' ,fncGetData);
btnPostData.addEventListener('click', fncPostData);
btnDeleteData.addEventListener('click', fncDeleteData);


// Function denition
// --

function fncGetData(event) 
{
    const btnTrigger = event.target;
    const postId = btnTrigger.dataset.post;

    console.log( "fncGetData", postId );
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

    //     // Requete Asynchrone
    //     $.ajax(url, {
    //         method: "GET",
    //         success: response => {

    //             $data.html( response );
    //             // console.log( response.name );
    //         }
    //     });

    // });