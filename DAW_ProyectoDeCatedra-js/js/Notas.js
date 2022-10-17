function mostrarTablaDatos(){
    document.getElementById('tablaParaAnadir').style.display = "block";
}
function ocutarTabla(){
    document.getElementById('tablaParaAnadir').style.display = "none";
}


var notas = new Array();
var btnAgregar = document.getElementById('btnAgregar');
registroNotas = new Object();

function guardarDatos(){
    registroNotas.titulo = document.getElementById('txtTitulo').value;
    registroNotas.fecha = document.getElementById('dtpFecha').value;
    registroNotas.descipcion = document.getElementById('txtDescipcion').value;
    //seleccionar el tipo de prioridad que elija el usuaio xd
    registroNotas.alarma = document.getElementById('dtpAlarma');
}

btnAgregar.addEventListener('click', function registrarNota(){

});