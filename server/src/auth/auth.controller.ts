import {Controller, Post, Request} from '@nestjs/common';



@Controller('auth')
class AuthController{
    constructor(){}


    @Post('login')
    async loginUser(@Request() req){

    }
}