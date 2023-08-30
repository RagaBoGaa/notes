/* eslint-disable react/prop-types */
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { css, styled } from "styled-components";

// Styled components for styling
const StyledLi = styled.li`
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const TextContainer = styled.p`
  min-height: 150px;
  max-height: 150px;
  overflow-y: auto;
  margin-block-end: 1rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: whitesmoke;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #96b6c5;
    border-radius: 5px;
  }
`;

const variations = {
  add: css`
    padding: 1.2rem 1.6rem;
    width: 100%;
  `,
  delete: css`
    margin-inline-start: 0.5rem;
    &:hover {
      transform: scale(1.1);
    }
  `,
  edit: css`
    &:hover {
      transform: scale(1.1);
    }
  `,
};

export const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.2rem 0.75rem;
  color: white;
  background-color: #96b6c5;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  ${(props) => variations[props.variation]};
`;

const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function NoteItem({ note, handleEdit, handleDelete }) {
  return (
    <StyledLi>
      <TextContainer>{note.task}</TextContainer>
      <BtnsContainer>
        <StyledButton
          title="edit note"
          variation="edit"
          onClick={() => handleEdit(note.id)}
        >
          <AiFillEdit />
        </StyledButton>
        <StyledButton
          title="delete note"
          variation="delete"
          onClick={() => handleDelete(note.id)}
        >
          <AiOutlineDelete />
        </StyledButton>
      </BtnsContainer>
    </StyledLi>
  );
}
export default NoteItem;
