import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from "typeorm";

@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    username: string;

    @Column({ length: 100 })
    email: string;


}
