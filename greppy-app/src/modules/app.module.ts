import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UserModule } from './user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../models/user.entity";

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'filipmusic',
      password: 'filip20',
      database: 'greppy',
      entities: [User],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
