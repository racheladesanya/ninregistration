import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { LinkedIdentity } from './entities/linked-identity.entity';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { Biodatum } from '../biodata/entities/biodatum.entity';

@Injectable()
export class LinkedIdentityService {
    constructor(
      //inject user repository for use here in UsersService as if it is part of the class 
      @InjectRepository(LinkedIdentity)
      private LinkedIdentityRepository: Repository<LinkedIdentity>,

      @InjectRepository(Biodatum)
      private BiodatumRepository: Repository<Biodatum>
    ) { }
      
async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
  const newLinkedIdentity = this.LinkedIdentityRepository.create(createLinkedIdentityDto);
  //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
  if (createLinkedIdentityDto.biodata) {
    const newBiodatum = this.BiodatumRepository.create(createLinkedIdentityDto.biodata);
    const biodata: Biodatum = await this.BiodatumRepository.save(newBiodatum);
    newLinkedIdentity.Biodata = biodata;
  }
  return this.LinkedIdentityRepository.save(newLinkedIdentity)
} 
async findAll() {
      //return `This action returns all users`;
      return await this.LinkedIdentityRepository.find();
}
async findOne(id: number) {
      //return `This action returns a #${id} user`;
      return await this.LinkedIdentityRepository.findOne(id);

}
async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) { 
       //return `This action updates a #${id} user`;
       return await this.LinkedIdentityRepository.update(id, updateLinkedIdentityDto);
}
async remove(id: number) {
      //return `This action removes a #${id} user`;
      return await this.LinkedIdentityRepository.delete(id);
  } 
}

