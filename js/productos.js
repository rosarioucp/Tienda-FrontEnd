const juegos = [
    {
        id: 1,
        nombre: "FIFA 23",
        precio: 13.99,
        descripcion: "Simulador de futbol",
        categoria: "Deporte",
        imagen: "https://placehold.co/200x150"
    },
    {
        id: 2,
        nombre: "Call of Duty: Modern Warfare III ",
        precio: 59.99,
        descripcion: "Guerra moderna/Disparos",
        categoria: "Acción",
        imagen: "https://placehold.co/200x150"
    },
    {
        id: 3,
        nombre: "Minecraft Legends",
        precio: 23.99,
        descripcion: "Construcción, exploración y supervivencia",
        categoria: "Aventura",
        imagen: "https://placehold.co/200x150"
    },
    {
        id: 4,
        nombre: "R.E.P.O",
        precio: 4.49,
        descripcion: "Terror, Supervivencia, Cooperativo.",
        categoria: "Terror",
        imagen: "https://placehold.co/200x150"
    },
    {
        id: 5,
        nombre: "Counter Strike 2",
        precio: 14.59,
        descripcion: "Disparos, multijugador",
        categoria: "Acción",
        imagen: "https://placehold.co/200x150"
    },
    {
        id: 6,
        nombre: "Grand Theft Auto V",
        precio: 44.99,
        descripcion: "Mundo abierto, acción",
        categoria: "Acción, aventura, carrera",
        imagen: "https://placehold.co/200x150"
    }
]
function mostrarJuegos(lista) {
    const contenedor = document.querySelector('.contenedor-productos')
    contenedor.innerHTML = ''

    lista.forEach(function(juego) {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${juego.imagen}" alt="${juego.nombre}">
                <h2>${juego.nombre}</h2>
                <p>${juego.descripcion}</p>
                <p>$${juego.precio}</p>
                <button onclick="comprar(${juego.id})">Comprar</button>
            </div>
        `
    })
}

mostrarJuegos(juegos)

function comprar(id) {
    const juego = juegos.find(function(j) {
        return j.id === id
    })
     localStorage.setItem('juegoSeleccionado', JSON.stringify(juego))
     window.location.href = 'detalle.html'
}
