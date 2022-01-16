var form = document.querySelector("#formNosotros");

form.addEventListener('submit', validar);

function validar(event){
    limpiarMensajes();
    var resultado=true;
    var txtNombre = document.getElementById("nombre");//nombre
    var txtApellido = document.getElementById("apellido");//apellidos
    var txtEmail = document.getElementById("email");//email
    var rdbGenero = document.querySelectorAll("input[name='genero']");//genero
    var txtTestimonio = document.getElementById("testimonio");//testimonio
    var cmbCalificacion = document.querySelector("#calificacion");//calificacion
    var chkTerminos = document.getElementById("terminos");//terminos

    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

     //validacion para nombres
     if (txtNombre.value === '') {
        resultado = false;
        mensaje("*Nombre es obligatorio", txtNombre);
    } else if (!letra.test(txtNombre.value)) { 
        resultado = false;

        mensaje("*Nombre solo debe contener letras\n", txtNombre);
    } else if (txtNombre.value.length > 20) {
        resultado = false;
        mensaje("*Nombre maximo 20 caracteres\n", txtNombre);
    }

    //validacion para apellidos
    if (txtApellido.value === '') {
        resultado = false;
        mensaje("*Apellidos es obligatorio", txtApellido);
    } else if (!letra.test(txtApellido.value)) { 
        resultado = false;

        mensaje("*Apellidos solo debe contener letras\n", txtApellido);
    } else if (txtApellido.value.length > 20) {
        resultado = false;
        mensaje("*Apellidos maximo 20 caracteres\n", txtNombre);
    }

    //validacion email
    if (txtEmail.value === "") {
        resultado = false;
        mensaje("*Email es obligatorio", txtEmail);
    } else if (!correo.test(txtEmail.value)) {
        resultado = false;
        mensaje("*Email no es correcto", txtEmail);
    }
     //validacion radio button
    var sel = false;
    for (let i = 0; i < rdbGenero.length; i++) {
        if (rdbGenero[i].checked) {
            sel = true;         
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("*Genero es obligatorio", rdbGenero[0]);
    }

    //validacion select
    if (cmbCalificacion.value === null || cmbCalificacion.value === '0') {
        resultado = false;
        mensaje("*Calificacion obligatoria", cmbCalificacion);
    }

    //validacion de un checkbox
    if(!chkTerminos.checked){
        resultado=false;
        mensaje("*Campo obligatorio", chkTerminos);
    }
    //validacion del TextoArea
    if(txtTestimonio.value ===""){
        resultado=false;
        mensaje("*Testimonio obligatorio", txtTestimonio);
    }
   


    if(!resultado){
        event.preventDefault();  // detener el evento  
    }

    function mensaje(cadenaMensaje, elemento) {
        elemento.focus();
        var nodoPadre = elemento.parentNode;
        var nodoMensaje = document.createElement("span"); 
        nodoMensaje.textContent = cadenaMensaje; 
        nodoMensaje.style.color = "red";
        nodoMensaje.setAttribute("class", "mensajeError"); 
        nodoPadre.appendChild(nodoMensaje);
    
    }
    function limpiarMensajes() {
        var mensajes = document.querySelectorAll(".mensajeError");
        for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].remove();// remueve o elimina un elemento de mi doc html
        }
    
    }
}