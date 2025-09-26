import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unlayer.com/projects%2F237%2F1644003129108-logo-acred.png"
            alt="Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold">Semillero Pandor - Ai - Zcboy</h1>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="border p-2 rounded bg-blue-600 hover:bg-blue-500"
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Menu móvil alineado a la izquierda */}
      {open && (
        <div className="bg-blue-700 text-white p-4 w-48 flex flex-col gap-4 text-left absolute top-16 left-0 h-full shadow-lg z-50">
          <a href="#mision" onClick={() => setOpen(false)} className="hover:underline">Misión</a>
          <a href="#vision" onClick={() => setOpen(false)} className="hover:underline">Visión</a>
          <a href="#objetivos" onClick={() => setOpen(false)} className="hover:underline">Objetivos</a>
          <a href="#integrantes" onClick={() => setOpen(false)} className="hover:underline">Integrantes</a>
        </div>
      )}

      {/* Contenido */}
      <main className="p-6 max-w-4xl mx-auto space-y-10">
        <section id="mision">
          <h2 className="text-2xl font-bold mb-2">Misión</h2>
          <p>
            Promover la investigación formativa y el desarrollo de soluciones innovadoras
            basadas en inteligencia artificial, que respondan a problemáticas territoriales y
            productivas, mediante el uso de herramientas digitales, la colaboración
            interdisciplinaria y el pensamiento creativo.
          </p>
        </section>

        <section id="vision">
          <h2 className="text-2xl font-bold mb-2">Visión</h2>
          <p>
            Ser reconocido a nivel regional y nacional como un referente en la investigación
            formativa aplicada a la inteligencia artificial para la transformación digital de los
            territorios, consolidando un ecosistema colaborativo que potencie la generación de
            nuevo conocimiento y la formación de talento humano innovador.
          </p>
        </section>

        <section id="objetivos">
          <h2 className="text-2xl font-bold mb-2">Objetivos Específicos</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Diseñar proyectos de investigación formativa que integren inteligencia artificial.</li>
            <li>Fortalecer capacidades técnicas y científicas de los integrantes del semillero.</li>
            <li>Fomentar la apropiación social del conocimiento y participación en eventos científicos.</li>
          </ul>
        </section>

        <section id="integrantes">
          <h2 className="text-2xl font-bold mb-2">Integrantes</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Elizabeth Johana Montaña Acevedo</strong> – Líder del semillero</li>
            <li><strong>Andrés Felipe Morales Vega</strong> – Estudiante Semilla</li>
            <li><strong>Carlos Mauricio Neira Nonsoque</strong> – Estudiante Semilla</li>
            <li><strong>Yesid Stiven Toloza Ruiz</strong> – Estudiante Semilla</li>
            <li><strong>Dario Rolando Rojas Lopez</strong> – Dinamizador semilla</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
