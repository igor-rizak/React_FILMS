import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Home } from '../Pages/Home/Home.jsx';
// import { Movies } from 'Pages/Movies/Movies.jsx';
// import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
// import { MovieDetails } from './MovieDetails/MovieDetails.jsx';
// import { Cast } from './Cast/Cast.jsx';
// import { Reviews } from './Reviews/Reviews.jsx';

const Home = lazy(() => import('../Pages/Home/Home.jsx'));
const Movies = lazy(() => import('Pages/Movies/Movies.jsx'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <Suspense fallback={<div>LOADING....</div>}>
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
    </Suspense>
  );
};
