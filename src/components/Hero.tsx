function Hero() {
  return (
    <section id="about" className="bg-gradient-to-br from-violet-800 to-violet-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Кофе, который хочется пить каждый день</h2>
        <p className="text-lg text-violet-200 mb-8 max-w-xl mx-auto">
          Brew & Bean — небольшая кофейня в центре города. Свежая обжарка, домашние десерты, уютная
          атмосфера.
        </p>
        <a
          href="#menu"
          className="inline-block bg-amber-500 text-violet-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-400 transition"
        >
          Посмотреть меню
        </a>
      </div>
    </section>
  );
}
export default Hero;
