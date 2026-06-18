export type Specialty = {
  slug: string;
  name: string;
  category:
    | "Cirugía genital"
    | "Andrología"
    | "Reconstrucción uretral"
    | "Infertilidad"
    | "Urología general";
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
    seoTitle: "Vasectomía en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Circuncisión en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Tratamiento de Fimosis en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Frenillo corto: tratamiento en Temuco | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Corrección quirúrgica de frenillo corto (frenuloplastía) en Temuco. Evaluación y tratamiento personalizado con el Dr. Cristóbal Bettancourt.",
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
    seoTitle: "Disfunción eréctil en Temuco | Tratamiento Dr. Bettancourt",
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
    seoTitle: "Curvatura peneana en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Enfermedad de Peyronie en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Prótesis peneana en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Infertilidad masculina en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Varicocele en Temuco | Diagnóstico y cirugía | Dr. Bettancourt",
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
    seoTitle: "Dolor testicular en Temuco | Evaluación urgente | Dr. Bettancourt",
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
    seoTitle: "Hidrocele en Temuco | Diagnóstico y cirugía | Dr. Bettancourt",
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
    seoTitle: "Quiste de epidídimo en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Estenosis uretral en Temuco | Dr. Cristóbal Bettancourt",
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
    seoTitle: "Uretroplastía en Temuco y Chile | Dr. Cristóbal Bettancourt",
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
          "Sí, requiere entrenamiento especializado en cirugía reconstructiva uretral. El Dr. Bettancourt cuenta con formación específica en esta área para ofrecer resultados óptimos.",
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
    seoTitle: "Reconstrucción uretral compleja en Temuco | Dr. Bettancourt",
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
    seoTitle: "Trauma uretral en Temuco | Dr. Cristóbal Bettancourt",
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
  {
    slug: "cancer-de-prostata",
    name: "Cáncer de próstata",
    category: "Urología general",
    shortDescription:
      "Detección precoz, diagnóstico y tratamiento del cáncer de próstata, el tumor urológico más frecuente en el hombre.",
    seoTitle: "Cáncer de próstata en Temuco | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Detección precoz y tratamiento del cáncer de próstata en Temuco: PSA, biopsia, opciones terapéuticas y seguimiento con un urólogo especialista.",
    keywords: [
      "cáncer de próstata Temuco",
      "PSA examen Temuco",
      "urólogo próstata Chile",
      "biopsia de próstata",
    ],
    resumen:
      "El cáncer de próstata es el tumor urológico más frecuente en hombres mayores de 50 años. Detectado a tiempo mediante el examen de PSA y el tacto rectal, tiene altas probabilidades de curación. El manejo va desde la vigilancia activa en tumores de bajo riesgo hasta la cirugía o radioterapia en casos que requieren tratamiento.",
    indicaciones: [
      "Hombres mayores de 50 años como parte del control urológico preventivo.",
      "Hombres mayores de 45 años con antecedentes familiares de cáncer de próstata.",
      "Pacientes con elevación del antígeno prostático específico (PSA) o alteración al tacto rectal.",
    ],
    sintomas: [
      "En etapas iniciales habitualmente no produce síntomas, por lo que el cribado es clave.",
      "Síntomas urinarios obstructivos en etapas más avanzadas (chorro débil, dificultad para orinar).",
      "Sangre en la orina o el semen en casos avanzados.",
      "Dolor óseo en enfermedad metastásica (poco frecuente al diagnóstico).",
    ],
    diagnostico: [
      "Antígeno prostático específico (PSA) en sangre.",
      "Tacto rectal para evaluar consistencia y nódulos prostáticos.",
      "Resonancia magnética multiparamétrica de próstata.",
      "Biopsia prostática dirigida ante hallazgos sospechosos.",
    ],
    tratamiento: [
      "Vigilancia activa en tumores de bajo riesgo, con controles periódicos.",
      "Prostatectomía radical en casos seleccionados de riesgo intermedio o alto.",
      "Radioterapia como alternativa curativa en pacientes seleccionados.",
      "Terapia hormonal y tratamientos sistémicos en enfermedad avanzada, en conjunto con oncología.",
    ],
    beneficios: [
      "Altas tasas de curación cuando se detecta en etapas iniciales.",
      "Opciones terapéuticas adaptadas al riesgo individual y a la calidad de vida del paciente.",
      "Seguimiento estructurado que permite decisiones informadas en cada etapa.",
    ],
    riesgos: [
      "Disfunción eréctil e incontinencia urinaria como posibles efectos del tratamiento quirúrgico o radioterapia.",
      "Sobretratamiento de tumores de muy bajo riesgo si no se opta por vigilancia activa cuando corresponde.",
      "Efectos secundarios de la terapia hormonal en tratamientos prolongados.",
    ],
    recuperacion:
      "Depende del tratamiento elegido. Tras una prostatectomía radical, la hospitalización es de uno a dos días y la recuperación funcional completa (continencia y función eréctil) puede tomar varios meses, con apoyo de rehabilitación de piso pélvico cuando se requiere.",
    faqs: [
      {
        question: "¿A qué edad debo hacerme el primer examen de PSA?",
        answer:
          "En general se recomienda desde los 50 años, o desde los 45 años si existen antecedentes familiares directos de cáncer de próstata.",
      },
      {
        question: "¿Un PSA elevado significa que tengo cáncer?",
        answer:
          "No necesariamente. El PSA puede elevarse por otras causas benignas como la hiperplasia prostática o infecciones. Un valor alterado requiere evaluación urológica para determinar la causa.",
      },
      {
        question: "¿Todo cáncer de próstata necesita cirugía?",
        answer:
          "No. Muchos tumores de bajo riesgo se manejan con vigilancia activa, evitando tratamientos invasivos innecesarios mientras se realiza seguimiento estrecho.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial minimalista de la anatomía pélvica masculina mostrando la próstata, estilo institucional limpio, paleta azul y blanco, sin contenido explícito, fondo blanco.",
  },
  {
    slug: "hiperplasia-prostatica-benigna",
    name: "Hiperplasia prostática benigna (próstata aumentada)",
    category: "Urología general",
    shortDescription:
      "Tratamiento del crecimiento benigno de la próstata y los síntomas urinarios asociados en hombres mayores.",
    seoTitle: "Próstata aumentada (HPB) en Temuco | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Tratamiento de la hiperplasia prostática benigna en Temuco: síntomas urinarios, diagnóstico y opciones terapéuticas médicas y quirúrgicas.",
    keywords: [
      "próstata aumentada Temuco",
      "hiperplasia prostática benigna",
      "HPB tratamiento Chile",
      "dificultad para orinar hombres",
    ],
    resumen:
      "La hiperplasia prostática benigna (HPB) es el crecimiento no canceroso de la próstata, muy frecuente desde los 50 años, que puede comprimir la uretra y generar síntomas urinarios obstructivos. Existen tratamientos médicos y quirúrgicos efectivos según la severidad de los síntomas.",
    indicaciones: [
      "Hombres con síntomas urinarios obstructivos progresivos.",
      "Pacientes con próstata aumentada confirmada por examen físico o ecografía.",
      "Casos con retención urinaria o infecciones urinarias recurrentes secundarias a la obstrucción.",
    ],
    sintomas: [
      "Chorro urinario débil o intermitente.",
      "Necesidad de orinar frecuentemente, incluyendo de noche (nicturia).",
      "Sensación de vaciamiento incompleto de la vejiga.",
      "Urgencia para orinar y, en casos avanzados, retención urinaria aguda.",
    ],
    diagnostico: [
      "Evaluación de síntomas mediante cuestionarios validados (IPSS).",
      "Tacto rectal y ecografía prostática y renal.",
      "Antígeno prostático específico (PSA) para descartar otras causas.",
      "Flujometría urinaria y medición de residuo posmiccional cuando se requiere.",
    ],
    tratamiento: [
      "Tratamiento médico con alfabloqueadores y/o inhibidores de la 5-alfa reductasa.",
      "Procedimientos mínimamente invasivos (láser, resección endoscópica) en casos refractarios al tratamiento médico.",
      "Cirugía endoscópica de próstata en próstatas de mayor volumen o síntomas severos.",
    ],
    beneficios: [
      "Mejoría significativa de la calidad de vida y del patrón urinario.",
      "Múltiples alternativas terapéuticas escalonadas según severidad.",
      "Reducción del riesgo de complicaciones como retención urinaria o daño renal en casos avanzados.",
    ],
    riesgos: [
      "Eyaculación retrógrada con algunos tratamientos médicos y quirúrgicos.",
      "Sangrado o infección urinaria postoperatoria en procedimientos quirúrgicos.",
      "Necesidad de reintervención en un porcentaje menor de casos a largo plazo.",
    ],
    recuperacion:
      "El tratamiento médico no requiere recuperación específica. Tras procedimientos quirúrgicos endoscópicos, la hospitalización suele ser de uno a dos días, con sonda urinaria transitoria y recuperación funcional completa en pocas semanas.",
    faqs: [
      {
        question: "¿La próstata aumentada es lo mismo que cáncer de próstata?",
        answer:
          "No. La hiperplasia prostática benigna es un crecimiento no canceroso, aunque ambas condiciones pueden coexistir y por eso siempre se descarta cáncer al evaluar síntomas urinarios.",
      },
      {
        question: "¿Siempre hay que operar la próstata aumentada?",
        answer:
          "No. Muchos pacientes mejoran con tratamiento médico. La cirugía se reserva para síntomas severos, falla del tratamiento médico o complicaciones como retención urinaria.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial de la anatomía de la vejiga, próstata y uretra masculina mostrando obstrucción urinaria, estilo institucional limpio, paleta azul y blanco, sin contenido explícito.",
  },
  {
    slug: "incontinencia-urinaria",
    name: "Incontinencia urinaria masculina",
    category: "Urología general",
    shortDescription:
      "Evaluación y tratamiento de la pérdida involuntaria de orina en hombres.",
    seoTitle: "Incontinencia urinaria en hombres | Dr. Cristóbal Bettancourt, Temuco",
    seoDescription:
      "Tratamiento de la incontinencia urinaria masculina en Temuco: causas, diagnóstico y opciones terapéuticas, incluida la incontinencia post cirugía prostática.",
    keywords: [
      "incontinencia urinaria hombres Temuco",
      "incontinencia post prostatectomía",
      "urólogo incontinencia Chile",
    ],
    resumen:
      "La incontinencia urinaria masculina es la pérdida involuntaria de orina, frecuentemente asociada a cirugía prostática previa, envejecimiento del piso pélvico o problemas neurológicos. Existe un amplio rango de tratamientos, desde rehabilitación de piso pélvico hasta cirugía correctiva.",
    indicaciones: [
      "Pacientes con pérdida de orina tras prostatectomía radical u otra cirugía pélvica.",
      "Hombres con urgencia urinaria asociada a pérdida involuntaria.",
      "Pacientes con incontinencia de esfuerzo al toser, reír o hacer ejercicio.",
    ],
    sintomas: [
      "Escape involuntario de orina al esfuerzo, toser o estornudar.",
      "Urgencia repentina para orinar con escape antes de llegar al baño.",
      "Uso constante de protectores o pañales por pérdida de orina.",
    ],
    diagnostico: [
      "Historia clínica detallada y cuestionarios de severidad.",
      "Estudio urodinámico para caracterizar el tipo de incontinencia.",
      "Evaluación endoscópica (uretrocistoscopia) cuando se requiere.",
    ],
    tratamiento: [
      "Rehabilitación de piso pélvico y ejercicios de Kegel dirigidos.",
      "Tratamiento farmacológico en incontinencia de urgencia.",
      "Cabestrillo uretral masculino en incontinencia leve a moderada.",
      "Esfínter urinario artificial en casos moderados a severos, especialmente post prostatectomía.",
    ],
    beneficios: [
      "Mejoría sustancial en la calidad de vida y autonomía del paciente.",
      "Opciones terapéuticas escalonadas, desde conservadoras hasta quirúrgicas definitivas.",
      "Abordaje individualizado según el tipo y severidad de la incontinencia.",
    ],
    riesgos: [
      "Resultados variables con el tratamiento conservador, requiriendo constancia.",
      "Riesgo de infección o erosión en dispositivos implantables, aunque es poco frecuente.",
      "Posible necesidad de ajuste o recambio de dispositivos a largo plazo.",
    ],
    recuperacion:
      "La rehabilitación de piso pélvico requiere varias semanas de práctica constante para notar mejoría. En procedimientos quirúrgicos como el cabestrillo o el esfínter artificial, la recuperación funcional completa toma entre 4 y 6 semanas.",
    faqs: [
      {
        question: "¿La incontinencia tras una cirugía de próstata es permanente?",
        answer:
          "En la mayoría de los casos mejora progresivamente durante el primer año con rehabilitación de piso pélvico. Si persiste, existen tratamientos quirúrgicos efectivos como el cabestrillo uretral o el esfínter urinario artificial.",
      },
      {
        question: "¿Los ejercicios de Kegel realmente funcionan en hombres?",
        answer:
          "Sí, especialmente cuando se realizan de forma dirigida y constante tras cirugía pélvica, siendo la primera línea de tratamiento antes de considerar opciones quirúrgicas.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial del piso pélvico y vejiga masculina, estilo institucional limpio, paleta azul y blanco, sin contenido explícito.",
  },
  {
    slug: "litiasis-renal",
    name: "Litiasis renal (cálculos renales)",
    category: "Urología general",
    shortDescription:
      "Diagnóstico y tratamiento de los cálculos renales y ureterales, desde el manejo del dolor agudo hasta la cirugía.",
    seoTitle: "Cálculos renales en Temuco | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Tratamiento de cálculos renales y ureterales en Temuco: manejo del cólico renal, litotricia, cirugía endoscópica y prevención de recurrencia.",
    keywords: [
      "cálculos renales Temuco",
      "cólico renal tratamiento",
      "litotricia Chile",
      "piedras en el riñón",
    ],
    resumen:
      "La litiasis renal corresponde a la formación de cálculos en el riñón o el uréter, causa frecuente de dolor agudo intenso (cólico renal). El tratamiento varía desde el manejo expectante y analgesia hasta procedimientos como la litotricia extracorpórea o la cirugía endoscópica, según el tamaño y la ubicación del cálculo.",
    indicaciones: [
      "Pacientes con cólico renal agudo confirmado por imágenes.",
      "Cálculos renales de gran tamaño o que no progresan espontáneamente.",
      "Pacientes con litiasis recurrente que requieren estudio metabólico.",
    ],
    sintomas: [
      "Dolor lumbar intenso de tipo cólico, irradiado a la zona genital.",
      "Sangre en la orina (hematuria).",
      "Náuseas y vómitos asociados al dolor agudo.",
      "Infección urinaria asociada en algunos casos.",
    ],
    diagnostico: [
      "Tomografía computada de abdomen y pelvis sin contraste (estándar de referencia).",
      "Ecografía renal y vesical como estudio inicial o de seguimiento.",
      "Análisis de orina y eventual estudio metabólico en litiasis recurrente.",
    ],
    tratamiento: [
      "Manejo médico expectante con analgesia y facilitadores de expulsión en cálculos pequeños.",
      "Litotricia extracorpórea por ondas de choque (LEOC) para cálculos seleccionados.",
      "Ureteroscopia con láser para cálculos ureterales.",
      "Nefrolitotomía percutánea en cálculos renales de gran volumen.",
    ],
    beneficios: [
      "Resolución efectiva del dolor agudo y del cálculo causante.",
      "Técnicas mínimamente invasivas con baja tasa de complicaciones.",
      "Estudio metabólico que permite prevenir nuevos episodios.",
    ],
    riesgos: [
      "Sangrado o infección urinaria postoperatoria, generalmente manejables.",
      "Necesidad de procedimientos adicionales si el cálculo no se elimina por completo.",
      "Recurrencia de litiasis si no se realizan medidas preventivas.",
    ],
    recuperacion:
      "El cólico renal agudo suele resolverse en días con manejo médico. Tras procedimientos endoscópicos, la recuperación habitual es de pocos días, pudiendo requerir un catéter ureteral temporal según el caso.",
    faqs: [
      {
        question: "¿Todos los cálculos renales requieren cirugía?",
        answer:
          "No. Los cálculos pequeños frecuentemente se expulsan de forma espontánea con manejo médico. La cirugía se reserva para cálculos grandes, sintomáticos persistentes o que no progresan.",
      },
      {
        question: "¿Cómo puedo prevenir que me vuelvan a aparecer cálculos?",
        answer:
          "Aumentando la ingesta de agua, ajustando la dieta según el tipo de cálculo y, en casos recurrentes, realizando un estudio metabólico para identificar y corregir la causa específica.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial del sistema urinario (riñones, uréteres, vejiga) mostrando un cálculo renal, estilo institucional limpio, paleta azul y blanco, sin contenido explícito.",
  },
  {
    slug: "infecciones-urinarias-recurrentes",
    name: "Infecciones urinarias recurrentes",
    category: "Urología general",
    shortDescription:
      "Estudio y manejo de las infecciones urinarias a repetición en hombres.",
    seoTitle: "Infecciones urinarias recurrentes en hombres | Dr. Cristóbal Bettancourt, Temuco",
    seoDescription:
      "Estudio y tratamiento de infecciones urinarias recurrentes en hombres en Temuco: causas, exámenes y prevención con un urólogo especialista.",
    keywords: [
      "infección urinaria hombres Temuco",
      "infecciones urinarias recurrentes",
      "urólogo infección urinaria Chile",
    ],
    resumen:
      "Aunque menos frecuentes que en mujeres, las infecciones urinarias en hombres suelen indicar una causa subyacente que debe estudiarse, como obstrucción prostática, cálculos o anomalías anatómicas. El abordaje busca tratar la infección activa e identificar y corregir la causa de la recurrencia.",
    indicaciones: [
      "Hombres con dos o más infecciones urinarias confirmadas en seis meses.",
      "Pacientes con infección urinaria asociada a fiebre, dolor lumbar o síntomas obstructivos.",
      "Pacientes con sospecha de prostatitis crónica.",
    ],
    sintomas: [
      "Ardor o dolor al orinar (disuria).",
      "Aumento de la frecuencia urinaria y urgencia.",
      "Dolor pélvico o perineal, especialmente en prostatitis.",
      "Fiebre en casos de infección urinaria complicada.",
    ],
    diagnostico: [
      "Urocultivo con antibiograma para confirmar el germen y la sensibilidad antibiótica.",
      "Ecografía renal y vesical, y evaluación prostática.",
      "Estudio endoscópico (uretrocistoscopia) en casos seleccionados para descartar causas anatómicas.",
    ],
    tratamiento: [
      "Tratamiento antibiótico dirigido según urocultivo.",
      "Corrección de la causa subyacente (obstrucción prostática, cálculos, estenosis).",
      "Manejo específico de la prostatitis crónica cuando corresponde.",
      "Medidas preventivas personalizadas en casos recurrentes sin causa anatómica corregible.",
    ],
    beneficios: [
      "Resolución de la infección activa y reducción de episodios futuros.",
      "Identificación de causas tratables que evitan la recurrencia.",
      "Enfoque dirigido que evita el uso innecesario y prolongado de antibióticos.",
    ],
    riesgos: [
      "Progresión a infección urinaria complicada o prostatitis aguda si no se trata oportunamente.",
      "Resistencia antibiótica en casos de tratamientos repetidos sin estudio adecuado.",
    ],
    recuperacion:
      "La infección aguda suele resolverse en 7 a 14 días de tratamiento antibiótico dirigido. El abordaje de la causa subyacente puede requerir un seguimiento de varias semanas a meses según el hallazgo.",
    faqs: [
      {
        question: "¿Es normal que un hombre tenga infecciones urinarias a repetición?",
        answer:
          "No es lo habitual. A diferencia de las mujeres, en los hombres las infecciones urinarias recurrentes generalmente indican una causa subyacente que debe estudiarse y corregirse.",
      },
      {
        question: "¿La prostatitis crónica es lo mismo que una infección urinaria?",
        answer:
          "Pueden relacionarse, pero no son lo mismo. La prostatitis crónica puede cursar con o sin infección demostrable y requiere un enfoque diagnóstico y terapéutico específico.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial del tracto urinario masculino (riñones, vejiga, próstata, uretra), estilo institucional limpio, paleta azul y blanco, sin contenido explícito.",
  },
  {
    slug: "rezum",
    name: "Rezum: terapia con vapor de agua para la próstata",
    category: "Urología general",
    shortDescription:
      "Tratamiento mínimamente invasivo de la próstata aumentada mediante vapor de agua, ambulatorio y con alta preservación de la eyaculación.",
    seoTitle: "Rezum en Temuco | Tratamiento de próstata aumentada | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Rezum en Temuco: terapia con vapor de agua para la hiperplasia prostática benigna. Cómo funciona, manejo postoperatorio y respuestas a las dudas más frecuentes.",
    keywords: [
      "Rezum Temuco",
      "Rezum Chile",
      "vapor de agua próstata",
      "tratamiento próstata aumentada sin cirugía mayor",
    ],
    resumen:
      "Rezum es un tratamiento mínimamente invasivo para la hiperplasia prostática benigna (próstata aumentada) que utiliza vapor de agua estéril para reducir selectivamente el tejido prostático obstructivo. Se indica cuando el tratamiento médico no es suficiente, y es especialmente atractivo para hombres que buscan preservar la función eyaculatoria.",
    indicaciones: [
      "Síntomas urinarios obstructivos moderados a severos que no responden al tratamiento médico.",
      "Pacientes que buscan evitar o reducir el uso prolongado de medicamentos para la próstata.",
      "Próstatas de tamaño moderado, donde Rezum ofrece muy buenos resultados.",
      "Pacientes para quienes preservar la eyaculación es una prioridad clínica.",
    ],
    sintomas: [
      "Chorro urinario débil o intermitente.",
      "Necesidad frecuente de orinar, incluyendo de noche.",
      "Sensación de vaciamiento incompleto de la vejiga.",
      "Episodios de retención urinaria en casos más avanzados.",
    ],
    diagnostico: [
      "Cuestionario de síntomas validado (IPSS) y examen físico con tacto rectal.",
      "Ecografía prostática para medir el volumen y confirmar que Rezum es la técnica adecuada.",
      "PSA en sangre y flujometría urinaria.",
      "Cistoscopia en casos seleccionados antes de definir el procedimiento.",
    ],
    tratamiento: [
      "Aplicación de vapor de agua estéril directamente en el tejido prostático obstructivo mediante un dispositivo endoscópico.",
      "Procedimiento ambulatorio, realizado con anestesia local o sedación leve, sin cortes ni incisiones.",
      "El tejido tratado es reabsorbido progresivamente por el cuerpo en las semanas siguientes al procedimiento.",
    ],
    beneficios: [
      "Mejoría significativa y duradera del flujo urinario y los síntomas obstructivos.",
      "Procedimiento ambulatorio, breve, con recuperación rápida.",
      "Alta preservación de la función eyaculatoria, atractivo para hombres jóvenes o sexualmente activos.",
      "Reducción o eliminación de la necesidad de medicamentos para la próstata.",
    ],
    riesgos: [
      "Molestias urinarias transitorias (ardor, urgencia) en las primeras semanas, mientras el tejido tratado se reabsorbe.",
      "Sangrado o infección urinaria postoperatoria, generalmente manejables.",
      "Necesidad de sonda urinaria temporal en algunos pacientes tras el procedimiento.",
      "Posibilidad de requerir un nuevo tratamiento en el futuro si la próstata vuelve a crecer significativamente.",
    ],
    recuperacion:
      "El efecto completo sobre los síntomas se aprecia progresivamente durante 4 a 6 semanas, mientras el tejido tratado se reabsorbe. El paciente suele volver a sus actividades habituales en pocos días, y a la actividad sexual generalmente entre 2 y 4 semanas, según la evolución individual.",
    faqs: [
      {
        question: "¿Rezum o HoLEP, cuál es mejor para mí?",
        answer:
          "Depende principalmente del tamaño de la próstata y de tus prioridades: Rezum es ambulatorio y preserva mejor la eyaculación, mientras que HoLEP es más efectivo en próstatas grandes con resultados muy duraderos. La elección se decide en conjunto durante la evaluación urológica.",
      },
      {
        question: "¿Voy a sentir dolor durante o después del procedimiento?",
        answer:
          "Rezum se realiza con anestesia local o sedación leve, y el dolor postoperatorio es generalmente leve y bien controlado con analgesia habitual.",
      },
      {
        question: "¿Cuánto tiempo debo usar sonda urinaria después del procedimiento?",
        answer:
          "En muchos casos no se requiere sonda o se usa solo por pocos días, a diferencia de procedimientos quirúrgicos mayores.",
      },
      {
        question: "¿Cuándo puedo volver a tener actividad sexual después del procedimiento?",
        answer:
          "En general se recomienda esperar entre 2 y 4 semanas, lo cual se confirma en los controles postoperatorios.",
      },
      {
        question: "¿Rezum elimina el riesgo de cáncer de próstata?",
        answer:
          "No. Rezum trata la hiperplasia benigna, no el cáncer. El control con PSA y tacto rectal debe continuarse según indicación médica independientemente del tratamiento recibido.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial de un procedimiento endoscópico de próstata mostrando vapor de agua de forma esquemática y no explícita, estilo institucional limpio, paleta azul y blanco.",
  },
  {
    slug: "holep",
    name: "HoLEP: enucleación con láser de holmio",
    category: "Urología general",
    shortDescription:
      "Cirugía endoscópica con láser de holmio para tratar la próstata aumentada, altamente efectiva incluso en próstatas muy grandes.",
    seoTitle: "HoLEP en Temuco | Cirugía láser de próstata | Dr. Cristóbal Bettancourt",
    seoDescription:
      "HoLEP en Temuco: enucleación con láser de holmio para la hiperplasia prostática benigna. En qué consiste, manejo postoperatorio y respuestas a las dudas más frecuentes.",
    keywords: [
      "HoLEP Temuco",
      "HoLEP Chile",
      "cirugía de próstata láser",
      "tratamiento próstata grande Temuco",
    ],
    resumen:
      "HoLEP es una técnica endoscópica que utiliza un láser de holmio para separar (enuclear) el tejido prostático obstructivo de la cápsula prostática, de forma similar a remover la pulpa de una mandarina dejando la cáscara intacta. Es especialmente efectiva en próstatas de gran tamaño, donde otras técnicas tienen limitaciones, con resultados muy duraderos.",
    indicaciones: [
      "Síntomas urinarios obstructivos moderados a severos que no responden al tratamiento médico.",
      "Próstatas de gran volumen, donde HoLEP tiene ventaja clara sobre otras técnicas.",
      "Pacientes con anticoagulación crónica, que se benefician del buen control del sangrado intraoperatorio de HoLEP.",
      "Pacientes que buscan un resultado muy duradero, con baja necesidad de retratamiento.",
    ],
    sintomas: [
      "Chorro urinario débil o intermitente.",
      "Necesidad frecuente de orinar, incluyendo de noche.",
      "Sensación de vaciamiento incompleto de la vejiga.",
      "Episodios de retención urinaria en casos más avanzados.",
    ],
    diagnostico: [
      "Cuestionario de síntomas validado (IPSS) y examen físico con tacto rectal.",
      "Ecografía prostática para medir el volumen y confirmar que HoLEP es la técnica adecuada.",
      "PSA en sangre y flujometría urinaria.",
      "Cistoscopia en casos seleccionados antes de definir el procedimiento.",
    ],
    tratamiento: [
      "Enucleación endoscópica del tejido prostático obstructivo mediante láser de holmio.",
      "Extracción del tejido enucleado, que se envía a estudio histológico.",
      "Hospitalización breve, generalmente de 1 a 2 días.",
    ],
    beneficios: [
      "Extremadamente efectivo incluso en próstatas muy grandes.",
      "Resultados muy duraderos, con baja tasa de necesidad de reintervención a largo plazo.",
      "Buen control del sangrado intraoperatorio, favorable en pacientes anticoagulados.",
      "Mejoría inmediata y significativa del flujo urinario tras la cirugía.",
    ],
    riesgos: [
      "Sangrado o infección urinaria postoperatoria, generalmente manejables.",
      "Eyaculación retrógrada, relativamente frecuente tras este procedimiento.",
      "Necesidad de sonda urinaria temporal tras la cirugía.",
      "Molestias urinarias transitorias (ardor, urgencia) en las primeras semanas.",
    ],
    recuperacion:
      "La hospitalización es de 1 a 2 días, con sonda urinaria por 24 a 48 horas. La recuperación funcional completa ocurre en 2 a 4 semanas, con mejoría del flujo urinario notoria desde los primeros días.",
    faqs: [
      {
        question: "¿Rezum o HoLEP, cuál es mejor para mí?",
        answer:
          "Depende principalmente del tamaño de la próstata y de tus prioridades: HoLEP es más efectivo en próstatas grandes con resultados muy duraderos, mientras que Rezum es ambulatorio y preserva mejor la eyaculación. La elección se decide en conjunto durante la evaluación urológica.",
      },
      {
        question: "¿Voy a sentir dolor durante o después de la cirugía?",
        answer:
          "HoLEP se realiza con anestesia general o raquídea, y el dolor postoperatorio es generalmente leve y bien controlado con analgesia habitual.",
      },
      {
        question: "¿Cuánto tiempo debo usar sonda urinaria después de la cirugía?",
        answer:
          "Habitualmente se mantiene entre 24 y 48 horas tras el procedimiento, retirándose antes del alta o en el control inmediato.",
      },
      {
        question: "¿Cuándo puedo volver a tener actividad sexual después de la cirugía?",
        answer:
          "En general se recomienda esperar entre 2 y 4 semanas, según la evolución individual, lo cual se confirma en los controles postoperatorios.",
      },
      {
        question: "¿HoLEP elimina el riesgo de cáncer de próstata?",
        answer:
          "No. HoLEP trata la hiperplasia benigna, no el cáncer. El control con PSA y tacto rectal debe continuarse según indicación médica independientemente del tratamiento recibido.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial de un procedimiento endoscópico de próstata mostrando un láser de forma esquemática y no explícita, estilo institucional limpio, paleta azul y blanco.",
  },
  {
    slug: "cistoscopia",
    name: "Cistoscopía",
    category: "Urología general",
    shortDescription:
      "Examen endoscópico que permite visualizar directamente la uretra y la vejiga, clave en el diagnóstico de múltiples condiciones urológicas.",
    seoTitle: "Cistoscopía en Temuco | Agenda tu examen | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Cistoscopía en Temuco: en qué consiste, cómo prepararte, qué detecta (incluyendo el cáncer de vejiga) y cómo agendar tu examen con un urólogo especialista.",
    keywords: [
      "cistoscopía Temuco",
      "examen de vejiga Temuco",
      "cáncer de vejiga síntomas",
      "agendar cistoscopía Chile",
    ],
    resumen:
      "La cistoscopía es un examen endoscópico que permite observar directamente el interior de la uretra y la vejiga mediante una cámara de pequeño calibre. Es una herramienta diagnóstica fundamental para evaluar sangrado urinario, infecciones recurrentes, estenosis uretrales y, de forma especialmente importante, para la detección y seguimiento del cáncer de vejiga.",
    indicaciones: [
      "Sangre en la orina (hematuria), visible o detectada en examen de laboratorio.",
      "Infecciones urinarias recurrentes sin causa clara identificada.",
      "Síntomas urinarios irritativos persistentes sin explicación.",
      "Seguimiento de pacientes con antecedente de cáncer de vejiga o lesiones vesicales previas.",
      "Evaluación de estenosis uretral u otras alteraciones anatómicas.",
    ],
    sintomas: [
      "El examen en sí no trata un síntoma específico, sino que evalúa la causa de síntomas como sangrado urinario o irritación vesical persistente.",
    ],
    diagnostico: [
      "La cistoscopía es en sí misma el examen diagnóstico definitivo para visualizar la vejiga y la uretra.",
      "Habitualmente se complementa con ecografía vesical y renal, y citología urinaria cuando se sospecha cáncer de vejiga.",
    ],
    tratamiento: [
      "Cistoscopía flexible ambulatoria: examen rápido, de pocos minutos, realizado con anestesia local tópica (gel anestésico), sin necesidad de hospitalización.",
      "En algunos casos puede combinarse con procedimientos terapéuticos menores en el mismo acto, como la toma de biopsias dirigidas.",
    ],
    beneficios: [
      "Visualización directa y precisa de la uretra y la vejiga, superior a otros métodos de imagen para ciertas lesiones.",
      "Procedimiento ambulatorio, rápido y generalmente bien tolerado.",
      "Permite la detección precoz del cáncer de vejiga, mejorando significativamente el pronóstico.",
    ],
    riesgos: [
      "Molestia o ardor leve y transitorio al orinar tras el examen.",
      "Pequeña posibilidad de sangrado leve o infección urinaria posterior.",
      "Es un examen generalmente bien tolerado, con baja tasa de complicaciones.",
    ],
    recuperacion:
      "Tras una cistoscopía flexible diagnóstica, el paciente puede retomar sus actividades habituales el mismo día. Las molestias leves al orinar, si aparecen, suelen resolverse en 24 a 48 horas.",
    faqs: [
      {
        question: "¿Cómo agendo mi cistoscopía?",
        answer:
          "Puedes agendar tu hora de evaluación a través del formulario de agenda o por teléfono; en la consulta se evaluará si el examen está indicado y se coordinará la fecha del procedimiento.",
      },
      {
        question: "¿La cistoscopía es dolorosa?",
        answer:
          "La cistoscopía flexible, que es la más utilizada actualmente, se realiza con anestesia local tópica y es generalmente bien tolerada, descrita por la mayoría de los pacientes como una molestia leve y breve más que como dolor significativo.",
      },
      {
        question: "¿La cistoscopía detecta el cáncer de vejiga?",
        answer:
          "Sí. Es el examen de referencia para el diagnóstico del cáncer de vejiga, permitiendo visualizar directamente lesiones sospechosas en la pared vesical y tomar biopsias cuando corresponde.",
      },
      {
        question: "¿Qué síntomas de cáncer de vejiga debo vigilar?",
        answer:
          "El signo más frecuente es la sangre en la orina, indolora y a veces intermitente, lo que lleva a que se subestime erróneamente. También pueden presentarse síntomas irritativos urinarios persistentes. Cualquiera de estos síntomas debe evaluarse con cistoscopía.",
      },
      {
        question: "¿Necesito alguna preparación especial antes del examen?",
        answer:
          "Generalmente no se requiere ayuno ni preparación especial para la cistoscopía flexible ambulatoria; se entregarán instrucciones específicas si tu caso requiere alguna consideración particular.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial esquemática de un cistoscopio visualizando la vejiga masculina, estilo institucional limpio, paleta azul y blanco, sin contenido explícito.",
  },
  {
    slug: "vejiga-hiperactiva",
    name: "Vejiga hiperactiva",
    category: "Urología general",
    shortDescription:
      "Manejo integral de la urgencia y frecuencia urinaria, con opciones desde la kinesiterapia hasta la estimulación tibial posterior.",
    seoTitle: "Vejiga hiperactiva en Temuco | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Tratamiento de la vejiga hiperactiva en Temuco: incidencia, manejo farmacológico, kinesiterapia de piso pélvico y estimulación tibial posterior.",
    keywords: [
      "vejiga hiperactiva Temuco",
      "urgencia urinaria tratamiento",
      "estimulación tibial posterior Chile",
      "incontinencia de urgencia",
    ],
    resumen:
      "La vejiga hiperactiva es un síndrome caracterizado por urgencia urinaria, con o sin incontinencia asociada, frecuencia urinaria aumentada y nicturia. Afecta a una proporción significativa de la población adulta, aumentando con la edad, y cuenta con múltiples opciones de tratamiento escalonado, desde medidas conductuales hasta terapias avanzadas como la estimulación tibial posterior.",
    indicaciones: [
      "Urgencia urinaria que dificulta llegar al baño a tiempo.",
      "Frecuencia urinaria diurna aumentada sin causa infecciosa identificada.",
      "Nicturia (despertar más de una vez en la noche para orinar) que afecta el descanso.",
      "Episodios de incontinencia de urgencia asociados.",
    ],
    sintomas: [
      "Necesidad imperiosa y repentina de orinar.",
      "Aumento de la frecuencia urinaria diurna y nocturna.",
      "Escape de orina asociado a la urgencia, en algunos pacientes.",
      "Impacto en la calidad de vida, sueño y actividades sociales.",
    ],
    diagnostico: [
      "Historia clínica y diario miccional (registro de horarios y volúmenes de micción).",
      "Examen físico y, en hombres, evaluación prostática para descartar causas obstructivas asociadas.",
      "Urocultivo para descartar infección urinaria como causa de los síntomas.",
      "Estudio urodinámico en casos seleccionados o refractarios al tratamiento inicial.",
    ],
    tratamiento: [
      "Medidas conductuales: ajuste de ingesta de líquidos, reducción de cafeína/alcohol y entrenamiento vesical.",
      "Kinesiterapia de piso pélvico: fortalecimiento y reeducación de la musculatura pélvica, primera línea junto con las medidas conductuales.",
      "Tratamiento farmacológico: antimuscarínicos o beta-3 agonistas, que relajan la vejiga y reducen la urgencia.",
      "Estimulación tibial posterior: terapia de neuromodulación no invasiva, mediante estimulación eléctrica del nervio tibial posterior en el tobillo, indicada cuando el tratamiento conductual y farmacológico no es suficiente.",
      "Toxina botulínica intravesical u otras terapias de tercera línea en casos refractarios seleccionados.",
    ],
    beneficios: [
      "Mejoría significativa de la urgencia, frecuencia y calidad del sueño.",
      "Múltiples opciones terapéuticas escalonadas, adaptadas a la severidad y preferencias del paciente.",
      "La estimulación tibial posterior ofrece una alternativa eficaz y no invasiva para quienes no toleran o no responden a fármacos.",
    ],
    riesgos: [
      "Efectos secundarios de los fármacos antimuscarínicos, como sequedad bucal o constipación.",
      "Resultados variables y graduales con la kinesiterapia, que requiere constancia.",
      "La estimulación tibial posterior requiere sesiones repetidas para lograr y mantener el efecto.",
    ],
    recuperacion:
      "Las medidas conductuales y la kinesiterapia muestran mejoría progresiva en 6 a 12 semanas de práctica constante. La estimulación tibial posterior se realiza en sesiones semanales (habitualmente 12 sesiones iniciales), con sesiones de mantenimiento posteriores según respuesta.",
    faqs: [
      {
        question: "¿Qué tan frecuente es la vejiga hiperactiva?",
        answer:
          "Es una condición muy común: se estima que afecta a una proporción relevante de la población adulta, con una prevalencia que aumenta progresivamente con la edad, tanto en hombres como en mujeres.",
      },
      {
        question: "¿La vejiga hiperactiva se cura completamente?",
        answer:
          "Es una condición que se controla muy eficazmente con tratamiento, aunque no siempre se 'cura' en el sentido estricto. La mayoría de los pacientes logra una mejoría sustancial de los síntomas y la calidad de vida.",
      },
      {
        question: "¿En qué consiste la estimulación tibial posterior?",
        answer:
          "Es una terapia no invasiva en la que se aplica una corriente eléctrica de baja intensidad a través de una pequeña aguja o electrodo cerca del tobillo, estimulando el nervio tibial posterior, que tiene conexiones neurológicas con el control de la vejiga. Se realiza en sesiones ambulatorias de aproximadamente 30 minutos.",
      },
      {
        question: "¿Debo tomar los medicamentos para siempre?",
        answer:
          "No necesariamente. Muchos pacientes pueden reducir o suspender la medicación una vez logrado un buen control de síntomas combinado con medidas conductuales y kinesiterapia, siempre bajo supervisión médica.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial de la vejiga y el sistema nervioso asociado al control urinario, estilo institucional limpio, paleta azul y blanco, sin contenido explícito.",
  },
  {
    slug: "deficit-de-testosterona-andropausia",
    name: "Déficit de testosterona, andropausia e hipogonadismo de inicio tardío",
    category: "Andrología",
    shortDescription:
      "Diagnóstico y manejo del descenso de testosterona en el hombre adulto, incluyendo alternativas que no requieren suplementación directa de testosterona.",
    seoTitle: "Déficit de testosterona y andropausia en Temuco | Dr. Cristóbal Bettancourt",
    seoDescription:
      "Diagnóstico y tratamiento del hipogonadismo de inicio tardío en Temuco: síntomas, exámenes y alternativas terapéuticas, incluyendo citrato de clomifeno y anastrozol.",
    keywords: [
      "déficit de testosterona Temuco",
      "andropausia tratamiento",
      "hipogonadismo de inicio tardío",
      "citrato de clomifeno hombres",
    ],
    resumen:
      "El hipogonadismo de inicio tardío, conocido popularmente como andropausia, es el descenso progresivo de los niveles de testosterona asociado a la edad, que puede generar síntomas físicos, sexuales y anímicos. El tratamiento no siempre implica reemplazo directo de testosterona: existen alternativas farmacológicas, como el citrato de clomifeno y el anastrozol, que estimulan la producción natural de testosterona del propio organismo, siendo especialmente útiles en hombres que desean preservar la fertilidad.",
    indicaciones: [
      "Hombres con síntomas compatibles con déficit de testosterona y niveles confirmados bajos en exámenes de laboratorio.",
      "Pacientes en edad reproductiva que desean tratar el hipogonadismo sin comprometer la fertilidad.",
      "Hombres con fatiga, disminución de la libido o cambios anímicos persistentes, especialmente después de los 40-50 años.",
    ],
    sintomas: [
      "Disminución del deseo sexual y de la calidad de las erecciones.",
      "Fatiga persistente y disminución de la energía habitual.",
      "Disminución de la masa muscular y aumento de la grasa corporal.",
      "Cambios en el estado de ánimo, irritabilidad o dificultad para concentrarse.",
      "Disminución de la densidad ósea en casos de déficit prolongado no tratado.",
    ],
    diagnostico: [
      "Medición de testosterona total en sangre, idealmente en la mañana y confirmada en una segunda muestra.",
      "Evaluación complementaria de LH, FSH y prolactina para definir el origen del hipogonadismo.",
      "Evaluación clínica de síntomas mediante cuestionarios validados.",
      "Descarte de otras causas que puedan simular los síntomas (hipotiroidismo, depresión, apnea del sueño).",
    ],
    tratamiento: [
      "Terapia de reemplazo de testosterona, en sus distintas formas de administración, en hombres sin deseo de fertilidad a corto plazo.",
      "Citrato de clomifeno: estimula la producción de hormonas (LH y FSH) que a su vez incrementan la producción natural de testosterona por los testículos, preservando la fertilidad, a diferencia del reemplazo directo de testosterona.",
      "Anastrozol: en casos seleccionados con una proporción elevada de conversión de testosterona a estrógenos, ayuda a optimizar el balance hormonal y, indirectamente, los niveles de testosterona disponible.",
      "Manejo de factores asociados: control de peso, actividad física y manejo de condiciones como la apnea del sueño, que pueden mejorar los niveles hormonales de forma natural.",
    ],
    beneficios: [
      "Mejoría de la energía, el ánimo, la libido y la función sexual en pacientes adecuadamente seleccionados.",
      "Las alternativas como el citrato de clomifeno permiten tratar el hipogonadismo preservando la fertilidad, algo que el reemplazo directo de testosterona no logra.",
      "Abordaje personalizado según la edad, los deseos de fertilidad y el perfil hormonal específico de cada paciente.",
    ],
    riesgos: [
      "El reemplazo directo de testosterona puede suprimir la producción natural y afectar la fertilidad mientras se utiliza.",
      "Posibles efectos secundarios según la alternativa elegida, que se discuten de forma individualizada antes de iniciar tratamiento.",
      "Necesidad de seguimiento periódico con exámenes de laboratorio para ajustar la terapia y vigilar la respuesta.",
    ],
    recuperacion:
      "La mejoría sintomática con cualquiera de las alternativas terapéuticas suele apreciarse de forma progresiva entre las 4 y 12 semanas de tratamiento, con controles de laboratorio periódicos para ajustar la dosis según la respuesta individual.",
    faqs: [
      {
        question: "¿Existen alternativas a la testosterona para tratar el hipogonadismo?",
        answer:
          "Sí. El citrato de clomifeno y, en casos seleccionados, el anastrozol, son alternativas que estimulan la producción natural de testosterona por el propio organismo, en lugar de reemplazarla externamente, siendo especialmente útiles en hombres que desean mantener su fertilidad.",
      },
      {
        question: "¿Por qué evitar la testosterona externa si quiero tener hijos?",
        answer:
          "La testosterona administrada externamente suprime la señal hormonal que estimula la producción de espermatozoides en los testículos, pudiendo reducir significativamente la fertilidad mientras se utiliza. Por eso, en hombres con deseo de fertilidad, se priorizan alternativas como el citrato de clomifeno.",
      },
      {
        question: "¿A qué edad se presenta la andropausia?",
        answer:
          "No tiene una edad fija como la menopausia femenina; el descenso de testosterona es gradual y puede comenzar a manifestarse con síntomas desde los 40-50 años, aunque varía considerablemente entre cada persona.",
      },
      {
        question: "¿Un examen de testosterona bajo siempre requiere tratamiento?",
        answer:
          "No necesariamente. El diagnóstico de hipogonadismo requiere tanto un nivel de testosterona bajo confirmado como la presencia de síntomas compatibles. Valores levemente bajos sin síntomas relevantes pueden solo requerir seguimiento.",
      },
    ],
    imagePrompt:
      "Ilustración médica vectorial conceptual del eje hormonal masculino (cerebro, hipófisis, testículos), estilo institucional limpio, paleta azul y blanco, sin contenido explícito.",
  },
];

export function getSpecialtyBySlug(slug: string) {
  return specialties.find((s) => s.slug === slug);
}
