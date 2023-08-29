import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";


@Entity('profiles')
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    country: string;

    @Column()
    city: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
