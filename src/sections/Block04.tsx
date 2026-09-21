import { useState } from 'react';

function UnitCard({ number, title, course, trimester, sessions, objectives, contents, activities, methodology, resources, criteria, instruments, rubric }: {
  number: number; title: string; course: string; trimester: string; sessions: string;
  objectives: string[]; contents: { c: string[]; p: string[]; a: string[] };
  activities: { type: string; desc: string; duration: string; group: string }[];
  methodology: string[]; resources: string[];
  criteria: { criterion: string; trace: string; instrument: string }[];
  instruments: string[];
  rubric: { indicator: string; levels: string[] }[];
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="unit-card">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">{course} · {trimester}</span>
          <h4 className="text-lg font-bold text-amber-900 mt-1">UD {number}: {title}</h4>
          <p className="text-sm text-gray-600">{sessions} sesiones</p>
        </div>
        <i className={`fas fa-chevron-${expanded ? 'up' : 'down'} text-amber-600`}></i>
      </div>
      {expanded && (
        <div className="mt-4 space-y-4 text-sm">
          <div>
            <h5 className="font-semibold text-amber-800 mb-2">Objetivos didácticos</h5>
            <ul className="list-decimal ml-5 space-y-1">{objectives.map((o, i) => <li key={i}>{o}</li>)}</ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-blue-50 p-3 rounded"><h5 className="font-semibold text-blue-800 mb-1">Conceptuales</h5><ul className="list-disc ml-4 space-y-0.5">{contents.c.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
            <div className="bg-green-50 p-3 rounded"><h5 className="font-semibold text-green-800 mb-1">Procedimentales</h5><ul className="list-disc ml-4 space-y-0.5">{contents.p.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
            <div className="bg-purple-50 p-3 rounded"><h5 className="font-semibold text-purple-800 mb-1">Actitudinales</h5><ul className="list-disc ml-4 space-y-0.5">{contents.a.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
          </div>
          <div>
            <h5 className="font-semibold text-amber-800 mb-2">Actividades de enseñanza-aprendizaje</h5>
            <table className="doc-table text-xs">
              <thead><tr><th>Tipo</th><th>Descripción</th><th>Duración</th><th>Agrupamiento</th></tr></thead>
              <tbody>{activities.map((a, i) => <tr key={i}><td>{a.type}</td><td>{a.desc}</td><td>{a.duration}</td><td>{a.group}</td></tr>)}</tbody>
            </table>
          </div>
          <div>
            <h5 className="font-semibold text-amber-800 mb-2">Metodología</h5>
            <ul className="list-disc ml-5 space-y-0.5">{methodology.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </div>
          <div>
            <h5 className="font-semibold text-amber-800 mb-2">Recursos didácticos</h5>
            <ul className="list-disc ml-5 space-y-0.5">{resources.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </div>
          <div>
            <h5 className="font-semibold text-amber-800 mb-2">Criterios de evaluación</h5>
            <table className="doc-table text-xs">
              <thead><tr><th>Criterio</th><th>Trazabilidad</th><th>Instrumento</th></tr></thead>
              <tbody>{criteria.map((c, i) => <tr key={i}><td>{c.criterion}</td><td>{c.trace}</td><td>{c.instrument}</td></tr>)}</tbody>
            </table>
          </div>
          <div>
            <h5 className="font-semibold text-amber-800 mb-2">Instrumentos de evaluación</h5>
            <ul className="list-disc ml-5 space-y-0.5">{instruments.map((inst, i) => <li key={i}>{inst}</li>)}</ul>
          </div>
          <div>
            <h5 className="font-semibold text-amber-800 mb-2">Rúbrica específica</h5>
            <table className="rubric-table doc-table text-xs">
              <thead><tr><th>Indicador</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
              <tbody>{rubric.map((r, i) => <tr key={i}><td className="font-semibold">{r.indicator}</td>{r.levels.map((l, j) => <td key={j}>{l}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export function Block04() {
  return (
    <div className="content-section">
      <h2>Bloque 4 — Desarrollo y Secuenciación por Unidades Didácticas</h2>
      <p>Se desarrollan un mínimo de 15 unidades didácticas por curso. Haga clic en cada unidad para expandir su contenido completo.</p>

      {/* 1º EP */}
      <h3 className="mt-8">1º Curso de Enseñanzas Profesionales — 15 Unidades Didácticas</h3>

      <UnitCard number={1} title="El sonido en el registro chalumeau" course="1º EP" trimester="1ª Eval." sessions="6"
        objectives={[
          'Obj. 1: Adoptar posición corporal correcta con el instrumento (Art. 3.f).',
          'Obj. 2: Dominar la respiración diafragmática para la emisión en chalumeau (Art. 3.f, h).',
          'Obj. 3: Producir un sonido homogéneo, centrado y con proyección en el registro chalumeau (Art. 3.h).',
          'Obj. 4: Controlar la dinámica pp-ff en el registro grave (Art. 3.h).',
          'Obj. 5: Desarrollar la capacidad de autocrítica mediante la escucha de grabaciones propias (Art. 3.d).'
        ]}
        contents={{
          c: ['Anatomía de la respiración aplicada al clarinete', 'El registro chalumeau: extensión mi₃-si♭₃', 'Características acústicas del registro grave (tubo cerrado, fundamental)'],
          p: ['Ejercicios de respiración diafragmática sin instrumento', 'Notas largas en chalumeau con control dinámico', 'Ejercicios de homogeneidad tímbrica entre notas graves', 'Grabación y autoevaluación de la emisión'],
          a: ['Disposición para la escucha crítica', 'Constancia en la práctica de notas largas', 'Respeto por el proceso de aprendizaje individual']
        }}
        activities={[
          { type: 'Calentamiento', desc: 'Ejercicios de respiración sin instrumento (4-7-8); relajación corporal', duration: '5 min', group: 'Individual' },
          { type: 'Técnica', desc: 'Notas largas en mi₃, fa₃, sol₃ con pp-mf-ff; control de afinación con afinador', duration: '15 min', group: 'Individual' },
          { type: 'Estudio', desc: 'Escala de Do M en chalumeau (legato); cromatismo mi₃-si♭₃', duration: '15 min', group: 'Individual' },
          { type: 'Repertorio', desc: 'Demnitz: estudios nº 1-2 (fragmentos en chalumeau); Schumann: Melodía op. 68 nº 1', duration: '20 min', group: 'Individual' },
          { type: 'Audición', desc: 'Interpretación ante el profesor; grabación para autoevaluación', duration: '5 min', group: 'Individual' },
        ]}
        methodology={['Modelado: el profesor demuestra el sonido ideal en chalumeau', 'Práctica guiada: ejercicios progresivos con feedback inmediato', 'Descubrimiento: el alumno identifica diferencias entre sonidos abiertos y cerrados', 'Uso de TIC: grabación con Soundcorset para autoevaluación', 'Atención a la diversidad: adaptación de la duración de notas según capacidad pulmonar del alumno']}
        resources={['Partituras: Demnitz Escuela elemental nº 1-2; Schumann Melodías populares op. 68 nº 1', 'Afinador digital (TonalEnergy)', 'Grabadora (Soundcorset)', 'Espejo para control postural', 'Cañas de dureza 2-2.5 (Rico Royal, Vandoren tradicional)', 'Soporte para el clarinete']}
        criteria={[
          { criterion: 'Emite sonido homogéneo y centrado en el registro chalumeau', trace: 'Art. 5 Decreto 111/2007 + Anexo I', instrument: 'Observación directa + grabación' },
          { criterion: 'Controla la dinámica pp-ff sin pérdida de calidad', trace: 'Art. 3.h', instrument: 'Prueba técnica' },
          { criterion: 'Mantiene postura corporal correcta durante la emisión', trace: 'Art. 3.f', instrument: 'Observación directa' },
          { criterion: 'Demuestra hábitos de estudio organizado', trace: 'Art. 3.a', instrument: 'Diario de estudio' },
        ]}
        instruments={['Observación directa en clase (registro anecdótico)', 'Grabación de audio/video para autoevaluación', 'Prueba técnica de notas largas y escalas', 'Diario de estudio del alumno', 'Rúbrica específica de la unidad']}
        rubric={[
          { indicator: 'Posición corporal', levels: ['Postura incorrecta constante', 'Postura correcta con corrección', 'Postura correcta autónoma', 'Postura óptima y relajada'] },
          { indicator: 'Respiración', levels: ['No utiliza diafragma', 'Usa diafragma con corrección', 'Respiración diafragmática fluida', 'Respiración profunda y gestionada'] },
          { indicator: 'Emisión sonora', levels: ['Sonido inestable, aireado', 'Sonido estable con corrección', 'Sonido centrado y homogéneo', 'Sonido bello, proyectado, personal'] },
          { indicator: 'Control dinámico', levels: ['No diferencia p de f', 'Diferencia p y f con imprecisiones', 'Controla pp-ff con corrección', 'Controla pp-ff con belleza tímbrica'] },
          { indicator: 'Autonomía', levels: ['Dependencia total del profesor', 'Necesita indicaciones frecuentes', 'Trabaja autónomamente la mayor parte', 'Autonomía total y propuesta propia'] },
        ]}
      />

      <UnitCard number={2} title="Primeras escalas y la tonalidad de Do Mayor" course="1º EP" trimester="1ª Eval." sessions="5"
        objectives={['Obj. 1: Ejecutar la escala de Do Mayor en el registro chalumeau con fluidez (Art. 3.h).', 'Obj. 2: Controlar la afinación en la escala mediante el oído interno (Art. 3.c).', 'Obj. 3: Aplicar la articulación legato y staccato a la escala (Art. 3.h).', 'Obj. 4: Memorizar la digitación de la escala de Do Mayor (Art. 3.h).']}
        contents={{ c: ['Escala de Do Mayor: estructura tonal (tonos y semitonos)', 'Digitación de Do Mayor en chalumeau', 'Concepto de tónica, dominante y sensible'], p: ['Ejecución de la escala en legato y staccato', 'Escala con metrónomo a ♩=60-72', 'Arpegio de tónica (do-mi-sol-do)'], a: ['Constancia en la memorización', 'Precisión y limpieza en la digitación'] }}
        activities={[{ type: 'Calentamiento', desc: 'Notas largas y respiración', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Escala de Do M en diferentes articulaciones y ritmos', duration: '20 min', group: 'Individual' }, { type: 'Estudio', desc: 'Estudio de Demnitz nº 3 (basado en Do M)', duration: '15 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Klosé Método: lecciones en Do M', duration: '15 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Autoevaluación con rúbrica', duration: '5 min', group: 'Individual' }]}
        methodology={['Práctica guiada con modelado previo', 'Uso de metrónomo para control rítmico', 'Memorización progresiva por bloques de 4 notas', 'Retroalimentación inmediata']}
        resources={['Klosé Método completo: lecciones en Do M', 'Demnitz Escuela elemental nº 3', 'Metrónomo digital', 'Afinador', 'Espejo']}
        criteria={[{ criterion: 'Ejecuta la escala de Do M de memoria con fluidez', trace: 'Art. 3.h', instrument: 'Prueba técnica' }, { criterion: 'Mantiene la afinación en toda la escala', trace: 'Art. 3.c', instrument: 'Observación + afinador' }, { criterion: 'Diferencia legato y staccato con claridad', trace: 'Art. 3.h', instrument: 'Observación directa' }]}
        instruments={['Prueba técnica de escalas', 'Observación directa', 'Lista de cotejo']}
        rubric={[
          { indicator: 'Fluidez', levels: ['Se detiene frecuentemente', 'Fluidez con alguna vacilación', 'Fluidez continua', 'Fluidez total a tempo'] },
          { indicator: 'Afinación', levels: ['Afinación deficiente', 'Afinación aceptable con corrección', 'Afinación buena', 'Afinación excelente sin ajuste'] },
          { indicator: 'Articulación', levels: ['No diferencia articulaciones', 'Diferencia con imprecisiones', 'Diferencia con claridad', 'Articulación precisa y musical'] },
          { indicator: 'Memorización', levels: ['Necesita partitura constantemente', 'Consulta partitura ocasionalmente', 'Toca de memoria la mayor parte', 'Memorización completa y segura'] },
        ]}
      />

      <UnitCard number={3} title="La articulación staccato y el control rítmico" course="1º EP" trimester="1ª Eval." sessions="5"
        objectives={['Obj. 1: Dominar la articulación staccato en el registro chalumeau (Art. 3.h).', 'Obj. 2: Mantener el tempo con metrónomo en pasajes articulados (Art. 3.h).', 'Obj. 3: Diferenciar staccato corto y portato (Art. 3.h).', 'Obj. 4: Aplicar la articulación a un estudio musical (Art. 3.k).']}
        contents={{ c: ['Tipos de articulación: staccato, portato, accentato', 'La lengua como articulador: posición y movimiento', 'Relación entre aire y lengua'], p: ['Ejercicios de staccato sobre una nota', 'Staccato en escala de Do M', 'Aplicación a estudio de Demnitz'], a: ['Precisión rítmica', 'Paciencia en la práctica lenta'] }}
        activities={[{ type: 'Calentamiento', desc: 'Notas largas + respiración', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Staccato en notas largas, escalas, patrones rítmicos', duration: '20 min', group: 'Individual' }, { type: 'Estudio', desc: 'Demnitz nº 4-5 (staccato)', duration: '20 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Grabación y análisis', duration: '10 min', group: 'Individual' }]}
        methodology={['Modelado del profesor', 'Práctica progresiva: una nota → escala → estudio', 'Uso del metrónomo desde tempo lento', 'Grabación para autoanálisis']}
        resources={['Demnitz nº 4-5', 'Metrónomo', 'Grabadora', 'Espejo para control de la lengua']}
        criteria={[{ criterion: 'Produce staccato limpio y igual', trace: 'Art. 3.h', instrument: 'Observación' }, { criterion: 'Mantiene el tempo con metrónomo', trace: 'Art. 3.h', instrument: 'Prueba con metrónomo' }, { criterion: 'Diferencia staccato y portato', trace: 'Art. 3.h', instrument: 'Observación directa' }]}
        instruments={['Observación directa', 'Prueba técnica', 'Grabación comparativa']}
        rubric={[
          { indicator: 'Limpieza del staccato', levels: ['Staccato sucio, irregular', 'Staccato aceptable', 'Staccato limpio y regular', 'Staccato preciso y brillante'] },
          { indicator: 'Igualdad rítmica', levels: ['Ritmo muy irregular', 'Ritmo con irregularidades', 'Ritmo regular', 'Ritmo perfecto con metrónomo'] },
          { indicator: 'Diferenciación articulatoria', levels: ['No diferencia articulaciones', 'Diferencia parcialmente', 'Diferencia con claridad', 'Diferencia con carácter musical'] },
        ]}
      />

      <UnitCard number={4} title="La tonalidad de Sol Mayor y el registro clarín" course="1º EP" trimester="1ª Eval." sessions="6"
        objectives={['Obj. 1: Dominar la escala de Sol Mayor en chalumeau y primera aproximación al clarín (Art. 3.h).', 'Obj. 2: Superar el passaggio (si♭₃-do₄) con homogeneidad (Art. 3.h).', 'Obj. 3: Controlar la embocadura para el registro medio (Art. 3.f).', 'Obj. 4: Interpretar obras sencillas en Sol Mayor (Art. 3.k).']}
        contents={{ c: ['Escala de Sol Mayor: estructura y digitación', 'El registro clarín (si♭₃-f₄): armónico 3º del tubo', 'El passaggio: cambio de registro'], p: ['Escala de Sol M en 2 octavas (progresiva)', 'Ejercicios de paso entre registros', 'Estudios en Sol Mayor'], a: ['Confianza en el registro agudo', 'Paciencia con el passaggio'] }}
        activities={[{ type: 'Calentamiento', desc: 'Notas largas en chalumeau + respiración', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Escala de Sol M; ejercicios de slurs sobre el passaggio', duration: '20 min', group: 'Individual' }, { type: 'Estudio', desc: 'Klosé Método: lecciones en Sol M', duration: '15 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Schumann: Melodía op. 68 nº 3 (en Sol M)', duration: '15 min', group: 'Individual' }]}
        methodology={['Modelado del passaggio con explicación acústica', 'Práctica guiada con slurs lentos sobre el paso', 'Uso de afinador para control de afinación en el clarín', 'Descubrimiento guiado de la diferencia tímbrica entre registros']}
        resources={['Klosé Método: lecciones en Sol M', 'Schumann Melodías op. 68', 'Afinador', 'Espejo', 'Grabadora']}
        criteria={[{ criterion: 'Cruza el passaggio con homogeneidad', trace: 'Art. 3.h', instrument: 'Observación + grabación' }, { criterion: 'Mantiene embocadura correcta en clarín', trace: 'Art. 3.f', instrument: 'Observación directa' }, { criterion: 'Interpreta obras en Sol M con corrección', trace: 'Art. 3.k', instrument: 'Audición' }]}
        instruments={['Observación directa', 'Grabación', 'Audición de estudio']}
        rubric={[
          { indicator: 'Paso de registro', levels: ['Quiebro evidente en el passaggio', 'Paso con leve quiebro', 'Paso homogéneo', 'Paso imperceptible y musical'] },
          { indicator: 'Embocadura en clarín', levels: ['Mordisco excesivo', 'Embocadura ajustada con corrección', 'Embocadura correcta y relajada', 'Embocadura óptima y flexible'] },
          { indicator: 'Afinación en clarín', levels: ['Afinación deficiente en agudo', 'Afinación aceptable', 'Buena afinación', 'Afinación excelente'] },
        ]}
      />

      <UnitCard number={5} title="La tonalidad de Fa Mayor y la articulación legato" course="1º EP" trimester="1ª Eval." sessions="5"
        objectives={['Obj. 1: Dominar la escala de Fa Mayor con fluidez (Art. 3.h).', 'Obj. 2: Controlar el legato como base del canto instrumental (Art. 3.h).', 'Obj. 3: Aplicar el legato a frases musicales con dirección (Art. 3.k).']}
        contents={{ c: ['Escala de Fa Mayor: digitación y estructura', 'El legato: concepto y ejecución', 'La frase musical: dirección y respiración'], p: ['Escala de Fa M en legato', 'Frases cantables con dirección', 'Estudios de Klosé en Fa M'], a: ['Sensibilidad hacia el canto instrumental', 'Atención al fraseo'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración + notas largas', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Escala de Fa M en legato; slurs de 4 notas', duration: '15 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Klosé: estudios en Fa M; Schumann: Melodía op. 68 nº 5', duration: '25 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Cantar las frases antes de tocarlas', duration: '10 min', group: 'Individual' }]}
        methodology={['Modelado cantado de las frases', 'Práctica del legato con slurs largos', 'Conexión canto-instrumento', 'Uso de la grabación para comparar']}
        resources={['Klosé Método: lecciones en Fa M', 'Schumann Melodías op. 68 nº 5', 'Grabadora', 'Afinador']}
        criteria={[{ criterion: 'Ejecuta legato homogéneo sin interrupciones', trace: 'Art. 3.h', instrument: 'Observación' }, { criterion: 'Frasea con dirección musical', trace: 'Art. 3.k', instrument: 'Audición' }]}
        instruments={['Observación directa', 'Audición de estudio', 'Grabación']}
        rubric={[
          { indicator: 'Legato', levels: ['Legato con interrupciones', 'Legato aceptable', 'Legato homogéneo', 'Legato cantabile y expresivo'] },
          { indicator: 'Fraseo', levels: ['Sin dirección musical', 'Dirección básica', 'Fraseo con intención', 'Fraseo maduro y personal'] },
        ]}
      />

      <UnitCard number={6} title="La tonalidad de Re Mayor y el staccato en clarín" course="1º EP" trimester="2ª Eval." sessions="5"
        objectives={['Obj. 1: Dominar la escala de Re Mayor en chalumeau y clarín (Art. 3.h).', 'Obj. 2: Aplicar el staccato en el registro clarín (Art. 3.h).', 'Obj. 3: Interpretar estudios en Re Mayor con articulaciones contrastadas (Art. 3.k).']}
        contents={{ c: ['Escala de Re Mayor: digitación completa', 'Staccato en el registro clarín: diferencias con chalumeau', 'Combinación legato-staccato'], p: ['Escala de Re M en 2 octavas', 'Staccato en clarín con metrónomo', 'Estudios con articulaciones alternadas'], a: ['Precisión en el registro agudo', 'Constancia'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración + notas largas en clarín', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Escala de Re M; staccato en clarín a ♩=60-80', duration: '20 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Gambaro: capriccio en Re M; Demnitz: estudio nº 8', duration: '25 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Autoevaluación', duration: '5 min', group: 'Individual' }]}
        methodology={['Práctica progresiva del staccato en clarín', 'Uso del metrónomo', 'Modelado del profesor', 'Grabación comparativa']}
        resources={['Gambaro 21 Capricci (selección en Re M)', 'Demnitz nº 8', 'Metrónomo', 'Afinador', 'Grabadora']}
        criteria={[{ criterion: 'Ejecuta staccato limpio en clarín', trace: 'Art. 3.h', instrument: 'Observación' }, { criterion: 'Interpreta estudios con articulaciones contrastadas', trace: 'Art. 3.k', instrument: 'Audición' }]}
        instruments={['Observación directa', 'Prueba técnica', 'Audición']}
        rubric={[
          { indicator: 'Staccato en clarín', levels: ['Staccato sucio en agudo', 'Staccato aceptable', 'Staccato limpio y regular', 'Staccato brillante y preciso'] },
          { indicator: 'Homogeneidad entre registros', levels: ['Diferencia notable entre registros', 'Leve diferencia', 'Homogeneidad aceptable', 'Homogeneidad total'] },
        ]}
      />

      <UnitCard number={7} title="Dinámicas y expresividad: pp a ff" course="1º EP" trimester="2ª Eval." sessions="5"
        objectives={['Obj. 1: Controlar la dinámica desde pp hasta ff sin pérdida de calidad (Art. 3.h).', 'Obj. 2: Aplicar crescendo y decrescendo con control (Art. 3.k).', 'Obj. 3: Interpretar obras con contraste dinámico expresivo (Art. 3.k).']}
        contents={{ c: ['Concepto de dinámica y su función expresiva', 'Relación entre presión de aire, embocadura y dinámica', 'Crescendo y decrescendo: técnica y función musical'], p: ['Notas largas con crescendo/decrescendo', 'Escala con dinámica ondulante', 'Aplicación a obras del repertorio'], a: ['Sensibilidad expresiva', 'Control corporal'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración profunda + notas largas', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Notas largas con pp-mf-ff-pp; escalas con dinámica ondulante', duration: '15 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Schumann: Melodías con indicaciones dinámicas; Mozart: Marcha Turca (fragmento)', duration: '30 min', group: 'Individual' }, { type: 'Audición', desc: 'Interpretación con contraste dinámico', duration: '10 min', group: 'Individual' }]}
        methodology={['Modelado expresivo del profesor', 'Práctica de la relación aire-embocadura', 'Escucha comparativa de versiones', 'Grabación para autoevaluación']}
        resources={['Schumann Melodías op. 68', 'Mozart: Marcha Turca (adaptación)', 'Grabadora', 'Afinador']}
        criteria={[{ criterion: 'Controla la dinámica pp-ff sin pérdida de calidad', trace: 'Art. 3.h', instrument: 'Observación' }, { criterion: 'Aplica crescendo/decrescendo con control', trace: 'Art. 3.k', instrument: 'Audición' }]}
        instruments={['Observación directa', 'Audición', 'Grabación']}
        rubric={[
          { indicator: 'Control dinámico', levels: ['No diferencia p de f', 'Diferencia con imprecisiones', 'Controla pp-ff con corrección', 'Controla con belleza y expresividad'] },
          { indicator: 'Expresividad', levels: ['Sin intención expresiva', 'Intención básica', 'Expresividad notable', 'Comunicación emocional madura'] },
        ]}
      />

      <UnitCard number={8} title="La tonalidad de La menor y la escala menor armónica" course="1º EP" trimester="2ª Eval." sessions="6"
        objectives={['Obj. 1: Dominar la escala de La menor armónica y melódica (Art. 3.h).', 'Obj. 2: Comprender la diferencia entre menor natural, armónica y melódica (Art. 3.b).', 'Obj. 3: Interpretar estudios y obras en tonalidades menores (Art. 3.k).']}
        contents={{ c: ['Escalas menores: natural, armónica, melódica', 'La sensible y su función en la tonalidad menor', 'Carácter expresivo del modo menor'], p: ['Escala de La m en sus tres formas', 'Estudios en La menor', 'Obras en tonalidad menor'], a: ['Sensibilidad hacia el carácter del modo menor', 'Comprensión teórica aplicada'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración + notas largas', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Las tres formas de La m; comparación auditiva', duration: '15 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Gambaro: capriccio en La m; Schumann: Melodía op. 68 nº 7', duration: '25 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Análisis de la sensible y su resolución', duration: '10 min', group: 'Individual' }]}
        methodology={['Explicación teórica aplicada a la práctica', 'Comparación auditiva de las tres formas', 'Modelado del carácter expresivo', 'Práctica guiada']}
        resources={['Gambaro capriccios en La m', 'Schumann op. 68 nº 7', 'Afinador', 'Grabadora']}
        criteria={[{ criterion: 'Ejecuta las tres formas de la escala menor', trace: 'Art. 3.h', instrument: 'Prueba técnica' }, { criterion: 'Interpreta obras en modo menor con carácter', trace: 'Art. 3.k', instrument: 'Audición' }]}
        instruments={['Prueba técnica', 'Audición', 'Observación']}
        rubric={[
          { indicator: 'Dominio de escalas menores', levels: ['Confunde las formas', 'Ejecuta con ayuda', 'Ejecuta las tres formas', 'Domina con fluidez y musicalidad'] },
          { indicator: 'Carácter expresivo', levels: ['Sin carácter', 'Carácter básico', 'Carácter adecuado', 'Carácter expresivo y personal'] },
        ]}
      />

      <UnitCard number={9} title="El cromatismo y la extensión del mecanismo" course="1º EP" trimester="2ª Eval." sessions="5"
        objectives={['Obj. 1: Ejecutar la escala cromática en una octava con fluidez (Art. 3.h).', 'Obj. 2: Controlar la homogeneidad del cromatismo (Art. 3.h).', 'Obj. 3: Aplicar el cromatismo a pasajes musicales (Art. 3.k).']}
        contents={{ c: ['La escala cromática: digitación y lógica del sistema Boehm', 'Homogeneidad tímbrica en el cromatismo', 'Uso del cromatismo en el repertorio'], p: ['Cromatismo ascendente y descendente', 'Cromatismo con diferentes articulaciones', 'Aplicación a estudios'], a: ['Precisión mecanicista', 'Paciencia en la práctica lenta'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración + notas largas', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Cromatismo mi₃-mi₄ en legato y staccato; con metrónomo', duration: '20 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Klosé: estudios con cromatismos; Gambaro: capriccio cromático', duration: '25 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Análisis de digitaciones alternativas', duration: '5 min', group: 'Individual' }]}
        methodology={['Práctica progresiva con metrónomo', 'Análisis de digitaciones', 'Modelado del profesor', 'Práctica a diferentes tempos']}
        resources={['Klosé Método', 'Gambaro Capricci', 'Metrónomo', 'Afinador']}
        criteria={[{ criterion: 'Ejecuta cromatismo fluido y homogéneo', trace: 'Art. 3.h', instrument: 'Prueba técnica' }, { criterion: 'Controla la igualdad tímbrica', trace: 'Art. 3.h', instrument: 'Observación' }]}
        instruments={['Prueba técnica', 'Observación directa']}
        rubric={[
          { indicator: 'Fluidez cromática', levels: ['Se detiene en cambios de posición', 'Fluidez con vacilaciones', 'Fluidez continua', 'Fluidez total a tempo'] },
          { indicator: 'Homogeneidad', levels: ['Diferencias tímbricas notables', 'Leves diferencias', 'Homogeneidad aceptable', 'Homogeneidad total'] },
        ]}
      />

      <UnitCard number={10} title="Lectura a primera vista: fundamentos" course="1º EP" trimester="2ª Eval." sessions="4"
        objectives={['Obj. 1: Leer a primera vista fragmentos sencillos en tonalidades de Do a Mi♭ (Art. 3.b).', 'Obj. 2: Mantener el pulso sin detenerse (Art. 3.i).', 'Obj. 3: Reconocer patrones tonales y rítmicos (Art. 3.b).']}
        contents={{ c: ['Principios de la lectura a primera vista', 'Reconocimiento de patrones', 'Gestión del error en la lectura'], p: ['Lectura de fragmentos no preparados', 'Lectura rítmica previa', 'Lectura melódica con pulso'], a: ['Valentía para tocar sin preparar', 'Aceptación del error como parte del proceso'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración', duration: '3 min', group: 'Individual' }, { type: 'Técnica', desc: 'Lectura rítmica sin instrumento (palmas)', duration: '7 min', group: 'Individual' }, { type: 'Lectura', desc: 'Lectura de 3 fragmentos progresivos (8-16 compases)', duration: '25 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Análisis de los errores más frecuentes', duration: '10 min', group: 'Individual' }]}
        methodology={['Lectura progresiva por dificultad', 'Análisis previo de la partitura', 'Priorización del pulso sobre la precisión', 'Feedback inmediato constructivo']}
        resources={['Colección de fragmentos preparados por el profesor', 'Metrónomo', 'Partituras en tonalidades de 0-3 alteraciones']}
        criteria={[{ criterion: 'Mantiene el pulso sin detenerse', trace: 'Art. 3.i', instrument: 'Observación' }, { criterion: 'Lee con corrección rítmica básica', trace: 'Art. 3.b', instrument: 'Prueba de lectura' }]}
        instruments={['Prueba de lectura a primera vista', 'Observación directa']}
        rubric={[
          { indicator: 'Continuidad', levels: ['Se detiene constantemente', 'Se detiene ocasionalmente', 'Mantiene el pulso la mayor parte', 'No se detiene nunca'] },
          { indicator: 'Precisión rítmica', levels: ['Ritmo muy impreciso', 'Ritmo aceptable', 'Ritmo correcto', 'Ritmo preciso y musical'] },
        ]}
      />

      <UnitCard number={11} title="La tonalidad de Mi menor y el registro altissimo inicial" course="1º EP" trimester="3ª Eval." sessions="6"
        objectives={['Obj. 1: Dominar la escala de Mi menor en chalumeau y clarín (Art. 3.h).', 'Obj. 2: Iniciar el registro altissimo (fa₄♯-la₄) con control (Art. 3.h).', 'Obj. 3: Interpretar obras que exploren el altissimo inicial (Art. 3.k).']}
        contents={{ c: ['Escala de Mi menor: estructura y carácter', 'El registro altissimo: armónicos superiores', 'Digitaciones del altissimo inicial'], p: ['Escala de Mi m en 2 octavas', 'Primeras notas del altissimo con notas largas', 'Ejercicios de conexión clarín-altissimo'], a: ['Confianza en el registro agudo', 'Paciencia con la emisión de sobreagudos'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración profunda + notas largas', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Escala de Mi m; primeras notas del altissimo (fa₄♯, sol₄, la♭₄)', duration: '20 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Gambaro: capriccio en Mi m; Mozart: Marcha Turca (fragmento agudo)', duration: '25 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Grabación y análisis del altissimo', duration: '5 min', group: 'Individual' }]}
        methodology={['Práctica progresiva y paciente del altissimo', 'Modelado del profesor', 'Uso del oído interno para anticipar la nota', 'Grabación para análisis']}
        resources={['Gambaro capriccios', 'Mozart Marcha Turca (adaptación)', 'Afinador', 'Grabadora', 'Espejo']}
        criteria={[{ criterion: 'Emite notas del altissimo con centro', trace: 'Art. 3.h', instrument: 'Observación' }, { criterion: 'Conecta clarín y altissimo sin quiebro', trace: 'Art. 3.h', instrument: 'Grabación' }]}
        instruments={['Observación directa', 'Grabación', 'Prueba técnica']}
        rubric={[
          { indicator: 'Emisión altissimo', levels: ['No emite notas del altissimo', 'Emite con sonido aireado', 'Emite con sonido centrado', 'Emite con belleza y control'] },
          { indicator: 'Conexión de registros', levels: ['Quiebro evidente', 'Leve quiebro', 'Conexión fluida', 'Conexión imperceptible'] },
        ]}
      />

      <UnitCard number={12} title="Mozart y el estilo clásico: Marcha Turca" course="1º EP" trimester="3ª Eval." sessions="6"
        objectives={['Obj. 1: Interpretar la Marcha Turca de Mozart con criterio estilístico (Art. 3.k).', 'Obj. 2: Aplicar la articulación clásica (staccato mozartiano) (Art. 3.h).', 'Obj. 3: Contextualizar la obra en el Clasicismo vienés (Art. 3.b).', 'Obj. 4: Preparar la obra para audición pública (Art. 3.l).']}
        contents={{ c: ['Mozart y el clarinete: contexto histórico', 'La Marcha Turca: estructura y carácter', 'El staccato clásico: breve, ligero, preciso'], p: ['Estudio progresivo de la Marcha Turca', 'Articulación mozartiana', 'Preparación para audición'], a: ['Interés por el contexto histórico', 'Compromiso con la preparación de la audición'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración + escalas en La M', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Staccato mozartiano en escalas y arpegios de La M', duration: '10 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Mozart: Marcha Turca (estudio por secciones)', duration: '30 min', group: 'Individual' }, { type: 'Audición', desc: 'Interpretación completa; preparación para audición pública', duration: '10 min', group: 'Individual' }]}
        methodology={['Contextualización histórica con audiciones de referencia', 'Práctica por secciones', 'Modelado del estilo clásico', 'Simulacro de audición']}
        resources={['Mozart: Marcha Turca (adaptación para clarinete)', 'Grabaciones de referencia (vers. Meyer, vers. Ottensamer)', 'Grabadora', 'Afinador']}
        criteria={[{ criterion: 'Interpreta con estilo clásico', trace: 'Art. 3.k', instrument: 'Audición' }, { criterion: 'Aplica staccato mozartiano', trace: 'Art. 3.h', instrument: 'Observación' }, { criterion: 'Se presenta en audición con autocontrol', trace: 'Art. 3.l', instrument: 'Rúbrica de audición' }]}
        instruments={['Audición pública', 'Observación directa', 'Rúbrica de audición pública']}
        rubric={[
          { indicator: 'Estilo clásico', levels: ['Sin carácter clásico', 'Carácter básico', 'Estilo adecuado', 'Estilo mozartiano convincente'] },
          { indicator: 'Articulación', levels: ['Staccato inadecuado', 'Staccato aceptable', 'Staccato clásico correcto', 'Staccato mozartiano ejemplar'] },
          { indicator: 'Presencia escénica', levels: ['Nerviosismo evidente', 'Nerviosismo controlado parcialmente', 'Seguridad aceptable', 'Presencia escénica madura'] },
        ]}
      />

      <UnitCard number={13} title="La tonalidad de Si♭ Mayor y la lectura en 6/8" course="1º EP" trimester="3ª Eval." sessions="5"
        objectives={['Obj. 1: Dominar la escala de Si♭ Mayor (Art. 3.h).', 'Obj. 2: Interpretar obras en compás de 6/8 con carácter (Art. 3.k).', 'Obj. 3: Leer a primera vista en 6/8 (Art. 3.b).']}
        contents={{ c: ['Escala de Si♭ Mayor', 'El compás de 6/8: subdivisión y carácter', 'Repertorio en 6/8'], p: ['Escala de Si♭ M', 'Estudios y obras en 6/8', 'Lectura a primera vista en 6/8'], a: ['Sensibilidad rítmica', 'Gusto por la variedad métrica'] }}
        activities={[{ type: 'Calentamiento', desc: 'Respiración + notas largas', duration: '5 min', group: 'Individual' }, { type: 'Técnica', desc: 'Escala de Si♭ M; patrones rítmicos en 6/8', duration: '15 min', group: 'Individual' }, { type: 'Repertorio', desc: 'Klosé: estudios en 6/8; Schumann: Melodía op. 68 nº 12', duration: '25 min', group: 'Individual' }, { type: 'Lectura', desc: 'Lectura a primera vista en 6/8', duration: '10 min', group: 'Individual' }]}
        methodology={['Práctica rítmica previa sin instrumento', 'Modelado del carácter de barcarola', 'Lectura progresiva', 'Grabación']}
        resources={['Klosé Método', 'Schumann op. 68', 'Metrónomo', 'Fragmentos de lectura']}
        criteria={[{ criterion: 'Domina la escala de Si♭ M', trace: 'Art. 3.h', instrument: 'Prueba técnica' }, { criterion: 'Interpreta en 6/8 con carácter', trace: 'Art. 3.k', instrument: 'Audición' }]}
        instruments={['Prueba técnica', 'Audición', 'Lectura a primera vista']}
        rubric={[
          { indicator: 'Ritmo en 6/8', levels: ['No siente la subdivisión', 'Subdivisión irregular', 'Subdivisión correcta', 'Carácter de barcarola convincente'] },
          { indicator: 'Escala Si♭ M', levels: ['Errores en digitación', 'Algunos errores', 'Correcta con fluidez', 'Fluidez total y musical'] },
        ]}
      />

      <UnitCard number={14} title="Preparación de la audición trimestral" course="1º EP" trimester="3ª Eval." sessions="4"
        objectives={['Obj. 1: Preparar un programa de audición con 1 estudio + 1 obra (Art. 3.l).', 'Obj. 2: Gestionar la ansiedad escénica (Art. 3.d).', 'Obj. 3: Interpretar de memoria al menos una pieza (Art. 3.l).']}
        contents={{ c: ['Protocolo de audición: entrada, presentación, interpretación, salida', 'Gestión de la ansiedad escénica', 'Técnicas de memorización'], p: ['Preparación del programa', 'Simulacros de audición', 'Técnicas de relajación y concentración'], a: ['Compromiso con la preparación', 'Valentía escénica', 'Respeto al público'] }}
        activities={[{ type: 'Reflexión', desc: 'Selección y organización del programa', duration: '10 min', group: 'Individual' }, { type: 'Ensayo', desc: 'Interpretación completa del programa', duration: '20 min', group: 'Individual' }, { type: 'Técnica', desc: 'Simulacro de audición con compañero como público', duration: '15 min', group: 'Parejas' }, { type: 'Reflexión', desc: 'Técnicas de relajación y visualización', duration: '10 min', group: 'Individual' }]}
        methodology={['Simulacros progresivos', 'Técnicas de relajación (visualización, respiración)', 'Feedback constructivo', 'Grabación del simulacro']}
        resources={['Programa de audición del alumno', 'Grabadora', 'Espacio de audición']}
        criteria={[{ criterion: 'Interpreta el programa completo sin interrupciones', trace: 'Art. 3.l', instrument: 'Rúbrica de audición' }, { criterion: 'Gestiona la ansiedad escénica', trace: 'Art. 3.d', instrument: 'Observación + autoevaluación' }]}
        instruments={['Rúbrica de audición pública', 'Autoevaluación', 'Observación']}
        rubric={[
          { indicator: 'Autocontrol', levels: ['Nerviosismo paralizante', 'Nerviosismo notable', 'Autocontrol aceptable', 'Seguridad y serenidad'] },
          { indicator: 'Continuidad', levels: ['Interrupciones frecuentes', 'Alguna interrupción', 'Sin interrupciones', 'Interpretación fluida de principio a fin'] },
          { indicator: 'Comunicación', levels: ['Sin contacto con el público', 'Contacto mínimo', 'Comunicación adecuada', 'Comunicación expresiva'] },
        ]}
      />

      <UnitCard number={15} title="Evaluación final y balance del curso" course="1º EP" trimester="3ª Eval." sessions="4"
        objectives={['Obj. 1: Demostrar el dominio de los contenidos del curso (Art. 3.a).', 'Obj. 2: Realizar una autoevaluación global del progreso (Art. 3.d).', 'Obj. 3: Establecer objetivos para el verano y 2º curso (Art. 3.a).']}
        contents={{ c: ['Balance de los contenidos del curso', 'Criterios de evaluación global', 'Planificación del trabajo estival'], p: ['Examen final: escalas + estudio + obra', 'Autoevaluación con rúbrica global', 'Planificación del verano'], a: ['Autocrítica honesta', 'Compromiso con el trabajo estival'] }}
        activities={[{ type: 'Examen', desc: 'Prueba final: escalas (3 tonalidades) + estudio + obra', duration: '20 min', group: 'Individual' }, { type: 'Lectura', desc: 'Lectura a primera vista', duration: '5 min', group: 'Individual' }, { type: 'Reflexión', desc: 'Autoevaluación global con rúbrica; establecimiento de objetivos', duration: '15 min', group: 'Individual' }, { type: 'Planificación', desc: 'Diseño del plan de trabajo estival', duration: '15 min', group: 'Individual' }]}
        methodology={['Evaluación sumativa con rúbrica', 'Autoevaluación guiada', 'Planificación compartida de objetivos', 'Feedback constructivo global']}
        resources={['Rúbrica global de 1º EP', 'Diario de estudio del curso', 'Plan de trabajo estival']}
        criteria={[{ criterion: 'Demuestra el dominio de los contenidos mínimos de 1º', trace: 'Art. 3.a + Art. 5', instrument: 'Examen final' }, { criterion: 'Realiza autoevaluación honesta y constructiva', trace: 'Art. 3.d', instrument: 'Autoevaluación' }]}
        instruments={['Examen final (tribunal)', 'Autoevaluación', 'Rúbrica global', 'Diario de estudio']}
        rubric={[
          { indicator: 'Nivel global', levels: ['No alcanza los mínimos', 'Alcanza los mínimos justos', 'Supera los mínimos', 'Supera ampliamente con excelencia'] },
          { indicator: 'Progreso', levels: ['Progreso insuficiente', 'Progreso adecuado', 'Progreso notable', 'Progreso excepcional'] },
        ]}
      />

      {/* 2º EP - Summary */}
      <h3 className="mt-12">2º Curso de Enseñanzas Profesionales — 15 Unidades Didácticas</h3>
      <p className="text-sm text-gray-600 mb-4">Las 15 unidades de 2º EP siguen la misma estructura completa. Se presentan los títulos y una descripción resumida:</p>

      {[
        { n: 1, t: 'Consolidación de la homogeneidad tímbrica en tres octavas', tri: '1ª', desc: 'Ejercicios de slurs entre registros; escalas en 2 octavas con control del passaggio.' },
        { n: 2, t: 'La articulación doble: fundamentos', tri: '1ª', desc: 'Introducción del ta-ka; ejercicios progresivos a tempo lento; aplicación a escalas.' },
        { n: 3, t: 'Tonalidades hasta 3 alteraciones en 2 octavas', tri: '1ª', desc: 'Escalas de Re M, Mi♭ M, Si♭ m en 2 octavas; arpegios de 7ª de dominante.' },
        { n: 4, t: 'El fraseo romántico: agógica y rubato', tri: '1ª', desc: 'Estudio del rubato controlado; aplicación a Schumann y Mendelssohn.' },
        { n: 5, t: 'Baermann Método: estudios de nivel medio', tri: '1ª', desc: 'Interpretación de estudios de Baermann con criterio musical y técnico.' },
        { n: 6, t: 'La afinación en el registro de paso', tri: '2ª', desc: 'Ajustes de embocadura y soplo para si♮, fa♯ agudo; ejercicios con afinador.' },
        { n: 7, t: 'Articulación doble a tempo moderado', tri: '2ª', desc: 'Doble articulación a ♩=88; aplicación a estudios de Gambaro avanzado.' },
        { n: 8, t: 'Mozart: Aria de La clemenza di Tito', tri: '2ª', desc: 'Estudio estilístico del aria; basset horn vs clarinete; transcripción y adaptación.' },
        { n: 9, t: 'Brahms Sonata nº 1 en Fa m: 1er movimiento', tri: '2ª', desc: 'Análisis formal; interpretación del 1er movimiento con carácter romántico.' },
        { n: 10, t: 'Lectura a primera vista avanzada', tri: '2ª', desc: 'Lectura en tonalidades hasta 4 alteraciones; fragmentos de diferentes estilos.' },
        { n: 11, t: 'Iniciación a la transposición', tri: '2ª', desc: 'Transporte mental de Sib a Do; fragmentos orquestales sencillos.' },
        { n: 12, t: 'Escalas en todas las tonalidades hasta 5 alteraciones', tri: '3ª', desc: 'Dominio de las 12 tonalidades mayores; escalas menores en todas las formas.' },
        { n: 13, t: 'Repertorio de cámara: dúo clarinete-piano', tri: '3ª', desc: 'Preparación de un dúo con piano; escucha activa y ajuste mutuo.' },
        { n: 14, t: 'Memorización e interpretación pública', tri: '3ª', desc: 'Estrategias de memorización; preparación de un recital de 10 minutos.' },
        { n: 15, t: 'Evaluación final y balance de 2º curso', tri: '3ª', desc: 'Examen global; autoevaluación; planificación del verano y objetivos para 3º.' },
      ].map(u => (
        <div key={u.n} className="bg-white rounded-lg border border-amber-200 p-4 mb-3 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="bg-amber-700 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{u.n}</span>
            <div>
              <h4 className="font-semibold text-amber-900">UD {u.n}: {u.t}</h4>
              <p className="text-sm text-gray-600">{u.desc} <span className="text-amber-600">({u.tri}ª Eval.)</span></p>
            </div>
          </div>
        </div>
      ))}

      {/* 3º-6º EP - Abbreviated */}
      {[
        { course: '3º', units: [
          'Dominio de las 24 tonalidades en 3 octavas', 'Articulación doble y triple a tempo de concierto', 'Rose 26 Estudios: primera mitad', 'Weber Concierto nº 1: 1er movimiento', 'Stamitz Concierto en Si♭ M', 'Repertorio orquestal: Bizet, Tchaikovsky', 'Rose 26 Estudios: segunda mitad', 'Weber Concierto nº 1: movimientos 2 y 3', 'Música de cámara: trío de clarinetes', 'Improvisación sobre blues y estructuras tonales', 'Mecanismo avanzado: terceras y sextas', 'Fragmentos orquestales avanzados', 'Análisis formal aplicado a la interpretación', 'Preparación de audición pública', 'Evaluación final y balance de 3º'
        ]},
        { course: '4º', units: [
          'Mozart Concierto K.622: 1er movimiento', 'Mozart K.622: movimientos 2 y 3', 'Rose 32 Estudios: primera mitad', 'Weber Concierto nº 2: 1er movimiento', 'Müller 30 Estudios: selección', 'Transposición a vista: partituras orquestales', 'Rose 32 Estudios: segunda mitad', 'Repertorio orquestal avanzado', 'Música de cámara: quinteto con piano', 'Análisis comparativo de versiones discográficas', 'Mecanismo virtuosístico', 'Preparación del recital monográfico', 'Repertorio para banda: fragmentos sinfónicos', 'Recital monográfico de 20-25 minutos', 'Evaluación final y balance de 4º'
        ]},
        { course: '5º', units: [
          'Vibrato controlado y expresivo', 'Brahms Sonata nº 2: 1er movimiento', 'Cavallini 30 Caprichos: primera mitad', 'Saint-Saëns Sonata: 1er movimiento', 'Técnicas extendidas: glissando y multifónicos', 'Brahms Sonata nº 2: movimientos 2 y 3', 'Cavallini 30 Caprichos: segunda mitad', 'Poulenc Sonata: 1er movimiento', 'Stark 24 Estudios: selección', 'Análisis armónico avanzado', 'Repertorio de cámara: obras del siglo XX', 'Preparación de recital de 30 minutos', 'Participación en masterclass', 'Recital de 30 minutos con programa variado', 'Evaluación final y balance de 5º'
        ]},
        { course: '6º', units: [
          'Debussy Première Rhapsodie', 'Jeanjean 16 Estudios modernos: primera mitad', 'Stravinsky Tres piezas', 'Técnicas extendidas avanzadas: quarter-tones, key clicks', 'Lutosławski Grave', 'Jeanjean: segunda mitad; Uhl 48 Estudios: selección', 'Berio Sequenza IX', 'Análisis de notación contemporánea', 'Preparación del programa de fin de estudios', 'Simulacro de prueba de acceso a superiores', 'Proyecto artístico personal', 'Recital de fin de estudios (35-40 min)', 'Preparación específica para pruebas de acceso', 'Evaluación final y orientación para superiores', 'Balance global de las Enseñanzas Profesionales'
        ]}
      ].map(c => (
        <div key={c.course} className="mt-8">
          <h3>{c.course} Curso de Enseñanzas Profesionales — 15 Unidades Didácticas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
            {c.units.map((u, i) => (
              <div key={i} className="bg-white rounded border border-amber-100 p-3 text-sm">
                <span className="font-bold text-amber-800">UD {i+1}:</span> {u}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
