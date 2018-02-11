import {LabelsService} from "../Services/LabelsService";

export class DependencyInstaller {

    public static Installers: Array<object> = [
        LabelsService
    ];
};