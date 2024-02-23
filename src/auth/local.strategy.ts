import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }

  validate(username: string, password: string): User {
    const user = this.userService.getUserByName(username);
    if (!user) throw new UnauthorizedException();
    if (user.password === password) return user;
  }
}
