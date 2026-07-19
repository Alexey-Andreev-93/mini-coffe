import { useState } from 'react';
import Cart from './components/Cart';
import Check from './components/Check';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import { menu } from './data/menu';
import type { CartItem, MenuItem, Order } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemove = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = (name: string) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const id = `#${String(Date.now()).slice(-4)}`;
    const newOrder: Order = {
      id,
      items: [...cart],
      total,
      name,
      createdAt: new Date().toISOString(),
    };
    setOrder(newOrder);
    setCart([]);
    setShowForm(false);
  };

  const handleNewOrder = () => {
    setOrder(null);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  if (order) {
    return (
      <>
        <Header />
        <Check order={order} onNewOrder={handleNewOrder} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuSection items={menu} onAdd={handleAdd} />
        {showForm ? (
          <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold mb-4 text-stone-800">📝 Оформление заказа</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const input = form.elements.namedItem('name') as HTMLInputElement;
                handleCheckout(input.value.trim() || 'Гость');
              }}
              className="space-y-4 max-w-md"
            >
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                required
                className="w-full border border-amber-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <p className="text-sm text-stone-400">После оформления вы получите номер чека</p>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-amber-700 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition cursor-pointer"
                >
                  ✅ Подтвердить заказ
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-stone-400 hover:text-stone-600 transition cursor-pointer"
                >
                  Назад
                </button>
              </div>
            </form>
          </section>
        ) : (
          <>
            <Cart items={cart} onRemove={handleRemove} />
            {cart.length > 0 && (
              <div className="max-w-4xl mx-auto px-4 pb-16 text-center">
                <button
                  onClick={handleShowForm}
                  className="bg-amber-700 text-white px-10 py-3 rounded-full font-medium text-lg hover:bg-amber-600 transition cursor-pointer"
                >
                  Оформить заказ
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
