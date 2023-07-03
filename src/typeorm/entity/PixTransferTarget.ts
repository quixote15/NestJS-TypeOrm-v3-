import { Check, Column, Entity, OneToMany } from 'typeorm';
import { TypeOrmPixTransferCashOut } from './PixTransferCashOut';
import { TypeOrmBaseModel } from './TypeOrmBaseModel';

@Entity('pix-transfer-target')
export class TypeOrmPixTransferTarget extends TypeOrmBaseModel<any> {
  @Check(`char_length("bankAgency") <= 5`)
  @Column({ nullable: true, type: 'text' })
  bankAgency?: string;

  @Check('char_length("bankName") <= 200')
  @Column({ nullable: true, type: 'text' })
  bankName?: string;

  @Check('char_length("ispb") <= 30')
  @Column({ nullable: true, type: 'text' })
  ispb?: string;

  @Check('char_length("bankAgencyDigit") <= 1')
  @Column({ nullable: true, type: 'text' })
  bankAgencyDigit?: string;

  @Check(`char_length("bankAccount") <= 30`)
  @Column({ nullable: true, type: 'text' })
  bankAccount?: string;

  @Check('char_length("bankAccountDigit") <= 1')
  @Column({ nullable: true, type: 'text' })
  bankAccountDigit?: string;

  @Check('char_length("bankAccountType") <= 20 ')
  @Column({ nullable: true, type: 'text' })
  bankAccountType?: string;

  @Check('char_length(name) <= 200 ')
  @Column({ type: 'text' })
  name!: string;

  @Check('char_length("socialName") <= 200 ')
  @Column({ nullable: true, type: 'text' })
  socialName?: string;

  @Check(`char_length(document) <= 30`)
  @Column({ type: 'text' })
  document!: string;

  @Check('char_length("bankCode") <= 4 ')
  @Column({ nullable: true, type: 'text' })
  bankCode?: string;

  @Check('char_length("pixKeyValue") <= 100 ')
  @Column({ nullable: true, type: 'text' })
  pixKeyValue?: string;

  @OneToMany(
    () => TypeOrmPixTransferCashOut,
    (pixTransfer) => pixTransfer.recipient,
  )
  bankTransfers!: TypeOrmPixTransferCashOut[];

  toDomain(): any {
    return {
      ...this,
    };
  }
}
