function sendMessage() {
    // Número de teléfono de destino (incluye el código del país, sin el +)
    var telefono = 5492615722699; // Utilizamos el id recibido como número de teléfono
    
    // Construir el enlace de WhatsApp
    var url = `https://wa.me/${telefono}?`;
    
    // Abrir el enlace en una nueva ventana/pestaña
    window.open(url, '_blank');
}



function sendMessageWithText() {
    // Obtener los valores de los inputs
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var mensaje = document.getElementById('mensaje').value;

    // Crear el mensaje
    var mensajeCompleto = 'Nombre: ' + nombre + '%0A' +
                          'Apellido: ' + apellido + '%0A' +
                          'Consulta: ' + mensaje;

    // Número de WhatsApp al que se enviará el mensaje (incluye el código de país)
    var numeroWhatsApp = 5492615722699;  // Reemplaza con tu número de WhatsApp

    // Crear la URL de WhatsApp
    var urlWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + mensajeCompleto;

    // Abrir la URL de WhatsApp
    window.open(urlWhatsApp, '_blank');
}

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        span.style.fontSize = "30px";
        span.style.color = "#9a59e6";
        span.style.cursor = "pointer";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
function closeMenu(){
     
    var x = document.getElementById("nav");
    if(x.className==="responsive"){
        x.className = "";
    }
   
    
    //removemos el boton eliminar
    btnEliminar = document.querySelector("#nav span");
    btnEliminar.remove();
}

    
