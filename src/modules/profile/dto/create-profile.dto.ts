import { IsString, IsNotEmpty} from "class-validator";
import { CreateUserDto } from "src/modules/user/dto/create-user.dto";

export class CreateProfileDto {
    @IsString()
    @IsNotEmpty()
    country:string;


    
    @IsString()
    @IsNotEmpty()
    city: string;

    
    
    user:CreateUserDto

}
