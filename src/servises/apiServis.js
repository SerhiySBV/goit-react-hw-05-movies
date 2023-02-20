import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '76cbb606f190fc237086ec33f1fd98a3';
const fetchDayTrend = async options => {
  const resp = await axios.get(`trending/movie/day?api_key=${apiKey}`, options);
  return resp.data;
};

const fetchMovieByQuery = async (query, options) => {
  const resp = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    options
  );
  return resp.data;
};

const fetchMovieDetsById = async (id, detailEndpoint = '', options) => {
  const resp = await axios.get(
    `movie/${id}${detailEndpoint}?api_key=${apiKey}&language=en-US`,
    options
  );
  return resp.data;
};

const fetchCastInfo = async movieId => {
  const resp = await axios.get(
    `movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  return resp.data.cast;
};

const fetchReviewsInfo = async movieId => {
  const resp = await axios.get(
    `movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
  );
  return resp.data.results;
};

export {
  fetchDayTrend,
  fetchMovieByQuery,
  fetchMovieDetsById,
  fetchCastInfo,
  fetchReviewsInfo,
};
