const txtLista = document.querySelector('#txtLista');
const btnAnadir = document.querySelector('#btnIngresar');
const lista = document.querySelector('#contenidoDatos');
const empty = document.querySelector('#empty');

var registroLista = new Array;

btnAnadir.addEventListener('click', (e) =>{
    e.preventDefault();

    var listatxt = txtLista.value;

    if(listatxt !== "")
    {
        guardarcompra();
        var li = document.createElement('li');
        var p = document.createElement('p');
        p.textContent = listatxt;

        li.appendChild(elementoChecked())
        li.appendChild(p);
        li.appendChild(elemetoBorrar());
        registroLista = lista.appendChild(li);

        txtLista.value = "";
        console.log(registroLista);
        localStorage.setItem('Registro de la lista',JSON.parse(registroLista));
    }
    else{alert('Ingrese alguna compra');}
});

//boton que borra los elementos de la lista
function elemetoBorrar(){
    var btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'x';
    btnBorrar.id = 'btn-Borrar';

    btnBorrar.addEventListener('click',(e) =>{
        const item = e.target.parentElement;
        lista.removeChild(item);
    });
    return btnBorrar;
}

//agrega el check
function elementoChecked(){
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.id = 'btncheckbox'
    return check;
}

//funcion lista compras para la base de datos
function guardarcompra(){
    db.collection("lista compra").add({
        Compras:document.getElementById("txtLista").value,
    })
    .then((docRef) => {
        alert("Compra Ingresada")
    })
    .catch((error) => {
        alert("Compra no Ingresada")
    });
}