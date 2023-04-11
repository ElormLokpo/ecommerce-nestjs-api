import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersSchema } from './users.dto';
import { UsersService } from './users.service';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'UsersModel', schema: UsersSchema}])
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule{}