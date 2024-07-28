import { useState } from 'react';
import { getSearchMovies } from 'API/Api';
import { ListSearchMovies } from 'components/listSearchMovies/listSearchMovies';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovie = async () => {
    try {
      const searchMovies = await getSearchMovies(query);
      setMovie(searchMovies);

      setQuery('');
    } catch (error) {
      console.error('Error fetching trending films:', error);
    }
  };

  const changeInput = e => {
    setQuery(e.target.value);
  };

  return (
    <>
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
