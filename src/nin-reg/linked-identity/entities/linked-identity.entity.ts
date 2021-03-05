import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Biodatum } from "src/nin-reg/biodata/entities/biodatum.entity";

@Entity()
export class LinkedIdentity {

    @PrimaryGeneratedColumn()
    NIN: number;

    @Column()
    BVN: number;

    @Column({ nullable: true })
    Mobile: number;

    @Column({ default: true })
    isActive: boolean;

    @JoinColumn()
    @OneToOne(type => Biodatum, Biodatum => Biodatum.LinkedIdentity, {cascade:true})
    Biodata: Biodatum;

}
