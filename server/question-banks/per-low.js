module.exports = {
  PER1: [
    {
      id: "per1-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "Explicar cómo la publicidad define todas las compras diarias",
        "Mostrar que los hábitos de compra cambian por un contexto económico inestable",
        "Describir el funcionamiento de las aplicaciones de precios",
        "Defender que conviene comprar siempre grandes cantidades",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto reúne varios cambios de conducta, pero todos aparecen como respuesta a variaciones de precios e ingresos en un entorno inestable.",
      tip: "Buscá la opción que conecte todos los párrafos, no la que repite un ejemplo aislado.",
      topics: ["mainIdea"],
    },
    {
      id: "per1-q2",
      prompt: "¿Qué comportamiento aparece como más frecuente en los consumidores actuales?",
      options: [
        "Elegir productos por costumbre",
        "Comparar precios antes de decidir",
        "Comprar solo una vez por semana",
        "Ignorar las diferencias entre comercios",
        "A y D",
      ],
      correctOptionIndex: 1,
      explanation:
        "El segundo párrafo dice de forma explícita que hoy es más frecuente revisar distintas opciones antes de comprar.",
      tip: "Cuando el texto dice que algo ocurre con mayor frecuencia, la respuesta suele ser un dato literal.",
      topics: ["details"],
    },
    {
      id: "per1-q3",
      prompt: "¿Para qué sirve comprar menos cantidad pero con mayor frecuencia?",
      options: [
        "Para ahorrar tiempo en cada decisión",
        "Para adaptarse mejor a posibles aumentos de precios",
        "Para evitar comparar precios",
        "Para mantener siempre las mismas costumbres",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto explica que esta estrategia permite reaccionar mejor ante subas de precios, aunque implique ir más seguido al comercio.",
      tip: "En preguntas de finalidad, preguntate qué problema intenta resolver la conducta mencionada.",
      topics: ["causeEffect"],
    },
    {
      id: "per1-q4",
      prompt: "En este texto, ¿qué son las marcas alternativas?",
      options: [
        "Marcas importadas de lujo",
        "Marcas menos habituales que se eligen cuando su precio conviene",
        "Marcas obligatorias en todos los comercios",
        "Marcas que ya no se fabrican",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto presenta a las marcas alternativas como productos antes menos valorados que ahora ganan espacio cuando la diferencia de precio resulta importante.",
      tip: "Para vocabulario en contexto, fijate cómo se relaciona el término con el presupuesto y la decisión de compra.",
      topics: ["vocabulary"],
    },
    {
      id: "per1-q5",
      prompt: "¿Cuál de estas afirmaciones NO queda respaldada por el texto?",
      options: [
        "Hoy es más frecuente revisar distintas opciones antes de comprar",
        "La planificación a largo plazo se vuelve más difícil",
        "Crece el consumo de marcas alternativas cuando la diferencia de precio es significativa",
        "Todos los cambios surgen de una decisión plenamente consciente de los consumidores",
      ],
      correctOptionIndex: 3,
      explanation:
        "El texto aclara desde el inicio que estos cambios no siempre responden a una decisión consciente, sino también a variaciones de precios e ingresos.",
      tip: "En preguntas negativas, descartá primero todo lo que el texto sí afirma de manera directa.",
      topics: ["inference"],
      isTricky: true,
    },
    {
      id: "per1-q6",
      prompt: "¿Qué función cumplen las aplicaciones móviles y los sitios web mencionados?",
      options: [
        "Permiten ver precios en distintos comercios",
        "Garantizan que todos paguen lo mismo",
        "Reemplazan por completo la compra presencial",
        "Aumentan automáticamente los ingresos disponibles",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 0,
      explanation:
        "Esas herramientas aparecen en el texto como apoyo para comparar precios entre comercios, no como solución total del problema económico.",
      tip: "Cuando te pregunten por una herramienta, buscá el uso concreto que el texto le asigna.",
      topics: ["tools"],
    },
    {
      id: "per1-q7",
      prompt: "¿Qué conclusión general se puede extraer del texto?",
      options: [
        "Las personas dejan de consumir por completo",
        "Los consumidores se adaptan gradualmente a un entorno más inestable",
        "Las marcas tradicionales recuperan fuerza en todos los casos",
        "La economía se estabiliza gracias a las compras frecuentes",
      ],
      correctOptionIndex: 1,
      explanation:
        "El cierre resume los cambios como una adaptación gradual de las personas a un entorno económico más inestable.",
      tip: "La conclusión correcta suele recuperar la idea del último párrafo y conectar todo el texto.",
      topics: ["conclusion", "inference"],
    },
  ],
  PER2: [
    {
      id: "per2-q1",
      prompt: "¿Cuál es la idea principal del texto?",
      options: [
        "El celular debería usarse solo para emergencias",
        "El celular ocupa un lugar central y el reto es usarlo sin dependencia",
        "La comunicación presencial ya fue reemplazada por completo",
        "Las redes sociales son el único uso importante del celular",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto muestra que el celular tiene ventajas claras y también costos, por eso la idea central es la necesidad de un uso equilibrado.",
      tip: "La idea principal integra los dos lados del texto: beneficios y problemas.",
      topics: ["mainIdea", "conclusion"],
    },
    {
      id: "per2-q2",
      prompt: "¿Qué hábito cotidiano aparece descrito como muy frecuente?",
      options: [
        "Revisar la pantalla apenas empieza la mañana",
        "Usar el celular solo al final del día",
        "Apagarlo durante viajes y esperas",
        "Evitar mirar mensajes mientras se hacen otras actividades",
      ],
      correctOptionIndex: 0,
      explanation:
        "El segundo párrafo menciona como escena frecuente mirar el celular apenas comienza la mañana y seguir haciéndolo en distintos momentos del día.",
      tip: "Si el texto describe una escena habitual, la respuesta correcta suele repetir ese ejemplo concreto.",
      topics: ["details"],
    },
    {
      id: "per2-q3",
      prompt: "¿Qué función del celular en la organización diaria menciona el texto?",
      options: [
        "Eliminar la necesidad de recordar cualquier tarea",
        "Servir como agenda, alarma o medio de pago",
        "Reemplazar toda planificación personal",
        "Evitar cualquier tipo de ansiedad cotidiana",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto nombra varios usos organizativos del celular, entre ellos agenda, alarma y medio de pago.",
      tip: "Buscá la opción que enumera funciones concretas y no promesas exageradas.",
      topics: ["tools", "details"],
    },
    {
      id: "per2-q4",
      prompt: "Según el texto, ¿por qué el uso constante del celular puede afectar la concentración?",
      options: [
        "Porque obliga a hablar demasiado con otras personas",
        "Porque las notificaciones interrumpen la atención",
        "Porque impide acceder a datos importantes",
        "Porque reemplaza siempre las tareas principales",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto vincula directamente las notificaciones con interrupciones que dificultan sostener la concentración.",
      tip: "En preguntas causales, identificá qué elemento aparece como origen del efecto.",
      topics: ["causeEffect"],
    },
    {
      id: "per2-q5",
      prompt: "¿Qué contraste establece el texto sobre la relación con los demás?",
      options: [
        "Acerca a quienes están lejos, pero puede distraer de quienes están cerca",
        "Aleja por igual a personas cercanas y lejanas",
        "Mejora siempre la convivencia presencial",
        "Solo influye en relaciones laborales",
        "B y D",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto destaca ese doble efecto: facilita el contacto a distancia, pero también puede quitar atención a quienes comparten el mismo espacio.",
      tip: "Prestá atención a los contrastes del tipo acerca, pero también distrae.",
      topics: ["inference", "details"],
    },
    {
      id: "per2-q6",
      prompt: "¿Cómo está organizado el texto?",
      options: [
        "Presenta usos cotidianos, luego ventajas y costos, y cierra con una idea de equilibrio",
        "Solo enumera aplicaciones sin evaluar efectos",
        "Cuenta una anécdota personal y después la contradice",
        "Describe un problema técnico y propone una reparación",
      ],
      correctOptionIndex: 0,
      explanation:
        "Primero se muestra la presencia cotidiana del celular, después sus beneficios y dificultades, y al final se propone un uso no dependiente.",
      tip: "Las preguntas de estructura se responden observando cómo avanza el texto de un bloque al siguiente.",
      topics: ["structure"],
    },
    {
      id: "per2-q7",
      prompt: "En el texto, ¿qué significa la expresión disponibilidad permanente?",
      options: [
        "Que el celular se puede comprar fácilmente",
        "Que está presente y accesible en casi cualquier momento del día",
        "Que funciona sin batería",
        "Que reemplaza cualquier otro objeto tecnológico",
      ],
      correctOptionIndex: 1,
      explanation:
        "La expresión alude a que el celular acompaña casi todos los momentos y está siempre al alcance del usuario.",
      tip: "Para vocabulario en contexto, reemplazá la expresión por una idea equivalente dentro del mismo párrafo.",
      topics: ["vocabulary"],
    },
    {
      id: "per2-q8",
      prompt: "¿Qué implica usar el celular de manera equilibrada, según el cierre?",
      options: [
        "Aprovechar sus beneficios sin depender de él en todo momento",
        "Dejar de usarlo para organizar tareas",
        "Mantenerlo siempre apagado durante el día",
        "Usarlo solo para trabajar o estudiar",
        "Todas las anteriores",
      ],
      correctOptionIndex: 0,
      explanation:
        "El último párrafo no propone abandonar el celular, sino evitar que ocupe un lugar excesivo mientras se conservan sus ventajas.",
      tip: "Si el cierre evita extremos, descartá las opciones que plantean prohibiciones totales.",
      topics: ["conclusion", "vocabulary"],
    },
    {
      id: "per2-q9",
      prompt: "Según el texto, ¿dónde está el problema principal?",
      options: [
        "En el celular mismo, porque su mera existencia genera daño",
        "En la forma de uso, cuando ocupa un lugar excesivo",
        "En la imposibilidad de comunicarse por otros medios",
        "En que no sirve para resolver problemas cotidianos",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto dice explícitamente que el problema no parece ser el celular en sí mismo, sino el modo en que se lo usa.",
      tip: "Cuidado con las opciones absolutas: el texto critica un uso excesivo, no el objeto por sí solo.",
      topics: ["inference", "conclusion"],
      isTricky: true,
    },
    {
      id: "per2-q10",
      prompt: "¿Qué ventaja concreta del celular aparece mencionada en el texto?",
      options: [
        "Reemplazar todas las conversaciones presenciales",
        "Eliminar cualquier distracción diaria",
        "Consultar datos importantes y ubicarse en la ciudad con rapidez",
        "Evitar por completo la necesidad de organizar el día",
      ],
      correctOptionIndex: 2,
      explanation:
        "Entre las ventajas señaladas están resolver problemas con rapidez, consultar información útil y ubicarse en la ciudad.",
      tip: "Buscá una opción que reúna ejemplos reales del texto y no efectos exagerados.",
      topics: ["details"],
    },
  ],
  PER3: [
    {
      id: "per3-q1",
      prompt: "¿Cuál es el foco principal del texto?",
      options: [
        "Sostener que toda oficina debería desaparecer",
        "Analizar ventajas, límites y efectos urbanos del trabajo remoto",
        "Demostrar que el trabajo remoto siempre mejora la productividad",
        "Explicar que la distancia impide cualquier coordinación",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto no defiende una posición extrema: examina beneficios, condiciones necesarias, dificultades de comunicación y cambios en la ciudad.",
      tip: "La idea principal debe abarcar tanto los efectos sobre las personas como sobre el entorno urbano.",
      topics: ["mainIdea"],
    },
    {
      id: "per3-q2",
      prompt: "¿Qué beneficio del trabajo remoto aparece como especialmente valorado?",
      options: [
        "La reducción del tiempo de traslado",
        "La eliminación de toda reunión laboral",
        "El aumento automático del salario",
        "La desaparición de los horarios",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto destaca que evitar viajes largos libera tiempo para descansar, atender asuntos personales o reorganizar la jornada.",
      tip: "Cuando el texto usa expresiones como más valorado, la respuesta suele ser un dato directo.",
      topics: ["details"],
    },
    {
      id: "per3-q3",
      prompt: "¿Qué puede hacer una persona con el tiempo que ya no dedica al traslado, según el texto?",
      options: [
        "Trabajar más horas sin descanso",
        "Evitar por completo sus obligaciones personales",
        "Descansar, atender asuntos personales o distribuir mejor la jornada",
        "Abandonar toda rutina fija",
      ],
      correctOptionIndex: 2,
      explanation:
        "El segundo párrafo menciona esas tres posibilidades como efectos positivos de ahorrar tiempo de viaje.",
      tip: "Leé completa la parte donde aparece el beneficio: a veces la respuesta correcta reúne varias acciones del mismo fragmento.",
      topics: ["details"],
    },
    {
      id: "per3-q4",
      prompt: "¿Qué condiciones del hogar presenta el texto como necesarias para que el trabajo remoto funcione mejor?",
      options: [
        "Un espacio adecuado",
        "Buena conexión a internet",
        "Cierta posibilidad de separar el tiempo laboral del personal",
        "Vivir cerca de la oficina",
        "A, B y C",
      ],
      correctOptionIndex: 4,
      explanation:
        "El texto enumera esas tres condiciones como claves para que la experiencia no se vuelva desordenada y agotadora.",
      tip: "Si el texto lista requisitos, revisá si una opción especial reúne exactamente esos elementos.",
      topics: ["details"],
    },
    {
      id: "per3-q5",
      prompt: "¿Qué puede ocurrir cuando faltan esas condiciones?",
      options: [
        "La jornada se vuelve más breve",
        "La jornada se vuelve más desordenada y agotadora",
        "La productividad aumenta de inmediato",
        "La oficina deja de ser necesaria en todos los casos",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto señala de forma explícita que, sin espacio adecuado, conexión y límites claros, trabajar desde casa puede resultar más caótico y cansador.",
      tip: "En relaciones de causa y efecto, buscá qué consecuencia concreta sigue a la falta de condiciones.",
      topics: ["causeEffect"],
    },
    {
      id: "per3-q6",
      prompt: "¿Qué afirmación exagera lo que dice el texto sobre la productividad?",
      options: [
        "Algunas personas se concentran mejor en un ambiente silencioso",
        "La experiencia del trabajo remoto depende de las condiciones de cada hogar",
        "El trabajo remoto aumenta la productividad de todos por igual",
        "La autonomía puede ser una ventaja para ciertos trabajadores",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto evita generalizaciones absolutas: muestra ventajas posibles para algunas personas, no una mejora garantizada para todos.",
      tip: "Desconfiá de las opciones con todos, siempre o por igual cuando el texto usa matices.",
      topics: ["inference"],
      isTricky: true,
    },
    {
      id: "per3-q7",
      prompt: "¿Qué función cumplen las reuniones virtuales en el texto?",
      options: [
        "Sostener el contacto, aunque no reemplazan por completo los intercambios espontáneos",
        "Eliminar toda dificultad de coordinación entre compañeros",
        "Hacer innecesaria la comunicación informal",
        "Resolver mejor que la oficina todos los problemas complejos",
      ],
      correctOptionIndex: 0,
      explanation:
        "Las reuniones virtuales aparecen como un recurso útil para mantener el vínculo laboral, pero con límites frente a la interacción presencial espontánea.",
      tip: "Buscá el uso concreto de la herramienta y no le atribuyas efectos totales que el texto no afirma.",
      topics: ["tools"],
    },
    {
      id: "per3-q8",
      prompt: "¿Qué dos ideas combina el texto al hablar de la comunicación entre compañeros?",
      options: [
        "Las reuniones virtuales sostienen el contacto",
        "La distancia reemplaza por completo los intercambios espontáneos",
        "Algunos equipos encuentran más dificultades para coordinar o resolver problemas complejos",
        "La comunicación laboral deja de ser importante a distancia",
        "A y C",
      ],
      correctOptionIndex: 4,
      explanation:
        "El texto sostiene a la vez que la virtualidad ayuda a mantener el vínculo y que ciertos equipos encuentran límites al coordinar o resolver tareas complejas.",
      tip: "Cuando una opción especial es correcta, verificá que todas las afirmaciones que reúne estén realmente presentes en el texto.",
      topics: ["structure", "inference"],
    },
    {
      id: "per3-q9",
      prompt: "¿Qué efecto del trabajo remoto sobre la ciudad destaca el texto?",
      options: [
        "Aumenta el tránsito hacia las zonas de oficinas",
        "Cambia la actividad en ciertos comercios y transforma algunos espacios urbanos",
        "Hace desaparecer por completo bares y restaurantes",
        "Uniforma el uso de todos los sectores de la ciudad",
      ],
      correctOptionIndex: 1,
      explanation:
        "Si menos personas viajan hacia áreas de oficinas, algunos comercios y espacios urbanos cambian su dinámica habitual.",
      tip: "No confundas un cambio de actividad con una desaparición total.",
      topics: ["details", "causeEffect"],
    },
    {
      id: "per3-q10",
      prompt: "¿Cuál de estas conclusiones NO coincide con el cierre del texto?",
      options: [
        "Es probable que se expandan formatos mixtos",
        "La oficina seguirá teniendo alguna función según la actividad",
        "La modalidad remota reemplazará totalmente a la oficina en todos los casos",
        "Los efectos del trabajo remoto exceden la rutina individual",
      ],
      correctOptionIndex: 2,
      explanation:
        "El cierre propone justamente lo contrario: no una sustitución total, sino combinaciones de presencia y distancia según cada tarea.",
      tip: "Cuando el texto termina con una postura intermedia, descartá las opciones extremas.",
      topics: ["conclusion"],
      isTricky: true,
    },
    {
      id: "per3-q11",
      prompt: "¿Qué significa en el texto la expresión modelos mixtos?",
      options: [
        "Trabajos sin horarios ni objetivos",
        "Formas de organización que combinan presencia y distancia",
        "Empresas que funcionan solo con reuniones virtuales",
        "Ciudades divididas entre oficinas y viviendas",
      ],
      correctOptionIndex: 1,
      explanation:
        "La expresión se refiere a esquemas híbridos donde algunas tareas se hacen presencialmente y otras a distancia.",
      tip: "Para vocabulario en contexto, buscá la definición que recupera la idea explicada justo después del término.",
      topics: ["vocabulary"],
    },
    {
      id: "per3-q12",
      prompt: "¿Qué resume mejor el cierre del texto?",
      options: [
        "Que el trabajo remoto solo importa por el ahorro de tiempo",
        "Que la ciudad ya no necesita zonas de oficinas",
        "Que esta modalidad empuja combinaciones flexibles entre hogar y oficina",
        "Que toda comunicación virtual es insuficiente",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 2,
      explanation:
        "El cierre no elimina la oficina ni idealiza la distancia: plantea una convivencia entre ambas modalidades según la actividad.",
      tip: "La mejor síntesis del cierre suele incluir el matiz final y evitar posiciones tajantes.",
      topics: ["conclusion", "mainIdea"],
    },
  ],
  PER4: [
    {
      id: "per4-q1",
      prompt: "¿Cuál es la idea central del texto?",
      options: [
        "La inflación solo hace subir los precios, sin modificar conductas",
        "La inflación cambia hábitos, prioridades y formas de organizar el consumo",
        "Las promociones resuelven por completo los problemas de compra",
        "Las marcas dejan de importar en cualquier contexto",
        "Ninguna de las anteriores",
      ],
      correctOptionIndex: 1,
      explanation:
        "Desde el comienzo, el texto sostiene que la inflación no solo encarece bienes, sino que transforma la manera de comprar y planificar.",
      tip: "La idea principal debe incluir tanto el efecto económico como el cambio de comportamiento.",
      topics: ["mainIdea"],
    },
    {
      id: "per4-q2",
      prompt: "¿Qué cambio visible en las compras destaca el texto?",
      options: [
        "La revisión constante de precios entre comercios, promociones y marcas",
        "La decisión de comprar sin comparar nada",
        "La vuelta a una fidelidad total hacia las mismas marcas",
        "La desaparición del cálculo antes de consumir",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto presenta la comparación constante de precios como una de las conductas más visibles en contextos inflacionarios.",
      tip: "Buscá la opción que retome la acción concreta que el texto repite en el segundo párrafo.",
      topics: ["details"],
    },
    {
      id: "per4-q3",
      prompt: "¿Por qué esa búsqueda de precios se vuelve necesaria, aunque no siempre produzca un gran ahorro?",
      options: [
        "Porque ayuda a dejar de pensar en el gasto",
        "Porque permite administrar mejor el dinero disponible",
        "Porque garantiza estabilidad a mediano plazo",
        "Porque evita volver a comprar en el futuro",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto aclara que comparar no siempre genera un gran ahorro, pero sí se vuelve una forma de manejar con más cuidado el presupuesto.",
      tip: "No confundas utilidad con resultado perfecto: el texto habla de necesidad, no de garantía.",
      topics: ["causeEffect"],
    },
    {
      id: "per4-q4",
      prompt: "Según el texto, comprar menos volumen y volver con mayor frecuencia permite...",
      options: [
        "Reaccionar frente a aumentos repentinos",
        "Planificar a mediano plazo con total seguridad",
        "Dedicar menos tiempo a decidir",
        "Conservar siempre la misma marca",
        "Todas las anteriores",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto explica que esa conducta permite responder mejor a cambios bruscos de precios, aunque demande más tiempo y atención.",
      tip: "Si una opción especial reúne afirmaciones que contradicen el texto, descartala.",
      topics: ["causeEffect"],
    },
    {
      id: "per4-q5",
      prompt: "¿Qué cambio de enfoque sobre el consumo aparece en el primer párrafo?",
      options: [
        "Consumir pasa a ser una actividad más impulsiva",
        "Consumir deja de guiarse por la costumbre y exige más atención, comparación y cálculo",
        "Consumir se vuelve una acción más simple que antes",
        "Consumir depende solo de la publicidad",
      ],
      correctOptionIndex: 1,
      explanation:
        "El inicio del texto opone la compra por costumbre a una lógica más atenta y calculada propia de la inflación sostenida.",
      tip: "Prestá atención a las oposiciones del primer párrafo: ahí suele definirse el cambio central.",
      topics: ["structure", "mainIdea"],
    },
    {
      id: "per4-q6",
      prompt: "¿Qué ocurre con la relación con las marcas en estos contextos?",
      options: [
        "Se vuelve más estable que antes",
        "El precio gana peso y debilita la fidelidad previa",
        "Las personas dejan de mirar los precios",
        "Solo se eligen marcas conocidas",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto dice que, cuando el precio se vuelve más decisivo, muchas preferencias anteriores pierden fuerza.",
      tip: "Buscá la respuesta que conecte la elección de marcas con el presupuesto.",
      topics: ["details", "inference"],
    },
    {
      id: "per4-q7",
      prompt: "En el texto, ¿qué significa que la fidelidad previa se debilita?",
      options: [
        "Que las personas dejan de comprar cualquier marca",
        "Que aumenta la disposición a cambiar de marca si otra se ajusta mejor al presupuesto",
        "Que solo se eligen productos desconocidos",
        "Que el precio deja de importar",
        "A y C",
      ],
      correctOptionIndex: 1,
      explanation:
        "La idea no es abandonar todas las marcas, sino estar más dispuesto a cambiar cuando otra opción resulta más conveniente.",
      tip: "Para vocabulario en contexto, buscá una reformulación fiel y no una exageración.",
      topics: ["vocabulary"],
    },
    {
      id: "per4-q8",
      prompt: "¿Por qué planificar a mediano plazo se vuelve más difícil?",
      options: [
        "Porque las promociones desaparecen por completo",
        "Porque ya no se comparan precios entre comercios",
        "Porque cualquier variación puede alterar una decisión que parecía razonable",
        "Porque las personas dejan de pensar en el futuro",
      ],
      correctOptionIndex: 2,
      explanation:
        "El texto sostiene que las variaciones constantes vuelven inestable lo que antes parecía una elección conveniente o suficiente.",
      tip: "Buscá la opción que retoma la idea de incertidumbre, no una causa nueva que el texto no menciona.",
      topics: ["inference", "causeEffect"],
    },
    {
      id: "per4-q9",
      prompt: "¿Qué papel cumplen las comparaciones entre comercios, promociones y marcas?",
      options: [
        "Volver innecesaria toda decisión de compra",
        "Ayudar a administrar mejor el dinero disponible",
        "Garantizar siempre el mejor resultado posible",
        "Reemplazar la necesidad de planificar",
      ],
      correctOptionIndex: 1,
      explanation:
        "Comparar aparece como una práctica útil para manejar el presupuesto, aunque el texto aclara que no siempre produce grandes ahorros.",
      tip: "Diferenciá entre lo que ayuda y lo que garantiza: el texto habla de apoyo, no de certeza.",
      topics: ["tools", "details"],
    },
    {
      id: "per4-q10",
      prompt: "¿Qué afirmación NO se ajusta al texto?",
      options: [
        "Comparar precios puede no dar un gran ahorro, pero igual se vuelve necesario",
        "En contextos inflacionarios, muchas compras requieren más cálculo",
        "Hacer compras pequeñas puede demandar más tiempo que antes",
        "Comparar siempre garantiza un ahorro importante",
      ],
      correctOptionIndex: 3,
      explanation:
        "El texto dice justamente lo contrario: la comparación no siempre produce un gran ahorro, aunque siga siendo necesaria.",
      tip: "Cuidado con palabras como siempre o garantiza: suelen deformar el sentido del texto.",
      topics: ["inference"],
      isTricky: true,
    },
    {
      id: "per4-q11",
      prompt: "¿Qué efectos adicionales a la suba de precios destaca el texto?",
      options: [
        "Modifica hábitos de compra",
        "Altera prioridades cotidianas",
        "Transforma la relación con el dinero y la posibilidad de prever el futuro",
        "Resuelve la incertidumbre del consumo",
        "A, B y C",
      ],
      correctOptionIndex: 4,
      explanation:
        "El cierre reúne esos tres efectos como parte del impacto más profundo de la inflación sobre la vida cotidiana.",
      tip: "Si una opción especial integra varios efectos reales del texto, puede ser la respuesta correcta.",
      topics: ["conclusion", "mainIdea"],
    },
    {
      id: "per4-q12",
      prompt: "¿Qué conclusión general propone el texto?",
      options: [
        "La inflación solo reduce el poder adquisitivo",
        "La inflación transforma de manera profunda la relación entre personas, dinero y futuro",
        "Los cambios de hábito son superficiales y pasajeros",
        "Consumir deja de exigir atención en contextos de suba de precios",
      ],
      correctOptionIndex: 1,
      explanation:
        "La conclusión no se limita al precio: muestra una alteración más amplia en hábitos, prioridades y capacidad de previsión.",
      tip: "La mejor conclusión amplía el sentido del texto, no repite un detalle aislado.",
      topics: ["conclusion"],
    },
    {
      id: "per4-q13",
      prompt: "¿Por qué muchas decisiones de compra exigen ahora más tiempo que antes?",
      options: [
        "Porque obliga a volver a decidir frente a cambios de precios que antes se resolvían por costumbre",
        "Porque ya no existen productos comparables",
        "Porque las personas prefieren comprar más volumen en cada visita",
        "Porque el dinero dejó de ser un factor relevante",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto explica que lo que antes se hacía casi automáticamente ahora requiere comparación, atención y cálculo repetidos.",
      tip: "Buscá la opción que una la idea de cambio de hábito con la necesidad de volver a evaluar.",
      topics: ["causeEffect"],
    },
    {
      id: "per4-q14",
      prompt: "¿Cuál es la mejor interpretación de la frase una decisión que parecía razonable?",
      options: [
        "Una decisión que seguía siendo definitiva en cualquier contexto",
        "Una decisión que podía volverse inconveniente si cambiaban las condiciones",
        "Una compra basada solo en capricho",
        "Una promoción falsa detectada después",
      ],
      correctOptionIndex: 1,
      explanation:
        "La frase apunta a que una elección sensata en un momento puede dejar de serlo si los precios o las condiciones cambian rápidamente.",
      tip: "En frases de cierre, buscá el sentido más ligado a la inestabilidad del contexto.",
      topics: ["vocabulary", "inference"],
      isTricky: true,
    },
    {
      id: "per4-q15",
      prompt: "¿Cómo se organiza el texto?",
      options: [
        "Primero describe cambios concretos en las compras y luego cierra con una reflexión más amplia sobre sus efectos",
        "Presenta solo ejemplos sueltos y no propone ninguna conclusión",
        "Explica causas técnicas de la inflación con lenguaje económico especializado",
        "Se centra en la historia de una marca particular",
        "B y D",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto avanza desde conductas visibles de consumo hacia una conclusión general sobre hábitos, prioridades y futuro.",
      tip: "Las preguntas de estructura se resuelven mirando el recorrido global del texto, no un solo párrafo.",
      topics: ["structure"],
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
        "El texto no habla de desaparición del vínculo, sino de cambios en la manera de encontrarse, sostener relaciones y construir cercanía.",
      tip: "La idea principal debe incluir la transformación y no quedarse solo con una mirada negativa.",
      topics: ["mainIdea"],
    },
    {
      id: "per5-q2",
      prompt: "¿Qué efecto positivo de la tecnología menciona el texto?",
      options: [
        "Permite mantener vínculos con personas que viven lejos",
        "Reemplaza completamente la cercanía emocional del encuentro presencial",
        "Evita que las relaciones se vuelvan fragmentadas",
        "Elimina la dificultad de coordinar horarios",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto señala que mensajes, videollamadas y grupos virtuales facilitan sostener relaciones con familiares, amigos o colegas que están lejos.",
      tip: "Elegí la ventaja concreta que el texto afirma sin convertirla en una solución total.",
      topics: ["details", "tools"],
    },
    {
      id: "per5-q3",
      prompt: "¿Qué herramientas menciona el texto como formas de contacto a distancia?",
      options: [
        "Mensajes",
        "Videollamadas",
        "Grupos virtuales",
        "Encuentros espontáneos en la calle",
        "A, B y C",
      ],
      correctOptionIndex: 4,
      explanation:
        "El segundo párrafo enumera precisamente esos tres recursos tecnológicos como formas de mantener el contacto a distancia.",
      tip: "Si el texto enumera varios ejemplos seguidos, revisá si una opción especial los reúne correctamente.",
      topics: ["details", "tools"],
    },
    {
      id: "per5-q4",
      prompt: "¿Qué aclara el texto sobre la interacción digital?",
      options: [
        "Produce siempre la misma cercanía emocional que un encuentro presencial",
        "Puede complementar el encuentro presencial, pero no reemplazarlo por completo",
        "Vuelve innecesarias las comidas o paseos compartidos",
        "Solo sirve para relaciones laborales",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto introduce un matiz importante: lo digital ayuda a sostener vínculos, pero no genera siempre la misma cercanía que la presencia física.",
      tip: "Prestá atención a expresiones moderadas como puede complementar o no reemplaza por completo.",
      topics: ["inference", "details"],
    },
    {
      id: "per5-q5",
      prompt: "¿Qué factores dificultan coordinar horarios, según el texto?",
      options: [
        "El trabajo",
        "Los traslados largos",
        "El cansancio",
        "La vida rural",
        "A, B y C",
      ],
      correctOptionIndex: 4,
      explanation:
        "El texto menciona esos tres elementos como obstáculos para encontrar tiempo compartido en la vida urbana.",
      tip: "En preguntas de causa, verificá si una opción especial reúne exactamente los factores nombrados.",
      topics: ["causeEffect", "details"],
    },
    {
      id: "per5-q6",
      prompt: "¿Qué resultado tienen esas dificultades sobre muchas relaciones?",
      options: [
        "Se sostienen exclusivamente con encuentros diarios",
        "Dejan de existir por completo",
        "Pasan a sostenerse con mensajes rápidos, intercambios breves o encuentros poco frecuentes",
        "Se vuelven siempre más profundas que antes",
      ],
      correctOptionIndex: 2,
      explanation:
        "El tercer párrafo explica que, frente a la falta de tiempo, muchas relaciones se mantienen mediante contactos más breves y espaciados.",
      tip: "Buscá el efecto concreto que aparece después de la explicación sobre horarios y cansancio.",
      topics: ["details", "causeEffect"],
    },
    {
      id: "per5-q7",
      prompt: "¿Qué ejemplo de nuevas formas de socialización da el texto?",
      options: [
        "Actividades organizadas mediante aplicaciones, talleres, clubes o grupos de interés común",
        "El abandono de toda forma de encuentro mediada por tecnología",
        "La reducción de los espacios públicos disponibles",
        "La desaparición de cualquier actividad compartida",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto menciona esas instancias como respuestas nuevas a las limitaciones del tiempo y de la vida urbana.",
      tip: "Los ejemplos concretos suelen servir para mostrar cómo se expresa una idea general.",
      topics: ["details"],
    },
    {
      id: "per5-q8",
      prompt: "¿Cuál de estas lecturas simplifica en exceso lo que dice el texto?",
      options: [
        "La tecnología amplía posibilidades de contacto",
        "Estar conectado siempre significa sentirse acompañado",
        "La interacción digital puede complementar el encuentro presencial",
        "Coordinar tiempos compartidos puede resultar difícil en la ciudad",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto afirma precisamente que estar conectado no siempre equivale a sentirse acompañado, por eso esa lectura simplifica y distorsiona su planteo.",
      tip: "Desconfiá de las opciones que convierten un matiz del texto en una equivalencia total.",
      topics: ["inference"],
      isTricky: true,
    },
    {
      id: "per5-q9",
      prompt: "Según el texto, la diversidad urbana puede...",
      options: [
        "Enriquecer la experiencia social",
        "Volver más fragmentadas o inestables algunas relaciones",
        "Eliminar la necesidad de socialización",
        "Homogeneizar trayectorias y costumbres",
        "A y B",
      ],
      correctOptionIndex: 4,
      explanation:
        "El último párrafo presenta ambas posibilidades: la diversidad puede enriquecer la vida social y también hacer más inestables algunos vínculos.",
      tip: "Cuando el texto plantea un doble efecto, una opción especial puede reunir las dos ideas correctas.",
      topics: ["details", "inference"],
    },
    {
      id: "per5-q10",
      prompt: "En este texto, ¿qué significa que algunas relaciones se vuelvan fragmentadas?",
      options: [
        "Que desaparecen por completo",
        "Que pueden ser más discontinuas o menos estables",
        "Que se vuelven necesariamente conflictivas",
        "Que solo se mantienen por obligación laboral",
      ],
      correctOptionIndex: 1,
      explanation:
        "La palabra apunta a vínculos menos continuos o más inestables, no a una ruptura total ni a un conflicto permanente.",
      tip: "Para vocabulario en contexto, buscá una equivalencia que conserve el matiz del párrafo.",
      topics: ["vocabulary"],
    },
    {
      id: "per5-q11",
      prompt: "¿Cómo avanza la organización del texto?",
      options: [
        "Presenta primero posibilidades de contacto, luego sus límites y después nuevas formas de sostener vínculos",
        "Describe solo problemas personales sin mencionar cambios sociales",
        "Se concentra en una única aplicación tecnológica",
        "Enumera ejemplos sin ofrecer ninguna conclusión",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto abre con herramientas de contacto, luego marca sus límites emocionales y temporales, y finalmente incorpora nuevas formas de encuentro y una conclusión matizada.",
      tip: "Para responder preguntas de estructura, seguí el recorrido de las ideas de un párrafo al siguiente.",
      topics: ["structure"],
    },
    {
      id: "per5-q12",
      prompt: "¿Qué sigue siendo central, pese a todos los cambios descritos?",
      options: [
        "La estabilidad automática de todas las relaciones",
        "La desaparición de la distancia",
        "La necesidad de relación entre las personas",
        "La preferencia exclusiva por la comunicación digital",
      ],
      correctOptionIndex: 2,
      explanation:
        "El cierre afirma que la necesidad de relación sigue siendo central; lo que cambia son los modos de sostenerla.",
      tip: "El último párrafo suele señalar qué permanece y qué se transforma.",
      topics: ["conclusion", "details"],
    },
    {
      id: "per5-q13",
      prompt: "Según el cierre, ¿qué NO debe hacerse al pensar los vínculos urbanos?",
      options: [
        "Pensarlos solo en términos de pérdida",
        "Reconocer que la necesidad de relación sigue siendo central",
        "Entender que cambian los modos de sostenerla",
        "Tener en cuenta que la vida cotidiana actual es exigente",
        "B y C",
      ],
      correctOptionIndex: 0,
      explanation:
        "El texto dice explícitamente que los vínculos urbanos no deben pensarse solo como pérdida, porque también aparecen formas nuevas de sostenerlos.",
      tip: "Cuando una pregunta pide qué no debe hacerse, buscá la postura que el texto discute o corrige.",
      topics: ["conclusion", "inference"],
    },
    {
      id: "per5-q14",
      prompt: "¿Qué situación menciona el texto para mostrar que la conexión no siempre equivale a compañía?",
      options: [
        "La organización de talleres presenciales",
        "La posibilidad de estar conectado y aun así no sentirse acompañado",
        "La desaparición de los grupos virtuales",
        "El aumento uniforme del tiempo libre en la ciudad",
      ],
      correctOptionIndex: 1,
      explanation:
        "El texto contrapone conexión digital y sensación de compañía para mostrar que no son lo mismo.",
      tip: "Buscá la opción que retome el contraste central del segundo párrafo, no un ejemplo secundario.",
      topics: ["details", "inference"],
    },
    {
      id: "per5-q15",
      prompt: "¿Qué idea contradice el sentido general del texto?",
      options: [
        "La tecnología puede ayudar a sostener vínculos a distancia",
        "La cercanía emocional del encuentro cara a cara no siempre se reemplaza con lo digital",
        "Las nuevas formas de socialización surgen también como respuesta a ciertas limitaciones urbanas",
        "Las relaciones urbanas deben entenderse solamente como deterioro y pérdida",
      ],
      correctOptionIndex: 3,
      explanation:
        "El cierre rechaza esa lectura exclusivamente negativa y propone pensar los vínculos urbanos como transformados, no simplemente destruidos.",
      tip: "Si una opción elimina todos los matices del texto, probablemente lo contradiga.",
      topics: ["inference", "conclusion"],
      isTricky: true,
    },
    {
      id: "per5-q16",
      prompt: "¿Qué ejemplos de encuentro presencial usa el texto para contrastar con lo digital?",
      options: [
        "Una conversación cara a cara",
        "Una comida",
        "Un paseo compartido",
        "Una videollamada",
        "A, B y C",
      ],
      correctOptionIndex: 4,
      explanation:
        "El texto nombra esos tres ejemplos para ilustrar formas de cercanía emocional que no siempre pueden ser reemplazadas por la interacción digital.",
      tip: "Cuando un párrafo encadena ejemplos concretos, revisá si una opción especial los agrupa con precisión.",
      topics: ["details"],
    },
    {
      id: "per5-q17",
      prompt: "¿Qué conclusión resume mejor el texto completo?",
      options: [
        "La vida urbana vuelve innecesario cualquier esfuerzo por sostener vínculos",
        "Las personas siguen necesitando relación, pero deben encontrar modos nuevos de sostenerla en una vida más exigente",
        "La diversidad de la ciudad impide siempre la construcción de cercanía",
        "La tecnología resolvió definitivamente el problema de la distancia social",
      ],
      correctOptionIndex: 1,
      explanation:
        "La conclusión integra el sentido general del texto: la necesidad de vínculo permanece, aunque cambien las condiciones y las formas de encuentro.",
      tip: "La mejor síntesis final une permanencia y cambio en una sola idea.",
      topics: ["conclusion", "mainIdea"],
    },
  ],
};
