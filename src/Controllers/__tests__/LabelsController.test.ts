import { Test } from '@nestjs/testing';
import { LabelsController } from '../LabelsController';
import { LabelsRepository } from '../../Services/LabelsRepository';

describe('LabelsController', () => {
    let labelController: LabelsController;
    let labelService: LabelsRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({

            controllers: [LabelsController],
            components: [LabelsRepository],
        }).compile();

        labelService = module.get<LabelsRepository>(LabelsRepository);
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