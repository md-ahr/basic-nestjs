import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string {
    return 'get all users';
  }

  findSingle(id: string): string {
    return `get single user with id ${id}`;
  }

  addUser(): string {
    return 'add user';
  }

  updateUser(id: string): string {
    return `update user with id ${id}`;
  }

  deleteUser(id: string): string {
    return `delete user with id ${id}`;
  }
}
