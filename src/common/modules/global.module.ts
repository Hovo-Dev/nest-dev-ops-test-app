import { Global, Logger, Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { BooksModule } from 'modules/books/books.module';

@Global()
@Module({
  imports: [
    DatabaseModule,
    BooksModule,
  ],
  exports: [DatabaseModule],
  providers: [Logger],
})
export class GlobalModule {}
