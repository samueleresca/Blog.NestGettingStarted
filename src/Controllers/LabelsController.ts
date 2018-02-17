///<reference path="../Services/ILabelRepository.ts"/>
import {Get, Controller, Dependencies} from '@nestjs/common';
import {ILabelRepository} from "../Services/ILabelRepository";
import {Label} from "../Models/Label";
import {Delete, Post, Put} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {LabelsRepository} from "../Services/LabelsRepository";
import {CreateLabelDto} from "../Dto/CreateLabelDto";
import {Body} from "@nestjs/common/utils/decorators/route-params.decorator";
import {UpdateLabelDto} from "../Dto/UpdateLabelDto";
import {DeleteLabelDto} from "../Dto/DeleteLabelDto";



@Controller('Labels')
@Dependencies(LabelsRepository)
export class LabelsController {

    private service: ILabelRepository;

    constructor(repository: ILabelRepository) {
        this.service = repository;
    }

    @Get()
     async root():  Promise<Label[]> {
        return await this.service.FindAll();
    }

    @Post()
    async create(@Body() request: CreateLabelDto): Promise<Label> {
        return await this.service.Insert(request.ToLabel());
    }

    @Put()
    async update(@Body() request: UpdateLabelDto): Promise<Label> {
        return await this.service.Update(request.Id, request.ToLabel());
    }

    @Delete()
    async delete(@Body() request: DeleteLabelDto): Promise<Label> {
        return await this.service.Delete(request.Id);
    }
}
