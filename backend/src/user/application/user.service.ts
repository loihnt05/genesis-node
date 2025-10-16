import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import type { UserRepository } from '../domain/user.repository';

@Injectable()
export class UserService {
  // constructor(@Inject('CONFIG') private config: any) {}

  // getConfig() {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //   return this.config;
  // }

  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findById(id);
  }

  async createUser(name: string, email: string): Promise<User> {
    const id = Date.now(); // business logic
    const user = new User(id, name, email);
    return this.userRepository.create(user);
  }
}
