const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      ${note}
      <button class="deleteBtn" onclick="deleteNote(${index})">X</button>
    `;
    notesList.appendChild(noteDiv);
  });
}

function addNote() {
  const text = noteInput.value.trim();
  if (text) {
    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

addNoteBtn.addEventListener("click", addNote);
displayNotes();
