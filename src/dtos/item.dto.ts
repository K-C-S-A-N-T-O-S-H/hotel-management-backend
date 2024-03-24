import { IsString, IsArray, IsOptional, IsNumber } from 'class-validator';

export class CreateItemDto {
    @IsString()
    public hotel_id: string;

    @IsString()
    public menu_id: string;

    @IsString()
    public item_name: string;

    @IsNumber()
    public item_price: string;

    @IsString()
    @IsOptional()
    public from_time: string;

    @IsString()
    @IsOptional()
    public to_time: string;

    @IsArray()
    @IsOptional()
    public subItems: Array<any>;
}
export class UpdateItemDto {
    @IsString()
    public hotel_id: string;

    @IsString()
    public menu_id: string;

    @IsString()
    public item_name: string;

    @IsNumber()
    public item_price: string;

    @IsString()
    @IsOptional()
    public from_time: string;

    @IsString()
    @IsOptional()
    public to_time: string;

    @IsArray()
    @IsOptional()
    public subItems: Array<any>;
}
