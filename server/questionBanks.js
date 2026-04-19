const TOPIC_LABELS = {
  mainIdea: "idea principal",
  details: "lectura literal de datos y comportamientos",
  inference: "inferencias válidas",
  causeEffect: "relaciones causales",
  tools: "función de elementos secundarios del texto",
  conclusion: "conclusión general",
  vocabulary: "vocabulario en contexto",
  structure: "estructura y organización del texto",
};

const QUESTION_BANKS = {
  PER1: [
    {
      id: "per1-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "El impacto de la tecnología en el consumo",
        "El cambio en los hábitos de compra por condiciones económicas",
        "La publicidad como factor principal",
        "El aumento del consumo global",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto describe varias conductas nuevas de compra, pero todas aparecen como respuesta a un contexto económico más inestable. La tecnología aparece como apoyo, no como tema central.",
      tip: "Para encontrar la idea principal, buscá qué une a todos los párrafos y no te quedes con un ejemplo aislado.",
      topics: ["mainIdea"],
    },
    {
      id: "per1-q2",
      prompt: "¿Qué comportamiento adoptan los consumidores con mayor frecuencia?",
      options: [
        "Comprar sin comparar",
        "Comparar precios antes de comprar",
        "Comprar siempre lo mismo",
        "Evitar comprar",
        "A y C",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo afirma de forma explícita que hoy es más frecuente revisar distintas opciones antes de decidir. Por eso la respuesta correcta surge literalmente del texto.",
      tip: "Cuando una conducta aparece presentada como 'más frecuente', suele ser un dato textual directo y no una inferencia.",
      topics: ["details"],
    },
    {
      id: "per1-q3",
      prompt: "¿Qué ocurre con la cantidad de productos comprados?",
      options: [
        "Aumenta en cada compra",
        "Se mantiene igual",
        "Disminuye por compra pero aumenta la frecuencia",
        "Solo compran productos caros",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto dice que muchas personas compran menos cantidad en cada visita, pero van a comprar con mayor frecuencia. La opción correcta combina ambas partes sin alterar el sentido.",
      tip: "Leé con cuidado las opciones compuestas: si una resume dos ideas del texto, ambas deben coincidir.",
      topics: ["details"],
    },
    {
      id: "per1-q4",
      prompt: "¿Cuál es la ventaja de comprar con mayor frecuencia?",
      options: [
        "Menor esfuerzo",
        "Adaptarse a cambios de precios",
        "Obtener descuentos fijos",
        "Reducir el tiempo de compra",
        "Todas las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto explica que esta estrategia permite ajustarse mejor a posibles aumentos de precios. No menciona menos esfuerzo, descuentos fijos ni una reducción del tiempo de compra.",
      tip: "No completes con lógica propia lo que el texto no dijo: elegí solo lo que está afirmado o se infiere razonablemente.",
      topics: ["causeEffect"],
    },
    {
      id: "per1-q5",
      prompt: "¿Qué sucede con las marcas alternativas?",
      options: [
        "Disminuyen",
        "Aumentan su uso",
        "Desaparecen",
        "Solo se usan en crisis extremas",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cuarto párrafo indica que crece el consumo de marcas alternativas, sobre todo cuando la diferencia de precio es importante. La idea es textual y no condicional.",
      tip: "Si el texto usa expresiones como 'se observa un crecimiento', la respuesta suele estar nombrando un cambio claro y directo.",
      topics: ["details"],
    },
    {
      id: "per1-q6",
      prompt: "¿Cuál es una causa de estos cambios?",
      options: [
        "Publicidad",
        "Estabilidad económica",
        "Variaciones en precios e ingresos",
        "Tecnología exclusivamente",
        "A y D",
      ],
      correctOptionIndex: 2,
      explanation:
        "Desde el inicio, el texto señala que estos cambios surgen como resultado de variaciones en los precios y en los ingresos disponibles. La tecnología aparece después como herramienta, no como causa única.",
      tip: "Para detectar causas, prestá atención a frases como 'surge como resultado de' o 'esto ha llevado a'.",
      topics: ["causeEffect"],
    },
    {
      id: "per1-q7",
      prompt: "¿Qué tipo de adaptación describe el texto?",
      options: [
        "Rápida y permanente",
        "Gradual frente a la inestabilidad",
        "Temporal y superficial",
        "Inexistente",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cierre habla de una 'adaptación gradual' de las personas a un entorno económico más inestable. La respuesta correcta retoma esa formulación sin exagerarla.",
      tip: "El último párrafo suele condensar la conclusión general; mirarlo ayuda a responder preguntas de síntesis.",
      topics: ["inference", "conclusion"],
    },
    {
      id: "per1-q8",
      prompt: "¿Qué NO afirma el texto?",
      options: [
        "Que las personas comparan precios",
        "Que las compras se hacen con mayor frecuencia",
        "Que todos los consumidores reaccionan igual",
        "Que aumentan las marcas alternativas",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto menciona comparación de precios, mayor frecuencia de compra y crecimiento de marcas alternativas. Nunca afirma que todos los consumidores reaccionen exactamente igual.",
      tip: "En preguntas con 'NO', primero descartá todo lo que sí aparece de manera explícita en el texto.",
      topics: ["inference"],
    },
    {
      id: "per1-q9",
      prompt: "¿Qué rol cumplen las aplicaciones móviles?",
      options: [
        "Reducen consumo",
        "Permiten comparar precios",
        "Eliminan tiendas físicas",
        "Aumentan ingresos",
        "Todas las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "Las aplicaciones móviles y sitios web se mencionan como herramientas para ver precios en diferentes comercios. El texto no les atribuye otros efectos más amplios.",
      tip: "Cuando un elemento secundario aparece con una función concreta, no le atribuyas consecuencias extra que el texto no respalda.",
      topics: ["tools"],
    },
    {
      id: "per1-q10",
      prompt: "¿Cuál es la conclusión general?",
      options: [
        "El consumo desaparece",
        "El sistema económico mejora",
        "Los consumidores se adaptan a la inestabilidad",
        "Las marcas dominan decisiones",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 2,
      explanation:
        "La conclusión del texto es que estas modificaciones reflejan una adaptación gradual a un entorno económico más inestable. Las otras opciones contradicen o reducen indebidamente el cierre.",
      tip: "La conclusión general debe integrar el sentido del texto completo, no solo repetir un detalle parcial.",
      topics: ["conclusion", "mainIdea"],
    },
  ],
  PER2: [
    {
      id: "per2-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "El celular debería dejar de usarse en casi todas las actividades diarias",
        "El celular ocupa un lugar central en la vida cotidiana y el desafío es usarlo con equilibrio",
        "El principal problema actual es que el celular solo sirve para entretener",
        "La comunicación cara a cara ya desapareció por completo",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto presenta tanto beneficios como dificultades del uso del celular. Por eso la idea principal no es rechazarlo, sino mostrar su centralidad y la necesidad de un uso equilibrado.",
      tip: "La idea principal suele integrar ventajas y problemas, no quedarse con un solo costado del texto.",
      topics: ["mainIdea", "conclusion"],
    },
    {
      id: "per2-q2",
      prompt: "¿Qué hábito cotidiano aparece descrito como muy frecuente?",
      options: [
        "Usar el celular únicamente para hacer llamadas urgentes",
        "Revisar mensajes, noticias o redes apenas empieza la mañana",
        "Apagar el celular durante los viajes y las esperas",
        "Evitar mirar la pantalla mientras se realizan otras actividades",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo afirma de manera directa que muchas personas miran el celular antes de levantarse y repiten esa conducta a lo largo del día.",
      tip: "Cuando el texto describe una costumbre frecuente, buscá una opción que reproduzca ese ejemplo concreto.",
      topics: ["details"],
    },
    {
      id: "per2-q3",
      prompt: "Según el texto, ¿por qué el uso constante del celular puede afectar la concentración?",
      options: [
        "Porque impide acceder a información útil",
        "Porque las notificaciones interrumpen la atención de forma constante",
        "Porque obliga a conversar demasiado con otras personas",
        "Porque reemplaza siempre las tareas importantes",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto vincula de forma explícita las notificaciones con interrupciones que hacen más difícil concentrarse durante mucho tiempo.",
      tip: "En preguntas causales, identificá qué elemento del texto aparece como origen del problema.",
      topics: ["causeEffect"],
    },
    {
      id: "per2-q4",
      prompt: "¿Qué función del celular en la organización diaria menciona el texto?",
      options: [
        "Reemplazar toda planificación personal",
        "Servir como agenda, alarma, calculadora o medio de pago",
        "Eliminar la necesidad de recordar horarios",
        "Evitar cualquier tipo de ansiedad cotidiana",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto señala que muchas personas usan el celular para ordenar su día mediante herramientas concretas como agenda, alarma, calculadora y pago.",
      tip: "Si una pregunta apunta a la función de un objeto, buscá los usos específicos que el texto enumera.",
      topics: ["tools", "details"],
    },
    {
      id: "per2-q5",
      prompt: "¿Qué contraste establece el texto sobre las relaciones con los demás?",
      options: [
        "El celular aleja tanto a los que están lejos como a los que están cerca",
        "El celular acerca a quienes están lejos, pero a veces distrae de quienes están cerca",
        "El celular mejora siempre la calidad de toda conversación presencial",
        "El celular impide completamente cualquier forma de vínculo cotidiano",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto marca ese doble efecto: facilita el contacto a distancia, pero también puede debilitar la atención hacia quienes comparten el mismo espacio físico.",
      tip: "Prestá atención a los contrastes del tipo 'aunque... también...': ahí suele estar la respuesta correcta.",
      topics: ["inference", "structure"],
    },
    {
      id: "per2-q6",
      prompt: "¿Qué significa en el cierre usar el celular de manera 'equilibrada'?",
      options: [
        "Usarlo exactamente la misma cantidad de horas todos los días",
        "Aprovechar sus beneficios sin depender de él en todo momento",
        "Limitarlo solo al trabajo y al estudio",
        "Dejar de llevarlo a cualquier reunión social",
      ],
      correctOptionIndex: 1,
      explanation:
        "En el último párrafo, 'equilibrada' alude a conservar las ventajas del celular sin convertirlo en una presencia dominante o necesaria en cada momento.",
      tip: "Para vocabulario en contexto, fijate qué problema busca resolver la palabra dentro del cierre.",
      topics: ["vocabulary", "conclusion"],
    },
  ],
  PER3: [
    {
      id: "per3-q1",
      prompt: "¿Cuál es el foco principal del texto?",
      options: [
        "Defender que todas las empresas deben abandonar la oficina tradicional",
        "Analizar beneficios, límites e impactos urbanos del trabajo remoto",
        "Explicar que el trabajo remoto solo mejora la vida personal",
        "Mostrar que el trabajo remoto perjudica siempre la productividad",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto no se limita a elogiar o criticar el trabajo remoto: muestra ventajas, dificultades y efectos sobre la vida urbana.",
      tip: "La idea principal debe abarcar todos los bloques del texto, no solo uno de sus ejemplos.",
      topics: ["mainIdea"],
    },
    {
      id: "per3-q2",
      prompt: "¿Qué beneficio del trabajo remoto aparece como especialmente valorado?",
      options: [
        "Reducción del tiempo de traslado",
        "La eliminación de toda reunión de trabajo",
        "El aumento automático del salario",
        "La desaparición de horarios laborales",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo destaca que evitar viajes diarios largos permite disponer de más tiempo para descansar o realizar otras actividades.",
      tip: "Cuando el texto nombra un cambio 'más valorado', la respuesta suele estar formulada de manera directa.",
      topics: ["details"],
    },
    {
      id: "per3-q3",
      prompt: "¿Por qué algunas empresas observan un aumento en la productividad?",
      options: [
        "Porque ya no hace falta coordinar tareas con nadie",
        "Porque ciertas personas se concentran mejor y organizan su jornada con más autonomía",
        "Porque trabajar desde casa siempre implica menos horas de trabajo",
        "Porque la comunicación virtual reemplaza mejor que la presencial a todos los intercambios",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto relaciona la mejora de productividad con un ambiente silencioso, más autonomía y mayor control sobre el propio tiempo.",
      tip: "No elijas explicaciones absolutas si el texto habla de 'algunas personas' o 'en ciertos casos'.",
      topics: ["causeEffect"],
    },
    {
      id: "per3-q4",
      prompt: "¿Por qué el texto afirma que no todos viven el trabajo remoto de la misma manera?",
      options: [
        "Porque depende de contar con condiciones materiales adecuadas en el hogar",
        "Porque todos tienen la misma experiencia, pero la interpretan distinto",
        "Porque el trabajo remoto solo funciona en oficinas pequeñas",
        "Porque la conexión digital dejó de ser necesaria para esta modalidad",
      ],
      correctOptionIndex: 0,
      explanation:
        "El cuarto párrafo aclara que trabajar desde casa exige espacio cómodo, buena conexión y cierta separación entre tiempo laboral y personal.",
      tip: "Si el texto enumera condiciones necesarias, buscá una opción que las resuma sin deformarlas.",
      topics: ["details", "inference"],
    },
    {
      id: "per3-q5",
      prompt: "¿Qué efecto del trabajo remoto sobre las ciudades destaca el texto?",
      options: [
        "Más tránsito hacia las zonas de oficinas",
        "Menor actividad en comercios que dependían del movimiento laboral",
        "Desaparición completa de bares y restaurantes",
        "Crecimiento uniforme de todos los espacios de la ciudad",
      ],
      correctOptionIndex: 1,
      explanation:
        "Al desplazarse menos personas hacia áreas de oficinas, algunos comercios pierden parte del flujo cotidiano que sostenía su actividad.",
      tip: "Prestá atención a los matices: 'disminuye la actividad' no significa 'desaparece por completo'.",
      topics: ["causeEffect", "details"],
    },
    {
      id: "per3-q6",
      prompt: "¿Qué conclusión propone el cierre del texto?",
      options: [
        "El trabajo remoto reemplazará totalmente a la oficina tradicional",
        "El trabajo remoto parece conducir a modelos mixtos según cada actividad",
        "El trabajo remoto solo modifica la rutina individual y nada más",
        "La oficina tradicional dejó de tener cualquier utilidad",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cierre sostiene que más que eliminar la oficina, el trabajo remoto está dando lugar a combinaciones de presencia y distancia.",
      tip: "La conclusión correcta suele evitar extremos si el texto cierra con una posición intermedia.",
      topics: ["conclusion", "inference"],
    },
  ],
  PER4: [
    {
      id: "per4-q1",
      prompt: "¿Cuál es la idea central del texto?",
      options: [
        "La inflación solo hace subir los precios, sin modificar conductas",
        "La inflación cambia hábitos, prioridades y formas de organizar el consumo",
        "Las promociones resuelven por completo los problemas de consumo",
        "Las marcas dejaron de importar en todos los casos",
      ],
      correctOptionIndex: 1,
      explanation:
        "Desde el comienzo, el texto aclara que la inflación no solo encarece bienes: también transforma la manera de pensar y organizar las compras.",
      tip: "Buscá la respuesta que reúna tanto el efecto económico como el cambio de comportamiento.",
      topics: ["mainIdea"],
    },
    {
      id: "per4-q2",
      prompt: "¿Qué estrategia de consumo aparece como una de las más visibles?",
      options: [
        "Comprar siempre en el mismo lugar sin comparar",
        "Comparar precios, promociones y marcas antes de decidir",
        "Hacer compras más grandes para evitar volver al comercio",
        "Mantener la misma fidelidad a las marcas pese a cualquier precio",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo describe una comparación constante de precios, promociones y marcas como parte del nuevo comportamiento de compra.",
      tip: "Cuando el texto enumera varias acciones relacionadas, la opción correcta suele sintetizarlas.",
      topics: ["details"],
    },
    {
      id: "per4-q3",
      prompt: "¿Para qué sirve comprar en menor volumen y con mayor frecuencia, según el texto?",
      options: [
        "Para dejar de prestar atención a los precios",
        "Para reaccionar frente a cambios repentinos",
        "Para asegurar una planificación mensual completa",
        "Para fortalecer la fidelidad a una marca determinada",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto explica que esta conducta permite ajustarse mejor a modificaciones rápidas de precios, aunque demande más tiempo.",
      tip: "En preguntas de causa o finalidad, preguntate qué problema intenta resolver esa conducta.",
      topics: ["causeEffect"],
    },
    {
      id: "per4-q4",
      prompt: "¿Qué ocurre con la relación con las marcas en contextos inflacionarios?",
      options: [
        "Se vuelve más estable que antes",
        "El precio gana peso y debilita la fidelidad previa",
        "Las marcas alternativas desaparecen del mercado",
        "Las personas compran siempre productos mejores aunque cuesten más",
      ],
      correctOptionIndex: 1,
      explanation:
        "El tercer bloque del texto señala que, cuando el precio se vuelve decisivo, muchas preferencias firmes pierden fuerza.",
      tip: "No confundas cambio de marca con preferencia absoluta por lo nuevo: el texto lo vincula al presupuesto.",
      topics: ["details", "inference"],
    },
    {
      id: "per4-q5",
      prompt: "¿Cómo impacta este proceso de manera desigual?",
      options: [
        "Todos cuentan con las mismas herramientas para adaptarse",
        "Quienes tienen más ingresos o más información suelen adaptarse mejor",
        "Solo los sectores de mayores ingresos deben cambiar sus hábitos",
        "La inflación afecta del mismo modo cualquier decisión cotidiana",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto aclara que la adaptación no es igual para todos: tener más margen económico o más acceso a información ofrece más recursos para enfrentar la inflación.",
      tip: "Si el texto contrasta grupos sociales, la respuesta correcta debe conservar esa diferencia.",
      topics: ["details", "causeEffect"],
    },
    {
      id: "per4-q6",
      prompt: "¿Qué conclusión general propone el texto?",
      options: [
        "La inflación solo reduce el poder adquisitivo",
        "La inflación revela una transformación profunda en la relación entre personas, dinero y futuro",
        "Consumir deja de exigir atención en contextos de suba de precios",
        "Los cambios de hábito son superficiales y pasajeros",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cierre afirma que detrás de pequeñas decisiones cotidianas hay una modificación más profunda de la relación con el dinero y con la planificación del futuro.",
      tip: "La mejor conclusión no repite un dato aislado: reúne el sentido general del texto.",
      topics: ["conclusion"],
    },
  ],
  PER5: [
    {
      id: "per5-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "La vida urbana hizo desaparecer la necesidad de vínculo social",
        "Las relaciones sociales urbanas se transforman y se reacomodan a nuevas condiciones",
        "La tecnología reemplaza por completo cualquier encuentro presencial",
        "Las ciudades actuales favorecen relaciones siempre más estables",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto no plantea una simple pérdida de vínculos, sino cambios en la forma de encontrarse, sostener relaciones y organizar el tiempo compartido.",
      tip: "La idea principal debe incluir el cambio y la adaptación, no solo una visión negativa.",
      topics: ["mainIdea"],
    },
    {
      id: "per5-q2",
      prompt: "¿Qué efecto positivo de la tecnología menciona el texto?",
      options: [
        "Permite mantener vínculos con personas que viven lejos",
        "Reemplaza completamente la cercanía emocional del encuentro presencial",
        "Evita que las relaciones se vuelvan fragmentadas",
        "Elimina la dificultad de coordinar horarios en la ciudad",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo destaca que mensajes, videollamadas y grupos virtuales facilitan el contacto con familiares, amigos o colegas a distancia.",
      tip: "Buscá la ventaja concreta que el texto afirma, sin extenderla a efectos absolutos que no menciona.",
      topics: ["details", "tools"],
    },
    {
      id: "per5-q3",
      prompt: "¿Qué aclara el texto sobre la interacción digital?",
      options: [
        "Que genera la misma cercanía emocional que un encuentro cara a cara",
        "Que puede complementar los vínculos, pero no reemplaza por completo la presencia",
        "Que vuelve innecesarios los paseos y las comidas compartidas",
        "Que solo sirve para relaciones laborales",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto marca un matiz importante: lo digital puede sostener el vínculo, pero no siempre alcanza para producir la misma cercanía emocional.",
      tip: "Prestá atención a expresiones moderadas como 'puede complementar' o 'no reemplaza por completo'.",
      topics: ["inference", "details"],
    },
    {
      id: "per5-q4",
      prompt: "¿Por qué muchas relaciones pasan a sostenerse con mensajes rápidos o encuentros poco frecuentes?",
      options: [
        "Porque ya no existen espacios públicos en las ciudades",
        "Porque el trabajo, los traslados y el cansancio reducen el tiempo disponible",
        "Porque la tecnología prohíbe las reuniones presenciales",
        "Porque las personas prefieren siempre vínculos más superficiales",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto atribuye esa situación a la dificultad para coordinar horarios en contextos de obligaciones laborales, tiempos de traslado y cansancio diario.",
      tip: "Cuando una pregunta pide causas, revisá qué factores el texto enumera antes del efecto.",
      topics: ["causeEffect"],
    },
    {
      id: "per5-q5",
      prompt: "¿Qué ejemplo de nuevas formas de socialización aparece en el texto?",
      options: [
        "Actividades organizadas por aplicaciones, clubes o talleres",
        "El abandono de toda forma de contacto mediado por tecnología",
        "La vuelta exclusiva a reuniones barriales tradicionales",
        "La reducción total de la diversidad en la experiencia urbana",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto menciona aplicaciones, clubes, talleres, grupos de interés común y espacios públicos renovados como escenarios de sociabilidad actual.",
      tip: "Los ejemplos concretos suelen aparecer en el texto para mostrar cómo se expresa una idea general.",
      topics: ["details"],
    },
    {
      id: "per5-q6",
      prompt: "¿Qué conclusión resume mejor el cierre del texto?",
      options: [
        "Las relaciones urbanas deben pensarse solo como pérdida y deterioro",
        "Lo que cambia no es la necesidad de vínculo, sino los modos de sostenerla",
        "La vida cotidiana actual volvió innecesaria toda forma de cercanía",
        "Las relaciones sociales urbanas ya no dependen de ninguna condición material",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cierre afirma que la necesidad de vínculo sigue siendo central; lo que se transforma son las estrategias y formas de construir cercanía.",
      tip: "La conclusión correcta suele retomar el matiz más importante del último párrafo.",
      topics: ["conclusion"],
    },
  ],
  PER6: [
    {
      id: "per6-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "El precio sigue siendo el único criterio de consumo en la ciudad",
        "En la vida urbana, el tiempo se volvió un recurso central que ordena decisiones económicas y sociales",
        "Las ciudades latinoamericanas resolvieron sus problemas de movilidad",
        "El ocio perdió toda importancia frente al trabajo",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto muestra cómo el tiempo deja de ser un fondo neutro y pasa a influir en consumo, ocio, movilidad y relaciones. Esa centralidad del tiempo es el eje principal.",
      tip: "Buscá el concepto que reaparece en distintos párrafos con funciones diferentes pero conectadas.",
      topics: ["mainIdea"],
    },
    {
      id: "per6-q2",
      prompt: "¿Qué tipo de decisiones toman cada vez más personas en función del tiempo que pueden ahorrar?",
      options: [
        "Elegir comercios cercanos o pagar más por soluciones que reduzcan esperas",
        "Evitar cualquier gasto en servicios",
        "Mudarse siempre al centro de la ciudad",
        "Trabajar menos horas por semana",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo da esos ejemplos de manera explícita: cercanía, delivery y pago extra por ahorro de tiempo. No menciona mudanzas obligatorias ni reducción de jornada.",
      tip: "Cuando el texto enumera ejemplos, una buena respuesta suele reunirlos sin agregar elementos nuevos.",
      topics: ["details"],
    },
    {
      id: "per6-q3",
      prompt: "¿Qué cambio se produce en los criterios de elección de algunas actividades?",
      options: [
        "Dejan de evaluarse por completo",
        "Pasan de juzgarse solo por precio o hábito a considerarse también por su efecto sobre la agenda cotidiana",
        "Se eligen únicamente por tradición familiar",
        "Se definen exclusivamente por publicidad",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto explica que actividades antes elegidas por precio o costumbre ahora también se miden por su impacto en el tiempo disponible. Ese es el cambio señalado por los especialistas.",
      tip: "Prestá atención a contrastes del tipo 'antes... ahora...': suelen marcar el núcleo de la transformación.",
      topics: ["structure", "details"],
    },
    {
      id: "per6-q4",
      prompt: "¿Por qué la valorización del tiempo no se distribuye de manera homogénea?",
      options: [
        "Porque todos pueden pagar por ahorrar tiempo del mismo modo",
        "Porque para algunos sectores ahorrar tiempo mediante pagos extra es posible y para otros es un lujo inaccesible",
        "Porque el tiempo solo importa en ciudades muy pequeñas",
        "Porque el texto sostiene que ahorrar tiempo nunca cuesta dinero",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cuarto párrafo marca una desigualdad clara: no todos pueden pagar servicios o soluciones que ahorren tiempo. Esa diferencia altera la experiencia urbana según el grupo social.",
      tip: "Si el texto contrapone 'para ciertos sectores' y 'para otros', la respuesta correcta debe respetar esa diferencia.",
      topics: ["causeEffect", "inference"],
    },
    {
      id: "per6-q5",
      prompt: "¿Qué factores explica el texto como causas de que el tiempo sea más escaso y valioso?",
      options: [
        "El crecimiento de las distancias urbanas, el aumento del tránsito y las mayores exigencias laborales",
        "La disminución del trabajo y del tránsito",
        "La expansión del turismo internacional",
        "La baja de precios en comercios de barrio",
      ],
      correctOptionIndex: 0,
      explanation:
        "La primera oración enumera esas tres causas de manera directa. Son los factores que modifican la distribución de las actividades diarias.",
      tip: "En preguntas sobre causas, revisá con cuidado las enumeraciones del comienzo del texto.",
      topics: ["causeEffect", "details"],
    },
    {
      id: "per6-q6",
      prompt: "¿Qué conclusión expresa mejor el cierre del texto?",
      options: [
        "El tiempo solo organiza la rutina, pero no tiene efectos económicos",
        "El tiempo se volvió un criterio económico y social con efectos visibles",
        "El tiempo perdió importancia frente al dinero",
        "Las diferencias sociales urbanas ya no existen",
      ],
      correctOptionIndex: 1,
      explanation:
        "La última frase dice que el tiempo no solo organiza la rutina, sino que también actúa como criterio económico y social. Esa formulación resume el argumento completo.",
      tip: "La mejor conclusión suele retomar palabras clave del cierre sin deformarlas.",
      topics: ["conclusion"],
    },
  ],
  PER7: [
    {
      id: "per7-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Viajar lejos sigue siendo el único criterio importante para elegir destinos",
        "Se consolida un turismo de cercanía que cambia la lógica con la que muchas personas eligen sus viajes",
        "Las fronteras internacionales dejaron de existir para los viajeros",
        "Los destinos regionales son siempre más baratos que cualquier otro",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto presenta el crecimiento del turismo de cercanía como una tendencia que modifica los criterios de elección. No dice que la distancia haya dejado de importar en todos los casos, sino que pierde exclusividad.",
      tip: "La idea central no es un ejemplo puntual, sino el cambio de lógica que articula todo el texto.",
      topics: ["mainIdea"],
    },
    {
      id: "per7-q2",
      prompt: "¿Qué factores empiezan a valorar muchos viajeros según el texto?",
      options: [
        "Accesibilidad, costo total, flexibilidad y posibilidad de escapadas breves",
        "Exclusivamente exotismo y lejanía",
        "Solo el prestigio internacional del destino",
        "La duración máxima posible del viaje",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo enumera esos factores como parte de la nueva lógica de elección. Son justamente los criterios que favorecen al turismo de cercanía.",
      tip: "Cuando el texto enumera varios criterios, la opción correcta suele reunirlos sin cambiar su sentido.",
      topics: ["details"],
    },
    {
      id: "per7-q3",
      prompt: "¿Qué causas de esta transformación menciona el texto?",
      options: [
        "Restricciones económicas y un cambio cultural sobre qué hace posible el descanso",
        "La eliminación de toda incertidumbre",
        "La caída total del turismo internacional",
        "La obligación legal de viajar cerca",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto combina dos causas: el mayor costo de viajes prolongados y una modificación cultural por la cual el descanso depende también de la viabilidad dentro de agendas limitadas.",
      tip: "Si el texto dice 'por un lado... por otro...', buscá una respuesta que conserve ambos factores.",
      topics: ["causeEffect"],
    },
    {
      id: "per7-q4",
      prompt: "¿Qué papel cumple la incertidumbre en las decisiones de viaje?",
      options: [
        "Lleva a preferir opciones con menor compromiso financiero y menor planificación anticipada",
        "Hace que las personas viajen más lejos para compensar el riesgo",
        "Vuelve irrelevante el costo total del viaje",
        "No influye en absoluto en la elección",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto afirma que, ante escenarios cambiantes, algunos viajeros optan por alternativas que impliquen menos compromiso financiero y menos planificación previa. Esa es la función de la incertidumbre en el argumento.",
      tip: "Para inferir bien, seguí la cadena: escenario cambiante -> preferencia por menor riesgo.",
      topics: ["causeEffect", "inference"],
    },
    {
      id: "per7-q5",
      prompt: "¿Qué se puede inferir de la frase 'Lejos de ser una modalidad menor'?",
      options: [
        "Que el turismo de cercanía tiene efectos relevantes sobre la oferta turística",
        "Que se trata de una práctica poco importante y casi marginal",
        "Que solo interesa a gobiernos locales",
        "Que ya reemplazó por completo a todos los demás viajes",
      ],
      correctOptionIndex: 0,
      explanation:
        "La frase introduce justamente la idea contraria a una lectura despectiva: esta modalidad está reconfigurando la oferta turística. No implica reemplazo total, sino relevancia creciente.",
      tip: "Cuando el texto niega una interpretación posible, suele preparar una conclusión más fuerte en sentido opuesto.",
      topics: ["inference", "structure"],
    },
    {
      id: "per7-q6",
      prompt: "¿Cuál es la mejor conclusión del texto?",
      options: [
        "El turismo de cercanía es solo una solución temporal sin efectos mayores",
        "La nueva prioridad de muchos viajeros está reordenando destinos y servicios para hacerlos más compatibles con la vida cotidiana",
        "La distancia dejó de tener cualquier importancia en el turismo",
        "Los viajes breves son siempre superiores a los largos",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cierre destaca que comercios, gobiernos y prestadores adaptan su oferta a viajeros que buscan experiencias breves, frecuentes y viables. Esa es la consecuencia general del proceso descrito.",
      tip: "La conclusión correcta integra tendencia, causas y efectos, sin convertirlos en absolutos.",
      topics: ["conclusion"],
    },
  ],
  PER8: [
    {
      id: "per8-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Las plataformas digitales dejaron de ser útiles para los usuarios",
        "La relación entre consumidores y plataformas se volvió más crítica y reflexiva con el tiempo",
        "Los datos personales son el único problema del ecosistema digital",
        "La rapidez ya no importa para ningún usuario",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto reconoce que las plataformas siguen siendo útiles, pero sostiene que los usuarios ahora las evalúan de manera menos ingenua. Esa transformación del vínculo es el eje central.",
      tip: "Si un texto pasa de una etapa inicial a otra posterior, la idea principal suele estar en ese cambio de relación.",
      topics: ["mainIdea"],
    },
    {
      id: "per8-q2",
      prompt: "¿Qué prometían inicialmente muchas plataformas digitales?",
      options: [
        "Rapidez, comodidad y una experiencia personalizada",
        "Menores impuestos para los usuarios",
        "Independencia total de la tecnología",
        "Condiciones laborales completamente transparentes",
      ],
      correctOptionIndex: 0,
      explanation:
        "El primer párrafo enumera esas tres promesas como base de la expansión inicial de las plataformas. Es un contenido literal.",
      tip: "Los comienzos de un texto suelen definir el punto de partida del contraste posterior.",
      topics: ["details"],
    },
    {
      id: "per8-q3",
      prompt: "¿Cuál de estos se menciona como un 'costo invisible'?",
      options: [
        "La desaparición del consumo digital",
        "Comisiones elevadas, uso intensivo de datos personales y dependencia tecnológica",
        "La imposibilidad de comparar alternativas",
        "La reducción total de opciones para el consumidor",
        "A y C",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto nombra explícitamente esos costos invisibles. No sostiene que haya desaparición del consumo digital ni imposibilidad total de comparar.",
      tip: "Leé con cuidado las listas del texto: suelen convertirse casi directamente en opciones correctas.",
      topics: ["details"],
    },
    {
      id: "per8-q4",
      prompt: "¿Qué significa que la relación se haya vuelto 'más ambigua'?",
      options: [
        "Que los usuarios ya no entienden cómo usar aplicaciones",
        "Que conviven la utilidad de las plataformas con una mayor conciencia de sus costos y límites",
        "Que las plataformas funcionan peor en todos los casos",
        "Que los usuarios rechazaron por completo estos servicios",
      ],
      correctOptionIndex: 1,
      explanation:
        "La ambigüedad surge porque los servicios siguen siendo valiosos, pero ya no se los acepta sin objeciones. El texto muestra una relación mixta, no una ruptura total.",
      tip: "Para vocabulario en contexto, buscá qué tensiones resume esa palabra dentro del párrafo.",
      topics: ["vocabulary", "inference"],
    },
    {
      id: "per8-q5",
      prompt: "¿Qué cambió en la forma de evaluar las plataformas?",
      options: [
        "Se las juzga solo por la novedad tecnológica",
        "Se las empieza a medir por calidad, costo, confiabilidad y efectos sociales",
        "Se dejó de considerar la rapidez por completo",
        "Solo importa si una plataforma es popular",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto dice que, al perder peso la novedad, las personas pasan a juzgar estas herramientas por criterios más amplios. Esa ampliación de criterios es parte de la maduración del ecosistema digital.",
      tip: "Cuando el texto opone 'ya no solo' o 'comienzan a', fijate en el nuevo criterio que reemplaza al anterior.",
      topics: ["structure", "details"],
    },
    {
      id: "per8-q6",
      prompt: "¿Cuál es la mejor síntesis del cierre?",
      options: [
        "El consumidor digital renuncia a la conveniencia",
        "El vínculo con las plataformas pasa de una adhesión casi automática a una negociación más reflexiva",
        "Las plataformas perdieron toda legitimidad",
        "La personalización dejó de existir en el mundo digital",
      ],
      correctOptionIndex: 1,
      explanation:
        "El último párrafo formula exactamente ese desplazamiento: sigue valorándose la conveniencia, pero ya no a cualquier precio ni en cualquier condición. Es la conclusión general.",
      tip: "La conclusión no siempre niega el pasado; a veces lo redefine con más condiciones.",
      topics: ["conclusion"],
    },
  ],
  PER9: [
    {
      id: "per9-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "La desigualdad urbana depende solo del ingreso y del barrio",
        "La calidad del espacio habitable se volvió una dimensión central de desigualdad urbana",
        "El trabajo remoto eliminó las diferencias sociales en la ciudad",
        "La vivienda solo cumple una función residencial",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto introduce una dimensión menos visible de la desigualdad: las condiciones concretas de la vivienda y su efecto sobre la vida cotidiana. Ese es el eje argumental de todos los párrafos.",
      tip: "Si el texto contrasta un enfoque tradicional con otro emergente, la idea principal suele estar en esa nueva dimensión.",
      topics: ["mainIdea"],
    },
    {
      id: "per9-q2",
      prompt: "¿Por qué la vivienda ya no puede entenderse solo como un lugar de residencia?",
      options: [
        "Porque dejó de usarse para descansar",
        "Porque también funciona como espacio de trabajo, estudio, sociabilidad y organización familiar",
        "Porque fue reemplazada por oficinas compartidas",
        "Porque solo importa su ubicación externa",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo amplía el sentido de la vivienda al mostrar que hoy concentra múltiples funciones. Esa ampliación explica por qué ciertas condiciones internas ganan relevancia.",
      tip: "Prestá atención a los 'también': suelen ampliar el significado de un concepto clave.",
      topics: ["details"],
    },
    {
      id: "per9-q3",
      prompt: "¿Qué puede ocurrir con dos personas que tienen ingresos similares, según el texto?",
      options: [
        "Experimentan necesariamente la ciudad del mismo modo",
        "Pueden vivir la ciudad de maneras muy distintas según la calidad de su entorno habitable",
        "Siempre tienen la misma salud mental",
        "Comparten idénticas oportunidades laborales",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto subraya que la desigualdad no se agota en el ingreso: condiciones domésticas distintas pueden producir experiencias urbanas muy diferentes. Esa comparación aparece de forma explícita.",
      tip: "No reduzcas una explicación compleja a una sola variable si el texto introduce otra decisiva.",
      topics: ["inference", "details"],
    },
    {
      id: "per9-q4",
      prompt: "¿Qué efecto puede tener una vivienda incómoda o mal ubicada?",
      options: [
        "Solo afecta el descanso, pero no otras áreas",
        "Puede repercutir en el rendimiento laboral, el acceso a oportunidades y la salud mental",
        "Mejora la concentración en tareas exigentes",
        "No produce consecuencias sociales relevantes",
      ],
      correctOptionIndex: 1,
      explanation:
        "El tercer párrafo explica que estas diferencias se acumulan y afectan varias dimensiones de la vida. La respuesta correcta reúne esas consecuencias sin recortarlas.",
      tip: "Cuando el texto muestra acumulación de efectos, no te quedes con el primero que aparece.",
      topics: ["causeEffect"],
    },
    {
      id: "per9-q5",
      prompt: "¿Qué quieren decir los urbanistas al hablar de 'infraestructura íntima'?",
      options: [
        "Los grandes servicios públicos de toda la ciudad",
        "Las condiciones concretas dentro de la vivienda que amplifican o reducen desventajas",
        "La decoración personal de cada hogar",
        "La vida privada sin relación con problemas sociales",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto aclara que no se trata solo del barrio, sino de las condiciones dentro de la vivienda. Esa dimensión interior es la que se nombra como 'infraestructura íntima'.",
      tip: "Si el texto define una expresión nueva, buscá la opción que conserve esa definición y no una asociación libre.",
      topics: ["vocabulary", "details"],
    },
    {
      id: "per9-q6",
      prompt: "¿Por qué el texto habla de 'desigualdades silenciosas'?",
      options: [
        "Porque no producen efectos concretos en la vida diaria",
        "Porque son difíciles de advertir desde afuera, aunque afectan de forma directa la experiencia cotidiana",
        "Porque solo aparecen en barrios muy ricos",
        "Porque se relacionan exclusivamente con el ruido urbano",
      ],
      correctOptionIndex: 1,
      explanation:
        "La última oración aclara el sentido de 'silenciosas': no siempre se ven externamente, pero inciden directamente en la vida de millones de personas. Esa es la conclusión conceptual del texto.",
      tip: "Cuando el propio texto explica una expresión del título o del cierre, conviene tomar esa definición como guía.",
      topics: ["conclusion", "vocabulary"],
    },
  ],
  PER10: [
    {
      id: "per10-q1",
      prompt: "¿Cuál es la tesis principal del texto?",
      options: [
        "La inestabilidad económica solo provoca una baja pasajera del consumo",
        "En América Latina se observa una transformación estructural en la lógica del consumo bajo incertidumbre persistente",
        "El consumo depende exclusivamente del ingreso disponible, como siempre",
        "Las marcas dejaron de influir por completo en las decisiones",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto insiste en que no se trata solo de una reacción inmediata o coyuntural, sino de una reconfiguración más profunda de las decisiones económicas cotidianas. Esa es la tesis que reaparece en el cierre.",
      tip: "En textos argumentativos largos, la tesis suele formularse al inicio y reaparecer al final con otras palabras.",
      topics: ["mainIdea", "conclusion"],
    },
    {
      id: "per10-q2",
      prompt: "¿Qué significa la 'fragmentación del consumo' en este texto?",
      options: [
        "Comprar productos de distintas marcas al mismo tiempo",
        "Dividir las compras en instancias más pequeñas y frecuentes para ajustar decisiones frente a cambios de precios",
        "Eliminar toda planificación de compra",
        "Consumir solo bienes esenciales",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto define ese fenómeno como el paso de compras integrales a decisiones más fragmentadas y repetidas. La finalidad es ganar flexibilidad ante variaciones de precios casi en tiempo real.",
      tip: "Si el texto introduce un concepto técnico propio, buscá primero dónde lo define antes de interpretarlo.",
      topics: ["details", "vocabulary"],
    },
    {
      id: "per10-q3",
      prompt: "¿Qué costo menciona el texto como contracara de esa mayor flexibilidad?",
      options: [
        "La desaparición de toda capacidad de adaptación",
        "La pérdida de economías de escala y más tiempo dedicado a decidir",
        "La recuperación de la lealtad a las marcas",
        "La simplificación de la gestión de inventarios para los comercios",
        "Todas las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto dice que fragmentar las compras permite ajustarse mejor, pero también hace perder economías de escala y exige más tiempo de decisión. Las otras opciones contradicen lo planteado.",
      tip: "Muchos textos complejos presentan ventajas y costos juntos; no te quedes solo con una mitad del argumento.",
      topics: ["causeEffect"],
    },
    {
      id: "per10-q4",
      prompt: "¿Qué efecto sistémico produce la fragmentación del consumo sobre los comercios y el abastecimiento?",
      options: [
        "Vuelve más simple prever la demanda",
        "Genera mayor complejidad en inventarios y obliga a adaptarse a una demanda más volátil",
        "Elimina la necesidad de planificar",
        "Hace que todos los comercios vendan menos del mismo modo",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto muestra que cambios individuales pueden escalar a problemas de inventario y previsión de demanda. Esa es la dimensión sistémica del fenómeno.",
      tip: "Cuando un texto pasa del individuo al sistema, seguí cómo una conducta micro produce efectos macro.",
      topics: ["causeEffect", "structure"],
    },
    {
      id: "per10-q5",
      prompt: "¿Por qué el texto afirma que los indicadores cuantitativos por sí solos son insuficientes?",
      options: [
        "Porque ya no existen datos sobre gasto y precios",
        "Porque para entender las decisiones también hay que considerar incertidumbre percibida, confianza y expectativas",
        "Porque las personas consumen sin pensar",
        "Porque el comportamiento económico dejó de tener componentes subjetivos",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto sostiene que variables como gasto y precios no alcanzan si no se incorporan dimensiones subjetivas. La percepción del riesgo y las expectativas futuras condicionan la conducta.",
      tip: "En textos analíticos, fijate cuándo el autor dice que un enfoque 'resulta insuficiente': ahí suele abrir el criterio más completo.",
      topics: ["inference", "structure"],
    },
    {
      id: "per10-q6",
      prompt: "¿Qué posición adopta el texto sobre la reversibilidad de estos cambios?",
      options: [
        "Sostiene que desaparecerán por completo con una mejora económica",
        "Afirma que ya son totalmente irreversibles en todos los casos",
        "Plantea que, aunque algunas presiones podrían disminuir, muchos hábitos pueden persistir por las huellas duraderas de la inestabilidad",
        "Niega que la experiencia económica influya en hábitos futuros",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto deja abierta la reversibilidad parcial, pero subraya que la experiencia prolongada de inestabilidad puede consolidar hábitos duraderos. Por eso evita tanto el 'todo desaparece' como el 'nada cambia'.",
      tip: "Si el autor deja una pregunta abierta, desconfiá de respuestas absolutas.",
      topics: ["conclusion", "inference"],
    },
  ],
  EDU1: [
    {
      id: "edu1-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Aprender consiste sobre todo en repetir información con precisión.",
        "La educación debería centrarse solo en ejercitar la memoria.",
        "Aprender de verdad implica pasar de la repetición a la comprensión.",
        "Comprender y memorizar son exactamente lo mismo.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto distingue entre recordar y comprender, y concluye que aprender de verdad supone ir más allá de la repetición. La memoria importa, pero no agota el aprendizaje.",
      tip: "Buscá la frase final cuando el texto cierra con una síntesis clara.",
      topics: ["mainIdea"],
    },
    {
      id: "edu1-q2",
      prompt: "Según el texto, ¿qué puede hacer una persona que realmente comprende un tema?",
      options: [
        "Repetir las palabras exactas con las que estudió.",
        "Explicarlo con sus propias palabras y usarlo en situaciones nuevas.",
        "Recordar datos aislados sin relacionarlos.",
        "Evitar vincularlo con otros conocimientos.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo afirma que comprender permite explicar, relacionar y aplicar lo aprendido en contextos nuevos. Eso diferencia la comprensión de la mera memorización.",
      tip: "Cuando el texto enumera capacidades, la respuesta correcta suele reunir varias de ellas sin alterar el sentido.",
      topics: ["details"],
    },
    {
      id: "edu1-q3",
      prompt: "¿Por qué el texto dice que la memoria sigue siendo importante?",
      options: [
        "Porque permite evitar toda interpretación.",
        "Porque reemplaza la necesidad de comprender.",
        "Porque recordar información básica es necesario para pensar con más profundidad.",
        "Porque garantiza usar lo aprendido de manera flexible.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto no desprecia la memoria: señala que hace falta recordar información básica para poder profundizar. Lo que rechaza es detener la educación solo en ese nivel.",
      tip: "No confundas una condición necesaria con el objetivo final del texto.",
      topics: ["causeEffect"],
    },
    {
      id: "edu1-q4",
      prompt: "En la frase “la educación no debería detenerse allí”, ¿a qué se refiere “allí”?",
      options: [
        "A usar lo aprendido de manera flexible.",
        "A repetir información sin comprenderla.",
        "A recordar información básica como único objetivo.",
        "A establecer relaciones entre conocimientos.",
      ],
      correctOptionIndex: 2,
      explanation:
        "“Allí” retoma la idea anterior: recordar información básica. El texto acepta esa base, pero sostiene que la educación no debe quedarse solo en eso.",
      tip: "Para resolver referencias como “allí” o “eso”, mirá la idea inmediata anterior.",
      topics: ["vocabulary", "inference"],
    },
    {
      id: "edu1-q5",
      prompt: "¿Qué función cumplen, según el texto, muchas actividades escolares?",
      options: [
        "Comprobar únicamente si el alumno recuerda datos.",
        "Buscar solo respuestas correctas y rápidas.",
        "Promover que el alumno razone, interprete y establezca relaciones.",
        "Evitar que el estudiante use sus propias palabras.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto dice explícitamente que muchas actividades escolares buscan algo más que respuestas correctas. Su función es impulsar operaciones de comprensión más profundas.",
      tip: "Si te preguntan por la función de una práctica, buscá verbos como “buscar”, “permitir” o “servir para”.",
      topics: ["tools"],
    },
    {
      id: "edu1-q6",
      prompt: "¿Qué conclusión general se desprende del texto?",
      options: [
        "La memoria debe eliminarse de la educación.",
        "La comprensión vale solo cuando no interviene la memoria.",
        "El aprendizaje auténtico integra memoria básica y comprensión flexible.",
        "Lo importante es repetir con exactitud lo estudiado.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto articula ambas ideas: la memoria es necesaria, pero el objetivo educativo es una comprensión que permita usar lo aprendido con flexibilidad. Esa combinación resume su conclusión.",
      tip: "Una buena conclusión integra las partes del texto en lugar de exagerar una sola.",
      topics: ["conclusion"],
    },
  ],
  EDU2: [
    {
      id: "edu2-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Aprender depende solo del esfuerzo individual.",
        "La atención es una condición necesaria para un aprendizaje profundo.",
        "Las distracciones externas son inevitables y no pueden manejarse.",
        "Estudiar mucho tiempo siempre mejora la comprensión.",
      ],
      correctOptionIndex: 1,
      explanation:
        "Desde el inicio, el texto afirma que no basta con estar presente: también hay que prestar atención. Esa idea organiza todo el desarrollo posterior.",
      tip: "La idea principal suele aparecer formulada con claridad en el comienzo y retomarse al final.",
      topics: ["mainIdea"],
    },
    {
      id: "edu2-q2",
      prompt: "Según el texto, muchos problemas de comprensión se deben a:",
      options: [
        "La dificultad inevitable del contenido.",
        "La falta de talento natural para estudiar.",
        "Interrupciones constantes en el foco mental.",
        "La ausencia total de memoria.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El segundo párrafo dice que muchos problemas de comprensión no provienen del contenido mismo, sino de interrupciones constantes de la atención. Es un dato textual.",
      tip: "Prestá atención a los contrastes con “no... sino...”: suelen marcar la respuesta correcta.",
      topics: ["details"],
    },
    {
      id: "edu2-q3",
      prompt: "¿Por qué resulta más difícil estudiar en contextos ruidosos o mientras se revisan mensajes continuamente?",
      options: [
        "Porque la atención puede agotarse y verse afectada por distracciones.",
        "Porque el ruido vuelve falso el contenido del texto.",
        "Porque estudiar exige silencio absoluto en todos los casos.",
        "Porque los mensajes reemplazan por completo a la memoria.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto explica que la atención fluctúa, se agota y se ve afectada por distracciones del entorno. Por eso esos contextos dificultan sostener el foco mental.",
      tip: "Cuando una pregunta pide “por qué”, buscá en el texto relaciones de causa y efecto explícitas.",
      topics: ["causeEffect"],
    },
    {
      id: "edu2-q4",
      prompt: "¿Qué significa en este contexto que la atención “no es infinita”?",
      options: [
        "Que desaparece de inmediato al empezar a estudiar.",
        "Que puede sostenerse sin límites si hay voluntad.",
        "Que tiene límites, se agota y varía con las condiciones.",
        "Que solo existe en personas muy entrenadas.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El propio texto aclara esa idea: la atención se agota, fluctúa y puede verse afectada por cansancio, estrés o distracciones. No se trata de una capacidad ilimitada.",
      tip: "Una expresión abstracta suele explicarse por las frases que vienen justo después.",
      topics: ["vocabulary"],
    },
    {
      id: "edu2-q5",
      prompt: "¿Cuál de estas acciones menciona el texto como ayuda para mejorar la concentración?",
      options: [
        "Revisar mensajes entre cada párrafo.",
        "Reducir estímulos innecesarios y dividir tareas extensas.",
        "Estudiar siempre en medio de varias actividades.",
        "Aumentar la cantidad de distracciones para acostumbrarse.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cuarto párrafo enumera estrategias concretas para entrenar la atención: organizar el tiempo, reducir estímulos innecesarios y dividir tareas largas en partes pequeñas.",
      tip: "En preguntas de detalle, buscá listas o series de acciones nombradas de forma directa.",
      topics: ["details", "tools"],
    },
    {
      id: "edu2-q6",
      prompt: "¿Qué conclusión sostiene el texto sobre el aprendizaje?",
      options: [
        "Aprender requiere esfuerzo, pero también condiciones adecuadas para sostener la atención.",
        "Aprender depende solo del ambiente y no del esfuerzo.",
        "Si una persona está presente, ya está en condiciones de aprender.",
        "La atención no puede mejorarse con ninguna práctica.",
      ],
      correctOptionIndex: 0,
      explanation:
        "La oración final resume la postura del texto: el aprendizaje exige esfuerzo, pero también condiciones que permitan a la mente sostenerse sobre un mismo objeto el tiempo suficiente.",
      tip: "El cierre del texto suele condensar la tesis con menos ejemplos y más síntesis.",
      topics: ["conclusion", "inference"],
    },
  ],
  EDU3: [
    {
      id: "edu3-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Leer bien consiste principalmente en reconocer palabras rápido.",
        "La lectura es una actividad de construcción de sentido, no solo de decodificación.",
        "Los textos sencillos siempre son fáciles de comprender.",
        "La velocidad lectora es el único objetivo de enseñar a leer.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto rechaza la idea de que leer sea solo descifrar palabras y afirma que leer implica construir sentido. Esa oposición organiza todo el desarrollo.",
      tip: "Cuando el texto corrige una creencia inicial, la idea principal suele estar en la reformulación que sigue a “sin embargo”.",
      topics: ["mainIdea"],
    },
    {
      id: "edu3-q2",
      prompt: "Según el texto, ¿qué hace el lector al leer?",
      options: [
        "Recibe el significado de manera automática.",
        "Relaciona palabras, conecta ideas y a veces completa información implícita.",
        "Solo identifica vocabulario conocido.",
        "Evita hacer inferencias para no alterar el texto.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo describe la lectura como una actividad activa: el lector relaciona, conecta y completa información que no está del todo explícita.",
      tip: "Si el texto enumera procesos, la opción correcta suele conservar esa secuencia de acciones.",
      topics: ["details"],
    },
    {
      id: "edu3-q3",
      prompt: "¿Por qué dos textos con palabras sencillas pueden diferir mucho en dificultad?",
      options: [
        "Porque la longitud siempre define por sí sola la complejidad.",
        "Porque uno puede tener ideas abstractas, relaciones implícitas o estructura poco clara.",
        "Porque las palabras sencillas impiden toda comprensión profunda.",
        "Porque cualquier texto simple exige el mismo esfuerzo.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto aclara que la dificultad no depende solo del vocabulario. También influyen la abstracción de las ideas, las relaciones implícitas y la estructura.",
      tip: "No reduzcas una explicación a un único factor si el texto menciona varios.",
      topics: ["causeEffect"],
    },
    {
      id: "edu3-q4",
      prompt: "¿Qué implica que el lector deba “completar información que el texto no dice de forma explícita”?",
      options: [
        "Inventar libremente cualquier significado posible.",
        "Inferir de manera razonable a partir de pistas del texto.",
        "Ignorar lo escrito y apoyarse solo en opiniones previas.",
        "Memorizar palabras sin relacionarlas.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto no autoriza a inventar, sino a inferir a partir de conexiones y referencias presentes. Se trata de una participación activa, pero guiada por el propio texto.",
      tip: "Inferir no es agregar cualquier cosa: siempre debe haber apoyo textual.",
      topics: ["inference"],
    },
    {
      id: "edu3-q5",
      prompt: "¿Qué papel cumplen los conocimientos previos en la comprensión?",
      options: [
        "No influyen si el lector lee con atención.",
        "Dificultan siempre la interpretación de referencias.",
        "Ayudan a interpretar referencias e inferir significados con mayor facilidad.",
        "Reemplazan por completo el contenido del texto.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El tercer párrafo afirma que cuanto más sabe una persona sobre un tema, más fácilmente puede interpretar ciertas referencias o inferir significados.",
      tip: "Cuando el texto compara “cuanto más..., más...”, está marcando una relación clara entre dos variables.",
      topics: ["causeEffect"],
    },
    {
      id: "edu3-q6",
      prompt: "Según el texto, enseñar a leer no debería reducirse a mejorar la velocidad porque también hay que:",
      options: [
        "Evitar distinguir entre ideas principales y ejemplos.",
        "Enseñar a identificar ideas principales, distinguir ejemplos de argumentos y detectar supuestos.",
        "Reemplazar la comprensión por ejercicios de dicción.",
        "Limitarse a reconocer palabras frecuentes.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El último párrafo expande qué implica enseñar a leer: no solo aumentar la velocidad, sino trabajar la comprensión profunda y la estructura de lo leído.",
      tip: "Las frases finales suelen traducir la tesis general en tareas concretas.",
      topics: ["conclusion", "structure"],
    },
  ],
  EDU4: [
    {
      id: "edu4-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Pensar críticamente equivale a desconfiar de todo.",
        "El pensamiento crítico consiste en evaluar razones con cuidado, no en negar por sistema.",
        "La mejor forma de aprender es rechazar toda autoridad.",
        "Pensar críticamente significa adoptar una actitud de oposición permanente.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto discute una idea incompleta del pensamiento crítico y la reemplaza por otra más precisa: examinar razones, pruebas y supuestos antes de aceptar una afirmación.",
      tip: "Si el texto corrige un malentendido, la tesis suele estar en la definición alternativa.",
      topics: ["mainIdea"],
    },
    {
      id: "edu4-q2",
      prompt: "Según el texto, pensar críticamente consiste en:",
      options: [
        "Dudar de todo sin excepciones.",
        "Negar cualquier afirmación proveniente de una autoridad.",
        "Evaluar razones, revisar supuestos y analizar la solidez de una afirmación.",
        "Aceptar solo aquello que coincide con la primera impresión.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El segundo párrafo define de forma directa qué es pensar críticamente. La respuesta correcta retoma esa formulación casi literalmente.",
      tip: "En preguntas definicionales, buscá verbos como “consiste en” o “significa”.",
      topics: ["details"],
    },
    {
      id: "edu4-q3",
      prompt: "¿Qué función cumplen las preguntas del tercer párrafo?",
      options: [
        "Destruir el conocimiento para impedir conclusiones.",
        "Guiar un examen más riguroso de la información y sus supuestos.",
        "Demostrar que toda información es falsa.",
        "Reemplazar la necesidad de pruebas.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto aclara que esas preguntas no destruyen el conocimiento; ayudan a construirlo con mayor rigor. Funcionan como herramientas de análisis.",
      tip: "Cuando el autor enumera preguntas, fijate para qué dice que sirven, no solo cuáles son.",
      topics: ["tools"],
    },
    {
      id: "edu4-q4",
      prompt: "¿Cuál de estas disposiciones intelectuales menciona el texto como necesaria para el pensamiento crítico?",
      options: [
        "Impaciencia para responder rápido.",
        "Seguridad absoluta en la propia opinión.",
        "Paciencia, humildad y apertura a otros puntos de vista.",
        "Desconfianza automática hacia cualquier argumento.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El cuarto párrafo enumera esas tres disposiciones: paciencia, humildad y apertura. Son condiciones de actitud, no técnicas aisladas.",
      tip: "No confundas firmeza intelectual con cerrazón mental: el texto las separa claramente.",
      topics: ["details"],
    },
    {
      id: "edu4-q5",
      prompt: "¿Qué idea equivocada rechaza el texto?",
      options: [
        "Que pensar críticamente sea solo una forma cuidadosa de examinar razones.",
        "Que pensar críticamente signifique rechazar todo de manera permanente.",
        "Que pensar críticamente requiera revisar supuestos.",
        "Que las preguntas ayuden a construir conocimiento.",
      ],
      correctOptionIndex: 1,
      explanation:
        "Desde el primer párrafo, el texto cuestiona la idea de que pensar críticamente sea “dudar de todo” o rechazar por sistema. Esa es la noción que busca corregir.",
      tip: "Detectá si el autor presenta una postura para defenderla o para criticarla.",
      topics: ["inference"],
    },
    {
      id: "edu4-q6",
      prompt: "En el ámbito educativo, fomentar el pensamiento crítico significa:",
      options: [
        "Enseñar a los estudiantes a oponerse a toda autoridad.",
        "Lograr que los estudiantes nunca se equivoquen.",
        "Enseñar a justificar los juicios de forma razonada.",
        "Sustituir el conocimiento por actitudes de sospecha.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El último párrafo formula la consecuencia educativa central: no se trata de oponerse a toda autoridad, sino de poder justificar razonadamente los propios juicios.",
      tip: "Las aplicaciones educativas suelen aparecer al final como consecuencia práctica de la tesis.",
      topics: ["conclusion"],
    },
  ],
  EDU5: [
    {
      id: "edu5-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Responder bien siempre es más importante que preguntar.",
        "Formular buenas preguntas es una parte central del aprendizaje.",
        "Las preguntas amplias son siempre las mejores.",
        "La enseñanza debería evitar las preguntas para ganar tiempo.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto sostiene que formular buenas preguntas puede ser tan importante como dar buenas respuestas. A partir de allí explica por qué preguntar orienta y organiza el aprendizaje.",
      tip: "La idea principal suele reunir la valoración central que el texto defiende.",
      topics: ["mainIdea"],
    },
    {
      id: "edu5-q2",
      prompt: "Según el texto, no todas las preguntas cumplen la misma función porque algunas:",
      options: [
        "Buscan datos y otras exploran causas, comparaciones o consecuencias.",
        "Sirven solo para demostrar que falta información.",
        "Se usan únicamente en ciencias y no en educación.",
        "Impidan delimitar el problema.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo distingue varias funciones posibles: buscar datos, explorar causas, comparaciones o consecuencias, revisar supuestos y detectar vacíos.",
      tip: "Cuando el texto clasifica algo, la respuesta correcta suele respetar esa variedad y no reducirla.",
      topics: ["details", "structure"],
    },
    {
      id: "edu5-q3",
      prompt: "¿Por qué las preguntas demasiado generales pueden dificultar la investigación?",
      options: [
        "Porque vuelven innecesaria la búsqueda de información.",
        "Porque impiden avanzar con claridad sobre un aspecto delimitado.",
        "Porque siempre carecen de interés pedagógico.",
        "Porque solo sirven para recordar datos aislados.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cuarto párrafo señala que las preguntas demasiado generales dificultan la investigación, mientras que las mejor acotadas permiten avanzar con mayor claridad.",
      tip: "Prestá atención a los contrastes entre una forma deficiente y una forma más adecuada.",
      topics: ["causeEffect"],
    },
    {
      id: "edu5-q4",
      prompt: "En este texto, “delimitar el problema” significa principalmente:",
      options: [
        "Hacerlo más amplio para incluir cualquier tema posible.",
        "Definir con más precisión qué aspecto se quiere comprender.",
        "Evitar toda búsqueda de información adicional.",
        "Transformar una pregunta en una respuesta inmediata.",
      ],
      correctOptionIndex: 1,
      explanation:
        "La idea aparece ligada a orientar la atención y precisar qué aspecto se quiere entender. Delimitar no es agrandar el problema, sino acotarlo mejor.",
      tip: "Si una expresión es abstracta, buscá cómo el texto la concreta en acciones cercanas.",
      topics: ["vocabulary"],
    },
    {
      id: "edu5-q5",
      prompt: "¿Qué función cumple una pregunta bien planteada, según el texto?",
      options: [
        "Orienta la atención, organiza la búsqueda y delimita el problema.",
        "Garantiza por sí sola una respuesta correcta.",
        "Reemplaza la necesidad de investigar.",
        "Evita revisar supuestos propios.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El primer párrafo enumera esas tres funciones de una buena pregunta. La respuesta correcta reúne exactamente esos efectos.",
      tip: "Si varias acciones aparecen juntas en el texto, verificá si la opción correcta las conserva completas.",
      topics: ["tools"],
    },
    {
      id: "edu5-q6",
      prompt: "¿Qué conclusión propone el texto sobre enseñar a preguntar?",
      options: [
        "Es un complemento menor frente a la enseñanza de respuestas.",
        "Es una forma de desarrollar autonomía intelectual.",
        "Solo sirve en niveles avanzados de estudio.",
        "Debe evitarse para no complicar la enseñanza.",
      ],
      correctOptionIndex: 1,
      explanation:
        "La última oración afirma que enseñar a preguntar no es algo secundario, sino un modo de desarrollar autonomía intelectual. Esa es la conclusión del texto.",
      tip: "No pases por alto expresiones valorativas como “no es un complemento menor”: suelen marcar la conclusión.",
      topics: ["conclusion"],
    },
  ],
  EDU6: [
    {
      id: "edu6-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "La comprensión depende solo de la calidad de la explicación.",
        "Los conocimientos previos influyen fuertemente en cómo se comprende lo nuevo.",
        "Todos entienden del mismo modo si reciben la misma información.",
        "Aprender exige partir de una mente completamente vacía.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto afirma que la comprensión no depende únicamente de lo que se enseña, sino también de los conocimientos previos del aprendiz. Esa idea organiza todo el desarrollo.",
      tip: "Cuando el autor contrapone “no solo... también...”, suele estar afinando la tesis principal.",
      topics: ["mainIdea"],
    },
    {
      id: "edu6-q2",
      prompt: "¿Qué permite la “red de apoyo” formada por los conocimientos previos?",
      options: [
        "Ubicar nuevas ideas, establecer relaciones y completar información.",
        "Evitar toda necesidad de explicación nueva.",
        "Recordar sin comprender.",
        "Interpretar cualquier concepto de la misma manera.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo explica esa metáfora: los conocimientos previos ayudan a ubicar ideas nuevas, relacionarlas y completar lo que el material no desarrolla del todo.",
      tip: "Las metáforas del texto suelen explicarse enseguida con verbos concretos.",
      topics: ["details"],
    },
    {
      id: "edu6-q3",
      prompt: "¿Por qué dos personas pueden comprender de manera muy distinta una misma información?",
      options: [
        "Porque una de ellas siempre memoriza peor.",
        "Porque sus conocimientos previos pueden ser diferentes.",
        "Porque el contenido cambia según quién lo lea.",
        "Porque la comprensión nunca depende del aprendiz.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto dice explícitamente que dos personas pueden recibir exactamente la misma información y comprenderla de modo distinto por sus saberes previos.",
      tip: "Si una explicación remite a diferencias entre personas, revisá qué variable previa menciona el texto.",
      topics: ["causeEffect"],
    },
    {
      id: "edu6-q4",
      prompt: "¿Cuándo pueden los conocimientos previos obstaculizar el aprendizaje?",
      options: [
        "Cuando siempre se activan antes de estudiar.",
        "Cuando una idea previa inadecuada se usa para interpretar un concepto nuevo.",
        "Cuando permiten establecer relaciones entre ideas.",
        "Cuando el contenido parece claro.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cuarto párrafo señala que los conocimientos previos pueden perjudicar si llevan a interpretar algo nuevo desde una idea previa incorrecta. En ese caso hay que revisar lo ya creído.",
      tip: "No supongas que un factor presentado como útil lo es siempre: el texto puede introducir excepciones.",
      topics: ["details", "inference"],
    },
    {
      id: "edu6-q5",
      prompt: "Según el texto, enseñar no consiste solo en transmitir datos nuevos, sino también en:",
      options: [
        "Evitar toda referencia a saberes anteriores.",
        "Activar saberes previos, detectar errores y construir puentes con lo desconocido.",
        "Ignorar interpretaciones equivocadas para no confundir.",
        "Partir de que todos comprenden igual.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El tercer párrafo enumera esas tareas docentes como parte de una enseñanza más eficaz. No basta con agregar datos nuevos sobre una mente supuestamente vacía.",
      tip: "Cuando una pregunta empieza con “no solo..., sino también...”, buscá la ampliación que propone el texto.",
      topics: ["tools", "structure"],
    },
    {
      id: "edu6-q6",
      prompt: "¿Qué conclusión general sostiene el texto sobre el punto de partida de la enseñanza?",
      options: [
        "Debe partir de una mente vacía para evitar interferencias.",
        "Debe apoyarse en una mente que ya contiene esquemas, expectativas e interpretaciones.",
        "Debe centrarse exclusivamente en corregir errores previos.",
        "Debe prescindir de los conocimientos anteriores del estudiante.",
      ],
      correctOptionIndex: 1,
      explanation:
        "La última oración resume la tesis: la enseñanza eficaz no parte de una mente vacía, sino de una que ya posee esquemas e interpretaciones previas.",
      tip: "El cierre suele reformular la tesis inicial con una imagen más memorable.",
      topics: ["conclusion"],
    },
  ],
  EDU7: [
    {
      id: "edu7-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Los sesgos cognitivos muestran que pensar es inútil.",
        "Los sesgos cognitivos son errores sistemáticos del pensamiento y conviene reconocerlos.",
        "La mente humana procesa toda información de manera neutral.",
        "Los sesgos pueden eliminarse por completo con entrenamiento.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto define los sesgos cognitivos, explica por qué importan y concluye que pensar mejor implica reconocer cuándo influyen en nuestros juicios.",
      tip: "Si el título nombra un concepto y pregunta por qué importa, la idea principal suele combinar definición y relevancia.",
      topics: ["mainIdea"],
    },
    {
      id: "edu7-q2",
      prompt: "Según el texto, ¿qué son los sesgos cognitivos?",
      options: [
        "Errores aislados y totalmente impredecibles.",
        "Tendencias relativamente predecibles en cómo percibimos, recordamos o evaluamos información.",
        "Pruebas de que el razonamiento humano es siempre irracional.",
        "Formas de razonamiento completamente neutrales.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo distingue los sesgos de simples equivocaciones aisladas y los describe como tendencias predecibles en el procesamiento de la información.",
      tip: "En definiciones, prestá atención a cómo el texto diferencia un concepto de otros parecidos.",
      topics: ["details"],
    },
    {
      id: "edu7-q3",
      prompt: "¿Qué ejemplo usa el texto para ilustrar el sesgo de confirmación?",
      options: [
        "Recordar mejor los datos aleatorios.",
        "Atender más a los datos que confirman una opinión previa e ignorar los que la contradicen.",
        "Cambiar rápidamente de opinión ante cualquier evidencia.",
        "Buscar siempre interpretaciones opuestas a la propia.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto presenta ese ejemplo de manera literal al explicar el sesgo de confirmación. La respuesta correcta recupera exactamente ese caso.",
      tip: "Los ejemplos concretos suelen aparecer para volver más clara una definición abstracta.",
      topics: ["details"],
    },
    {
      id: "edu7-q4",
      prompt: "¿Por qué, según el texto, es útil comprender los límites de nuestra manera de pensar?",
      options: [
        "Porque así se elimina por completo la posibilidad de error.",
        "Porque permite analizar con más cuidado nuestras decisiones.",
        "Porque demuestra que toda intuición es falsa.",
        "Porque evita revisar el propio razonamiento.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El tercer párrafo afirma que conocer esos límites ayuda a examinar mejor nuestras decisiones. No promete eliminar todos los errores.",
      tip: "No exageres una ventaja moderada hasta convertirla en una solución total.",
      topics: ["causeEffect"],
    },
    {
      id: "edu7-q5",
      prompt: "En este texto, los “atajos mentales” son:",
      options: [
        "Métodos siempre correctos para razonar mejor.",
        "Procesos que permiten decidir más rápido, aunque pueden introducir errores sistemáticos.",
        "Estrategias pedagógicas para memorizar sin pensar.",
        "Pruebas de que el pensamiento humano carece de toda lógica.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El primer párrafo explica que esos atajos aceleran decisiones, pero también pueden producir errores recurrentes. Esa doble cara es central para entender el concepto.",
      tip: "Cuando el texto presenta una ventaja y una desventaja, evitá opciones que conserven solo una mitad.",
      topics: ["vocabulary"],
    },
    {
      id: "edu7-q6",
      prompt: "¿Qué conclusión propone el texto sobre pensar mejor?",
      options: [
        "Consiste en eliminar completamente los sesgos.",
        "Consiste en confiar solo en lo que parece intuitivo.",
        "Consiste en reconocer cuándo los sesgos pueden estar influyendo en nuestros juicios.",
        "Consiste en dejar de tomar decisiones rápidas en cualquier caso.",
      ],
      correctOptionIndex: 2,
      explanation:
        "La última oración dice que pensar mejor no es eliminar por completo los sesgos, algo probablemente imposible, sino advertir cuándo afectan nuestros juicios.",
      tip: "La conclusión correcta suele corregir una expectativa extrema con una formulación más realista.",
      topics: ["conclusion", "inference"],
    },
  ],
  EDU8: [
    {
      id: "edu8-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Explicar, comprender e interpretar son operaciones idénticas.",
        "Cada objeto de conocimiento exige solo una única operación intelectual.",
        "Explicar, comprender e interpretar se relacionan, pero no significan lo mismo.",
        "La interpretación es siempre superior a la explicación.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto parte de una confusión frecuente y la corrige: esas tres operaciones pueden vincularse, pero deben distinguirse conceptualmente.",
      tip: "Si el texto compara varios conceptos, la idea principal suele estar en la distinción entre ellos.",
      topics: ["mainIdea"],
    },
    {
      id: "edu8-q2",
      prompt: "¿Cuál de estas asociaciones coincide con el texto?",
      options: [
        "Fenómeno físico - interpretación; obra literaria - explicación.",
        "Fenómeno físico - explicación; obra literaria - interpretación.",
        "Norma social - explicación exclusiva; obra literaria - comprensión exclusiva.",
        "Toda situación exige exactamente la misma operación.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El tercer párrafo ofrece esos ejemplos: un fenómeno físico suele requerir explicación y una obra literaria admite interpretación. Son ejemplos de aproximaciones predominantes.",
      tip: "En preguntas de emparejamiento, revisá si la relación aparece nombrada de forma directa en el texto.",
      topics: ["details"],
    },
    {
      id: "edu8-q3",
      prompt: "¿Por qué importa distinguir entre explicar, comprender e interpretar?",
      options: [
        "Porque así cada campo queda encerrado en una sola operación posible.",
        "Porque no todos los objetos de conocimiento exigen el mismo tipo de aproximación.",
        "Porque permite eliminar toda discusión sobre el sentido.",
        "Porque evita cualquier malentendido entre estudiantes.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto afirma que las diferencias importan precisamente porque distintos objetos de conocimiento reclaman preguntas y enfoques diferentes.",
      tip: "No conviertas una tendencia en una regla absoluta si el texto no lo hace.",
      topics: ["causeEffect"],
    },
    {
      id: "edu8-q4",
      prompt: "Cuando el texto dice que interpretar es proponer “una lectura posible”, sugiere que:",
      options: [
        "Toda interpretación vale lo mismo sin necesidad de razones.",
        "Interpretar implica ofrecer una manera razonada de leer un hecho, texto o acción.",
        "Interpretar equivale a repetir literalmente lo observado.",
        "Solo existe una interpretación válida en cualquier caso.",
      ],
      correctOptionIndex: 1,
      explanation:
        "La idea de “lectura posible” no autoriza cualquier invención. El texto luego habla incluso de “interpretación razonada”, lo que exige justificación.",
      tip: "Palabras como “posible” abren alternativas, pero no eliminan la necesidad de fundamento.",
      topics: ["vocabulary", "inference"],
    },
    {
      id: "edu8-q5",
      prompt: "¿Qué malentendido menciona el texto como efecto de confundir estas operaciones?",
      options: [
        "Creer que algo está comprendido solo porque puede repetirse de memoria.",
        "Pensar que una obra literaria siempre se explica con fórmulas físicas.",
        "Suponer que toda interpretación destruye el conocimiento.",
        "Afirmar que explicar y comprender nunca pueden relacionarse.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El cuarto párrafo dice que, al confundir estas operaciones, a veces se cree haber comprendido algo solo porque se lo puede repetir de memoria.",
      tip: "Los ejemplos de error suelen mostrar qué confusión conceptual quiere evitar el autor.",
      topics: ["details"],
    },
    {
      id: "edu8-q6",
      prompt: "¿Qué aporta, según el texto, distinguir estas formas de trabajo intelectual en educación?",
      options: [
        "Permite precisar qué se espera del estudiante y qué tipo de respuesta tiene sentido.",
        "Vuelve innecesario enseñar contenidos específicos.",
        "Garantiza que cada alumno interprete igual.",
        "Reduce toda evaluación a ejercicios de memoria.",
      ],
      correctOptionIndex: 0,
      explanation:
        "La última oración presenta la consecuencia educativa principal: distinguir esas operaciones ayuda a definir mejor expectativas y respuestas pertinentes.",
      tip: "Las preguntas sobre aportes educativos suelen resolverse mirando la conclusión final del texto.",
      topics: ["conclusion", "structure"],
    },
  ],
  EDU9: [
    {
      id: "edu9-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "La educación debería limitarse a transmitir contenidos.",
        "La autonomía intelectual es un objetivo educativo central.",
        "Ser autónomo significa pensar sin ayuda de nadie.",
        "La abundancia de información vuelve innecesaria la autonomía.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto plantea la pregunta “¿para qué educar?” y responde que una de las mejores razones es desarrollar autonomía intelectual. Todo lo demás desarrolla esa idea.",
      tip: "Si un texto formula una gran pregunta inicial, la respuesta que propone suele ser su tesis central.",
      topics: ["mainIdea"],
    },
    {
      id: "edu9-q2",
      prompt: "Según el texto, ser intelectualmente autónomo no significa:",
      options: [
        "Examinar razones y ponderar evidencias.",
        "Formar juicios propios sin depender por completo de otros.",
        "Pensar aislado de los demás o rechazar toda autoridad.",
        "Disponer de recursos para revisar errores.",
      ],
      correctOptionIndex: 2,
      explanation:
        "El segundo párrafo aclara explícitamente esa falsa interpretación. La autonomía no implica aislamiento ni rechazo automático de toda autoridad.",
      tip: "En preguntas con negación, descartá primero lo que el texto sí presenta como rasgo positivo.",
      topics: ["details"],
    },
    {
      id: "edu9-q3",
      prompt: "¿Por qué el texto dice que la autonomía intelectual no surge de manera espontánea?",
      options: [
        "Porque depende de práctica, lenguaje, información y tiempo.",
        "Porque solo aparece cuando una persona deja de escuchar a los demás.",
        "Porque es innata y no puede enseñarse.",
        "Porque exige tener siempre la razón.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo afirma que esta capacidad requiere práctica, lenguaje, información y tiempo. Por eso no aparece sola ni de inmediato.",
      tip: "Si el texto enumera condiciones de desarrollo, esas condiciones suelen explicar el “por qué”.",
      topics: ["causeEffect"],
    },
    {
      id: "edu9-q4",
      prompt: "¿Qué puede inferirse del texto sobre una persona intelectualmente autónoma?",
      options: [
        "Nunca se equivoca al juzgar una situación.",
        "Puede errar, pero cuenta con recursos para revisar y corregirse.",
        "Debe sostener su opinión aunque la evidencia cambie.",
        "Necesita prescindir totalmente de la información ajena.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El tercer párrafo aclara que la autonomía no equivale a infalibilidad. Una persona autónoma puede equivocarse, pero puede revisar y corregir sus errores.",
      tip: "No confundas autonomía con perfección: el texto distingue capacidad de corrección e imposibilidad de error.",
      topics: ["inference"],
    },
    {
      id: "edu9-q5",
      prompt: "¿Qué función cumple la mención a la gran cantidad de información, a veces contradictoria o superficial, en el último párrafo?",
      options: [
        "Mostrar un contexto en el que la autonomía intelectual se vuelve aún más necesaria.",
        "Demostrar que conviene dejar de atender a lo que otros dicen.",
        "Negar la importancia de la reflexión en educación.",
        "Sostener que la autonomía solo sirve fuera del conocimiento.",
      ],
      correctOptionIndex: 0,
      explanation:
        "Ese pasaje sirve para reforzar la relevancia actual de la autonomía intelectual. En un entorno saturado de información, ayuda a relacionarse con lo que otros dicen de forma más reflexiva.",
      tip: "Un ejemplo de contexto suele cumplir la función de intensificar o justificar la tesis general.",
      topics: ["tools"],
    },
    {
      id: "edu9-q6",
      prompt: "¿Qué conclusión se desprende del texto sobre la tarea educativa?",
      options: [
        "Debe orientarse a que el estudiante aprenda a orientarse por sí mismo dentro del conocimiento.",
        "Debe reemplazar los saberes por seguridad subjetiva.",
        "Debe formar estudiantes que desconfíen siempre de toda autoridad.",
        "Debe evitar la comparación de enfoques distintos.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto sostiene que enseñar no es solo transmitir saberes, sino crear condiciones para que el estudiante pueda orientarse por sí mismo. Esa es la consecuencia educativa central.",
      tip: "La conclusión correcta suele retomar el objetivo del texto en forma práctica.",
      topics: ["conclusion"],
    },
  ],
  EDU10: [
    {
      id: "edu10-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Comprender un texto complejo depende solo de conocer vocabulario técnico.",
        "La complejidad lectora involucra información, estructura y un trabajo activo de reconstrucción por parte del lector.",
        "La relectura demuestra siempre una falla de comprensión.",
        "Leer bien consiste en extraer frases sueltas del texto.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto amplía la noción de dificultad lectora: no depende solo del vocabulario, sino también de la densidad conceptual, la organización de ideas y la reconstrucción del hilo argumentativo.",
      tip: "En textos largos, la idea principal suele integrar varios factores en vez de quedarse con uno solo.",
      topics: ["mainIdea"],
    },
    {
      id: "edu10-q2",
      prompt: "Según el texto, un texto puede resultar complejo aunque no use vocabulario muy técnico porque también influyen:",
      options: [
        "La densidad conceptual, la organización de las ideas y las relaciones que el lector debe reconstruir.",
        "Solo la cantidad de páginas y el tamaño de la letra.",
        "Exclusivamente los conocimientos previos del autor.",
        "Nada más que la presencia de ejemplos.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El primer párrafo enumera esos factores como fuentes de complejidad. La respuesta correcta mantiene esa combinación sin reducirla.",
      tip: "Cuando el autor enumera causas de un fenómeno, no las reemplaces por una sola variable.",
      topics: ["details"],
    },
    {
      id: "edu10-q3",
      prompt: "¿Por qué el texto afirma que comprender un texto difícil implica una actividad mental acumulativa?",
      options: [
        "Porque las primeras interpretaciones nunca influyen en lo que sigue.",
        "Porque lo entendido al comienzo condiciona lo que puede entenderse después.",
        "Porque basta con entender palabras sueltas para captar el conjunto.",
        "Porque la comprensión debe ser inmediata y total.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El tercer párrafo explica que varias operaciones deben mantenerse coherentes a medida que avanza la lectura. Por eso lo comprendido antes afecta lo que podrá comprenderse después.",
      tip: "Si el texto habla de procesos “acumulativos”, buscá relaciones entre etapas previas y posteriores.",
      topics: ["causeEffect"],
    },
    {
      id: "edu10-q4",
      prompt: "¿Qué papel asigna el texto a la relectura?",
      options: [
        "Es una señal de fracaso que conviene evitar.",
        "Es una estrategia legítima de comprensión en textos exigentes.",
        "Solo sirve para memorizar datos aislados.",
        "Debe reemplazarse por avanzar más rápido.",
      ],
      correctOptionIndex: 1,
      explanation:
        "El quinto párrafo sostiene explícitamente que releer no debe verse como fracaso, sino como una estrategia válida para aclarar ideas y revisar hipótesis de lectura.",
      tip: "No tomes una dificultad como prueba de incapacidad si el texto la presenta como parte normal del proceso.",
      topics: ["tools"],
    },
    {
      id: "edu10-q5",
      prompt: "¿Cuáles son los dos errores frecuentes que el texto recomienda evitar?",
      options: [
        "Reducir el texto a datos aislados y proyectar sobre él ideas externas que no se desprenden de él.",
        "Leer lentamente y marcar conceptos clave.",
        "Usar conocimientos previos y tolerar la incertidumbre.",
        "Releer pasajes difíciles y revisar hipótesis.",
      ],
      correctOptionIndex: 0,
      explanation:
        "El sexto párrafo identifica esos dos errores: confundir comprensión con simple recuerdo de datos y atribuir al texto ideas que nunca sostuvo.",
      tip: "En textos argumentativos, los errores que se deben evitar suelen aparecer anunciados con claridad.",
      topics: ["details", "inference"],
    },
    {
      id: "edu10-q6",
      prompt: "¿Qué conclusión general ofrece el texto sobre comprender un texto complejo?",
      options: [
        "Consiste principalmente en acceder a cierta información literal.",
        "Consiste en reconocer cómo se articula un pensamiento en la escritura y reconstruirlo sin simplificarlo de forma engañosa.",
        "Consiste en resumir cada párrafo por separado sin relacionarlos.",
        "Consiste en aceptar cualquier interpretación creativa del lector.",
      ],
      correctOptionIndex: 1,
      explanation:
        "La oración final resume la tesis del texto: comprender un texto complejo implica reconstruir la articulación del pensamiento escrito, no quedarse con datos sueltos ni deformarlo.",
      tip: "La conclusión más sólida suele retomar el problema inicial y reformularlo con mayor precisión.",
      topics: ["conclusion", "structure"],
    },
  ],
};

module.exports = {
  QUESTION_BANKS,
  TOPIC_LABELS,
};
