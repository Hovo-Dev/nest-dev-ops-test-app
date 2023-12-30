import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AddBookDTO, AddBookOutputDTO, BookDTO } from './dto/book.dto';
import { ResSuccessDto } from '@responses/resSuccess.dto';
import { I_ResSuccess } from '@responses/resSuccess.interface';

@Controller('books')
@ApiTags('Books')
export class BookController {
  constructor(private readonly booksService: BookService) {}

  @Post('')
  @ApiOkResponse({type: AddBookOutputDTO})
  async addBook(@Body() addBookDTO: AddBookDTO): Promise<I_ResSuccess<BookDTO>> {
    const newBook = await this.booksService.addBook(addBookDTO);
    return new ResSuccessDto({ data: new BookDTO(newBook) });
  }
}
