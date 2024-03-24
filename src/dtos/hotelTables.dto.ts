import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateHotelTablesDto {
    @IsString()
    public hotel_id: string;

    @IsString()
    public table_number: string;

    @IsString()
    public number_of_seats: string;

    @IsBoolean()
    @IsOptional()
    public live_sync_up_products: boolean;

    @IsBoolean()
    @IsOptional()
    public qr_code_order: boolean;
}
export class UpdateHotelTablesDto {
    @IsString()
    public hotel_id: string;

    @IsString()
    public table_number: string;

    @IsString()
    public number_of_seats: string;

    @IsBoolean()
    @IsOptional()
    public live_sync_up_products: boolean;

    @IsBoolean()
    @IsOptional()
    public qr_code_order: boolean;
}
