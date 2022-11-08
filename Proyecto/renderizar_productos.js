const fetchProductos = async () => {
    const productosFetch = await fetch("./productos.json");

    const productosJson = await productosFetch.json();

    renderizarProductos(productosJson);
}

const renderizarProductos = (productos) => {
    const productosList = document.getElementById("productosList");
    productos.forEach(producto => {
        const col = document.createElement("div");
        const productoHtml = ` 
            <div class="BorderTextgatitos colorEnPetShop">
                <img class="d-block mx-auto mt-3" width="200px" src="${producto.imagen}" alt="${producto.nombre}">
                <p class="fw-bold text-center mt-3"> ${producto.nombre} </p>
                <p class="fw-bold text-center mt-3"> ${producto.precio} </p>
                <button class="btn btn-outline-dark mb-3 mt-4 d-block mx-auto" id="boton${producto.id}">
                    Agregar al Carrito
                </button>
                <button class="btn btn-outline-dark mb-3 mt-4 d-block mx-auto" id="boton${producto.id}Del">
                    Eliminar del Carrito
                </button>
            </div>       
        `;
        col.innerHTML = productoHtml;

        productosList.appendChild(col);
    })
}

fetchProductos();