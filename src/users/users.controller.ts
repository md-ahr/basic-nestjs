import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  findAll(): string {
    return this.usersService.findAll();
  }

  @Get('/:id')
  findSingle(@Param() params: { id: string }): string {
    return this.usersService.findSingle(params.id);
  }

  @Post('/')
  addUser(): string {
    return this.usersService.addUser();
  }

  @Patch('/:id')
  updateUser(@Param() params: { id: string }): string {
    return this.usersService.updateUser(params.id);
  }

  @Delete('/:id')
  deleteUser(@Param() params: { id: string }): string {
    return this.usersService.deleteUser(params.id);
  }
}
