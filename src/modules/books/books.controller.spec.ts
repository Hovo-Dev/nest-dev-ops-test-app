import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { HttpStatus } from '@nestjs/common';
import { AddBookOutputDTO } from './dto/book.dto';
import { BookService } from './book.service';

describe('BookController', () => {
  let bookController: BookController;

  beforeEach(async () => {
    const book: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();

    bookController = book.get<BookController>(BookController);
  });

  describe('Add Book', () => {
    it('should return New Book Output Dto', () => {
      const myNewBookTitle = 'My New Book';
      expect(bookController.addBook({ title: myNewBookTitle })).toBe({
        statusCode: HttpStatus.OK,
        message: 'Action completed successfully',
        data: { title: myNewBookTitle },
      } as AddBookOutputDTO);
    });
  });
});
