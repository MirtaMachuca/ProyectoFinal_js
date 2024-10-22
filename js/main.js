
//cargo mi array prod
const productos=[
    {
        "id": "amini-cuero",
        "titulo": "Mini 01",
        "imagen": "./img/new_in/mini-simil-cuero.jpg",
        "categoria": {
            "nombre": "Cuero",
            "id": "Mini"
        },
        "precio": 10000
    },
    {
        "id": "mini-02",
        "titulo": "Mini 02",
        "imagen": "./img/new_in/mini-simil-cuero2.jpg",
        "categoria": {
            "nombre": "Mini",
            "id": "mini"
        },
        "precio": 12000
    },
    {
        "id": "mini-03",
        "titulo": "Mini 03",
        "imagen": "./img/new_in/short-pollera-simil.jpg",
        "categoria": {
            "nombre": "Mini",
            "id": "mini"
        },
        "precio": 11000
    },
    {
        "id": "mini-04",
        "titulo": "Mini 04",
        "imagen": "./img/new_in/short-pollera-simil.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "top-01",
        "titulo": "Top 01",
        "imagen": "./img/new_in/top-ribb-shine.jpg",
        "categoria": {
            "nombre": "Top",
            "id": "top"
        },
        "precio": 8000
    },
    {
        "id": "top-02",
        "titulo": "top 02",
        "imagen": "./img/new_in/top-ribb.jpg",
        "categoria": {
            "nombre": "Top",
            "id": "top"
        },
        "precio": 7500
    },
    {
        "id": "top-03",
        "titulo": "Top 03",
        "imagen": "./img/new_in/top-simil-cuero-top.jpg",
        "categoria": {
            "nombre": "Top",
            "id": "top"
        },
        "precio": 9000
    },
    {
        "id": "top-04",
        "titulo": "Top 03",
        "imagen": "./img/new_in/top-simil-cuero.jpg",
        "categoria": {
            "nombre": "Top",
            "id": "top"
        },
        "precio": 8500
    },
    {
        "id": "campera-01",
        "titulo": "Campera 01",
        "imagen": "./img/campera.jpg",
        "categoria": {
            "nombre": "Campera",
            "id": "campera"
        },
        "precio": 100000
    },
    {
        "id": "campera-02",
        "titulo": "Campera 02",
        "imagen": "./img/campera2.jpg",
        "categoria": {
            "nombre": "Campera",
            "id": "campera"
        },
        "precio": 80000
    },
    {
        "id": "campera-03",
        "titulo": "Campera 03",
        "imagen": "./img/campera4.jpg",
        "categoria": {
            "nombre": "Campera",
            "id": "campera"
        },
        "precio": 25000
    },
    {
        "id": "campera-04",
        "titulo": "Campera 04",
        "imagen": "./img/campera5.jpg",
        "categoria": {
            "nombre": "Campera",
            "id": "campera"
        },
        "precio": 25000
    },
    {
        "id": "body-01",
        "titulo": "Body 01",
        "imagen": "./img/new_in/body.jpg",
        "categoria": {
            "nombre": "Body",
            "id": "body"
        },
        "precio": 9600
    },
    {
        "id": "conjuntos-01",
        "titulo": "Conjuntos 01",
        "imagen": "./img/new_in/conjunto1.jpg",
        "categoria": {
            "nombre": "Conjunto",
            "id": "conjunto"
        },
        "precio": 75000
    },
    {
        "id": "conjunto-02",
        "titulo": "Conjunto 02",
        "imagen": "./img/new_in/conjunto2.jpg",
        "categoria": {
            "nombre": "Conjunto",
            "id": "conjunto"
        },
        "precio": 1000
    },
    {
        "id": "conjunto-03",
        "titulo": "Conjunto 03",
        "imagen": "./img/new_in/conjunto3.jpg",
        "categoria": {
            "nombre": "Conjunto",
            "id": "conjunto"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-01",
        "titulo": "Pantalón 01",
        "imagen": "./img/new_in/pantalon1.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalon"
        },
        "precio": 10000
    },
    {
        "id": "pantalon-02",
        "titulo": "Pantalón 02",
        "imagen": "./img/new_in/pantalon2.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalon"
        },
        "precio": 15000
    },
    {
        "id": "pantalon-03",
        "titulo": "Pantalón 03",
        "imagen": "./img/new_in/pantalon3.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalon"
        },
        "precio": 13000
    }
];

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
        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

            // Si se encontraron productos de esa categoría, cambia el título y carga los productos
            if (productosBoton.length > 0) {
                tituloPrincipal.innerText = productosBoton[0].categoria.nombre;
            } else {
                tituloPrincipal.innerText = "Categoría vacía";
            }

            // Carga los productos filtrados
            cargarProductos(productosBoton);
        } else {
            // Si es 'todos', muestra todos los productos
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});
/*
botonesCategoria.forEach(boton=>{
    boton.addEventListener("click",(e)=>{
        botonesCategoria.forEach(boton => boton.classList.remove("active"));


        e.currentTarget.classList.add("active")
        if(e.currentTarget.id!="todos"){
            let prodCategoria=productos.find(producto=>producto.categoria.id === e.currentTarget.id);
            tituloPrinciplal.innerHTML=prodCategoria.categoria.nombre
            const prodBoton=productos.filter(producto.categoria.id ===e.currentTarget.id);
            cargarProductos(prodBoton);
        }else{
            tituloPrinciplal.innerHTML= "Todos los Productos";
            cargarProductos(productos);
        }
    })
})*/
    
/*
    <div class="col-md-3 mb-4 producto">
    <div class="card" style="width: 100%;">
      <img src="./img/new_in/mini-simil-cuero2.jpg" class="card-img-top" alt="Campera de Jean">
      <div class="card-body">
        <h5 class="card-title" style="color:black;text-align: center;">Mini de Jean</h5>
        <p class="card-text" style="color:black;text-align: center;">$30000</p>
        <a href="#" class="btn btn-primary w-100">Comprar</a>
      </div>
    </div>
 */

