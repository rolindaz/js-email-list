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

//Ora implementa la richiesta usando l'esempio nelle slide tramite javascript fetch

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ulEl = document.getElementById('mail-list');

fetch(endpoint)
.then(response => response.json())
.then(data => {
    
    //Stampa il risultato della singola mail in console per confermare che la chiamata sia andata a buon fine e siano presenti i risultati
    
    console.log(data);
    
    // Adesso PENSA: devo fare la stessa cosa per 10 volte: che strumento mi permette di ripetere qualcosa usando un contatore?
    
    for (let i = 10; i > 0; i--) {
        console.log(data);
        
        // Aggiorna la DOM inserendo gli indirizzi generati in una lista
        let emailMarkup = `
            <li>
                ${data.response}
            </li>
        `;
        ulEl.insertAdjacentHTML('beforeend', emailMarkup);
    };
});
