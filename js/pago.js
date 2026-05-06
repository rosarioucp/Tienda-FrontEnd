const datosCompra = JSON.parse(localStorage.getItem('datosCompra'))

if (datosCompra) {
    const resumenContainer = document.getElementById('resumen-compra')
    const totalContainer = document.getElementById('total-compra')

    resumenContainer.innerHTML = `
        <img src="${datosCompra.juego.imagen}" alt="${datosCompra.juego.nombre}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
        <h3>${datosCompra.juego.nombre}</h3>
        <p>Cantidad: ${datosCompra.cantidad}</p>
        <p>Comprador: ${datosCompra.nombre} ${datosCompra.apellido}</p>
    `

    const total = (datosCompra.juego.precio * datosCompra.cantidad).toFixed(2)
    totalContainer.textContent = `Total: $${total}`
}

function irAPagar() {
    alert('¡Compra realizada con éxito! Gracias por tu compra.')
    localStorage.clear()
    window.location.href = 'index.html'
}

function procesarPago() {
    localStorage.clear();
    window.location.href = "confirmacioncompra.html";
}