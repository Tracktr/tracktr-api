import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './interfaces/movie.interface';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovie(): Movie {
    return this.movieService.getMovie();
  }
}
