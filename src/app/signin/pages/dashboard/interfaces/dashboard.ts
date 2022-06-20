import { ISalle } from '../../sales/interfaces/sales';

export interface IDashboard {
  products: {
    register: number;
    best_sellers: ISalle[];
    less_sold: ISalle[];
  };
  providers: number;
  sale: ISalle[];
}
