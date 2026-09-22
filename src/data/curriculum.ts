// ============================================================
// CURRICULUM DATA — PROGRAMACIÓN DIDÁCTICA DE CLARINETE 2026/2027
// Enseñanzas Elementales (EE1-EE4) y Enseñanzas Profesionales (EP1-EP6)
// Comunidad Autónoma de Extremadura
// ============================================================

export type DocState = 'VERIFICADO' | 'DESARROLLO_PROPIO' | 'PROPUESTO' | 'HOLD';

export interface Normativa {
  id: string;
  nombre: string;
  fecha: string;
  estado: DocState;
  url?: string;
  aplicacion: string;
}

export interface Objetivo {
  id: string;
  texto: string;
  tipo: 'tecnico' | 'interpretativo' | 'actitudinal';
  trazabilidad: string;
  indicador: string;
  estado: DocState;
}

export interface UnidadDidactica {
  id: string;
  titulo: string;
  curso: string;
  trimestre: string;
  sesiones: string;
  estado: DocState;
  objetivos: string[];
  contenidos: { c: string[]; p: string[]; a: string[] };
  repertorio: string[];
  criterios: { criterion: string; trace: string; instrument: string }[];
  rubrica: { indicador: string; niveles: string[] }[];
}

export interface Rubrica {
  id: string;
  titulo: string;
  curso: string;
  criterios: { nombre: string; niveles: string[] }[];
  estado: DocState;
}

export interface RepertorioItem {
  titulo: string;
  autor: string;
  tipo: 'metodo' | 'estudio' | 'obra_piano' | 'solo' | 'camara';
  curso: string;
  funcion: string;
  estado: DocState;
}

// ============================================================
// NORMATIVA
// ============================================================
export const normativas: Normativa[] = [
  { id: 'NORMA-110-2007', nombre: 'Decreto 110/2007, de 22 de mayo', fecha: '22/05/2007', estado: 'VERIFICADO', aplicacion: 'Currículo de las Enseñanzas Elementales de Música de régimen especial en Extremadura. Organiza las EE en cuatro cursos.' },
  { id: 'NORMA-111-2007', nombre: 'Decreto 111/2007, de 22 de mayo', fecha: '22/05/2007', estado: 'VERIFICADO', aplicacion: 'NORMA PRINCIPAL. Currículo de las Enseñanzas Profesionales de Música. Art. 3 (Objetivos), Art. 4 (Contenidos), Art. 5 (Evaluación), Anexo I (Clarinete).' },
  { id: 'NORMA-54-2022', nombre: 'Decreto 54/2022, de 18 de mayo', fecha: '18/05/2022', estado: 'VERIFICADO', aplicacion: 'Modifica el Decreto 110/2007 (EE) e incorpora Órgano. NO modifica el Decreto 111/2007 (EP). Impacto indirecto en EP: continuidad curricular.' },
  { id: 'NORMA-ORDEN-2009', nombre: 'Orden de 28 de abril de 2009', fecha: '28/04/2009', estado: 'VERIFICADO', aplicacion: 'Pruebas de acceso y matriculación en EE y EP de Música en Extremadura.' },
  { id: 'NORMA-LOMLOE', nombre: 'LOMLOE — Ley Orgánica 3/2020', fecha: '29/12/2020', estado: 'VERIFICADO', aplicacion: 'Competencias clave, perfil de salida, evaluación formativa y formadora.' },
  { id: 'NORMA-LEY4-2011', nombre: 'Ley 4/2011, de 7 de marzo, de Educación de Extremadura', fecha: '07/03/2011', estado: 'VERIFICADO', aplicacion: 'Capítulo IX del Título IV: enseñanzas artísticas. Marco autonómico general.' },
  { id: 'NORMA-INSTRUCCIONES-2026', nombre: 'Instrucciones anuales Consejería 2026/2027', fecha: '2026', estado: 'HOLD', aplicacion: 'Organización académica del curso 2026/2027. PENDIENTE DE PUBLICACIÓN.' },
];

// ============================================================
// OBJETIVOS GENERALES — Art. 3 Decreto 111/2007
// ============================================================
export const objetivosGenerales = [
  { letra: 'a', texto: 'Superar con dominio y capacidad crítica los contenidos y objetivos previstos para cada uno de los cursos de las enseñanzas profesionales de música.', interpretacion: 'El alumno demuestra dominio técnico e interpretativo, con capacidad de autocrítica fundamentada.', competencias: 'Aprender a aprender; Comunicación lingüística.' },
  { letra: 'b', texto: 'Conocer los elementos básicos de los lenguajes musicales y tener capacidad para utilizarlos con flexibilidad.', interpretacion: 'Aplica conocimientos de lenguaje musical (ritmo, melodía, armonía, forma) a la interpretación instrumental.', competencias: 'Comunicación lingüística; Competencia matemática.' },
  { letra: 'c', texto: 'Utilizar el oído interno como base de afinación, audición armónica e interpretación.', interpretacion: 'Desarrolla el oído interno para anticipar el sonido, controlar la afinación y escuchar armónicamente.', competencias: 'Competencia matemática y C.T.; Conciencia cultural.' },
  { letra: 'd', texto: 'Formar una imagen ajustada de las propias posibilidades y características musicales.', interpretacion: 'Conoce sus fortalezas y áreas de mejora, establece metas realistas y gestiona la ansiedad escénica.', competencias: 'Personal, social y aprender a aprender.' },
  { letra: 'e', texto: 'Compartir vivencias musicales de grupo a través de la participación en formaciones instrumentales y vocales.', interpretacion: 'Participa en dúos, tríos, ensembles y agrupaciones del centro con habilidades de escucha y ajuste.', competencias: 'Competencias sociales y cívicas; Conciencia cultural.' },
  { letra: 'f', texto: 'Valorar el cuerpo y la mente para utilizar con seguridad la técnica corporal y mental.', interpretacion: 'Adopta postura ergonómica, respira diafragmáticamente y utiliza técnicas de relajación y concentración.', competencias: 'Competencia matemática y C.T.' },
  { letra: 'g', texto: 'Interrelacionar y aplicar los conocimientos de todas las asignaturas que componen el currículo.', interpretacion: 'Conecta Lenguaje Musical, Análisis, Historia y Cámara con la práctica instrumental.', competencias: 'Todas las competencias clave.' },
  { letra: 'h', texto: 'Conocer y aplicar las técnicas del instrumento principal según las exigencias de las obras.', interpretacion: 'Domina progresivamente las técnicas del clarinete y las aplica según exigencias estilísticas.', competencias: 'Conciencia y expresión culturales.' },
  { letra: 'i', texto: 'Adquirir y demostrar los reflejos necesarios para resolver eventualidades en la interpretación pública.', interpretacion: 'Desarrolla capacidad de reacción ante imprevistos sin interrumpir la interpretación.', competencias: 'Competencia emprendedora; Aprender a aprender.' },
  { letra: 'j', texto: 'Cultivar la improvisación y la transposición como recursos para el desarrollo de la creatividad musical.', interpretacion: 'Practica improvisación sobre estructuras y transposición a vista de fragmentos.', competencias: 'Competencia emprendedora; Conciencia cultural.' },
  { letra: 'k', texto: 'Interpretar obras escritas en todos los lenguajes musicales, mostrando capacidad para analizar y comprender las diferentes estructuras.', interpretacion: 'Interpreta obras de todos los períodos con adaptación estilística.', competencias: 'Conciencia y expresión culturales.' },
  { letra: 'l', texto: 'Actuar en público con autocontrol, dominio de la memoria y capacidad comunicativa.', interpretacion: 'Se presenta en audiciones con seguridad, interpreta de memoria y gestiona la presión escénica.', competencias: 'Competencias sociales y cívicas; Conciencia cultural.' },
];

