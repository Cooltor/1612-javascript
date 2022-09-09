// Sortie de fonction
// --


// 1 -  Déclaration de la fonction "sayHello"
//      Le role de cette fontion est de RETOURNER la phrase "Bonjour <xxxx>"
function sayHello( name )
{
    // 3 -  La fonction génére la phrase "Bonjour Bobby" et la stocke dans la 
    //      variable "str"
    let str = `bonjour ${name}`;

    // 4 - La fonction retourne la valeur de la variable "str"
    return str;
}


// 2 -  Appel de la fonction "sayHello" avec passage de paramètre, "Bobby" qui 
//      renseigne l'argument "name" de la fonction "sayHello".

// 5 -  La phrase "Bonjour Bobby" est stockée dans la variable "hello"
let hello = sayHello("Bobby");

// 6 -  On utilise la valeur de la variable "hello" ("Bonjour Bobby") dans une
//      autre partie de l'algorithme
console.log(`${hello}, lorem ....`);