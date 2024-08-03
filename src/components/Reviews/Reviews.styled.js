import styled from "styled-components";
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 16px;
  &:last-child {
    border-bottom: none;
  }
`;

export const Author = styled.h3`
  margin: 0 0 8px;
  font-size: 1.2em;
  color: #333;
`;

export const Content = styled.p`
  margin: 0;
  font-size: 1em;
  color: #555;
`;

export const StyledDateText = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.5;
`;