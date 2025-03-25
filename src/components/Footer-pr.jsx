import { useState } from "preact/hooks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header class="fixed bottom-0 left-0 w-full bg-white text-black shadow-2xl  flex justify-between items-center z-50">
      <div class="logo">
        <img src="/src/images/sada.png" alt="Logo" class="h-10" />
      </div>

      <nav class="hidden md:flex space-x-6 text-blue-600 hover:blue-500 uppercase text-2xl font-bold">
            <a href="/" class="hover:text-amber-600">Home</a>
            <a href="/" class="hover:text-amber-600">Contactar</a>
            <a href="/" class="hover:text-amber-600">Escuela deportiva</a>
            <a href="/" class="hover:text-amber-600">Club</a>
            <a href="/" class="hover:text-amber-600">Horarios y tarifas</a>
            <a href="/" class="hover:text-amber-600">Competicion</a>
            <a href="/" class="hover:text-amber-600">Material de esgrima</a>
      </nav>

      <button class="md:hidden menu-btn text-5xl text-blue-600" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav
        class={`uppercase absolute top-16 right-6 bg-white text-blue-600 w-48 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <a href="/" class="block px-4 py-2 hover:text-amber-600">Home</a>
        <a href="/servicios" class="block px-4 py-2 hover:text-amber-600">Contactar</a>
        <a href="/contacto" class="block px-4 py-2 hover:text-amber-600">Escuela deportiva</a>
        <a href="/" class="block px-4 py-2 hover:text-amber-600">Club</a>
        <a href="/servicios" class="block px-4 py-2 hover:text-amber-600">Horarios y tarifas</a>
        <a href="/contacto" class="block px-4 py-2 hover:text-amber-600">Competicion</a>
        <a href="/contacto" class="block px-4 py-2 hover:text-amber-600">Material de esgrima</a>
      </nav>
    </header>
  );
}
