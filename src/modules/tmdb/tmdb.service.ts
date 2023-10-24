import {
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
} from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class TMDBService {
  @Get('id/:id')
  async getMovieById(@Param('id') id: string): Promise<Movie> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${
          process.env.TMDB_AUTHORIZATION_TOKEN || process.env.TMDB_API_KEY
        }`,
      },
    };

    return fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new HttpException(
          'Error fetching from TMDB',
          HttpStatus.NOT_FOUND,
        );
      }

      return response.json() as Promise<Movie>;
    });
  }
}
