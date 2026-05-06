const juego = JSON.parse(localStorage.getItem('juegoSeleccionado'))

document.getElementById('juego-imagen').src = juego.imagen
document.getElementById('juego-imagen').alt = juego.nombre
document.getElementById('juego-nombre').textContent = juego.nombre
document.getElementById('juego-descripcion').textContent = juego.descripcion
document.getElementById('juego-descripcionLarga').textContent = juego.descripcionLarga
document.getElementById('juego-precio').textContent = '$' + juego.precio

function irACheckout() {
    window.location.href = 'checkout.html'
}