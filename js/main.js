
//cargo mi array prod
let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

const selectorCategoria = document.querySelector("#selector-categoria");
const contenedorProductos = document.querySelector("#contenedor-productos");
const tituloPrincipal = document.querySelector("#titulo-principal");
//let botonesAgregar = document.querySelectorAll(".producto-agregar");
//const numerito = document.querySelector("#numerito");

selectorCategoria.addEventListener("change", (e) => {
    const categoriaSeleccionada = e.target.value;

    if (categoriaSeleccionada !== "todos") {
        const productosFiltrados = productos.filter(producto => producto.categoria.id.toLowerCase() === categoriaSeleccionada.toLowerCase());
        
        tituloPrincipal.innerText = productosFiltrados.length > 0 ? productosFiltrados[0].categoria.nombre : "Categoría vacía";
        cargarProductos(productosFiltrados);
    } else {
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos);
    }
});

//funcion para cargar mis prod

function cargarProductos(prodElegidos) {
    contenedorProductos.innerHTML = ""; // Limpiamos el contenedor

    prodElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("col-md-3", "mb-4");
        div.innerHTML = `
            <div class="card" style="width: 100%;">
                <img class="card-img-top" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title" style="color:black; text-align:center;">${producto.titulo}</h5>
                    <p class="card-text" style="color:black; text-align:center;">$${producto.precio}</p>
                    <button class="producto-agregar btn btn-primary w-100" id="${producto.id}">Agregar al carrito</button>
                </div>
            </div>
        `;
        contenedorProductos.append(div);
    });
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

