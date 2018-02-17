import {Label} from "../Models/Label";

export class UpdateLabelDto {
    readonly Id: number;
    readonly Code: string;
    readonly IsoCode: string;
    readonly Content: string;
    readonly Inactive : boolean;

    public ToLabel() : Label{
        const label= new Label();
        label.IsoCode = this.IsoCode;
        label.Code = this.Code;
        label.Content = this.Content;
        label.Inactive = this.Inactive;

        return label;
    }
}