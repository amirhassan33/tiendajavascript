class Juego {
    constructor(nombre, genero, anio, empresa, valoracion, id) {
        this.nombre = nombre.toUpperCase();
        this.genero = genero;
        this.anio = parseInt(anio);
        this.empresa = empresa;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }

    asignar_id(array) {
        this.id = array.length;
    }

}

const juegos_cargados = [
    new Juego("FIFA 23", "Deporte", 2022, "Elecronic Arts", 9, 1),
    new Juego("HORIZON ZERO DAWN", "Aventura", 2017, "Guerrilla Games", 10, 2),
    new Juego("GOD OF WAR III", "Accion", 2010, "Santa Monica Studio", 10, 3),
    new Juego("FINAL FANTASY VII REMAKE", "Aventura", 2020, "SQUARE ENIX", 8, 4),
    new Juego("UNCHARTED 4: EL DESENLACE DEL LADRON", "Aventura", 2016, "Naughty Dog", 8, 5),
    new Juego("JUST CAUSE 4", "Accion", 2018, "Avalanche Studios", 7, 6),
    new Juego("NEED FOR SPEED PAYBACK", "Carrera", 2017, "Elecronic Arts", 6, 7)
]

let opcion_ingresar = prompt("Necesitas ingresar un juego mas a la biblioteca? En este momento hay " + juegos_cargados.length + " juegos cargados. Para continuar presiona cualquier tecla. Si no quieres cargar juegos presiona x");

while (opcion_ingresar.toUpperCase() != "X") {

    let ingreso_nombre = prompt("Ingresa el nombre del juego a cargar en la biblioteca");
    let ingreso_genero = prompt("Ingresa el genero del juego a cargar en la biblioteca");
    let ingreso_anio = prompt("Ingresa el año de lanzamiento del juego a cargar en la biblioteca. Recorda que el primer video juego se lanzo en 1958");
    let ingreso_empresa = prompt("Ingresa la empresa que desarrollo el juego a cargar en la biblioteca");
    let ingreso_valoracion = prompt("Ingresa la valoracion que le darias al juego a cargar en la biblioteca. Por favor califica entre 0 y 10");
    if (ingreso_valoracion >= 0 && ingreso_valoracion <= 10 && ingreso_anio >= 1958 && ingreso_anio <= 2022 && ingreso_nombre != "" && ingreso_genero != "" && ingreso_empresa != "") {

        const juego = new Juego(ingreso_nombre, ingreso_genero, ingreso_anio, ingreso_empresa, ingreso_valoracion);

        juegos_cargados.push(juego);

        juego.asignar_id(juegos_cargados);

    } else {
        alert("ingresaste mal el año de lanzamiento o la calificacion o algun campo vacio");
    }

    opcion_ingresar = prompt("Necesitas ingresar un juego mas a la biblioteca? Ahora hay " + juegos_cargados.length + " juegos cargados. Para continuar presiona cualquier tecla. Si no quieres cargar mas juegos presiona x");
}






let forma_ordenar = prompt("Elegi la forma de que queres que quede ordenada la biblioteca:\n1 - Nombre (A a Z)\n2 - Nombre (Z a A)\n3 - Valoracion (Mas alta a mas baja)\n4 - Valoracion (Mas baja a mas alta)\n5 - Año de lanzamiento (Mas viejo a mas nuevo)\n6 - Año de lanzamiento (Mas nuevo a mas viejo)\nPresiona x para salir sin ordenar");

function ordenar(forma_ordenar, array) {
    let array_ordenado = array.slice(0);

    while (forma_ordenar.toUpperCase() != "X") {

        switch (forma_ordenar) {
            case '1':
                let nombre_ascendente = array_ordenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
                return nombre_ascendente;
            case '2':
                let nombre_descendente = array_ordenado.sort((a, b) => b.nombre.localeCompare(a.nombre));
                return nombre_descendente;
            case '3':
                return array_ordenado.sort((a, b) => b.valoracion - a.valoracion);
            case '4':
                return array_ordenado.sort((a, b) => a.valoracion - b.valoracion);
            case '5':
                return array_ordenado.sort((a, b) => a.anio - b.anio);
            case '6':
                return array_ordenado.sort((a, b) => b.anio - a.anio);
            default:
                alert("No es un opcion valida");
                break;
        }
        forma_ordenar = prompt("Elegi la forma de que queres que quede ordenada la biblioteca:\n1 - Nombre (A a Z)\n2 - Nombre (Z a A)\n3 - Valoracion (Mas alta a mas baja)\n4 - Valoracion (Mas baja a mas alta)\n5 - Año de lanzamiento (Mas viejo a mas nuevo)\nPresiona x para salir sin ordenar");

    }
}

function crearStringResultado(array) {
    let info = '';
    array.forEach(elemento => {
        info += 'Título: ' + elemento.nombre + '\nAutor: ' + elemento.empresa + '\nAño de publicación: ' + elemento.anio + '\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
    })
    return info;
}

if (forma_ordenar.toUpperCase() == "X") {

    alert(crearStringResultado(juegos_cargados));

} else {

    alert(crearStringResultado(ordenar(forma_ordenar, juegos_cargados)));

}