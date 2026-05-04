const juego = JSON.parse(localStorage.getItem('juegoSeleccionado'))

document.getElementById('checkout-imagen').src = juego.imagen
document.getElementById('checkout-imagen').alt = juego.nombre
document.getElementById('checkout-nombre').textContent = juego.nombre
document.getElementById('checkout-precio').textContent = '$' + juego.precio

function confirmarCompra() {
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const documento = document.getElementById('documento').value
    const telefono = document.getElementById('telefono').value
    const Mail = document.getElementById('Mail').value
    const provincia = document.getElementById('provincia').value
    const localidad = document.getElementById('localidad').value
    const cantidad = document.getElementById('cantidad').value

    if (!nombre || !apellido || !documento || !telefono || !Mail || !provincia || !localidad) {
        alert('Por favor completá todos los campos')
        return
    }

    const datosCompra = {
        juego: juego,
        cantidad: cantidad,
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        telefono: telefono,
        Mail: Mail,
        provincia: provincia,
        localidad: localidad
    }

    localStorage.setItem('datosCompra', JSON.stringify(datosCompra))
    window.location.href = 'pago.html'
}