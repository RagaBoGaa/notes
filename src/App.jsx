import { useEffect, useState } from "react";
import { styled } from "styled-components";

// Components
import AddNotes from "./components/AddNotes";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

// Styled components for styling
const StyledContainer = styled.div`
  background-color: #f8f8ff;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
`;

function App() {
  // State variables for managing notes and UI
  const [noteInput, setNoteInput] = useState("");
  const [notesList, setNotesList] = useState(() => {
    // Load notes from local storage if available, else start with an empty array
    const storedNotes = localStorage.getItem("notesList");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [isEditing, setIsEditing] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [query, setQuery] = useState("");

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filt = notesList.filter((note) =>
        note.task.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNotes(filt);
    } else {
      setFilteredNotes([]);
    }
  };

  // Handle adding note
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteInput.trim()) return;

    if (isEditing) {
      // Update the existing note when editing
      const updatedNotes = notesList.map((note) =>
        note.id === isEditing ? { ...note, task: noteInput } : note
      );
      setNotesList(updatedNotes);
      setIsEditing(null);
    } else {
      // Add a new note when not editing
      const newNote = {
        id: new Date().getTime().toString(),
        task: noteInput,
      };
      setNotesList((currentNotes) => [...currentNotes, newNote]);
    }
    setNoteInput("");
  };

  // Handle note deletion
  const handleDelete = (id) => {
    const updatedNotes = notesList.filter((note) => note.id !== id);
    setNotesList(updatedNotes);
  };

  // Handle note editing
  const handleEdit = (id) => {
    const foundNote = notesList.find((note) => note.id === id);
    setNoteInput(foundNote.task);
    setIsEditing(id);
  };

  // Update local storage whenever notesList changes
  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
  }, [notesList]);

  return (
    <StyledContainer>
      <Container>
        <AddNotes
          handleSubmit={handleSubmit}
          noteInput={noteInput}
          setNoteInput={setNoteInput}
          isEditing={isEditing}
        />
        <Search
          query={query}
          handleSearch={handleSearch}
          notesList={notesList}
        />
        <NotesList
          notesList={filteredNotes.length > 0 ? filteredNotes : notesList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          query={query}
        />
      </Container>
    </StyledContainer>
  );
}

export default App;
