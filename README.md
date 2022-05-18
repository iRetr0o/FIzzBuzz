# FizzBuzz
Este repositorio contiene un ejercicio en donde: se necesita calcular cierta información de los explorers de LaunchX, de momento se ha desarrollado por una consultoría externa muy mala un script en JS para realizar esto. Sin embargo después de una evaluación interna se ha decidido refactorizar totalmente el proyecto.

Este proyecto lee un archivo [explorers.json](https://github.com/iRetr0o/FizzBuzz/blob/main/explorers.json) que contiene una lista de explorers con información que necesitamos procesar. Con este script se logró:
- Obtener la lista de explorers que solo están en node.
- Obtener la cantidad de explorers que están en node.
- Obtener la lista de usuarios de github de los explorers que están en node.
- Se necesitó crear una validación llamada FizzBuzz, si el explorer tiene un score que sea divisible entre 3, deberá tener un campo `trick` que diga `FIZZ`, cualquier otro caso el valor de este nuevo campo deberá ser el score mismo. Esta validación nos sirve porque necesitamos aplicarla a la lista de todos los explorers y saber cuáles son FIZZ.
- Después necesitamos una validación muy similar pero para cuando el score sea divisible entre 5, entonces el valor del nuevo campo `trick` será `BUZZ`, cualquier otro caso el valor será el score.
- Pero después volvimos a necesitar otro caso para cuando el valor del score fuera divisible entre 3 y también entre 5, entonces el valor del campo `trick` debe ser `FIZZBUZZ`, de lo contrario tendrá el valor del score. 

Actualmente las últimas 3 validaciones se corren independientemente y se juntan en un excel. Se necesita una misma validación que apliqué las tres reglas a toda la lista:
- Si el campo score del explorer es divisible entre 3, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZ`.
- Si el campo score del explorer es divisible entre 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `BUZZ`.
- Si el campo score del explorer es divisible entre 3 y 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZBUZZ`.
- Si el campo score no es divisible por ninguna de las reglas anteriores, se agrega un campo nuevo llamado `trick` cuyo valor será el del score.

### Requerimientos
1. Refactorizar el script [legado](https://github.com/iRetr0o/FizzBuzz/blob/824757da23bd4d01b0ffe238c06f6314bb8bf108/app.js) y rehacerlo con mucho cuidado ya que es información muy sensible.
2. Crea un API para usar la funcionalidad anterior:
    - Obtener la lista de explorers en la misión que enviaste (node o java) - `localhost:3000/v1/explorers/:mission`.
    - Obtener la cantidad de explorers según la misión que enviaste (node o java) - `localhost:3000/v1/explorers/amount/:mission`.
    - Obtener la lista de usernames en la misión que enviaste (node o java) - `localhost:3000/v1/explorers/usernames/:mission`.
3. Nuevo requerimiento: Crea un endpoint para recibir un número y aplicar la validación del fizzbuzz `localhost:3000/v1/fizzbuzz/:score`.

## Bot Telegram
En esta práctica se creo un nuevo [bot](https://github.com/iRetr0o/FizzBuzz/blob/main/lib/bot.js) en telegram con el `BotFather` llamado `FizzbuzzLaunchXBot` el cual se encarga de correr nuestra validación fizzbuzz a través de nuestros mensajes de texto con el bot, tambien se valida que al enviar la palabra "node" o "java", el bot regrese la lista de nombres de los explorers de esa misión.
<details>
  <summary> Funcionamiento del bot </summary>
  
  1. Descargamos y creamos una cuenta en Telegram.
  2. Accedemos al BotFather: https://telegram.me/BotFather.
  3. En el chat del bot father envía un mensaje con el texto: `/newbot`.
  4. Te pedirá un nombre para tu bot.
  5. Guarda el token de tu nuevo bot en un archivo `.env` (esta es información sensible).
  6. Así mismo te dará una url para que abras un nuevo chat con tu bot, enseguida presiona el botón de START, necesitas realizar este paso.
  7. Instalas las dependencias con `npm install`.
  8. Corre tu nuevo bot con el comando `npm run bot`
  9. Ve a tu chat con el nuevo bot y pruébalo
  
  ![image](https://user-images.githubusercontent.com/98203302/168933726-dbb080ee-df93-4384-ad16-7522ee6dc5b1.png)
</details>

## Instalar las dependencias
```
npm install
```

## Dependencias
| Nombre  | Versión | Documentación | 
| :------------: | :------------: | :------------: |
| Jest | 27.5.1  | <a href="https://jestjs.io/docs/27.x/getting-started" target="_blank"><img src="https://img.shields.io/badge/Jest-Documentation-brightgreen?style=for-the-badge&logo=jest"></a> |
| Express | 4.18.1 | <a href="https://expressjs.com/en/4x/api.html" target="_blank"><img src="https://img.shields.io/badge/Express-Documentation-lightgray?style=for-the-badge&logo=express"></a> |
| ESLint | 8.14.0 | <a href="https://expressjs.com/en/4x/api.html" target="_blank"><img src="https://img.shields.io/badge/ESLint-Documentation-purple?style=for-the-badge&logo=ESLint"></a> |
| dotenv | 16.0.1 | <a href="https://www.npmjs.com/package/dotenv" target="_blank"><img src="https://img.shields.io/badge/ESLint-Documentation-red?style=for-the-badge&logo=npm"></a> |
| Telegram Bot API | 0.57.0 | <a href="https://core.telegram.org/bots/api" target="_blank"><img src="https://img.shields.io/badge/ESLint-Documentation-blue?style=for-the-badge&logo=telegram"></a> |

Versión de Node: [16.14.2](https://nodejs.org/docs/latest-v16.x/api/index.html).

## Comandos habilitados
- `npm test "archivo.test.js"`: Inicia la prueba de tu archivo .test.js.
- `npm run linter`: Muestra todos los errores de sintaxis de los archivos.
- `npm run linter-fix`: Resuelve los errores de sintaxis de los archivos.
- `npm run server`: Inicia el servidor en el puerto 3000.
- `npm run bot`: Inicia el bot de Telegram.

## ¿Qué aprendí?
- Realizar lectura de código legado, cuando estés en un proyecto te tocará integrarte a proyectos ya iniciados.
- Técnicas de refactoring y diseño con orientación a objetos.
- Creación de proyectos de js.
- Versionamiento con Git y GitHub.
- Uso de NPM.
- Aplicación de TDD y pruebas de unidad.
- Uso de GitHub Actions para Pruebas Automatizadas.
- Uso del Linter.
- Guía de estilo para escribir código.
- Creación de API con Express.
- Modularización y separación de responsabilidades.
- Lectura de archivos json.
- Creación de un bot en telegram.
