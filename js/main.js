// creare pratofiorito

// dichiaro le constanti
const myElement = document.getElementById("container")

createNumber()

for(let i = 0; i<100; i++){

    let nuovoElemento = createGrid();


    myElement.appendChild(nuovoElemento);


    // click per colorare / scolorare il quadratino di blu
    nuovoElemento.addEventListener("click",
    
        function(){
            nuovoElemento.classList.toggle("click")
        }
    
    );
}


