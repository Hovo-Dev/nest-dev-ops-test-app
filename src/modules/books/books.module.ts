import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from '@repositories/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '@entities/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService, BookRepository],
  controllers: [BookController],
})
export class BooksModule {}
