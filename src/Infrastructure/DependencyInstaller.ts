import {LabelsService} from "../Services/LabelsService";
import {LabelRepository} from "../Repositories/LabelRepository";

export class DependencyInstaller {

    public static Installers: Array<object> = [
        LabelsService,
        { provide: 'LabelRepository', useClass: LabelRepository }
    ];
};