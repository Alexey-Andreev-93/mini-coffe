function Header() {
  return (
    <header className="bg-violet-800 text-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">☕ Brew & Bean</h1>
        <nav className="flex gap-6">
          <a href="#menu" className="hover:text-violet-300 transition">
            Меню
          </a>
          <a href="#about" className="hover:text-violet-300 transition">
            О нас
          </a>
          <a href="#contacts" className="hover:text-violet-300 transition">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
