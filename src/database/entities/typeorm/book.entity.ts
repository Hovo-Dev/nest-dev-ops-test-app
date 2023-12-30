import { Column, Entity} from 'typeorm';
import { RegularEntity } from 'common/entities/regular.entity';

@Entity({ name: 'books' })
export class Book extends RegularEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',})
  releaseData: Date
}
