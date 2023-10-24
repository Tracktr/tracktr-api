import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { QueryParams } from './interfaces/queryparams.interface';
import { PathTypes } from './interfaces/types.enum';

@Injectable()
export class TMDBService {
  async fetch<T>(
    @Param('type') type: PathTypes,
    @Param('queryParams') queryParams: QueryParams = {},
  ): Promise<T> {
    const url = new URL('https://api.themoviedb.org/');
    url.pathname = `3/${type}`;
    url.pathname += queryParams.id ? `/${queryParams.id}` : '';
    url.searchParams.set('language', queryParams.language || 'en-US');

    console.log(url.href);

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

      return response.json() as Promise<T>;
    });
  }
}
