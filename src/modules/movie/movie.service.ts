import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class MovieService {
  getMovie(): Movie {
    return {
      name: 'Interstellar',
    };
  }
}
