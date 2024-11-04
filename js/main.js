
//cargo mi array prod
let productos = [];

fetch("/js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

//funcion para cargar mis prod
function cargarProductos(prodElegidos) {
    contenedorProductos.innerHTML = ""; // Limpiamos el contenedor

    prodElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("col-md-3", "mb-4");
        //armo html
        div.innerHTML = `
            <div class="card" style="width: 100%;">
                <img class="card-img-top" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title" style="color:black; text-align:center;">${producto.titulo}</h5>
                    <p class="card-text" style="color:black; text-align:center;">$${producto.precio}</p>
                    <button class="btn btn-primary w-100" id="${producto.id}">Agregar al carrito</button>
                </div>
            </div>
        `;
        
        // Agregar el card al contenedor de productos
        contenedorProductos.append(div);
    });
}

cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        // Filtra los productos según la categoría seleccionada
        if (e.currentTarget.id !== "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id.toLowerCase() === e.currentTarget.id.toLowerCase());

            if (productosBoton.length > 0) {
                tituloPrincipal.innerText = productosBoton[0].categoria.nombre;
            } else {
                tituloPrincipal.innerText = "Categoría vacía";
            }

            cargarProductos(productosBoton);
        } else {
            // Si es 'todos', muestra todos los productos
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});
