import { MovieSubTypes } from './types.enum';

export interface MovieQueryParams {
  id?: number;
  language: string;
  adult?: boolean;
  append_to_response?: MovieSubTypes[];
}
