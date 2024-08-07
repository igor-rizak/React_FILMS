import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'API/Api';
import { ListSearchMovies } from 'components/listSearchMovies/listSearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const [inputQuery, setInputQuery] = useState(query);

  useEffect(() => {
    if (query) {
      searchMovie(query);
    }
  }, [query]);

  const searchMovie = async query => {
    if (!query) return;
    try {
      const searchMovies = await getSearchMovies(query);
      setMovies(searchMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearchClick = () => {
    setSearchParams({ q: inputQuery });
    setInputQuery('');
  };

  const changeInput = e => {
    setInputQuery(e.target.value);
  };

  return (
    <>
      <input
        value={inputQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={changeInput}
      />
      <button type="button" onClick={handleSearchClick}>
        Search
      </button>
      {movies.length > 0 && <ListSearchMovies films={movies} />}
    </>
  );
};

export default Movies;
