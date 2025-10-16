import { User } from './user.entity';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | undefined>;
  create(user: User): Promise<User>;
}
