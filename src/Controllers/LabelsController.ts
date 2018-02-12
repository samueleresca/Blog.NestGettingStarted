///<reference path="../Services/ILabelService.ts"/>
import {Get, Controller, Dependencies} from '@nestjs/common';
import {ILabelService} from "../Services/ILabelService";
import {Label} from "../Models/Label";
import {Delete, Post, Put} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {LabelsService} from "../Services/LabelsService";
import {CreateLabelDto} from "../Dto/CreateLabelDto";
import {Body} from "@nestjs/common/utils/decorators/route-params.decorator";
import {UpdateLabelDto} from "../Dto/UpdateLabelDto";
import {DeleteLabelDto} from "../Dto/DeleteLabelDto";



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
    async create(@Body() request: CreateLabelDto): Promise<Label> {

        const label= new Label();
        label.IsoCode = request.IsoCode;
        label.Code = request.Code;
        label.Content = request.Content;
        label.Inactive = request.Inactive;

        return await this.repository.Insert(label);
    }

    @Put()
    async update(@Body() request: UpdateLabelDto): Promise<Label> {

        const label= new Label();
        label.IsoCode = request.IsoCode;
        label.Code = request.Code;
        label.Content = request.Content;
        label.Inactive = request.Inactive;

        return await this.repository.Update(request.Id, label);
    }

    @Delete()
    async delete(@Body() request: DeleteLabelDto): Promise<Label> {
        return await this.repository.Delete(request.Id);
    }
}
