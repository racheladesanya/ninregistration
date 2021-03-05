import { CreateBiodatumDto } from "src/nin-reg/biodata/dto/create-biodatum.dto";

export class CreateLinkedIdentityDto {
   readonly NIN: number;
   readonly BVN: number;
   readonly mobile: number;
   readonly isActive: boolean;
   readonly biodata: CreateBiodatumDto; 
   //In case you want to create a user along with student
}