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
        download: 'downloads/622300_CF04_DU.pdf',
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
      termino: 'Análisis documental',
      significado:
        'Revisión de documentos, registros, bases de datos o archivos existentes para obtener información útil en el diagnóstico.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'Cualidad de un instrumento que permite obtener resultados consistentes cuando se aplica en condiciones similares.',
    },
    {
      termino: 'Contexto externo',
      significado:
        'Conjunto de factores políticos, económicos, sociales, tecnológicos, ambientales y legales que influyen en la organización.',
    },
    {
      termino: 'Contexto interno',
      significado:
        'Conjunto de condiciones, recursos, procesos y capacidades propias de la organización.',
    },
    {
      termino: 'Diagnóstico organizacional',
      significado:
        'Proceso de análisis que permite conocer la situación real de una organización para orientar decisiones de mejora.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Técnica de recolección de información aplicada a una muestra o población para obtener datos sobre opiniones, características o percepciones.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Conversación planificada entre investigador y participante para obtener información directa y detallada sobre un tema.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Curso de acción definido para alcanzar metas organizacionales y orientar el rumbo de la empresa.',
    },
    {
      termino: 'Fortalezas',
      significado:
        'Capacidades, recursos o actividades que la organización realiza eficazmente y que pueden generar ventaja competitiva.',
    },
    {
      termino: 'Guía de observación',
      significado:
        'Formato que permite registrar comportamientos, eventos o características observadas de manera sistemática.',
    },
    {
      termino: 'Instrumentos de recolección de datos',
      significado:
        'Herramientas que permiten obtener y registrar información válida y confiable para el análisis.',
    },
    {
      termino: 'Lista de chequeo',
      significado:
        'Instrumento estructurado que verifica el cumplimiento de actividades, procedimientos o criterios previamente establecidos.',
    },
    {
      termino: 'Matriz DOFA',
      significado:
        'Herramienta que integra debilidades, oportunidades, fortalezas y amenazas para formular estrategias.',
    },
    {
      termino: 'PESTEL',
      significado:
        'Modelo de análisis externo que estudia factores políticos, económicos, sociales, tecnológicos, ambientales y legales.',
    },
    {
      termino: 'Prueba estandarizada',
      significado:
        'Instrumento diseñado para medir conocimientos, habilidades o actitudes bajo criterios uniformes.',
    },
    {
      termino: 'Validez',
      significado:
        'Cualidad de un instrumento que garantiza que mide realmente aquello que pretende medir.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acevedo, T. A. (2017). Ocho pasos para planear estratégicamente en microempresas gerenciadas por "no gerentes". Retos, 3(3), 59–74.',
      link: 'https://doi.org/10.23850/23338059.523',
    },
    {
      referencia:
        'Arias, F. (2012). El proyecto de investigación: Introducción a la metodología científica. Editorial Episteme, C.A.',
      link: '',
    },
    {
      referencia:
        'Banco de la República. (2025). Estudios sobre política económica (ESPE 108).',
      link: 'https://investiga.banrep.gov.co/es/espe/espe108',
    },
    {
      referencia:
        'Cámara de Representantes. (2025). Debate de control político: Retos y perspectivas del sector empresarial en Colombia con enfoque en sostenibilidad.',
      link: 'https://www.camara.gov.co/debate-de-control-politico-retos-y-perspectivas-del-sector-empresarial-en-colombia-con-enfoque-en',
    },
    {
      referencia:
        'Creswell, J. W., & Creswell, J. D. (2023). Diseño de investigación: Enfoques cualitativos, cuantitativos y de métodos mixtos (6.ª ed.). SAGE Publications.',
      link: '',
    },
    {
      referencia:
        'David, F. R. (2003). Conceptos de administración estratégica (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2018). Plan Nacional de Desarrollo: Pacto por el emprendimiento.',
      link: 'https://colaboracion.dnp.gov.co/cdt/prensa/plannacionaldedesarrolopactoemprendimiento.pdf',
    },
    {
      referencia:
        'Díaz-Bravo, L., Torruco-García, U., Martínez-Hernández, M., & Varela-Ruiz, M. (2013). La entrevista, recurso flexible y dinámico. Investigación en Educación Médica, 2(7), 162–167.',
      link: '',
    },
    {
      referencia:
        'Flick, U. (2022). Una introducción a la investigación cualitativa (7.ª ed.). SAGE Publications.',
      link: '',
    },
    {
      referencia:
        'Hernández-Sampieri, R., & Mendoza, C. (2018). Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta (7.ª ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Koontz, H., Weihrich, H., & Cannice, M. (2022). Administración: Una perspectiva global y empresarial (16.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'McMillan, J. H., & Schumacher, S. (2014). Investigación en educación: Indagación basada en evidencia (7.ª ed.). Pearson Higher Ed.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2024). MinAmbiente lanza iniciativas para fortalecer la bioeconomía de la mano con el sector empresarial.',
      link: 'https://www.minambiente.gov.co/minambiente-lanza-iniciativas-para-fortalecer-la-bioeconomia-de-la-mano-con-el-sector-empresaria/',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2019). La transformación digital al servicio de las empresas colombianas.',
      link: 'https://mintic.gov.co/portal/inicio/Sala-de-prensa/MinTIC-en-los-medios/101254:La-transformacion-digital-al-servicio-de-las-empresas-colombianas',
    },
    {
      referencia:
        'Porter, M. E. (1996). What is Strategy? Harvard Business Review.',
      link: '',
    },
    {
      referencia:
        'Porter, M. E. (1985). Competitive Advantage: Creating and Sustaining Superior Performance. The Free Press.',
      link: '',
    },
    {
      referencia:
        'QuestionPro. (s.f.). Técnicas de recolección de datos: Los 10 métodos más usados.',
      link: 'https://www.questionpro.com/blog/es/tecnicas-de-recoleccion-de-datos/',
    },
    {
      referencia:
        'Robbins, S. P., & Coulter, M. (2018). Administración (13.ª ed.). Pearson Educación de México.',
      link: '',
    },
    {
      referencia:
        'Sabino, C. (2014). El proceso de investigación (5.ª ed.). Panapo.',
      link: '',
    },
    {
      referencia:
        'Sánchez Vargas, L. A. (2019). Fundamentos para la elaboración de planes estratégicos. Sello Editorial UNAD.',
      link: 'https://doi.org/10.22490/9789586517133',
    },
    {
      referencia:
        'Tejero González, M. (2021). Técnicas de investigación cualitativa en los ámbitos sanitario y sociosanitario. Ediciones de la Universidad de Castilla-La Mancha.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada,
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>fullstack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
