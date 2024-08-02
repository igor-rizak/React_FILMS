import { Link } from 'react-router-dom';

export const ListSearchMovies = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movie/${film.id}`}>
            <h2>{film.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
