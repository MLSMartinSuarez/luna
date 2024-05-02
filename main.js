// ------------------------- BASE -------------------------------------------

const div = document.createElement("div");

    div.className = "formulario";

const h1 = document.createElement("h1");

    h1.innerHTML = "Bright Blue Moon"
    h1.className = "titulo";

const labelNombre = document.createElement("label");

    labelNombre.setAttribute("for", "nombre");
    labelNombre.innerHTML = "<b>¿Como queres que te diga de apodo?</b> <br><br>";

const inputNombre = document.createElement("input");

    inputNombre.setAttribute("id", "nombre");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("placeholder", "me gusta moon igual");
    inputNombre.setAttribute("name","Nombre Completo");

const labelMail = document.createElement("label");

    labelMail.setAttribute("for", "mail");
    labelMail.innerHTML = "<br><br> <b>¿Donde queres ir la proxima que nos veamos?</b> <br><br>";

const inputMail = document.createElement("input");

    inputMail.setAttribute("id", "mail");
    inputMail.setAttribute("type", "email");
    inputMail.setAttribute("placeholder", "1 palabra / elegiiii");
    inputMail.setAttribute("name","mail");

const labelOpinion = document.createElement("label");

    labelOpinion.setAttribute("for", "seleccion");
    labelOpinion.innerHTML = "<br><br> <b>¿Como la pasas conmigo?</b> <br><br>";

const inputSelect = document.createElement("select");

    inputSelect.setAttribute("name", "Dificultad");
    inputSelect.setAttribute("id", "seleccion")

const optionFacil = document.createElement("option");

    optionFacil.setAttribute("value", "maso")
    optionFacil.innerHTML = "Maso"

const optionIntermedio = document.createElement("option");

    optionIntermedio.setAttribute("value", "normal")
    optionIntermedio.innerHTML = "Normal"

const optionDificil = document.createElement("option");

    optionDificil.setAttribute("value", "10 puntos")
    optionDificil.innerHTML = "Excelente"

const botonSubmit = document.createElement("button");

    botonSubmit.setAttribute("id", "boton");
    botonSubmit.innerHTML = ("ENVIAR")
    botonSubmit.setAttribute("onclick", "registrarDatos()")


// ------------------------- INPUTS -------------------------------------------


const dataDiv = document.createElement("div")

const dataNombre = document.createElement("p")

const dataMail = document.createElement("p")

const dataSeleccion = document.createElement("p")

const dataTip = document.createElement("p")


// ------------------------- APPENDS -------------------------------------------

    
document.body.append(div);
div.appendChild(h1);
div.appendChild(labelNombre);
div.appendChild(inputNombre);
div.appendChild(labelMail);
div.appendChild(inputMail);
div.appendChild(labelOpinion);
div.appendChild(inputSelect);
inputSelect.appendChild(optionFacil);
inputSelect.appendChild(optionIntermedio);
inputSelect.appendChild(optionDificil);
div.appendChild(botonSubmit);

document.body.append(dataDiv);
dataDiv.appendChild(dataNombre);
dataDiv.appendChild(dataMail);
dataDiv.appendChild(dataSeleccion);
dataDiv.appendChild(dataTip);


// ------------------------- EVENTOS -------------------------------------------


labelNombre.addEventListener("mouseover", () => {
    labelNombre.classList.add("hover")
})

labelNombre.addEventListener("mouseout", () => {
    labelNombre.classList.remove("hover")
})

labelMail.addEventListener("mouseover", () => {
    labelMail.classList.add("hover")
})

labelMail.addEventListener("mouseout", () => {
    labelMail.classList.remove("hover")
})

labelOpinion.addEventListener("mouseover", () => {
    labelOpinion.classList.add("hover")
})

labelOpinion.addEventListener("mouseout", () => {
    labelOpinion.classList.remove("hover")
})


// ------------------------- FUNCIONES -------------------------------------------


function registrarDatos ()  {
    
    let datoNombre = document.getElementById("nombre").value
    let datoMail = document.getElementById("mail").value;
    let datoSelect = document.getElementById("seleccion").value;
    console.log(datoNombre);
    console.log(datoMail);
    console.log(datoSelect);

    if (datoNombre == "" ){
        alert("Por favor introduce un Nombre valido") 

    } else if (datoMail == "" ){
        alert("Por favor introduce un Mail valido") 

    } else if( datoSelect == "maso"){

        dataDiv.className = "dataDiv";
        dataNombre.innerHTML = `Bueno, te queda ${datoNombre}`
        dataMail.innerHTML = `Dale, si no me cancelas por una "amiga" vamos al ${datoMail}`
        dataSeleccion.innerHTML = `Bueeee ${datoSelect}? Con nico la pasas mejor no?`
        dataTip.innerHTML = "Todo mal"

    } else if (datoSelect == "normal"){

        dataDiv.className = "dataDiv";
        dataNombre.innerHTML = `Bueno, te queda ${datoNombre}`
        dataMail.innerHTML = `Dale, si no me cancelas por una "amiga" vamos al ${datoMail}`
        dataSeleccion.innerHTML = `${datoSelect} lo acepto, pero le voy a poner mas onda`
        dataTip.innerHTML = "Todo mal igual"

    } else if (datoSelect == "10 puntos" ){

        dataDiv.className = "dataDiv";
        dataNombre.innerHTML = `Bueno, te queda ${datoNombre}`
        dataMail.innerHTML = `Dale, si no me cancelas por una "amiga" vamos al ${datoMail}`
        dataSeleccion.innerHTML = `Yo tambien la paso ${datoSelect} con vos`
        dataTip.innerHTML = "Igual me debes una cebada de mates"
            
    
    } else{
        alert = ("datos invalidos");
    }


// ------------------------- LOCAL STORAGE -------------------------------------------


    
    localStorage.setItem("Nombre del usuario", datoNombre);
    localStorage.setItem("Mail del usuario", datoMail);
    localStorage.setItem("Opiniones del usuario", datoSelect);

}   


// -------------------------------------------------------------------------------------