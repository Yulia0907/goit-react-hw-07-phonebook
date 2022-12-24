import styled from 'styled-components';

export const ListContacts = styled.ul`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: rgb(189, 189, 228);
  border-radius: 5px;
  border: 1px solid #000;
`;
export const ListContactsItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

export const ButtonDelete = styled.button`
border-radius: 5px;
border: 1px solid black;
cursor: pointer;
:hover,
:focus {
  background-color: rgb(133, 133, 238);
}
`;
