const mensaje = ["Aparte de ser un Pet Shop colaboramos con distintos refugios de animales para que tengan la oportunidad de conseguir una familia, todo lo que sea comprado del Pet Shop un porcentaje será donado a distintos refugios.",
                "¿Sabias qué los gatos negros son los menos adoptados en los refugios? esto se debe a la creencia popular de que traen mala suerte lo cual es mentira, animate a adoptar un gato negro!",
                "El nombre de Capitán Magoo surgió de nuestro gato Magoo, adoptado en el año 2020, tuvo muchos años esperando ser adoptado solo por el hecho de ser adulto, negro y que le faltara un ojito. Ahora está en una casa con mucho amor.",
                "¿Sabias qué si no puedes ayudar económicamente a un refugio podés ser mamá/papá de tránsito? Se trata de cuidar a un animalito el tiempo que puedas, normalmente los refugios se encargan de todos los gastos.",
                "¿Sabias qué los animales adultos son unos de los menos adoptados de un refugio? Se debe a que las personas prefieren más a los animales pequeños haciendo que estos duren años esperando ser adoptados. "]

const randomIndex = Math.floor(Math.random() * ((mensaje.length) - 0) + 0) ;
const randomMensajes = mensaje[randomIndex]
const elementoMensajes = document.getElementById("mensajes")
elementoMensajes.innerText = randomMensajes

