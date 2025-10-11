import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = ['Alice', 'Bob', 'Charlie'];

  getAllUsers() {
    return this.users;
  }
}
