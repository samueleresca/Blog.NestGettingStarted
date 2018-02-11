import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column('datetime2')
    DateAdded: Date;
    @Column('datetime2')
    DateModified: Date;
    @Column()
    Inactive: boolean;
}