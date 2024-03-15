// 1) - L'utente clicca su un bottone che genererà una griglia di 
//     gioco quadrata.

// 2) - Ogni cella ha un numero progressivo, da 1 a 100.
//     ci saranno quindi 10 caselle per ognuna delle 10 righe.

// 3) - Quando l'utente clicca su ogni cella, 

// 4) - la cella cliccata si colora di azzurro 

// 5) - ed emetto un messaggio in console 
//     con il numero della cella cliccata.

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
//     CI SARANNO 10 CELLE PER OGNUNA DELLE 100 RIGHE:
    
    //array vuoto
    const blackList = [];

    // il ciclo genera numeri da 1 a 100
    for(let i = 0; i < 100; i++) {
         
        //costante con funzione di generazione numeri random.
        const randomNumber = getRandomUniqueNumber(1, 100, blackList);
        
        //pusho numeri(1-100) in array
        blackList.push(randomNumber);
        
        //creo costante square con funzione di generazione square in html,
        const square = generateSquare(randomNumber);     
       
        //appendo quadrati alla griglia
        gridGame.append(square);
        
// 3) - QUANDO L'UTENTE CLICCA SU OGNI CELLA,
//     LA CELLA CLICCATA SI COLORA DI AZZURRO:
        square.addEventListener('click', function () {       
            square.classList.add('styles-selection'); 
            console.log(randomNumber);  
        });
        };
        
    // ------- FUNCTIONS ------- //
    
    // Funzione per generazione quadrato con all'interno uno span che a sua volta
    // conterrà indice creato in ciclo for.
    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.innerHTML = `<span>${number}</span>`;
        return newSquare;
    }
    
    // Generazione quadrato con all'interno uno span che a sua volta
    // conterrà indice creato in ciclo for.
    function getRandomUniqueNumber(min, max, blackList) { 
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
    
    //Funzione per generare un numero casuale intero compreso tra min e max.
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    


    