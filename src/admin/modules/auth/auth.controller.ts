import { Body, Controller, Post } from '@nestjs/common';
import { AuthRegisterDto } from './dtos/auth.register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(protected readonly authService: AuthService) { }

    @Post('register')
    register(@Body() body: AuthRegisterDto) {
        return this.authService.create(body);
    }

}
