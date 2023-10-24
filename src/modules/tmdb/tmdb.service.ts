import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { QueryParams } from './interfaces/queryparams.interface';
import { URLParser } from './parsers/URLParser';
import { TMDB_URLS } from './interfaces/types.enum';

@Injectable()
export class TMDBService {
  async get<T>(
    @Param('id') id: number,
    @Param('urlString') urlString: TMDB_URLS,
    @Param('queryParams')
    queryParams: QueryParams = {
      language: 'en-US',
    },
  ): Promise<T> {
    const url = URLParser(id, urlString, queryParams);

    return await this.getData<T>(url);
  }

  async getData<T>(url: URL): Promise<T> {
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
