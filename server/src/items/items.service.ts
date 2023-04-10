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

    async addItems(name:string, description:string, price:number, brand: string, outOfStock:boolean, sizes: string[], category:string){
        const itemsData = await this.itemsmodel.create({name, description, price, brand, outOfStock, sizes, category});
        return itemsData;
    }

    async updateItems(id:string, name:string, description:string, price:number, brand: string, outOfStock:boolean, sizes: string[], category:string){
        const itemsData = await this.itemsmodel.findByIdAndUpdate(id,{name, description, price, brand, outOfStock, sizes, category}, {new: true});
        return itemsData;
    }

    async deleteItems(id:string){
        const itemsData = await this.itemsmodel.findByIdAndDelete(id);
        return itemsData
    }
}