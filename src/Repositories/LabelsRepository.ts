import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILabelRepository } from './ILabelRepository';
import { Repository } from 'typeorm';
import { Label } from '../Models/Label';


@Component()
export class LabelsRepository implements ILabelRepository {

    private readonly labelRepository: Repository<Label>;

    constructor(
        @InjectRepository(Label)
            labelRepository: Repository<Label>) {
        this.labelRepository = labelRepository;
    }

    async FindAll(): Promise<Label[]> {
        return await this.labelRepository.find();
    }

    async Find(code: string): Promise<Label> {
        return await this.labelRepository.findOne({ Code: code });
    }

    // async Find(code: string, isoCode: string): Promise<Label> {
    //     return await this.labelRepository.findOne({ Code: code, IsoCode: isoCode });
    // }

    async Where(label: Label): Promise<Label> {
        return await this.labelRepository.findOne(label);
    }

    async Insert(label: Label): Promise<Label> {
        await this.labelRepository.save(label);
        return label;
    }

    async Update(id: number, label: Label): Promise<Label> {

        try {
            await this.labelRepository.updateById(id, label);
            return label;
        } catch (e) {

        }
    }

    async Delete(id: number): Promise<Label> {
        try {
            const toDelete = this.labelRepository.findOneById(id);
            await this.labelRepository.deleteById(id);

            return toDelete;
        } catch (e) {

        }
    }


}
