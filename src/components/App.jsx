import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home.jsx';
import { Movies } from 'Pages/Movies/Movies.jsx';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
import { MovieDetails } from './MovieDetails/MovieDetails.jsx';
import { Cast } from './Cast/Cast.jsx';
import { Reviews } from './Reviews/Reviews.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:id/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />;
          <Route path="reviews" element={<Reviews />} />;
        </Route>
      </Route>
    </Routes>
  );
};
