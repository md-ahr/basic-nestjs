import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './dto/books.dto';
import { Response } from './dto/response.dto';
import { BooksPipe } from './books.pipe';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get('/')
  findBooks(): Response {
    return this.bookService.findBooks();
  }

  @Get('/:id')
  findBook(@Param('id', ParseIntPipe) id: number): Response {
    return this.bookService.findBook(id);
  }

  @Post('/')
  createBook(@Body(new BooksPipe()) bookDto: Book): Response {
    return this.bookService.createBook(bookDto);
  }

  @Patch('/:id')
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() bookDto: Book,
  ): Response {
    return this.bookService.updateBook(id, bookDto);
  }

  @Delete('/:id')
  deleteBook(@Param('id', ParseIntPipe) id: number): Response {
    return this.bookService.deleteBook(id);
  }
}
