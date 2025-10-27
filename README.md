# Awaq Campus Internship

Awaq Campus Internship es una aplicación web diseñada para estudiantes universitarios que deseen participar en prácticas universitarias para diferentes especializaciones. La aplicación permite a los estudiantes reservar habitaciones y acceder a instalaciones específicas dentro del campus.

## Características principales

- Registro y autenticación de usuarios.
- Reserva de habitaciones y fechas de prácticas.
- Gestión de reservas por parte de los administradores.
- Panel de superadministrador para la administración.
- Estadísticas y visualización de datos relevantes.
- Integración con SweetAlert para mensajes de alerta personalizados.

## Tecnologías utilizadas

- TypeScript: Lenguaje de programación para mejorar la escalabilidad y mantenibilidad del código.
- React.JS: Biblioteca para construir interfaces de usuario interactivas y reutilizables.
- React Router: Enrutador para la navegación declarativa en la aplicación.
- Redux Toolkit: Biblioteca de gestión de estado para facilitar la manipulación.
- SweetAlert: Biblioteca para mensajes de alerta y confirmaciones personalizadas.
- React Hook Form: Biblioteca para la gestión y validación de formularios en React.
- TailwindCSS: Framework de CSS para estilos de diseño flexibles y rápidos.
- Tremor: Biblioteca para visualización de datos y creación de gráficos y paneles de control.

## Deploy

La documentacion de deploy se encuentra en [deploy](doc/DEPLOY.md)

## Configuración del proyecto

1. Clona este repositorio: `git clone https://github.com/Awaq-Estaciones-Biologicas/frontend_aci.git`
2. Navega hasta el directorio del proyecto: `cd frontend_aci`
3. Instala las dependencias: `npm install`
4. En el archivo de [api](src/api.ts) colocar la api a utilizar.
5. Configura las variables de entorno necesarias.
6. Inicia la aplicación: `npm srun dev`
7. Abre tu navegador y accede a `http://localhost:5173/`
