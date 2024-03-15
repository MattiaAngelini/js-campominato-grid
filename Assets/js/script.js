// 1) - L'utente clicca su un bottone che genererà una griglia di 
//     gioco quadrata.

// 2) - Ogni cella ha un numero progressivo, da 1 a 100.
//     ci saranno quindi 10 caselle per ognuna delle 10 righe.

// 3) - Quando l'utente clicca su ogni cella, 

// 4) - la cella cliccata si colora di azzurro 

// 5) - ed emetto un messaggio in console 
//     con il numero della cella cliccata.


//Consigli del giorno:  :party_wizard:
//Scriviamo prima cosa vogliamo fare passo passo in italiano, 
//dividiamo il lavoro in micro problemi.
//Ad esempio:
//Di cosa ho bisogno per generare i numeri?
//Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.


//START

// 1) - CREARE UN BOTTONE CHE GENERERA' LA GRIGLIA:
//      creo un evento click in cui rimuovo la classe d-none.

//creo costante per selezione della griglia
const gridGame = document.querySelector("#grid-game");

//seleziono tasto play e gli aggiungo evento click
const buttonPlay = document.querySelector(".button-play");
buttonPlay.addEventListener ('click', function () {
    //al click togliamo alla griglia la class d-none per farla apparire.
    gridGame.classList.toggle('d-none');
});

