import { Injectable } from '@nestjs/common';
import { User } from 'src/generated/prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { AuthRegisterDto } from './dtos/auth.register.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}

    async create(data: AuthRegisterDto){
        return this.prisma.user.create({data});
    }

    async user(id: number): Promise<User | null>{
        return this.prisma.user.findUnique({where: { id }})
    }
}
