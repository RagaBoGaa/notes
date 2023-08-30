/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import NoteItem from "./NoteItem";

// Styled components for styling
const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  list-style: none;
`;

function NotesList({ notesList, setNotesList, setNoteInput, setIsEditing }) {
  return (
    <div>
      <StyledUl>
        {notesList?.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            notesList={notesList}
            setIsEditing={setIsEditing}
            setNoteInput={setNoteInput}
            setNotesList={setNotesList}
          />
        ))}
      </StyledUl>
    </div>
  );
}
export default NotesList;
