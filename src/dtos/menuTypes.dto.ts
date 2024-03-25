import { IsString, IsArray, IsNumber, IsBoolean } from 'class-validator';

export class CreateMenuTypeDto {
    @IsString()
    public _id: string;

    @IsString()
    public hotel_id: string;

    @IsString()
    public menu_name: string;

    @IsString()
    public from_time: string;

    @IsString()
    public to_time: string;

    @IsBoolean()
    public is_active: boolean;

    @IsArray()
    public items: Array<any>;
}
export class UpdateMenuTypeDto {
    @IsString()
    public _id: string;

    @IsString()
    public hotel_id: string;

    @IsString()
    public menu_name: string;

    @IsString()
    public from_time: string;

    @IsNumber()
    public to_time: string;

    @IsBoolean()
    public is_active: boolean;

    @IsArray()
    public items: Array<any>;
}
