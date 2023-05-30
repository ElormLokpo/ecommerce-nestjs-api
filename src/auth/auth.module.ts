import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import {LocalStrategy} from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
    imports:[
        JwtModule.register({
            secret: 'SHAMBALA',
            signOptions: {expiresIn: '30d'}
        }),
        UsersModule
    ],
    controllers:[AuthController],
    providers:[LocalStrategy, JwtStrategy, AuthService]
})
export class AuthModule{}