import { useState } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import { menu } from './data/menu';
import type { CartItem, MenuItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
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

  return (
    <>
      <Header />
      <main>
        <Hero></Hero>
        <MenuSection items={menu} onAdd={handleAdd} />
        <Cart items={cart} onRemove={handleRemove} />
      </main>
      <Footer />
    </>
  );
}
export default App;
