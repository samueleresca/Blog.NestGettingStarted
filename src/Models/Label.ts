import { Entity, Column} from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Label extends BaseEntity {

    @Column({ length: 300 })
    Code: string;
    @Column({ length: 3 })
    IsoCode: string;
    @Column()
    Content: string;

}

