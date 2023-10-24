import { Injectable } from '@nestjs/common';
import { TMDBService } from '../tmdb/tmdb.service';
import { Movie } from '../tmdb/interfaces/movie.interface';
import { MovieSubTypes } from '../tmdb/interfaces/types.enum';

@Injectable()
export class MovieService {
  constructor(private readonly tmdbService: TMDBService) {}

  getMovie(id: number): Promise<Movie> {
    return this.tmdbService.fetchMovies({
      id: id,
      language: 'en-US',
      adult: false,
      append_to_response: [
        MovieSubTypes.Credits,
        MovieSubTypes.ReleaseDates,
        MovieSubTypes.Translations,
        MovieSubTypes.Videos,
      ],
    });
  }
}
