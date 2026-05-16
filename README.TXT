-----------------------------------------------------------------------------------------------------------------------------------------------
1. Uso de IA (GitHub Copilot)
Durante el desarrollo del proyecto utilicé GitHub Copilot como herramienta de apoyo, siguiendo las recomendaciones de la guía EVA3.
Apliqué prompts sugeridos en la pauta, lo que me permitió mejorar el código en términos de seguridad, legibilidad, rendimiento y buenas
prácticas.

-----------------------------------------------------------------------------------------------------------------------------------------------
2. Prompts utilizados
Utilicé los siguientes prompts:

a.Generar un componente React reutilizable para mostrar una tarjeta de curso evitando dangerouslySetInnerHTML.
b.Revisar código React y sugerir mejoras en seguridad y manejo de errores.
c.Crear un hook personalizado para guardar datos no sensibles en localStorage.

-----------------------------------------------------------------------------------------------------------------------------------------------
3. Mejoras aplicadas con Copilot

//CourseCard.jsx//
Convertí este archivo en un componente reutilizable utilizando props:

a.course
b.isFavorite
c.onToggleFavorite

Además:

a.Implementé sanitizeText para evitar renderizar texto potencialmente malicioso.
b.Eliminé completamente el uso de dangerouslySetInnerHTML.
c.Agregué el atributo aria-pressed para mejorar accesibilidad.
d.Incorporé validación básica de datos.

Esto me permitió mejorar seguridad frontend, accesibilidad y reutilización del código.


//CourseList.jsx//

Optimicé la lógica de verificación de favoritos:

a.Reemplacé el uso de iteraciones innecesarias por estructuras más eficientes.
b.Mejoré la legibilidad del código.

Con esto logré mayor rendimiento y un código más limpio.


//useLocalStorage.js//
Mejoré el hook personalizado para hacerlo más robusto:

a.Validación de disponibilidad de localStorage
b.Manejo de errores con try/catch
c.Control de JSON inválido
d.Inicialización segura de datos
e.Soporte para actualizaciones funcionales (setStoredValue((prev) => nuevoValor))

Con esto logré mayor seguridad, mejor manejo de rrores y buenas prácticas

-----------------------------------------------------------------------------------------------------------------------------------------------
4. Implementación de desafíos

Desafío 1: Filtro por docente
Implementé un sistema que permite filtrar cursos según el teacherId.

Desafío 2: Contador de favoritos
Agregué un contador que muestra la cantidad de cursos favoritos seleccionados.

Desafío 3: Modo oscuro
Implementé un modo oscuro con persistencia:

a.Guardé la preferencia en localStorage.
b.Apliqué estilos dinámicos según el modo seleccionado.
c.Posteriormente corregí problemas visuales en el CSS.


Desafío 4: NO implementado
No realicé este desafío siguiendo la indicación directa del profesor.

-----------------------------------------------------------------------------------------------------------------------------------------------
5. Mejora de estilos (CSS)
Después de implementar los desafíos, detecté problemas visuales, especialmente en el modo oscuro.
Por esto, utilicé Copilot para mejorar los estilos.

Cambios realizados:

a.Ajusté colores para mejorar contraste
b.Corregí errores en el modo oscuro
c.Mejoré la coherencia visual entre componentes

Obteniendo como resultado una interfaz más clara y una mejor experiencia de usuario.

-----------------------------------------------------------------------------------------------------------------------------------------------
6. Problemas y solución con Docker y SonarQube
Durante la implementación de SonarQube tuve dificultades al ejecutar el entorno correctamente.

Problemas encontrados:

a.Dificultad para levantar el contenedor con Docker
b.Problemas de acceso a http://localhost:9000
c.Errores en la autenticación con el token
d.Configuración incorrecta del scanner


Soluciones aplicadas para resolver estos problemas:

a.Verifiqué que Docker estuviera ejecutándose correctamente
b.Corregí el archivo docker-compose.yml
c.logré Ejecutar correctamente docker compose up -d y accedí correctamente a: http://localhost:9000
d.Generé un token en SonarQube
e.Corregí el archivo sonar-project.properties para su correcta ejecución:

Gracias a la ayuda de la IA pude ejecutar Docker y SonarQube correctamente y hacer un análisis que verifique la calidad del código.

-----------------------------------------------------------------------------------------------------------------------------------------------
7. Uso responsable de IA
Durante el desarrollo:

a.Revisé todo el código generado
b.No acepté soluciones sin entenderlas
c.Validé que el código funcionara correctamente

-----------------------------------------------------------------------------------------------------------------------------------------------
8. Conclusión
El uso de GitHub Copilot me permitió: Mejorar la calidad del código, aplicar buenas prácticas de seguridad, optimizar el rendimiento
e implementar funcionalidades más complejas.

Además, gracias al uso de la inteligencia artificial, pude comprender mejor conceptos clave de React, como la creación de componentes
reutilizables, el uso de hooks personalizados y la separación de responsabilidades en una aplicación SPA.
La IA me sirvió como guía para entender soluciones, resolver errores y mejorar mi forma de programar, permitiéndome avanzar en el desarrollo
del proyecto con mayor claridad y aprendizaje práctico.