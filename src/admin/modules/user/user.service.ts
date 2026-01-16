import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from "bcrypt";
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class UserService {

  constructor(private readonly prismaService: PrismaService) { }

  private readonly SALT_ROUND = 10;

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUND);
  }

  async create(createUserDto: CreateUserDto) {

    const hashed = await this.hashPassword(createUserDto.password)

    return this.prismaService.user.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
        password: hashed
      }
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
