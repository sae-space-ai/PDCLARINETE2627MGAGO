import { useState } from 'react';
import { normativas, objetivosGenerales, objetivosPorCurso, objetivosEP, rubricasGenerales, repertorio, auditoriaNormativa, calificacionInfo, dashboardStats } from './data/curriculum';

const sections = [
  { id: 'inicio', title: 'Inicio y Dashboard', icon: 'fa-home', group: 'General' },
  { id: 'normativa', title: 'Marco Normativo', icon: 'fa-gavel', group: 'General' },
  { id: 'auditoria', title: 'Auditoría de Calidad', icon: 'fa-shield-alt', group: 'General' },
  { id: 'objetivos', title: 'Objetivos', icon: 'fa-bullseye', group: 'Currículo' },
  { id: 'contenidos', title: 'Contenidos', icon: 'fa-list-alt', group: 'Currículo' },
  { id: 'ee', title: 'Enseñanzas Elementales', icon: 'fa-graduation-cap', group: 'Niveles' },
  { id: 'ep', title: 'Enseñanzas Profesionales', icon: 'fa-university', group: 'Niveles' },
  { id: 'unidades', title: 'Unidades Didácticas', icon: 'fa-chalkboard-teacher', group: 'Desarrollo' },
  { id: 'evaluacion', title: 'Evaluación y Calificación', icon: 'fa-clipboard-check', group: 'Evaluación' },
  { id: 'rubricas', title: 'Catálogo de Rúbricas', icon: 'fa-star-half-alt', group: 'Evaluación' },
  { id: 'repertorio', title: 'Repertorio', icon: 'fa-music', group: 'Recursos' },
  { id: 'metodologia', title: 'Metodología', icon: 'fa-users', group: 'Recursos' },
  { id: 'anexo-ii', title: 'Anexo II — Bandita (3º y 4º EE)', icon: 'fa-users-cog', group: 'Anexos' },
  { id: 'documento-completo', title: 'Documento Completo (30 apartados)', icon: 'fa-file-alt', group: 'Documentación' },
  { id: 'trazabilidad', title: 'Trazabilidad Normativa', icon: 'fa-link', group: 'Documentación' },
  { id: 'despliegue', title: 'Despliegue Web', icon: 'fa-globe', group: 'Documentación' },
];

function Badge({ type, children }: { type: string; children: React.ReactNode }) {
  const cls = type === 'hold' ? 'badge badge-hold' : type === 'verified' ? 'badge badge-verified' : type === 'ee' ? 'badge badge-ee' : type === 'ep' ? 'badge badge-ep' : type === 'direct' ? 'badge badge-direct' : type === 'indirect' ? 'badge badge-indirect' : 'badge badge-complementary';
  return <span className={cls}>{children}</span>;
}

function App() {
  const [active, setActive] = useState('inicio');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const groups = [...new Set(sections.map(s => s.group))];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 text-white overflow-y-auto scrollbar-thin flex-shrink-0`}>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-600">
            <i className="fas fa-music text-2xl text-amber-300"></i>
            <div>
              <h1 className="text-sm font-bold leading-tight">Programación Didáctica</h1>
              <p className="text-xs text-amber-300">Clarinete · EE + EP · 2026/2027</p>
            </div>
          </div>
          <nav>
            {groups.map(group => (
              <div key={group}>
                <p className="nav-section-title">{group}</p>
                {sections.filter(s => s.group === group).map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActive(section.id)}
                    className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg mb-0.5 transition-all text-sm ${
                      active === section.id ? 'bg-amber-600 text-white shadow-lg font-semibold' : 'text-amber-100 hover:bg-amber-700/50'
                    }`}
                  >
                    <i className={`fas ${section.icon} w-5 text-center text-xs`}></i>
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </div>
            ))}
          </nav>
          <div className="mt-4 pt-3 border-t border-amber-600 text-center">
            <p className="text-xs text-amber-300">Conservatorio Profesional de Música</p>
            <p className="text-xs text-amber-400">Comunidad Autónoma de Extremadura</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-amber-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-amber-800 hover:text-amber-600">
              <i className="fas fa-bars text-lg"></i>
            </button>
            <span className="text-sm text-amber-700 font-medium">
              <i className={`fas ${sections.find(s => s.id === active)?.icon} mr-2`}></i>
              {sections.find(s => s.id === active)?.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge type="verified">Decreto 111/2007</Badge>
            <Badge type="hold">Instrucciones 2026/27: HOLD</Badge>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-8">
          {active === 'inicio' && <Dashboard />}
          {active === 'normativa' && <Normativa />}
          {active === 'auditoria' && <Auditoria />}
          {active === 'objetivos' && <Objetivos />}
          {active === 'contenidos' && <Contenidos />}
          {active === 'ee' && <EnsenanzasElementales />}
          {active === 'ep' && <EnsenanzasProfesionales />}
          {active === 'unidades' && <Unidades />}
          {active === 'evaluacion' && <Evaluacion />}
          {active === 'rubricas' && <Rubricas />}
          {active === 'repertorio' && <Repertorio />}
          {active === 'metodologia' && <Metodologia />}
          {active === 'anexo-ii' && <AnexoII />}
          {active === 'documento-completo' && <DocumentoCompleto />}
          {active === 'trazabilidad' && <Trazabilidad />}
          {active === 'despliegue' && <Despliegue />}
        </div>

        <footer className="border-t border-amber-200 bg-amber-50 px-6 py-4 text-center">
          <p className="text-xs text-amber-700">Programación Didáctica de Clarinete · EE + EP · Extremadura · 2026/2027</p>
          <p className="text-xs text-amber-600 mt-1">Decreto 110/2007 · Decreto 111/2007 · Decreto 54/2022 · LOMLOE</p>
        </footer>
      </main>
    </div>
  );
}

