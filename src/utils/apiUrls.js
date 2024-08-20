
const apiKey = "4e8b4e3bf56e1fd59a1905a7236a2d1d";  

export const apiUrls = {
  popular: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  latest: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=`,
 
};

export { apiKey };