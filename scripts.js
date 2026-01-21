// Task 2
// seleccionando los elementos
const inputNotes = document.getElementById('notes');
const buttonAdd = document.getElementById('add');
const notesList = document.querySelector('ul');
// desplegando en consola
console.log('Elementos seleccionados: ', {inputNotes, buttonAdd, notesList});

// Task 3
// arreglo para notas
let notes = [];
// funcion para agregar notas
function addNotes() {
    localStorage.setItem('notas', JSON.stringify(notes));
    console.log(`Guardadas ${notas.lenght} nota(s) en localStorage`)
}
//
function createNoteElement(text, indice) {
    const li = document.createElement('li');
    
    // texto
    li.textContent = text;
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Eliminar';
    btnRemove.className = 'btn btn-danger';
    
    // evento click
    btnRemove.onclick = () => {
        // quitamos la nota del arreglo
        notes.splice(indice, 1);
        // renderizando la lista
        renderNotes();
        //
        addNotes();
        alert(`Nota eliminada`)
    }
    // agreamos nota
    li.appendChild(btnRemove);
    return li;
}

// funcion principal para meter notas
function renderNotes() {
    notesList.innerHTML = "";

    // recorrenos el arreglo y creamos un li por cada nota
    notes.forEach((note, indice) => {
        const elemento = createNoteElement(note, indice);
        notesList.appendChild(elemento);
    })
}

// cargar notas al iniciar la pagina
function loadNotes() {
    const notesSaved = localStorage.getItem('notas')

    if (notesSaved) {
        notes = JSON.parse(notesSaved);
        renderNotes();
        console.log(`Se cargaron ${notes.lenght} notas(s) desde localStorage`)
    } else {
        console.log('No hay natas guardadas');
    }
}

// evento click boton agrear
buttonAdd.addEventListener("click", () => {
    const texto = inputNotes.value.trim() // quitamos espacios en blanco
    
    if (texto === '') {
        alert('Por favor escribe una nota antes de guardar')
        inputNotes.focus();
        return
    }

    // agregamos al arreglo
    notes.push(texto);

    // limpiamos y enficamos el input
    inputNotes.valie = '';
    inputNotes.focus();

    // actualizamos la vista;
    renderNotes();

    // guardamos en localStorage
    addNotes();

    console.log(`Agregada nueva nota: "${texto}"`);
})

// cargar noras al abrir la pagina
loadNotes();

