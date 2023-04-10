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
    category:String
});


export interface ItemsI{
    name:string,
    description?:string,
    price: number,
    brand?: string,
    outOfStock?: boolean,
    sizes: string[],
    category: string
}