import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from '../tmdb/interfaces/movie.interface';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':id')
  getMovie(@Param('id') id: number): Promise<Movie> {
    return this.movieService.getMovie(id);
  }
}
