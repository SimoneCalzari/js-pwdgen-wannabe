# Demo PassGenerator JS

## Descrizione esercizio

Passaggi da riprodurre:

1. Chiedi all’utente il suo nome 
2. Poi chiedi il suo cognome
3. Poi chiedi il suo colore preferito
4. Infine scrivi sulla pagina nomecognomecolorepreferito21

Parte Bonus:
1. Visualizzare le informazioni anche nella console del browser
2. Provare a generare un numero casuale con Javascript al posto di 21

## Esecuzione esercizio

1. Definiamo una costante e assegniamole il valore tramite una richiesta all'utente attraverso la funzione prompt(ad esempio qua sotto abbiamo il caso del nome):

   `const myName = prompt('Inserisci il tuo nome:');`

2. Mostriamo l'informazione appena ricevuta sulla console del Browser:

   `console.log('Il tuo nome è:'+ ' ' + myName);`

3. Ripetiamo questi passaggi per ogni input in ingresso(nel nostro caso oltre a nome, avremo cognome e colore preferito):

   ```
   const mySurname = prompt('Inserisci il tuo cognome:');

   console.log('Il tuo cognome è:'+ ' ' + mySurname);

   const myFavColor = prompt('Inserisci il tuo colore preferito:');

   console.log('Il tuo cognome è:'+ ' ' + myFavColor);
   ```

4. Concateniamo i tre valori delle nostre costanti tra di loro e con un numero generato casualmente al fine di creare un'ipotetica password, inseriamo questa stringa all'interno di un contenitore in HTML ed infine mostriamola sulla console del browser:

   ```
    document.getElementById('newpass').innerHTML = myName + mySurname + myFavColor + Math.round(Math.random() * 100);
    
    console.log('La tua nuova password è:' + ' ' + document.getElementById('newpass').innerHTML);
   ```

