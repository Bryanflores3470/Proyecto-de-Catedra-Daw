function mostrarTablaDatos(){
    document.getElementById('tablaParaAnadir').style.display = "block";
}
function ocutarTabla(){
    document.getElementById('tablaParaAnadir').style.display = "none";
}


var notas = new Array();
var btnAgregar = document.getElementById('btnAgregar');

function guardarDatos(){
    registroNotas = new Object();
    //solo validar que los campos no esten vacios
    /*if(document.getElementById('txtTitulo').value == '' || document.getElementById('dtpFecha').value == '' || document.getElementById('txtDescipcion').value =='' || document.getElementById('dtpAlarma').value =='')
    {
        alert('Rellene todos los campos.');
        return;
    }*/

    registroNotas.titulo = document.getElementById('txtTitulo').value;
    registroNotas.fecha = document.getElementById('dtpFecha').value;
    registroNotas.descipcion = document.getElementById('txtDescipcion').value;
    registroNotas.prioridad = document.getElementById('selecionPri').value;
    registroNotas.alarma = document.getElementById('dtpAlarma').value;
    notas.push(registroNotas);

    alert('Se registro su nota de forma correcta.');
    document.getElementById('tablaParaAnadir').style.display = "none";
    document.getElementById('txtTitulo').value = '';
    document.getElementById('dtpFecha').value = '';
    document.getElementById('txtDescipcion').value ='';
    document.getElementById('dtpAlarma').value ='';

    console.log(notas);
    mostrarDatos();
}

function mostrarDatos(){
    let nota = '';
    for(var dato in  notas)
    {
        nota += "Titulo : " + notas[dato].titulo; + '</br>'
    }
    document.getElementById('anadirTabla').innerHTML = nota;
}

btnAgregar.addEventListener('click', function registrarNota(){
    guardarDatos();
});
//guardar nota recordatorio
function guardarRecordatorio(){
    db.collection("notasrecordatorios").add({
        alarma:document.getElementById("dtpAlarma").value,
        categoria:document.getElementById("selecionPri").value,
        fecha:document.getElementById("dtpFecha").value,
        titulo:document.getElementById("txtTitulo").value,
        descricion:document.getElementById("txtDescipcion").value,
    })
    .then((docRef) => {
        alert("Nota Ingresada")
    })
    .catch((error) => {
        alert("Nota no Ingresada")
    });
}

//mostrar desde la base
function verRecordatorio(){
    db.collection("notasrecordatorios").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           document.getElementById("dtpAlarma").innerHTML=`${doc.data().alarma}`;
           document.getElementById("selecionPri").innerHTML=`${doc.data().categoria}`;
           document.getElementById("txtDescipcion").innerHTML=`${doc.data().descricion}`;
           document.getElementById("dtpFecha").innerHTML=`${doc.data().fecha}`;
           document.getElementById("txtTitulo").innerHTML=`${doc.data().titulo}`;
         
        });
    });
}
