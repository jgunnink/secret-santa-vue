export interface Santa {
  name: string;
  email: string;
  givingTo?: string;
}

export interface List {
  name: string;
  value?: number;
  giftDay?: Date;
  organiserName?: string;
}
