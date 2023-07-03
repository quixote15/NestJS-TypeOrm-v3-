import { Controller, Get, Post } from '@nestjs/common';
import { MyCustomRepository } from './typeorm/repository/PixRepository';

@Controller()
export class AppController {
  constructor(private readonly repo: MyCustomRepository) {}

  @Get()
  getHello(): Promise<any> {
    return this.repo.findAllPayments();
  }

  @Post('/pix')
  async makePayment() {
    try {
      return await this.repo.newPixSync({
        tenantId: '20',
        amount: '20.00',
        bankProvider: 'bankly',
        referenceId: 'dsa',
        providerId: 'dds1a',
        origin: 'ds4',
        endToEndId: 'dfsadfa',
        profileId: 'fdas',
        sender: {
          name: 'tigas',
          document: '1234567891',
        },
        recipient: {
          name: 'tony',
          document: '12131332',
        },
        account: 323232,
        assetId: 'afe00754-b8f5-4336-92fa-a4eaacf2020c',
        userId: 'b56f59d8-4cd7-4b91-b156-a012146dc94f',
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
