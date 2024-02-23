import { BookDto } from './books.dto';

export interface Response {
  success: boolean;
  count?: number;
  message: string;
  payload?: BookDto | BookDto[];
}
