import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  gap: 16px; /* Increased gap to prevent overlap */
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid transparent;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &.active {
    color: white;
    background-color: blue;
    border-color: blue;
  }

  &:hover {
    background-color: #f0f0f0; /* Light gray background on hover */
    border-color: #ccc; /* Gray border on hover */
    color: black;
  }
`;
