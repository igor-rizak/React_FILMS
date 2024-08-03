import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 16px; /* Відстань між посиланнями */
  padding: 16px 0; /* Відступи зверху та знизу */
  border-bottom: 1px solid #ddd; /* Лінія під навігацією */
  background-color: #f9f9f9; /* Фоновий колір */
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover,
  &:focus {
    background-color: #007bff; /* Колір фону при наведенні */
    color: white; /* Колір тексту при наведенні */
  }
`;