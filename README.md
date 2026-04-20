# Sistema de Practica de Comprension Lectora

Aplicacion web en Node.js + Express para rendir tests de comprension lectora en el navegador. Incluye 20 tests, correccion guiada pregunta por pregunta, resultado final con diagnostico pedagogico y un registro analitico opcional en PostgreSQL.

Los ejercicios estan pensados exclusivamente para practica. No necesariamente se parecen a evaluaciones oficiales.

## Uso

1. Instala dependencias:

```bash
npm install
```

2. Copia las variables de entorno si vas a usar analytics:

```bash
cp .env.example .env
```

3. Inicia la aplicacion:

```bash
npm start
```

4. Abre `http://localhost:3000` en el navegador.

5. En la app:
   elegi un test `PER1` a `PER10` o `EDU1` a `EDU10`, lee el texto, responde las preguntas y revisa el resultado final.

## Analytics opcional

Si `DATABASE_URL` no esta configurada, la app funciona normalmente sin guardar estadisticas.

Si `DATABASE_URL` esta configurada, la app crea automaticamente dos tablas en PostgreSQL:

- `analytics_attempts`: un intento por test, con codigo, nivel, estado, timestamps, puntaje final y hash de IP.
- `analytics_events`: eventos append-only del flujo, como inicio, lectura, vista de preguntas, respuestas, resultado y abandono.

La IP no se guarda en claro. Se almacena un hash SHA-256 usando `ANALYTICS_IP_SALT`, para poder agrupar actividad sin exponer la direccion original.

Variables disponibles:

- `PORT`: puerto del servidor, por defecto `3000`.
- `DATABASE_URL`: conexion PostgreSQL; al definirla se activa el logging.
- `ANALYTICS_IP_SALT`: secreto estable para hashear IPs.
- `DATABASE_SSL`: usar SSL hacia PostgreSQL (`true` o `false`).
- `ADMIN_API_TOKEN`: token Bearer para consultar y exportar analytics por `/api/admin/*`.

## Consulta y exportacion

Con analytics habilitado y `ADMIN_API_TOKEN` configurado, quedan disponibles:

- `GET /api/admin/attempts`: lista intentos en JSON.
- `GET /api/admin/attempts.csv`: exporta intentos en CSV.
- `GET /api/admin/attempts/:attemptId/events`: lista eventos de un intento.

Todos requieren el header:

```bash
Authorization: Bearer TU_ADMIN_API_TOKEN
```

## Estructura

- `public/`: interfaz web, estilos y logica del test en el navegador.
- `server/index.js`: servidor Express y endpoints HTTP.
- `server/data.js`: carga de textos y metadatos de tests.
- `server/analytics.js`: bootstrap de PostgreSQL y registro de intentos/eventos.
- `server/question-banks/`: bancos de preguntas por serie y nivel.
- `texts/PER/`: textos periodisticos.
- `texts/EDU/`: textos academicos.

## Flujo de la aplicacion

1. La app muestra una introduccion obligatoria.
2. El usuario elige un test del catalogo.
3. Se muestra el texto completo antes de empezar las preguntas.
4. Cada respuesta se corrige al instante con explicacion y tip.
5. Al final se calcula el porcentaje de aciertos, fortalezas, errores frecuentes y recomendacion de continuidad.
6. Si analytics esta activo, tambien se registran inicio, respuestas, finalizacion y abandono.

## Desarrollo y despliegue

La app es un servidor Node tradicional. Puede ejecutarse localmente o detras de un reverse proxy como Nginx, y ya fue pensada para correr en una VM con `pm2` o con `node server/index.js`.

## Contenido

Los textos del repositorio son originales y fueron calibrados para crecer en dificultad y extension entre niveles.

