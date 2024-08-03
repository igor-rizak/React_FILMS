import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 16px;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  
  &:hover,
  &:focus {
    text-decoration: underline;
    color: blue;
  }

  h2 {
    margin: 0;
  }
`;
