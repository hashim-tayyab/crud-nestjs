import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Profile } from "./entities/profile.entity";
import { User } from "../user/entities/user.entity";


@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    @InjectRepository(User)
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

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
