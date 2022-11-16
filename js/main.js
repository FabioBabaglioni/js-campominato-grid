// creare pratofiorito

// dichiaro le constanti
const myElement = document.getElementById("container")

createNumber()

for(let i = 0; i<100; i++){

    console.log(number);

    let nuovoElemento = createGrid(i);

    myElement.appendChild(nuovoElemento);


    // click per colorare / scolorare il quadratino di blu
    nuovoElemento.addEventListener("click",
    
        function(){
            nuovoElemento.classList.toggle("click")

            console.log(numero);
        }
    
    );
}


