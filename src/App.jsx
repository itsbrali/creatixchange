import React from "react";
import Register from './RegisterTemporal';

function App() {
  return <Register />;
}

function CreatiXchangeLanding() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="text-center py-20 bg-white shadow-md">
        <h1 className="text-5xl font-bold mb-6">Intercambia talento creativo</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          ¿Eres guionista, músico, actor o editor? En CreatiXchange puedes conectar con otros artistas y colaborar sin dinero. Solo talento.
        </p>
        <a href="#registro" className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition">
          Únete gratis
        </a>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Crea tu perfil</h3>
            <p>Cuéntanos qué sabes hacer y qué necesitas: música, edición, fotografía, etc.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Encuentra a tu equipo</h3>
            <p>Explora perfiles, publica proyectos o únete a ideas en marcha.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Trueque creativo</h3>
            <p>Colabora sin dinero. Tú me haces el cartel, yo te grabo el corto. Así de simple.</p>
          </div>
        </div>
      </section>

      <section id="registro" className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Únete a la red creativa</h2>
        <p className="text-lg mb-8">
          Empieza hoy a colaborar con artistas como tú. El arte no necesita billetes.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center">
          <input type="email" placeholder="Tu correo electrónico" className="p-3 rounded-l-full w-full sm:w-2/3 mb-4 sm:mb-0" required />
          <button className="bg-white text-indigo-600 p-3 rounded-r-full font-semibold hover:bg-gray-100 transition">
            Empezar
          </button>
        </form>
      </section>

      <footer className="py-10 text-center text-gray-600 bg-gray-200 text-sm">
        © 2025 CreatiXchange · Plataforma de trueque creativo para artistas
      </footer>
    </div>
  );
}

export default CreatiXchangeLanding;
