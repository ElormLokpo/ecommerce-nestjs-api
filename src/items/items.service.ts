import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { ItemsI } from './items.dto';

@Injectable()
export class ItemsService{
    constructor(@InjectModel('ItemsModel') private readonly itemsmodel:Model<ItemsI>){}

    async getAllItems(){
        const itemsData = await this.itemsmodel.find();
        return itemsData;
    }

    async getItem(id:string){
        const itemsData = await this.itemsmodel.findById(id);
        return itemsData;
    }

    async addItems(name:string, description:string, price:number, brand: string, outOfStock:boolean, sizes: string[], category:string, img:string, quantity: number){
        const itemsData = await this.itemsmodel.create({name, description, price, brand, outOfStock, sizes, category, img, quantity});
        return itemsData;
    }

    async updateItems(id:string, name:string, description:string, price:number, brand: string, outOfStock:boolean, sizes: string[], category:string, img:string, quantity: number){
        const itemsData = await this.itemsmodel.findByIdAndUpdate(id,{name, description, price, brand, outOfStock, sizes, category,img, quantity}, {new: true});
        return itemsData;
    }

    async deleteItems(id:string){
        const itemsData = await this.itemsmodel.findByIdAndDelete(id);
        return itemsData
    }

    async cartToQty(itemid:string){
        const itemsData = await this.itemsmodel.findById(itemid);
        let newQty;

        if(itemsData.quantity > 0){
            newQty = itemsData.quantity - 1;
            let newItemsData = await this.itemsmodel.findByIdAndUpdate(itemid, {quantity: newQty}, {new:true});
            return newItemsData;

        }else if(itemsData.quantity == 0){
            newQty = 'Out of Stock';
            return newQty;
        }
    }
}