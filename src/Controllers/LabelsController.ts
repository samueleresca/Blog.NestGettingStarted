import {Get, Controller, Dependencies} from '@nestjs/common';
import {ILabelRepository} from "../Repositories/ILabelRepository";
import {Label} from "../Models/Label";
import {Post} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {LabelsRepository} from "../Repositories/LabelsRepository";

@Controller('Labels')
@Dependencies(LabelsRepository)
export class LabelsController {

    private repository: ILabelRepository;

    constructor(repository: LabelsRepository) {
        this.repository = repository;
    }

    @Get()
     root(): ILabelRepository {
        return this.repository;
    }

    @Post()
    create(): ILabelRepository {
        const label = new Label();
        label.Code = "Bua";
        label.IsoCode = "It";

        return this.repository;
    }
}
