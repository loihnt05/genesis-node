import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [ConfigModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
