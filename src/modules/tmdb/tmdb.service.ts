import { Get, Injectable, Param } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { fetchFromTMDB } from '../../lib/fetch/tmdbFetch';

@Injectable()
export class TMDBService {
  @Get('id/:id')
  async getMovieById(@Param('id') id: string): Promise<Movie> {
    return await fetchFromTMDB<Movie>('movie', `${id}?language=en-US`);
  }
}
