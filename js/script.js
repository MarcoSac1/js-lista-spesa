const spesaArray =[ 'pane', 'pasta', 'frutta', 'cocacola', 'noci', 'carne', 'insalata', 'shampo'];
// console.log(spesaArray)

// seleziono il primo ed unico ul al inteno del DOM
const ulEL = document.querySelector('ul');

// dichiaro una variabile = 0
let index = 0;

// creo un ciclo while
while ( index < spesaArray.length -1){
    index++;

    // creo un elemento al interno del DOM
    const liEl = document.createElement('li');

    // richiamo l'elemento creato nel DOM
    ulEL.appendChild(liEl);

    // assegno il valore al elemento creato
    liEl.append(spesaArray[index]);
    
    // stampo nel DOM gli elementi del Array
    
    console.log( spesaArray[index]);
}
