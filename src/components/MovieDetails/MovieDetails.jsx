import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'API/Api';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { MovieDetailsPage } from 'components/MovieDetailsPAGE/MovieDetailsPage';
import { Nav, NavLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location?.state?.from;

  useEffect(() => {
    const searchMovieDetails = async () => {
      try {
        const searchFilmsDetails = await getMovieDetails(id);
        setFilm(searchFilmsDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    searchMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!film) {
    return <p>Movie not found.</p>;
  }

  const onGoBack = () => navigate(location?.state?.from ?? '/');
  return (
    <>
      <ButtonGoBack onClick={onGoBack} />
      <MovieDetailsPage film={film} />
      <Nav>
        <NavLink to="cast" state={{ from: subLocation }}>
          CAST
        </NavLink>
        <NavLink to="reviews" state={{ from: subLocation }}>
          Reviews
        </NavLink>
      </Nav>
      <Outlet />
    </>
  );
};
