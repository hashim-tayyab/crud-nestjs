import { IsEmail, IsString, IsNotEmpty, MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    username:string;


    
    @IsEmail()
    @IsNotEmpty()
    email: string;

}
