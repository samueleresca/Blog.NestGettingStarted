import {LabelsRepository} from "../Repositories/LabelsRepository";

export class DependencyInstaller {

    public static Installers: Array<object> = [
        {
            provide: 'LabelRepository', useValue: LabelsRepository
        }
    ];
};