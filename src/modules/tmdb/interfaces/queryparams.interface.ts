import { APPENDABLE_RESPONSES } from './types.enum';

export interface QueryParams {
  language: string;
  adult?: boolean;
  append_to_response?: APPENDABLE_RESPONSES[];
}
