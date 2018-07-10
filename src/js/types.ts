type Currenty = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CAD' | 'CNY' | 'JPY' | 'KRW' | 'HKD' | 'TWD';

export interface Options {
  app: string;
  subject: string;
  charge_no: string;
  amount: string;
  currency?: Currenty;
  name?: string;
  description?: string;
  image?: string;
}

