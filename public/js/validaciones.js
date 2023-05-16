const validarFormulario = () => {
    const fechaSalida = new Date(document.getElementById("fechaSalida").value);
    const fechaRegreso = new Date(document.getElementById("fechaRegreso").value);
    const expresionNombre = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionDestino = /^[a-zA-Z]+ *[a-zA-Z]*$/;

    const fechaActual = new Date();
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;

    let mensaje = "";

    if (fechaSalida < fechaActual || fechaRegreso < fechaActual) {
        mensaje += 'Las fechas deben ser posteriores a la fecha actual<br>';
    } else if (fechaSalida > fechaRegreso) {
        mensaje += 'La fecha de salida debe ser anterior o igual a la de regreso<br>';
    }
    if (!expresionNombre.test(origen)) {
        mensaje += "El campo de origen solo puede contener letras<br>";
    }
    if (!expresionDestino.test(destino)) {
        mensaje += "El campo de destino solo puede contener letras<br>";
    }

    const alerta = document.getElementById("mensaje");

    if (mensaje.length > 0) {
        alerta.style.display = "block";
        alerta.innerHTML = mensaje;
    } else {
        alerta.style.display = "none";
    }
}

document.querySelector("#btnEnviar").addEventListener('click', validarFormulario);
