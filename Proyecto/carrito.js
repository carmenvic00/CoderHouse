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
// funcion de mensajes para no repetir codigo en el resto de las funciones
function miAviso(mensaje, duracion){
    Toastify({
        text: mensaje,     
        duration: duracion   
        }).showToast();       
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function createButtons() {
    await delay(1000);
    let boton1 = document.getElementById("boton1")
    let boton1Del = document.querySelector("#boton1Del")

    let boton2 = document.getElementById("boton2")
    let boton2Del = document.getElementById("boton2Del")

    let boton3 = document.getElementById("boton3")
    let boton3Del = document.getElementById("boton3Del")

    let boton4 = document.getElementById("boton4")
    let boton4Del = document.getElementById("boton4Del")

    let boton5 = document.getElementById("boton5")
    let boton5Del = document.getElementById("boton5Del")

    let boton6 = document.getElementById("boton6")
    let boton6Del = document.getElementById("boton6Del")

    boton1.onclick = ("click", () => agregarAlCarrito("Arena para Gatos",1))
    boton1Del.onclick = ("click", () =>  eliminarDelCarrito("Arena para Gatos"))

    boton2.onclick = ("click", () => agregarAlCarrito("Juguete anti Estres",1))
    boton2Del.onclick = ("click", () =>  eliminarDelCarrito("Juguete anti Estres"))

    boton3.onclick = ("click", () => agregarAlCarrito("Rascador Para Gatos",1))
    boton3Del.onclick = ("click", () =>  eliminarDelCarrito("Rascador Para Gatos"))

    boton4.onclick = ("click", () => agregarAlCarrito("Royal Canin Medium",1))
    boton4Del.onclick = ("click", () =>  eliminarDelCarrito("Royal Canin Medium"))

    boton5.onclick = ("click", () => agregarAlCarrito("Royal Canin Castrados",1))
    boton5Del.onclick = ("click", () =>  eliminarDelCarrito("Royal Canin Castrados"))

    boton6.onclick = ("click", () => agregarAlCarrito("Juguete para gatos",1))
    boton6Del.onclick = ("click", () =>  eliminarDelCarrito("Juguete para gatos"))

}
createButtons();