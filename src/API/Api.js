import axios from 'axios';

const API_KEY = 'fabdbd455cf8a28d4b9bd01e2909b151';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const filter = `trending/movie/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(`${BASE_URL}${filter}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async (query, page = 1) => {
  const filter = `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;
  try {
    const response = await axios.get(`${BASE_URL}${filter}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  const filter = `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const response = await axios.get(`${BASE_URL}${filter}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  const filter = `movie/${movieId}/?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(`${BASE_URL}${filter}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async movieId => {
  const filter = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(`${BASE_URL}${filter}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
