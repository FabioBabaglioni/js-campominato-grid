
let number 

// funzione per creare i numeri progressivi

function createNumber(){
    

    for (let i = 0; i < 100; i++){

        number = i + 1

        console.log(number);
    }
}


// funzione per creare la griglia
function createGrid(number){

    // creazione elemento div
    const elemento = document.createElement("div");
    
    elemento.classList.add("box")

    elemento.innerHTML = `${number}`

        // ritornare l'elemento per visualizzarlo
    
    console.log(elemento);

    // ritornalo
    return elemento;

}