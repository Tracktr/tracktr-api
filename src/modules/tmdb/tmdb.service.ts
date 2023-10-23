import {Get, Injectable, Param} from '@nestjs/common';
import {Movie} from "./interfaces/movie.interface";

@Injectable()
export class TMDBService {
  @Get('id/:id')
  getMovieById(@Param('id') id: string): Promise<Movie> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_AUTHORIZATION_TOKEN || process.env.TMDB_API_KEY}`
      }
    };

    return fetch(url, options)
        .then(res => res.json());
  }
}
