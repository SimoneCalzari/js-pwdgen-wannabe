'use strict';

 const myName = prompt('Inserisci il tuo nome:');
 console.log('Il tuo nome è:'+ ' ' + myName); 

 const mySurname = prompt('Inserisci il tuo cognome:');
 console.log('Il tuo cognome è:'+ ' ' + mySurname); 

 const myFavColor = prompt('Inserisci il tuo colore preferito:');
 console.log('Il tuo colore preferito è:'+ ' ' + myFavColor); 

 document.getElementById('newpass').innerHTML = myName + mySurname + myFavColor + Math.round(Math.random() * 100);
 console.log('La tua nuova password è:' + ' ' + document.getElementById('newpass').innerHTML);