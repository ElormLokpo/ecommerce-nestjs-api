import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsSchema } from './items.dto';
import { ItemsService } from './items.service';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'ItemsModel', schema: ItemsSchema}])
    ],
    controllers: [ItemsController],
    providers: [ItemsService]
})
export class ItemsModule{}