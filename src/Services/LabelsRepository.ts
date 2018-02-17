import {Component} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ILabelRepository} from './ILabelRepository';
import {Repository} from 'typeorm';
import {Label} from '../Models/Label';


@Component()
export class LabelsRepository implements ILabelRepository {

    private readonly repository: Repository<Label>;

    constructor(@InjectRepository(Label)
                    repository: Repository<Label>) {
        this.repository = repository;
    }

    async FindAll(): Promise<Label[]> {
        return await this.repository.find();
    }

    async Find(code: string): Promise<Label> {
        return await this.repository.findOne({Code: code});
    }

    async Where(label: Label): Promise<Label> {
        return await this.repository.findOne(label);
    }

    async Insert(label: Label): Promise<Label> {
        await this.repository.save(label);
        return label;
    }

    async Update(id: number, label: Label): Promise<Label> {

        try {
            await this.repository.updateById(id, label);
            return label;
        } catch (e) {

        }
    }

    async Delete(id: number): Promise<Label> {
        try {
            const toDelete = this.repository.findOneById(id);
            await this.repository.deleteById(id);

            return toDelete;
        } catch (e) {

        }
    }


}
