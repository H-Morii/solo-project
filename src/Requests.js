const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ1NzUyMzNhYWY2Y2E4NjQ1NTA1NjBjZTM2YzNhZCIsInN1YiI6IjY1Y2Y1MDBhNzA2ZTU2MDE3OTM5N2UyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UonHOsPHG7TWvTjsXeNPwm6yIPhK7Ek454j3bkI_Dr0";
const apiKey = "ee4575233aaf6ca864550560ce36c3ad";

//api_key=

const request = {
  requestPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  requestTopRated: `'https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
  requestUpcoming: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`,
};
export default request;
