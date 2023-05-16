const validarVuelo = () => {
    const departing = new Date(document.getElementById("departing").value);
    const returning = new Date(document.getElementById("returning").value);
    const expresionFrom=/^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionTo=/^[a-zA-Z]+ *[a-zA-Z]*$/;

    const today = new Date();
    const flyingFrom=document.getElementById("flyingFrom").value;
    const flyingTo=document.getElementById("flyingTo").value;


    let mensaje = "";

    if (departing < today || returning < today) {
        mensaje += 'Las fechas deben ser mayores a la fecha actual<br>';
    } else if (departing > returning) {
        mensaje += 'La fecha de partida debe ser menor o igual a la de regreso<br>';
    }
    if(!expresionFrom.test(flyingFrom)){
        mensaje += "El campo de flying from solo pueden ingresar letras<br>";
    }
    if(!expresionTo.test(flyingTo)){
        mensaje += "El campo de  flying to solo pueden ingresar letras<br>";
    }

    const alertElement = document.getElementById("mensaje");

    if (mensaje.length > 0) {
        alertElement.style.display = "block";
        alertElement.innerHTML = mensaje;
    } else {
        alertElement.style.display = "none";
    }
}

document.querySelector("#btnRegistrarVuelo").addEventListener('click', validarVuelo);
