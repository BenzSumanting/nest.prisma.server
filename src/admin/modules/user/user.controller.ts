import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSerializer } from 'src/common/serializer/user.serializer';
import { plainToInstance } from 'class-transformer';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Public } from 'src/common/decorator/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {

    const user = await this.userService.create(createUserDto);

    return user;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
