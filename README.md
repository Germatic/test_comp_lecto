# Sistema de Práctica de Tests de Comprensión Lectora

Repositorio listo para usar con un sistema de tests de comprensión lectora en español.

## Uso

Si querés rendir un test de comprensión lectora:

1. Abrí este repositorio en tu agente de IA, por ejemplo ChatGPT.
2. Pedile que lea `system/prompt.txt` y que use esas instrucciones para administrar el test.
3. Indicá qué test querés rendir, por ejemplo `PER4` o `EDU7`.
4. Leé el texto completo cuando el agente te lo muestre.
5. Respondé `listo` cuando termines de leer.
6. Contestá las preguntas una por una.
7. Revisá la corrección inmediata después de cada respuesta.
8. Al final, consultá tu puntaje, fortalezas, errores y recomendación de nivel siguiente.

Ejemplo de mensaje para iniciar:

`Leé las instrucciones de system/prompt.txt y administrame el test PER4 en modo guiado.`

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

