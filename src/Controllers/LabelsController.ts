import {Get, Controller, Dependencies} from '@nestjs/common';
import {ILabelService} from "../Services/ILabelService";
import {Label} from "../Models/Label";
import {Post} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {LabelsService} from "../Services/LabelsService";

@Controller('Labels')
@Dependencies(LabelsService)
export class LabelsController {

    private repository: ILabelService;

    constructor(repository: ILabelService) {
        this.repository = repository;
    }

    @Get()
     root(): ILabelService {
        return this.repository;
    }

    @Post()
    create(): ILabelService {
        const label = new Label();
        label.Code = "Bua";
        label.IsoCode = "It";

        return this.repository;
    }
}
