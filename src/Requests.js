const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ1NzUyMzNhYWY2Y2E4NjQ1NTA1NjBjZTM2YzNhZCIsInN1YiI6IjY1Y2Y1MDBhNzA2ZTU2MDE3OTM5N2UyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UonHOsPHG7TWvTjsXeNPwm6yIPhK7Ek454j3bkI_Dr0";
const apiKey = "ee4575233aaf6ca864550560ce36c3ad";

//api_key=

const request = {
  requestPopular: `https://api.themoviedb.org/3/discover/movie?$&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  requestTopRated: `'https://api.themoviedb.org/3/discover/movie?${apiKey}api_key=&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
};
export default request;