/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { StyledButton } from "./NoteItem";

// Styled components for styling
const StyledForm = styled.div`
  padding-block: 0rem;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  inset: 0;
  z-index: 50;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 0.5rem;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.2);
`;

function AddNotes({
  notesList,
  setNotesList,
  isEditing,
  setIsEditing,
  noteInput,
  setNoteInput,
}) {
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

  return (
    <StyledForm>
      <StyledTextArea
        rows="5"
        placeholder="Write your notes..."
        value={noteInput}
        onChange={(e) => {
          setNoteInput(e.target.value);
        }}
      ></StyledTextArea>
      <StyledButton variation="add" onClick={handleSubmit}>
        {isEditing ? "save" : "Add"}
      </StyledButton>
    </StyledForm>
  );
}
export default AddNotes;
