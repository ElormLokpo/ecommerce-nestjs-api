import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';


@Controller('auth')
export class AuthController{
    constructor(){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async loginUser(@Request() req){
        return req.user;
    }
}