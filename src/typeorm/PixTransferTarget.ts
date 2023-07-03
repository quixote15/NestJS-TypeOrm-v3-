export interface BasicPixTarget {
  bankName?: string;
  bankCode?: string;
  bankAgency?: string;
  ispb?: string;
  bankAgencyDigit?: string;
  bankAccount?: string;
  bankAccountDigit?: string;
  name: string;
  document: string;
  addressingKey?: TargetAddressingKey;
}

export interface PixTransferTarget {
  bankCode?: string;
  bankName?: string;
  ispb?: string;
  bankAgency: string;
  bankAgencyDigit?: string;
  bankAccount: string;
  bankAccountDigit?: string;
  name: string;
  document: string;
  addressingKey?: TargetAddressingKey;
}

export interface TargetAddressingKey {
  type: string;
  value: string;
}

export interface PixTransferTargetByKey {
  name: string;
  document: string;
  bankCode: string;
}
