import {Component} from '@nestjs/common';
import {ILabelService} from './ILabelService';
import {Label} from '../Models/Label';
import {LabelRepository} from "../Repositories/LabelRepository";
import {Inject} from "@nestjs/common/utils/decorators/inject.decorator";


@Component()
export class LabelsService implements ILabelService {

    private readonly labelRepository: LabelRepository;

    constructor(@Inject('LabelRepository')
                    labelRepository: LabelRepository) {
        this.labelRepository = labelRepository;
    }

    async FindAll(): Promise<Label[]> {
        return await this.labelRepository.find();
    }

    async Find(code: string): Promise<Label> {
        return await this.labelRepository.findOne({Code: code});
    }

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
