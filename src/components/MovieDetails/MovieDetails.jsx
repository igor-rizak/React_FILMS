import { useLocation, useNavigate, Link } from 'react-router-dom';

export const MovieDetails = movieInfo => {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state.from;

  const {
    title,
    genres = [],
    description,
    poster,
    // releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  const onGoback = () => {
    navigate(subLocation);
  };

  return (
    <>
      <button onClick={onGoback}>GO Back</button>
      <img src={poster} alt="" />
      <h1>{title}</h1>
      <ul>
        {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
      </ul>
      <p>{description}</p>
      <p>
        Vote average: <span>{voteAverage}</span>
      </p>
      <p>
        Vote count: <span>{voteCount}</span>
      </p>
      <h2>Additional Information</h2>
      <Link to="cast" state={{ from: subLocation }}></Link>
      <Link to="reviews" state={{ from: subLocation }}></Link>
    </>
  );
};
