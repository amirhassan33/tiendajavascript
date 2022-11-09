var peticionHTTP;

//Funcion para inicializar la variable
//Dependiendo de la version del navegador lo genera

function inicialilzar_XHR() {
    if (window.XMLHttpRequest) {
        peticionHTTP = new XMLHttpRequest();
    } else {
        peticionHTTP = new ActiveXObject();
    }
}

//Funcion para hacer uso del objeto
//Parametros, la url de la pagina donde se va a cargar la informacion, metodo que se va a usar, funcion de respuesta
function realizarPeticion(url, metodo, funcion) {
    peticionHTTP.onreadystatechange = funcion; //Lo que se va a llamar cuando haya un cambio en el estado;
    peticionHTTP.open(metodo, url, true);//A open se le va a indicar que metodo (GET o POST)se va a utilizar, sobre que pagina (URL),y si la peticion es asincronica (TRUE o FALSE)
    peticionHTTP.send(null);
}

function funcionLectura() {
    if (peticionHTTP.readyState == 4) {
        var datos = JSON.parse(peticionHTTP.responseText);
        console.log(datos);
        var resultado = "";
        var body = "";
        for (i = 0; i < datos.length; i++) {
            resultado += `<li>${datos[i].id} - ${datos[i].name}</li>`;
            body += `<tr><td>${datos[i].id}</td><td>${datos[i].name}</td><td>${datos[i].email}</td><td>${datos[i].address.street}${datos[i].address.suite}-${datos[i].address.city}</td></tr>`;
        }
    }
    document.getElementById("lista").innerHTML = resultado;
    document.getElementById("tabla").innerHTML = body;
}
//Cuando arme los datos los inserto los items en la UL

function descargarArchivo() {
    inicialilzar_XHR();
    var origenArch = "https://jsonplaceholder.typicode.com/users";
    realizarPeticion(origenArch, "GET", funcionLectura); //FuncioLectura es la que se va activar cuando cargue la respuesta del servidor
}

window.onload = descargarArchivo;