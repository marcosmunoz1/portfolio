// ============================================================
//  EDITÁ ESTE ARCHIVO con tus datos. Todo el sitio se arma desde acá.
// ============================================================

export const profile = {
  name: 'Marcos Muñoz',
  role: 'Desarrollador Full-Stack',
  degree: 'Técnico Programador — UTN', // formación, se muestra bajo el rol en el hero. Vacío = lo oculta
  location: 'Entre Ríos, Argentina',
  available: true, // muestra el badge "Disponible para proyectos"
  tagline:
    'Construyo aplicaciones web de punta a punta: APIs robustas con Laravel, interfaces rápidas con Vue y bases de datos bien diseñadas.',
  about: [
    'Soy desarrollador web full-stack. Me gusta resolver problemas reales con código limpio, mantenible y bien probado.',
    'En el backend trabajo con PHP y Laravel: APIs REST, autenticación, colas, Eloquent y arquitectura ordenada. En el frontend uso Vue.js para crear interfaces reactivas, sobre una base sólida de HTML, CSS y JavaScript.',
    'Diseño y optimizo bases de datos MySQL pensando en la integridad de los datos y en el rendimiento de las consultas.',
  ],
  email: 'marcosdavidmunoz17@gmail.com',
  cvUrl: '/CV.pdf', // ej: '/cv.pdf' (poné el archivo en la carpeta public/). Vacío = oculta el botón
  socials: [
    { label: 'GitHub', url: 'https://github.com/tu-usuario' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marcos-david-francisco-munoz-17dmfm' },
  ],
}

export const skillGroups = [
  {
    title: 'Backend',
    tag: 'server',
    items: ['PHP', 'Laravel', 'APIs REST'],
  },
  {
    title: 'Frontend',
    tag: 'client',
    items: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Base de datos',
    tag: 'data',
    items: ['MySQL', 'Modelado relacional', 'Eloquent ORM'],
  },
]

// Reemplazá estos proyectos de ejemplo por los tuyos.
// image: ruta opcional (ej: '/proyectos/tienda.png' dentro de public/). Si está vacío se muestra un placeholder.
export const projects = [
  {
    title: 'Sistema de ventas de motos',
    description:
      'Aplicación para gestionar ventas y administrar inventario de motos con panel de administración, notificaciones por email y roles de usuario.',
    stack: ['Laravel', 'AdminLTE', 'MySQL', 'JavaScript', 'DataTables', 'Bootstrap'],
    image: '/waltermotos-dashboard.png',
    demo: '',
    repo: 'https://github.com/marcosmunoz1/sistema-ventas-waltermotos',
  },
  {
    title: 'Sistema de gestión municipal de compras',
    description:
      'Sistema web para gestionar compras municipales, con panel de administración, reportes y control de usuarios.',
    stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Backups'],
    image: '/sistema-compras-municipal.png',
    demo: '',
    repo: 'https://github.com/marcosmunoz1/sistema-de-compras-municipalidad-de-san-jose-de-feliciano',
  },
  
]
