import { 
    Controller,
    Body,
    Get,
    Post,
    
 } from '@nestjs/common';
import { UsersService } from './users.service';


 @Controller('auth')
 export class UsersController{
    constructor(private readonly usersservice:UsersService){}


    @Post('register')
    RegisterUser(
      @Body('fullname') fullname:string,
      @Body('username') username:string,
      @Body('password') password:string,
     
    ){
      const usersData = this.usersservice.registerUser(fullname,username,password);
      return usersData;
   }

 }