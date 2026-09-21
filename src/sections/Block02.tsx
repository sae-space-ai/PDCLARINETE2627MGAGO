export function Block02() {
  return (
    <div className="content-section">
      <h2>Bloque 2 — Objetivos</h2>

      <h3>2.1. Objetivos Generales de las Enseñanzas Profesionales de Música</h3>
      <p className="text-sm text-amber-700 italic">Transcripción literal del Art. 3 del Decreto 111/2007, con desarrollo didáctico para el aula de clarinete.</p>

      <div className="space-y-6 mt-4">
        {[
          { letter: 'a', text: 'Superar con dominio y capacidad crítica los contenidos y objetivos establecidos en el currículo de las Enseñanzas Profesionales de Música.', interpretation: 'En el aula de clarinete: el alumno demuestra dominio técnico e interpretativo de los contenidos propios de su nivel, mostrando capacidad crítica para analizar su propia interpretación y la de otros intérpretes, identificando aspectos mejorables y proponiendo soluciones fundamentadas.', indicator: 'Interpreta obras del nivel con corrección técnica y musical; argumenta decisiones interpretativas; identifica y corrige errores de forma autónoma.', competencia: 'Aprender a aprender; Comunicación lingüística.' },
          { letter: 'b', text: 'Conocer los elementos básicos de los lenguajes musicales y tener capacidad para utilizarlos con flexibilidad.', interpretation: 'En el aula de clarinete: el alumno aplica los conocimientos de lenguaje musical (ritmo, melodía, armonía, forma) a la interpretación instrumental, comprendiendo la estructura de las obras y las convenciones de cada estilo.', indicator: 'Analiza formalmente las obras interpretadas; identifica modulaciones, cadencias y estructuras; aplica la terminología musical con precisión.', competencia: 'Comunicación lingüística; Competencia matemática.' },
          { letter: 'c', text: 'Utilizar el oído interno como base de afinación, audición armónica e interpretación.', interpretation: 'En el aula de clarinete: el alumno desarrolla el oído interno para anticipar mentalmente el sonido antes de producirlo, controlar la afinación en todos los registros, escuchar armónicamente en música de cámara y ajustar la entonación en tiempo real.', indicator: 'Canta internamente antes de tocar; corrige la afinación sin referencia externa; escucha activamente al pianista y ajusta intervalos.', competencia: 'Competencia matemática y C.T.; Conciencia y expresión culturales.' },
          { letter: 'd', text: 'Formar una imagen ajustada de las propias posibilidades y características como músico e intérprete.', interpretation: 'En el aula de clarinete: el alumno conoce sus fortalezas y áreas de mejora, establece metas realistas, gestiona la ansiedad escénica y desarrolla una autoimagen positiva como músico.', indicator: 'Se evalúa con objetividad; establece objetivos personales realistas; gestiona los nervios en audiciones.', competencia: 'Personal, social y aprender a aprender.' },
          { letter: 'e', text: 'Compartir vivencias musicales de grupo a través de la participación en formaciones instrumentales y vocales.', interpretation: 'En el aula de clarinete: el alumno participa activamente en dúos, tríos, cuartetos de clarinetes, ensemble y agrupaciones del centro, desarrollando habilidades de escucha, ajuste rítmico, equilibrio sonoro y comunicación no verbal.', indicator: 'Se adapta al tempo y dinámica del grupo; escucha activamente a los compañeros; contribuye al resultado musical colectivo.', competencia: 'Competencias sociales y cívicas; Conciencia cultural.' },
          { letter: 'f', text: 'Valorar el cuerpo y la mente para utilizar con seguridad la técnica corporal y mental en la práctica musical.', interpretation: 'En el aula de clarinete: el alumno adopta una postura corporal saludable y eficiente, practica la respiración diafragmática, previene lesiones por tensión y utiliza técnicas de relajación y concentración para la interpretación.', indicator: 'Mantiene postura ergonómica correcta; respira diafragmáticamente; identifica y corrige tensiones innecesarias.', competencia: 'Competencia matemática y C.T. (conocimiento corporal).' },
          { letter: 'g', text: 'Interrelacionar y aplicar los conocimientos de todas las asignaturas que componen el currículo.', interpretation: 'En el aula de clarinete: el alumno conecta los conocimientos de lenguaje musical, análisis, historia de la música, música de cámara y orquesta con la práctica instrumental, integrando saberes de forma transversal.', indicator: 'Aplica conceptos armónicos al fraseo; contextualiza históricamente las obras; utiliza el análisis para la memorización.', competencia: 'Todas las competencias clave de forma integrada.' },
          { letter: 'h', text: 'Conocer y aplicar las técnicas del instrumento principal según las exigencias de las obras que se han de interpretar.', interpretation: 'En el aula de clarinete: el alumno domina progresivamente las técnicas del clarinete (respiración, embocadura, digitación, articulación, registro, mecanismos, afinación) y las aplica según las exigencias estilísticas de cada obra.', indicator: 'Ejecuta escalas y arpegios con fluidez; controla la articulación simple, doble y triple; maneja los tres registros con homogeneidad.', competencia: 'Conciencia y expresión culturales.' },
          { letter: 'i', text: 'Adquirir y demostrar los reflejos necesarios para resolver las eventualidades que surjan en la interpretación pública.', interpretation: 'En el aula de clarinete: el alumno desarrolla capacidad de reacción ante imprevistos (rotura de caña, olvido momentáneo, fallo de afinación, desincronización) sin interrumpir la interpretación.', indicator: 'Continúa tocando tras un error; resuelve problemas de caña con discreción; se adapta a cambios de tempo del director.', competencia: 'Competencia emprendedora; Aprender a aprender.' },
          { letter: 'j', text: 'Cultivar la improvisación y la transposición como recursos para el desarrollo de la creatividad musical.', interpretation: 'En el aula de clarinete: el alumno practica la improvisación sobre estructuras simples (blues, patrones armónicos) y la transposición a vista de fragmentos a otros tonos, desarrollando flexibilidad mental y creatividad.', indicator: 'Improvisa melodías coherentes sobre progresiones dadas; transpone fragmentos sencillos a tonos cercanos; crea variaciones ornamentales.', competencia: 'Competencia emprendedora; Conciencia cultural.' },
          { letter: 'k', text: 'Interpretar obras escritas en todos los lenguajes musicales, mostrando capacidad para analizar y comprender las diferentes estructuras musicales.', interpretation: 'En el aula de clarinete: el alumno interpreta obras de todos los períodos históricos (Barroco, Clasicismo, Romanticismo, siglo XX, contemporánea), adaptando la técnica y el estilo a cada lenguaje.', indicator: 'Diferencia estilísticamente Mozart de Debussy; aplica la articulación adecuada a cada período; interpreta música contemporánea con técnicas extendidas.', competencia: 'Conciencia y expresión culturales.' },
          { letter: 'l', text: 'Actuar en público con autocontrol, dominio de la memoria y capacidad comunicativa.', interpretation: 'En el aula de clarinete: el alumno se presenta en audiciones y conciertos con seguridad, interpreta de memoria cuando se requiere, establece comunicación con el público y el acompañante, y gestiona la presión escénica.', indicator: 'Se presenta con seguridad en audiciones; interpreta de memoria obras del nivel; establece contacto visual y comunicativo con el público.', competencia: 'Competencias sociales y cívicas; Conciencia cultural.' },
        ].map((obj) => (
          <div key={obj.letter} className="bg-white rounded-lg border border-amber-200 p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-amber-800 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">{obj.letter})</span>
              <p className="text-gray-800 italic font-medium">"{obj.text}"</p>
            </div>
            <div className="ml-10 space-y-2">
              <p className="text-sm"><strong className="text-amber-800">Interpretación didáctica:</strong> {obj.interpretation}</p>
              <p className="text-sm"><strong className="text-amber-800">Indicadores de logro:</strong> {obj.indicator}</p>
              <p className="text-sm"><strong className="text-amber-800">Competencias clave LOMLOE:</strong> {obj.competencia}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-12">2.2. Objetivos Específicos de Clarinete por Curso</h3>

      {/* 1º EP */}
      <h4>1º Curso de Enseñanzas Profesionales</h4>
      <table className="doc-table">
        <thead><tr><th>Nº</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad (Art. 3)</th><th>Indicador de logro</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Adoptar una posición corporal correcta y relajada, con colocación adecuada del instrumento y equilibrio del peso.</td><td>Técnico</td><td>f)</td><td>Mantiene postura ergonómica durante 20 min sin tensión visible.</td></tr>
          <tr><td>2</td><td>Dominar la respiración diafragmática-abdominal como base de la emisión sonora.</td><td>Técnico</td><td>f), h)</td><td>Realiza ciclos respiratorios de 8-10 compases en legato sostenido.</td></tr>
          <tr><td>3</td><td>Producir un sonido homogéneo en el registro chalumeau y registro medio (clarín), con control de la intensidad.</td><td>Técnico</td><td>h)</td><td>Mantiene pp-ff en una nota larga sin quiebros ni cambios de timbre.</td></tr>
          <tr><td>4</td><td>Controlar la embocadura con formación correcta del colchón labial y presión equilibrada.</td><td>Técnico</td><td>f), h)</td><td>Emite notas agudas sin mordisco y graves sin pérdida de centro.</td></tr>
          <tr><td>5</td><td>Ejecutar escalas mayores y menores (hasta 3 alteraciones) y arpegios de tónica en una octava, de memoria.</td><td>Técnico</td><td>h)</td><td>Interpreta escalas de Do, Sol, Fa, Re m, Mi m a ♩=80 sin errores.</td></tr>
          <tr><td>6</td><td>Dominar la articulación simple (legato, staccato, portato, accentato) en el registro chalumeau y clarín.</td><td>Técnico</td><td>h)</td><td>Diferencia claramente los cuatro tipos de articulación a ♩=72.</td></tr>
          <tr><td>7</td><td>Interpretar estudios de nivel elemental-medio con corrección rítmica, afinación y dinámica.</td><td>Interpretativo</td><td>a), h), k)</td><td>Interpreta estudios de Demnitz/Klosé con fluidez y musicalidad.</td></tr>
          <tr><td>8</td><td>Aplicar el fraseo básico: respiración en puntos de la partitura, respeto a las ligaduras, dinámica indicada.</td><td>Interpretativo</td><td>g), k)</td><td>Respeta indicaciones dinámicas y de fraseo en las obras trabajadas.</td></tr>
          <tr><td>9</td><td>Leer a primera vista fragmentos sencillos (tonalidades hasta 2 alteraciones) con corrección rítmica.</td><td>Interpretativo</td><td>b), i)</td><td>Lee un fragmento de 16 compases en 2/4 o 3/4 sin detenerse.</td></tr>
          <tr><td>10</td><td>Desarrollar hábitos de estudio diario organizado y autónomo (mínimo 45 min/día).</td><td>Actitudinal</td><td>a), d)</td><td>Presenta diario de estudio; demuestra trabajo regular en clase.</td></tr>
          <tr><td>11</td><td>Participar en audiciones de aula con autocontrol y respeto al turno.</td><td>Actitudinal</td><td>e), l)</td><td>Actúa en al menos 2 audiciones trimestrales sin interrupciones por nervios.</td></tr>
          <tr><td>12</td><td>Conocer el contexto histórico de las obras interpretadas (Clasicismo y primer Romanticismo).</td><td>Contextual</td><td>b), k)</td><td>Sitúa cronológicamente las obras de Mozart y Weber.</td></tr>
        </tbody>
      </table>

      {/* 2º EP */}
      <h4 className="mt-8">2º Curso de Enseñanzas Profesionales</h4>
      <table className="doc-table">
        <thead><tr><th>Nº</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad (Art. 3)</th><th>Indicador de logro</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Consolidar la homogeneidad tímbrica entre los registros chalumeau, clarín y altissimo inicial.</td><td>Técnico</td><td>h)</td><td>Realiza escalas cromáticas de chalumeau a altissimo sin quiebros tímbricos.</td></tr>
          <tr><td>2</td><td>Dominar la articulación doble a velocidades moderadas (♩=80-96).</td><td>Técnico</td><td>h)</td><td>Ejecuta pasajes en articulación doble a ♩=88 con igualdad rítmica.</td></tr>
          <tr><td>3</td><td>Interpretar escalas mayores y menores (hasta 5 alteraciones) y arpegios de 7ª en dos octavas.</td><td>Técnico</td><td>h)</td><td>Interpreta todas las escalas hasta Si M / Do m a ♩=88 de memoria.</td></tr>
          <tr><td>4</td><td>Controlar la afinación en los registros de paso (passaggio) mediante ajustes de embocadura y soplo.</td><td>Técnico</td><td>c), h)</td><td>Corrige la afinación de si♮, fa♯ agudo y notas del clarinete sin afinador.</td></tr>
          <tr><td>5</td><td>Interpretar estudios de nivel medio (Baermann, Gambaro avanzado) con dominio técnico y musical.</td><td>Interpretativo</td><td>a), h), k)</td><td>Interpreta estudios de Baermann con agógica y fraseo personal.</td></tr>
          <tr><td>6</td><td>Abordar el primer movimiento de una obra clásica con piano (Mozart, Stamitz) con criterio estilístico.</td><td>Interpretativo</td><td>g), k), l)</td><td>Interpreta el 1er mov. de la Sonata de Brahms nº 1 con estilo romántico.</td></tr>
          <tr><td>7</td><td>Practicar la lectura a primera vista en tonalidades hasta 4 alteraciones con fluidez rítmica.</td><td>Interpretativo</td><td>b), i)</td><td>Lee un fragmento de 24 compases en 4/4 con corrección rítmica y dinámica.</td></tr>
          <tr><td>8</td><td>Iniciar la transposición a vista de fragmentos sencillos (transporte de Sib a Do, de La a Do).</td><td>Interpretativo</td><td>j)</td><td>Transpone un fragmento de 8 compases de Sib a Do a primera vista.</td></tr>
          <tr><td>9</td><td>Analizar formalmente las obras interpretadas (estructura sonata, rondó, tema con variaciones).</td><td>Contextual</td><td>b), g)</td><td>Identifica exposición, desarrollo y reexposición en un movimiento sonata.</td></tr>
          <tr><td>10</td><td>Desarrollar la memoria musical mediante la interpretación de al menos una obra de memoria.</td><td>Interpretativo</td><td>l)</td><td>Interpreta un estudio de 32 compases de memoria con seguridad.</td></tr>
        </tbody>
      </table>

      {/* 3º EP */}
      <h4 className="mt-8">3º Curso de Enseñanzas Profesionales</h4>
      <table className="doc-table">
        <thead><tr><th>Nº</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad</th><th>Indicador de logro</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Dominar las escalas mayores y menores en las 24 tonalidades, cromatismos, arpegios de 7ª y terceras en tres octavas.</td><td>Técnico</td><td>h)</td><td>Interpreta las 24 escalas a ♩=96 con fluidez y homogeneidad.</td></tr>
          <tr><td>2</td><td>Controlar la articulación doble y triple a velocidades de concierto (♩=100-120).</td><td>Técnico</td><td>h)</td><td>Ejecuta pasajes de Weber en articulación doble a ♩=108.</td></tr>
          <tr><td>3</td><td>Abordar el repertorio romántico (Weber, Spohr, Mendelssohn) con criterio estilístico y dominio técnico.</td><td>Interpretativo</td><td>k), l)</td><td>Interpreta el 1er mov. del Concierto nº 1 de Weber con carácter y virtuosismo.</td></tr>
          <tr><td>4</td><td>Interpretar estudios de nivel medio-alto (Rose 26 Estudios) con musicalidad y control técnico.</td><td>Interpretativo</td><td>a), h)</td><td>Aborda los 26 Estudios de Rose con fraseo y dinámica contrastados.</td></tr>
          <tr><td>5</td><td>Iniciar la práctica de la música de cámara (dúo clarinete-piano, trío de clarinetes).</td><td>Actitudinal</td><td>e), g)</td><td>Participa en al menos una formación de cámara durante el curso.</td></tr>
          <tr><td>6</td><td>Desarrollar la improvisación sobre estructuras tonales y modales sencillas.</td><td>Interpretativo</td><td>j)</td><td>Improvisa 16 compases sobre un blues en Sib con coherencia melódica.</td></tr>
          <tr><td>7</td><td>Analizar e interpretar fragmentos orquestales básicos (Bizet, Tchaikovsky, Rimsky-Korsakov).</td><td>Contextual</td><td>g), k)</td><td>Interpreta solos orquestales de Carmen y Capriccio Italien con estilo.</td></tr>
          <tr><td>8</td><td>Consolidar hábitos de estudio eficiente (planificación semanal, uso de grabación, autoevaluación).</td><td>Actitudinal</td><td>a), d)</td><td>Presenta planificación semanal y grabaciones de autoevaluación.</td></tr>
        </tbody>
      </table>

      {/* 4º EP */}
      <h4 className="mt-8">4º Curso de Enseñanzas Profesionales</h4>
      <table className="doc-table">
        <thead><tr><th>Nº</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad</th><th>Indicador de logro</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Dominar el mecanismo avanzado: escalas en terceras, sextas y octavas, cromatismos veloces, pasajes de dedos cruzados.</td><td>Técnico</td><td>h)</td><td>Ejecuta escalas en terceras a ♩=108 con limpieza.</td></tr>
          <tr><td>2</td><td>Interpretar el Concierto en La M de Mozart (K. 622) completo con criterio estilístico y dominio técnico.</td><td>Interpretativo</td><td>k), l)</td><td>Interpreta los tres movimientos del concierto con coherencia estilística.</td></tr>
          <tr><td>3</td><td>Abordar el repertorio de Weber (Concierto nº 2) con virtuosismo y carácter dramático.</td><td>Interpretativo</td><td>k), l)</td><td>Interpreta el 1er mov. del Concierto nº 2 con fluidez y expresividad.</td></tr>
          <tr><td>4</td><td>Interpretar estudios de nivel avanzado (Rose 32, Müller 30) con dominio técnico completo.</td><td>Interpretativo</td><td>a), h)</td><td>Aborda los 32 Estudios de Rose con todos los recursos técnicos del nivel.</td></tr>
          <tr><td>5</td><td>Desarrollar la transposición a vista de partituras orquestales (clarinete en La, en Sib, en Do).</td><td>Interpretativo</td><td>j)</td><td>Transpone fragmentos orquestales de La a Sib y viceversa a primera vista.</td></tr>
          <tr><td>6</td><td>Participar activamente en la orquesta o banda del centro, asumiendo puestos de responsabilidad.</td><td>Actitudinal</td><td>e), i)</td><td>Ocupa puesto de 1ª o 2ª clarinete en la banda/orquesta del centro.</td></tr>
          <tr><td>7</td><td>Preparar un recital monográfico de 20-25 minutos con programa variado.</td><td>Interpretativo</td><td>l)</td><td>Presenta un recital completo con obras de al menos tres períodos.</td></tr>
          <tr><td>8</td><td>Analizar comparativamente diferentes versiones discográficas de las obras estudiadas.</td><td>Contextual</td><td>b), g)</td><td>Compara críticamente al menos 3 versiones del Concierto de Mozart.</td></tr>
        </tbody>
      </table>

      {/* 5º EP */}
      <h4 className="mt-8">5º Curso de Enseñanzas Profesionales</h4>
      <table className="doc-table">
        <thead><tr><th>Nº</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad</th><th>Indicador de logro</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Dominar las técnicas avanzadas del clarinete: vibrato controlado, glissando, multifónicos básicos, slap tonguing.</td><td>Técnico</td><td>h)</td><td>Aplica vibrato controlado y glissando en obras del siglo XX.</td></tr>
          <tr><td>2</td><td>Interpretar el repertorio romántico tardío e impresionista (Brahms, Saint-Saëns) con madurez estilística.</td><td>Interpretativo</td><td>k), l)</td><td>Interpreta la Sonata de Brahms nº 2 con profundidad expresiva.</td></tr>
          <tr><td>3</td><td>Abordar estudios de alto nivel técnico (Cavallini 30 Caprichos, Stark 24 Estudios).</td><td>Interpretativo</td><td>a), h)</td><td>Interpreta caprichos de Cavallini con virtuosismo y musicalidad.</td></tr>
          <tr><td>4</td><td>Desarrollar la capacidad de análisis armónico aplicado a la interpretación.</td><td>Contextual</td><td>b), g)</td><td>Identifica modulaciones y relaciones armónicas en la Sonata de Brahms.</td></tr>
          <tr><td>5</td><td>Preparar un programa de concierto de 30 minutos con obras de diferentes estilos y dificultades.</td><td>Interpretativo</td><td>l)</td><td>Presenta recital con obras de Brahms, Saint-Saëns y Poulenc.</td></tr>
          <tr><td>6</td><td>Iniciar el repertorio contemporáneo (Poulenc, Françaix) con técnicas específicas.</td><td>Interpretativo</td><td>k)</td><td>Interpreta la Sonata de Poulenc con dominio de articulaciones y registros extremos.</td></tr>
          <tr><td>7</td><td>Desarrollar la autonomía completa en el estudio: planificación, autoevaluación, resolución de problemas técnicos.</td><td>Actitudinal</td><td>a), d)</td><td>Planifica su estudio semanal con objetivos medibles y autoevalúa resultados.</td></tr>
          <tr><td>8</td><td>Participar en masterclasses y encuentros de clarinetes como intérprete activo.</td><td>Actitudinal</td><td>e), l)</td><td>Participa en al menos una masterclass externa durante el curso.</td></tr>
        </tbody>
      </table>

      {/* 6º EP */}
      <h4 className="mt-8">6º Curso de Enseñanzas Profesionales</h4>
      <table className="doc-table">
        <thead><tr><th>Nº</th><th>Objetivo</th><th>Tipo</th><th>Trazabilidad</th><th>Indicador de logro</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Dominar las técnicas extendidas del clarinete contemporáneo: quarter-tones, multiphónicos complejos, flutter-tongue, key clicks, breath sounds.</td><td>Técnico</td><td>h)</td><td>Ejecuta pasajes de Berio y Lutosławski con las técnicas requeridas.</td></tr>
          <tr><td>2</td><td>Interpretar el repertorio contemporáneo de máxima dificultad (Debussy, Stravinsky, Lutosławski, Berio).</td><td>Interpretativo</td><td>k), l)</td><td>Interpreta la Première Rhapsodie y Tres piezas de Stravinsky con solvencia.</td></tr>
          <tr><td>3</td><td>Abordar estudios de nivel pre-superior (Jeanjean 16 Estudios modernos, Uhl 48 Estudios).</td><td>Interpretativo</td><td>a), h)</td><td>Interpreta estudios de Jeanjean y Uhl con dominio técnico y musical.</td></tr>
          <tr><td>4</td><td>Preparar un programa de examen de fin de estudios de 35-40 minutos con obras de máximo nivel.</td><td>Interpretativo</td><td>l)</td><td>Presenta programa con Debussy, Stravinsky, Lutosławski y Berio.</td></tr>
          <tr><td>5</td><td>Demostrar capacidad de análisis e interpretación personal madura y fundamentada.</td><td>Interpretativo</td><td>b), g)</td><td>Defiende sus decisiones interpretativas con argumentos técnicos y estéticos.</td></tr>
          <tr><td>6</td><td>Demostrar madurez escénica y comunicativa en la interpretación pública.</td><td>Interpretativo</td><td>l)</td><td>Ofrece un recital de fin de curso con presencia escénica profesional.</td></tr>
          <tr><td>7</td><td>Demostrar preparación suficiente para las pruebas de acceso a Enseñanzas Superiores de Música.</td><td>Contextual</td><td>a), l)</td><td>Supera una prueba de acceso simulada con el nivel exigido en el conservatorio superior.</td></tr>
          <tr><td>8</td><td>Demostrar autonomía total en la organización del estudio, la selección de repertorio y la planificación artística.</td><td>Actitudinal</td><td>a), d), j)</td><td>Diseña su propio programa de trabajo para el acceso a superiores.</td></tr>
        </tbody>
      </table>

      <h3 className="mt-12">2.3. Contribución al desarrollo de las Competencias Clave (LOMLOE)</h3>
      <table className="doc-table">
        <thead><tr><th>Competencia Clave</th><th>Contribución desde el aula de clarinete</th><th>Actividades representativas</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Comunicación lingüística (CCL)</td><td>Uso de terminología musical en italiano, alemán y francés; expresión oral de análisis y críticas musicales; redacción de memorias de estudio.</td><td>Clasificar indicaciones de tempo en italiano; analizar la etimología de términos musicales; redactar el programa de mano de un concierto.</td></tr>
          <tr><td className="font-semibold">Competencia plurilingüe (CP)</td><td>Comprensión de indicaciones en partituras de diferentes idiomas; vocabulario técnico internacional.</td><td>Traducir indicaciones de partituras francesas, alemanas e italianas; comparar terminología entre idiomas.</td></tr>
          <tr><td className="font-semibold">Competencia matemática y en C.T. (CMCT)</td><td>Proporciones rítmicas (división binaria/ternaria); acústica del instrumento (tubo cilíndrico, armónicos impares); geometría de digitaciones; serie armónica aplicada.</td><td>Calcular frecuencias de armónicos; analizar proporciones rítmicas; comprender la física del tubo cerrado.</td></tr>
          <tr><td className="font-semibold">Competencia digital (CD)</td><td>Uso de apps de afinación (TonalEnergy, Soundcorset); grabación y autoevaluación; edición de partituras (MuseScore); investigación en IMSLP.</td><td>Grabar y analizar interpretaciones; usar metrónomo digital; buscar partituras en IMSLP; editar transcripciones.</td></tr>
          <tr><td className="font-semibold">Competencia personal, social y aprender a aprender (CPSAA)</td><td>Planificación del estudio; autoevaluación mediante rúbricas; gestión del tiempo y de la ansiedad; trabajo autónomo y cooperativo.</td><td>Elaborar diario de estudio; autoevaluar con rúbrica; planificar la semana de estudio; establecer metas SMART.</td></tr>
          <tr><td className="font-semibold">Competencia ciudadana (CC)</td><td>Respeto en audiciones; trabajo en grupo (orquesta, banda, cámara); valoración del patrimonio musical extremeño; participación cultural.</td><td>Escuchar activamente a compañeros; participar en la banda del centro; conocer compositores extremeños.</td></tr>
          <tr><td className="font-semibold">Competencia emprendedora (CE)</td><td>Improvisación y creatividad; diseño de proyectos musicales; iniciativa en la selección de repertorio; organización de audiciones.</td><td>Improvisar sobre estructuras dadas; diseñar un programa de concierto; organizar una audición de aula.</td></tr>
          <tr><td className="font-semibold">Conciencia y expresión culturales (CCEC)</td><td>Repertorio histórico-estilístico; contexto cultural de las obras; sensibilidad artística; comunicación emocional; valoración del patrimonio.</td><td>Analizar el contexto de Mozart y Debussy; interpretar con criterio estilístico; asistir a conciertos profesionales.</td></tr>
        </tbody>
      </table>
    </div>
  );
}
