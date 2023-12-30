import { Book } from '@entities/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRepository } from '@repositories/typeorm';

const allEntities = [
  Book,
];

const allRepositories = [
  BookRepository,
];

export const TypeORMConfiguration = TypeOrmModule.forFeature([...allEntities, ...allRepositories]);