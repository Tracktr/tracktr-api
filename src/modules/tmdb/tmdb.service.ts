import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { MovieQueryParams } from './interfaces/queryparams.interface';
import { MovieSubTypes } from './interfaces/types.enum';

@Injectable()
export class TMDBService {
  async fetchMovies(
    @Param('queryParams')
    queryParams: MovieQueryParams = {
      language: 'en-US',
    },
    @Param('subType') subType?: MovieSubTypes,
  ): Promise<any> {
    const url = new URL('https://api.themoviedb.org/');
    url.pathname = `3/movie/`;
    url.pathname += queryParams.id ? `${queryParams.id}` : '';
    if (subType) url.pathname += `/${subType}`;
    if (queryParams.append_to_response) {
      url.searchParams.set(
        'append_to_response',
        queryParams.append_to_response.join(','),
      );
    }

    url.searchParams.set('language', queryParams.language || 'en-US');

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${
          process.env.TMDB_AUTHORIZATION_TOKEN || process.env.TMDB_API_KEY
        }`,
      },
    };

    return fetch(url.href, options).then((response) => {
      if (!response.ok) {
        throw new HttpException(
          'Error fetching from TMDB',
          HttpStatus.NOT_FOUND,
        );
      }

      return response.json();
    });
  }
}
