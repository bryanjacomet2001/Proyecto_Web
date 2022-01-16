var form = document.querySelector("#frmConsultas");

form.addEventListener('submit', validar);
function validar(event) {
    var resultado = true;
    var txtNombres = document.getElementById("nombre");
    var Apellidos = document.getElementById("apellidos");
    var CorreoE = document.getElementById("correo");
    var Telefono = document.getElementById("telefono");
    var Genero = document.getElementsByName("genero");
    var Terminos = document.getElementById("termino");

    var letra = /^[a-z ,.'-]+$/i; // letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros

    BorrarDatos();

    //Validaciones
    //Nombres y Apellidos
    if (txtNombres.value === '') {
        resultado = false;
        mensaje("Escriba sus Nombres", txtNombres);
    } else if (!letra.test(txtNombres.value)) {
        resultado = false;
        mensaje("Solo deben de ingresar numeros", txtNombres);
    } else if (txtNombres.value.length > 30) {
        resultado = false;
        mensaje("Nombre maximo de 30 caracteres", txtNombres);
    }
    //Apellidos
    if (Apellidos.value === '') {
        resultado = false;
        mensaje("Escriba sus Apellidos", Apellidos);
    } else if (!letra.test(Apellidos.value)) {
        resultado = false;
        mensaje("Solo deben de ingresar números", Apellidos);
    } else if (Apellidos.value.length > 30) {
        resultado = false;
        mensaje("Nombre maximo de 30 caracteres", Apellidos);
    }

    //Validar Telefono.
    if (Telefono.value === "") {
        resultado = false;
        mensaje("Teléfono obligatorio", Telefono);
    } else if (!Telefono.test(Telefono.value)) {
        resultado = false;
        mensaje("Debe de tener menos de 10 digitos.", Telefono);
    }

    //Validar Correo
    if (CorreoE.value === "") {
        resultado = false;
        mensaje("Ingrese un correo electrónico", CorreoE);
    } else if (!CorreoE.test(CorreoE.value)) {
        resultado = false;
        mensaje("El correo ingresado no es correcto", CorreoE);
    }

    //Validar RadioButtom
    var sel = false;
    for (let i = 0; i < Genero.length; i++) {
        if (Genero[i].checked) {
            sel = true;
            let res=Genero[i].value;
            break;
        }
    }

    if (!sel) {
        resultado = false;
        mensaje("Debe seleccionar un genero", Genero[0]);
    }

    //Validar CheckBox
    if (!Terminos.checked) {
        resultado = false;
        mensaje("Debe de aceptar los terminos mencionados.", Terminos);
    }

    event.preventDefault();
}

function mensaje(cadena, elemento) {
    elemento.focus();
    var NPadre = elemento.parentNode;
    var NHijo = document.createElement("span");
    NHijo.textContent = cadena;
    NHijo.setAttribute("class", "MensajeError");
    NPadre.appendChild(NHijo);
}

function BorrarDatos() {
    var mensajes = document.querySelectorAll(".MensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();
    }
}