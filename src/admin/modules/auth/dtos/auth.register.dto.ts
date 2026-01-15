import { IsNotEmpty } from "class-validator";

export class AuthRegisterDto{
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    password: string
}