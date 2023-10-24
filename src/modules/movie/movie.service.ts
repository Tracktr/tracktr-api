import { Injectable } from '@nestjs/common';
import { TMDBService } from '../tmdb/tmdb.service';
import { Movie } from '../tmdb/interfaces/movie.interface';

@Injectable()
export class MovieService {
  constructor(private readonly tmdbService: TMDBService) {}

  getMovie(id: string): Promise<Movie> {
    return this.tmdbService.getMovieById(id);
  }
}
