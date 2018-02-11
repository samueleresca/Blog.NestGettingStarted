import {Get, Controller, Inject} from '@nestjs/common';
import {ILabelRepository} from "../Repositories/ILabelRepository";
import {Label} from "../Models/Label";
import {Post} from "@nestjs/common/utils/decorators/request-mapping.decorator";

@Controller('Labels')
export class LabelsController {

    private repository: ILabelRepository;

    constructor(@Inject('LabelRepository')
                    repository: ILabelRepository) {
        this.repository = repository;
    }

    @Get()
    async root(): Promise<Label[]> {
        return await this.repository.FindAll();
    }

    @Post()
    create(): Label {
        const label = new Label();
        label.Code = "Bua";
        label.IsoCode = "It";

        this.repository.Insert(label);
        return label;
    }
}
