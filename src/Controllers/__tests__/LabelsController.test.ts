import {Test} from '@nestjs/testing';
import {LabelsController} from '../LabelsController';
import {LabelsService} from '../../Services/LabelsService';
import {LabelRepository} from "../../Repositories/LabelRepository";

describe('LabelsController', () => {
    let labelController: LabelsController;
    let labelService: LabelsService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({

            controllers: [LabelsController],
            components: [{
                provide: 'LabelRepository',
                useClass: LabelRepository,
            }, LabelsService
            ]
        }).compile();

        labelService = module.get<LabelsService>(LabelsService);
        labelController = module.get<LabelsController>(LabelsController);
    });

    describe('Get', () => {
        it('should return an array of labels', async () => {
            const result = ['test'];
            jest.spyOn(labelService, 'findAll').mockImplementation(() => result);

            expect(await labelController.root()).toBe(result);
        });
    });
});