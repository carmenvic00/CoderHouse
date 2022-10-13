function respuestaClick(){
    Swal.fire({
        title: 'Gracias!',
        text: 'Hemos recibido su formulario, dentro de poco lo estaremos contactando',
        icon: 'success',
        confirmButtonText: 'Cerrar'
    })
  }

let boton = document.getElementById("boton")


boton.onclick = respuestaClick