const nombreUsuario = document.getElementById('txtUsuario');
const email = document.getElementById('txtEmail');
const contrasenia = document.getElementById('txtContrasenia');
const formulario = document.getElementById('formulario');
const parrafo = document.getElementById('adevertencia');
const registro = document.getElementById('registro');

registro.addEventListener('click', function(){
    let advertencia = "";
    let valido = false

    //validaciones con expresines regulares
    let validacionUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
    let validacionContra = /^.{4,12}$/;
    let validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML == '';

    if(!validacionUsuario.test(nombreUsuario.value))
    {
        advertencia += `El nombre de usuario no es valido. <br>`;
        valido = true;
    }
    if(!validacionEmail.test(email.value))
    {
        advertencia += `El email no es valido <br>`;
        valido = true;
    }
    if(!validacionContra.test(contrasenia.value))
    {
        advertencia += `La contraseña no es valida. <br>`;
        valido = true;
    }

    if(valido)
    {
        parrafo.innerHTML = advertencia;
    }
    else
    {
        parrafo.style.color = "green"
        parrafo.innerHTML = 'Registrado';
    }
});