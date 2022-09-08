let palabra = prompt ("Ingrese una palabra");
let n = palabra.length;
let resultado = "";
for (let i = 0; i<n; i++) {
    resultado = resultado + "!"; 
} 
alert (`${resultado}`)