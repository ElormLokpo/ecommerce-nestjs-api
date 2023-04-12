import * as mongoose from 'mongoose';


export const ItemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    brand: String,
    outOfStock:{
        type: Boolean,
        default: false
    },
    sizes:[{
        type: String
    }],
    category:String,
    img:{
        type:String,
        default: 'https://placehold.co/600x400'
    },
    quantity:{
        type:Number,
        default:0
    }
}, {timestamps: true});


export interface ItemsI{
    name:string,
    description?:string,
    price: number,
    brand?: string,
    outOfStock?: boolean,
    sizes: string[],
    category: string,
    img: string,
    quantity: number
}