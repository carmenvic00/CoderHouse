let botonRoyalCaninCastrados = document.getElementById("botonRoyalCaninCastrados")
let botonRoyalCaninCastradosDel = document.getElementById("botonRoyalCaninCastradosDel")

let botonRoyalCaninMedium = document.getElementById("botonRoyalCaninMedium")
let botonRoyalCaninMediumDel = document.getElementById("botonRoyalCaninMediumDel")

let botonRascadorParaGatos = document.getElementById("botonRascadorParaGatos")
let botonRascadorParaGatosDel = document.getElementById("botonRascadorParaGatosDel")

let botonJugueteAntiEstres = document.getElementById("botonJugueteAntiEstres")
let botonJugueteAntiEstresDel = document.getElementById("botonJugueteAntiEstresDel")

let botonArenaParaGatos = document.getElementById("botonArenaParaGatos")
let botonArenaParaGatosDel = document.getElementById("botonArenaParaGatosDel")

let botonJugueteGatos = document.getElementById("botonJugueteGatos")
let botonJugueteGatosDel = document.getElementById("botonJugueteGatosDel")

let listaDeProductos = [
    {
        "id": 1,
        "nombre": "Arena para Gatos",
        "precio": 2000
    },
    {   
        "id": 2,
        "nombre": "Juguete anti Estres",
        "precio": 2500
    },
    {
        "id": 3,
        "nombre": "Rascador Para Gatos",
        "precio": 1000
    },
    {
        "id": 4,
        "nombre": "Royal Canin Medium",
        "precio": 1500
    },
    {
        "id": 5,
        "nombre": "Royal Canin Castrados",
        "precio": 1250
    },
    {
        "id": 6,
        "nombre": "Juguete para gatos",
        "precio": 1550
    }
]

// lista que contiene la compra del usuario

let carritoDeCompras = JSON.parse(sessionStorage.getItem('carrito')) || []


//función para agregar productos al carrito, recibe como parametro el nombre y cantidad de producto
function agregarAlCarrito(nombreDelProducto, cantidad) {
    producto = { //armado de diccionario para agregarlo al array
        "nombre": nombreDelProducto,
        "cantidad": cantidad
    }
    for (let index = 0; index < listaDeProductos.length; index++) { //iteracion sobre lista de stock para ver si el producto existe
        let {id, nombre, precio} = listaDeProductos[index]

        if (nombreDelProducto == nombre) {
            carritoDeCompras.push(producto);
            sessionStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
            let mensaje = (`Se agrego el producto ${nombreDelProducto} al carrito!`)
            miAviso(mensaje,3000)
            return console.log(`Se agregó el producto ${nombreDelProducto}, ${cantidad} cantidades.`)
        } 
    }
    carrito = calcularPrecioCarrito();
    return console.log(`El producto ${nombreDelProducto} no existe en stock. ${carrito}`)
}

function calcularPrecioCarrito() {
    let precioFinal = 0;
    for (let index = 0; index < carritoDeCompras.length; index++) { // iteración sobre el carrito de compras para recuperar el nombre y cantidad de cada producto
        let {nombre: nombreCarrito, cantidad: cantidadCarrito} = carritoDeCompras[index]
        for (let index2 = 0; index2 < listaDeProductos.length; index2++) { // iteración sobre el stock para recuperar el precio de cada producto
            let {nombre: nombreLista, precio: precioLista} = listaDeProductos[index2]
            if (nombreCarrito == nombreLista) {
                precioProducto = cantidadCarrito * precioLista;
                console.log(`${nombreCarrito} sería ${precioProducto}`);
                precioFinal =  precioFinal + precioProducto;   
            }
        }     
    }
    console.log(`El precio final a pagar es de: ${precioFinal} pesos`);
    return precioFinal
}

//función para eliminar algun producto del carrito
function eliminarDelCarrito(nombreDelProducto){
    for (let index = 0; index < carritoDeCompras.length; index++) {  //iteración sobre el carrito de compras para recuperar el nombre del producto que se quiere eliminar
        let {nombre} = carritoDeCompras[index]
        if (nombreDelProducto == nombre) {
            carritoDeCompras.splice(index, 1);
            sessionStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
            let mensaje = (`Se elimino el producto ${nombreDelProducto} del carrito!`)
            miAviso(mensaje,3000)
            return console.log(`Se eliminó el producto ${nombreDelProducto}`)
        }          
    }
    let mensaje = (`Usted no tiene el elemento ${nombreDelProducto} en su carrito`)
    miAviso(mensaje,3000)
    return console.log("No se encontro el producto a eliminar")
}

function buscarEnStock(nombreDelProducto) {
    for (let index = 0; index < listaDeProductos.length; index++) {
        let {nombre, precio} = listaDeProductos[index]
        if (nombreDelProducto == nombre) {
            return console.log(`Tenemos el producto ${nombre} en stock y cuesta ${precio}`)
        }
    }
    return console.log(`No tenemos este producto en stock`)
}

function miAviso(mensaje, duracion){
    // Swal.fire({
    //     title: titulo,
    //     text: mensaje,
    //     icon: icono,
    //     confirmButtonText: 'Cerrar'
    // })
    Toastify({

        text: mensaje,
        
        duration: duracion
        
        }).showToast();
}


botonJugueteGatos.onclick = ("click", () => agregarAlCarrito("Juguete para gatos",1))
botonJugueteGatosDel.onclick = ("click", () =>  eliminarDelCarrito("Juguete para gatos"))

botonRoyalCaninCastrados.onclick = ("click", () => agregarAlCarrito("Royal Canin Castrados",1))
botonRoyalCaninCastradosDel.onclick = ("click", () =>  eliminarDelCarrito("Royal Canin Castrados"))

botonRoyalCaninMedium.onclick = ("click", () => agregarAlCarrito("Royal Canin Medium",1))
botonRoyalCaninMediumDel.onclick = ("click", () =>  eliminarDelCarrito("Royal Canin Medium"))

botonRascadorParaGatos.onclick = ("click", () => agregarAlCarrito("Rascador Para Gatos",1))
botonRascadorParaGatosDel.onclick = ("click", () =>  eliminarDelCarrito("Rascador Para Gatos"))

botonJugueteAntiEstres.onclick = ("click", () => agregarAlCarrito("Juguete anti Estres",1))
botonJugueteAntiEstresDel.onclick = ("click", () =>  eliminarDelCarrito("Juguete anti Estres"))

botonArenaParaGatos.onclick = ("click", () => agregarAlCarrito("Arena para Gatos",1))
botonArenaParaGatosDel.onclick = ("click", () =>  eliminarDelCarrito("Arena para Gatos"))

