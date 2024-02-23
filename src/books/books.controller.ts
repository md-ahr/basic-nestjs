import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/books.dto';
import { Response } from './dto/response.dto';
import { AuthGuard } from '@nestjs/passport';
// import { BooksPipe } from './books.pipe';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get('/')
  @UseGuards(AuthGuard('local'))
  findBooks(): Response {
    return this.bookService.findBooks();
  }

  @Get('/:id')
  findBook(@Param('id', ParseIntPipe) id: number): Response {
    return this.bookService.findBook(id);
  }

  @Post('/')
  createBook(@Body(new ValidationPipe()) bookDto: BookDto): Response {
    return this.bookService.createBook(bookDto);
  }

  @Patch('/:id')
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) bookDto: BookDto,
  ): Response {
    return this.bookService.updateBook(id, bookDto);
  }

  @Delete('/:id')
  deleteBook(@Param('id', ParseIntPipe) id: number): Response {
    return this.bookService.deleteBook(id);
  }
}
