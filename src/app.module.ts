import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinRegModule } from './nin-reg/nin-reg.module';

@Module({
  imports: [TypeOrmModule.forRoot(), NinRegModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
