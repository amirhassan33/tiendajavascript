const nombre = document.getElementById("Nombre_completo");
const apellido = document.getElementById("Apellido");
const correo = document.getElementById("Correo_electronico");
const dni = document.getElementById("DNI");
const direccion = document.getElementById("Direccion");
const provincia = document.getElementById("Provincia");
const localidad = document.getElementById("Localidad");
const pais = document.getElementById("Pais");
const codigo_postal = document.getElementById("Codigo_postal");
const comentarios = document.getElementById("Comentarios");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("click", e => {

  let validar_correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let entrar = false;
  let warnings = "";
  parrafo.innerHTML = "";

  if (nombre.value.length < 5) {
    warnings += `<strong><br>El nombre es muy corto</strong><br>`;
    entrar = true;
  }

  if (apellido.value.length < 5) {
    warnings += `<strong>El apellido es muy corto</strong><br>`;
    entrar = true;
  }

  if (!validar_correo.test(correo.value)) {
    warnings += `<strong>El correo electronico no es valido</strong><br>`
    entrar = true;
  }

  if (dni.value.length < 7 || dni.value.length > 8) {
    warnings += `<strong>El DNI no es valido</strong><br>`;
    entrar = true;
  }

  if (direccion.value.length < 5) {
    warnings += `<strong>La direccion es muy corta</strong><br>`;
    entrar = true;
  }

  if (provincia.value.length < 5) {
    warnings += `<strong>La provincia es muy corta</strong><br>`;
    entrar = true;
  }

  if (localidad.value.length < 5) {
    warnings += `<strong>La localidad es muy corta</strong><br>`;
    entrar = true;
  }

  if (codigo_postal.value.length != 4) {
    warnings += `<strong>El codigo postal no es valido</strong><br>`;
    entrar = true;
  }

  if (pais.value == "Elige el pais") {
    warnings += `<strong>Debes elegir un pais</strong><br>`;
    entrar = true;
  }

  if (comentarios.value == "") {
    warnings += `<strong>El comentario no puede estar vacio</strong><br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
    e.preventDefault();
  } else {
    parrafo.innerHTML = "Se envio el formulario de forma correcta";
  }
})

let btnLogin = document.getElementById('boton_enviar_datos');
let btnVaciarTodo = document.getElementById('btn_vaciar_local_storage');
let btnVaciarSessionStorage = document.getElementById('btn_vaciar_session_storage');
let recordar = document.getElementById("remember_me");


function guardarDatos(storage) {

    let user = document.getElementById('Correo_electronico').value;
    let pass = document.getElementById('Nombre_completo').value;

    const usuario = {
        "user": user,
        "pass": pass
    }

    storage.setItem('user', JSON.stringify(usuario))
}

function borrarDatos(storage) {
    storage.clear();
}

function borrarDatoUnico(key, storage) {
    storage.removeItem(key);
}

btnVaciarTodo.addEventListener('click', () => {
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
})

btnVaciarSessionStorage.addEventListener('click', () => {
    borrarDatos(sessionStorage);
})

btnLogin.addEventListener('click', () => {
    if (recordar.checked) {
        guardarDatos(localStorage);
    } else {
        guardarDatos(sessionStorage);
    }
})