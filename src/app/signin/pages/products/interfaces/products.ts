import { InputPhotoValue } from 'src/app/shared/components/inputs/input-photo/input-photo.component';

export interface IProduct {
  _id: string;
  createdAt: string;
  description: string;
  name: string;
  updatedAt: string;
  photo: string;
  price_buy: number;
  price_sale: number;
}
export interface IProductCreate {
  description: string;
  name: string;
  photo: InputPhotoValue;
  price_buy: number;
  price_sale: number;
}
