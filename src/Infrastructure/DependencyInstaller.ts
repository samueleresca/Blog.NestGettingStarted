import {LabelsRepository} from "../Services/LabelsRepository";

export class DependencyInstaller {

    public static Installers: Array<object> = [
        LabelsRepository
    ];
};