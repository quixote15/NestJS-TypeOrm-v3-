import { Repository } from 'typeorm';
import { TypeOrmPixTransferCashOut } from '../entity/PixTransferCashOut';

export class MyCustomRepository extends Repository<TypeOrmPixTransferCashOut> {
  findAllPayments() {
    return this.find();
  }
}
