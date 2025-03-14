// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar el input
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const elegido = amigos[Math.floor(Math.random() * amigos.length)];

    mostrarResultado(elegido);
}

// Función para mostrar el nombre sorteado en el HTML
function mostrarResultado(nombre) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar resultados anteriores

    const li = document.createElement("li");
    li.textContent = `🎉 ¡El amigo secreto sorteado es: ${nombre}! 🎉`;
    listaResultado.appendChild(li);
}