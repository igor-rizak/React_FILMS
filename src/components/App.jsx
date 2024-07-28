import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home.jsx';
import { Movies } from 'Pages/Movies/Movies.jsx';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
import { MovieDetails } from './MovieDetails/MovieDetails.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route
          path="/movies/:movieId"
          element={} />}
        /> */}
      </Route>
    </Routes>
  );
};
