import { useState } from 'react';
import { Block00 } from './sections/Block00';
import { Block01 } from './sections/Block01';
import { Block02 } from './sections/Block02';
import { Block03 } from './sections/Block03';
import { Block04 } from './sections/Block04';
import { Block05 } from './sections/Block05';
import { Block06 } from './sections/Block06';
import { Block07 } from './sections/Block07';
import { Block08 } from './sections/Block08';
import { Block09 } from './sections/Block09';
import { Block10 } from './sections/Block10';
import { Block11 } from './sections/Block11';
import { Block12 } from './sections/Block12';

const sections = [
  { id: 'bloque-00', title: 'Portada y Ficha Técnica', icon: 'fa-file-alt' },
  { id: 'bloque-01', title: 'Introducción y Justificación', icon: 'fa-book-open' },
  { id: 'bloque-02', title: 'Objetivos', icon: 'fa-bullseye' },
  { id: 'bloque-03', title: 'Contenidos', icon: 'fa-list-alt' },
  { id: 'bloque-04', title: 'Unidades Didácticas', icon: 'fa-chalkboard-teacher' },
  { id: 'bloque-05', title: 'Evaluación y Calificación', icon: 'fa-clipboard-check' },
  { id: 'bloque-06', title: 'Catálogo de Rúbricas', icon: 'fa-star-half-alt' },
  { id: 'bloque-07', title: 'Metodología y Diversidad', icon: 'fa-users' },
  { id: 'bloque-08', title: 'Actividades Complementarias', icon: 'fa-music' },
  { id: 'bloque-09', title: 'Evaluación de la Programación', icon: 'fa-search' },
  { id: 'bloque-10', title: 'Bibliografía y Repertorio', icon: 'fa-book' },
  { id: 'bloque-11', title: 'Trazabilidad Normativa', icon: 'fa-link' },
  { id: 'bloque-12', title: 'Despliegue Web', icon: 'fa-globe' },
];

function App() {
  const [activeSection, setActiveSection] = useState('bloque-00');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'bloque-00': return <Block00 />;
      case 'bloque-01': return <Block01 />;
      case 'bloque-02': return <Block02 />;
      case 'bloque-03': return <Block03 />;
      case 'bloque-04': return <Block04 />;
      case 'bloque-05': return <Block05 />;
      case 'bloque-06': return <Block06 />;
      case 'bloque-07': return <Block07 />;
      case 'bloque-08': return <Block08 />;
      case 'bloque-09': return <Block09 />;
      case 'bloque-10': return <Block10 />;
      case 'bloque-11': return <Block11 />;
      case 'bloque-12': return <Block12 />;
      default: return <Block00 />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 text-white overflow-y-auto scrollbar-thin flex-shrink-0`}>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-600">
            <i className="fas fa-music text-2xl text-amber-300"></i>
            <div>
              <h1 className="text-sm font-bold leading-tight">Programación Didáctica</h1>
              <p className="text-xs text-amber-300">Clarinete · EP · 2026/2027</p>
            </div>
          </div>
          <nav>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all duration-200 text-sm ${
                  activeSection === section.id
                    ? 'bg-amber-600 text-white shadow-lg font-semibold'
                    : 'text-amber-100 hover:bg-amber-700/50 hover:text-white'
                }`}
              >
                <i className={`fas ${section.icon} w-5 text-center`}></i>
                <span className="truncate">{section.title}</span>
              </button>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-amber-600">
            <p className="text-xs text-amber-300 text-center">Conservatorio Profesional de Música</p>
            <p className="text-xs text-amber-400 text-center">Comunidad Autónoma de Extremadura</p>
            <p className="text-xs text-amber-300 text-center mt-1">Curso 2026/2027</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-amber-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
            <span className="text-sm text-amber-700 font-medium">
              <i className={`fas ${sections.find(s => s.id === activeSection)?.icon} mr-2`}></i>
              {sections.find(s => s.id === activeSection)?.title}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">v1.0 · Septiembre 2026</span>
            <div className="flex gap-2">
              <span className="badge badge-direct">Decreto 111/2007</span>
              <span className="badge badge-complementary">LOMLOE</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="border-t border-amber-200 bg-amber-50 px-6 py-4 text-center">
          <p className="text-xs text-amber-700">
            Programación Didáctica de Clarinete · Enseñanzas Profesionales de Música · Extremadura · Curso 2026/2027
          </p>
          <p className="text-xs text-amber-600 mt-1">
            Departamento de Viento-Madera · Normativa: Decreto 111/2007 · Decreto 54/2022 · LOMLOE
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
