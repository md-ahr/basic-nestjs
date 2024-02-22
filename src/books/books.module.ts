import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksMiddleware } from './books.middleware';

@Module({
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BooksMiddleware).forRoutes('/books');
  }
}
