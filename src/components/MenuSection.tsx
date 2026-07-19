import type { MenuItem } from '../types';
type Props = {
  items: MenuItem[];
  onAdd: (item: MenuItem) => void;
};
function MenuSection({ items, onAdd }: Props) {
  const coffee = items.filter((item) => item.category === 'coffee');
  const desserts = items.filter((item) => item.category === 'dessert');
  const renderItem = (item: MenuItem) => (
    <div
      key={item.id}
      className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100"
    >
      <div>
        <p className="font-medium text-gray-800">{item.name}</p>
        <p className="text-sm text-gray-400">{item.price} ₽</p>
      </div>
      <button
        onClick={() => onAdd(item)}
        className="bg-violet-700 text-white w-9 h-9 rounded-full text-xl hover:bg-violet-600 transition cursor-pointer"
      >
        +
      </button>
    </div>
  );
  return (
    <section id="menu" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Кофе</h2>
      <div className="grid gap-4 mb-12">{coffee.map(renderItem)}</div>
      <h2 className="text-2xl font-bold mb-8">Десерты</h2>
      <div className="grid gap-4">{desserts.map(renderItem)}</div>
    </section>
  );
}
export default MenuSection;
