import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { LinkedIdentity } from "src/nin-reg/linked-identity/entities/linked-identity.entity";

@Entity()
export class Biodatum {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

    @Column({ nullable: true })
    nationality: string

    @Column({ nullable: true })
    countryOfBirth: string;

    @Column({ nullable: true })
    stateOfBirth: string;

    @Column({ nullable: true })
    townOfBirth: string;

    @Column({ nullable: true })
    address: string

    @Column({ nullable: true })
    profession: string;

    @Column({ default: true })
    isActive: boolean;
    
    @JoinColumn()
    @OneToOne(type => LinkedIdentity, LinkedIdentity => LinkedIdentity.Biodata)
    LinkedIdentity: LinkedIdentity;


}