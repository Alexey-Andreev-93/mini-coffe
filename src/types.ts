export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: 'coffee' | 'dessert';
};

export type CartItem = MenuItem & {
  quantity: number;
};

export type Order = {
  id: string;
  item: CartItem[];
  total: number;
  name: string;
  createdAt: string;
};
