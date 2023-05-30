import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController{
    constructor(
        private readonly authservice:AuthService
    ){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async loginUser(@Request() req){
        let data = this.authservice.createToken(req.user);
        return data;
    }
}