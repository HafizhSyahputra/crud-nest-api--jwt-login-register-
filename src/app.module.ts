import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/user.entity';
import { Car } from './car/car.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ur_host',
      port: 'ur_port',
      username: 'ur_username',
      password: 'ur_password',
      database: 'ur_database',
      entities: [User, Car],
      synchronize: true,
    }),
    UserModule,
    CarModule,
  ],
})
export class AppModule {}
