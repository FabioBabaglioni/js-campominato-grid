
let number 

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