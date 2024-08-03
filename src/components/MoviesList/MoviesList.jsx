import React from 'react';
import { List, ListItem, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title }) => (
        <ListItem key={id}>
          <StyledLink to={`movie/${id}`}>{title}</StyledLink>
        </ListItem>
      ))}
    </List>
  );
};
