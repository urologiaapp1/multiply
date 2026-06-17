export type Specialty = {
  slug: string;
  name: string;
  category: "Cirugía genital" | "Andrología" | "Reconstrucción uretral" | "Infertilidad";
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  resumen: string;
  indicaciones: string[];
  sintomas: string[];
  diagnostico: string[];
  tratamiento: string[];
  beneficios: string[];
  riesgos: string[];
  recuperacion: string;
  faqs: { question: string; answer: string }[];
  imagePrompt: string;
};

export const specialties: Specialty[] = [
  {
    slug: "vasectomia",
    name: "Vasectomía",
    category: "Cirugía genital",
    shortDescription:
      "Método de anticoncepción permanente, seguro y mínimamente invasivo para el hombre.",
    seoTitle: "Vasectomía en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Vasectomía sin bisturí en Temuco: procedimiento ambulatorio, rápido y de alta efectividad. Información completa, recuperación y agenda de hora.",
    keywords: ["vasectomía Temuco", "vasectomía sin bisturí", "anticoncepción masculina Chile"],
    resumen:
      "La vasectomía es una cirugía ambulatoria que interrumpe los conductos deferentes para impedir el paso de espermatozoides al semen, logrando anticoncepción permanente con una efectividad superior al 99%. Se realiza con anestesia local, en un tiempo de 20 a 30 minutos, y permite al paciente volver a casa el mismo día.",
    indicaciones: [
      "Hombres que han decidido no tener más hijos y buscan un método anticonceptivo definitivo.",
      "Parejas que desean evitar los efectos secundarios de los anticonceptivos hormonales femeninos.",
      "Pacientes con contraindicación médica para que su pareja utilice otros métodos anticonceptivos.",
    ],
    sintomas: [
      "No corresponde a una enfermedad, por lo que no existen síntomas previos asociados.",
      "Es una decisión electiva de planificación familiar.",
    ],
    diagnostico: [
      "Evaluación urológica completa y conversación sobre expectativas y carácter permanente del procedimiento.",
      "Examen físico genital para descartar contraindicaciones locales.",
      "Revisión de antecedentes médicos y de coagulación.",
    ],
    tratamiento: [
      "Técnica de vasectomía sin bisturí, con mínima incisión y sin puntos en la mayoría de los casos.",
      "Anestesia local en la zona escrotal.",
      "Sección y oclusión de ambos conductos deferentes.",
      "Procedimiento ambulatorio de aproximadamente 20-30 minutos.",
    ],
    beneficios: [
      "Efectividad superior al 99% como método anticonceptivo.",
      "Recuperación rápida, en general 2 a 3 días.",
      "No afecta la libido, la erección ni la sensación del orgasmo.",
      "Evita el uso de anticonceptivos hormonales en la pareja.",
    ],
    riesgos: [
      "Hematoma o inflamación escrotal leve y transitoria.",
      "Infección local poco frecuente.",
      "Dolor testicular crónico en un porcentaje muy bajo de pacientes.",
      "Recanalización espontánea (excepcional, menor al 1%).",
    ],
    recuperacion:
      "Se recomienda reposo relativo por 48 horas, uso de suspensorio o ropa interior ajustada, frío local las primeras 24 horas y evitar esfuerzo físico intenso durante una semana. La actividad sexual puede reanudarse a los 7 días, manteniendo otro método anticonceptivo hasta confirmar ausencia de espermatozoides en el espermiograma de control, habitualmente a los tres meses.",
    faqs: [
      {
        question: "¿La vasectomía es reversible?",
        answer:
          "Debe considerarse un método permanente. Existe la posibilidad de reversión quirúrgica (vasovasostomía), pero su éxito no está garantizado y depende del tiempo transcurrido y otros factores individuales.",
      },
      {
        question: "¿Afecta el deseo sexual o la erección?",
        answer:
          "No. La producción de testosterona y la función eréctil no se ven afectadas, ya que la vasectomía solo bloquea el transporte de espermatozoides, no la producción hormonal.",
      },
      {
        question: "¿Cuándo deja de ser fértil tras la cirugía?",
        answer:
          "No de inmediato. Debe usarse otro método anticonceptivo hasta confirmar con un espermiograma de control, generalmente a los 3 meses o tras un número determinado de eyaculaciones.",
      },
    ],
    imagePrompt:
      "Ilustración médica moderna y minimalista en vector plano de la anatomía del sistema reproductor masculino mostrando los conductos deferentes, estilo institucional limpio, paleta azul institucional y blanco, sin contenido explícito, sin sangre, fondo blanco.",
  },
  {
    slug: "circuncision",
    name: "Circuncisión",
    category: "Cirugía genital",
    shortDescription:
      "Extirpación quirúrgica del prepucio por causas médicas o decisión personal, en adultos y niños.",
    seoTitle: "Circuncisión en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Circuncisión en adultos y niños en Temuco. Técnica segura, indicaciones médicas, recuperación y resultados estéticos. Agenda tu evaluación.",
    keywords: ["circuncisión Temuco", "circuncisión adultos Chile", "fimosis tratamiento"],
    resumen:
      "La circuncisión consiste en la extirpación quirúrgica del prepucio, indicada principalmente por fimosis, infecciones recurrentes o por decisión personal/cultural. Es un procedimiento seguro, de baja complejidad, realizado de forma ambulatoria con anestesia local o general según la edad del paciente.",
    indicaciones: [
      "Fimosis sintomática que no responde a tratamiento con corticoides tópicos.",
      "Balanitis o balanopostitis a repetición.",
      "Parafimosis recurrente.",
      "Decisión personal, religiosa o estética del paciente adulto.",
    ],
    sintomas: [
      "Dificultad o imposibilidad para retraer el prepucio.",
      "Dolor o molestia durante la erección o el aseo.",
      "Inflamación, enrojecimiento o secreción en el glande.",
      "Infecciones urinarias o genitales recurrentes.",
    ],
    diagnostico: [
      "Examen físico genital detallado.",
      "Evaluación del grado de fimosis y descarte de causas dermatológicas como liquen escleroso.",
      "Historia clínica de infecciones previas.",
    ],
    tratamiento: [
      "Cirugía ambulatoria con anestesia local en adultos.",
      "Resección del prepucio con técnica que preserva la sensibilidad y la estética del glande.",
      "Sutura con material absorbible, sin necesidad de retiro de puntos.",
    ],
    beneficios: [
      "Resuelve definitivamente la fimosis y sus complicaciones.",
      "Reduce el riesgo de infecciones genitourinarias.",
      "Mejora la higiene y la calidad de vida sexual.",
      "Resultado estético definitivo.",
    ],
    riesgos: [
      "Sangrado o hematoma leve.",
      "Infección de la herida operatoria.",
      "Edema temporal del glande.",
      "Cicatriz hipertrófica en casos infrecuentes.",
    ],
    recuperacion:
      "La recuperación completa toma entre 2 y 3 semanas. Se recomienda reposo relativo la primera semana, evitar actividad sexual y esfuerzo físico por al menos 3-4 semanas, y mantener curaciones diarias según indicación médica.",
    faqs: [
      {
        question: "¿Es dolorosa la recuperación?",
        answer:
          "Existe molestia e hinchazón los primeros días, controlables con analgesia oral indicada por el médico. El dolor intenso o sostenido no es esperable y debe consultarse.",
      },
      {
        question: "¿Cuándo puedo retomar la actividad sexual?",
        answer:
          "Habitualmente entre 3 y 4 semanas, una vez confirmada la cicatrización completa en el control postoperatorio.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial minimalista mostrando un esquema anatómico simplificado del procedimiento de circuncisión, estilo institucional, líneas limpias, paleta azul y verde quirúrgico, sin contenido explícito ni sangre.",
  },
  {
    slug: "fimosis",
    name: "Fimosis",
    category: "Cirugía genital",
    shortDescription:
      "Estrechez del prepucio que impide su retracción completa sobre el glande.",
    seoTitle: "Tratamiento de Fimosis en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Diagnóstico y tratamiento de fimosis en niños y adultos en Temuco: desde corticoides tópicos hasta cirugía. Atención especializada.",
    keywords: ["fimosis Temuco", "tratamiento fimosis", "fimosis niños adultos"],
    resumen:
      "La fimosis es la imposibilidad de retraer completamente el prepucio sobre el glande, frecuente en la infancia y habitualmente fisiológica hasta cierta edad. Cuando persiste en la adolescencia o adultez, o genera síntomas, requiere evaluación urológica y eventual tratamiento médico o quirúrgico.",
    indicaciones: [
      "Fimosis fisiológica persistente más allá de los 5-7 años.",
      "Fimosis sintomática en cualquier edad: dolor, infecciones o dificultad urinaria.",
      "Fimosis cicatricial secundaria a balanitis o liquen escleroso.",
    ],
    sintomas: [
      "Prepucio que no se retrae o lo hace con dolor.",
      "Globo prepucial al orinar.",
      "Infecciones balanoprepuciales repetidas.",
      "Dolor durante la erección en adolescentes y adultos.",
    ],
    diagnostico: [
      "Examen físico para clasificar el grado de fimosis.",
      "Diferenciación entre fimosis fisiológica y patológica.",
      "Evaluación de causas cicatriciales o dermatológicas asociadas.",
    ],
    tratamiento: [
      "Corticoides tópicos asociados a ejercicios de retracción suave como primera línea.",
      "Circuncisión o postectomía cuando el tratamiento médico no es efectivo.",
      "Plastia prepucial en casos seleccionados que buscan preservar el prepucio.",
    ],
    beneficios: [
      "Alivio de síntomas y mejora de la higiene genital.",
      "Prevención de complicaciones como parafimosis.",
      "Alternativas conservadoras antes de indicar cirugía cuando es posible.",
    ],
    riesgos: [
      "Recurrencia si el tratamiento tópico se discontinúa precozmente.",
      "Riesgos quirúrgicos habituales de la circuncisión si se requiere.",
    ],
    recuperacion:
      "Con tratamiento tópico, la mejoría se observa en 4 a 8 semanas de uso constante. Si se requiere cirugía, la recuperación es similar a la circuncisión, entre 2 y 3 semanas.",
    faqs: [
      {
        question: "¿La fimosis en niños siempre requiere cirugía?",
        answer:
          "No. La mayoría de los casos en la infancia son fisiológicos y se resuelven espontáneamente o con tratamiento tópico, sin necesidad de cirugía.",
      },
      {
        question: "¿Qué diferencia hay entre fimosis y parafimosis?",
        answer:
          "La fimosis es la imposibilidad de retraer el prepucio; la parafimosis es una urgencia en que el prepucio retraído queda atrapado detrás del glande, provocando edema y dolor agudo.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial educativa mostrando comparación anatómica simplificada entre prepucio normal y fimosis, estilo limpio institucional, paleta azul y gris claro, sin contenido explícito.",
  },
  {
    slug: "frenillo-corto",
    name: "Frenillo corto",
    category: "Cirugía genital",
    shortDescription:
      "Acortamiento del frenillo prepucial que puede limitar la retracción y causar dolor en la erección.",
    seoTitle: "Frenillo corto: tratamiento en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Corrección quirúrgica de frenillo corto (frenuloplastía) en Temuco. Evaluación y tratamiento personalizado con el Dr. Cristóbal Betancourt.",
    keywords: ["frenillo corto", "frenuloplastía Temuco", "frenillo peneano"],
    resumen:
      "El frenillo corto es una banda de tejido prepucial más corta de lo habitual que limita la retracción completa del prepucio y puede generar dolor o pequeñas laceraciones durante la actividad sexual. Su corrección quirúrgica (frenuloplastía) es sencilla y resolutiva.",
    indicaciones: [
      "Dolor o tensión durante la erección o la actividad sexual.",
      "Pequeños desgarros o sangrado recurrente del frenillo.",
      "Curvatura del pene en erección secundaria al frenillo corto.",
    ],
    sintomas: [
      "Dolor localizado en la cara ventral del glande durante la erección.",
      "Sangrado leve tras la actividad sexual.",
      "Sensación de tope al retraer el prepucio.",
    ],
    diagnostico: [
      "Examen físico con el pene en reposo y, si corresponde, en erección.",
      "Evaluación de la longitud y elasticidad del frenillo.",
    ],
    tratamiento: [
      "Frenuloplastía: alargamiento quirúrgico del frenillo mediante técnica en Z o V-Y.",
      "Procedimiento ambulatorio con anestesia local.",
    ],
    beneficios: [
      "Elimina el dolor y el riesgo de desgarro durante la actividad sexual.",
      "Procedimiento breve, con baja tasa de complicaciones.",
      "Preserva la sensibilidad del glande.",
    ],
    riesgos: [
      "Sangrado leve o hematoma local.",
      "Cicatriz puntual en la zona tratada.",
      "Infección local poco frecuente.",
    ],
    recuperacion:
      "La recuperación es rápida, entre 7 y 10 días, evitando actividad sexual durante ese período hasta la cicatrización completa.",
    faqs: [
      {
        question: "¿Es lo mismo que una circuncisión?",
        answer:
          "No. La frenuloplastía es un procedimiento focal sobre el frenillo, mucho más acotado que la circuncisión, y en general preserva la mayor parte del prepucio.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial minimalista del frenillo prepucial y su corrección quirúrgica, estilo institucional limpio, tonos azules, sin contenido explícito.",
  },
  {
    slug: "disfuncion-erectil",
    name: "Disfunción eréctil",
    category: "Andrología",
    shortDescription:
      "Dificultad persistente para lograr o mantener una erección suficiente para la actividad sexual.",
    seoTitle: "Disfunción eréctil en Temuco | Tratamiento Dr. Betancourt",
    seoDescription:
      "Evaluación y tratamiento integral de la disfunción eréctil en Temuco: causas, exámenes y opciones terapéuticas, desde fármacos hasta prótesis peneana.",
    keywords: ["disfunción eréctil Temuco", "tratamiento disfunción eréctil Chile", "andrólogo Temuco"],
    resumen:
      "La disfunción eréctil es la dificultad persistente para conseguir o mantener una erección adecuada para la actividad sexual satisfactoria. Puede tener origen vascular, neurológico, hormonal, psicológico o mixto, y cuenta con tratamientos efectivos en la gran mayoría de los casos.",
    indicaciones: [
      "Dificultad recurrente para lograr o mantener la erección por más de 3 meses.",
      "Disminución de la rigidez o duración de las erecciones.",
      "Disfunción eréctil asociada a diabetes, hipertensión o enfermedad cardiovascular.",
    ],
    sintomas: [
      "Erecciones poco firmes o de corta duración.",
      "Ausencia de erecciones matutinas.",
      "Pérdida de confianza o evitación de la actividad sexual.",
    ],
    diagnostico: [
      "Historia clínica y sexual detallada.",
      "Exámenes de laboratorio: perfil hormonal, glicemia, perfil lipídico.",
      "Eco-doppler peneano en casos seleccionados para evaluar componente vascular.",
    ],
    tratamiento: [
      "Cambios en estilo de vida y manejo de factores de riesgo cardiovascular.",
      "Inhibidores de la fosfodiesterasa tipo 5 (terapia oral) como primera línea.",
      "Terapia de ondas de choque de baja intensidad en casos seleccionados.",
      "Inyecciones intracavernosas o dispositivos de vacío en casos refractarios.",
      "Prótesis peneana cuando otras terapias no son efectivas.",
    ],
    beneficios: [
      "Recuperación de la función sexual y la calidad de vida en pareja.",
      "Detección oportuna de enfermedad cardiovascular subyacente.",
      "Múltiples alternativas terapéuticas escalonadas según severidad.",
    ],
    riesgos: [
      "Efectos secundarios leves de la terapia oral (cefalea, congestión nasal).",
      "Riesgos propios de procedimientos invasivos en casos avanzados (priapismo con inyecciones).",
    ],
    recuperacion:
      "La mayoría de los tratamientos no quirúrgicos no requieren recuperación; en caso de procedimientos como la colocación de prótesis, la recuperación se detalla en esa especialidad específica.",
    faqs: [
      {
        question: "¿La disfunción eréctil es solo un problema psicológico?",
        answer:
          "No siempre. Si bien factores psicológicos pueden influir, en muchos casos existe una causa vascular, hormonal o neurológica que debe evaluarse y tratarse específicamente.",
      },
      {
        question: "¿A partir de qué edad es más frecuente?",
        answer:
          "Su prevalencia aumenta con la edad, pero puede presentarse a cualquier edad adulta, especialmente asociada a diabetes, tabaquismo o enfermedad cardiovascular.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial conceptual sobre salud vascular y sexual masculina, estilo institucional moderno, paleta azul institucional, abstracta y no explícita.",
  },
  {
    slug: "curvatura-peneana",
    name: "Curvatura peneana",
    category: "Andrología",
    shortDescription:
      "Desviación del eje del pene en erección, congénita o adquirida.",
    seoTitle: "Curvatura peneana en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Evaluación y corrección de curvatura peneana congénita y adquirida en Temuco. Diagnóstico preciso y alternativas quirúrgicas y no quirúrgicas.",
    keywords: ["curvatura peneana Temuco", "pene curvo tratamiento", "cirugía curvatura peneana"],
    resumen:
      "La curvatura peneana es la desviación del eje del pene durante la erección, que puede ser congénita (presente desde la pubertad) o adquirida, frecuentemente asociada a la enfermedad de Peyronie. Cuando dificulta la penetración o genera dolor, existen alternativas terapéuticas efectivas.",
    indicaciones: [
      "Curvatura que dificulta o impide la penetración.",
      "Dolor en erección asociado a la curvatura.",
      "Impacto psicológico o en la relación de pareja.",
    ],
    sintomas: [
      "Desviación visible del pene en erección, hacia arriba, abajo o lateral.",
      "Dolor durante la erección en fases iniciales (si es adquirida).",
      "Dificultad mecánica para la relación sexual.",
    ],
    diagnostico: [
      "Fotografías del paciente en erección o prueba de erección farmacológica en consulta.",
      "Eco-doppler peneano para evaluar placas o alteraciones vasculares.",
      "Diferenciación entre curvatura congénita y adquirida (Peyronie).",
    ],
    tratamiento: [
      "Observación en curvaturas leves sin impacto funcional.",
      "Terapias no quirúrgicas en fases agudas de Peyronie.",
      "Corrección quirúrgica (plicatura o técnicas de incisión-injerto) en curvaturas significativas y estables.",
    ],
    beneficios: [
      "Restablece la función sexual satisfactoria.",
      "Alto índice de satisfacción con la corrección quirúrgica en casos bien indicados.",
    ],
    riesgos: [
      "Acortamiento peneano leve tras la plicatura.",
      "Riesgo de hipoestesia o disfunción eréctil postoperatoria en técnicas más complejas.",
      "Recurrencia parcial de la curvatura en casos infrecuentes.",
    ],
    recuperacion:
      "El reposo sexual recomendado tras la cirugía es de 4 a 6 semanas, con control postoperatorio para evaluar el resultado funcional y estético.",
    faqs: [
      {
        question: "¿Toda curvatura peneana necesita cirugía?",
        answer:
          "No. Solo se indica cirugía cuando la curvatura es significativa, estable en el tiempo y genera dificultad funcional o dolor persistente.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial esquemática y no explícita sobre la anatomía peneana y su eje, estilo clínico institucional, tonos azules y blancos.",
  },
  {
    slug: "enfermedad-de-peyronie",
    name: "Enfermedad de Peyronie",
    category: "Andrología",
    shortDescription:
      "Formación de placas fibrosas en el pene que provocan curvatura, dolor y acortamiento.",
    seoTitle: "Enfermedad de Peyronie en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Diagnóstico y tratamiento de la enfermedad de Peyronie en Temuco: fase aguda, fase crónica y opciones quirúrgicas. Atención especializada en andrología.",
    keywords: ["enfermedad de Peyronie Temuco", "Peyronie tratamiento Chile", "placa peneana"],
    resumen:
      "La enfermedad de Peyronie es la formación de placas de tejido fibroso en la túnica albugínea del pene, que provoca curvatura, dolor en erección, acortamiento y en ocasiones disfunción eréctil. Tiene una fase aguda inflamatoria y una fase crónica estable, cada una con manejo distinto.",
    indicaciones: [
      "Curvatura peneana progresiva con o sin dolor.",
      "Palpación de una placa o nódulo en el cuerpo del pene.",
      "Dificultad para la penetración por deformidad peneana.",
    ],
    sintomas: [
      "Dolor en erección durante la fase aguda (primeros 6-12 meses).",
      "Curvatura progresiva del pene.",
      "Acortamiento peneano y, en algunos casos, deformidad en reloj de arena.",
      "Ansiedad o evitación de la actividad sexual.",
    ],
    diagnostico: [
      "Examen físico con palpación de placas.",
      "Eco-doppler peneano para caracterizar la placa y evaluar calcificación.",
      "Clasificación en fase aguda o crónica según evolución y estabilidad.",
    ],
    tratamiento: [
      "Observación y manejo del dolor en fase aguda temprana.",
      "Terapias intralesionales en casos seleccionados durante la fase activa.",
      "Cirugía correctiva (plicatura o injerto) una vez estabilizada la curvatura, habitualmente tras 12 meses de evolución.",
      "Prótesis peneana en pacientes con Peyronie y disfunción eréctil asociada.",
    ],
    beneficios: [
      "Alivio del dolor en la mayoría de los pacientes con el paso de la fase aguda.",
      "Corrección efectiva de la curvatura en fase crónica estable.",
      "Mejora significativa de la función sexual y la confianza del paciente.",
    ],
    riesgos: [
      "Persistencia de curvatura residual leve tras cirugía.",
      "Riesgo de disfunción eréctil postoperatoria en técnicas con injerto.",
      "Recurrencia de la enfermedad en casos infrecuentes.",
    ],
    recuperacion:
      "En fase aguda, el seguimiento es clínico cada 2-3 meses hasta la estabilización. Tras la cirugía correctiva, la recuperación funcional toma entre 4 y 6 semanas, con reinicio progresivo de la actividad sexual.",
    faqs: [
      {
        question: "¿La enfermedad de Peyronie desaparece sola?",
        answer:
          "En algunos casos el dolor cede espontáneamente, pero la curvatura suele persistir. Por eso es importante la evaluación urológica para definir el mejor momento y tipo de tratamiento.",
      },
      {
        question: "¿Cuándo se debe operar?",
        answer:
          "Idealmente cuando la enfermedad está en fase crónica estable, es decir, sin cambios en la curvatura ni dolor por al menos 3 a 6 meses, generalmente después de los 12 meses desde el inicio.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial educativa mostrando de forma esquemática y no explícita una placa fibrosa en la túnica del pene, estilo institucional limpio, paleta azul y gris.",
  },
  {
    slug: "protesis-peneana",
    name: "Prótesis peneana",
    category: "Andrología",
    shortDescription:
      "Solución quirúrgica definitiva para la disfunción eréctil refractaria a otros tratamientos.",
    seoTitle: "Prótesis peneana en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Cirugía de prótesis peneana inflable y maleable en Temuco. Evaluación, técnica quirúrgica, beneficios y recuperación con un especialista en andrología.",
    keywords: ["prótesis peneana Temuco", "implante peneano Chile", "disfunción eréctil severa"],
    resumen:
      "La prótesis peneana es un dispositivo médico implantado quirúrgicamente que permite recuperar erecciones funcionales en hombres con disfunción eréctil severa que no responden a otros tratamientos. Existen modelos maleables e inflables, con altas tasas de satisfacción.",
    indicaciones: [
      "Disfunción eréctil severa refractaria a fármacos orales e inyecciones.",
      "Disfunción eréctil tras prostatectomía radical o lesión medular.",
      "Fibrosis cavernosa que impide otras formas de tratamiento.",
    ],
    sintomas: [
      "Ausencia completa de respuesta eréctil a tratamientos previos.",
      "Impacto significativo en la calidad de vida y la relación de pareja.",
    ],
    diagnostico: [
      "Evaluación integral de causas y tratamientos previos de disfunción eréctil.",
      "Estudio de imágenes para evaluar la anatomía de los cuerpos cavernosos.",
      "Consejería detallada sobre expectativas, tipos de prótesis y proceso quirúrgico.",
    ],
    tratamiento: [
      "Implante quirúrgico de prótesis inflable de tres componentes o maleable, según el caso.",
      "Cirugía realizada bajo anestesia general o raquídea, en pabellón.",
      "Activación y entrenamiento de uso de la prótesis en el postoperatorio.",
    ],
    beneficios: [
      "Recuperación de erecciones funcionales de forma predecible.",
      "Altas tasas de satisfacción del paciente y su pareja.",
      "Mecanismo discreto, no visible externamente en reposo.",
    ],
    riesgos: [
      "Infección del dispositivo, infrecuente pero relevante.",
      "Falla mecánica a largo plazo que puede requerir recambio.",
      "Erosión o malposición del dispositivo en casos excepcionales.",
    ],
    recuperacion:
      "El alta es habitualmente al día siguiente de la cirugía. Se recomienda reposo relativo por 2 semanas y abstinencia sexual de 4 a 6 semanas, tiempo en el cual se realiza la activación progresiva del dispositivo según indicación médica.",
    faqs: [
      {
        question: "¿Se nota la prótesis en reposo?",
        answer:
          "No. El diseño de las prótesis modernas permite un aspecto y tacto naturales en estado de flacidez, siendo prácticamente imperceptible para terceros.",
      },
      {
        question: "¿Cuánto dura una prótesis peneana?",
        answer:
          "La durabilidad promedio de los dispositivos actuales supera los 10 a 15 años, dependiendo del modelo y cuidados.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial técnica y no explícita mostrando el concepto de un dispositivo protésico cilíndrico en contexto anatómico esquemático, estilo institucional, paleta azul y blanco.",
  },
  {
    slug: "infertilidad-masculina",
    name: "Infertilidad masculina",
    category: "Infertilidad",
    shortDescription:
      "Evaluación y tratamiento de las causas masculinas de dificultad para concebir.",
    seoTitle: "Infertilidad masculina en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Diagnóstico y tratamiento de infertilidad masculina en Temuco: espermiograma, causas, varicocele y opciones de tratamiento para lograr el embarazo.",
    keywords: ["infertilidad masculina Temuco", "espermiograma Chile", "fertilidad hombre"],
    resumen:
      "La infertilidad masculina contribuye en aproximadamente la mitad de los casos de parejas que no logran concebir tras un año de búsqueda. Sus causas son variadas —hormonales, genéticas, anatómicas o por varicocele— y la mayoría son evaluables y tratables.",
    indicaciones: [
      "Pareja que no logra embarazo tras 12 meses de búsqueda activa (6 meses si la mujer es mayor de 35 años).",
      "Alteraciones conocidas en el espermiograma.",
      "Antecedente de criptorquidia, varicocele o cirugías genitales previas.",
    ],
    sintomas: [
      "En general no produce síntomas directos; se manifiesta como dificultad para concebir.",
      "Puede asociarse a disminución del volumen testicular o varicocele palpable.",
    ],
    diagnostico: [
      "Espermiograma con criterios de la OMS.",
      "Perfil hormonal (testosterona, FSH, LH, prolactina).",
      "Ecografía testicular y de vías seminales.",
      "Estudio genético en casos seleccionados de azoospermia severa.",
    ],
    tratamiento: [
      "Corrección quirúrgica de varicocele cuando está indicada.",
      "Tratamiento hormonal en alteraciones endocrinas específicas.",
      "Cambios de estilo de vida y suspensión de tóxicos gonadales.",
      "Técnicas de recuperación espermática para reproducción asistida en casos de azoospermia.",
    ],
    beneficios: [
      "Identificación de causas tratables que pueden mejorar la fertilidad espontánea.",
      "Mejora de los parámetros seminales tras tratamiento de varicocele en muchos pacientes.",
      "Apoyo coordinado con equipos de reproducción asistida cuando es necesario.",
    ],
    riesgos: [
      "Los riesgos dependen del tratamiento específico indicado (ver varicocele u otros procedimientos).",
    ],
    recuperacion:
      "Varía según el tratamiento. Los cambios en los parámetros seminales tras una intervención, como la corrección de varicocele, suelen evaluarse en controles de espermiograma a los 3 y 6 meses.",
    faqs: [
      {
        question: "¿La infertilidad siempre es por causa femenina?",
        answer:
          "No. El factor masculino está presente en alrededor del 50% de las parejas con dificultad para concebir, por lo que la evaluación del hombre es siempre recomendable.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial conceptual sobre fertilidad masculina y evaluación seminal, estilo institucional moderno, paleta azul y verde quirúrgico, no explícita.",
  },
  {
    slug: "varicocele",
    name: "Varicocele",
    category: "Andrología",
    shortDescription:
      "Dilatación anormal de las venas del cordón espermático, causa frecuente de infertilidad.",
    seoTitle: "Varicocele en Temuco | Diagnóstico y cirugía | Dr. Betancourt",
    seoDescription:
      "Tratamiento de varicocele en Temuco: diagnóstico clínico, ecográfico y microcirugía. Mejora la fertilidad y el dolor testicular asociado.",
    keywords: ["varicocele Temuco", "varicocelectomía Chile", "varicocele tratamiento"],
    resumen:
      "El varicocele es la dilatación anormal de las venas del plexo pampiniforme dentro del escroto, similar a varices, que puede asociarse a dolor testicular, atrofia testicular e infertilidad. Es una de las causas más frecuentes y tratables de infertilidad masculina.",
    indicaciones: [
      "Varicocele asociado a alteraciones del espermiograma e infertilidad.",
      "Dolor o pesadez testicular persistente.",
      "Asimetría o disminución del volumen testicular, especialmente en adolescentes.",
    ],
    sintomas: [
      "Sensación de pesadez o dolor sordo en el testículo, que aumenta al estar de pie o al final del día.",
      "Masa escrotal de aspecto varicoso, descrita como 'bolsa de gusanos'.",
      "Disminución del tamaño testicular en casos avanzados.",
    ],
    diagnostico: [
      "Examen físico en bipedestación y con maniobra de Valsalva.",
      "Ecografía doppler escrotal para confirmar y graduar el varicocele.",
      "Espermiograma en pacientes con deseo de fertilidad.",
    ],
    tratamiento: [
      "Observación en varicoceles asintomáticos sin alteración de fertilidad.",
      "Varicocelectomía microquirúrgica subinguinal, técnica de elección por su baja tasa de recurrencia.",
      "Embolización percutánea como alternativa en casos seleccionados.",
    ],
    beneficios: [
      "Mejora de los parámetros seminales en un porcentaje significativo de pacientes.",
      "Alivio del dolor testicular asociado.",
      "Técnica microquirúrgica con baja tasa de complicaciones e hidrocele postoperatorio.",
    ],
    riesgos: [
      "Hidrocele postoperatorio (poco frecuente con técnica microquirúrgica).",
      "Recurrencia del varicocele.",
      "Lesión arterial o linfática, infrecuente con magnificación microscópica.",
    ],
    recuperacion:
      "Cirugía ambulatoria con reposo relativo de 5 a 7 días y reinicio de actividad física intensa a las 3-4 semanas. La mejoría seminal se evalúa a los 3 y 6 meses postoperatorios.",
    faqs: [
      {
        question: "¿Todo varicocele debe operarse?",
        answer:
          "No. La indicación quirúrgica se reserva para varicoceles sintomáticos, asociados a infertilidad o con impacto en el desarrollo testicular en adolescentes.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial educativa del plexo venoso pampiniforme y su dilatación en el varicocele, estilo institucional limpio, tonos azules, sin contenido explícito.",
  },
  {
    slug: "dolor-testicular",
    name: "Dolor testicular",
    category: "Andrología",
    shortDescription:
      "Síntoma con múltiples causas, desde benignas hasta urgencias urológicas que requieren evaluación inmediata.",
    seoTitle: "Dolor testicular en Temuco | Evaluación urgente | Dr. Betancourt",
    seoDescription:
      "Evaluación de dolor testicular agudo y crónico en Temuco. Diagnóstico diferencial, urgencias urológicas y tratamiento especializado.",
    keywords: ["dolor testicular Temuco", "dolor testicular causas", "urgencia urológica Temuco"],
    resumen:
      "El dolor testicular puede ser agudo o crónico y reconoce múltiples causas, desde la torsión testicular —una urgencia quirúrgica— hasta epididimitis, varicocele o causas referidas. La evaluación oportuna es clave para descartar cuadros que requieren tratamiento inmediato.",
    indicaciones: [
      "Dolor testicular de inicio súbito e intenso: evaluación de urgencia inmediata.",
      "Dolor testicular crónico o intermitente de más de 3 meses de evolución.",
      "Dolor asociado a fiebre, aumento de volumen o enrojecimiento escrotal.",
    ],
    sintomas: [
      "Dolor agudo intenso de inicio brusco (sospecha de torsión testicular).",
      "Dolor progresivo asociado a fiebre y aumento de volumen (sugerente de epididimitis u orquitis).",
      "Dolor sordo, intermitente o relacionado con el esfuerzo (varicocele u otras causas crónicas).",
    ],
    diagnostico: [
      "Examen físico urgente, incluyendo reflejo cremasteriano y posición testicular.",
      "Ecografía doppler testicular para evaluar flujo sanguíneo y descartar torsión.",
      "Examen de orina y exámenes de laboratorio si se sospecha infección.",
    ],
    tratamiento: [
      "Cirugía de urgencia (destorsión y fijación testicular) si se confirma torsión testicular.",
      "Antibióticos y antiinflamatorios en epididimitis u orquitis.",
      "Tratamiento específico según causa en dolor crónico (varicocele, quiste de epidídimo, etc.).",
    ],
    beneficios: [
      "El diagnóstico oportuno de torsión testicular puede salvar el testículo si se trata dentro de las primeras 6 horas.",
      "Resolución efectiva del dolor una vez identificada y tratada la causa específica.",
    ],
    riesgos: [
      "Pérdida del testículo si la torsión no se trata oportunamente.",
      "Cronificación del dolor si no se identifica la causa de base.",
    ],
    recuperacion:
      "Depende completamente de la causa: la cirugía de torsión requiere reposo de 1-2 semanas, mientras que los cuadros infecciosos se resuelven en 1-2 semanas con tratamiento antibiótico adecuado.",
    faqs: [
      {
        question: "¿Cuándo el dolor testicular es una urgencia?",
        answer:
          "Todo dolor testicular de inicio súbito e intenso debe considerarse una urgencia y evaluarse de inmediato, ya que la torsión testicular requiere cirugía dentro de las primeras horas para salvar el testículo.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial esquemática de la anatomía escrotal y testicular para fines educativos, estilo institucional limpio, paleta azul, sin contenido explícito ni sangre.",
  },
  {
    slug: "hidrocele",
    name: "Hidrocele",
    category: "Cirugía genital",
    shortDescription:
      "Acumulación de líquido alrededor del testículo que provoca aumento de volumen escrotal indoloro.",
    seoTitle: "Hidrocele en Temuco | Diagnóstico y cirugía | Dr. Betancourt",
    seoDescription:
      "Tratamiento quirúrgico de hidrocele en Temuco: diagnóstico, indicaciones de cirugía y recuperación con un urólogo especialista.",
    keywords: ["hidrocele Temuco", "cirugía hidrocele Chile", "aumento de volumen escrotal"],
    resumen:
      "El hidrocele es la acumulación de líquido entre las capas de la túnica vaginal que rodea el testículo, generando un aumento de volumen escrotal habitualmente indoloro. Puede ser congénito o adquirido, y su tratamiento definitivo es quirúrgico cuando es sintomático o de gran tamaño.",
    indicaciones: [
      "Aumento de volumen escrotal progresivo o de gran tamaño.",
      "Molestia o pesadez asociada al hidrocele.",
      "Impacto estético o funcional para el paciente.",
    ],
    sintomas: [
      "Aumento de volumen escrotal indoloro, de consistencia quística.",
      "Sensación de peso, especialmente al final del día o tras actividad física.",
      "Translucidez a la transiluminación, característica del cuadro.",
    ],
    diagnostico: [
      "Examen físico y transiluminación escrotal.",
      "Ecografía testicular para confirmar el diagnóstico y descartar patología testicular asociada.",
    ],
    tratamiento: [
      "Observación en hidroceles pequeños y asintomáticos.",
      "Hidrocelectomía quirúrgica en casos sintomáticos o de gran volumen.",
      "Punción evacuadora reservada para casos muy seleccionados, con alta tasa de recidiva.",
    ],
    beneficios: [
      "Resolución definitiva del aumento de volumen con la cirugía.",
      "Procedimiento de baja complejidad y alta efectividad.",
      "Mejora estética y funcional inmediata.",
    ],
    riesgos: [
      "Hematoma escrotal postoperatorio.",
      "Infección de la herida operatoria.",
      "Recurrencia, infrecuente con técnica quirúrgica adecuada.",
    ],
    recuperacion:
      "Cirugía ambulatoria con reposo relativo de una semana, uso de suspensorio y frío local los primeros días, evitando esfuerzo físico intenso por 2 a 3 semanas.",
    faqs: [
      {
        question: "¿El hidrocele afecta la fertilidad?",
        answer:
          "Por sí solo, el hidrocele no suele afectar la fertilidad, salvo en casos muy grandes que pudieran alterar la termorregulación testicular, lo cual se evalúa caso a caso.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial transversal y esquemática del escroto mostrando la acumulación de líquido en hidrocele, estilo institucional limpio, paleta azul y gris, no explícita.",
  },
  {
    slug: "quiste-de-epididimo",
    name: "Quiste de epidídimo",
    category: "Cirugía genital",
    shortDescription:
      "Formación quística benigna en el epidídimo, generalmente asintomática y de manejo conservador.",
    seoTitle: "Quiste de epidídimo en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Diagnóstico y manejo del quiste de epidídimo (espermatocele) en Temuco. Evaluación ecográfica y criterios de tratamiento quirúrgico.",
    keywords: ["quiste de epidídimo Temuco", "espermatocele tratamiento", "nódulo testicular benigno"],
    resumen:
      "El quiste de epidídimo, también llamado espermatocele cuando contiene espermatozoides, es una formación benigna llena de líquido que se origina en el epidídimo. Es muy frecuente, generalmente asintomático, y rara vez requiere tratamiento quirúrgico.",
    indicaciones: [
      "Hallazgo de un nódulo escrotal en autoexamen o examen físico de rutina.",
      "Crecimiento progresivo o molestia local del quiste.",
      "Necesidad de diferenciarlo de otras masas escrotales.",
    ],
    sintomas: [
      "Nódulo pequeño, blando, ubicado por encima o detrás del testículo.",
      "Generalmente indoloro; en ocasiones genera sensación de peso si crece.",
    ],
    diagnostico: [
      "Examen físico escrotal.",
      "Ecografía testicular, examen clave para confirmar el origen extratesticular y el carácter benigno.",
    ],
    tratamiento: [
      "Observación en la mayoría de los casos, dado su carácter benigno.",
      "Cirugía (excéresis del quiste) solo si genera síntomas significativos o crece de forma importante.",
    ],
    beneficios: [
      "Tranquilidad diagnóstica al confirmar su naturaleza benigna mediante ecografía.",
      "Resolución definitiva en los casos puntuales que requieren cirugía.",
    ],
    riesgos: [
      "Riesgo de lesión del epidídimo o conductos seminales con la cirugía, lo que podría afectar la fertilidad, por lo que la indicación quirúrgica es selectiva.",
    ],
    recuperacion:
      "En los casos operados, la recuperación es similar a otras cirugías escrotales menores: una semana de reposo relativo.",
    faqs: [
      {
        question: "¿Un quiste de epidídimo puede ser cáncer?",
        answer:
          "No. Es una lesión benigna. La ecografía permite diferenciarlo claramente de masas testiculares sólidas, que sí requieren evaluación oncológica.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial educativa del epidídimo y un quiste asociado, estilo institucional limpio, tonos azules y blancos, sin contenido explícito.",
  },
  {
    slug: "estenosis-uretral",
    name: "Estenosis uretral",
    category: "Reconstrucción uretral",
    shortDescription:
      "Estrechamiento de la uretra que dificulta el paso de la orina, de causa congénita, traumática o inflamatoria.",
    seoTitle: "Estenosis uretral en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Diagnóstico y tratamiento de la estenosis uretral en Temuco: dilatación, uretrotomía y uretroplastía. Especialista en cirugía reconstructiva uretral.",
    keywords: ["estenosis uretral Temuco", "uretroplastía Chile", "estrechez uretral tratamiento"],
    resumen:
      "La estenosis uretral es el estrechamiento del calibre de la uretra que dificulta el flujo normal de orina, causado por inflamación, infecciones, trauma o procedimientos previos (sondas, cirugías). Su manejo definitivo de mayor éxito a largo plazo es la uretroplastía reconstructiva.",
    indicaciones: [
      "Chorro urinario débil o bifurcado de aparición progresiva.",
      "Infecciones urinarias recurrentes asociadas a vaciamiento incompleto.",
      "Retención urinaria o necesidad de pujo para orinar.",
      "Antecedente de sondaje prolongado, trauma pelviano o cirugía prostática previa.",
    ],
    sintomas: [
      "Disminución de la fuerza y calibre del chorro urinario.",
      "Sensación de vaciamiento incompleto de la vejiga.",
      "Infecciones urinarias a repetición.",
      "En casos avanzados, retención urinaria aguda.",
    ],
    diagnostico: [
      "Uroflujometría para cuantificar la obstrucción al flujo urinario.",
      "Uretrocistografía retrógrada y miccional para localizar y medir la estenosis.",
      "Uretroscopia para evaluación directa de la mucosa uretral.",
    ],
    tratamiento: [
      "Dilatación uretral o uretrotomía endoscópica en estenosis cortas y de bajo grado, con alta tasa de recurrencia a largo plazo.",
      "Uretroplastía reconstructiva (anastomótica o con injerto de mucosa oral) como tratamiento definitivo de mayor eficacia.",
      "Manejo escalonado según longitud, ubicación y causa de la estenosis.",
    ],
    beneficios: [
      "La uretroplastía ofrece tasas de éxito superiores al 85-90% a largo plazo.",
      "Resuelve de forma definitiva los síntomas obstructivos y reduce el riesgo de infecciones.",
      "Mejora significativa en la calidad de vida urinaria del paciente.",
    ],
    riesgos: [
      "Recurrencia de la estenosis, mayor con tratamientos endoscópicos que con la cirugía reconstructiva.",
      "Sangrado, infección o fístula urinaria postoperatoria (infrecuentes).",
      "Disfunción eréctil transitoria en estenosis de uretra posterior compleja.",
    ],
    recuperacion:
      "Tras la uretroplastía se mantiene una sonda vesical entre 2 y 3 semanas, con control mediante uretrocistografía antes de su retiro. La actividad física se reincorpora gradualmente en 4 a 6 semanas.",
    faqs: [
      {
        question: "¿La dilatación uretral es curativa?",
        answer:
          "En general no. La dilatación y la uretrotomía endoscópica tienen altas tasas de recurrencia a mediano plazo; la uretroplastía reconstructiva ofrece resultados más duraderos.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial técnica del trayecto uretral masculino mostrando una zona de estrechamiento, estilo institucional limpio, paleta azul, sin contenido explícito.",
  },
  {
    slug: "uretroplastia",
    name: "Uretroplastía",
    category: "Reconstrucción uretral",
    shortDescription:
      "Cirugía reconstructiva de referencia para el tratamiento definitivo de la estenosis uretral.",
    seoTitle: "Uretroplastía en Temuco y Chile | Dr. Cristóbal Betancourt",
    seoDescription:
      "Uretroplastía con injerto de mucosa oral o anastomótica en Temuco. Cirugía reconstructiva uretral de alta complejidad con resultados duraderos.",
    keywords: ["uretroplastía Temuco", "uretroplastía Chile", "cirugía reconstructiva uretral"],
    resumen:
      "La uretroplastía es la cirugía reconstructiva de elección para tratar de forma definitiva la estenosis uretral. Según la longitud y ubicación de la estenosis, puede realizarse mediante anastomosis directa o con injerto de mucosa oral, logrando las tasas de éxito más altas entre todas las alternativas terapéuticas.",
    indicaciones: [
      "Estenosis uretral recurrente tras dilatación o uretrotomía endoscópica.",
      "Estenosis largas (mayores a 2 cm) no candidatas a tratamiento endoscópico.",
      "Estenosis de uretra anterior o posterior de causa traumática, inflamatoria o iatrogénica.",
    ],
    sintomas: [
      "Síntomas obstructivos urinarios de larga data (ver estenosis uretral).",
      "Fracaso de tratamientos endoscópicos previos.",
    ],
    diagnostico: [
      "Uretrocistografía retrógrada y miccional para planificación quirúrgica precisa.",
      "Uretroscopia preoperatoria.",
      "Evaluación de la mucosa oral como potencial sitio donante de injerto.",
    ],
    tratamiento: [
      "Uretroplastía anastomótica término-terminal en estenosis cortas de uretra bulbar.",
      "Uretroplastía con injerto de mucosa oral (bucal) en estenosis largas.",
      "Técnicas combinadas o por etapas en estenosis complejas o de uretra posterior.",
    ],
    beneficios: [
      "Tasas de éxito a largo plazo entre 85% y 95% según técnica y caso.",
      "Solución definitiva, evitando dilataciones repetidas a lo largo de la vida.",
      "Mejora sostenida del flujo urinario y la calidad de vida.",
    ],
    riesgos: [
      "Sangrado, infección de la herida o fístula uretrocutánea (infrecuentes).",
      "Molestia o cambios menores en la sensibilidad del área donante de mucosa oral.",
      "Recurrencia de la estenosis en un porcentaje menor de casos.",
    ],
    recuperacion:
      "Hospitalización de 1 a 2 días, sonda vesical por 2 a 3 semanas con uretrocistografía de control previo al retiro, y reincorporación completa a actividades en 4 a 6 semanas.",
    faqs: [
      {
        question: "¿Qué es el injerto de mucosa oral?",
        answer:
          "Es un segmento de tejido tomado desde el interior de la mejilla, con excelentes propiedades de elasticidad y resistencia a infecciones, utilizado como material de reconstrucción uretral con resultados muy favorables.",
      },
      {
        question: "¿Es una cirugía de alta complejidad?",
        answer:
          "Sí, requiere entrenamiento especializado en cirugía reconstructiva uretral. El Dr. Betancourt cuenta con formación específica en esta área para ofrecer resultados óptimos.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial técnica del procedimiento de reconstrucción uretral con injerto, estilo institucional limpio, paleta azul oscuro y verde quirúrgico, sin contenido explícito ni sangre.",
  },
  {
    slug: "reconstruccion-uretral",
    name: "Reconstrucción uretral",
    category: "Reconstrucción uretral",
    shortDescription:
      "Abordaje integral de patologías complejas de la uretra mediante técnicas reconstructivas avanzadas.",
    seoTitle: "Reconstrucción uretral compleja en Temuco | Dr. Betancourt",
    seoDescription:
      "Cirugía reconstructiva uretral compleja en Temuco: estenosis recurrentes, trauma, hipospadias en adultos y fístulas. Atención de alta especialidad.",
    keywords: ["reconstrucción uretral Chile", "cirugía uretral compleja", "uretra Temuco"],
    resumen:
      "La reconstrucción uretral agrupa un conjunto de técnicas quirúrgicas de alta especialidad orientadas a restaurar la anatomía y función normal de la uretra en casos complejos: estenosis recurrentes, trauma, fístulas, secuelas de hipospadias o cirugías previas fallidas.",
    indicaciones: [
      "Fracaso de uretroplastías previas.",
      "Fístulas uretrocutáneas.",
      "Secuelas de hipospadias no corregidas adecuadamente en la infancia.",
      "Estenosis uretrales complejas o de gran extensión.",
    ],
    sintomas: [
      "Síntomas obstructivos urinarios persistentes o recurrentes.",
      "Salida de orina por trayectos anómalos (fístulas).",
      "Deformidad o secuelas anatómicas visibles.",
    ],
    diagnostico: [
      "Estudio imagenológico completo: uretrocistografía, resonancia en casos seleccionados.",
      "Uretroscopia y evaluación de tejidos disponibles para reconstrucción.",
      "Planificación quirúrgica individualizada, en ocasiones en más de una etapa.",
    ],
    tratamiento: [
      "Cirugía reconstructiva en una o múltiples etapas según complejidad.",
      "Uso de injertos de mucosa oral, colgajos cutáneos u otras técnicas según el caso.",
      "Manejo multidisciplinario en casos de secuelas complejas.",
    ],
    beneficios: [
      "Posibilidad de resolución incluso en casos considerados complejos o de múltiples cirugías previas fallidas.",
      "Mejora sustancial de la función urinaria y la calidad de vida.",
    ],
    riesgos: [
      "Mayor tasa de complicaciones que la cirugía uretral estándar, dada la complejidad del tejido.",
      "Posible necesidad de cirugías estagiadas (en más de un tiempo quirúrgico).",
    ],
    recuperacion:
      "Variable según la técnica y número de etapas, con seguimiento estrecho y estudios de control entre cada fase del tratamiento.",
    faqs: [
      {
        question: "¿Qué hacer si una cirugía uretral previa no funcionó?",
        answer:
          "Es fundamental una evaluación especializada en cirugía reconstructiva uretral para definir la causa del fracaso y planificar un nuevo abordaje, que muchas veces logra resultados exitosos.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial técnica sobre reconstrucción anatómica compleja del tracto urinario inferior, estilo institucional, paleta azul oscuro, sin contenido explícito.",
  },
  {
    slug: "trauma-uretral",
    name: "Trauma uretral",
    category: "Reconstrucción uretral",
    shortDescription:
      "Lesiones traumáticas de la uretra, frecuentemente asociadas a fracturas de pelvis, que requieren manejo especializado.",
    seoTitle: "Trauma uretral en Temuco | Dr. Cristóbal Betancourt",
    seoDescription:
      "Manejo de trauma uretral agudo y sus secuelas en Temuco: diagnóstico, manejo inicial y reconstrucción diferida con un especialista en cirugía uretral.",
    keywords: ["trauma uretral Temuco", "lesión uretral fractura de pelvis", "cirugía uretral trauma"],
    resumen:
      "El trauma uretral ocurre habitualmente en el contexto de accidentes de alta energía, como fracturas de pelvis o caídas a horcajadas, y requiere un manejo inicial cuidadoso seguido, en muchos casos, de una reconstrucción uretral diferida para tratar la estenosis cicatricial resultante.",
    indicaciones: [
      "Imposibilidad de orinar tras un trauma pelviano o perineal.",
      "Sangre en el meato uretral tras un accidente.",
      "Secuela de estenosis tras un trauma uretral previo.",
    ],
    sintomas: [
      "Sangrado por el meato uretral tras el trauma.",
      "Retención urinaria aguda.",
      "Hematoma perineal o escrotal extenso.",
      "Posteriormente, síntomas de estenosis uretral si no se trata adecuadamente.",
    ],
    diagnostico: [
      "Uretrocistografía retrógrada en la fase aguda, antes de intentar el sondaje vesical.",
      "Evaluación multidisciplinaria en el contexto de politraumatismo.",
      "Estudio diferido de la vía urinaria una vez estabilizado el paciente.",
    ],
    tratamiento: [
      "Manejo inicial con cistostomía suprapúbica en lesiones completas de uretra posterior.",
      "Reconstrucción uretral diferida (uretroplastía) una vez resuelto el contexto traumático agudo, habitualmente a los 3 meses.",
      "Manejo conservador en lesiones parciales seleccionadas.",
    ],
    beneficios: [
      "Estrategia diferida que reduce las complicaciones comparado con la reparación de urgencia en lesiones complejas.",
      "Altas tasas de éxito de la uretroplastía reconstructiva diferida.",
    ],
    riesgos: [
      "Desarrollo de estenosis uretral y disfunción eréctil asociada al trauma pelviano original.",
      "Complejidad técnica mayor por la fibrosis postraumática.",
    ],
    recuperacion:
      "El proceso es escalonado: manejo agudo, estabilización, y reconstrucción diferida con recuperación funcional progresiva en los meses siguientes a la cirugía definitiva.",
    faqs: [
      {
        question: "¿Por qué no se repara la uretra inmediatamente tras el trauma?",
        answer:
          "En lesiones completas de uretra posterior, el manejo diferido tras dejar una cistostomía suprapúbica reduce significativamente las complicaciones, permitiendo una reconstrucción más precisa una vez resuelto el cuadro agudo.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial esquemática sobre el trayecto uretral y la pelvis ósea en contexto de trauma, estilo institucional clínico, paleta azul, sin sangre ni contenido explícito.",
  },
];

export function getSpecialtyBySlug(slug: string) {
  return specialties.find((s) => s.slug === slug);
}
