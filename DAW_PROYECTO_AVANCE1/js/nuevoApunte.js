function mostrarTablaDatos(){
    document.getElementById('tablaParaAnadir').style.display = "block";
}
function ocutarTabla(){
    document.getElementById('tablaParaAnadir').style.display = "none";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtDescipcion').value = "";
}
//verificacuion que los campos no esten vacios

btnIngresar = document.getElementById('btnagregar');
titulo = document.getElementById('txtNombre');
descripcion = document.getElementById('txtDescipcion');
prioridad = document.getElementById('prioridad');

btnIngresar.addEventListener('click', function(){
    if(titulo.value !== '' || descripcion.value !== ''){
        //llama a la funcion para mandarlo a la base de datos
        guardarNotaClase();


        //limpiar los campos
        titulo.value = '';
        descripcion.value = '';
        prioridad.value = 'Baja';

        //ocultar la tabla
        document.getElementById('tablaParaAnadir').style.display = "none";
        document.getElementById('txtNombre').value = "";
        document.getElementById('txtDescipcion').value = "";

    }
    else{
        alert('Rellene todos los campos');
    }
})



//guardar nota apunte
function guardarNotaClase(){
    db.collection("notaclase").add({
        nombre:document.getElementById("txtNombre").value,
        descripcion:document.getElementById("txtDescipcion").value,
        prioridad:document.getElementById("prioridad").value,
    })
    .then((docRef) => {
        alert("Nota Ingresada")
    })
    .catch((error) => {
        alert("Nota no Ingresada")
    });
}

//mostrar desde la base
function verNotas(){
    db.collection("notaclase").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           document.getElementById("descripcion").innerHTML=`${doc.data().descripcion}`;
           document.getElementById("nombre").innerHTML=`${doc.data().nombre}`;
           document.getElementById("prioridad1").innerHTML=`${doc.data().prioridad}`;
        });
    });
}