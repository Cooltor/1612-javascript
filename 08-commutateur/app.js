"use strict";


// Commutateur
// --

// syntaxe:
// switch (test) {
//  case xxx: instructions; break;
//  case yyy: instructions; break;
//  case zzz: instructions; break;
// }


// Le commutateur peut etre une alternative à la structure conditionnelle "if .. else if .."

var trafficLight = "black";

if (trafficLight == "green")
{
    console.log("On passe");
}
else if (trafficLight == "orange")
{
    console.log("On s'arrete");
}
else if (trafficLight == "red")
{
    console.log("On STOP !");
}
else 
{
    console.log("On passe avec précaution");
}


switch (trafficLight)
{
    case 'green':
        console.log("On passe");
        break;
    
    case 'orange':
        console.log("On s'arrete");
        break;

    case 'red':
        console.log("On STOP !");
        break;
        
    default:
        console.log("avec précaution");
}
