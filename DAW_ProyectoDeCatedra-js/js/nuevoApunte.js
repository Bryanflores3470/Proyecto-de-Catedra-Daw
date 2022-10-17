function mostrarTablaDatos(){
    document.getElementById('tablaParaAnadir').style.display = "block";
}
function ocutarTabla(){
    document.getElementById('tablaParaAnadir').style.display = "none";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtDescipcion').value = "";
}