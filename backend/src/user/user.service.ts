import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@Inject('CONFIG') private config: any) {}

  getConfig() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.config;
  }
}
