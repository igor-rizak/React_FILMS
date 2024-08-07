import { useEffect, useState } from 'react';
import { getTrending } from 'API/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
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
      <MoviesList films={films} />
    </>
  );
};

export default Home;
