function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-200 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Brew & Bean</p>
        <p className="mt-1">Уютная кофейня в центре города</p>
      </div>
    </footer>
  )
}

export default Footer
