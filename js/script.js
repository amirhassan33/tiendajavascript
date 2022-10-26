let contenedor_productos = document.querySelector(".contenedor_productos");

let catalogo = [{
    id: 1,
    nombre: "PLAYSTATION 5 EDICION ESTANDAR",
    codigo_interno: "PS5EE",
    precio: 299.999,
    imagen: "../img/ps5ee.jpg",
    descripcion_imagen: "PlayStation 5 Edicion Estandar",
    descripcion: "Experimenta una velocidad sorprendente de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retrolimentación háptica, gatillos adaptables y audio 3D, y una generación totalmente nueva de increíbles juegos de PlayStation®. Velocidad sorprendente: Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefinirán lo que una consola PlayStation® puede hacer. Inmersión impresionante :Descubre una experiencia de juego más inmersiva con soporte para retroalimentación háptica, gatillos adaptables y tecnología de audio en 3D. Juegos asombrosos: Maravíllate con asombrosos gráficos y descubre las nuevas funciones de PS5™."
}, {
    id: 2,
    nombre: "PLAYSTATION 5 EDICION DIGITAL",
    codigo_interno: "PS5ED",
    precio: 199.999,
    imagen: "../img/ps5ed.jpg",
    descripcion_imagen: "PlayStation 5 Edicion Standard",
    descripcion: "Experimenta una velocidad sorprendente de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retrolimentación háptica, gatillos adaptables y audio 3D, y una generación totalmente nueva de increíbles juegos de PlayStation®. Velocidad sorprendente: Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefinirán lo que una consola PlayStation® puede hacer. Inmersión impresionante :Descubre una experiencia de juego más inmersiva con soporte para retroalimentación háptica, gatillos adaptables y tecnología de audio en 3D. Juegos asombrosos: Maravíllate con asombrosos gráficos y descubre las nuevas funciones de PS5™."
}, {
    id: 3,
    nombre: "XBOX SERIE X",
    codigo_interno: "XBOXSERIEX",
    precio: 249.999,
    imagen: "../img/xboxx.jpg",
    descripcion_imagen: "XBOX Serie X",
    descripcion: "La Xbox Series X promete uno de los mejores rendimientos jamás vistos en el mundo de las consolas, pudiendo ejecutar juegos en resolución 4K a hasta 120 cuadros por segundo, gracias a una GPU AMD de 12 Teraflops. Toda esta calidad de gráficos, con derecho a Ray Tracing, hace que el videojuego sea un éxito de ventas. El jugador aún puede suscribirse al servicio Xbox Game Pass y tener acceso a juegos exclusivos como Gears 5, Ori and the Blind Forest y Forza Horizon 4. La consola también ejecuta juegos de Xbox One y varios juegos de Xbox 360. 1 TB de almacenamiento, Puedes descargar mucho contenido. Sin embargo, hay opciones para actualizaciones, agregando nuevos SSD de 512 GB o incluso de 1 TB. Otro punto positivo del dispositivo es que en Xbox Series X funcionan los accesorios de versiones anteriores, por lo que puedes disfrutar de mandos, volantes y auriculares."
}, {
    id: 4,
    nombre: "XBOX SERIE S",
    codigo_interno: "XBOXSERIES",
    precio: 139.999,
    imagen: "../img/xboxs.jpg",
    descripcion_imagen: "XBOX Serie S",
    descripcion: "La Xbox Series S es la hermana pequeña de la consola lanzada en 2020. Aun así, tiene prácticamente el mismo hardware que la Xbox Series X. Una de las pocas diferencias entre ambas es la falta de un controlador para leer discos, por lo que esta consola es totalmente digital. Es decir, solo se pueden ejecutar versiones digitales de juegos y películas. A pesar de ser la versión “compacta”, no le faltan prestaciones. Ya tiene un SSD para ejecutar y cargar juegos, brindando una experiencia completamente nueva en comparación con la generación anterior. Esta consola brinda tiempos de carga mínimos y la capacidad de entregar hasta 120 FPS en los juegos (siempre que tenga un monitor compatible). Otro diferencial de la Xbox Series S es la posibilidad de ampliar el almacenamiento vía SSD. Además, este videojuego es compatible con el servicio Xbox Game Pass, que le da acceso a una biblioteca de más de 100 títulos por el precio de una suscripción. Su controlador sufrió algunas remodelaciones, con el objetivo de hacerlo más ergonómico."
}, {
    id: 5,
    nombre: "NINTENDO SWITCH",
    codigo_interno: "NINTENDOSWITCH",
    precio: 219.999,
    imagen: "../img/nintendoswitch.jpg",
    descripcion_imagen: "Nintendo Switch",
    descripcion: "Con Nintendo Switch, el fabricante de consolas japonés se aventuró a mezclar los dos mundos de los juegos: consolas portátiles y de escritorio. Este es un videojuego que funciona tanto en televisores como en monitores, cuando está conectado a su base de carga, y sin cables, lo que lo hace portátil. Además, la consola tiene una pantalla táctil LCD y dos controladores desmontables llamados Joy-Cons. A diferencia de sus competidores, Nintendo se enfocó en la portabilidad, es decir, si necesita desocupar el televisor en la habitación, puede continuar el juego en la propia consola. Es ideal para los fanáticos de las grandes franquicias de videojuegos como Mario, The Legend of Zelda y Sonic, algunas de las cuales son exclusivas de las consolas de Nintendo. Su batería de 4.310 mAh tiene una duración estimada de entre 4,5 horas y 9 horas. Este es un videojuego ideal para toda la familia y amigos."
}];

function crear_productos(catalogo, contenedor) {
    contenedor.innerHTML = "";
    for (const item of catalogo) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "card my-5 bg-light";
        tarjeta.id = `${item.id}`;
        tarjeta.innerHTML = `
    <h4 class="card-header">${item.nombre}</h4>
    <img src="${item.imagen}" class="card-img-top imagen_producto" alt="${item.descripcion_imagen}">
    <div class="card-body">
        <p class="card-text">${item.descripcion}</p>
        <span id="precio">$ ${item.precio}</span>
    </div>
    <div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>`;
        contenedor_productos.append(tarjeta)
    }
}

function buscar(catalogo, nombre, input) {
    return catalogo.filter((item) => item[nombre].includes(input))
}

crear_productos(catalogo, contenedor_productos);

let busqueda = document.querySelectorAll(".ingreso_busqueda");

busqueda.forEach(input => {
    input.addEventListener("input", () => {
        let cadena = (input.value).toUpperCase();
        console.log(cadena);
        crear_productos(buscar(catalogo, input.id, cadena), contenedor_productos);
    })
});








