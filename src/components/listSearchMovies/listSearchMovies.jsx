import { useLocation } from 'react-router-dom';
import { List, ListItem, MovieLink } from './ListSearchMovies.styled';

export const ListSearchMovies = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <ListItem key={film.id}>
          <MovieLink to={`/movie/${film.id}`} state={{ from: location }}>
            <h2>{film.title}</h2>
          </MovieLink>
        </ListItem>
      ))}
    </List>
  );
};
