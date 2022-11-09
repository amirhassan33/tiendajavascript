document.addEventListener("DOMContentLoaded", () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: "PLAYSTATION 5 EDICION ESTANDAR",
            codigoInterno: "PS5EE",
            precio: 299999,
            imagen: "../img/ps5ee.jpg",
            descripcionImagen: "PlayStation 5 Edicion Estandar",
            descripcion: "Experimenta una velocidad sorprendente de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retrolimentación háptica, gatillos adaptables y audio 3D, y una generación totalmente nueva de increíbles juegos de PlayStation®. Velocidad sorprendente: Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefinirán lo que una consola PlayStation® puede hacer. Inmersión impresionante :Descubre una experiencia de juego más inmersiva con soporte para retroalimentación háptica, gatillos adaptables y tecnología de audio en 3D. Juegos asombrosos: Maravíllate con asombrosos gráficos y descubre las nuevas funciones de PS5™."
        }, {
            id: 2,
            nombre: "PLAYSTATION 5 EDICION DIGITAL",
            codigoInterno: "PS5ED",
            precio: 199999,
            imagen: "../img/ps5ed.jpg",
            descripcionImagen: "PlayStation 5 Edicion Standard",
            descripcion: "Experimenta una velocidad sorprendente de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retrolimentación háptica, gatillos adaptables y audio 3D, y una generación totalmente nueva de increíbles juegos de PlayStation®. Velocidad sorprendente: Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefinirán lo que una consola PlayStation® puede hacer. Inmersión impresionante :Descubre una experiencia de juego más inmersiva con soporte para retroalimentación háptica, gatillos adaptables y tecnología de audio en 3D. Juegos asombrosos: Maravíllate con asombrosos gráficos y descubre las nuevas funciones de PS5™."
        }, {
            id: 3,
            nombre: "XBOX SERIE X",
            codigoInterno: "XBOXSERIEX",
            precio: 249999,
            imagen: "../img/xboxx.jpg",
            descripcionImagen: "XBOX Serie X",
            descripcion: "La Xbox Series X promete uno de los mejores rendimientos jamás vistos en el mundo de las consolas, pudiendo ejecutar juegos en resolución 4K a hasta 120 cuadros por segundo, gracias a una GPU AMD de 12 Teraflops. Toda esta calidad de gráficos, con derecho a Ray Tracing, hace que el videojuego sea un éxito de ventas. El jugador aún puede suscribirse al servicio Xbox Game Pass y tener acceso a juegos exclusivos como Gears 5, Ori and the Blind Forest y Forza Horizon 4. La consola también ejecuta juegos de Xbox One y varios juegos de Xbox 360. 1 TB de almacenamiento, Puedes descargar mucho contenido. Sin embargo, hay opciones para actualizaciones, agregando nuevos SSD de 512 GB o incluso de 1 TB. Otro punto positivo del dispositivo es que en Xbox Series X funcionan los accesorios de versiones anteriores, por lo que puedes disfrutar de mandos, volantes y auriculares."
        }, {
            id: 4,
            nombre: "XBOX SERIE S",
            codigoInterno: "XBOXSERIES",
            precio: 139999,
            imagen: "../img/xboxs.jpg",
            descripcionImagen: "XBOX Serie S",
            descripcion: "La Xbox Series S es la hermana pequeña de la consola lanzada en 2020. Aun así, tiene prácticamente el mismo hardware que la Xbox Series X. Una de las pocas diferencias entre ambas es la falta de un controlador para leer discos, por lo que esta consola es totalmente digital. Es decir, solo se pueden ejecutar versiones digitales de juegos y películas. A pesar de ser la versión “compacta”, no le faltan prestaciones. Ya tiene un SSD para ejecutar y cargar juegos, brindando una experiencia completamente nueva en comparación con la generación anterior. Esta consola brinda tiempos de carga mínimos y la capacidad de entregar hasta 120 FPS en los juegos (siempre que tenga un monitor compatible). Otro diferencial de la Xbox Series S es la posibilidad de ampliar el almacenamiento vía SSD. Además, este videojuego es compatible con el servicio Xbox Game Pass, que le da acceso a una biblioteca de más de 100 títulos por el precio de una suscripción. Su controlador sufrió algunas remodelaciones, con el objetivo de hacerlo más ergonómico."
        }, {
            id: 5,
            nombre: "NINTENDO SWITCH",
            codigoInterno: "NINTENDOSWITCH",
            precio: 219999,
            imagen: "../img/nintendoswitch.jpg",
            descripcionImagen: "Nintendo Switch",
            descripcion: "Con Nintendo Switch, el fabricante de consolas japonés se aventuró a mezclar los dos mundos de los juegos: consolas portátiles y de escritorio. Este es un videojuego que funciona tanto en televisores como en monitores, cuando está conectado a su base de carga, y sin cables, lo que lo hace portátil. Además, la consola tiene una pantalla táctil LCD y dos controladores desmontables llamados Joy-Cons. A diferencia de sus competidores, Nintendo se enfocó en la portabilidad, es decir, si necesita desocupar el televisor en la habitación, puede continuar el juego en la propia consola. Es ideal para los fanáticos de las grandes franquicias de videojuegos como Mario, The Legend of Zelda y Sonic, algunas de las cuales son exclusivas de las consolas de Nintendo. Su batería de 4.310 mAh tiene una duración estimada de entre 4,5 horas y 9 horas. Este es un videojuego ideal para toda la familia y amigos."
        }
    ];

    let carrito = [];
    const divisa = "$";
    const DOMitems = document.querySelector("#items");
    const DOMcarrito = document.querySelector("#carrito");
    const DOMtotal = document.querySelector("#total");
    const DOMbotonVaciar = document.querySelector("#boton-vaciar");
    const DOMbotonComprar = document.querySelector("#boton-comprar");


    function mostrarProductos() {
        baseDeDatos.forEach((info) => {
            const miNodo = document.createElement("div");
            miNodo.classList.add("card", "col-sm-4");

            const miNodoCardBody = document.createElement("div");
            miNodoCardBody.classList.add("card-body");

            const miNodoTitle = document.createElement("h5");
            miNodoTitle.classList.add("card-title");
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src", info.imagen);

            const miNodoPrecio = document.createElement("p");
            miNodoPrecio.classList.add("card-text");
            miNodoPrecio.textContent = `${divisa}${info.precio}`;

            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn", "btn-primary");
            miNodoBoton.textContent = "+";
            miNodoBoton.setAttribute("marcador", info.id);
            miNodoBoton.addEventListener("click", agregarProductoAlCarrito);


            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }


    function agregarProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute("marcador"));
        mostrarCarrito();

    }




    //Dibuja todos los productos guardados en el carrito
    function mostrarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = "";
        // Saca los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Nos da el item que necesitamos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {


                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el numero de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement("li");
            miNodo.classList.add("list-group-item", "text-right", "mx-2");
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement("button");
            miBoton.classList.add("btn", "btn-danger", "mx-5");
            miBoton.textContent = "X";
            miBoton.style.marginLeft = "1rem";
            miBoton.dataset.item = item;
            miBoton.addEventListener("click", borrarItemCarrito);

            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });

        DOMtotal.textContent = calcularTotal();
    }



    //Es para borrar un elemento del carrito
    function borrarItemCarrito(evento) {

        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        mostrarCarrito();
    }

    //Calcula el precio total teniendo en cuenta los productos repetidos
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento tenemos el precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }





    function vaciarCarrito() {
        carrito = [];
        mostrarCarrito();
    }




    function comprarCarrito() {
        alert("El total de la compra es $" + calcularTotal());
        carrito = [];
        mostrarCarrito();

    }

    DOMbotonVaciar.addEventListener("click", vaciarCarrito);

    DOMbotonComprar.addEventListener("click", comprarCarrito);



    mostrarProductos();
    mostrarCarrito();
});

