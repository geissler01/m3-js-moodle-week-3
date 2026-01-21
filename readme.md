# # Mini App - Lista de Notas con DOM y LocalStorage
# 
# Actividad moodle semana 3: manipulación del DOM y persistencia con **localStorage**.
# 
# ## Funcionalidades implementadas
# 
# - Agregar notas escribiendo en el input y presionando "Agregar"
# - Validación básica (no permite notas vacías)
# - Eliminar notas individuales con botón "Eliminar"
# - Las notas persisten al cerrar y volver a abrir el navegador
# - Uso de appendChild() y eliminación mediante splice + re-renderizado
# - Registro de acciones en consola
# - Uso de getElementById y querySelector
# - Uso de textContent para modificar contenido
# 
# ## Tecnologías / conceptos practicados
# 
#  - HTML5 semántico
# - CSS
# - Bootstrap 5
# - JavaScript:
#   - Selección de elementos (getElementById, querySelector)
#   - Creación de elementos (createElement, createTextNode)
#   - Manipulación del DOM (appendChild, innerHTML, textContent)
#   - Eventos (addEventListener, onclick)
#   - LocalStorage (setItem, getItem, JSON.stringify, JSON.parse)
#   - Arreglos (push, splice, forEach)
# 
# ## Cómo probar
# 
# 1. Abre index.html en el navegador
# 2. Escribe notas y agrégalas
# 3. Elimina alguna nota
# 4. Recarga la página → las notas deben seguir ahí
# 5. Abre las **Herramientas de desarrollador → Application → Local Storage** para ver las notas guardadas
# 6. Revisa la consola para ver los mensajes de agregado/eliminado/carga
# 
# ## Adjustos
# 
# - Pantalla inicial (sin notas)
# - Después de agregar 4 notas
# - Después de eliminar una nota
# - Consola mostrando mensajes de agregar/eliminar/cargar
# - Panel **Application → Local Storage** mostrando la clave "notas"
# 
# 
# Fecha: enero 2026