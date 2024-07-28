import { useEffect, useState } from 'react';
import { getTrending } from 'API/Api';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const trendingFilms = await getTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.error('Error fetching trending films:', error);
      }
    };

    fetchTrendingFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/Movies/${film.id}`}>
              <h2>{film.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
