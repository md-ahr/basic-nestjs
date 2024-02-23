import { Optional } from '@nestjs/common';
import { IsString } from 'class-validator';

export class BookDto {
  @Optional()
  id: string;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  publisher: string;
}
