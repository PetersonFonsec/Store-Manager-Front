export interface ISalle {
  _id: string;
  price: number;
  quantity: number;
  createdAt: string;
  product: {
    _id: string;
    name: string;
    price_buy: number;
    price_sale: number;
    description: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ISalleCreate {
  product_id: string;
  quantity: number;
  price: number;
}
