import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { TMDBService } from '../tmdb/tmdb.service';

@Injectable()
export class MovieService {
  constructor(private readonly tmdbService: TMDBService) {}

  getMovie(): Movie {
    return this.tmdbService.getMovieById('123');
  }
}
