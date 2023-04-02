import React, { useState } from "react";

// THIRD PARTY
import { Listbox } from "@headlessui/react";
import styled from "styled-components";

// ICONS
import { AiFillCaretRight } from "react-icons/ai";

// STYLES
import "./Dropdown.scss";

interface IDropdown {
  people: {
    id: number;
    name?: React.ReactNode;
    unavailable: boolean;
  }[];
}

const Dropdown: React.FC<IDropdown> = (props) => {
  const { people } = props;
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Container>
        <Listbox.Button className="dropdown-button">
          {selectedPerson.name}
          <AiFillCaretRight className="dropdown-icon" size={18} color="blue" />
        </Listbox.Button>
        <Listbox.Options className="dropdown-items">
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              className="dropdown-item"
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Container>
    </Listbox>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  gap: 10px;
`;

export default Dropdown;
