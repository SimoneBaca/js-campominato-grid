/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :baby-yoda-soup:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Eventuali validazioni e controlli possiamo farli anche in un secondo momento.*/

// 1- visualizzare l'elemento al click del bottone

const play = document.querySelector('.play');

play.addEventListener('click', function(){
    document.querySelector('.field').style.visibility = "visible";
})

// 2- creare la griglia 10x10 

const container = document.querySelector('.field');

for (i=0; i<100; i++){
    let element;
    element = `<div class="box">${i+1}</div>`;
    container.innerHTML += element;
}

// 3- cliccando sulle celle si colorano e compare il numero in console

/*const cell = document.getElementsByClassName("box");
cell.addEventListener('click', function(){
    cell.style.backgroundColor = "red";  
})

DA FIXARE!!!!
*/