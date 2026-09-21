export function Block05() {
  return (
    <div className="content-section">
      <h2>Bloque 5 — Criterios de Evaluación e Instrumentos de Calificación</h2>

      <h3>5.1. Criterios de Evaluación Generales de Clarinete</h3>
      <p className="text-sm text-amber-700 italic">Derivados del Art. 5 y Anexo I del Decreto 111/2007.</p>
      <table className="doc-table">
        <thead><tr><th>Nº</th><th>Criterio de Evaluación</th><th>Trazabilidad</th><th>Indicador de logro</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Controlar la emisión y calidad del sonido en todos los registros del instrumento.</td><td>Art. 3.h + Anexo I</td><td>Emite sonido centrado, homogéneo y proyectado en chalumeau, clarín y altissimo.</td></tr>
          <tr><td>2</td><td>Controlar la respiración diafragmática en todas las situaciones interpretativas.</td><td>Art. 3.f + Anexo I</td><td>Gestiona el aire en frases de hasta 16 compases sin pérdida de calidad.</td></tr>
          <tr><td>3</td><td>Mantener una posición corporal correcta y ergonómica durante la interpretación.</td><td>Art. 3.f</td><td>Adopta postura relajada y eficiente durante toda la sesión sin tensiones.</td></tr>
          <tr><td>4</td><td>Demostrar afinación correcta en todos los registros y contextos.</td><td>Art. 3.c + Anexo I</td><td>Mantiene afinación dentro de ±5 cents en notas largas y ±10 cents en pasajes.</td></tr>
          <tr><td>5</td><td>Aplicar la articulación adecuada a cada estilo y contexto musical.</td><td>Art. 3.h + Anexo I</td><td>Diferencia y aplica correctamente legato, staccato, portato, doble y triple articulación.</td></tr>
          <tr><td>6</td><td>Dominar la digitación y el mecanismo del instrumento con fluidez.</td><td>Art. 3.h + Anexo I</td><td>Ejecuta escalas, arpegios y pasajes mecánicos con limpieza y velocidad adecuada al nivel.</td></tr>
          <tr><td>7</td><td>Demostrar capacidad de lectura a primera vista.</td><td>Art. 3.b + Anexo I</td><td>Lee fragmentos no preparados con corrección rítmica y afinación aceptable.</td></tr>
          <tr><td>8</td><td>Interpretar obras de memoria con seguridad.</td><td>Art. 3.l</td><td>Interpreta de memoria al menos una obra del nivel con seguridad escénica.</td></tr>
          <tr><td>9</td><td>Actuar en público con autocontrol, dominio escénico y capacidad comunicativa.</td><td>Art. 3.l</td><td>Se presenta en audiciones con seguridad, sin interrupciones por nervios.</td></tr>
          <tr><td>10</td><td>Aplicar el fraseo, la dinámica y el estilo adecuado a cada obra.</td><td>Art. 3.k + Anexo I</td><td>Interpreta con fraseo dirigido, dinámica contrastada y estilo coherente con la época.</td></tr>
          <tr><td>11</td><td>Demostrar autonomía y hábitos de estudio eficaces.</td><td>Art. 3.a + Art. 3.d</td><td>Planifica su estudio, utiliza herramientas de autoevaluación y muestra progreso constante.</td></tr>
        </tbody>
      </table>

      <h3>5.2. Criterios de Calificación (Ponderación)</h3>
      <div className="bg-white rounded-lg border border-amber-200 p-6 shadow-sm">
        <table className="doc-table">
          <thead><tr><th>Bloque de Evaluación</th><th>Ponderación</th><th>Contenidos evaluados</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">A. Técnica Instrumental</td><td className="text-center font-bold text-amber-800">30%</td><td>Respiración, embocadura, sonido (homogeneidad, proyección, color), articulación (simple, doble, triple), digitación, escalas y arpegios (de memoria), mecanismo, afinación.</td></tr>
            <tr><td className="font-semibold">B. Interpretación del Repertorio</td><td className="text-center font-bold text-amber-800">40%</td><td>Obras y estudios: fraseo, dinámica, agógica, estilo, carácter, análisis formal, memoria, expresividad, comunicación musical.</td></tr>
            <tr><td className="font-semibold">C. Lectura a Primera Vista</td><td className="text-center font-bold text-amber-800">10%</td><td>Corrección rítmica, afinación, continuidad, reconocimiento de patrones, mantenimiento del pulso.</td></tr>
            <tr><td className="font-semibold">D. Actitud y Hábitos de Estudio</td><td className="text-center font-bold text-amber-800">10%</td><td>Asistencia, puntualidad, actitud en clase, trabajo en casa (diario de estudio), materiales, responsabilidad.</td></tr>
            <tr><td className="font-semibold">E. Participación en Audiciones</td><td className="text-center font-bold text-amber-800">10%</td><td>Preparación, autocontrol escénico, comunicación, respeto al turno, contribución a la actividad musical del centro.</td></tr>
          </tbody>
        </table>

        <h4 className="mt-6">Procedimiento de cálculo de la calificación</h4>
        <ul>
          <li><strong>Calificación trimestral:</strong> Nota = (A×0,30) + (B×0,40) + (C×0,10) + (D×0,10) + (E×0,10). Cada bloque se califica de 0 a 10.</li>
          <li><strong>Calificación final de curso:</strong> Media ponderada de las tres evaluaciones: (1ª×0,25) + (2ª×0,25) + (3ª×0,50). La tercera evaluación tiene mayor peso por ser la más representativa del nivel alcanzado.</li>
          <li><strong>Redondeo:</strong> Las calificaciones se expresan con un decimal. La nota final se redondea a la décima más próxima. Para la promoción, se aplica el criterio de superar el 5,0 en la nota final.</li>
          <li><strong>Recuperación de bloques suspensos:</strong> Si un alumno suspende un bloque en la evaluación final, se le ofrece una prueba de recuperación en junio que versa exclusivamente sobre los contenidos de ese bloque. La nota de recuperación sustituye a la del bloque suspendido para el cálculo de la nota final.</li>
          <li><strong>Nota mínima para promoción:</strong> 5,0 en la calificación final de curso, con al menos 4,0 en cada uno de los bloques A y B (técnica e interpretación).</li>
        </ul>
      </div>

      <h3>5.3. Instrumentos de Evaluación</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-blue-800 font-semibold mb-2"><i className="fas fa-eye mr-2"></i>Observación Directa en Clase</h4>
          <ul className="text-sm space-y-1">
            <li>• Registro anecdótico (cuaderno del profesor)</li>
            <li>• Listas de cotejo para aspectos técnicos concretos</li>
            <li>• Escala de valoración diaria</li>
            <li>• Frecuencia: diaria/sesional</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-green-800 font-semibold mb-2"><i className="fas fa-music mr-2"></i>Audiciones Públicas</h4>
          <ul className="text-sm space-y-1">
            <li>• Audiciones trimestrales de aula</li>
            <li>• Conciertos didácticos</li>
            <li>• Evaluación con rúbrica de audición pública</li>
            <li>• Frecuencia: 3 por curso académico</li>
          </ul>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <h4 className="text-purple-800 font-semibold mb-2"><i className="fas fa-clipboard-list mr-2"></i>Pruebas Técnicas</h4>
          <ul className="text-sm space-y-1">
            <li>• Escalas y arpegios (de memoria o con partitura)</li>
            <li>• Estudios técnicos</li>
            <li>• Fragmentos de lectura a primera vista</li>
            <li>• Frecuencia: 1 por evaluación</li>
          </ul>
        </div>
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
          <h4 className="text-amber-800 font-semibold mb-2"><i className="fas fa-file-alt mr-2"></i>Exámenes Trimestrales</h4>
          <ul className="text-sm space-y-1">
            <li>• 1 obra + 1 estudio + escalas (15-20 min/alumno)</li>
            <li>• Posibilidad de tribunal colegiado</li>
            <li>• Lectura a primera vista incluida</li>
            <li>• Frecuencia: 3 por curso académico</li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <h4 className="text-red-800 font-semibold mb-2"><i className="fas fa-user-check mr-2"></i>Autoevaluación y Coevaluación</h4>
          <ul className="text-sm space-y-1">
            <li>• Rúbricas de autoevaluación del alumno</li>
            <li>• Portafolio (grabaciones, diario de estudio)</li>
            <li>• Coevaluación entre compañeros en música de cámara</li>
            <li>• Frecuencia: continua</li>
          </ul>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
          <h4 className="text-indigo-800 font-semibold mb-2"><i className="fas fa-video mr-2"></i>Grabaciones</h4>
          <ul className="text-sm space-y-1">
            <li>• Grabaciones semanales de autoevaluación</li>
            <li>• Comparativa temporal del progreso</li>
            <li>• Análisis crítico de la propia interpretación</li>
            <li>• Frecuencia: semanal (trabajo autónomo)</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-8">5.4. Criterios de Recuperación y Promoción</h3>
      <div className="bg-white rounded-lg border border-amber-200 p-6 shadow-sm">
        <h4 className="text-amber-900 font-semibold mb-3">Recuperación</h4>
        <ul>
          <li><strong>Evaluaciones pendientes:</strong> el alumno que no alcance el 5,0 en una evaluación trimestral dispone de una prueba de recuperación al inicio de la siguiente evaluación, que versa sobre los contenidos de la evaluación suspendida.</li>
          <li><strong>Pérdida de evaluación continua:</strong> en caso de absentismo superior al 30% de las sesiones, el alumno perderá el derecho a la evaluación continua y deberá presentarse a una prueba global extraordinaria en junio que abarque todos los contenidos del curso.</li>
          <li><strong>Prueba global de junio:</strong> escalas (todas las del nivel) + 2 estudios + 2 obras + lectura a primera vista. Duración: 25-30 minutos.</li>
        </ul>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">Promoción</h4>
        <ul>
          <li>Se promociona al curso superior cuando se alcanzan los <strong>objetivos mínimos del curso</strong> con una calificación final igual o superior a 5,0.</li>
          <li>La nota mínima en los bloques de Técnica (A) e Interpretación (B) será de 4,0.</li>
          <li>En caso de duda razonable, el departamento de Viento-Madera emitirá informe preceptivo.</li>
        </ul>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">Permanencia</h4>
        <ul>
          <li>Según la Orden de 28 de abril de 2009, el alumno podrá permanecer un <strong>máximo de dos cursos</strong> en el mismo nivel de una misma asignatura.</li>
          <li>Excepcionalmente, el equipo docente podrá autorizar un tercer curso cuando existan razones pedagógicas justificadas (NEAE, incorporación tardía, etc.).</li>
        </ul>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">Reclamación de calificaciones</h4>
        <ul>
          <li>El alumno o sus tutores legales pueden reclamar la calificación en un plazo de 3 días hábiles desde su comunicación.</li>
          <li>La reclamación se dirige al Jefe de Departamento, que elevará informe al Equipo Directivo.</li>
          <li>El procedimiento se ajusta a lo establecido en la normativa vigente del centro y la Consejería.</li>
        </ul>
      </div>

      <h3 className="mt-8">5.5. Evaluación de la Práctica Docente</h3>
      <table className="doc-table">
        <thead><tr><th>Indicador</th><th>Instrumento</th><th>Periodicidad</th><th>Responsable</th></tr></thead>
        <tbody>
          <tr><td>Adecuación de objetivos al nivel real del alumnado</td><td>Análisis de resultados académicos</td><td>Trimestral</td><td>Profesor/a titular</td></tr>
          <tr><td>Idoneidad de la temporalización</td><td>Cuaderno del profesor; memoria final</td><td>Trimestral/Anual</td><td>Profesor/a titular</td></tr>
          <tr><td>Eficacia de las metodologías empleadas</td><td>Encuestas al alumnado; resultados</td><td>Anual</td><td>Departamento</td></tr>
          <tr><td>Adecuación de instrumentos de evaluación</td><td>Análisis de la distribución de notas</td><td>Anual</td><td>Departamento</td></tr>
          <tr><td>Satisfacción del alumnado</td><td>Encuesta anónima</td><td>Anual (junio)</td><td>Coordinación EEPP</td></tr>
          <tr><td>Participación en actividades complementarias</td><td>Registro de actividades</td><td>Anual</td><td>Profesor/a titular</td></tr>
          <tr><td>Coordinación departamental</td><td>Actas de reuniones</td><td>Mensual</td><td>Jefe/a de Departamento</td></tr>
        </tbody>
      </table>
    </div>
  );
}
