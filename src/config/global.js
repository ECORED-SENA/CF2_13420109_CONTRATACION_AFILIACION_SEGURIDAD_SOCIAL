export default {
  global: {
    componenteFormativo:
      'Gestión documental y mejora continua de la contratación laboral',
    descripcionCurso:
      'Con el desarrollo del presente contenido formativo se brindarán herramientas que le permitirán al aprendiz adquirir o fortalecer la competencia relacionada con la vinculación de personal de acuerdo con la normativa, enfocándose en los criterios de la administración documental y las características que regulan la gestión de las historias y de los contratos laborales en Colombia.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Administración de la historia laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Aplicación del derecho de <em>habeas data</em> en el proceso de contratación y administración documental',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Gestión documental de la historia laboral del personal contratado',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Mejora continua, evaluación e informes en el proceso de contratación y afiliación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Herramientas de mejora continua “No conformidades y acciones correctivas”',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis y evaluación del proceso de contratación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Indicadores de gestión',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Informes de gestión y tipos de informes',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (2006). Actualización del Reglamento General de Archivos, en su Artículo 67 y en lo correspondiente al uso del Glosario. AGN. ',
      link:
        'https://normativa.archivogeneral.gov.co/acuerdo-27-de-2006/?pdf=500',
    },
    {
      referencia:
        'Archivo General de la Nación. (2015). Concepto técnico de los documentos de las historias laborales. AGN. ',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/conceptostecnicos/2015/SUBGPD/Radicado_2-2015-02139.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación. (2015). Concepto técnico  sobre tiempos de retención documental AGN.',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/conceptostecnicos/2015/SUBGPD/Radicado_2-2015-05813.pdf#:~:text=En%20cuanto%20al%20tiempo%20de,los%20derechos%20pensionales%20y%20reclamaciones',
    },
    {
      referencia:
        'Decreto 1072 de 2015, Artículo 2.2.4.6.13. [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Versión actualizada Abril 15 de 2016. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      referencia:
        'Medina, E. (2021). Formato de acciones correctivas ejemplos ISO 9001 redacción de no conformidades plan de acciones [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=SlWh5pp2C5Q',
    },
    {
      referencia:
        'Nueva ISO 9001:2015. Numeral 10.2. No conformidad y acción correctiva. Nueva ISO 9001:2015. Recuperado de:  ',
      link:
        'https://www.nueva-iso-9001-2015.com/10-2-no-conformidad-y-accion-correctiva/#:~:text=La%20nueva%20ISO%209001%3A2015,imprescindibles%20para%20tomar%20acciones%20correctivas.',
    },
    {
      referencia:
        'Nueva ISO 9001:2015. 10 técnicas de análisis de causa raíz de los desperdicios de la calidad para eliminarlos. Nueva ISO 9001:2015. ',
      link:
        'https://www.nueva-iso-9001-2015.com/2020/05/10-tecnicas-de-analisis-de-causa-raiz-de-los-desperdicios-de-la-calidad-para-eliminarlos/',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio de Colombia. (2022). Argumentos y concepto de aplicación del derecho de <em>habeas data</em>. SIC. ',
      link: 'https://www.sic.gov.co/manejo-de-informacion-personal',
    },
  ],
  glosario: [
    {
      termino: 'AGN',
      significado: ' Archivo General de la Nación',
    },
    {
      termino: 'Análisis de causa',
      significado:
        'Técnica para la identificación de la raíz de los problemas, los cuales pueden darse en las No conformidades detectadas.',
    },
    {
      termino: 'CAC',
      significado:
        'Elementos determinantes para el análisis CAC (Calidad de la información, Aplicación de técnicas y Comunicación correcta de resultados).',
    },
    {
      termino: 'Ciclo PHVA o Ciclo de Edwards Deming',
      significado:
        'Definición de la estructura de tareas del planear, hacer, verificar, actuar.',
    },
    {
      termino: 'No conformidad',
      significado:
        'Falla, error, incumplimiento en alguna de las actividades que se gestionan en un proceso que alimenta un sistema.',
    },
  ],
  complementario: [
    {
      tema:
        'Herramientas de mejora continua "No conformidades y acciones correctivas"',
      referencia:
        'Nueva ISO 9001:2015. 10 técnicas de análisis de causa raíz de los desperdicios de la calidad para eliminarlos. Nueva ISO 9001:2015.',
      tipo: 'Artículo web',
      link:
        'https://www.nueva-iso-9001-2015.com/2020/05/10-tecnicas-de-analisis-de-causa-raiz-de-los-desperdicios-de-la-calidad-para-eliminarlos/',
    },
    {
      tema:
        'Herramientas de mejora continua "No conformidades y acciones correctivas"',
      referencia:
        'Medina, E. (2021). Formato de acciones correctivas ejemplos ISO 9001 redacción de no conformidades plan de acciones.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SlWh5pp2C5Q',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilmar Eduardo Amaya Ávila',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
