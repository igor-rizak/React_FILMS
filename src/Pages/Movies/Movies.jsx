import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchMovies } from 'API/Api';
import { ListSearchMovies } from 'components/listSearchMovies/listSearchMovies';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const searchMovie = async () => {
    if (!query) return;
    try {
      const searchMovies = await getSearchMovies(query);
      setMovie(searchMovies);

      setQuery('');
    } catch (error) {
      console.error('Error fetching trending films:', error);
    }
  };

  // navigate({
  //   ...location,
  //   search: `query=${value}`,
  // });
  const changeInput = e => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <>
      <ButtonGoBack />
      <input
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={changeInput}
      />
      <button type="button" onClick={searchMovie}>
        Search
      </button>
      {movie.length > 0 && <ListSearchMovies films={movie} />}
    </>
  );
};
