import { IsString, IsNotEmpty} from "class-validator";

export class CreateProfileDto {
    @IsString()
    @IsNotEmpty()
    country:string;


    
    @IsString()
    @IsNotEmpty()
    city: string;

}
