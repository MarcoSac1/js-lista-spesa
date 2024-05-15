const spesaArray =[ 'pane', 'pasta', 'frutta', 'cocacola', 'noci', 'carne', 'insalata', 'shampo'];
// console.log(spesaArray)

// seleziono il primo ed unico ul al inteno del DOM
const ulEL = document.querySelector('ul');

// creo un ciclo while
for (let index = 0; index < spesaArray.length; index++) {
    
    // creo un elemento al interno del DOM
    const liEl = document.createElement('li');

    liEl.append(spesaArray[index]);

    ulEL.appendChild(liEl);
    
}