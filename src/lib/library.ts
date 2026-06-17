export type LibraryTopic = {
  slug: string;
  title: string;
  summary: string;
  content: string[];
};

export type LibraryCategory = {
  slug: string;
  name: string;
  description: string;
  topics: LibraryTopic[];
};

export const libraryCategories: LibraryCategory[] = [
  {
    slug: "prostata",
    name: "Próstata",
    description:
      "Anatomía, hiperplasia prostática benigna, prostatitis y prevención del cáncer de próstata.",
    topics: [
      {
        slug: "que-es-la-prostata",
        title: "¿Qué es la próstata y para qué sirve?",
        summary: "Anatomía y función básica de la próstata en el sistema reproductivo masculino.",
        content: [
          "La próstata es una glándula del tamaño aproximado de una nuez, ubicada justo debajo de la vejiga y rodeando la primera porción de la uretra, el conducto por el que sale la orina y el semen.",
          "Su función principal es producir parte del líquido seminal, que nutre y protege a los espermatozoides durante la eyaculación. Es decir, forma parte del sistema reproductivo, no del sistema urinario propiamente dicho, aunque su ubicación hace que cualquier crecimiento o inflamación afecte directamente la forma de orinar.",
          "Con la edad, es normal que la próstata aumente de tamaño (hiperplasia prostática benigna), lo que puede generar síntomas urinarios. Por eso es una de las glándulas más evaluadas en la consulta urológica a partir de los 40-50 años.",
        ],
      },
      {
        slug: "hiperplasia-prostatica-benigna-sintomas-y-tratamiento",
        title: "Hiperplasia prostática benigna: síntomas y tratamiento",
        summary: "Qué es el crecimiento benigno de la próstata, sus síntomas y opciones de manejo.",
        content: [
          "La hiperplasia prostática benigna (HPB) es el crecimiento no canceroso de la próstata, extremadamente frecuente con el envejecimiento. No es cáncer y no aumenta el riesgo de desarrollarlo, pero sí puede generar molestias urinarias significativas.",
          "Los síntomas típicos incluyen chorro urinario débil, dificultad para iniciar la micción, sensación de vaciamiento incompleto, aumento de la frecuencia urinaria y despertar varias veces en la noche para orinar.",
          "El tratamiento es escalonado: cambios de hábitos y medicamentos (alfabloqueantes, inhibidores de la 5-alfa-reductasa) suelen ser la primera línea. Cuando estos no son suficientes, existen alternativas quirúrgicas modernas y mínimamente invasivas, como Rezum o HoLEP, que se eligen según el tamaño prostático y las prioridades de cada paciente.",
        ],
      },
      {
        slug: "psa-cuando-controlarlo",
        title: "Antígeno prostático específico (PSA): cuándo controlarlo",
        summary: "Qué es el PSA y a partir de qué edad conviene solicitarlo.",
        content: [
          "El PSA es una proteína producida por la próstata que se puede medir en un examen de sangre simple. Sus niveles pueden elevarse por distintas razones: crecimiento benigno, inflamación (prostatitis) o, en algunos casos, cáncer de próstata.",
          "En general se recomienda iniciar el control de PSA junto con el tacto rectal a partir de los 50 años en hombres sin factores de riesgo, y desde los 40-45 años en quienes tienen antecedentes familiares de cáncer de próstata o son de ascendencia afrodescendiente.",
          "Un PSA elevado no significa automáticamente cáncer: requiere interpretación en conjunto con la edad, el tacto rectal, el volumen prostático y, si corresponde, estudios adicionales como la resonancia multiparamétrica de próstata.",
        ],
      },
      {
        slug: "prevencion-deteccion-precoz-cancer-prostata",
        title: "Prevención y detección precoz del cáncer de próstata",
        summary: "Por qué el diagnóstico temprano cambia el pronóstico del cáncer de próstata.",
        content: [
          "El cáncer de próstata es uno de los cánceres más frecuentes en hombres, pero también uno de los que tiene mejor pronóstico cuando se detecta en etapas iniciales, antes de que aparezcan síntomas.",
          "La detección precoz se basa en el control regular con PSA y tacto rectal a partir de la edad recomendada, ajustando la frecuencia según los factores de riesgo individuales.",
          "No existe una forma comprobada de \"prevenir\" el cáncer de próstata en sentido estricto, pero mantener un peso saludable, actividad física regular y una dieta equilibrada se asocia a menor riesgo en la evidencia disponible. La medida más efectiva sigue siendo el control médico periódico.",
        ],
      },
    ],
  },
  {
    slug: "pene",
    name: "Pene",
    description: "Anatomía, fimosis, curvatura peneana, enfermedad de Peyronie y salud genital.",
    topics: [
      {
        slug: "anatomia-basica-del-pene",
        title: "Anatomía básica del pene",
        summary: "Estructuras principales del pene y su función.",
        content: [
          "El pene está compuesto principalmente por tres cuerpos cilíndricos: dos cuerpos cavernosos, responsables de la erección al llenarse de sangre, y el cuerpo esponjoso, que rodea la uretra y forma el glande en su extremo.",
          "El prepucio es el pliegue de piel que cubre el glande en hombres no circuncidados; su retracción adecuada es relevante para la higiene y para detectar condiciones como la fimosis.",
          "Conocer esta anatomía básica ayuda a entender por qué ciertas consultas urológicas (fimosis, curvatura peneana, disfunción eréctil) afectan estructuras distintas y requieren evaluaciones específicas.",
        ],
      },
      {
        slug: "fimosis-cuando-preocuparse",
        title: "Fimosis: cuándo preocuparse",
        summary: "Diferencia entre fimosis fisiológica e indicaciones de tratamiento.",
        content: [
          "La fimosis es la incapacidad de retraer completamente el prepucio para descubrir el glande. En niños pequeños es normal y suele resolverse espontáneamente con el crecimiento; no se considera un problema que requiera tratamiento antes de cierta edad.",
          "En adultos, o cuando la fimosis genera molestias, dificultad para la higiene, infecciones recurrentes o dolor durante la actividad sexual, sí amerita evaluación y eventual tratamiento, que puede ir desde cremas con corticoides hasta la circuncisión en casos persistentes.",
          "Un signo de alarma que requiere atención urgente es la parafimosis: cuando el prepucio retraído queda atrapado detrás del glande y no puede volver a su posición, generando hinchazón y dolor intenso.",
        ],
      },
      {
        slug: "curvatura-peneana-y-enfermedad-de-peyronie",
        title: "Curvatura peneana y enfermedad de Peyronie",
        summary: "Diferencia entre curvatura congénita y adquirida por enfermedad de Peyronie.",
        content: [
          "Una leve curvatura del pene en erección es variante normal en muchos hombres y no requiere tratamiento si no genera molestias ni dificultad para la actividad sexual.",
          "La enfermedad de Peyronie, en cambio, es una condición adquirida en la que se forma tejido cicatricial (placa) dentro del pene, generando una curvatura nueva, progresiva, a veces dolorosa, que puede ir acompañada de acortamiento o deformidad.",
          "El tratamiento depende de la fase: en la fase aguda (dolorosa, con curvatura cambiante) se prioriza el manejo médico; en la fase estable, si la curvatura interfiere significativamente con la función sexual, existen alternativas que van desde inyecciones intralesionales hasta cirugía correctiva.",
        ],
      },
      {
        slug: "higiene-genital-masculina",
        title: "Higiene genital masculina",
        summary: "Recomendaciones básicas de higiene genital y cuándo consultar.",
        content: [
          "Una higiene genital adecuada incluye el lavado diario con agua y jabón neutro, retrayendo suavemente el prepucio en hombres no circuncidados para limpiar el glande, sin forzar si hay resistencia.",
          "El acúmulo de secreciones (esmegma) bajo el prepucio es normal, pero su higiene deficiente se asocia a mayor riesgo de inflamación (balanitis) e infecciones.",
          "Cambios persistentes en el aspecto de la piel genital, lesiones, mal olor que no mejora con higiene, o molestias recurrentes deben evaluarse con un urólogo en lugar de automedicarse.",
        ],
      },
    ],
  },
  {
    slug: "testiculo",
    name: "Testículo",
    description: "Autoexamen testicular, dolor testicular, varicocele y masas testiculares.",
    topics: [
      {
        slug: "como-realizar-el-autoexamen-testicular",
        title: "Cómo realizar el autoexamen testicular",
        summary: "Pasos simples para revisar los testículos en casa.",
        content: [
          "El autoexamen testicular es una práctica simple, idealmente mensual, que ayuda a detectar precozmente cambios sospechosos. Se recomienda especialmente entre los 15 y 40 años, rango de mayor incidencia del cáncer testicular.",
          "Se realiza preferiblemente después de una ducha caliente, cuando el escroto está relajado: se examina cada testículo por separado, rodándolo suavemente entre los dedos para sentir su consistencia y superficie.",
          "Se debe consultar si se detecta un nódulo duro, un aumento de tamaño o de peso, una sensación de pesadez, o cualquier asimetría nueva respecto al examen habitual.",
        ],
      },
      {
        slug: "varicocele-causas-y-tratamiento",
        title: "Varicocele: causas y tratamiento",
        summary: "Qué es el varicocele, cómo afecta la fertilidad y cuándo tratarlo.",
        content: [
          "El varicocele es la dilatación anormal de las venas del cordón espermático, similar a las várices de las piernas pero en el escroto. Es más frecuente en el lado izquierdo por razones anatómicas.",
          "Puede ser asintomático o generar una sensación de pesadez o dolor sordo, que típicamente empeora al final del día o tras estar de pie por períodos prolongados.",
          "Su relevancia clínica principal es su asociación con infertilidad masculina, ya que puede alterar la temperatura testicular y afectar la producción de espermatozoides. El tratamiento (generalmente quirúrgico, mediante varicocelectomía) se indica en casos sintomáticos o cuando hay alteraciones en el espermiograma asociadas.",
        ],
      },
      {
        slug: "dolor-testicular-cuando-es-una-urgencia",
        title: "Dolor testicular: cuándo es una urgencia",
        summary: "Señales de alarma del dolor testicular que requieren atención inmediata.",
        content: [
          "El dolor testicular de inicio súbito e intenso es una urgencia urológica hasta que se demuestre lo contrario, ya que puede corresponder a una torsión testicular, una condición que compromete el flujo sanguíneo al testículo y requiere cirugía dentro de las primeras horas para evitar la pérdida del órgano.",
          "Otras causas de dolor testicular incluyen epididimitis (inflamación, generalmente infecciosa, de instalación más gradual), trauma, hidrocele complicado o, con menor frecuencia, un tumor testicular que debuta con molestia.",
          "Ante dolor testicular agudo, intenso, especialmente si se acompaña de náuseas o vómitos, se debe acudir a un servicio de urgencia de inmediato, sin esperar a que mejore espontáneamente.",
        ],
      },
      {
        slug: "nodulos-y-masas-testiculares-que-hacer",
        title: "Nódulos y masas testiculares: qué hacer",
        summary: "Pasos a seguir ante el hallazgo de un nódulo testicular.",
        content: [
          "Cualquier nódulo o masa nueva en el testículo, indolora o no, debe ser evaluado por un urólogo a la brevedad. Aunque la mayoría de las masas escrotales son benignas (como quistes de epidídimo o hidroceles), el cáncer testicular es una de las causas posibles y se beneficia enormemente del diagnóstico precoz.",
          "La evaluación inicial habitual incluye examen físico y ecografía testicular, un examen rápido, indoloro y muy útil para diferenciar el origen de la masa (testicular vs. extratesticular, sólida vs. quística).",
          "El cáncer testicular, cuando se detecta a tiempo, tiene tasas de curación muy altas, por lo que la consulta oportuna es clave y no debe postergarse por vergüenza o temor.",
        ],
      },
    ],
  },
  {
    slug: "escroto",
    name: "Escroto",
    description: "Hidrocele, quistes de epidídimo y otras condiciones del contenido escrotal.",
    topics: [
      {
        slug: "hidrocele-causas-y-tratamiento",
        title: "Hidrocele: causas y tratamiento",
        summary: "Qué es el hidrocele y cuándo requiere cirugía.",
        content: [
          "El hidrocele es la acumulación de líquido entre las capas que envuelven al testículo, generando un aumento de volumen escrotal generalmente indoloro.",
          "Puede ser congénito (en recién nacidos, asociado a un conducto que no cerró completamente) o adquirido en adultos, muchas veces sin causa identificable, aunque en ocasiones se asocia a inflamación, trauma o, raramente, a un tumor subyacente.",
          "El tratamiento solo es necesario si genera molestias, incomodidad estética significativa o crece progresivamente; en esos casos, la corrección quirúrgica (hidrocelectomía) es un procedimiento ambulatorio sencillo y de buen pronóstico.",
        ],
      },
      {
        slug: "quiste-de-epididimo-espermatocele",
        title: "Quiste de epidídimo (espermatocele)",
        summary: "Características de los quistes benignos del epidídimo.",
        content: [
          "El quiste de epidídimo, también llamado espermatocele, es una acumulación benigna de líquido (a veces con espermatozoides) en el epidídimo, la estructura adosada al testículo donde maduran los espermatozoides.",
          "Se presenta como un nódulo pequeño, generalmente indoloro, que se palpa separado del testículo propiamente dicho, lo que ayuda a diferenciarlo en el examen físico y la ecografía de otras masas escrotales más preocupantes.",
          "No requiere tratamiento salvo que cause molestias o aumente significativamente de tamaño, en cuyo caso puede extirparse quirúrgicamente sin afectar la fertilidad en la gran mayoría de los casos.",
        ],
      },
      {
        slug: "aumento-de-volumen-escrotal-guia-orientativa",
        title: "Aumento de volumen escrotal: guía orientativa",
        summary: "Cómo orientarse ante un aumento de volumen en el escroto.",
        content: [
          "Un aumento de volumen escrotal puede tener múltiples causas: hidrocele, varicocele, hernia inguinoescrotal, quistes de epidídimo o, con menor frecuencia, tumores testiculares.",
          "Algunas claves orientativas: el dolor agudo sugiere torsión o epididimitis; el crecimiento lento e indoloro sugiere hidrocele o quiste; un aumento que se reduce al acostarse sugiere hernia.",
          "Ninguna de estas claves reemplaza la evaluación médica: ante cualquier cambio de volumen escrotal nuevo, lo adecuado es consultar para examen físico y ecografía, que permiten un diagnóstico certero en la mayoría de los casos.",
        ],
      },
    ],
  },
  {
    slug: "infertilidad",
    name: "Infertilidad",
    description: "Evaluación de fertilidad masculina, espermiograma y opciones de tratamiento.",
    topics: [
      {
        slug: "como-se-evalua-la-fertilidad-masculina",
        title: "Cómo se evalúa la fertilidad masculina",
        summary: "Pasos iniciales de la evaluación de infertilidad masculina.",
        content: [
          "La infertilidad masculina contribuye a aproximadamente la mitad de los casos de parejas que no logran embarazo tras un año de intentos, por lo que la evaluación del hombre debe ser parte inicial del estudio, no un paso secundario.",
          "La evaluación inicial incluye historia clínica detallada (cirugías previas, exposición a calor o tóxicos, hábitos), examen físico genital y un espermiograma, el examen base que analiza cantidad, movilidad y forma de los espermatozoides.",
          "Según los hallazgos iniciales, se pueden solicitar exámenes adicionales como perfil hormonal, ecografía testicular o estudios genéticos, para identificar causas tratables como el varicocele.",
        ],
      },
      {
        slug: "entendiendo-tu-espermiograma",
        title: "Entendiendo tu espermiograma",
        summary: "Qué mide el espermiograma y cómo interpretar sus resultados.",
        content: [
          "El espermiograma evalúa varios parámetros del semen: volumen, concentración de espermatozoides, movilidad (qué proporción se mueve y cómo), morfología (forma) y otros indicadores como el pH.",
          "Un resultado alterado en uno o varios parámetros no significa necesariamente infertilidad absoluta, pero sí orienta a buscar causas tratables y a estimar las probabilidades de embarazo natural o la necesidad de técnicas de reproducción asistida.",
          "Es importante repetir el examen si el resultado es anormal, ya que la producción de espermatozoides varía con el tiempo, el estrés, enfermedades recientes o la abstinencia previa al examen, factores que el urólogo considerará al interpretar los resultados.",
        ],
      },
      {
        slug: "varicocele-e-infertilidad",
        title: "Varicocele e infertilidad",
        summary: "Relación entre el varicocele y los problemas de fertilidad masculina.",
        content: [
          "El varicocele es una de las causas tratables más frecuentes de infertilidad masculina, presente en una proporción importante de hombres evaluados por dificultad para concebir.",
          "Se cree que el mecanismo involucra el aumento de temperatura testicular y alteraciones en el flujo sanguíneo local, que afectan la producción y calidad de los espermatozoides.",
          "La corrección quirúrgica del varicocele (varicocelectomía) puede mejorar los parámetros del espermiograma en muchos pacientes, aunque la decisión de operar se individualiza según el grado del varicocele, los hallazgos del espermiograma y el contexto reproductivo de la pareja.",
        ],
      },
      {
        slug: "factores-de-estilo-de-vida-que-afectan-la-fertilidad",
        title: "Factores de estilo de vida que afectan la fertilidad",
        summary: "Hábitos modificables que influyen en la fertilidad masculina.",
        content: [
          "El tabaquismo, el consumo excesivo de alcohol y el uso de sustancias como anabólicos esteroides tienen efectos negativos comprobados sobre la calidad espermática.",
          "La exposición prolongada al calor (saunas frecuentes, uso de notebook directamente sobre el regazo, ciertos trabajos con exposición térmica) y el sobrepeso también se asocian a menor calidad seminal.",
          "Mejorar estos factores no siempre revierte completamente la infertilidad, pero forma parte habitual de las recomendaciones iniciales, ya que son cambios de bajo riesgo y potencial beneficio, complementarios a cualquier tratamiento médico específico.",
        ],
      },
    ],
  },
  {
    slug: "cirugia",
    name: "Cirugía",
    description: "Qué esperar antes y después de una cirugía urológica o andrológica.",
    topics: [
      {
        slug: "preparacion-cirugia-urologica-ambulatoria",
        title: "Preparación para una cirugía urológica ambulatoria",
        summary: "Recomendaciones generales antes de una cirugía urológica ambulatoria.",
        content: [
          "La mayoría de las cirugías urológicas y andrológicas menores (circuncisión, varicocelectomía, hidrocelectomía, entre otras) se realizan de forma ambulatoria, es decir, el paciente vuelve a casa el mismo día.",
          "La preparación habitual incluye ayuno según indicación (generalmente 6-8 horas si se usa sedación o anestesia general), suspensión de ciertos medicamentos como anticoagulantes según indicación médica específica, y contar con un acompañante para el regreso a casa.",
          "Es importante informar al equipo médico sobre alergias, medicamentos habituales y condiciones de salud previas durante la evaluación preoperatoria, para minimizar riesgos durante el procedimiento.",
        ],
      },
      {
        slug: "recuperacion-postoperatoria-cuidados-generales",
        title: "Recuperación postoperatoria: cuidados generales",
        summary: "Cuidados generales recomendados tras una cirugía urológica.",
        content: [
          "El reposo relativo, evitar esfuerzo físico intenso y seguir las indicaciones de curación de heridas son comunes a la mayoría de las cirugías urológicas ambulatorias durante los primeros días.",
          "El manejo del dolor postoperatorio suele lograrse con analgésicos comunes; un dolor que aumenta progresivamente en lugar de mejorar, fiebre, o signos de infección en la herida (enrojecimiento intenso, secreción purulenta) deben motivar consulta inmediata.",
          "Los plazos de recuperación varían según el procedimiento específico, por lo que siempre se entregan indicaciones personalizadas al alta, incluyendo cuándo retomar actividad física, laboral y sexual.",
        ],
      },
      {
        slug: "anestesia-local-cirugia-genital-que-esperar",
        title: "Anestesia local en cirugía genital: qué esperar",
        summary: "Qué sentir y esperar durante una cirugía con anestesia local.",
        content: [
          "Muchos procedimientos urológicos menores (circuncisión, biopsias, algunas correcciones de curvatura peneana) pueden realizarse con anestesia local, evitando los riesgos y la recuperación asociados a la anestesia general.",
          "Con anestesia local, el paciente está despierto durante el procedimiento pero no debería sentir dolor en la zona, solo eventualmente sensación de presión o manipulación; se administra mediante inyección previa al inicio del procedimiento.",
          "La recuperación de la anestesia local es prácticamente inmediata, lo que permite al paciente irse a casa poco después de finalizado el procedimiento, sin los efectos de somnolencia asociados a la sedación o anestesia general.",
        ],
      },
    ],
  },
  {
    slug: "reconstruccion",
    name: "Reconstrucción",
    description: "Estenosis y trauma uretral, y cirugía reconstructiva de alta complejidad.",
    topics: [
      {
        slug: "estenosis-uretral-signos-de-alarma",
        title: "Estenosis uretral: signos de alarma",
        summary: "Síntomas que pueden indicar una estrechez de la uretra.",
        content: [
          "La estenosis uretral es el estrechamiento de la uretra que dificulta el paso de la orina, generalmente causado por cicatrización tras infecciones, traumas, procedimientos médicos previos (como sondajes) o, en algunos casos, sin causa identificable.",
          "Los signos de alarma incluyen chorro urinario débil o bifurcado, esfuerzo para orinar, sensación de vaciamiento incompleto, infecciones urinarias recurrentes y, en casos avanzados, retención urinaria completa.",
          "El diagnóstico se confirma con estudios como la uretrografía o la uretrocistoscopía, que permiten determinar la localización y longitud de la estrechez, datos clave para planificar el tratamiento más adecuado.",
        ],
      },
      {
        slug: "que-es-una-uretroplastia",
        title: "Qué es una uretroplastía",
        summary: "Descripción de la cirugía reconstructiva para tratar la estenosis uretral.",
        content: [
          "La uretroplastía es la cirugía reconstructiva definitiva para la estenosis uretral, en la que se reseca el segmento estrecho y se reconstruye la uretra, ya sea uniendo los extremos sanos o utilizando un injerto de tejido (frecuentemente de la mucosa oral).",
          "A diferencia de procedimientos endoscópicos simples (como la dilatación), que suelen tener altas tasas de recurrencia, la uretroplastía ofrece resultados mucho más duraderos cuando es realizada por un cirujano con entrenamiento específico en reconstrucción uretral.",
          "Es una cirugía de mayor complejidad técnica, generalmente reservada para casos de estenosis recurrente o de cierta extensión, y requiere planificación cuidadosa según la ubicación exacta del estrechamiento.",
        ],
      },
      {
        slug: "vida-despues-de-una-reconstruccion-uretral",
        title: "Vida después de una reconstrucción uretral",
        summary: "Expectativas de recuperación y seguimiento tras una uretroplastía.",
        content: [
          "Tras una uretroplastía, es habitual mantener una sonda urinaria por un período (generalmente dos a tres semanas) para permitir la cicatrización adecuada del nuevo trayecto uretral.",
          "El seguimiento incluye control del flujo urinario y, en ocasiones, una uretrografía o cistoscopía de control para confirmar que el resultado se mantiene adecuado en el tiempo.",
          "Las tasas de éxito a largo plazo son altas, especialmente cuando el procedimiento es realizado por un cirujano especializado, y la mayoría de los pacientes recupera un flujo urinario normal y una buena calidad de vida.",
        ],
      },
    ],
  },
  {
    slug: "salud-sexual",
    name: "Salud sexual",
    description: "Disfunción eréctil, prótesis peneana y bienestar sexual masculino.",
    topics: [
      {
        slug: "disfuncion-erectil-mitos-y-realidades",
        title: "Disfunción eréctil: mitos y realidades",
        summary: "Aclarando conceptos erróneos comunes sobre la disfunción eréctil.",
        content: [
          "La disfunción eréctil es la dificultad persistente para lograr o mantener una erección suficiente para la actividad sexual. Es muy frecuente, especialmente con la edad, y no debe considerarse motivo de vergüenza ni un tema a evitar con el médico.",
          "Un mito común es que siempre tiene origen psicológico; en realidad, en muchos hombres —especialmente mayores de 40-50 años— intervienen factores vasculares, hormonales o metabólicos (diabetes, hipertensión, colesterol elevado), por lo que puede ser un signo de alarma temprano de enfermedad cardiovascular.",
          "Otro mito es que no tiene solución: existen múltiples alternativas de tratamiento efectivas, desde medicamentos orales hasta terapias más avanzadas, por lo que la consulta oportuna permite identificar la causa y el tratamiento más adecuado.",
        ],
      },
      {
        slug: "opciones-de-tratamiento-disfuncion-erectil",
        title: "Opciones de tratamiento para la disfunción eréctil",
        summary: "Panorama de las alternativas terapéuticas disponibles.",
        content: [
          "El tratamiento de primera línea suele ser farmacológico, con inhibidores de la fosfodiesterasa tipo 5, que facilitan la erección en respuesta a la estimulación sexual y son efectivos en una proporción importante de los pacientes.",
          "Cuando los medicamentos orales no son efectivos o están contraindicados, existen alternativas como las inyecciones intracavernosas, los dispositivos de vacío, o terapias complementarias dirigidas a la causa subyacente.",
          "En casos de disfunción eréctil severa y refractaria a otros tratamientos, la prótesis peneana ofrece una solución definitiva y altamente efectiva, con muy buena satisfacción reportada por los pacientes que la requieren.",
        ],
      },
      {
        slug: "protesis-peneana-preguntas-frecuentes",
        title: "Prótesis peneana: preguntas frecuentes",
        summary: "Respuestas a las dudas más comunes sobre la prótesis peneana.",
        content: [
          "La prótesis peneana es un dispositivo implantado quirúrgicamente que permite lograr una erección a voluntad, indicado en disfunción eréctil severa que no responde a otros tratamientos.",
          "Existen distintos tipos: las inflables, que permiten una erección y flacidez más natural mediante una bomba interna, y las maleables, de menor complejidad mecánica pero igualmente efectivas. La elección depende de las preferencias del paciente y la evaluación quirúrgica.",
          "La cirugía no afecta la sensibilidad del pene ni la capacidad de orgasmo, ya que estas dependen de estructuras nerviosas distintas a los cuerpos cavernosos donde se coloca el implante. La satisfacción reportada por pacientes y parejas suele ser muy alta.",
        ],
      },
    ],
  },
  {
    slug: "prevencion",
    name: "Prevención",
    description: "Chequeos urológicos, factores de riesgo y hábitos de vida saludable.",
    topics: [
      {
        slug: "cuando-visitar-al-urologo-por-primera-vez",
        title: "¿Cuándo visitar al urólogo por primera vez?",
        summary: "Edades y motivos recomendados para la primera consulta urológica.",
        content: [
          "No existe una edad única para la primera consulta urológica: depende de los síntomas y factores de riesgo de cada persona. Sin embargo, se recomienda un primer chequeo preventivo alrededor de los 40-50 años en hombres sin síntomas ni antecedentes relevantes.",
          "Síntomas como cambios en el chorro urinario, sangre en la orina, dolor testicular, masas escrotales, o dificultades en la función sexual son motivo de consulta a cualquier edad, sin necesidad de esperar un chequeo programado.",
          "Los antecedentes familiares de cáncer de próstata, testicular o renal son motivo para adelantar la edad de la primera evaluación, conversándolo directamente con el urólogo.",
        ],
      },
      {
        slug: "chequeo-urologico-segun-la-edad",
        title: "Chequeo urológico según la edad",
        summary: "Qué evaluaciones son relevantes en cada etapa de la vida.",
        content: [
          "En la adolescencia y adultez joven, lo relevante es el autoexamen testicular regular y la consulta ante cualquier síntoma genital, dado que es la etapa de mayor riesgo de cáncer testicular.",
          "Entre los 40 y 50 años, cobra relevancia el inicio del control de PSA y tacto rectal, junto con la evaluación de síntomas urinarios asociados al crecimiento prostático.",
          "A partir de los 60 años, además de continuar los controles prostáticos, aumenta la relevancia de evaluar síntomas de vejiga hiperactiva, incontinencia y, en general, el impacto de la salud urológica en la calidad de vida.",
        ],
      },
      {
        slug: "habitos-que-protegen-tu-salud-urologica",
        title: "Hábitos que protegen tu salud urológica",
        summary: "Recomendaciones de estilo de vida con impacto en la salud urológica.",
        content: [
          "Mantener una buena hidratación, una dieta equilibrada con bajo consumo de sal y proteína animal en exceso, y actividad física regular se asocia a menor riesgo de litiasis renal, hiperplasia prostática sintomática y disfunción eréctil.",
          "Evitar el tabaquismo es una de las medidas más importantes: se asocia a mayor riesgo de cáncer de vejiga, disfunción eréctil y peor cicatrización tras cirugías urológicas.",
          "El control de condiciones metabólicas como la diabetes y la hipertensión también protege la salud urológica a largo plazo, ya que ambas se relacionan directamente con disfunción eréctil, vejiga hiperactiva e infecciones urinarias recurrentes.",
        ],
      },
    ],
  },
];

export function getLibraryCategoryBySlug(slug: string) {
  return libraryCategories.find((c) => c.slug === slug);
}

export function getLibraryTopic(categoriaSlug: string, temaSlug: string) {
  const category = getLibraryCategoryBySlug(categoriaSlug);
  if (!category) return undefined;
  const topic = category.topics.find((t) => t.slug === temaSlug);
  if (!topic) return undefined;
  return { category, topic };
}
