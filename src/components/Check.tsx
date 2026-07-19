import type { Order } from '../types';
type Props = {
  order: Order;
  onNewOrder: () => void;
};
function Check({ order, onNewOrder }: Props) {
  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="bg-stone-50 rounded-2xl p-8 border border-amber-200/50">
        <p className="text-4xl mb-2">☕</p>
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Спасибо, {order.name}!</h2>
        <p className="text-stone-400 mb-6">Ваш заказ принят</p>
        <div className="bg-white rounded-xl p-4 mb-6 border border-amber-200/50">
          <p className="text-sm text-stone-400 mb-1">Номер чека</p>
          <p className="text-3xl font-bold text-amber-800">{order.id}</p>
        </div>
        <div className="text-left mb-6">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between py-2 border-b border-stone-200 text-stone-700"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{item.price * item.quantity} ₽</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-lg font-bold text-stone-800 mb-8">
          <span>Итого</span>
          <span>{order.total} ₽</span>
        </div>
        <button
          onClick={onNewOrder}
          className="bg-amber-700 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition cursor-pointer"
        >
          Сделать новый заказ
        </button>
      </div>
    </section>
  );
}
export default Check;
