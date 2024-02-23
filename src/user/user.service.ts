import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    { username: 'ahr', email: 'ahr@gmail.com', password: '123456' },
    { username: 'sk', email: 'sk@gmail.com', password: '123456' },
    { username: 'nd', email: 'nd@gmail.com', password: '123456' },
  ];

  getUserByName(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
