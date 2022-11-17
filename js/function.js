
let number 

// array 1 numeri random
myArrNum = randomNumberNot (16, 1, 100)

// funzione per creare la griglia
function createGrid(number){

    // creazione elemento div
    const elemento = document.createElement("div");
    
    elemento.classList.add("box");

    elemento.innerHTML = `${number }`;

        // ritornare l'elemento per visualizzarlo
    
    console.log(elemento);

    // ritornalo
    return elemento;

}

