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

// 2) - OGNI CELLA HA UN NUMERO PROGRESSIVO da 1 a 100.
//     CI SARANNO 10 CELLE PER OGNUNA DELLE 100 RIGHE.

//creo costante array vuoto per pushare i numeri creati.
// Creo una griglia 10 x 10. 
// Ogni cella della griglia contiene un numero 
// casuale da 1 a 100. I numeri presenti nelle celle 
// ***non devono essere ripetuti*** 

// finche non tutti i 100 numeri non sono presenti
    // ne prendiamo uno random
    // se gia non l'ho inserito lo inserisco
    // e mi segno che l'ho inserito
    
    const blackList = [];
    for(let i = 0; i < 100; i++) {
        const randomNumber = getRandomUniqueNumber(1, 100, blackList);
        blackList.push(randomNumber);
        const square = generateSquare(randomNumber);;        
        gridGame.append(square);
    }
    
    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.innerHTML = `<span>${number}</span>`;
        return newSquare;
    }
    
    // Funzione che genera un numero random tra min e max 
    // che non è ancora presente nella blacklist
    // min -> numero minimo
    // max -> numero massimo
    // blackList -> array di numeri che sono gia nella griglia
    // return: un numero intero valido compreso tra min e max
    function getRandomUniqueNumber(min, max, blackList) {
        // parte dal pressuposto che il numero 
        // non sia valido
        // se il numero generato random non è presente nella blacklist
        // allora è valido
        // return del numero valido
        let numbIsValid = false;
        let randomNumber;
        while(!numbIsValid) {
            randomNumber = getRndInteger(min, max);
    
            if(!blackList.includes(randomNumber)) {
                numbIsValid = true;
            }
        }
    
        return randomNumber;
    }
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
