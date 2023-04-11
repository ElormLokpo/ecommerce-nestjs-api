import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService{
    constructor( private readonly jwtservice:JwtService ){}

    async createToken(userdata){
        let token = this.jwtservice.sign({userdata});
        return {token, userdata};
    }
   
}