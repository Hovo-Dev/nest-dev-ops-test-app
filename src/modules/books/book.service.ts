import {
  Injectable,
} from '@nestjs/common';
import { AddBookDTO } from './dto/book.dto';
import { BookRepository } from '@repositories/typeorm';

@Injectable()
export class BookService {
  constructor(private readonly booksRepository: BookRepository) {}

  async addBook(addBookDTO: AddBookDTO) {
    return this.booksRepository.save({
      title: addBookDTO.title,
    });
  }
}
