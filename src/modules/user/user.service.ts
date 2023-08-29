import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser= await this.userRepository.create(createUserDto);
      return await this.userRepository.save(newUser);
    } catch (error) {
      console.log(error);
    }
    
  }

  async findAll() {
    const allUsers = await this.userRepository.find();
    return allUsers;
  }

  async findOne(id: number) {
   try {
    const currentUser = await this.userRepository.findOne(
      {where:{
        id :id
      }}
    );
    if(currentUser) {
      return currentUser
    }
    else {
       return "This User does not exists"
    };
   } catch (error) {
    console.log(error);
   }

  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updateUser = await this.userRepository.update(id, updateUserDto);
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
