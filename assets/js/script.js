console.log('hi');

/*
Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/
//Steps:
//apri postman e crea una nuova collection black (vuota)
//nella collection crea una nuova request cliccando sui tre pallini affianco al nome
//copia il link del campo della request
//clicca save e send per inviare la chiamata http tramite postman
// Adesso PENSA: devo fare la stessa cosa per 10 volte: che strumento mi permette di ripetere qualcosa usando un contatore?
// Aggiorna la DOM inserendo gli indirizzi generati in una lista

//Ora implementa la richiesta usando l'esempio nelle slide tramite javascript fetch

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

fetch(endpoint)
.then(response => response.json())
.then(data => {

    //Stampa il risultato della singola mail in console per confermare che la chiamata sia andata a buon fine e siano presenti i risultati

    console.log(data);
});
