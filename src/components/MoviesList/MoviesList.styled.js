// MoviesList.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
  
  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  
  &:hover {
    color: #007bff;
  }
`;
