import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../models/user.entity';
import { ILike } from "typeorm";

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return User.create({ ...createUserDto }).save();
  }

  findAll() {
    return User.find();
  }

  findOne(id: number) {
    return User.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('No User was found with this id');
    }
    const updatedUser: Partial<User> = {
      ...updateUserDto,
    };
    await User.update(id, updatedUser);
    return true;
  }

  async remove(id: number) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('No User was found with this id');
    }
    await User.delete(user.id);
    return true;
  }

  filterByName(name: string) {
    return User.find({
      where: [
        { firstName: ILike(`%${name}%`) },
        { lastName: ILike(`%${name}%`) },
      ],
    });
  }

  // async filterByName(name: string) {
  //   let usersMatchingFirstName = User.find({
  //     where: { firstName: ILike(`%${name}%`) },
  //   });
  //   let usersMatchingLastName = User.find({
  //     where: { lastName: ILike(`%${name}%`) },
  //   });
  //   let [firstNameUsers, lastNameUsers] = await Promise.all([usersMatchingFirstName, usersMatchingLastName])
  //   return firstNameUsers.concat(lastNameUsers);
  // }
}
