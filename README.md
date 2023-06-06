# Proyecto Final javascript - Rachid Ferreira

**Estudiante:** Rachid Botheina.

**Comision: 39520**

## Funfit

Es una pagina web para un box corssfit que permite agendar turnos.

### Librerias y dependencias:

1. Sweetalert 2, en la sección de contactos, para notificar al usuario:
    - Cuando se agenda un turno.
    - Cuando no hay turnos diasponibles en el horario elegido.
    - Notificar al usuario que sus datos fueron guardados al momento de llenar el formulario.

2. Utiliza sass para los estilos junto con nodemon.

3. Contiene un archivo JSON, que emula una API de forma local para luego ser consumida de forma asincrona utilizando `fetch()` desde la sección de contacto, permitiendo listar turnos de forma dinamica.