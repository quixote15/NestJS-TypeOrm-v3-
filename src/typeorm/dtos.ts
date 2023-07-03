import { BasicPixTarget } from './PixTransferTarget';

export interface ConciliationParams {
  referenceId?: string;
  providerId?: string;
  origin?: string;
  profileId?: string;
}

interface NewPixCashOutMandatoryParams {
  bankProvider: string;
  tenantId: string;
}

export interface PixCashOutManualRequest
  extends ConciliationParams,
    NewPixCashOutMandatoryParams {
  recipient: BasicPixTarget;
  amount: string;
  description?: string;
}

export interface PixCashOutManualParams
  extends PixCashOutManualRequest,
    NewPixCashOutMandatoryParams {
  originalSchedulerId?: string;
  assetId: string;
  account: number;
  userId: string;
  sender: BasicPixTarget;
  _metadata?: any;
}

export interface NewPixRefundParams
  extends ConciliationParams,
    NewPixCashOutMandatoryParams {
  transactionIdOriginal: string;
  endToEndIdOriginal?: string;
  previousOriginalTransactionId: string;
  assetId: string;
  isRefund: true;
  account: string;
  userId: string;
  recipient: BasicPixTarget;
  amount: string;
  description?: string;
  sender: BasicPixTarget;
  refundCode: string;
  refundReason: string;
  _metadata?: any;
}

export interface PixCashOutByKeyParams
  extends PixCashOutManualParams,
    NewPixCashOutMandatoryParams {
  endToEndId: string;
  _metadata?: any;
}

export type NewPixCashOutParams =
  | PixCashOutManualParams
  | PixCashOutByKeyParams;
