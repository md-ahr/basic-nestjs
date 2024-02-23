import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BookDto } from './dto/books.dto';

@Injectable()
export class BooksPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log({ metadata });

    // if (value.title.length > 5) {
    //   return value;
    // }
    // throw new BadRequestException('Validation failed');

    const bookClass = plainToInstance(BookDto, value);
    const errors = await validate(bookClass);
    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation failed' + JSON.stringify(errors),
      );
    }
    return value;
  }
}
