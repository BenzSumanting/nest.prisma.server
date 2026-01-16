import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthModule } from '../jwt/jwt.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    JwtAuthModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
