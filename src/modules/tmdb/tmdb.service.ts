import { Get, Injectable, Param } from '@nestjs/common';
import { Movie } from '../movie/interfaces/movie.interface';

@Injectable()
export class TMDBService {
  @Get('id/:id')
  getMovieById(@Param('id') id: string): Movie {
    return {
      name: 'MovieID ' + id,
    };
  }
}
