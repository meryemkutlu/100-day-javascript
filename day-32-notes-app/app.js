const noteBtn = document.getElementById("add-btn"),
    noteTitle = document.getElementById("note-title"),
    noteText = document.getElementById("note-text"),
    clear = document.querySelector(".clear");

function getNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
}