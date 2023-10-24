import { Injectable } from '@nestjs/common';
import { TMDBService } from '../tmdb/tmdb.service';
import { Movie } from '../tmdb/interfaces/movie.interface';
import { APPENDABLE_RESPONSES, TMDB_URLS } from '../tmdb/interfaces/types.enum';

@Injectable()
export class MovieService {
  constructor(private readonly tmdbService: TMDBService) {}

  getMovie(id: number): Promise<Movie> {
    return this.tmdbService.get<Movie>(id, TMDB_URLS.MOVIE_WITH_ID, {
      adult: false,
      language: 'en-US',
      append_to_response: [
        APPENDABLE_RESPONSES.CREDITS,
        APPENDABLE_RESPONSES.IMAGES,
        APPENDABLE_RESPONSES.VIDEOS,
      ],
    });
  }
}
