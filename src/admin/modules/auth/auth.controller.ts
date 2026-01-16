import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthRegisterDto } from './dtos/auth.register.dto';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorator/public.decorator';

@Controller('auth')
export class AuthController {

    constructor(protected readonly authService: AuthService) { }

    @Public()
    @Post('login')
    register(@Body() body: AuthRegisterDto) {
        return this.authService.login(body.email, body.password);
    }

    @Get('test')
    test() {
        return 'This is from admin route';
    }
}
