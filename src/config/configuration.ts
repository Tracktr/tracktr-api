export default () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10) || 3000,
  TMDB_AUTHORIZATION_TOKEN: process.env.TMDB_AUTHORIZATION_TOKEN,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
});
