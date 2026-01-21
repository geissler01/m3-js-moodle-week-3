// 1. Seleccionamos los elementos del DOM que vamos a usar
const inputNota = document.getElementById("notaInput");     // con getElementById
const btnAgregar = document.getElementById("btnAgregar");
const listaNotas = document.getElementById("listaNotas");

// También usamos querySelector (para cumplir con el criterio de usar al menos dos métodos)
const titulo = document.querySelector("h1");             // ejemplo extra de querySelector

// Confirmamos en consola que encontramos los elementos
console.log("Elementos seleccionados correctamente:", { inputNota, btnAgregar, listaNotas, titulo });

// 2. Arreglo que va a contener las notas (en memoria)
let notas = [];

// 3. Función que guarda el arreglo en localStorage
function guardarNotas() {
    localStorage.setItem("notas", JSON.stringify(notas));
    console.log(`Guardadas ${notas.length} nota(s) en localStorage`);
}

// 4. Función que crea un <li> con su texto y botón de eliminar
function crearNotaElemento(texto, indice) {
    const li = document.createElement("li");

    // Ponemos el texto de la nota
    li.textContent = texto;

    // Creamos botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "delete-btn";

    // Evento click para eliminar ESTA nota
    btnEliminar.onclick = () => {
        // Quitamos la nota del arreglo
        notas.splice(indice, 1);

        // Volvemos a renderizar toda la lista
        renderizarNotas();

        // Guardamos el cambio
        guardarNotas();

        console.log(`Eliminada nota: "${texto}"`);
    };

    // Agregamos el botón al <li>
    li.appendChild(btnEliminar);

    return li;
}

// 5. Función principal que dibuja TODAS las notas en el <ul>
function renderizarNotas() {
    // Limpiamos la lista actual
    listaNotas.innerHTML = "";

    // Recorremos el arreglo y creamos un <li> por cada nota
    notas.forEach((nota, indice) => {
        const elemento = crearNotaElemento(nota, indice);
        listaNotas.appendChild(elemento);
    });
}

// 6. Cargar notas al iniciar la página
function cargarNotas() {
    const notasGuardadas = localStorage.getItem("notas");

    if (notasGuardadas) {
        notas = JSON.parse(notasGuardadas);
        renderizarNotas();
        console.log(`Se cargaron ${notas.length} nota(s) desde localStorage`);
    } else {
        console.log("No había notas guardadas aún");
    }
}

// 7. Evento click del botón Agregar
btnAgregar.addEventListener("click", () => {
    const texto = inputNota.value.trim(); // quitamos espacios sobrantes

    if (texto === "") {
        alert("Por favor escribe algo antes de agregar");
        inputNota.focus();
        return;
    }

    // Agregamos al arreglo
    notas.push(texto);

    // Limpiamos y enfocamos el input
    inputNota.value = "";
    inputNota.focus();

    // Actualizamos la vista
    renderizarNotas();

    // Guardamos en localStorage
    guardarNotas();

    console.log(`Agregada nueva nota: "${texto}"`);
});

// 8. ¡Cargamos las notas cuando se abre la página!
cargarNotas();