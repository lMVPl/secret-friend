const listaAmigos = []; // Array para almacenar los nombres ingresados

function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtiene el campo de texto
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validación: Verifica que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Validación: Verifica que el nombre no contenga números
    if (/\d/.test(nombre)) {
        alert("Los nombres no pueden contener números.");
        return;
    }

    listaAmigos.push(nombre); // Agrega el nombre al array
    actualizarLista(); // Actualiza la lista visual
    input.value = ""; // Limpia el campo de entrada
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtiene la lista de nombres
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    // Recorre el array y crea un elemento <li> por cada nombre
    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre; // Asigna el nombre al elemento <li>
        lista.appendChild(li); // Agrega el <li> a la lista en el HTML
    });
}

function sortearAmigo() {
    // Validación: Verifica que la lista no esté vacía
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Genera un índice aleatorio dentro del array de nombres
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado]; // Obtiene el nombre sorteado

    const resultado = document.getElementById("resultado"); // Obtiene el área de resultado
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`; // Muestra el nombre sorteado
}