import {ILabelRepository} from './ILabelRepository';
import {Label} from '../Models/Label';

export interface ILabelRepository {

    FindAll(): Promise<Label[]>;

    Find(code: string): Promise<Label>;

   // Find(code: string, isoCode: string): Promise<Label>;

    Where(label: Label): Promise<Label>;

    Insert(label: Label): Promise<Label> ;

    Update(id: number, label: Label): Promise<Label>;

    Delete(id: number): Promise<Label>;
}