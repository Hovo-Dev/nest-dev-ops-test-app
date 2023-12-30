import { IsNotEmpty, IsString } from 'class-validator';
import { Book } from '@entities/typeorm';
import { ResSuccessDto } from '@responses/resSuccess.dto';
import { ApiProperty } from '@nestjs/swagger';

export class AddBookDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;
}

export class BookDTO {
  constructor(book: Book) {
    this.title = book.title;
  }

  @ApiProperty()
  title: string;
}

export class AddBookOutputDTO extends ResSuccessDto {
  @ApiProperty({type: BookDTO})
  declare data: BookDTO
}
