import { Book } from './books.dto';

export interface Response {
  success: boolean;
  count?: number;
  message: string;
  payload?: Book | Book[];
}
