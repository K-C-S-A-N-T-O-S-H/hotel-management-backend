import { IsString, IsArray, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateSubItemsDto {
    // @IsString()
    // public _id: string;

    @IsString()
    public hotel_id: string;

    @IsString()
    public menu_id: string;

    @IsString()
    public item_id: string;

    @IsString()
    public item_name: string;

    @IsNumber()
    public item_price: number;

    @IsString()
    public from_time: string;
    @IsString()
    public to_time: string;
}
export class UpdateSubItemsDto {
    @IsString()
    @IsOptional()
    public hotel_id: string;

    @IsString()
    @IsOptional()
    public menu_id: string;

    @IsString()
    @IsOptional()
    public item_id: string;

    @IsString()
    @IsOptional()
    public item_name: string;

    @IsNumber()
    @IsOptional()
    public item_price: number;

    @IsString()
    @IsOptional()
    public from_time: string;

    @IsString()
    @IsOptional()
    public to_time: string;
}
