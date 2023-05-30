import * as mongoose from 'mongoose';
const bcrypt = require('bcrypt');


export const UsersSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemsModel'
    }]
    
    
}, {timestamps: true});

UsersSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


export interface UsersI{
    fullname: string,
    username:string,
    password: string,
    cart?: string[]
}