import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import {Injectable} from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly usersservice:UsersService
    ){super();}

    async validate(username: string , password:string){
        let userData = await this.usersservice.validateUser(username, password);
        return userData;
    }
}