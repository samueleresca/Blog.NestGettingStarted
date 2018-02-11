///<reference path="../Services/ILabelService.ts"/>
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
     async root():  Promise<Label[]> {
        return await this.repository.FindAll();
    }

    @Post()
    async create(label: Label): Promise<Label> {
        return await this.repository.Insert(label);
    }
}
