import { QueryParams } from '../interfaces/queryparams.interface';
import { TMDB_URLS } from '../interfaces/types.enum';

export function URLParser(
  id: number,
  urlString: TMDB_URLS,
  queryParams: QueryParams,
): URL {
  const url = new URL(TMDB_URLS.BASE);
  url.pathname = urlString.replace(':id', id.toString());

  for (const [key, value] of Object.entries(queryParams)) {
    if (queryParams.append_to_response) {
      url.searchParams.set(
        'append_to_response',
        queryParams.append_to_response.join(','),
      );
    }
    url.searchParams.set(key, value);
  }

  console.log(url);
  return url;
}
