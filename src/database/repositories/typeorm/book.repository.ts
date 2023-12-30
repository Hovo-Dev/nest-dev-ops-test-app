import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'common/repositories';
import { Book } from '@entities/typeorm/book.entity';

@Injectable()
export class BookRepository extends BaseRepository<Book> {
  @InjectRepository(Book)
  bookRepository: Repository<Book>;

  constructor(public dataSource: DataSource) {
    super(Book, dataSource.createEntityManager());
  }

  findOneByTitle(title: string): Promise<Book> {
    return this.findOne({ where: { title } });
  }
}
