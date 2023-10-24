import { Injectable } from '@nestjs/common';
import { TMDBService } from '../tmdb/tmdb.service';
import { Movie } from '../tmdb/interfaces/movie.interface';
import { PathTypes } from '../tmdb/interfaces/types.enum';

@Injectable()
export class MovieService {
  constructor(private readonly tmdbService: TMDBService) {}

  getMovie(id: number): Promise<Movie> {
    return this.tmdbService.fetch<Movie>(PathTypes.Movie, {
      id: id,
      language: 'en-US',
    });
  }
}
