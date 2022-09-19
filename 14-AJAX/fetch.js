"use strict";

// const url = "https://jsonplaceholder.typicode.com/posts";
const url = "data_.json";


fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(err);
    })
;


// le code continu
console.log("To be continued....");