// ============================================================
// OBJETIVOS ESPECÍFICOS POR CURSO
// ============================================================
export const objetivosPorCurso: Record<string, Objetivo[]> = {
  'EE1': [
    { id: 'OBJ-CL-EE1-01', texto: 'Adoptar una posición corporal correcta y relajada con el clarinete', tipo: 'tecnico', trazabilidad: 'Art. 3.f (adaptado EE)', indicador: 'Mantiene postura correcta durante 10 min sin tensión visible', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-02', texto: 'Iniciar la respiración diafragmática básica', tipo: 'tecnico', trazabilidad: 'Art. 3.f (adaptado EE)', indicador: 'Realiza ciclos respiratorios de 4 compases en notas largas', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-03', texto: 'Producir el primer sonido estable en el registro chalumeau', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Emite si₃ y do₄ con sonido centrado y sin quiebros', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-04', texto: 'Conocer las primeras digitaciones (si♭, la, sol, fa, mi, re, do)', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Digita correctamente las 7 notas del registro grave', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-05', texto: 'Iniciar la articulación simple (staccato básico)', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Diferencia legato de staccato en notas largas', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-06', texto: 'Leer notas en pentagrama en clave de Sol', tipo: 'interpretativo', trazabilidad: 'Art. 3.b (adaptado EE)', indicador: 'Reconoce las notas del registro chalumeau en partitura', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-07', texto: 'Interpretar melodías sencillas con pulso regular', tipo: 'interpretativo', trazabilidad: 'Art. 3.k (adaptado EE)', indicador: 'Toca canciones infantiles con pulso constante', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-08', texto: 'Desarrollar hábitos de práctica diaria (15-20 min)', tipo: 'actitudinal', trazabilidad: 'Art. 3.a (adaptado EE)', indicador: 'Presenta diario de práctica con registro diario', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-09', texto: 'Mostrar actitud positiva y respeto en el aula', tipo: 'actitudinal', trazabilidad: 'Art. 3.e (adaptado EE)', indicador: 'Participa activamente y respeta turnos de compañeros', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE1-10', texto: 'Conocer el clarinete como instrumento y sus partes', tipo: 'actitudinal', trazabilidad: 'Art. 3.d (adaptado EE)', indicador: 'Identifica y nombra todas las partes del clarinete', estado: 'DESARROLLO_PROPIO' },
  ],
  'EE2': [
    { id: 'OBJ-CL-EE2-01', texto: 'Ampliar la extensión del registro chalumeau (mi₃ a si♭₃ completo)', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Domina todas las notas del registro grave con sonido estable', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-02', texto: 'Controlar la respiración en frases de 4-8 compases', tipo: 'tecnico', trazabilidad: 'Art. 3.f (adaptado EE)', indicador: 'Mantiene el sonido durante frases de 8 compases sin quiebros', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-03', texto: 'Dominar la articulación legato y staccato con claridad', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Diferencia claramente legato, staccato y portato', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-04', texto: 'Interpretar escalas de Do Mayor y Sol Mayor (una octava)', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Ejecuta escalas de Do y Sol M de memoria a ♩=60', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-05', texto: 'Aplicar dinámicas básicas (p, f, mp, mf)', tipo: 'interpretativo', trazabilidad: 'Art. 3.k (adaptado EE)', indicador: 'Diferencia y aplica p, mp, mf y f en melodías', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-06', texto: 'Leer a primera vista fragmentos muy sencillos', tipo: 'interpretativo', trazabilidad: 'Art. 3.b (adaptado EE)', indicador: 'Lee fragmentos de 8 compases en Do M sin detenerse', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-07', texto: 'Interpretar obras sencillas con carácter y estilo básico', tipo: 'interpretativo', trazabilidad: 'Art. 3.k (adaptado EE)', indicador: 'Interpreta melodías populares con carácter adecuado', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-08', texto: 'Desarrollar hábitos de estudio diario (20-30 min)', tipo: 'actitudinal', trazabilidad: 'Art. 3.a (adaptado EE)', indicador: 'Practica diariamente con uso de metrónomo', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-09', texto: 'Participar en audiciones de aula con respeto al turno y escucha activa', tipo: 'actitudinal', trazabilidad: 'Art. 3.e (adaptado EE)', indicador: 'Escucha activamente a compañeros y participa en audiciones trimestrales', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE2-10', texto: 'Conocer los compositores clásicos fundamentales (Mozart)', tipo: 'actitudinal', trazabilidad: 'Art. 3.b (adaptado EE)', indicador: 'Sitúa a Mozart en el Clasicismo y conoce su relación con el clarinete', estado: 'DESARROLLO_PROPIO' },
  ],
  'EE3': [
    { id: 'OBJ-CL-EE3-01', texto: 'Iniciar el registro clarín (si♭₃ a f₄)', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Emite las primeras notas del clarín con sonido centrado', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-02', texto: 'Controlar el passaggio (si♭₃-do₄) con homogeneidad', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Cruza el passaggio sin quiebros tímbricos evidentes', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-03', texto: 'Dominar escalas mayores hasta 3 alteraciones', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Ejecuta escalas de Do, Sol, Fa, Re, La, Mi, Si♭ M', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-04', texto: 'Iniciar la articulación doble a tempo lento', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Ejecuta ta-ka a ♩=60 con igualdad rítmica', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-05', texto: 'Interpretar estudios de nivel medio con fluidez', tipo: 'interpretativo', trazabilidad: 'Art. 3.k (adaptado EE)', indicador: 'Interpreta estudios de Gambaro/Klosé con musicalidad', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-06', texto: 'Aplicar fraseo expresivo con dirección musical', tipo: 'interpretativo', trazabilidad: 'Art. 3.k (adaptado EE)', indicador: 'Construye frases con crescendo, dirección y respiración', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-07', texto: 'Iniciar la transposición de fragmentos sencillos', tipo: 'interpretativo', trazabilidad: 'Art. 3.j (adaptado EE)', indicador: 'Transpone melodías de Do a Sol y viceversa', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-08', texto: 'Participar en actividades complementarias del centro (audiciones, conciertos)', tipo: 'actitudinal', trazabilidad: 'Art. 3.e (adaptado EE)', indicador: 'Participa activamente en audiciones y conciertos del centro', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-09', texto: 'Desarrollar autonomía en el estudio (30-40 min/día)', tipo: 'actitudinal', trazabilidad: 'Art. 3.a (adaptado EE)', indicador: 'Planifica su semana de estudio con objetivos concretos', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE3-10', texto: 'Conocer el repertorio romántico para clarinete', tipo: 'actitudinal', trazabilidad: 'Art. 3.b (adaptado EE)', indicador: 'Identifica obras de Weber, Spohr y Mendelssohn para clarinete', estado: 'DESARROLLO_PROPIO' },
  ],
  'EE4': [
    { id: 'OBJ-CL-EE4-01', texto: 'Consolidar el registro clarín con homogeneidad tímbrica', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Sonido homogéneo en chalumeau y clarín sin quiebros', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-02', texto: 'Dominar la articulación doble a tempo moderado (♩=80)', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Ejecuta pasajes en doble articulación a ♩=80 con igualdad', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-03', texto: 'Dominar escalas mayores y menores hasta 4 alteraciones', tipo: 'tecnico', trazabilidad: 'Art. 3.h (adaptado EE)', indicador: 'Ejecuta todas las escalas hasta 4 alteraciones de memoria', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-04', texto: 'Controlar la afinación en el registro de paso', tipo: 'tecnico', trazabilidad: 'Art. 3.c (adaptado EE)', indicador: 'Corrige la afinación de notas críticas sin afinador', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-05', texto: 'Interpretar obras de nivel medio-alto con criterio estilístico', tipo: 'interpretativo', trazabilidad: 'Art. 3.k (adaptado EE)', indicador: 'Interpreta el 1er mov. de la Sonata de Brahms nº 1 con estilo', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-06', texto: 'Desarrollar la lectura a primera vista en tonalidades hasta 3 alteraciones', tipo: 'interpretativo', trazabilidad: 'Art. 3.b (adaptado EE)', indicador: 'Lee fragmentos de 16 compases en 3 alteraciones sin detenerse', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-07', texto: 'Interpretar al menos una obra de memoria con seguridad', tipo: 'interpretativo', trazabilidad: 'Art. 3.l (adaptado EE)', indicador: 'Interpreta un estudio de 24 compases de memoria', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-08', texto: 'Preparar la transición a las Enseñanzas Profesionales', tipo: 'actitudinal', trazabilidad: 'Art. 3.a (adaptado EE)', indicador: 'Demuestra nivel suficiente para superar prueba de acceso a EP', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-09', texto: 'Participar en audiciones públicas con autocontrol', tipo: 'actitudinal', trazabilidad: 'Art. 3.l (adaptado EE)', indicador: 'Actúa en al menos 2 audiciones sin interrupciones por nervios', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EE4-10', texto: 'Analizar formalmente las obras interpretadas', tipo: 'actitudinal', trazabilidad: 'Art. 3.b (adaptado EE)', indicador: 'Identifica estructura binaria, ternaria y sonata simplificada', estado: 'DESARROLLO_PROPIO' },
  ],
};

// ============================================================
// CALIFICACIÓN — PROPUESTO (valores estándar basados en práctica habitual)
// ============================================================
export const calificacionInfo = {
  estado: 'PROPUESTO' as DocState,
  nota: 'Los porcentajes propuestos se basan en la práctica habitual de conservatorios profesionales. Deben ser validados con las instrucciones anuales de la Consejería de Educación y Empleo para el curso 2026/2027 y adaptados según el Proyecto Educativo del Centro.',
  bloquesPropuestos: [
    { nombre: 'A. Técnica Instrumental', ponderacion: '30%', contenidos: 'Respiración, embocadura, sonido, articulación, digitación, escalas, arpegios, afinación' },
    { nombre: 'B. Interpretación del Repertorio', ponderacion: '40%', contenidos: 'Obras, estudios, fraseo, dinámica, estilo, memoria, expresividad' },
    { nombre: 'C. Lectura a Primera Vista', ponderacion: '10%', contenidos: 'Corrección rítmica, afinación, continuidad, reconocimiento de patrones' },
    { nombre: 'D. Actitud y Hábitos de Estudio', ponderacion: '10%', contenidos: 'Asistencia, puntualidad, actitud, trabajo en casa, diario de estudio' },
    { nombre: 'E. Participación en Audiciones', ponderacion: '10%', contenidos: 'Preparación, autocontrol, comunicación, respeto' },
  ],
};

// ============================================================
// RÚBRICAS GENERALES POR CURSO
// ============================================================
export const rubricasGenerales: Rubrica[] = [
  {
    id: 'RUB-CL-EE1-GEN', titulo: 'Rúbrica General — 1º Enseñanzas Elementales', curso: 'EE1', estado: 'DESARROLLO_PROPIO',
    criterios: [
      { nombre: 'Postura y respiración', niveles: ['Postura incorrecta constante', 'Postura correcta con corrección frecuente', 'Postura correcta con recordatorios', 'Postura correcta y relajada de forma autónoma'] },
      { nombre: 'Emisión sonora', niveles: ['Sonido inestable, aireado', 'Sonido estable con corrección', 'Sonido centrado en notas largas', 'Sonido bello, centrado y proyectado'] },
      { nombre: 'Digitación', niveles: ['Confunde digitaciones básicas', 'Digita con ayuda del profesor', 'Digita correctamente las notas trabajadas', 'Digita con fluidez y sin errores'] },
      { nombre: 'Ritmo y pulso', niveles: ['No mantiene el pulso', 'Mantiene el pulso con ayuda', 'Mantiene el pulso de forma autónoma', 'Pulso perfecto y regular'] },
      { nombre: 'Actitud y hábitos', niveles: ['No trae material, actitud pasiva', 'Trae material, actitud correcta', 'Estudia en casa, actitud positiva', 'Estudio diario organizado, actitud ejemplar'] },
    ]
  },
  {
    id: 'RUB-CL-EE2-GEN', titulo: 'Rúbrica General — 2º Enseñanzas Elementales', curso: 'EE2', estado: 'DESARROLLO_PROPIO',
    criterios: [
      { nombre: 'Respiración y sonido', niveles: ['Respiración superficial, sonido inestable', 'Respiración diafragmática básica, sonido aceptable', 'Respiración fluida, sonido homogéneo', 'Respiración profunda, sonido bello y controlado'] },
      { nombre: 'Articulación', niveles: ['No diferencia legato de staccato', 'Diferencia con imprecisiones', 'Diferencia claramente las articulaciones', 'Articulación precisa, musical y variada'] },
      { nombre: 'Escalas', niveles: ['No memoriza escalas', 'Ejecuta escalas con consulta', 'Ejecuta escalas de memoria con algunos errores', 'Ejecuta escalas de memoria con fluidez y afinación'] },
      { nombre: 'Interpretación', niveles: ['Interpretación mecánica', 'Fraseo básico', 'Fraseo con dirección musical', 'Interpretación expresiva con carácter'] },
      { nombre: 'Actitud y hábitos', niveles: ['Estudio irregular', 'Estudio diario básico', 'Estudio planificado con metrónomo', 'Estudio autónomo y eficiente'] },
    ]
  },
  {
    id: 'RUB-CL-EE3-GEN', titulo: 'Rúbrica General — 3º Enseñanzas Elementales', curso: 'EE3', estado: 'DESARROLLO_PROPIO',
    criterios: [
      { nombre: 'Respiración y sonido', niveles: ['Quiebros evidentes en el passaggio', 'Homogeneidad aceptable entre registros', 'Homogeneidad buena, passaggio controlado', 'Homogeneidad total, sonido personal'] },
      { nombre: 'Articulación', niveles: ['Articulación doble no ejecutable', 'Doble articulación a tempo lento', 'Doble articulación a ♩=72 con igualdad', 'Doble articulación a ♩=80 con limpieza'] },
      { nombre: 'Escalas', niveles: ['Escalas incompletas', 'Escalas hasta 2 alteraciones', 'Escalas hasta 3 alteraciones de memoria', 'Escalas hasta 3 alteraciones con fluidez y afinación'] },
      { nombre: 'Interpretación', niveles: ['Sin carácter estilístico', 'Carácter básico', 'Estilo adecuado a la obra', 'Estilo convincente y personal'] },
      { nombre: 'Actitud y hábitos', niveles: ['Participación pasiva en actividades del centro', 'Participación correcta en audiciones', 'Participación activa y comprometida', 'Liderazgo e iniciativa en actividades musicales'] },
    ]
  },
  {
    id: 'RUB-CL-EE4-GEN', titulo: 'Rúbrica General — 4º Enseñanzas Elementales', curso: 'EE4', estado: 'DESARROLLO_PROPIO',
    criterios: [
      { nombre: 'Respiración y sonido', niveles: ['Sonido desigual en registros', 'Homogeneidad aceptable', 'Homogeneidad buena en 2 octavas', 'Sonido homogéneo y personal'] },
      { nombre: 'Articulación', niveles: ['Doble articulación deficiente', 'Doble a tempo lento', 'Doble a ♩=80 con corrección', 'Doble a ♩=88 con limpieza y musicalidad'] },
      { nombre: 'Escalas', niveles: ['Escalas con errores', 'Escalas hasta 3 alteraciones', 'Escalas hasta 4 alteraciones de memoria', 'Escalas hasta 4 alteraciones con fluidez total'] },
      { nombre: 'Interpretación', niveles: ['Sin criterio estilístico', 'Estilo básico', 'Estilo adecuado y convincente', 'Estilo maduro y personal'] },
      { nombre: 'Actitud y preparación para EP', niveles: ['No preparado para EP', 'Nivel justo para acceso', 'Buen nivel para acceso a EP', 'Nivel excelente, preparado para EP con solvencia'] },
    ]
  },
  {
    id: 'RUB-CL-EP1-GEN', titulo: 'Rúbrica General — 1º Enseñanzas Profesionales', curso: 'EP1', estado: 'DESARROLLO_PROPIO',
    criterios: [
      { nombre: 'Respiración y sonido', niveles: ['Respiración superficial; sonido aireado e inestable', 'Respiración diafragmática básica; sonido estable en chalumeau con leves irregularidades', 'Respiración diafragmática fluida; sonido homogéneo y centrado en chalumeau y clarín', 'Respiración profunda y gestionada; sonido bello, proyectado y personal en los tres registros'] },
      { nombre: 'Articulación', niveles: ['No diferencia legato de staccato; emisión irregular', 'Diferencia legato y staccato con imprecisiones; staccato aceptable en chalumeau', 'Diferencia claramente legato, staccato, portato y accentato en ambos registros', 'Articulación precisa, musical y adaptada al estilo; control dinámico en todas las articulaciones'] },
      { nombre: 'Digitación y escalas', niveles: ['Confunde digitaciones; no memoriza escalas; mecanismo torpe', 'Ejecuta escalas de Do, Sol, Fa M de memoria con algunos errores; mecanismo aceptable', 'Ejecuta las escalas del nivel (hasta 3 alteraciones) de memoria con fluidez y limpieza', 'Domina todas las escalas del nivel a tempo adecuado; mecanismo limpio, ágil y seguro'] },
      { nombre: 'Interpretación y estilo', niveles: ['Interpretación mecánica sin fraseo; no respeta dinámicas ni indicaciones', 'Interpretación correcta con fraseo básico; respeta dinámicas principales', 'Fraseo con dirección musical; respeta todas las indicaciones; carácter adecuado', 'Interpretación musicalmente madura; fraseo personal; comunicación emocional convincente'] },
      { nombre: 'Actitud y hábitos', niveles: ['No trae material; no trabaja en casa; actitud pasiva o negativa', 'Trabaja en casa de forma irregular; actitud correcta pero poco proactiva', 'Trabaja diariamente; trae material; actitud positiva y receptiva; participa en audiciones', 'Estudio organizado y eficiente; actitud ejemplar; iniciativa propia; liderazgo en actividades'] },
    ]
  },
  {
    id: 'RUB-CL-EP2-GEN', titulo: 'Rúbrica General — 2º Enseñanzas Profesionales', curso: 'EP2', estado: 'DESARROLLO_PROPIO',
    criterios: [
      { nombre: 'Respiración y sonido', niveles: ['Quiebros evidentes entre registros; sonido inestable en clarín', 'Homogeneidad aceptable entre chalumeau y clarín; altissimo inestable', 'Homogeneidad en 2 octavas; altissimo controlado; color tímbrico adecuado', 'Sonido homogéneo en toda la extensión; timbre personal; proyección excelente'] },
      { nombre: 'Articulación', niveles: ['Articulación doble no ejecutable; staccato irregular en clarín', 'Articulación doble a tempo lento; staccato aceptable en clarín', 'Articulación doble a ♩=88 con igualdad; staccato brillante en clarín', 'Articulación doble a tempo de concierto; dominio total de todas las articulaciones'] },
      { nombre: 'Digitación y escalas', niveles: ['No domina las escalas de 1º; mecanismo insuficiente', 'Escalas hasta 3 alteraciones en 2 octavas; arpegios de 7ª básicos', 'Escalas hasta 5 alteraciones en 2 octavas; arpegios de 7ª con fluidez', 'Las 12 tonalidades mayores en 2 octavas; mecanismo avanzado con limpieza'] },
      { nombre: 'Interpretación y estilo', niveles: ['Interpretación sin carácter romántico; fraseo plano', 'Fraseo romántico básico; diferencia Clasicismo de Romanticismo', 'Fraseo romántico con rubato controlado; carácter convincente', 'Interpretación estilísticamente madura; personalidad musical emergente'] },
      { nombre: 'Actitud y hábitos', niveles: ['Estudio irregular; no graba; no analiza versiones', 'Estudio diario básico; grabación ocasional; escucha alguna versión', 'Estudio planificado; grabación semanal; análisis comparativo de versiones', 'Autonomía total; planificación estratégica; análisis crítico profundo'] },
    ]
  },
];

// ============================================================
// REPERTORIO
// ============================================================
export const repertorio: RepertorioItem[] = [
  // EE1
  { titulo: 'Escuela elemental', autor: 'Demnitz', tipo: 'metodo', curso: 'EE1', funcion: 'Primeros ejercicios técnicos', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Método completo (1ª parte)', autor: 'Klosé', tipo: 'metodo', curso: 'EE1', funcion: 'Método fundamental', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Marcha Turca (adaptación)', autor: 'Mozart', tipo: 'obra_piano', curso: 'EE1', funcion: 'Primera obra con acompañamiento', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Melodías populares (selección)', autor: 'Schumann', tipo: 'obra_piano', curso: 'EE1', funcion: 'Melodías cantables', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Ejercicios de sonidos largos', autor: 'Varios', tipo: 'solo', curso: 'EE1', funcion: 'Control de emisión', estado: 'DESARROLLO_PROPIO' },
  // EE2
  { titulo: 'Método completo (1ª parte avanzada)', autor: 'Klosé', tipo: 'metodo', curso: 'EE2', funcion: 'Continuación del método', estado: 'DESARROLLO_PROPIO' },
  { titulo: '21 Capricci (selección)', autor: 'Gambaro', tipo: 'estudio', curso: 'EE2', funcion: 'Estudios técnicos', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Melodías populares op. 68', autor: 'Schumann', tipo: 'obra_piano', curso: 'EE2', funcion: 'Obras con carácter', estado: 'DESARROLLO_PROPIO' },
  // EE3
  { titulo: 'Método completo (2ª parte)', autor: 'Klosé', tipo: 'metodo', curso: 'EE3', funcion: 'Tercer nivel técnico', estado: 'DESARROLLO_PROPIO' },
  { titulo: '21 Capricci (completo)', autor: 'Gambaro', tipo: 'estudio', curso: 'EE3', funcion: 'Estudios avanzados', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Aria de La clemenza di Tito', autor: 'Mozart', tipo: 'obra_piano', curso: 'EE3', funcion: 'Estilo clásico', estado: 'DESARROLLO_PROPIO' },
  // EE4
  { titulo: 'Método completo (1ª parte)', autor: 'Baermann', tipo: 'metodo', curso: 'EE4', funcion: 'Preparación para EP', estado: 'DESARROLLO_PROPIO' },
  { titulo: '26 Estudios', autor: 'Rose', tipo: 'estudio', curso: 'EE4', funcion: 'Estudios pre-profesionales', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sonata nº 1 en Fa m (1er mov.)', autor: 'Brahms', tipo: 'obra_piano', curso: 'EE4', funcion: 'Repertorio romántico', estado: 'DESARROLLO_PROPIO' },
  // EP1
  { titulo: 'Método completo (2ª parte)', autor: 'Baermann', tipo: 'metodo', curso: 'EP1', funcion: 'Técnica profesional', estado: 'DESARROLLO_PROPIO' },
  { titulo: '32 Estudios', autor: 'Rose', tipo: 'estudio', curso: 'EP1', funcion: 'Estudios técnicos profesionales', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Concierto nº 1 en Fa m (1er mov.)', autor: 'Weber', tipo: 'obra_piano', curso: 'EP1', funcion: 'Repertorio virtuosístico', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Concierto en Si♭ M', autor: 'Stamitz', tipo: 'obra_piano', curso: 'EP1', funcion: 'Estilo clásico', estado: 'DESARROLLO_PROPIO' },
  // EP2
  { titulo: '32 Estudios', autor: 'Rose', tipo: 'estudio', curso: 'EP2', funcion: 'Estudios avanzados', estado: 'DESARROLLO_PROPIO' },
  { titulo: '30 Estudios', autor: 'Müller', tipo: 'estudio', curso: 'EP2', funcion: 'Técnica alemana', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Concierto en La M K.622', autor: 'Mozart', tipo: 'obra_piano', curso: 'EP2', funcion: 'Obra cumbre del clasicismo', estado: 'DESARROLLO_PROPIO' },
  // EP3
  { titulo: '30 Caprichos', autor: 'Cavallini', tipo: 'estudio', curso: 'EP3', funcion: 'Virtuosismo italiano', estado: 'DESARROLLO_PROPIO' },
  { titulo: '24 Estudios', autor: 'Stark', tipo: 'estudio', curso: 'EP3', funcion: 'Técnica avanzada', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sonata nº 2 en Mi♭ M', autor: 'Brahms', tipo: 'obra_piano', curso: 'EP3', funcion: 'Romanticismo tardío', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sonata', autor: 'Saint-Saëns', tipo: 'obra_piano', curso: 'EP3', funcion: 'Estilo francés', estado: 'DESARROLLO_PROPIO' },
  // EP4
  { titulo: '16 Estudios modernos', autor: 'Jeanjean', tipo: 'estudio', curso: 'EP4', funcion: 'Estudios contemporáneos', estado: 'DESARROLLO_PROPIO' },
  { titulo: '48 Estudios', autor: 'Uhl', tipo: 'estudio', curso: 'EP4', funcion: 'Técnica contemporánea', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sonata', autor: 'Poulenc', tipo: 'obra_piano', curso: 'EP4', funcion: 'Neoclasicismo francés', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Concierto nº 2', autor: 'Weber', tipo: 'obra_piano', curso: 'EP4', funcion: 'Virtuosismo romántico', estado: 'DESARROLLO_PROPIO' },
  // EP5
  { titulo: '48 Estudios (completo)', autor: 'Uhl', tipo: 'estudio', curso: 'EP5', funcion: 'Técnica superior', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sonata nº 2', autor: 'Brahms', tipo: 'obra_piano', curso: 'EP5', funcion: 'Repertorio romántico maduro', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sonata', autor: 'Poulenc', tipo: 'obra_piano', curso: 'EP5', funcion: 'Estilo francés s.XX', estado: 'DESARROLLO_PROPIO' },
  // EP6
  { titulo: '16 Estudios modernos (completo)', autor: 'Jeanjean', tipo: 'estudio', curso: 'EP6', funcion: 'Preparación superior', estado: 'DESARROLLO_PROPIO' },
  { titulo: '48 Estudios (completo)', autor: 'Uhl', tipo: 'estudio', curso: 'EP6', funcion: 'Nivel pre-superior', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Première Rhapsodie', autor: 'Debussy', tipo: 'obra_piano', curso: 'EP6', funcion: 'Impresionismo', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Tres piezas', autor: 'Stravinsky', tipo: 'solo', curso: 'EP6', funcion: 'Contemporáneo', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Grave', autor: 'Lutosławski', tipo: 'solo', curso: 'EP6', funcion: 'Contemporáneo polaco', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sequenza IXa', autor: 'Berio', tipo: 'solo', curso: 'EP6', funcion: 'Vanguardia', estado: 'DESARROLLO_PROPIO' },
  // Música de cámara
  { titulo: 'Quinteto para clarinete y cuerda KV 581', autor: 'Mozart', tipo: 'camara', curso: 'EP2', funcion: 'Obra cumbre del clasicismo', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Trío op. 114', autor: 'Brahms', tipo: 'camara', curso: 'EP3', funcion: 'Romanticismo tardío', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Quinteto op. 115', autor: 'Brahms', tipo: 'camara', curso: 'EP5', funcion: 'Obra cumbre romántica', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Sonata para clarinete y piano', autor: 'Poulenc', tipo: 'camara', curso: 'EP4', funcion: 'Neoclasicismo francés', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Quinteto para clarinete', autor: 'Nielsen', tipo: 'camara', curso: 'EP5', funcion: 'Repertorio nórdico s.XX', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Historia del Soldado (suite)', autor: 'Stravinsky', tipo: 'camara', curso: 'EP6', funcion: 'Contemporáneo', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Grand Duo Concertante op. 48', autor: 'Weber', tipo: 'camara', curso: 'EP1', funcion: 'Repertorio romántico', estado: 'DESARROLLO_PROPIO' },
  { titulo: 'Fantasiestücke op. 73', autor: 'Schumann', tipo: 'camara', curso: 'EP1', funcion: 'Romanticismo (versión clarinete-piano)', estado: 'DESARROLLO_PROPIO' },
];

// ============================================================
// AUDITORÍA NORMATIVA
// ============================================================
export interface AuditoriaItem {
  id: string;
  elemento: string;
  norma: string;
  articulo: string;
  estado: 'VERIFICADO' | 'VERIFICADO_MODIFICADO' | 'PENDIENTE' | 'HOLD' | 'NO_APLICABLE';
  observaciones: string;
}

export const auditoriaNormativa: AuditoriaItem[] = [
  { id: 'AUD-001', elemento: 'Objetivos Generales', norma: 'Decreto 111/2007', articulo: 'Art. 3', estado: 'VERIFICADO', observaciones: 'Transcripción literal de las letras a) a l). Desarrollo didáctico propio.' },
  { id: 'AUD-002', elemento: 'Contenidos EP', norma: 'Decreto 111/2007', articulo: 'Anexo I', estado: 'VERIFICADO', observaciones: 'Contenidos de la especialidad de Clarinete según Anexo I.' },
  { id: 'AUD-003', elemento: 'Criterios de Evaluación', norma: 'Decreto 111/2007', articulo: 'Art. 5 + Anexo I', estado: 'VERIFICADO', observaciones: 'Criterios generales derivados del Art. 5 y criterios específicos del Anexo I.' },
  { id: 'AUD-004', elemento: 'Contenidos EE', norma: 'Decreto 110/2007', articulo: 'Anexo I', estado: 'VERIFICADO', observaciones: 'Contenidos de EE según Decreto 110/2007, modificado por Decreto 54/2022.' },
  { id: 'AUD-005', elemento: 'Pruebas de Acceso', norma: 'Orden 28/04/2009', articulo: 'Art. 8-12', estado: 'VERIFICADO', observaciones: 'Regulación de pruebas de acceso a EE y EP.' },
  { id: 'AUD-006', elemento: 'Promoción y Permanencia', norma: 'Decreto 111/2007 + Orden 28/04/2009', articulo: 'Art. 5 + Art. 15-18', estado: 'VERIFICADO', observaciones: 'Criterios de promoción y permanencia.' },
  { id: 'AUD-007', elemento: 'Competencias Clave', norma: 'LOMLOE (LO 3/2020)', articulo: 'Art. 4 + Anexo I-B', estado: 'VERIFICADO', observaciones: 'Aplicación indirecta del enfoque competencial.' },
  { id: 'AUD-008', elemento: 'Impacto Decreto 54/2022', norma: 'Decreto 54/2022', articulo: 'Disposición única', estado: 'VERIFICADO', observaciones: 'Modifica Decreto 110/2007 (EE). NO modifica Decreto 111/2007 (EP). Impacto indirecto en EP.' },
  { id: 'AUD-009', elemento: 'Instrucciones 2026/2027', norma: 'Consejería de Educación y Empleo', articulo: 'Instrucciones anuales', estado: 'HOLD', observaciones: 'PENDIENTE DE PUBLICACIÓN. No se han publicado las instrucciones para el curso 2026/2027.' },
  { id: 'AUD-010', elemento: 'Ponderaciones de Calificación', norma: 'Decreto 111/2007 + Instrucciones', articulo: 'Art. 5 + normativa centro', estado: 'VERIFICADO', observaciones: 'Propuesta basada en práctica habitual: 30% técnica, 40% repertorio, 10% lectura, 10% actitud, 10% audiciones. Pendiente de validación final con instrucciones anuales.' },
];

// ============================================================
// OBJETIVOS ESPECÍFICOS POR CURSO — ENSEÑANZAS PROFESIONALES
// ============================================================
export const objetivosEP: Record<string, Objetivo[]> = {
  'EP1': [
    { id: 'OBJ-CL-EP1-01', texto: 'Consolidar la homogeneidad tímbrica entre registros chalumeau, clarín y altissimo inicial', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Realiza escalas cromáticas de chalumeau a altissimo sin quiebros tímbricos', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-02', texto: 'Dominar la articulación doble a velocidades moderadas (♩=80-96)', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Ejecuta pasajes en articulación doble a ♩=88 con igualdad rítmica', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-03', texto: 'Interpretar escalas mayores y menores (hasta 5 alteraciones) y arpegios de 7ª en dos octavas', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Interpreta todas las escalas hasta Si M / Do m a ♩=88 de memoria', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-04', texto: 'Controlar la afinación en los registros de paso mediante ajustes de embocadura y soplo', tipo: 'tecnico', trazabilidad: 'Art. 3.c', indicador: 'Corrige la afinación de si♮, fa♯ agudo y notas del clarinete sin afinador', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-05', texto: 'Interpretar estudios de nivel medio (Baermann, Gambaro avanzado) con dominio técnico y musical', tipo: 'interpretativo', trazabilidad: 'Art. 3.a, h, k', indicador: 'Interpreta estudios de Baermann con agógica y fraseo personal', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-06', texto: 'Abordar el primer movimiento de una obra clásica con piano (Mozart, Stamitz) con criterio estilístico', tipo: 'interpretativo', trazabilidad: 'Art. 3.g, k, l', indicador: 'Interpreta el 1er mov. de la Sonata de Brahms nº 1 con estilo romántico', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-07', texto: 'Practicar la lectura a primera vista en tonalidades hasta 4 alteraciones con fluidez rítmica', tipo: 'interpretativo', trazabilidad: 'Art. 3.b, i', indicador: 'Lee un fragmento de 24 compases en 4/4 con corrección rítmica y dinámica', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-08', texto: 'Iniciar la transposición a vista de fragmentos sencillos (transporte de Sib a Do, de La a Do)', tipo: 'interpretativo', trazabilidad: 'Art. 3.j', indicador: 'Transpone un fragmento de 8 compases de Sib a Do a primera vista', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-09', texto: 'Analizar formalmente las obras interpretadas (estructura sonata, rondó, tema con variaciones)', tipo: 'actitudinal', trazabilidad: 'Art. 3.b, g', indicador: 'Identifica exposición, desarrollo y reexposición en un movimiento sonata', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP1-10', texto: 'Desarrollar la memoria musical mediante la interpretación de al menos una obra de memoria', tipo: 'interpretativo', trazabilidad: 'Art. 3.l', indicador: 'Interpreta un estudio de 32 compases de memoria con seguridad', estado: 'DESARROLLO_PROPIO' },
  ],
  'EP2': [
    { id: 'OBJ-CL-EP2-01', texto: 'Dominar las escalas mayores y menores en las 24 tonalidades, cromatismos, arpegios de 7ª y terceras en tres octavas', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Interpreta las 24 escalas a ♩=96 con fluidez y homogeneidad', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP2-02', texto: 'Controlar la articulación doble y triple a velocidades de concierto (♩=100-120)', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Ejecuta pasajes de Weber en articulación doble a ♩=108', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP2-03', texto: 'Abordar el repertorio romántico (Weber, Spohr, Mendelssohn) con criterio estilístico y dominio técnico', tipo: 'interpretativo', trazabilidad: 'Art. 3.k, l', indicador: 'Interpreta el 1er mov. del Concierto nº 1 de Weber con carácter y virtuosismo', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP2-04', texto: 'Interpretar estudios de nivel medio-alto (Rose 26 Estudios) con musicalidad y control técnico', tipo: 'interpretativo', trazabilidad: 'Art. 3.a, h', indicador: 'Aborda los 26 Estudios de Rose con fraseo y dinámica contrastados', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP2-05', texto: 'Iniciar la práctica de la música de cámara (dúo clarinete-piano, trío de clarinetes)', tipo: 'actitudinal', trazabilidad: 'Art. 3.e, g', indicador: 'Participa en al menos una formación de cámara durante el curso', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP2-06', texto: 'Desarrollar la improvisación sobre estructuras tonales y modales sencillas', tipo: 'interpretativo', trazabilidad: 'Art. 3.j', indicador: 'Improvisa 16 compases sobre un blues en Sib con coherencia melódica', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP2-07', texto: 'Analizar e interpretar fragmentos orquestales básicos (Bizet, Tchaikovsky, Rimsky-Korsakov)', tipo: 'actitudinal', trazabilidad: 'Art. 3.g, k', indicador: 'Interpreta solos orquestales de Carmen y Capriccio Italien con estilo', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP2-08', texto: 'Consolidar hábitos de estudio eficiente (planificación semanal, uso de grabación, autoevaluación)', tipo: 'actitudinal', trazabilidad: 'Art. 3.a, d', indicador: 'Presenta planificación semanal y grabaciones de autoevaluación', estado: 'DESARROLLO_PROPIO' },
  ],
  'EP3': [
    { id: 'OBJ-CL-EP3-01', texto: 'Dominar el mecanismo avanzado: escalas en terceras, sextas y octavas, cromatismos veloces, pasajes de dedos cruzados', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Ejecuta escalas en terceras a ♩=108 con limpieza', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP3-02', texto: 'Interpretar el Concierto en La M de Mozart (K. 622) completo con criterio estilístico y dominio técnico', tipo: 'interpretativo', trazabilidad: 'Art. 3.k, l', indicador: 'Interpreta los tres movimientos del concierto con coherencia estilística', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP3-03', texto: 'Abordar el repertorio de Weber (Concierto nº 2) con virtuosismo y carácter dramático', tipo: 'interpretativo', trazabilidad: 'Art. 3.k, l', indicador: 'Interpreta el 1er mov. del Concierto nº 2 con fluidez y expresividad', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP3-04', texto: 'Interpretar estudios de nivel avanzado (Rose 32, Müller 30) con dominio técnico completo', tipo: 'interpretativo', trazabilidad: 'Art. 3.a, h', indicador: 'Aborda los 32 Estudios de Rose con todos los recursos técnicos del nivel', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP3-05', texto: 'Desarrollar la transposición a vista de partituras orquestales (clarinete en La, en Sib, en Do)', tipo: 'interpretativo', trazabilidad: 'Art. 3.j', indicador: 'Transpone fragmentos orquestales de La a Sib y viceversa a primera vista', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP3-06', texto: 'Participar activamente en la orquesta o banda del centro, asumiendo puestos de responsabilidad', tipo: 'actitudinal', trazabilidad: 'Art. 3.e, i', indicador: 'Ocupa puesto de 1ª o 2ª clarinete en la banda/orquesta del centro', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP3-07', texto: 'Preparar un recital monográfico de 20-25 minutos con programa variado', tipo: 'interpretativo', trazabilidad: 'Art. 3.l', indicador: 'Presenta un recital completo con obras de al menos tres períodos', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP3-08', texto: 'Analizar comparativamente diferentes versiones discográficas de las obras estudiadas', tipo: 'actitudinal', trazabilidad: 'Art. 3.b, g', indicador: 'Compara críticamente al menos 3 versiones del Concierto de Mozart', estado: 'DESARROLLO_PROPIO' },
  ],
  'EP4': [
    { id: 'OBJ-CL-EP4-01', texto: 'Dominar las técnicas avanzadas del clarinete: vibrato controlado, glissando, multifónicos básicos, slap tonguing', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Aplica vibrato controlado y glissando en obras del siglo XX', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP4-02', texto: 'Interpretar el repertorio romántico tardío e impresionista (Brahms, Saint-Saëns) con madurez estilística', tipo: 'interpretativo', trazabilidad: 'Art. 3.k, l', indicador: 'Interpreta la Sonata de Brahms nº 2 con profundidad expresiva', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP4-03', texto: 'Abordar estudios de alto nivel técnico (Cavallini 30 Caprichos, Stark 24 Estudios)', tipo: 'interpretativo', trazabilidad: 'Art. 3.a, h', indicador: 'Interpreta caprichos de Cavallini con virtuosismo y musicalidad', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP4-04', texto: 'Desarrollar la capacidad de análisis armónico aplicado a la interpretación', tipo: 'actitudinal', trazabilidad: 'Art. 3.b, g', indicador: 'Identifica modulaciones y relaciones armónicas en la Sonata de Brahms', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP4-05', texto: 'Preparar un programa de concierto de 30 minutos con obras de diferentes estilos y dificultades', tipo: 'interpretativo', trazabilidad: 'Art. 3.l', indicador: 'Presenta recital con obras de Brahms, Saint-Saëns y Poulenc', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP4-06', texto: 'Iniciar el repertorio contemporáneo (Poulenc, Françaix) con técnicas específicas', tipo: 'interpretativo', trazabilidad: 'Art. 3.k', indicador: 'Interpreta la Sonata de Poulenc con dominio de articulaciones y registros extremos', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP4-07', texto: 'Desarrollar la autonomía completa en el estudio: planificación, autoevaluación, resolución de problemas técnicos', tipo: 'actitudinal', trazabilidad: 'Art. 3.a, d', indicador: 'Planifica su estudio semanal con objetivos medibles y autoevalúa resultados', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP4-08', texto: 'Participar en masterclasses y encuentros de clarinetes como intérprete activo', tipo: 'actitudinal', trazabilidad: 'Art. 3.e, l', indicador: 'Participa en al menos una masterclass externa durante el curso', estado: 'DESARROLLO_PROPIO' },
  ],
  'EP5': [
    { id: 'OBJ-CL-EP5-01', texto: 'Dominar las técnicas extendidas del clarinete contemporáneo: quarter-tones, multiphónicos complejos, flutter-tongue, key clicks, breath sounds', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Ejecuta pasajes de Berio y Lutosławski con las técnicas requeridas', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP5-02', texto: 'Interpretar el repertorio contemporáneo de máxima dificultad (Debussy, Stravinsky, Lutosławski, Berio)', tipo: 'interpretativo', trazabilidad: 'Art. 3.k, l', indicador: 'Interpreta la Première Rhapsodie y Tres piezas de Stravinsky con solvencia', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP5-03', texto: 'Abordar estudios de nivel pre-superior (Jeanjean 16 Estudios modernos, Uhl 48 Estudios)', tipo: 'interpretativo', trazabilidad: 'Art. 3.a, h', indicador: 'Interpreta estudios de Jeanjean y Uhl con dominio técnico y musical', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP5-04', texto: 'Preparar un programa de examen de fin de estudios de 35-40 minutos con obras de máximo nivel', tipo: 'interpretativo', trazabilidad: 'Art. 3.l', indicador: 'Presenta programa con Debussy, Stravinsky, Lutosławski y Berio', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP5-05', texto: 'Demostrar capacidad de análisis e interpretación personal madura y fundamentada', tipo: 'interpretativo', trazabilidad: 'Art. 3.b, g', indicador: 'Defiende sus decisiones interpretativas con argumentos técnicos y estéticos', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP5-06', texto: 'Demostrar madurez escénica y comunicativa en la interpretación pública', tipo: 'interpretativo', trazabilidad: 'Art. 3.l', indicador: 'Ofrece un recital de fin de curso con presencia escénica profesional', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP5-07', texto: 'Demostrar preparación suficiente para las pruebas de acceso a Enseñanzas Superiores de Música', tipo: 'actitudinal', trazabilidad: 'Art. 3.a, l', indicador: 'Supera una prueba de acceso simulada con el nivel exigido en el conservatorio superior', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP5-08', texto: 'Demostrar autonomía total en la organización del estudio, la selección de repertorio y la planificación artística', tipo: 'actitudinal', trazabilidad: 'Art. 3.a, d, j', indicador: 'Diseña su propio programa de trabajo para el acceso a superiores', estado: 'DESARROLLO_PROPIO' },
  ],
  'EP6': [
    { id: 'OBJ-CL-EP6-01', texto: 'Perfeccionar todas las técnicas del clarinete a nivel pre-superior', tipo: 'tecnico', trazabilidad: 'Art. 3.h', indicador: 'Domina todas las técnicas requeridas para el acceso a superiores', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP6-02', texto: 'Interpretar con madurez artística el repertorio más exigente del clarinete', tipo: 'interpretativo', trazabilidad: 'Art. 3.k, l', indicador: 'Interpreta obras de máximo nivel con personalidad y convicción', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP6-03', texto: 'Preparar y defender un programa de fin de estudios ante tribunal', tipo: 'interpretativo', trazabilidad: 'Art. 3.l', indicador: 'Presenta y defiende un programa completo de 40-45 minutos', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP6-04', texto: 'Demostrar capacidad de trabajo autónomo y autocrítico a nivel profesional', tipo: 'actitudinal', trazabilidad: 'Art. 3.a, d', indicador: 'Trabaja con total autonomía y capacidad de autocrítica fundamentada', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP6-05', texto: 'Preparar específicamente las pruebas de acceso a Enseñanzas Superiores', tipo: 'actitudinal', trazabilidad: 'Art. 3.a, l', indicador: 'Supera simulacros de pruebas de acceso con nivel suficiente', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP6-06', texto: 'Desarrollar un proyecto artístico personal coherente y fundamentado', tipo: 'interpretativo', trazabilidad: 'Art. 3.j, l', indicador: 'Presenta un proyecto artístico con identidad propia y coherencia', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP6-07', texto: 'Demostrar conocimiento profundo del repertorio del clarinete en todos sus períodos', tipo: 'actitudinal', trazabilidad: 'Art. 3.b, k', indicador: 'Conoce y contextualiza el repertorio desde el Clasicismo hasta la actualidad', estado: 'DESARROLLO_PROPIO' },
    { id: 'OBJ-CL-EP6-08', texto: 'Demostrar capacidad para la enseñanza y transmisión del conocimiento musical', tipo: 'actitudinal', trazabilidad: 'Art. 3.e, g', indicador: 'Puede explicar y demostrar conceptos técnicos y musicales con claridad', estado: 'DESARROLLO_PROPIO' },
  ],
};

// ============================================================
// DASHBOARD STATS
// ============================================================
export const dashboardStats = {
  cursosEE: 4,
  cursosEP: 6,
  totalCursos: 10,
  objetivosGenerales: 12,
  objetivosEE: 40,
  objetivosEP: Object.values(objetivosEP).reduce((sum, curso) => sum + curso.length, 0),
  normasVerificadas: 7,
  normasHold: 1,
  rubricasGenerales: 6,
  repertorioItems: repertorio.length,
  auditoriaItems: auditoriaNormativa.length,
  auditoriaVerificados: auditoriaNormativa.filter(a => a.estado === 'VERIFICADO').length,
  auditoriaHold: auditoriaNormativa.filter(a => a.estado === 'HOLD').length,
};
