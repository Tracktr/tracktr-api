import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';

@Injectable()
export class TMDBService {
  async fetch<T>(
    @Param('type') type: string,
    @Param('id') id: number,
    @Param('language') language: string = 'en-US',
  ): Promise<T> {
    const url = new URL('https://api.themoviedb.org/');
    url.pathname = `3/${type}/${id}`;
    url.searchParams.set('language', language);

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
