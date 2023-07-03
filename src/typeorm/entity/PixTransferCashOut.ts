import { BeforeInsert, Check, Column, Entity, ManyToOne } from 'typeorm';
import { TypeOrmBaseModel } from './TypeOrmBaseModel';
import { TypeOrmPixTransferTarget } from './PixTransferTarget';

@Entity('pix-transfer-cash-out')
export class TypeOrmPixTransferCashOut extends TypeOrmBaseModel<any> {
  @Check('char_length(amount) <= 50 ')
  @Column({ nullable: true, type: 'text' })
  amount?: string;

  @Check('char_length("changeAmount") <= 50 ')
  @Column({ nullable: true, type: 'text' })
  changeAmount?: string;

  @Check('char_length("withdrawalAmount") <= 50 ')
  @Column({ nullable: true, type: 'text' })
  withdrawalAmount?: string;

  @Column({ type: 'boolean', default: false })
  conciliated!: boolean;

  @Column({ name: 'tenantId' })
  account!: number;

  @ManyToOne(() => TypeOrmPixTransferTarget, {
    cascade: true,
    eager: true,
  })
  recipient!: TypeOrmPixTransferTarget;

  @ManyToOne(() => TypeOrmPixTransferTarget, { cascade: true, eager: true })
  sender!: TypeOrmPixTransferTarget;

  @Check('char_length("endToEndId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  endToEndId?: string;

  @Check('char_length("providerId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  providerId?: string;

  @Check('char_length("referenceId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  referenceId?: string;

  @Check('char_length("origin") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  origin?: string;

  @Check('char_length("endToEndIdOriginal") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  endToEndIdOriginal?: string;

  @Check('char_length("originalTransactionId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  originalTransactionId?: string;

  @Check('char_length("profileId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  profileId?: string;

  @Check('char_length("previousOriginalTransactionId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  previousOriginalTransactionId?: string;

  @Check('char_length("originalSchedulerId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  originalSchedulerId?: string;

  @Check('char_length("transactionId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  transactionId!: string;

  @Check('char_length("transactionIdOriginal") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  transactionIdOriginal?: string;

  @Column({ nullable: true, type: 'uuid' })
  actionBatchCancelationId!: string;

  @Column()
  status!: string;

  @Column({ type: 'uuid' })
  assetId!: string;

  @Column({ type: 'uuid', nullable: true })
  actionBatchId?: string;

  @Check('char_length("idempotenceKey") <= 100 ')
  @Column({ nullable: true, type: 'text' })
  idempotenceKey?: string;

  @Column({ type: 'uuid' })
  userId!: string;

  @Column({ nullable: true, type: 'timestamp with time zone' })
  settledAt?: Date;

  @Column({ nullable: true, type: 'timestamp with time zone' })
  externalPaymentDate?: string;

  @Column({ type: 'jsonb', nullable: true })
  error?: any;

  @Column({ type: 'boolean', default: false })
  isInternal!: boolean;

  @Column({ type: 'boolean', default: false })
  isUndone!: boolean;

  @Column({ type: 'boolean', default: false })
  isCanceled!: boolean;

  @Check('char_length("refusalReason") <= 200 ')
  @Column({ nullable: true, type: 'text' })
  refusalReason?: string;

  @Column({ type: 'boolean', default: false })
  isExternalCancelation!: boolean;

  @Column({ type: 'boolean', default: false })
  isRefund!: boolean;

  @Check('char_length("errorReason") <= 200 ')
  @Column({ nullable: true, type: 'text' })
  errorReason?: string;

  @Check('char_length("paymentPurpose") <= 200 ')
  @Column({ nullable: true, type: 'text' })
  paymentPurpose?: string;

  @Check('char_length("paymentPriority") <= 200 ')
  @Column({ nullable: true, type: 'text' })
  paymentPriority?: string;

  @Check('char_length("paymentPriorityType") <= 200 ')
  @Column({ nullable: true, type: 'text' })
  paymentPriorityType?: string;

  @Check('char_length("description") <= 200')
  @Column({ nullable: true, type: 'text' })
  description?: string;

  @Check('char_length("traceId") <= 36 ')
  @Column({ nullable: true, type: 'text' })
  traceId?: string;

  @Check('char_length("hash") <= 256')
  @Column({ type: 'text', nullable: true })
  hash?: string;

  @BeforeInsert()
  defaultValues() {
    this.status = this.status ?? 'CREATED';
  }

  toDomain(): any {
    return <any>{
      id: this.id,
      status: this.status,
      amount: this.amount,
      traceId: this.traceId,
      withdrawalAmount: this.withdrawalAmount,
      changeAmount: this.changeAmount,
      originalSchedulerId: this.originalSchedulerId,
      userId: this.userId,
      endToEndId: this.endToEndId,
      conciliated: this.conciliated,
      profileId: this.profileId,
      endToEndIdOriginal: this.endToEndIdOriginal,
      transactionIdOriginal: this.transactionIdOriginal,
      previousOriginalTransactionId: this.previousOriginalTransactionId,
      transactionId: this.transactionId,
      errorReason: this.errorReason,
      refusalReason: this.refusalReason,
      isUndone: this.isUndone,
      isCanceled: this.isCanceled,
      isInternal: this.isInternal,
      providerId: this.providerId,
      referenceId: this.referenceId,
      origin: this.origin,
      isInternalCancelation: this.isExternalCancelation,
      paymentPurpose: this.paymentPurpose,
      paymentPriority: this.paymentPriority,
      paymentPriorityType: this.paymentPriorityType,
      idempotenceKey: this.idempotenceKey,
      createdAt: this.createdAt,
      withdrawAccountId: this.account.toString(),
      error: this.error,
      settledAt: this.settledAt,
      externalPaymentDate: this.externalPaymentDate,
      assetId: this.assetId,
      isRefund: this.isRefund,
      account: this.account.toString(),
      actionBatchId: this.actionBatchId,
      originalTransactionId: this.originalTransactionId,
      description: this.description,
      sender: {
        bankName: this.sender?.bankName,
        bankCode: this.sender?.bankCode,
        bankAgency: this.sender.bankAgency,
        ispb: this.sender.ispb,
        bankAgencyDigit: this.sender?.bankAgencyDigit,
        bankAccount: this.sender.bankAccount,
        bankAccountDigit: this.sender.bankAccountDigit,
        bankAccountType: this.sender?.bankAccountType,
        document: this.sender.document,
        name: this.sender.name,
      },
      recipient: {
        bankName: this.recipient?.bankName,
        bankCode: this.recipient?.bankCode,
        ispb: this.recipient.ispb,
        bankAccountType: this.recipient?.bankAccountType,
        bankAgency: this.recipient.bankAgency,
        bankAgencyDigit: this.recipient?.bankAgencyDigit,
        bankAccount: this.recipient.bankAccount,
        bankAccountDigit: this.recipient.bankAccountDigit,
        document: this.recipient.document,
        name: this.recipient.name,
      },
    };
  }
}
