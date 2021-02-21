import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto'; 
import { UpdateBiodatumDto } from './dto/update-biodatum.dto'; 
import { Biodatum } from './entities/biodatum.entity';

@Injectable()
export class UsersService {
    constructor(
          @InjectRepository(Biodatum)
          private usersRepository: Repository<Biodatum>
){}
create(createUserDto: CreateBiodatumDto) {
          return 'This action adds a new user';
} 
findAll() {
  return `This action returns all users`;
}
findOne(id: number) {
  return `This action returns a #${id} user`;

}
update(id: number, updateUserDto: UpdateBiodatumDto) { 
  return `This action updates a #${id} user`;
}
remove(id: number) {
     return `This action removes a #${id} user`;
  } 
}