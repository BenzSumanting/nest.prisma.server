import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // <-- import ConfigModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './admin/modules/auth/auth.module';
import { PrismaModule } from './lib/prisma.module';
import { UserModule } from './admin/modules/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guard/auth.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtAuthModule } from './admin/modules/jwt/jwt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    JwtAuthModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule { }
