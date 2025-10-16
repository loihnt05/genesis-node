import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../application/user.service';

@Controller('user')
export class UserController {
  // constructor(private userService: UserService) {}

  // @Get('config')
  // getConfig() {
  //   return this.userService.getConfig();
  // }

  constructor(private readonly userService: UserService) {}

  @Get('all')
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.userService.getUserById(+id);
  }

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.userService.createUser(body.name, body.email);
  }
}
