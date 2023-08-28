import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProfileModule } from './modules/profile/profile.module';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './modules/user/entities/user.entity';
import { Profile } from './modules/profile/entities/profile.entity';




const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user_1',
  password: '12345',
  database: 'test3_nest',
  // entities: [__dirname + '../src/modules/**/entities/*.entity'], // Changed path to entities
  entities:[User, Profile],
  synchronize: true,
};


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}