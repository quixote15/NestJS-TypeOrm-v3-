import { DeepPartial, Repository } from 'typeorm';
import { TypeOrmPixTransferCashOut } from '../entity/PixTransferCashOut';
import { NewPixCashOutParams } from '../dtos';
import { Logger } from '@nestjs/common';

export class MyCustomRepository extends Repository<TypeOrmPixTransferCashOut> {
  createAndSave(entity?: DeepPartial<TypeOrmPixTransferCashOut>): Promise<any> {
    return this.save(entity ? this.create(entity) : this.create());
  }

  findAllPayments() {
    return this.find();
  }

  async newPixSync(payload: NewPixCashOutParams): Promise<any> {
    Logger.log({ message: 'trying to save transfer' });
    const { recipient } = payload;
    const result = await this.createAndSave({
      ...payload,
      account: payload.account,
      recipient: {
        ...recipient,
        pixKeyValue: recipient.addressingKey?.value,
      },
    });
    Logger.log({ transferId: result.id, message: 'newPixSync Saved on db' });
    return result;
  }
}
