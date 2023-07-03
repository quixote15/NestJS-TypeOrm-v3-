import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MyCustomRepository } from './typeorm/repository/PixRepository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly repo: MyCustomRepository,
  ) {}

  @Get()
  getHello(): Promise<any> {
    return this.repo.findAllPayments();
  }
}