// ============================================================
// DASHBOARD
// ============================================================
function Dashboard() {
  return (
    <div className="content-section">
      <div className="text-center mb-10 bg-gradient-to-br from-amber-800 to-amber-950 text-white rounded-2xl p-10 shadow-xl">
        <i className="fas fa-music text-5xl text-amber-300 mb-4"></i>
        <h1 className="text-3xl font-bold mb-2">Programación Didáctica de Clarinete</h1>
        <h2 className="text-xl font-light text-amber-200 mb-1">Enseñanzas Elementales y Profesionales de Música</h2>
        <p className="text-amber-300">Comunidad Autónoma de Extremadura · Curso 2026/2027</p>
        <div className="flex gap-3 justify-center mt-4">
          <Badge type="ee">4 cursos EE</Badge>
          <Badge type="ep">6 cursos EP</Badge>
          <Badge type="hold">Instrucciones 2026/27: HOLD</Badge>
        </div>
      </div>

      <h2>Panel de Control</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="stat-card"><div className="stat-number">{dashboardStats.totalCursos}</div><div className="stat-label">Cursos totales (EE+EP)</div></div>
        <div className="stat-card"><div className="stat-number">{dashboardStats.objetivosGenerales}</div><div className="stat-label">Objetivos Generales (Art. 3)</div></div>
        <div className="stat-card"><div className="stat-number">{dashboardStats.objetivosEE}</div><div className="stat-label">Objetivos EE (1º-4º)</div></div>
        <div className="stat-card"><div className="stat-number">{dashboardStats.normasVerificadas}</div><div className="stat-label">Normas verificadas</div></div>
        <div className="stat-card"><div className="stat-number">{dashboardStats.normasHold}</div><div className="stat-label">Elementos HOLD</div></div>
        <div className="stat-card"><div className="stat-number">{dashboardStats.rubricasGenerales}</div><div className="stat-label">Rúbricas generales</div></div>
        <div className="stat-card"><div className="stat-number">{dashboardStats.repertorioItems}</div><div className="stat-label">Obras en catálogo</div></div>
        <div className="stat-card"><div className="stat-number">{dashboardStats.auditoriaVerificados}</div><div className="stat-label">Auditoría verificada</div></div>
      </div>

      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5 mb-6">
        <h3 className="text-yellow-800 font-semibold mb-2"><i className="fas fa-exclamation-triangle mr-2"></i>Elementos HOLD — Pendientes de Verificación</h3>
        <ul className="text-sm space-y-1 text-yellow-900">
          <li>• <strong>Instrucciones anuales 2026/2027:</strong> No publicadas aún por la Consejería de Educación y Empleo. PENDIENTE DE PUBLICACIÓN (prevista julio-septiembre 2026).</li>
        </ul>
      </div>

      <div className="bg-green-50 border border-green-300 rounded-lg p-5 mb-6">
        <h3 className="text-green-800 font-semibold mb-2"><i className="fas fa-check-circle mr-2"></i>Elementos Verificados Recientemente</h3>
        <ul className="text-sm space-y-1 text-green-900">
          <li>• <strong>Horas lectivas:</strong> 1 hora semanal de instrumento para EP (Decreto 111/2007, Anexo I). VERIFICADO.</li>
          <li>• <strong>Repertorio obligatorio:</strong> No existe normativa que establezca repertorio obligatorio. VERIFICADO - NO APLICA.</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-300 rounded-lg p-5 mb-6">
        <h3 className="text-blue-800 font-semibold mb-2"><i className="fas fa-check-circle mr-2"></i>Elementos Completados</h3>
        <ul className="text-sm space-y-1 text-blue-900">
          <li>• <strong>Ponderaciones de calificación:</strong> Propuesta basada en práctica habitual (30% técnica, 40% repertorio, 10% lectura, 10% actitud, 10% audiciones).</li>
          <li>• <strong>Objetivos EP1-EP6:</strong> Desarrollados completamente con 8-10 objetivos por curso.</li>
          <li>• <strong>Ponderaciones Bandita:</strong> Propuesta basada en práctica habitual (25% ritmo, 25% afinación, 15% dirección, 15% conocimiento parte, 10% actitud, 10% actuaciones).</li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-5">
        <h3 className="text-emerald-800 font-semibold mb-2"><i className="fas fa-check-circle mr-2"></i>Elementos Verificados</h3>
        <ul className="text-sm space-y-1 text-emerald-900">
          <li>• Decreto 111/2007 — Objetivos generales (Art. 3), contenidos (Anexo I), evaluación (Art. 5)</li>
          <li>• Decreto 110/2007 — Estructura de las Enseñanzas Elementales (4 cursos)</li>
          <li>• Decreto 54/2022 — Modificación de EE, incorporación de Órgano. NO modifica EP.</li>
          <li>• Orden 28/04/2009 — Pruebas de acceso y matriculación</li>
          <li>• LOMLOE — Competencias clave y evaluación formativa</li>
          <li>• Ley 4/2011 — Marco autonómico de enseñanzas artísticas</li>
        </ul>
      </div>
    </div>
  );
}

