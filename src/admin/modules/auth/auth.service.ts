import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from 'src/generated/prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { AuthRegisterDto } from './dtos/auth.register.dto';
// import { REDIS_CLIENT } from 'src/redis/redis.service';
import * as bcrypt from "bcrypt";
import type { RedisClientType } from 'redis';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });

        if (!user) {
            throw new ForbiddenException();
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw new ForbiddenException();
        }


        const payload = { sub: user.id, name: user.name, email: user.email }

        const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            access_token: this.jwtService.sign(payload)
        };

        return data;
    }
}
