import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'API/Api';
import { URL_POSTER } from 'API/Api';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const searchMovieDetails = async () => {
      try {
        const searchFilmsDetails = await getMovieDetails(id);
        setFilm(searchFilmsDetails);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovieDetails();
  }, [id]);

  if (!film) {
    return <p>Loading...</p>;
  }

  const {
    title = 'No title available',
    genres = [],
    overview = 'No description available',
    poster_path,
    vote_average = 'No rating available',
    vote_count = 'No vote count available',
  } = film;

  return (
    <>
      <ButtonGoBack />
      <h1>{title}</h1>
      <ul>
        <p>GENRES</p>
        {genres.length > 0 ? (
          genres.map(genre => <li key={genre.id}>{genre.name}</li>)
        ) : (
          <li>No genres available</li>
        )}
      </ul>
      {poster_path && <img src={`${URL_POSTER}${poster_path}`} alt="poster" />}
      <p>{overview}</p>
      <p>Vote average: {vote_average}</p>
      <p>Vote count: {vote_count}</p>
      <Link to="cast">CAST</Link>
      {/* <Link to="cast">CAST</Link> */}
      <Outlet />
    </>
  );
};
