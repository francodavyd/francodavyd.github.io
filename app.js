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