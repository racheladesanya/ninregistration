import { Module } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { LinkedIdentityController } from './linked-identity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkedIdentity } from './entities/linked-identity.entity';
import { Biodatum } from '../biodata/entities/biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkedIdentity, Biodatum])],
  controllers: [LinkedIdentityController],
  providers: [LinkedIdentityService]
})
export class LinkedIdentityModule {}