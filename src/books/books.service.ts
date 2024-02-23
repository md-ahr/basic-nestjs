import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { BookDto } from './dto/books.dto';
import { Response } from './dto/response.dto';

@Injectable()
export class BooksService {
  public books: BookDto[] = [];
  public book: any;

  findBooks(): Response {
    return {
      success: true,
      count: this.books.length,
      message: 'Book list got successfully',
      payload: this.books,
    };
  }

  findBook(id: number): Response {
    return {
      success: true,
      message: 'Book got successfully',
      payload: this.books.find((book) => +book.id === id),
    };
  }

  createBook(bookDto: BookDto): Response {
    bookDto.id = uuidv4();
    this.books.push(bookDto);
    return {
      success: true,
      message: 'Book created successfully',
      payload: bookDto,
    };
  }

  updateBook(id: number, bookDto: BookDto): Response {
    const index = this.books.findIndex((book) => +book.id === id);
    this.books[index].id = id.toString();
    this.books[index] = bookDto;
    return {
      success: true,
      message: 'Book updated successfully',
      payload: this.books[index],
    };
  }

  deleteBook(id: number): Response {
    this.books.filter((book) => +book.id !== id);
    return {
      success: true,
      message: 'Book deleted successfully',
      payload: this.books[id],
    };
  }
}
