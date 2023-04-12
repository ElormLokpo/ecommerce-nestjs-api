import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { UsersI } from './users.dto';

const bcrypt = require('bcrypt');

@Injectable()
export class UsersService{
    constructor(
        @InjectModel('UsersModel') private readonly usersmodel:Model<UsersI>,
        ){}


    async registerUser(fullname:string,username:string, password:string){
        const userData = await this.usersmodel.create({fullname, username, password, cart:[]});
        return {_id:userData._id, username: userData.username, fullname: userData.fullname, cart:[]};
    }

    async validateUser(username:string, password:string){
        const userData = await this.usersmodel.findOne({username});
        let valid_user = await bcrypt.compare(password, userData.password);

        if(valid_user){
            return {_id:userData._id, username: userData.username, fullname: userData.fullname}
        }
        return null;
    }

  
   
}