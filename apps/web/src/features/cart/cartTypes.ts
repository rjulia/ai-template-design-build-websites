export type CartItem = {
  id: string;
  name: string;
  imageUrl: string;
  priceLabel: string;
  unitPrice: number;
  currencyPrefix: string;
  quantity: number;
  href?: string;
};

export type CartEntryPayload = {
  id: string;
  name: string;
  imageUrl: string;
  priceLabel: string;
  quantity?: number;
  href?: string;
};

export type CartState = {
  isOpen: boolean;
  items: CartItem[];
};
