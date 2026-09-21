export function Block06() {
  return (
    <div className="content-section">
      <h2>Bloque 6 — Catálogo Completo de Rúbricas</h2>

      <h3>6.1. Rúbricas Generales por Curso</h3>
      <p className="text-sm text-gray-600 mb-4">Cinco criterios × cuatro niveles (0-4, 5-6, 7-8, 9-10). Los descriptores son progresivamente más exigentes por curso.</p>

      {/* Rúbrica 1º EP */}
      <h4>Rúbrica General — 1º Curso EP</h4>
      <div className="overflow-x-auto">
        <table className="rubric-table doc-table text-xs">
          <thead><tr><th>Criterio</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Respiración y sonido</td><td>Respiración superficial; sonido aireado e inestable en todo el registro.</td><td>Respiración diafragmática básica; sonido estable en chalumeau con leves irregularidades.</td><td>Respiración diafragmática fluida; sonido homogéneo y centrado en chalumeau y clarín.</td><td>Respiración profunda y gestionada; sonido bello, proyectado y personal en los tres registros.</td></tr>
            <tr><td className="font-semibold">Articulación</td><td>No diferencia legato de staccato; emisión irregular.</td><td>Diferencia legato y staccato con imprecisiones; staccato aceptable en chalumeau.</td><td>Diferencia claramente legato, staccato, portato y accentato en ambos registros.</td><td>Articulación precisa, musical y adaptada al estilo; control dinámico en todas las articulaciones.</td></tr>
            <tr><td className="font-semibold">Digitación y escalas</td><td>Confunde digitaciones; no memoriza escalas; mecanismo torpe.</td><td>Ejecuta escalas de Do, Sol, Fa M de memoria con algunos errores; mecanismo aceptable.</td><td>Ejecuta las escalas del nivel (hasta 3 alteraciones) de memoria con fluidez y limpieza.</td><td>Domina todas las escalas del nivel a tempo adecuado; mecanismo limpio, ágil y seguro.</td></tr>
            <tr><td className="font-semibold">Interpretación y estilo</td><td>Interpretación mecánica sin fraseo; no respeta dinámicas ni indicaciones.</td><td>Interpretación correcta con fraseo básico; respeta dinámicas principales.</td><td>Fraseo con dirección musical; respeta todas las indicaciones; carácter adecuado.</td><td>Interpretación musicalmente madura; fraseo personal; comunicación emocional convincente.</td></tr>
            <tr><td className="font-semibold">Actitud y hábitos</td><td>No trae material; no trabaja en casa; actitud pasiva o negativa.</td><td>Trabaja en casa de forma irregular; actitud correcta pero poco proactiva.</td><td>Trabaja diariamente; trae material; actitud positiva y receptiva; participa en audiciones.</td><td>Estudio organizado y eficiente; actitud ejemplar; iniciativa propia; liderazgo en actividades.</td></tr>
          </tbody>
        </table>
      </div>

      {/* Rúbrica 2º EP */}
      <h4 className="mt-6">Rúbrica General — 2º Curso EP</h4>
      <div className="overflow-x-auto">
        <table className="rubric-table doc-table text-xs">
          <thead><tr><th>Criterio</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Respiración y sonido</td><td>Quiebros evidentes entre registros; sonido inestable en clarín.</td><td>Homogeneidad aceptable entre chalumeau y clarín; altissimo inestable.</td><td>Homogeneidad en 2 octavas; altissimo controlado; color tímbrico adecuado.</td><td>Sonido homogéneo en toda la extensión; timbre personal; proyección excelente.</td></tr>
            <tr><td className="font-semibold">Articulación</td><td>Articulación doble no ejecutable; staccato irregular en clarín.</td><td>Articulación doble a tempo lento; staccato aceptable en clarín.</td><td>Articulación doble a ♩=88 con igualdad; staccato brillante en clarín.</td><td>Articulación doble a tempo de concierto; dominio total de todas las articulaciones.</td></tr>
            <tr><td className="font-semibold">Digitación y escalas</td><td>No domina las escalas de 1º; mecanismo insuficiente.</td><td>Escalas hasta 3 alteraciones en 2 octavas; arpegios de 7ª básicos.</td><td>Escalas hasta 5 alteraciones en 2 octavas; arpegios de 7ª con fluidez.</td><td>Las 12 tonalidades mayores en 2 octavas; mecanismo avanzado con limpieza.</td></tr>
            <tr><td className="font-semibold">Interpretación y estilo</td><td>Interpretación sin carácter romántico; fraseo plano.</td><td>Fraseo romántico básico; diferencia Clasicismo de Romanticismo.</td><td>Fraseo romántico con rubato controlado; carácter convincente.</td><td>Interpretación estilísticamente madura; personalidad musical emergente.</td></tr>
            <tr><td className="font-semibold">Actitud y hábitos</td><td>Estudio irregular; no graba; no analiza versiones.</td><td>Estudio diario básico; grabación ocasional; escucha alguna versión.</td><td>Estudio planificado; grabación semanal; análisis comparativo de versiones.</td><td>Autonomía total; planificación estratégica; análisis crítico profundo.</td></tr>
          </tbody>
        </table>
      </div>

      {/* Rúbrica 3º EP */}
      <h4 className="mt-6">Rúbrica General — 3º Curso EP</h4>
      <div className="overflow-x-auto">
        <table className="rubric-table doc-table text-xs">
          <thead><tr><th>Criterio</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Respiración y sonido</td><td>No controla el altissimo; sonido desigual en pasajes virtuosísticos.</td><td>Control básico de tres octavas; altissimo aceptable en contextos sencillos.</td><td>Sonido homogéneo en 3 octavas; altissimo controlado; proyección orquestal.</td><td>Sonido de calidad pre-profesional; dominio tímbrico; adaptabilidad estilística total.</td></tr>
            <tr><td className="font-semibold">Articulación</td><td>Doble articulación insuficiente; triple no ejecutable.</td><td>Doble a ♩=96; triple a tempo lento; limpieza aceptable.</td><td>Doble a ♩=108; triple a ♩=96; limpieza y musicalidad.</td><td>Doble y triple a tempo de concierto; dominio virtuosístico.</td></tr>
            <tr><td className="font-semibold">Digitación y escalas</td><td>Escalas incompletas; mecanismo insuficiente para Weber.</td><td>24 tonalidades en 2 octavas; arpegios de 7ª; terceras en 1 octava.</td><td>Escalas en 3 octavas; terceras y sextas; mecanismos veloces.</td><td>Dominio completo del mecanismo; escalas en terceras a ♩=108.</td></tr>
            <tr><td className="font-semibold">Interpretación y estilo</td><td>No aborda el repertorio romántico con criterio.</td><td>Interpreta Weber y Stamitz con carácter básico.</td><td>Interpreta el repertorio romántico con virtuosismo y carácter.</td><td>Interpretación madura y personal; dominio estilístico completo.</td></tr>
            <tr><td className="font-semibold">Actitud y hábitos</td><td>No participa en cámara; estudio desorganizado.</td><td>Participa en alguna formación de cámara; estudio regular.</td><td>Participación activa en cámara; estudio planificado y eficiente.</td><td>Liderazgo en agrupaciones; estudio estratégico; autonomía total.</td></tr>
          </tbody>
        </table>
      </div>

      {/* Rúbricas 4º-6º EP - resumidas */}
      <h4 className="mt-6">Rúbricas Generales — 4º, 5º y 6º Curso EP</h4>
      <p className="text-sm text-gray-600 mb-3">Los criterios se mantienen pero los descriptores se elevan progresivamente:</p>
      <div className="overflow-x-auto">
        <table className="rubric-table doc-table text-xs">
          <thead><tr><th>Curso</th><th>Respiración y sonido (9-10)</th><th>Articulación (9-10)</th><th>Digitación (9-10)</th><th>Interpretación (9-10)</th><th>Actitud (9-10)</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">4º</td><td>Sonido mozartiano y weberiano diferenciado; control total del pp-ff.</td><td>Articulación clásica y romántica diferenciada; virtuosismo en Weber.</td><td>Escalas en terceras y sextas; mecanismo a ♩=120; trinos sostenidos.</td><td>Mozart K.622 con madurez estilística; Weber con dramatismo convincente.</td><td>Recital monográfico preparado con autonomía; análisis comparativo profundo.</td></tr>
            <tr><td className="font-semibold">5º</td><td>Sonido romántico tardío e impresionista diferenciado; vibrato controlado.</td><td>Dominio de técnicas extendidas: vibrato, glissando, slap; articulación contemporánea.</td><td>Mecanismo completo a tempo de concierto; digitaciones alternativas dominadas.</td><td>Brahms y Saint-Saëns con profundidad; Poulenc con elegancia francesa.</td><td>Participación en masterclasses; programa de 30 min con autonomía total.</td></tr>
            <tr><td className="font-semibold">6º</td><td>Sonido de nivel pre-superior; dominio tímbrico total; técnicas extendidas integradas.</td><td>Dominio de todas las articulaciones incluyendo las contemporáneas; notación especial.</td><td>Mecanismo de nivel superior; quarter-tones; mecanismos complejos.</td><td>Debussy, Stravinsky, Berio con solvencia; programa de fin de estudios maduro.</td><td>Preparación para acceso a superiores; proyecto artístico personal definido.</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-8">6.2. Rúbricas por Unidad Didáctica</h3>
      <p className="text-sm text-gray-600 mb-4">Se desarrollan íntegramente las rúbricas de unidades clave. Las rúbricas del resto de unidades siguen la misma estructura con indicadores específicos.</p>

      <h4>Rúbrica — UD 1 de 1º EP: "El sonido en el registro chalumeau"</h4>
      <table className="rubric-table doc-table text-xs">
        <thead><tr><th>Indicador</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Posición corporal</td><td>Postura tensa; instrumento mal colocado; hombros elevados.</td><td>Postura correcta con recordatorios frecuentes; tensión ocasional.</td><td>Postura correcta y relajada de forma autónoma; instrumento bien equilibrado.</td><td>Postura óptima, ergonómica y relajada; conciencia corporal total.</td></tr>
          <tr><td className="font-semibold">Respiración</td><td>Respiración clavicular; no utiliza diafragma; aire insuficiente.</td><td>Inicia respiración diafragmática con corrección; ciclos de 4 compases.</td><td>Respiración diafragmática fluida; ciclos de 8 compases; apoyo sostenido.</td><td>Respiración profunda y automática; gestión del aire eficiente y musical.</td></tr>
          <tr><td className="font-semibold">Emisión sonora</td><td>Sonido aireado, inestable, sin centro; quiebros frecuentes.</td><td>Sonido estable con corrección; centro aceptable; leves oscilaciones.</td><td>Sonido centrado, estable y homogéneo; proyección adecuada.</td><td>Sonido bello, centrado, proyectado y con color personal; homogeneidad total.</td></tr>
          <tr><td className="font-semibold">Control dinámico</td><td>No diferencia p de f; sonido monodinámico.</td><td>Diferencia p y f con imprecisiones; cambios bruscos.</td><td>Controla pp a ff con corrección; transiciones graduales.</td><td>Controla pp-ff con belleza tímbrica; crescendo/decrescendo expresivos.</td></tr>
          <tr><td className="font-semibold">Autonomía</td><td>Dependencia total; no trabaja sin indicación constante.</td><td>Trabaja con indicaciones frecuentes; necesita modelado repetido.</td><td>Trabaja autónomamente la mayor parte del tiempo; propone soluciones.</td><td>Autonomía total; autoevalúa con criterio; propone mejoras creativas.</td></tr>
        </tbody>
      </table>

      <h4 className="mt-6">Rúbrica — UD 1 de 3º EP: "Dominio de las 24 tonalidades"</h4>
      <table className="rubric-table doc-table text-xs">
        <thead><tr><th>Indicador</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Memorización de escalas</td><td>Confunde digitaciones en tonalidades con muchas alteraciones.</td><td>Memoriza las 24 tonalidades con consulta ocasional de digitaciones.</td><td>Memoriza las 24 tonalidades sin consultar; algunas dudas en tonalidades lejanas.</td><td>Memorización total e instantánea de las 24 tonalidades en 2 octavas.</td></tr>
          <tr><td className="font-semibold">Fluidez y tempo</td><td>Se detiene en cambios de posición; tempo inferior a ♩=60.</td><td>Fluidez aceptable a ♩=72; vacilaciones en pasos difíciles.</td><td>Fluidez a ♩=88; pasos difíciles resueltos con limpieza.</td><td>Fluidez total a ♩=96; virtuosismo en pasajes rápidos.</td></tr>
          <tr><td className="font-semibold">Homogeneidad</td><td>Diferencias tímbricas notables entre registros.</td><td>Homogeneidad aceptable con leves diferencias en el passaggio.</td><td>Homogeneidad buena; passaggio controlado.</td><td>Homogeneidad total; imperceptibilidad del passaggio.</td></tr>
          <tr><td className="font-semibold">Afinación</td><td>Afinación deficiente en tonalidades con alteraciones.</td><td>Afinación aceptable; ajustes con afinador.</td><td>Buena afinación; ajustes autónomos de embocadura.</td><td>Afinación excelente sin referencia externa; oído interno desarrollado.</td></tr>
        </tbody>
      </table>

      <h4 className="mt-6">Rúbrica — UD 1 de 5º EP: "Vibrato controlado y expresivo"</h4>
      <table className="rubric-table doc-table text-xs">
        <thead><tr><th>Indicador</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Producción del vibrato</td><td>No logra producir vibrato o produce wobble incontrolado.</td><td>Produce vibrato regular pero sin control de velocidad o amplitud.</td><td>Vibrato regular con control básico de velocidad; amplitud adecuada.</td><td>Vibrato bello, controlado y adaptable; velocidad y amplitud variables a voluntad.</td></tr>
          <tr><td className="font-semibold">Control de velocidad</td><td>Velocidad fija e invariable.</td><td>Diferencia lento y rápido con imprecisiones.</td><td>Controla 3 velocidades diferentes con corrección.</td><td>Adapta la velocidad del vibrato al contexto musical con naturalidad.</td></tr>
          <tr><td className="font-semibold">Aplicación musical</td><td>No aplica vibrato o lo aplica indiscriminadamente.</td><td>Aplica vibrato en notas largas; uso básico.</td><td>Aplica vibrato con criterio estilístico y expresivo.</td><td>Vibrato como recurso expresivo maduro; integración natural en el fraseo.</td></tr>
          <tr><td className="font-semibold">Centrado del sonido</td><td>El vibrato desestabiliza la altura del sonido.</td><td>El vibrato mantiene el centro con leves oscilaciones.</td><td>El centro se mantiene con vibrato; oscilación controlada.</td><td>Centro perfecto; el vibrato enriquece sin desestabilizar.</td></tr>
        </tbody>
      </table>

      <h4 className="mt-6">Rúbrica — UD 1 de 6º EP: "Debussy Première Rhapsodie"</h4>
      <table className="rubric-table doc-table text-xs">
        <thead><tr><th>Indicador</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Estilo impresionista</td><td>Sin carácter impresionista; interpretación romántica genérica.</td><td>Carácter impresionista básico; intenta colores tímbricos.</td><td>Estilo impresionista convincente; colores tímbricos variados y adecuados.</td><td>Estilo debussysta maduro; paleta tímbrica rica; atmósfera sonora creada.</td></tr>
          <tr><td className="font-semibold">Técnicas requeridas</td><td>No domina las dificultades técnicas de la obra.</td><td>Resuelve las dificultades técnicas con corrección básica.</td><td>Domina las dificultades técnicas con fluidez y musicalidad.</td><td>Transciende la dificultad técnica; todo es medio para la expresión.</td></tr>
          <tr><td className="font-semibold">Fraseo y rubato</td><td>Fraseo plano; sin rubato o rubato incontrolado.</td><td>Fraseo con dirección; rubato básico.</td><td>Fraseo expresivo; rubato controlado y estilísticamente adecuado.</td><td>Fraseo de nivel superior; rubato personal y convincente; libertad expresiva madura.</td></tr>
          <tr><td className="font-semibold">Interpretación global</td><td>Interpretación fragmentaria sin unidad.</td><td>Interpretación correcta con unidad básica.</td><td>Interpretación convincente con arco narrativo.</td><td>Interpretación de nivel pre-superior; madurez artística plena.</td></tr>
        </tbody>
      </table>

      <h3 className="mt-8">6.3. Rúbrica para el Instrumentista Acompañante (Pianista)</h3>
      <table className="rubric-table doc-table text-xs">
        <thead><tr><th>Criterio</th><th>0-4 Insuficiente</th><th>5-6 Suficiente</th><th>7-8 Notable</th><th>9-10 Sobresaliente</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Empaste con el solista</td><td>No escucha al solista; va por libre; desajustes constantes.</td><td>Escucha al solista con ajustes ocasionales; empaste aceptable.</td><td>Buen empaste; escucha activa; ajustes sutiles y musicales.</td><td>Empaste perfecto; simbiosis musical; anticipación y reacción natural.</td></tr>
          <tr><td className="font-semibold">Equilibrio sonoro</td><td>Volumen desequilibrado; tapa al solista o queda apagado.</td><td>Equilibrio aceptable con ajustes del profesor.</td><td>Equilibrio adecuado; adapta el volumen al solista y la sala.</td><td>Equilibrio perfecto y natural; sensibilidad dinámica constante.</td></tr>
          <tr><td className="font-semibold">Precisión rítmica</td><td>Tempo inestable; no mantiene el pulso; desajustes frecuentes.</td><td>Tempo estable; mantiene el pulso con leves fluctuaciones.</td><td>Tempo firme y musical; pulso seguro; flexibilidad controlada.</td><td>Tempo perfecto; pulso infalible; rubato coordinado con el solista.</td></tr>
          <tr><td className="font-semibold">Musicalidad y estilo</td><td>Interpretación mecánica sin carácter estilístico.</td><td>Interpretación correcta con carácter básico.</td><td>Interpretación musical con estilo adecuado a la obra.</td><td>Interpretación de alto nivel; aportación musical significativa.</td></tr>
        </tbody>
      </table>

      <h3 className="mt-8">6.4. Rúbrica de Audición Pública</h3>
      <table className="rubric-table doc-table text-xs">
        <thead><tr><th>Criterio</th><th>0-4 No alcanza</th><th>5-6 Alcanza</th><th>7-8 Supera</th><th>9-10 Supera ampliamente</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Autocontrol y presencia escénica</td><td>Nerviosismo paralizante; no puede comenzar o interrumpe.</td><td>Nerviosismo visible pero logra interpretar; alguna interrupción.</td><td>Seguridad aceptable; interpreta sin interrupciones; presencia digna.</td><td>Serenidad y seguridad; presencia escénica profesional; disfrute visible.</td></tr>
          <tr><td className="font-semibold">Memorización</td><td>Depende totalmente de la partitura; olvida frecuentemente.</td><td>Consulta partitura ocasionalmente; memorización parcial.</td><td>Interpreta de memoria con seguridad; consulta mínima.</td><td>Memorización total y segura; libertad total de movimiento y expresión.</td></tr>
          <tr><td className="font-semibold">Comunicación musical</td><td>Sin contacto con el público; interpretación introvertida.</td><td>Alguna mirada al público; comunicación básica.</td><td>Contacto visual con público y acompañante; comunicación expresiva.</td><td>Comunicación plena; conexión emocional con el público; carisma escénico.</td></tr>
          <tr><td className="font-semibold">Calidad sonora en público</td><td>El sonido se deteriora notablemente por los nervios.</td><td>Leve deterioro del sonido; se recupera progresivamente.</td><td>Calidad sonora mantenida; adaptación al espacio.</td><td>Sonido mejorado por la adrenalina; proyección excelente en la sala.</td></tr>
        </tbody>
      </table>

      <h3 className="mt-8">6.5. Rúbrica de Autoevaluación para el Alumnado</h3>
      <table className="doc-table text-xs">
        <thead><tr><th>Aspecto</th><th>😟 No lo hago</th><th>😐 A veces</th><th>😊 Casi siempre</th><th>🌟 Siempre</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">He estudiado todos los días</td><td>No he estudiado varios días</td><td>He estudiado 2-3 días</td><td>He estudiado 5-6 días</td><td>He estudiado los 7 días</td></tr>
          <tr><td className="font-semibold">He seguido las indicaciones del profesor</td><td>No recuerdo las indicaciones</td><td>He seguido algunas</td><td>He seguido la mayoría</td><td>He seguido todas y he propuesto mejoras</td></tr>
          <tr><td className="font-semibold">He usado el metrónomo</td><td>No lo he usado</td><td>Lo he usado algún día</td><td>Lo uso casi todos los días</td><td>Lo uso siempre que es necesario</td></tr>
          <tr><td className="font-semibold">He grabado mis interpretaciones</td><td>No me he grabado</td><td>Me grabé una vez</td><td>Me grabo semanalmente</td><td>Me grabo y analizo regularmente</td></tr>
          <tr><td className="font-semibold">He reflexionado sobre mi progreso</td><td>No he pensado en mi progreso</td><td>Alguna vez he pensado</td><td>Reflexiono al final de cada sesión</td><td>Tengo un diario de reflexión semanal</td></tr>
        </tbody>
      </table>

      <h3 className="mt-8">6.6. Rúbrica de Evaluación del Profesorado (por el alumnado)</h3>
      <table className="doc-table text-xs">
        <thead><tr><th>Aspecto</th><th>1 Muy mejorable</th><th>2 Mejorable</th><th>3 Adecuado</th><th>4 Bueno</th><th>5 Excelente</th></tr></thead>
        <tbody>
          <tr><td className="font-semibold">Claridad de explicaciones</td><td>No entiendo las explicaciones</td><td>A veces no entiendo</td><td>Entiendo la mayoría</td><td>Entiendo siempre</td><td>Explica con claridad y ejemplos</td></tr>
          <tr><td className="font-semibold">Ambiente de aula</td><td>Tenso o incómodo</td><td>Mejorable</td><td>Agradable</td><td>Muy agradable</td><td>Estimulante y motivador</td></tr>
          <tr><td className="font-semibold">Utilidad de las correcciones</td><td>No me ayudan</td><td>A veces ayudan</td><td>Me ayudan bastante</td><td>Me ayudan mucho</td><td>Me transforman como músico</td></tr>
          <tr><td className="font-semibold">Motivación</td><td>No me motiva</td><td>Algo me motiva</td><td>Me motiva</td><td>Me motiva mucho</td><td>Me apasiona la clase</td></tr>
          <tr><td className="font-semibold">Atención a la diversidad</td><td>No atiende mis necesidades</td><td>Las atiende a veces</td><td>Las atiende generalmente</td><td>Las atiende siempre</td><td>Personaliza completamente la enseñanza</td></tr>
        </tbody>
      </table>
    </div>
  );
}
