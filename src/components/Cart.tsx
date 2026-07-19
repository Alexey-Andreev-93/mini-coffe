import type { CartItem } from '../types'

type Props = {
  items: CartItem[]
  onRemove: (id: string) => void
}

function Cart({ items, onRemove }: Props) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4 text-stone-800">🛒 Корзина</h2>
        <p className="text-stone-400">Корзина пуста</p>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 my-8 bg-stone-50 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-stone-800">🛒 Корзина</h2>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 py-3 border-b border-amber-200/50"
        >
          <span className="flex-1 font-medium text-stone-800">{item.name}</span>
          <span className="bg-amber-100 text-amber-800 text-sm px-2 py-0.5 rounded-full">
            × {item.quantity}
          </span>
          <span className="w-20 text-right font-medium text-stone-800">
            {item.price * item.quantity} ₽
          </span>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-400 hover:text-red-600 cursor-pointer text-lg transition w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 pt-4 text-lg font-bold text-stone-800">
        <span>Итого</span>
        <span>{total} ₽</span>
      </div>
    </section>
  )
}

export default Cart
