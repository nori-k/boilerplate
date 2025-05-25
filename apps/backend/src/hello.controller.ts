import { Controller, Get, Query } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(@Query('name') name: string = 'World') {
    return { greeting: `Hello, ${name}!` };
  }
}
