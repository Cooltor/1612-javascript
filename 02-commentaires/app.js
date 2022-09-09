// Ceci est un commentaire JS



/* Ceci est un second commentaire */

/*
Ceci est un second commentaire
sur plusieurs lignes
*/




/**
 * Ceci est un commentaire de documentation
 * Ce commentaire décrit la fonction ci-dessous
 * 
 * @param string $username User name
 * @param bool $isAdmin default false
 * 
 * @returns string
 */
function createUser(username, isAdmin=false) 
{
    // Instructions de la fonction

    return "Hello There !";
}

createUser("Bob");
createUser("Tony");
createUser("Bruce", true);