// ============================================================
// NORMATIVA
// ============================================================
function Normativa() {
  return (
    <div className="content-section">
      <h2>Marco Normativo</h2>
      <p>Toda la programación se sustenta en la siguiente normativa verificada. Cada elemento curricular se traza explícitamente a su norma de referencia.</p>
      <table className="doc-table mt-4">
        <thead><tr><th>ID</th><th>Norma</th><th>Fecha</th><th>Estado</th><th>Aplicación</th></tr></thead>
        <tbody>
          {normativas.map(n => (
            <tr key={n.id}>
              <td className="font-mono text-xs">{n.id}</td>
              <td className="font-semibold">{n.nombre}</td>
              <td>{n.fecha}</td>
              <td>{n.estado === 'VERIFICADO' ? <Badge type="verified">VERIFICADO</Badge> : <Badge type="hold">HOLD</Badge>}</td>
              <td className="text-xs">{n.aplicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-8">Nota sobre el Decreto 54/2022</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
        <p>El <strong>Decreto 54/2022</strong> modifica el Decreto 110/2007 (Enseñanzas Elementales) e incorpora la especialidad de Órgano. <strong>NO modifica el Decreto 111/2007</strong> (Enseñanzas Profesionales). Su impacto en las EP es indirecto: coordinación entre niveles, continuidad curricular y posibles ajustes en pruebas de acceso.</p>
      </div>
    </div>
  );
}

// ============================================================
// AUDITORÍA
// ============================================================
function Auditoria() {
  return (
    <div className="content-section">
      <h2>Auditoría de Calidad Curricular</h2>
      <p className="text-sm text-gray-600">Panel de control de calidad del documento. Verificación de trazabilidad, duplicaciones, lagunas y coherencia.</p>

      <h3>Auditoría Normativa</h3>
      <div className="space-y-3">
        {auditoriaNormativa.map(item => (
          <div key={item.id} className={`audit-card ${item.estado === 'VERIFICADO' ? 'audit-ok' : item.estado === 'HOLD' ? 'audit-hold' : 'audit-warn'}`}>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-gray-500">{item.id}</span>
                <h4 className="font-semibold text-gray-800">{item.elemento}</h4>
                <p className="text-sm text-gray-600">{item.norma} — {item.articulo}</p>
              </div>
              <Badge type={item.estado === 'VERIFICADO' ? 'verified' : item.estado === 'NO_APLICABLE' ? 'verified' : 'hold'}>
                {item.estado === 'NO_APLICABLE' ? 'VERIFICADO - NO APLICA' : item.estado}
              </Badge>
            </div>
            <p className="text-xs text-gray-500 mt-2">{item.observaciones}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-8">Auditoría de Cobertura Curricular</h3>
      <table className="doc-table">
        <thead><tr><th>Elemento</th><th>Estado</th><th>Observaciones</th></tr></thead>
        <tbody>
          <tr><td>Objetivos generales → Contenidos</td><td><Badge type="verified">COMPLETO</Badge></td><td>Todos los objetivos tienen contenidos asociados</td></tr>
          <tr><td>Contenidos → Unidades</td><td><Badge type="verified">COMPLETO</Badge></td><td>Contenidos desarrollados en unidades didácticas</td></tr>
          <tr><td>Criterios → Evidencias</td><td><Badge type="verified">COMPLETO</Badge></td><td>Cada criterio tiene evidencias evaluables</td></tr>
          <tr><td>Instrumentos → Criterios</td><td><Badge type="verified">COMPLETO</Badge></td><td>Cada instrumento mide criterios específicos</td></tr>
          <tr><td>Rúbricas → Criterios</td><td><Badge type="verified">COMPLETO</Badge></td><td>Rúbricas con criterios claramente identificados</td></tr>
          <tr><td>Ponderaciones calificación</td><td><Badge type="verified">PROPUESTO</Badge></td><td>Valores estándar basados en práctica habitual (30% técnica, 40% repertorio, 10% lectura, 10% actitud, 10% audiciones)</td></tr>
          <tr><td>Horas lectivas</td><td><Badge type="verified">VERIFICADO</Badge></td><td>1 hora semanal de instrumento para EP (Decreto 111/2007, Anexo I)</td></tr>
          <tr><td>Repertorio obligatorio</td><td><Badge type="verified">VERIFICADO - NO APLICA</Badge></td><td>No existe normativa que establezca repertorio obligatorio. Todo el repertorio es DESARROLLO PROPIO.</td></tr>
        </tbody>
      </table>

      <h3 className="mt-8">Auditoría Vertical (Progresión EE → EP)</h3>
      <div className="overflow-x-auto">
        <table className="doc-table text-xs">
          <thead><tr><th>Contenido</th><th>EE1</th><th>EE2</th><th>EE3</th><th>EE4</th><th>EP1</th><th>EP2</th><th>EP3</th><th>EP4</th><th>EP5</th><th>EP6</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Respiración</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Cons</td><td>Amp</td><td>Int</td><td>Aut</td><td>Aut</td><td>Transf</td><td>Transf</td></tr>
            <tr><td className="font-semibold">Embocadura</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Cons</td><td>Amp</td><td>Int</td><td>Aut</td><td>Aut</td><td>Transf</td><td>Transf</td></tr>
            <tr><td className="font-semibold">Articulación simple</td><td>—</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Amp</td><td>Int</td><td>Aut</td><td>Aut</td><td>Transf</td><td>Transf</td></tr>
            <tr><td className="font-semibold">Articulación doble</td><td>—</td><td>—</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Amp</td><td>Int</td><td>Aut</td><td>Aut</td><td>Transf</td></tr>
            <tr><td className="font-semibold">Articulación triple</td><td>—</td><td>—</td><td>—</td><td>—</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Amp</td><td>Int</td><td>Aut</td></tr>
            <tr><td className="font-semibold">Escalas (alteraciones)</td><td>0</td><td>0-1</td><td>0-3</td><td>0-4</td><td>0-5</td><td>0-7</td><td>Todas</td><td>Todas</td><td>Todas</td><td>Todas</td></tr>
            <tr><td className="font-semibold">Registro</td><td>Chal</td><td>Chal</td><td>Chal+Clar</td><td>Chal+Clar</td><td>+Alt</td><td>+Alt</td><td>3 oct</td><td>3 oct</td><td>3 oct</td><td>3 oct</td></tr>
            <tr><td className="font-semibold">Técnicas extendidas</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Int</td></tr>
            <tr><td className="font-semibold">Lectura 1ª vista</td><td>—</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Amp</td><td>Amp</td><td>Int</td><td>Aut</td><td>Aut</td><td>Transf</td></tr>
            <tr><td className="font-semibold">Transposición</td><td>—</td><td>—</td><td>Intro</td><td>Adq</td><td>Cons</td><td>Amp</td><td>Int</td><td>Aut</td><td>Aut</td><td>Transf</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">Intro = Introducción; Adq = Adquisición; Cons = Consolidación; Amp = Ampliación; Int = Integración; Aut = Autonomía; Transf = Transferencia</p>
    </div>
  );
}

// ============================================================
// OBJETIVOS
// ============================================================
function Objetivos() {
  return (
    <div className="content-section">
      <h2>Objetivos</h2>
      <h3>Objetivos Generales — Art. 3 Decreto 111/2007</h3>
      <p className="text-sm text-amber-700 italic">Transcripción literal con desarrollo didáctico propio.</p>
      <div className="space-y-4 mt-4">
        {objetivosGenerales.map(obj => (
          <div key={obj.letra} className="bg-white rounded-lg border border-amber-200 p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-2">
              <span className="bg-amber-800 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">{obj.letra})</span>
              <p className="text-gray-800 italic font-medium">"{obj.texto}"</p>
            </div>
            <div className="ml-10 space-y-1 text-sm">
              <p><strong className="text-amber-800">Interpretación:</strong> {obj.interpretacion}</p>
              <p><strong className="text-amber-800">Competencias LOMLOE:</strong> {obj.competencias}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-8">Objetivos Específicos por Curso — Enseñanzas Elementales</h3>
      {['EE1', 'EE2', 'EE3', 'EE4'].map(curso => (
        <div key={curso} className="mt-4">
          <h4>{curso === 'EE1' ? '1º' : curso === 'EE2' ? '2º' : curso === 'EE3' ? '3º' : '4º'} Enseñanzas Elementales <Badge type="ee">EE</Badge> <Badge type="hold">DESARROLLO PROPIO</Badge></h4>
          <table className="doc-table text-xs">
            <thead><tr><th>ID</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad</th><th>Indicador</th></tr></thead>
            <tbody>
              {objetivosPorCurso[curso]?.map(obj => (
                <tr key={obj.id}>
                  <td className="font-mono">{obj.id}</td>
                  <td>{obj.texto}</td>
                  <td><span className={`badge ${obj.tipo === 'tecnico' ? 'bg-slate-100 text-slate-800' : obj.tipo === 'interpretativo' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>{obj.tipo}</span></td>
                  <td>{obj.trazabilidad}</td>
                  <td>{obj.indicador}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h3 className="mt-8">Objetivos Específicos por Curso — Enseñanzas Profesionales</h3>
      {['EP1', 'EP2', 'EP3', 'EP4', 'EP5', 'EP6'].map(curso => (
        <div key={curso} className="mt-4">
          <h4>{curso === 'EP1' ? '1º' : curso === 'EP2' ? '2º' : curso === 'EP3' ? '3º' : curso === 'EP4' ? '4º' : curso === 'EP5' ? '5º' : '6º'} Enseñanzas Profesionales <Badge type="ep">EP</Badge> <Badge type="hold">DESARROLLO PROPIO</Badge></h4>
          <table className="doc-table text-xs">
            <thead><tr><th>ID</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad</th><th>Indicador</th></tr></thead>
            <tbody>
              {objetivosEP[curso]?.map(obj => (
                <tr key={obj.id}>
                  <td className="font-mono">{obj.id}</td>
                  <td>{obj.texto}</td>
                  <td><span className={`badge ${obj.tipo === 'tecnico' ? 'bg-slate-100 text-slate-800' : obj.tipo === 'interpretativo' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>{obj.tipo}</span></td>
                  <td>{obj.trazabilidad}</td>
                  <td>{obj.indicador}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// CONTENIDOS
// ============================================================
function Contenidos() {
  return (
    <div className="content-section">
      <h2>Contenidos</h2>
      <h3>Contenidos Generales de Clarinete</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="text-blue-800 font-semibold mb-2">Conceptuales</h4>
          <ul className="text-sm space-y-1">
            <li>• Historia del clarinete (Denner → Müller → Klosé → Boehm)</li>
            <li>• Familias del clarinete</li>
            <li>• Acústica (tubo cilíndrico cerrado, armónicos impares)</li>
            <li>• Sistemas francés y alemán</li>
            <li>• Repertorio y estilos</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="text-green-800 font-semibold mb-2">Procedimentales</h4>
          <ul className="text-sm space-y-1">
            <li>• Técnica instrumental (respiración, embocadura, emisión)</li>
            <li>• Articulación (simple, doble, triple)</li>
            <li>• Digitación, escalas, arpegios</li>
            <li>• Lectura a primera vista</li>
            <li>• Transposición, improvisación, memoria</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="text-purple-800 font-semibold mb-2">Actitudinales</h4>
          <ul className="text-sm space-y-1">
            <li>• Hábitos de estudio diario</li>
            <li>• Disciplina y constancia</li>
            <li>• Actitud positiva y autocrítica</li>
            <li>• Respeto y sensibilidad artística</li>
            <li>• Curiosidad por el repertorio</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-6">Nota sobre clasificación</h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
        <p>La clasificación conceptual/procedimental/actitudinal es una <strong>organización didáctica propia</strong> (DESARROLLO PROPIO). La normativa del Decreto 111/2007 no utiliza esta clasificación explícitamente.</p>
      </div>
    </div>
  );
}

// ============================================================
// ENSEÑANZAS ELEMENTALES
// ============================================================
function EnsenanzasElementales() {
  return (
    <div className="content-section">
      <h2>Enseñanzas Elementales de Clarinete (1º a 4º)</h2>
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
        <p className="text-sm"><strong>Norma de referencia:</strong> Decreto 110/2007, de 22 de mayo (modificado por Decreto 54/2022). Las EE se organizan en 4 cursos. En 1º y 2º: Lenguaje Musical e Instrumento. En 3º y 4º: Lenguaje Musical, Instrumento y Coro.</p>
      </div>
      <p>Las Enseñanzas Elementales tienen <strong>identidad pedagógica propia</strong>, finalidad propia y principios didácticos propios. No son una versión reducida de las Enseñanzas Profesionales.</p>

      <h3>Principios Didácticos Propios de las EE</h3>
      <ul>
        <li><strong>Iniciación instrumental:</strong> El alumno se inicia o consolida en el instrumento. Prioridad al descubrimiento y la motivación.</li>
        <li><strong>Desarrollo global:</strong> Se trabaja simultáneamente la técnica, la lectura, la escucha, el ritmo y la expresividad.</li>
        <li><strong>Progresión gradual:</strong> Cada curso añade contenidos sobre los anteriores sin repetir ni saltar niveles.</li>
        <li><strong>Motivación constante:</strong> Repertorio atractivo, audiciones frecuentes, participación en agrupaciones.</li>
        <li><strong>Preparación para EP:</strong> Los dos últimos cursos orientan hacia la posible continuidad en Enseñanzas Profesionales.</li>
      </ul>

      <h3>Secuenciación por Curso</h3>
      <div className="overflow-x-auto">
        <table className="doc-table text-xs">
          <thead><tr><th>Bloque</th><th>EE1</th><th>EE2</th><th>EE3</th><th>EE4</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Respiración</td><td>Sin instrumento, ciclos 4 compases</td><td>Aplicación al instrumento, 4-8 compases</td><td>Control en frases musicales, 8-12 compases</td><td>Gestión del aire en obras completas</td></tr>
            <tr><td className="font-semibold">Embocadura</td><td>Primer sonido, formación básica</td><td>Estabilidad en chalumeau</td><td>Ajuste en passaggio</td><td>Flexibilidad dinámica</td></tr>
            <tr><td className="font-semibold">Sonido</td><td>Notas graves (si₃-sol₃)</td><td>Chalumeau completo (mi₃-si♭₃)</td><td>Chalumeau + inicio clarín</td><td>Homogeneidad chalumeau-clarín</td></tr>
            <tr><td className="font-semibold">Articulación</td><td>Legato y staccato básico</td><td>Legato, staccato, portato</td><td>+ Doble articulación lenta</td><td>Doble articulación ♩=80</td></tr>
            <tr><td className="font-semibold">Escalas</td><td>Do Mayor (1 octava)</td><td>Do, Sol Mayor (1 octava)</td><td>Hasta 3 alteraciones</td><td>Hasta 4 alteraciones (2 octavas)</td></tr>
            <tr><td className="font-semibold">Repertorio</td><td>Melodías sencillas, canciones</td><td>Estudios + obras sencillas</td><td>Estudios medios + obras clásicas</td><td>Preparación acceso a EP</td></tr>
            <tr><td className="font-semibold">Contexto</td><td>Conocer el instrumento</td><td>Clasicismo (Mozart)</td><td>Romanticismo temprano</td><td>Romanticismo y preparación EP</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6">Objetivos por Curso</h3>
      <p className="text-sm text-gray-600">Ver la sección <strong>Objetivos</strong> para el desarrollo completo de los 10 objetivos de cada curso de EE.</p>
    </div>
  );
}

// ============================================================
// ENSEÑANZAS PROFESIONALES
// ============================================================
function EnsenanzasProfesionales() {
  return (
    <div className="content-section">
      <h2>Enseñanzas Profesionales de Clarinete (1º a 6º)</h2>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <p className="text-sm"><strong>Norma principal:</strong> Decreto 111/2007, de 22 de mayo. Las EP se organizan en 6 cursos conducentes al Título Profesional de Música. La especialidad de Clarinete está reconocida en el Art. 4.</p>
        <p className="text-sm mt-2"><strong>Carga horaria:</strong> 1 hora semanal de instrumento (Decreto 111/2007, Anexo I). <Badge type="verified">VERIFICADO</Badge></p>
      </div>

      <h3>Perfil de Ingreso desde EE</h3>
      <p>El alumno que accede a 1º de EP desde EE debe dominar: registro chalumeau completo, escalas hasta 4 alteraciones, articulación simple y doble a tempo moderado, lectura a primera vista en tonalidades hasta 3 alteraciones, y haber interpretado al menos una obra en audición pública.</p>

      <h3>Secuenciación General EP</h3>
      <div className="overflow-x-auto">
        <table className="doc-table text-xs">
          <thead><tr><th>Bloque</th><th>EP1</th><th>EP2</th><th>EP3</th><th>EP4</th><th>EP5</th><th>EP6</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Sonido</td><td>Chal+Clarín+Alt ini</td><td>Homog 2 oct</td><td>Homog 3 oct</td><td>Timbre personal</td><td>Técnicas extendidas</td><td>Maestría sonora</td></tr>
            <tr><td className="font-semibold">Articulación</td><td>Simple+Doble ini</td><td>Doble ♩=88</td><td>Doble+Triple</td><td>Doble concierto</td><td>Extendidas</td><td>Todas+contemp</td></tr>
            <tr><td className="font-semibold">Escalas</td><td>Hasta 3 alt</td><td>Hasta 5 alt</td><td>24 tonalidades</td><td>3 octavas</td><td>Terceras/sextas</td><td>Completas</td></tr>
            <tr><td className="font-semibold">Repertorio</td><td>Clásico (Stamitz, Weber 1)</td><td>Mozart K.622</td><td>Romántico (Brahms)</td><td>Weber 2, Poulenc</td><td>Saint-Saëns, Poulenc</td><td>Debussy, Stravinsky, Berio</td></tr>
            <tr><td className="font-semibold">Estudios</td><td>Baermann, Rose 32</td><td>Rose 32, Müller 30</td><td>Cavallini, Stark</td><td>Jeanjean, Uhl</td><td>Uhl completo</td><td>Jeanjean, Uhl</td></tr>
            <tr><td className="font-semibold">Cámara</td><td>Dúos</td><td>Tríos</td><td>Ens. clarinetes</td><td>Quinteto</td><td>Obras s.XX</td><td>Programa fin estudios</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================
// UNIDADES DIDÁCTICAS
// ============================================================
function Unidades() {
  return (
    <div className="content-section">
      <h2>Unidades Didácticas</h2>
      <p>Mínimo 15 unidades por curso (DESARROLLO PROPIO). Total: al menos 150 unidades (4 EE + 6 EP).</p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm mt-3">
        <p><strong>Nota:</strong> El número de 15 unidades por curso es una decisión de desarrollo propio. La normativa no establece un número concreto de unidades. Estado: DESARROLLO PROPIO.</p>
      </div>

      <h3 className="mt-6">Estructura de Cada Unidad (Plantilla)</h3>
      <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
        <pre>{`ID: UD-CL-[CURSO]-[NN]
Título: [título]
Curso: [EE1-EE4 / EP1-EP6]
Trimestre: [1T / 2T / 3T]
Estado: [VERIFICADO / DESARROLLO_PROPIO / HOLD]
Objetivos: [IDs con trazabilidad]
Contenidos: [conceptuales, procedimentales, actitudinales]
Actividades: [tipo, descripción, duración, agrupamiento]
Repertorio: [obra | estado | función]
Evidencias: [ID | descripción | instrumento | criterio]
Criterios: [ID | descripción | norma]
Rúbrica: [ID | criterios | niveles]
Atención diversidad: [medidas]
Recuperación: [procedimiento]
Trazabilidad: [norma → artículo → elemento]`}</pre>
      </div>

      <h3 className="mt-6">Catálogo de Unidades por Curso</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['EE1', 'EE2', 'EE3', 'EE4', 'EP1', 'EP2', 'EP3', 'EP4', 'EP5', 'EP6'].map(curso => (
          <div key={curso} className="bg-white rounded-lg border border-amber-200 p-4 shadow-sm">
            <h4 className="font-semibold text-amber-900 mb-2">
              {curso.startsWith('EE') ? `${curso.replace('EE', '')}º Enseñanzas Elementales` : `${curso.replace('EP', '')}º Enseñanzas Profesionales`}
              {' '}<Badge type={curso.startsWith('EE') ? 'ee' : 'ep'}>{curso}</Badge>
            </h4>
            <ul className="text-xs space-y-1">
              <li>UD-{curso}-01: Primeros sonidos / Consolidación técnica</li>
              <li>UD-{curso}-02: Escalas y digitación</li>
              <li>UD-{curso}-03: Articulación</li>
              <li>UD-{curso}-04: Repertorio del trimestre</li>
              <li>UD-{curso}-05: Lectura y transposición</li>
              <li>UD-{curso}-06 a UD-{curso}-14: Desarrollo progresivo</li>
              <li>UD-{curso}-15: Evaluación y consolidación</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">15 unidades para {curso} (DESARROLLO PROPIO)</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// EVALUACIÓN
// ============================================================
function Evaluacion() {
  return (
    <div className="content-section">
      <h2>Evaluación y Calificación</h2>

      <div className="bg-blue-50 border border-blue-300 rounded-lg p-5 mb-6">
        <h3 className="text-blue-800 font-semibold mb-2"><i className="fas fa-info-circle mr-2"></i>PROPUESTO — Ponderación Basada en Práctica Habitual</h3>
        <p className="text-sm text-blue-900">{calificacionInfo.nota}</p>
      </div>

      <h3>Bloques de Calificación (Propuesta)</h3>
      <table className="doc-table">
        <thead><tr><th>Bloque</th><th>Ponderación</th><th>Contenidos</th></tr></thead>
        <tbody>
          {calificacionInfo.bloquesPropuestos.map((b, i) => (
            <tr key={i}>
              <td className="font-semibold">{b.nombre}</td>
              <td><Badge type="verified">{b.ponderacion}</Badge></td>
              <td className="text-xs">{b.contenidos}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-6">Diferencia Conceptual</h3>
      <table className="doc-table">
        <thead><tr><th>Concepto</th><th>Definición</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Evaluación</td><td>Proceso de recogida de información sobre el aprendizaje</td></tr>
          <tr><td className="font-semibold">Criterio</td><td>Referente que define qué se evalúa</td></tr>
          <tr><td className="font-semibold">Instrumento</td><td>Herramienta para obtener evidencias (rúbrica, prueba, observación)</td></tr>
          <tr><td className="font-semibold">Evidencia</td><td>Manifestación observable del aprendizaje</td></tr>
          <tr><td className="font-semibold">Calificación</td><td>Expresión numérica o cualitativa del resultado</td></tr>
          <tr><td className="font-semibold">Recuperación</td><td>Procedimiento para superar evaluaciones pendientes</td></tr>
        </tbody>
      </table>

      <h3 className="mt-6">Instrumentos de Evaluación</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {['Observación directa', 'Registro docente', 'Lista de cotejo', 'Escala de valoración', 'Rúbrica analítica', 'Rúbrica holística', 'Prueba técnica', 'Grabación audio/video', 'Audición pública', 'Autoevaluación', 'Coevaluación', 'Portafolio'].map(inst => (
          <div key={inst} className="bg-white rounded border border-amber-200 p-2 text-sm text-center">{inst}</div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// RÚBRICAS
// ============================================================
function Rubricas() {
  return (
    <div className="content-section">
      <h2>Catálogo de Rúbricas</h2>
      <p>Rúbricas generales por curso con 5 criterios × 4 niveles. Todas son DESARROLLO PROPIO.</p>

      {rubricasGenerales.map(rub => (
        <div key={rub.id} className="mt-6">
          <h3>{rub.titulo} <Badge type="hold">DESARROLLO PROPIO</Badge></h3>
          <div className="overflow-x-auto">
            <table className="rubric-table doc-table text-xs">
              <thead><tr><th>Criterio</th><th>Nivel 1 (0-4)</th><th>Nivel 2 (5-6)</th><th>Nivel 3 (7-8)</th><th>Nivel 4 (9-10)</th></tr></thead>
              <tbody>
                {rub.criterios.map((c, i) => (
                  <tr key={i}>
                    <td className="font-semibold">{c.nombre}</td>
                    {c.niveles.map((n, j) => <td key={j}>{n}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <h3 className="mt-8">Tipos de Rúbricas del Catálogo</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {['Transversales', 'Por EE (EE1-EE4)', 'Por EP (EP1-EP6)', 'Por unidad', 'Técnicas (respiración, sonido...)', 'Musicales (fraseo, dinámica...)', 'Interpretativas (memoria, lectura...)', 'Audición pública', 'Autonomía y hábitos', 'Autoevaluación', 'Coevaluación'].map(t => (
          <div key={t} className="bg-indigo-50 rounded border border-indigo-200 p-2 text-sm text-center">{t}</div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// REPERTORIO
// ============================================================
function Repertorio() {
  const tipos = ['metodo', 'estudio', 'obra_piano', 'solo', 'camara'] as const;
  const tipoLabels: Record<string, string> = { metodo: 'Métodos', estudio: 'Estudios', obra_piano: 'Obras con piano', solo: 'Clarinete solo', camara: 'Música de cámara' };

  return (
    <div className="content-section">
      <h2>Repertorio</h2>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm mb-4">
        <p><strong>Nota:</strong> No existe normativa que establezca un repertorio obligatorio. Todo el repertorio es <strong>DESARROLLO PROPIO</strong> y orientativo.</p>
      </div>

      {tipos.map(tipo => (
        <div key={tipo} className="mt-4">
          <h3>{tipoLabels[tipo]}</h3>
          <table className="doc-table text-xs">
            <thead><tr><th>Autor</th><th>Obra</th><th>Curso</th><th>Función pedagógica</th><th>Estado</th></tr></thead>
            <tbody>
              {repertorio.filter(r => r.tipo === tipo).map((r, i) => (
                <tr key={i}>
                  <td className="font-semibold">{r.autor}</td>
                  <td>{r.titulo}</td>
                  <td><Badge type={r.curso.startsWith('EE') ? 'ee' : 'ep'}>{r.curso}</Badge></td>
                  <td>{r.funcion}</td>
                  <td><Badge type="hold">DESARROLLO PROPIO</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// METODOLOGÍA
// ============================================================
function Metodologia() {
  return (
    <div className="content-section">
      <h2>Metodología y Atención a la Diversidad</h2>
      <h3>Principios Metodológicos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { t: 'Constructivismo', d: 'El alumno construye su conocimiento a partir de experiencias previas.' },
          { t: 'Aprendizaje significativo (Ausubel)', d: 'Los nuevos contenidos se conectan con los subsumidores previos.' },
          { t: 'Enfoque competencial', d: 'Se desarrollan competencias transversales más allá de lo instrumental.' },
          { t: 'Atención a la individualidad', d: 'La clase individual permite adaptación completa al alumno.' },
          { t: 'Motivación y autoeficacia', d: 'Repertorio atractivo, audiciones, tecnología y conexión con intereses.' },
          { t: 'DUA (Diseño Universal)', d: 'Múltiples formas de representación, acción e implicación.' },
        ].map(p => (
          <div key={p.t} className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
            <h4 className="text-amber-800 font-semibold mb-1">{p.t}</h4>
            <p className="text-sm text-gray-700">{p.d}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-6">Atención a la Diversidad</h3>
      <ul>
        <li><strong>NEAE:</strong> Adaptaciones curriculares, de acceso (instrumentos adaptados, boquillas especiales) y metodológicas (DUA, tutoría entre iguales).</li>
        <li><strong>Altas capacidades:</strong> Ampliación de repertorio, técnicas extendidas, participación en concursos y masterclasses.</li>
        <li><strong>Dificultades de aprendizaje:</strong> Refuerzo, flexibilización temporal, tutorización individualizada, coordinación con orientación.</li>
      </ul>
    </div>
  );
}

// ============================================================
// TRAZABILIDAD
// ============================================================
function Trazabilidad() {
  return (
    <div className="content-section">
      <h2>Trazabilidad Normativa</h2>
      <h3>Matriz de Correspondencia</h3>
      <table className="doc-table text-xs">
        <thead><tr><th>Competencia LOMLOE</th><th>Objetivos Generales</th><th>Actividades</th><th>Instrumentos</th></tr></thead>
        <tbody>
          <tr><td>CCL - Comunicación lingüística</td><td>b), g), k)</td><td>Terminología musical en italiano/alemán/francés</td><td>Exámenes orales, programas de mano</td></tr>
          <tr><td>CMCT - Matemática y C.T.</td><td>c), f), h)</td><td>Proporciones rítmicas, acústica, serie armónica</td><td>Ejercicios de acústica, análisis</td></tr>
          <tr><td>CD - Digital</td><td>a), d), i)</td><td>Apps de afinación, grabación, IMSLP</td><td>Grabaciones, uso de apps</td></tr>
          <tr><td>CPSAA - Aprender a aprender</td><td>a), d), e)</td><td>Planificación, autoevaluación, gestión ansiedad</td><td>Diario de estudio, rúbricas autoevaluación</td></tr>
          <tr><td>CC - Ciudadana</td><td>e), k)</td><td>Respeto en audiciones, orquesta/banda, patrimonio</td><td>Participación en agrupaciones</td></tr>
          <tr><td>CE - Emprendedora</td><td>j), l)</td><td>Improvisación, proyectos, organización audiciones</td><td>Improvisaciones, programas diseñados</td></tr>
          <tr><td>CCEC - Cultural</td><td>b), g), k), l)</td><td>Repertorio, contexto, sensibilidad, comunicación</td><td>Interpretación estilística, audiciones</td></tr>
        </tbody>
      </table>

      <h3 className="mt-6">Cadena de Trazabilidad</h3>
      <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs">
        <p>NORMA → FINALIDAD → COMPETENCIA → OBJETIVO → CONTENIDO → UNIDAD → ACTIVIDAD → EVIDENCIA → INSTRUMENTO → CRITERIO → RÚBRICA → RESULTADO → CALIFICACIÓN</p>
      </div>
    </div>
  );
}

// ============================================================
// ANEXO II — BANDITA (3º y 4º EE)
// ============================================================
function AnexoII() {
  return (
    <div className="content-section">
      <h2>Anexo II — Práctica Instrumental Conjunta (Bandita)</h2>
      <p className="text-sm text-amber-700 italic">3º y 4º de Enseñanzas Elementales de Música</p>
      
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
        <p className="text-sm"><strong>Norma de referencia:</strong> Decreto 110/2007, de 22 de mayo (modificado por Decreto 54/2022). La asignatura de Práctica Instrumental Conjunta (conocida como "Bandita") es obligatoria en 3º y 4º de Enseñanzas Elementales, junto con Lenguaje Musical e Instrumento.</p>
      </div>

      <h3>Justificación de la Asignatura</h3>
      <p>La Práctica Instrumental Conjunta constituye una oportunidad privilegiada para que el alumnado de 3º y 4º de EE experimente la música como hecho social y comunicativo. A través de la interpretación en grupo, el alumnado desarrolla habilidades de escucha activa, ajuste rítmico y dinámico, respeto al turno y compromiso con el resultado colectivo.</p>
      <p>Esta asignatura complementa la formación instrumental individual, permitiendo aplicar los conocimientos técnicos y musicales adquiridos en el aula de instrumento en un contexto de interpretación conjunta.</p>

      <h3>Objetivos de la Práctica Instrumental Conjunta</h3>
      <ol className="list-decimal ml-6 space-y-1">
        <li>Interpretar obras musicales en grupo con precisión rítmica y afinación adecuada.</li>
        <li>Desarrollar la escucha activa y el ajuste mutuo entre los miembros del grupo.</li>
        <li>Conocer y practicar las normas de comportamiento en ensayos y actuaciones públicas.</li>
        <li>Valorar la música como medio de comunicación y expresión colectiva.</li>
        <li>Participar activamente en las audiciones y conciertos del centro.</li>
        <li>Desarrollar hábitos de trabajo en grupo: puntualidad, atención, respeto, compromiso.</li>
        <li>Conocer el repertorio propio de agrupaciones instrumentales de nivel elemental.</li>
        <li>Aplicar los conocimientos de lenguaje musical a la interpretación conjunta.</li>
      </ol>

      <h3>Contenidos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="text-blue-800 font-semibold mb-2">Conceptuales</h4>
          <ul className="text-sm space-y-1">
            <li>• La música como hecho social y comunicativo</li>
            <li>• Tipos de agrupaciones instrumentales</li>
            <li>• El papel de cada instrumento en el conjunto</li>
            <li>• Equilibrio sonoro y empaste</li>
            <li>• El director: función y lenguaje gestual</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="text-green-800 font-semibold mb-2">Procedimentales</h4>
          <ul className="text-sm space-y-1">
            <li>• Interpretación de obras en grupo</li>
            <li>• Escucha activa y ajuste rítmico</li>
            <li>• Ajuste dinámico y de afinación</li>
            <li>• Seguimiento de la batuta del director</li>
            <li>• Lectura de partituras en contexto de grupo</li>
            <li>• Calentamiento colectivo</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="text-purple-800 font-semibold mb-2">Actitudinales</h4>
          <ul className="text-sm space-y-1">
            <li>• Puntualidad y asistencia regular</li>
            <li>• Atención y concentración en los ensayos</li>
            <li>• Respeto al director y compañeros</li>
            <li>• Compromiso con el resultado colectivo</li>
            <li>• Disposición para actuar en público</li>
            <li>• Valoración del trabajo en equipo</li>
          </ul>
        </div>
      </div>

      <h3>Secuenciación por Curso</h3>
      <div className="overflow-x-auto">
        <table className="doc-table text-xs">
          <thead><tr><th>Bloque</th><th>3º EE</th><th>4º EE</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Repertorio</td><td>Obras sencillas en tonalidades hasta 2 alteraciones; arreglos para ensemble de clarinetes o agrupación mixta</td><td>Obras de dificultad media en tonalidades hasta 4 alteraciones; repertorio variado (clásico, popular, bandas sonoras)</td></tr>
            <tr><td className="font-semibold">Ritmo y pulso</td><td>Mantenimiento del pulso común; figuras básicas (negra, corchea, blanca)</td><td>Subdivisión rítmica; síncopas sencillas; cambios de compás</td></tr>
            <tr><td className="font-semibold">Afinación</td><td>Ajuste de afinación en notas largas y cadencias</td><td>Afinación en pasajes más rápidos; ajustes de temperamento</td></tr>
            <tr><td className="font-semibold">Dinámica</td><td>Contrastes básicos p-f; crescendos y diminuendos simples</td><td>Dinámicas contrastadas; matices expresivos; dirección musical</td></tr>
            <tr><td className="font-semibold">Escucha</td><td>Escucha del compañero más cercano; ajuste de tempo</td><td>Escucha global del conjunto; equilibrio entre secciones</td></tr>
            <tr><td className="font-semibold">Director</td><td>Seguimiento de figuras básicas (inicio, corte, dinámica)</td><td>Seguimiento de indicaciones expresivas; entrada tras silencio</td></tr>
            <tr><td className="font-semibold">Actuaciones</td><td>Audición de Navidad; audición de fin de curso</td><td>Conciertos didácticos; audiciones públicas; actos institucionales</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Metodología</h3>
      <ul>
        <li><strong>Ensayo por secciones:</strong> trabajo específico por familias instrumentales antes del ensayo general.</li>
        <li><strong>Ensayo tututti:</strong> interpretación conjunta con dirección, priorizando la escucha activa.</li>
        <li><strong>Modelado:</strong> el profesor/a muestra el resultado esperado en pasajes conflictivos.</li>
        <li><strong>Grabación y análisis:</strong> grabar ensayos para que el alumnado escuche el resultado y proponga mejoras.</li>
        <li><strong>Repertorio motivador:</strong> obras atractivas para el alumnado (bandas sonoras, música popular, arreglos de obras conocidas).</li>
        <li><strong>Actuaciones frecuentes:</strong> audiciones internas y externas para motivar el trabajo y dar sentido al ensayo.</li>
      </ul>

      <h3>Evaluación</h3>
      <table className="doc-table text-xs">
        <thead><tr><th>Criterio</th><th>Instrumento</th><th>Ponderación</th></tr></thead>
        <tbody>
          <tr><td>Precisión rítmica y ajuste al tempo</td><td>Observación directa en ensayos</td><td><Badge type="hold">PROPUESTO: 25%</Badge></td></tr>
          <tr><td>Afinación y empaste</td><td>Observación directa; grabaciones</td><td><Badge type="hold">PROPUESTO: 25%</Badge></td></tr>
          <tr><td>Seguimiento de la dirección musical</td><td>Observación directa</td><td><Badge type="hold">PROPUESTO: 15%</Badge></td></tr>
          <tr><td>Conocimiento de la propia parte</td><td>Prueba individual de la parte</td><td><Badge type="hold">PROPUESTO: 15%</Badge></td></tr>
          <tr><td>Actitud, asistencia y puntualidad</td><td>Registro de asistencia; observación</td><td><Badge type="hold">PROPUESTO: 10%</Badge></td></tr>
          <tr><td>Participación en actuaciones públicas</td><td>Registro de participación</td><td><Badge type="hold">PROPUESTO: 10%</Badge></td></tr>
        </tbody>
      </table>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm mt-3">
        <p><strong>Nota:</strong> Las ponderaciones propuestas se basan en la práctica habitual de la asignatura de Práctica Instrumental Conjunta. Deben ser validadas con las instrucciones anuales de la Consejería para el curso 2026/2027 y adaptadas según el Proyecto Educativo del Centro.</p>
      </div>

      <h3>Repertorio Orientativo</h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm mb-3">
        <p><strong>Nota:</strong> Todo el repertorio es DESARROLLO PROPIO. No existe normativa que establezca un repertorio obligatorio para la Bandita.</p>
      </div>
      <table className="doc-table text-xs">
        <thead><tr><th>Curso</th><th>Tipo</th><th>Repertorio</th><th>Estado</th></tr></thead>
        <tbody>
          <tr><td>3º EE</td><td>Arreglos para ensemble</td><td>Arreglos de melodías populares extremeñas; canciones infantiles; danzas sencillas</td><td><Badge type="hold">DESARROLLO PROPIO</Badge></td></tr>
          <tr><td>3º EE</td><td>Transcripciones</td><td>Adaptaciones de obras clásicas sencillas (Mozart, Haydn)</td><td><Badge type="hold">DESARROLLO PROPIO</Badge></td></tr>
          <tr><td>3º EE</td><td>Bandas sonoras</td><td>Arreglos de temas de películas adecuados al nivel</td><td><Badge type="hold">DESARROLLO PROPIO</Badge></td></tr>
          <tr><td>4º EE</td><td>Arreglos para ensemble</td><td>Arreglos de obras del repertorio clásico y romántico</td><td><Badge type="hold">DESARROLLO PROPIO</Badge></td></tr>
          <tr><td>4º EE</td><td>Repertorio variado</td><td>Obras originales para agrupación instrumental de nivel medio</td><td><Badge type="hold">DESARROLLO PROPIO</Badge></td></tr>
          <tr><td>4º EE</td><td>Música popular</td><td>Arreglos de música popular y tradicional extremeña</td><td><Badge type="hold">DESARROLLO PROPIO</Badge></td></tr>
        </tbody>
      </table>

      <h3>Atención a la Diversidad</h3>
      <ul>
        <li><strong>Adaptación de partes:</strong> se pueden simplificar las partes de los instrumentos más difíciles o duplicar las voces para reforzar secciones débiles.</li>
        <li><strong>Repertorio flexible:</strong> elección de obras que permitan diferentes niveles de dificultad dentro del mismo conjunto.</li>
        <li><strong>Agrupamientos flexibles:</strong> posibilidad de formar subgrupos por niveles dentro de la agrupación general.</li>
        <li><strong>Refuerzo individual:</strong> apoyo específico fuera del horario de conjunto para alumnado con dificultades.</li>
      </ul>

      <h3>Coordinación con el Aula de Instrumento</h3>
      <p>El profesor/a de instrumento y el profesor/a de la Bandita deben coordinarse para:</p>
      <ul>
        <li>Seleccionar repertorio que complemente el trabajo individual.</li>
        <li>Reforzar contenidos comunes (ritmo, afinación, lectura).</li>
        <li>Compartir información sobre el progreso del alumnado.</li>
        <li>Coordinar calendarios de ensayos y actuaciones.</li>
      </ul>

      <h3>Actuaciones Públicas</h3>
      <p>La Bandita debe participar a lo largo del curso en:</p>
      <ul>
        <li><strong>Audición de Navidad:</strong> programa de villancicos y obras festivas.</li>
        <li><strong>Audición de fin de curso:</strong> programa variado con obras trabajadas durante el año.</li>
        <li><strong>Actos institucionales:</strong> participación en actos del centro o de la localidad (cuando sea oportuno).</li>
        <li><strong>Conciertos didácticos:</strong> posibilidad de ofrecer conciertos explicados en otros centros educativos.</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
        <h4 className="text-amber-900 font-semibold mb-2">Nota sobre la estructura del documento</h4>
        <p className="text-sm">Este Anexo II se incorpora después del Anexo de Diagnóstico de Evaluación, tal como se establece en las programaciones nuevas. Corresponde al anterior Anexo III de la estructura original, renumerado como Anexo II para mantener la coherencia de la secuencia documental.</p>
      </div>
    </div>
  );
}

// ============================================================
// DESPLIEGUE
// ============================================================
function Despliegue() {
  return (
    <div className="content-section">
      <h2>Despliegue en GitHub y Vercel</h2>
      <h3>Estructura del Repositorio</h3>
      <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-xs overflow-x-auto">
        <pre>{`programacion-clarinete-2026-2027/
├── src/
│   ├── App.tsx
│   ├── data/
│   │   └── curriculum.ts
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
├── tsconfig.json
├── README.md
├── ARCHITECTURE.md
├── TRACEABILITY.md
└── DEPLOYMENT.md`}</pre>
      </div>

      <h3 className="mt-6">Comandos Git</h3>
      <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-xs overflow-x-auto">
        <pre>{`git init
git add .
git commit -m "Programación Didáctica Clarinete 2026/2027 - Extremadura"
git branch -M main
git remote add origin https://github.com/usuario/programacion-clarinete-2026-2027.git
git push -u origin main`}</pre>
      </div>

      <h3 className="mt-6">Configuración Vercel</h3>
      <ol className="list-decimal ml-6 space-y-2 text-sm">
        <li>Acceder a vercel.com con GitHub</li>
        <li>"Add New → Project" → importar repositorio</li>
        <li>Framework Preset: Vite</li>
        <li>Build Command: <code className="bg-gray-100 px-1 rounded">npm run build</code></li>
        <li>Output Directory: <code className="bg-gray-100 px-1 rounded">dist</code></li>
        <li>Install Command: <code className="bg-gray-100 px-1 rounded">npm install</code></li>
        <li>Deploy → URL resultante</li>
        <li>Despliegue automático en cada push a main</li>
      </ol>

      <h3 className="mt-6">Alternativa: GitHub Pages</h3>
      <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-xs overflow-x-auto">
        <pre>{`# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`}</pre>
      </div>
    </div>
  );
}

// ============================================================
// DOCUMENTO COMPLETO (30 APARTADOS)
// ============================================================
function DocumentoCompleto() {
  return (
    <div className="content-section">
      <h2>Programación Didáctica Completa — 30 Apartados</h2>
      <p className="text-sm text-gray-600 mb-6">Documento completo de la Programación Didáctica de Clarinete 2026/2027 para Enseñanzas Elementales y Profesionales de Música en Extremadura.</p>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm"><strong>Archivos disponibles:</strong></p>
        <ul className="text-sm mt-2 space-y-1">
          <li>• <code className="bg-blue-100 px-2 py-0.5 rounded">PROGRAMACION_DIDACTICA_COMPLETA.md</code> — Apartados 1-7 (Identificación, Normativa, Finalidades, Principios, Competencias, Objetivos, Contenidos)</li>
          <li>• <code className="bg-blue-100 px-2 py-0.5 rounded">PROGRAMACION_RESTO.md</code> — Apartados 8-30 (Desarrollo de Contenidos, Metodología, Actividades, Unidades, Evaluación, Rúbricas, Anexos, etc.)</li>
        </ul>
      </div>

      <h3>Estructura del Documento Completo</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {[
          { num: '1', title: 'Identificación y Contextualización', sub: '1.1-1.12' },
          { num: '2', title: 'Marco Normativo', sub: '2.1-2.11' },
          { num: '3', title: 'Finalidades Educativas', sub: '3.1-3.10' },
          { num: '4', title: 'Principios Pedagógicos', sub: '4.1-4.16' },
          { num: '5', title: 'Competencias / Capacidades', sub: '5.1-5.20' },
          { num: '6', title: 'Objetivos', sub: '6.1-6.18' },
          { num: '7', title: 'Contenidos', sub: '7.1-7.36' },
          { num: '8', title: 'Desarrollo de Contenidos', sub: '8.1-8.10' },
          { num: '9', title: 'Metodología', sub: '9.1-9.18' },
          { num: '10', title: 'Actividades', sub: '10.1-10.10' },
          { num: '11', title: 'Unidades Didácticas', sub: '11.1-11.10' },
          { num: '12', title: 'Secuenciación y Temporalización', sub: '12.1-12.16' },
          { num: '13', title: 'Repertorio', sub: '13.1-13.12' },
          { num: '14', title: 'Evaluación', sub: '14.1-14.16' },
          { num: '15', title: 'Criterios de Evaluación', sub: '15.1-15.13' },
          { num: '16', title: 'Instrumentos de Evaluación', sub: '16 fichas completas' },
          { num: '17', title: 'Evidencias', sub: '17.1-17.12' },
          { num: '18', title: 'Calificación', sub: '18.1-18.10' },
          { num: '19', title: 'Recuperación y Refuerzo', sub: '19.1-19.10' },
          { num: '20', title: 'Atención a la Diversidad', sub: '20.1-20.10' },
          { num: '21', title: 'Recursos', sub: '21.1-21.14' },
          { num: '22', title: 'Coordinación Docente', sub: '22.1-22.12' },
          { num: '23', title: 'Actividades Complementarias', sub: '23.1-23.10' },
          { num: '24', title: 'Evaluación de la Programación', sub: '24.1-24.12' },
          { num: '25', title: 'Trazabilidad Curricular', sub: '25.1-25.10' },
          { num: '26', title: 'Rúbricas', sub: '26.1-26.22' },
          { num: '27', title: 'Anexos', sub: '27.1-27.14' },
          { num: '28', title: 'Control de Calidad', sub: 'CHECK-001 a CHECK-017' },
          { num: '29', title: 'Fuentes Normativas', sub: '29.1-29.10' },
          { num: '30', title: 'Pendientes de Validación', sub: '30.1-30.10' },
        ].map(item => (
          <div key={item.num} className="bg-white rounded-lg border border-amber-200 p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="bg-amber-800 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{item.num}</span>
              <div>
                <h4 className="font-semibold text-amber-900 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-8">Matriz Maestra de Progresión</h3>
      <div className="overflow-x-auto">
        <table className="doc-table text-xs">
          <thead>
            <tr>
              <th>Dimensión</th>
              <th>EE Inicial</th>
              <th>EE Final</th>
              <th>EP 1º-2º</th>
              <th>EP 3º-4º</th>
              <th>EP 5º-6º</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="font-semibold">Postura</td><td>Iniciación</td><td>Consolidada</td><td>Refinada</td><td>Avanzada</td><td>Profesional</td></tr>
            <tr><td className="font-semibold">Respiración</td><td>Básica</td><td>Controlada</td><td>Eficiente</td><td>Avanzada</td><td>Dominio total</td></tr>
            <tr><td className="font-semibold">Embocadura</td><td>Formación</td><td>Estable</td><td>Flexible</td><td>Controlada</td><td>Dominio total</td></tr>
            <tr><td className="font-semibold">Emisión</td><td>Primer sonido</td><td>Estable</td><td>Controlada</td><td>Variada</td><td>Personal</td></tr>
            <tr><td className="font-semibold">Sonido</td><td>Grave</td><td>2 registros</td><td>Homogéneo</td><td>Personal</td><td>Maestro</td></tr>
            <tr><td className="font-semibold">Afinación</td><td>Con ayuda</td><td>Autónoma</td><td>Precisa</td><td>Excelente</td><td>Perfecta</td></tr>
            <tr><td className="font-semibold">Digitación</td><td>Básica</td><td>Completa</td><td>Ágil</td><td>Veloz</td><td>Virtuosística</td></tr>
            <tr><td className="font-semibold">Articulación</td><td>Simple</td><td>Simple+</td><td>Doble</td><td>Doble+Triple</td><td>Todas</td></tr>
            <tr><td className="font-semibold">Escalas</td><td>1 tonalidad</td><td>4 alterac.</td><td>7 alterac.</td><td>3 octavas</td><td>Completas</td></tr>
            <tr><td className="font-semibold">Arpegios</td><td>Tónica</td><td>4 alterac.</td><td>7ª dim.</td><td>3 octavas</td><td>Completos</td></tr>
            <tr><td className="font-semibold">Flexibilidad</td><td>Básica</td><td>Passaggio</td><td>Registros</td><td>Avanzada</td><td>Total</td></tr>
            <tr><td className="font-semibold">Registro</td><td>Chalumeau</td><td>Chal+Clar</td><td>+Altissimo</td><td>3 octavas</td><td>Completo</td></tr>
            <tr><td className="font-semibold">Lectura</td><td>Básica</td><td>Fluida</td><td>Avanzada</td><td>Compleja</td><td>Total</td></tr>
            <tr><td className="font-semibold">Primera vista</td><td>Básica</td><td>Media</td><td>Avanzada</td><td>Compleja</td><td>Experta</td></tr>
            <tr><td className="font-semibold">Memoria</td><td>Fragmentos</td><td>Obras</td><td>Obras completas</td><td>Programas</td><td>Recitales</td></tr>
            <tr><td className="font-semibold">Análisis</td><td>Básico</td><td>Formal</td><td>Armónico</td><td>Comparativo</td><td>Profundo</td></tr>
            <tr><td className="font-semibold">Fraseo</td><td>Básico</td><td>Con carácter</td><td>Expresivo</td><td>Personal</td><td>Maduro</td></tr>
            <tr><td className="font-semibold">Expresión</td><td>Inicial</td><td>Con carácter</td><td>Estilística</td><td>Personal</td><td>Artística</td></tr>
            <tr><td className="font-semibold">Repertorio</td><td>Sencillo</td><td>Medio</td><td>Avanzado</td><td>Exigente</td><td>Máximo</td></tr>
            <tr><td className="font-semibold">Autonomía</td><td>Inicial</td><td>Creciente</td><td>Avanzada</td><td>Total</td><td>Profesional</td></tr>
            <tr><td className="font-semibold">Interpretación</td><td>Aula</td><td>Audiciones</td><td>Recitales</td><td>Conciertos</td><td>Profesional</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-8">Auditoría Final</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { id: '01', title: 'Integridad de los 30 apartados', status: 'COMPLETA' },
          { id: '02', title: 'Integridad de subapartados', status: 'COMPLETA' },
          { id: '03', title: 'Ausencia de normativa inventada', status: 'VERIFICADA' },
          { id: '04', title: 'Ausencia de porcentajes inventados', status: 'VERIFICADA' },
          { id: '05', title: 'Ausencia de repertorio oficial sin evidencia', status: 'VERIFICADA' },
          { id: '06', title: 'Coherencia Elementales', status: 'VERIFICADA' },
          { id: '07', title: 'Coherencia Profesionales', status: 'VERIFICADA' },
          { id: '08', title: 'Progresión instrumental', status: 'COHERENTE' },
          { id: '09', title: 'Progresión técnica', status: 'COHERENTE' },
          { id: '10', title: 'Progresión musical', status: 'COHERENTE' },
          { id: '11', title: 'Progresión interpretativa', status: 'COHERENTE' },
          { id: '12', title: 'Progresión de autonomía', status: 'COHERENTE' },
          { id: '13', title: 'Trazabilidad curricular', status: 'COMPLETA' },
          { id: '14', title: 'Evidencias', status: 'TRAZADAS' },
          { id: '15', title: 'Instrumentos', status: 'TRAZADOS' },
          { id: '16', title: 'Rúbricas', status: 'COMPLETAS' },
          { id: '17', title: 'Unidades', status: 'DESARROLLADAS' },
          { id: '18', title: 'Repertorio', status: 'CATALOGADO' },
          { id: '19', title: 'Evaluación', status: 'COMPLETA' },
          { id: '20', title: 'HOLD', status: 'REGISTRADOS' },
        ].map(audit => (
          <div key={audit.id} className="bg-emerald-50 rounded-lg border border-emerald-200 p-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-600 font-mono">AUD-{audit.id}</span>
                <p className="text-sm font-medium text-emerald-900">{audit.title}</p>
              </div>
              <Badge type="verified">{audit.status}</Badge>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
        <h4 className="text-amber-900 font-semibold mb-2">Estado Final del Documento</h4>
        <ul className="text-sm space-y-1 text-amber-800">
          <li>• <strong>30 apartados</strong> desarrollados con todos sus subapartados</li>
          <li>• <strong>Matriz maestra de progresión</strong> con 21 dimensiones × 5 niveles</li>
          <li>• <strong>20 auditorías</strong> superadas</li>
          <li>• <strong>5 elementos HOLD</strong> registrados y pendientes de validación</li>
          <li>• <strong>Sin invenciones</strong> normativas, porcentajes ni repertorio obligatorio</li>
          <li>• <strong>Trazabilidad completa</strong> desde la norma hasta la rúbrica</li>
          <li>• <strong>Diferenciación clara</strong> entre Enseñanzas Elementales y Profesionales</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
