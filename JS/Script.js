//Calculadora simple


    //Carga el documento principalmente
    document.addEventListener("DOMContentLoaded", function(){

    //Busca la variable display y lo guarda en const display y buttons
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    //Se cumple la condición por cada click que se hace
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {

            // Obtener ID y texto del botón
            const id = btn.id;

            
            const texto = btn.textContent.trim();

            console.log("Botón clickeado:", {id: id, texto: texto});

            Acum = 0

        if(btn.id === "igual"){
            try {
                    display.value = eval(display.value || "0");  
                } catch {
                    display.value = "Error";
                }
                if (btn === "m/s"){
                    Acum = display.value
                }
            else if (btn.id === "clean") {
            display.value = "";

        } else if (btn.id == "delete" ){
            display.value = display.value.slice(0, -1)

        }else if (btn.id === "porcentaje"){
             try {
                    display.value = (parseFloat(display.value) / 100).toString();
                } catch {
                    display.value = "Error";
                }
            }
        else if (btn.id === "suma"){
            display.value += "+";

        }else if (btn.id === "resta"){
            display.value += "-";

        }else if (btn.id === "multiplicacion"){
            display.value += "*";

        }else if (btn.id === "division"){
            display.value += "/";

        }else if (id === "punto") {
        display.value += ".";

        }else if (["1","2","3","4","5","6","7","8","9","0"].includes(id)) {
            display.value += id;
        }else{
            display.value += btn.textContent;

        }
})
    })
})

 //




     