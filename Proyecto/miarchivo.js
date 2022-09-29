//Creo una lista de ciertos productos para empezar con mi pet shop :)

let listaDeProductos = [
    {
        "nombre": "Royal Canin gato castrado",
        "precio": 2000
    },
    {   "nombre": "Royal Canin perro adulto",
        "precio": 2500
    },
    {
        "nombre": "Juguete para perros",
        "precio": 1000
    },
    {
        "nombre": "Rascador para gatos",
        "precio": 1500
    },
    {
        "nombre": "Arena para gatos",
        "precio": 1250
    }
]

// lista que contiene la compra del usuario
let carritoDeCompras = [];

//función para agregar productos al carrito, recibe como parametro el nombre y cantidad de producto
function agregarAlCarrito(nombreDelProducto, cantidad) {
    producto = { //armado de diccionario para agregarlo al array
        "nombre": nombreDelProducto,
        "cantidad": cantidad
    }
    for (let index = 0; index < listaDeProductos.length; index++) { //iteracion sobre lista de stock para ver si el producto existe
        if (nombreDelProducto == listaDeProductos[index].nombre) {
            carritoDeCompras.push(producto);
            return console.log(`Se agregó el producto ${nombreDelProducto}, ${cantidad} cantidades. `)
        } 
    }
    return console.log(`El producto ${nombreDelProducto} no existe en stock.`)
}

// función para calcular el precio de los productos por cantidad y luego el precio final
function calcularPrecioCarrito() {
    let precioFinal = 0;
    for (let index = 0; index < carritoDeCompras.length; index++) { // iteración sobre el carrito de compras para recuperar el nombre y cantidad de cada producto
        productoActual = carritoDeCompras[index].nombre;
        cantidadActual = carritoDeCompras[index].cantidad;
        for (let index2 = 0; index2 < listaDeProductos.length; index2++) { // iteración sobre el stock para recuperar el precio de cada producto
            if (productoActual == listaDeProductos[index2].nombre) {
                precioProducto = cantidadActual * listaDeProductos[index2].precio;
                console.log(`${productoActual} sería ${precioProducto}`);
                precioFinal =  precioFinal + precioProducto;   
            }
        }     
    }
    console.log(`El precio final a pagar es de: ${precioFinal} pesos`);
}

//función para eliminar algun producto del carrito
function eliminarDelCarrito(nombreDelProducto){
    for (let index = 0; index < carritoDeCompras.length; index++) {  //iteración sobre el carrito de compras para recuperar el nombre del producto que se quiere eliminar
        if (nombreDelProducto == carritoDeCompras[index].nombre) {
            carritoDeCompras.splice(index, 1);
            return console.log(`Se eliminó el producto ${nombreDelProducto}`)
        }          
    }
    return console.log("No se encontro el producto a eliminar")
}

function buscarEnStock(nombreDelProducto) {
    for (let index = 0; index < listaDeProductos.length; index++) {
        if (nombreDelProducto == listaDeProductos[index].nombre) {
            return console.log(`Tenemos el producto ${listaDeProductos[index].nombre} en stock y cuesta ${listaDeProductos[index].precio}`)
        }
    }
    return console.log(`No tenemos este producto en stock`)
}

//Ejemplo para agregar al carrito :)
agregarAlCarrito("Rascador para gatos", 4);
agregarAlCarrito("Arena para gatos", 5);
agregarAlCarrito("Comida para peces", 2);
agregarAlCarrito("Royal Canin gato castrado", 2);
agregarAlCarrito("Comida para pajaros", 3);

calcularPrecioCarrito();
console.log(carritoDeCompras)

//Ejemplo para eliminar algo de carrito :)

eliminarDelCarrito("Arena para gatos");
console.log(carritoDeCompras)
calcularPrecioCarrito()
buscarEnStock("Rascador para gatos") 


// JS

const mensaje = ["Aparte de ser un Pet Shop colaboramos con distintos refugios de animales para que tengan la oportunidad de conseguir una familia, todo lo que sea comprado del Pet Shop un porcentaje será donado a distintos refugios.",
                "¿Sabias qué los gatos negros son los menos adoptados en los refugios? esto se debe a la creencia popular de que traen mala suerte lo cual es mentira, animate a adoptar un gato negro!",
                "El nombre de Capitán Magoo surgió de nuestro gato Magoo, adoptado en el año 2020, tuvo muchos años esperando ser adoptado solo por el hecho de ser adulto, negro y que le faltara un ojito. Ahora está en una casa con mucho amor.",
                "¿Sabias qué si no puedes ayudar económicamente a un refugio podés ser mamá/papá de tránsito? Se trata de cuidar a un animalito el tiempo que puedas, normalmente los refugios se encargan de todos los gastos.",
                "¿Sabias qué los animales adultos son unos de los menos adoptados de un refugio? Se debe a que las personas prefieren más a los animales pequeños haciendo que estos duren años esperando ser adoptados. "]

const randomIndex = Math.floor(Math.random() * ((mensaje.length) - 0) + 0) ;
const randomMensajes = mensaje[randomIndex]
const elementoMensajes = document.getElementById("mensajes")
elementoMensajes.innerText = randomMensajes

