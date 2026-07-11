export default {
  global: {
    Name: 'Diagnóstico organizacional',
    Description:
      'Este componente formativo aborda el diagnóstico organizacional como herramienta para analizar la situación interna y externa de una unidad económica. Integra instrumentos de recolección de datos, análisis del contexto, matriz DOFA y formulación de estrategias, con el propósito de orientar decisiones que fortalezcan la competitividad, la mejora continua y el desempeño organizacional.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Diagnóstico organizacional e instrumentos de recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos e importancia del diagnóstico organizacional ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Instrumentos de recolección de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos principales de instrumentos ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Aplicación de instrumentos en el diagnóstico organizacional',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Organización y uso de la información recolectada',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contexto interno de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Factores internos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fortalezas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Debilidades',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Análisis del contexto interno en la unidad económica',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contexto externo de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Factores políticos y legales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Factores económicos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Factores sociales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Factores tecnológicos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Factores ambientales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Matriz de diagnóstico DOFA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Componentes de la matriz',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elaboración de la matriz DOFA',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Análisis de resultados',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Matriz DOFA para la toma de decisiones',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategia y táctica organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Definición y tipos de estrategias organizacionales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estrategias organizacionales según su propósito',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estrategias derivadas de la matriz DOFA',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Definición de táctica organizacional',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Relación y aplicación de estrategias y tácticas en la unidad económica',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
