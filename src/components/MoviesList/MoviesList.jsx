import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movie/${id}`} state={{ from: location }}>
            <h1>{title}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};
