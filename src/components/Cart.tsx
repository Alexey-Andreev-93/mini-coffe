import type { CartItem } from '../types';
type Props = {
  items: CartItem[];
  onRemove: (id: string) => void;
};
function Cart({ items, onRemove }: Props) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (items.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">Корзина</h2>
        <p className="text-gray-400">Корзина пуста</p>
      </section>
    );
  }
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-6">Корзина</h2>
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 py-3 border-b border-gray-100">
          <span className="flex-1 font-medium text-gray-800">{item.name}</span>
          <span className="text-sm text-gray-400">× {item.quantity}</span>
          <span className="w-20 text-right font-medium">{item.price * item.quantity} ₽</span>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-400 hover:text-red-600 cursor-pointer text-lg transition w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      ))}
      <div className="flex justify-between items-center mt-6 pt-4 text-lg font-bold">
        <span>Итого</span>
        <span>{total} ₽</span>
      </div>
    </section>
  );
}
export default Cart;
