import { Injectable } from "@nestjs/common";
import {CreateProfileDto} from "./dto/create-profile.dto";
import { Profile } from "./entities/profile.entity";
import { User } from "../user/entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,
        private userRepository: Repository<User>
    ){}

    async create(userId:number, createProfileDto: CreateProfileDto){
        const user = await this.userRepository.findOne({
            where:{
                id: userId,
            }
        })
        if(!user) return "User Does not exist";
        else{
            const {country, city} = createProfileDto;
            const newProfile = {
                country,
                city,
                user
            }
            const profileAdded = await this.profileRepository.create(newProfile);
            await this.profileRepository.save(profileAdded);
            return profileAdded;
        }

    }
}