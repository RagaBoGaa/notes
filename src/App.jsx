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
  const [notesList, setNotesList] = useState(() => {
    // Load notes from local storage if available, else start with an empty array
    const storedNotes = localStorage.getItem("notesList");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [noteInput, setNoteInput] = useState("");

  const [isEditing, setIsEditing] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState([]);
  // Update local storage whenever notesList changes
  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
  }, [notesList]);

  return (
    <StyledContainer>
      <Container>
        <AddNotes
          notesList={notesList}
          setNotesList={setNotesList}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          noteInput={noteInput}
          setNoteInput={setNoteInput}
        />
        <Search notesList={notesList} setFilteredNotes={setFilteredNotes} />
        <NotesList
          notesList={filteredNotes.length > 0 ? filteredNotes : notesList}
          setNotesList={setNotesList}
          setNoteInput={setNoteInput}
          setIsEditing={setIsEditing}
        />
      </Container>
    </StyledContainer>
  );
}

export default App;
