import { Controller, Get } from '@nestjs/common';
import { Movie } from './interface/movie.interface';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovie(): Movie {
    return this.movieService.getMovie();
  }
}
