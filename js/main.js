// creare pratofiorito

// dichiaro le constanti
const btn = document.getElementById("button")


btn.addEventListener("click",

    function(){

        createNumber()

        let myElement = document.getElementById("container")

        for(let i = 0; i<100; i++){

            // console.log(number);

            let nuovoElemento = createGrid(i);

            myElement.appendChild(nuovoElemento);


            // click per colorare / scolorare il quadratino di blu
            nuovoElemento.addEventListener("click",
            
                function(){
                    nuovoElemento.classList.toggle("click")

                }
            );
        };
    }

    
);


// let none = document.getElementById("container");

// Button.addEventListener("click",

// none.classList.add("display");

// );





