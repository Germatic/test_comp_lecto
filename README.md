# Sistema de Práctica de Tests de Comprensión Lectora

Repositorio listo para usar con un sistema de tests de comprensión lectora en español.

## Uso

Si querés rendir un test de comprensión lectora:

1. Copiá y pegá en tu agente de IA el link del repositorio: `https://github.com/Germatic/test_comp_lecto`
2. Si el agente puede leer enlaces o repositorios de GitHub, escribile: `Leé el archivo system/prompt.txt de este repositorio y administrame el test PER4 en modo guiado.`
3. Si el agente no puede abrir el repositorio directamente, copiá y pegá en el chat el contenido de `system/prompt.txt` y luego escribile: `Usá estas instrucciones para administrarme el test PER4 en modo guiado.`
4. Indicá qué test querés rendir, por ejemplo `PER4` o `EDU7`.
5. Leé el texto completo cuando el agente te lo muestre.
6. Respondé `listo` cuando termines de leer.
7. Contestá las preguntas una por una.
8. Revisá la corrección inmediata después de cada respuesta.
9. Al final, consultá tu puntaje, fortalezas, errores y recomendación de nivel siguiente.

## Estructura

- `system/prompt.txt`  
  Instrucciones completas para administrar los tests en modo guiado.
- `texts/PER/`  
  Serie periodística, de PER1 a PER10.
- `texts/EDU/`  
  Serie educativa/académica accesible, de EDU1 a EDU10.
- `push_to_github.sh`  
  Script para inicializar el repo localmente y hacer push al remoto.

## Nota

Los textos de este repo son originales y fueron escritos para uso en evaluación de comprensión lectora. Están calibrados para crecer en dificultad y longitud.

