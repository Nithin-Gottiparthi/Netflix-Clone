// api.js

// Local development and production API endpoint
export const API_END_POINT = process.env.REACT_APP_API_END_POINT || "http://localhost:8080/api/v1/user";

// Fetch options for API calls
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` // Use environment variable for the token
  }
};

// External API endpoints
export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

// TMDB Image URL
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
