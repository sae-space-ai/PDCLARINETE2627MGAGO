export function Block00() {
  return (
    <div className="content-section">
      {/* Portada visual */}
      <div className="text-center mb-12 bg-gradient-to-br from-amber-800 to-amber-950 text-white rounded-2xl p-12 shadow-xl">
        <div className="mb-6">
          <i className="fas fa-music text-5xl text-amber-300 mb-4"></i>
        </div>
        <h1 className="text-4xl font-bold mb-3">Programación Didáctica</h1>
        <h2 className="text-2xl font-light text-amber-200 mb-2">Asignatura de Clarinete</h2>
        <h3 className="text-xl text-amber-300 mb-6">Enseñanzas Profesionales de Música</h3>
        <div className="border-t border-amber-600 pt-6 mt-6">
          <p className="text-amber-200">Comunidad Autónoma de Extremadura</p>
          <p className="text-amber-300 font-semibold text-lg mt-2">Curso Académico 2026/2027</p>
        </div>
      </div>

      {/* Ficha técnica */}
      <h2>Ficha Técnica del Documento</h2>
      <table className="doc-table">
        <tbody>
          <tr><td className="font-semibold w-1/3 bg-amber-100">Centro</td><td>Conservatorio Profesional de Música (a determinar según centro de destino)</td></tr>
          <tr><td className="font-semibold bg-amber-100">Localidad</td><td>Comunidad Autónoma de Extremadura</td></tr>
          <tr><td className="font-semibold bg-amber-100">Departamento</td><td>Instrumentos de Viento-Madera</td></tr>
          <tr><td className="font-semibold bg-amber-100">Asignatura</td><td>Clarinete</td></tr>
          <tr><td className="font-semibold bg-amber-100">Especialidad</td><td>Clarinete</td></tr>
          <tr><td className="font-semibold bg-amber-100">Niveles</td><td>1º a 6º de Enseñanzas Profesionales de Música</td></tr>
          <tr><td className="font-semibold bg-amber-100">Carga horaria</td><td>1 sesión semanal de 60 minutos (clase individual), según distribución del Decreto 111/2007, Anexo I</td></tr>
          <tr><td className="font-semibold bg-amber-100">Profesor/a responsable</td><td>[Nombre del profesor/a titular de Clarinete]</td></tr>
          <tr><td className="font-semibold bg-amber-100">Jefe/a de Departamento</td><td>[Nombre del Jefe/a del Dpto. de Viento-Madera]</td></tr>
          <tr><td className="font-semibold bg-amber-100">Coordinador/a de EEPP</td><td>[Nombre del Coordinador/a de Enseñanzas Profesionales]</td></tr>
          <tr><td className="font-semibold bg-amber-100">Fecha de elaboración</td><td>Septiembre de 2026</td></tr>
          <tr><td className="font-semibold bg-amber-100">Fecha de última revisión</td><td>Septiembre de 2026</td></tr>
          <tr><td className="font-semibold bg-amber-100">Normativa de referencia</td><td>
            <ul className="list-disc ml-4 space-y-1">
              <li>Decreto 110/2007, de 22 de mayo (Currículo EE.EE. de Música, Extremadura)</li>
              <li>Decreto 111/2007, de 22 de mayo (Currículo EE.PP. de Música, Extremadura) — <strong>Norma principal</strong></li>
              <li>Decreto 54/2022, de 18 de mayo (Modificación Decreto 110/2007)</li>
              <li>Orden de 28 de abril de 2009 (Pruebas de acceso y matriculación)</li>
              <li>LOMLOE — Ley Orgánica 3/2020, de 29 de diciembre</li>
              <li>Ley 4/2011, de 7 de marzo, de Educación de Extremadura</li>
              <li>Instrucciones anuales de la Consejería de Educación y Empleo (curso 2026/2027)</li>
            </ul>
          </td></tr>
          <tr><td className="font-semibold bg-amber-100">Código del documento</td><td>PD-CLAR-EP-2026-2027-EXT</td></tr>
          <tr><td className="font-semibold bg-amber-100">Versión</td><td>1.0</td></tr>
        </tbody>
      </table>

      {/* Índice navegable */}
      <h2 className="mt-12">Índice General del Documento</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {[
          { num: '00', title: 'Portada y Ficha Técnica del Documento' },
          { num: '01', title: 'Introducción y Justificación Legal' },
          { num: '02', title: 'Objetivos' },
          { num: '03', title: 'Contenidos' },
          { num: '04', title: 'Desarrollo y Secuenciación por Unidades Didácticas' },
          { num: '05', title: 'Criterios de Evaluación e Instrumentos de Calificación' },
          { num: '06', title: 'Catálogo Completo de Rúbricas' },
          { num: '07', title: 'Metodología y Atención a la Diversidad' },
          { num: '08', title: 'Actividades Complementarias y Extraescolares' },
          { num: '09', title: 'Evaluación de la Propia Programación' },
          { num: '10', title: 'Bibliografía y Repertorio' },
          { num: '11', title: 'Trazabilidad Normativa Completa' },
          { num: '12', title: 'Despliegue en GitHub y Vercel' },
        ].map((item) => (
          <div key={item.num} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-amber-100">
            <span className="bg-amber-800 text-white text-xs font-bold px-2 py-1 rounded">B{item.num}</span>
            <span className="text-sm text-gray-700">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Resumen ejecutivo */}
      <h2 className="mt-12">Resumen Ejecutivo</h2>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="text-amber-900 font-semibold mb-3">a) Marco normativo</h4>
        <p>La presente programación se fundamenta en el <strong>Decreto 111/2007, de 22 de mayo</strong>, por el que se establece el currículo de las Enseñanzas Profesionales de Música de régimen especial en la Comunidad Autónoma de Extremadura, como norma principal. Se complementa con el Decreto 54/2022 (modificación de Enseñanzas Elementales), la LOMLOE (enfoque competencial), la Ley 4/2011 de Educación de Extremadura y la Orden de 28 de abril de 2009 (pruebas de acceso). Toda la trazabilidad es auditable.</p>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">b) Objetivos y contenidos</h4>
        <p>Se desarrollan los 12 objetivos generales del Art. 3 del Decreto 111/2007, adaptados al clarinete, con indicadores de logro y vinculación a competencias clave LOMLOE. Los contenidos se secuencian en 6 cursos con progresión técnica, interpretativa y contextual, desde el registro chalumeau hasta las técnicas extendidas contemporáneas.</p>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">c) Sistema de evaluación y calificación</h4>
        <p>Ponderación: Técnica instrumental (30%), Interpretación del repertorio (40%), Lectura a primera vista (10%), Actitud y hábitos de estudio (10%), Participación en audiciones (10%). Evaluación formativa y formadora con instrumentos variados: observación directa, audiciones, pruebas técnicas, exámenes trimestrales, autoevaluación y coevaluación.</p>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">d) Catálogo de rúbricas</h4>
        <p>Rúbricas generales por curso (5 criterios × 4 niveles), rúbricas específicas por unidad didáctica, rúbrica del instrumentista acompañante, rúbrica de audición pública, rúbrica de autoevaluación del alumnado y rúbrica de evaluación del profesorado.</p>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">e) Repertorio</h4>
        <p>Catálogo completo por curso con métodos/estudios, obras con piano, obras solo y música de cámara. Desde Demnitz y Klosé (1º EP) hasta Berio, Lutosławski y Stravinsky (6º EP), con repertorio intermedio de Mozart, Weber, Brahms, Saint-Saëns, Poulenc y Debussy.</p>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">f) Trazabilidad normativa</h4>
        <p>Matriz completa de correspondencia entre cada elemento de la programación (objetivos, contenidos, criterios, rúbricas) y la normativa de referencia (Decreto 111/2007, Decreto 54/2022, LOMLOE, Orden 28/04/2009). Análisis del impacto del Decreto 54/2022 y correspondencia con competencias clave.</p>

        <h4 className="text-amber-900 font-semibold mb-3 mt-6">g) Despliegue web</h4>
        <p>Documento diseñado para publicación como sitio web estático mediante VitePress, con despliegue automatizado en Vercel y/o GitHub Pages. Estructura de repositorio, configuración completa, flujos de trabajo CI/CD y buenas prácticas de mantenimiento incluidas.</p>
      </div>
    </div>
  );
}
