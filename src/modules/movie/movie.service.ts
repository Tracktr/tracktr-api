import { Injectable } from '@nestjs/common';
import { Movie } from './interface/movie.interface';

@Injectable()
export class MovieService {
  getMovie(): Movie {
    return {
      name: 'Interstellar',
    };
  }
}
