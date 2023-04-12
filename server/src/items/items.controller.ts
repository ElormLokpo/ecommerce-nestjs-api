import { 
    Controller,
    Body,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    UseGuards
 } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.gaurd';
import { ItemsService } from './items.service';


 @Controller('items')
 export class ItemsController{
    constructor(private readonly itemsservice:ItemsService){}


    @Get('')
     GetAllItems(){
      const itemsData = this.itemsservice.getAllItems();
      return itemsData;
    }

    @Get(':id')
    GetItem(@Param('id') id:string){
      const itemsData = this.itemsservice.getItem(id);
      return itemsData
    }

    @UseGuards(JwtGuard)
    @Post('add')
    AddItems(
      @Body('name') name:string,
      @Body('description') description:string,
      @Body('price') price:number,
      @Body('brand') brand:string,
      @Body('outOfStock') outOfStock:boolean,
      @Body('sizes') sizes: string[],
      @Body('category') category: string,
      @Body('img') img: string,
      @Body('price') quantity:number,


    ){
      const itemsData = this.itemsservice.addItems(name, description, price, brand, outOfStock, sizes, category, img,quantity);
      return itemsData;
   }

   @UseGuards(JwtGuard)
   @Patch(':id')
    UpdateItems(
      @Param('id') id:string,
      @Body('name') name:string,
      @Body('description') description:string,
      @Body('price') price:number,
      @Body('brand') brand:string,
      @Body('outOfStock') outOfStock:boolean,
      @Body('sizes') sizes: string[],
      @Body('category') category: string,
      @Body('img') img: string,
      @Body('price') quantity:number,


    ){
      const itemsData = this.itemsservice.updateItems(id,name, description, price, brand, outOfStock, sizes, category, img,quantity);
      return itemsData;
   }

   @UseGuards(JwtGuard)
   @Delete(':id')
    DeleteItem(@Param('id') id:string){
      const itemsData = this.itemsservice.deleteItems(id);
      return itemsData
    }

    @Post('cart')
    ItemsFromCart(cart:string[]){
      cart.map(i=>{
        let cartData = this.itemsservice.cartToQty(i)
      })
      return 'CartHandled';
    }
 }