/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "styled-components";

// Styled components for styling
const StyledSearch = styled.input`
  margin-block: 2rem;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.2);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Span = styled.span`
  font-size: 12px;
`;

function Search({ notesList, setFilteredNotes }) {
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

  return (
    <Row>
      <StyledSearch
        type="search"
        placeholder="Search for a note!"
        value={query}
        onChange={handleSearch}
      />
      <Span>
        {notesList.length < 1
          ? "Please Add some notes!📝"
          : notesList.length === 1
          ? `You currently have ${notesList.length} note 💭`
          : `You currently have ${notesList.length} notes 💬`}
      </Span>
    </Row>
  );
}
export default Search;
