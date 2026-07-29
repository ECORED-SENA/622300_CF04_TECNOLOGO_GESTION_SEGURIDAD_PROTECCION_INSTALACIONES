<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Diagnóstico organizacional e instrumentos de recolección de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.mb-3(data-aos="fade-right")
            p.mb-0 El diagnóstico organizacional permite conocer la situación actual de una unidad económica y orientar decisiones de mejora a partir de información clara, válida y confiable. Para ello, se apoya en instrumentos de recolección de datos que facilitan el análisis de procesos, recursos, capacidades, dificultades y oportunidades presentes en la organización.
          p.mb-0 Se invita a reproducir el siguiente video, el cual presenta una visión general del diagnóstico organizacional, su importancia y utilidad para analizar la situación actual de una organización.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='').m-auto
          p.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/mAZm-qSH0XI?si=b6OCBqcMWHmnIXt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Diagnóstico Organizacional
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Elementos e importancia del diagnóstico organizacional 
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El diagnóstico organizacional permite conocer la situación actual de una unidad económica, identificando factores internos y externos que influyen en su desempeño. Su aplicación orienta decisiones, reconoce necesidades y facilita acciones de mejora pertinentes y concretas.
      p.mb-5 Para comprender cómo se desarrolla el diagnóstico organizacional, es necesario reconocer los elementos que lo conforman; estos son:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img3.jpg', alt="" ).m-auto
              h4.text-center Generación de información
              .caja-3_p
                p.mb-0.text-center Consiste en recolectar datos relevantes mediante instrumentos adecuados, según los objetivos del diagnóstico y las características de la organización.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img4.jpg', alt="" ).m-auto
              h4.text-center Organización de los datos
              .caja-3_p
                p.mb-0.text-center Implica clasificar, registrar, almacenar y ordenar la información obtenida para facilitar su revisión, comprensión y análisis posterior.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img5.jpg', alt="" ).m-auto
              h4.text-center Análisis e interpretación
              .caja-3_p
                p.mb-0.text-center Permite examinar la información recolectada, identificar hallazgos significativos y establecer orientaciones para la toma de decisiones organizacionales.
      p.mb-5.text-center Realizar un diagnóstico organizacional es importante porque contribuye a:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.color-1.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img6.jpg', alt="" ).m-auto
              h4.text-center Reconocimiento de la realidad organizacional
              .caja-3_p
                p.mb-0.text-center Permite conocer cómo se encuentra la unidad económica en relación con sus procesos, recursos, capacidades, dificultades y oportunidades de mejora.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.color-1.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img7.jpg', alt="" ).m-auto
              h4.text-center Apoyo a la toma de decisiones
              .caja-3_p
                p.mb-0.text-center Brinda información útil para definir prioridades, seleccionar alternativas y formular acciones coherentes con las necesidades de la organización.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.color-1.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img8.jpg', alt="" ).m-auto
              h4.text-center Fortalecimiento de la mejora continua
              .caja-3_p
                p.mb-0.text-center Facilita la revisión de procesos y resultados para proponer acciones que mejoren el desempeño, la competitividad y la adaptación al entorno.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Instrumentos de recolección de datos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img9.svg', alt='').m-auto
        .col-xl
          p.mb-0 Los instrumentos de recolección de datos son recursos diseñados para obtener, registrar y organizar información válida y confiable, permitiendo transformar variables o aspectos organizacionales en datos observables, medibles y útiles para el diagnóstico. Para ampliar esta definición, se presentan aspectos esenciales que explican la función, características y utilidad de los instrumentos dentro del diagnóstico organizacional.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Función del instrumento
                  p.mb-0 Permite recolectar información relevante sobre variables, procesos, personas o situaciones, de acuerdo con los objetivos definidos para el diagnóstico organizacional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registro sistemático
                  p.mb-0 Facilita organizar los datos de manera estructurada, evitando la improvisación y favoreciendo el análisis posterior de la información obtenida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validez
                  p.mb-0 Indica que el instrumento mide realmente aquello que se desea analizar, garantizando coherencia entre el objetivo del diagnóstico y los datos recolectados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Confiabilidad
                  p.mb-0 Permite obtener resultados consistentes cuando el instrumento se aplica varias veces en condiciones similares, fortaleciendo la calidad de la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Los instrumentos de recolección de datos pueden clasificarse según el enfoque de investigación utilizado. Esta clasificación es la siguiente:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Enfoque Cuantitativo
          p.mb-0 Se centra en datos numéricos y estadísticos. Los instrumentos más comunes son los cuestionarios estandarizados, las escalas de <i>Likert</i> (para medir actitudes) y los <i>tests</i>. Estos instrumentos buscan la uniformidad y la replicabilidad para poder generalizar los resultados.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Enfoque Cualitativo
          p.mb-0 Se enfoca en comprender fenómenos en profundidad a través de datos no numéricos. Los instrumentos son más flexibles, como las guías de entrevista semiestructurada o a profundidad, las notas de campo para la observación y las guías para grupos focales. Aquí, el objetivo es capturar la riqueza y el contexto de las experiencias de los participantes.
      p.mb-5 Esta clasificación permite diferenciar instrumentos orientados a datos numéricos de aquellos que profundizan en experiencias y contextos, facilitando la selección del recurso más adecuado para el diagnóstico organizacional. Para ampliar esta comprensión, a través del siguiente video se reconocerán las principales técnicas de recolección de información y su utilidad en el análisis de una organización.
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/xrET4E43wq4?si=-_xd_AtCx_RrCBX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Técnicas de recolección de información
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Tipos principales de instrumentos 
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img16.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los instrumentos de recolección de datos pueden variar según el propósito del diagnóstico, el tipo de información requerida y el enfoque de análisis. Entre los más utilizados se encuentran cuestionarios, entrevistas, guías de observación, listas de chequeo, pruebas estandarizadas y registros documentales. A continuación, se presentan los principales instrumentos de recolección de datos, destacando su utilidad dentro del diagnóstico organizacional y su aporte al análisis de la información.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Guía de observación
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img18.svg', alt='').m-auto
        .col-xl
          p.mb-0 La guía de observación permite registrar de forma sistemática comportamientos, eventos o características en situaciones reales. En el diagnóstico organizacional, facilita la obtención de datos directos, siempre que se definan previamente el objetivo, los aspectos a observar y la forma de registro. Para comprender su utilidad en el diagnóstico organizacional, a continuación, se presentan los aspectos clave de la guía de observación, sus clases, ventajas y limitaciones.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Función principal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Función principal
              p.mb-0 Permite observar directamente comportamientos, eventos o situaciones dentro de su contexto natural, registrando la información de forma ordenada y sistemática.
        .py-3.py-md-4(titulo="Tipos de observación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tipos de observación
              p.mb-0 La observación puede ser científica, cuando tiene un objetivo claro y definido; o no científica, cuando se realiza sin planificación previa.
        .py-3.py-md-4(titulo="Ventajas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ventajas
              p.mb-0 Proporciona datos directos sobre situaciones reales, permite contrastar lo observado con lo reportado y resulta útil en estudios de caso o análisis organizacionales.
        .py-3.py-md-4(titulo="Desventajas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Desventajas
              p.mb-0 La presencia del observador puede modificar el comportamiento de los participantes y la interpretación puede ser subjetiva si no se definen criterios claros.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-4.mb-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
              .col-xl.col-md-10
                p.mb-0 La aplicación de la guía de observación requiere una secuencia organizada que permita definir qué se observará, cómo se registrará la información y cómo se analizarán los resultados.
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Determinar el objeto de observación
                p.mb-0 Definir la situación, proceso, comportamiento o caso que será observado.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img24.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img25.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Establecer los objetivos
                p.mb-0 Precisar para qué se realizará la observación y qué información se espera obtener.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Definir el registro de datos
                p.mb-0 Seleccionar el formato, lista de verificación o notas de campo que se utilizarán.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img27.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Observar cuidadosamente
                p.mb-0 Examinar la situación de forma crítica, objetiva y ordenada.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Registrar la información
                p.mb-0 Anotar los datos observados de acuerdo con los criterios definidos previamente.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img28.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img29.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Analizar e interpretar
                p.mb-0 Revisar la información recolectada para identificar hallazgos relevantes.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Elaborar conclusiones
                p.mb-0 Sintetizar los resultados obtenidos y relacionarlos con el diagnóstico organizacional.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img30.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img31.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Presentar el informe
                p.mb-0 Organizar los hallazgos en un documento que sirva como apoyo para la toma de decisiones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ficha de registro
      p.mb-5 La ficha de registro es un instrumento estructurado que permite recopilar y organizar información de manera uniforme sobre documentos, casos o elementos de análisis. Se utiliza principalmente en investigaciones documentales, históricas u organizacionales, ya que facilita el registro sistemático de datos a partir de campos previamente definidos. Sus ventajas y desventajas son:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img32.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Ventajas
          p.mb-0 Ayuda a organizar grandes cantidades de información de forma consistente. Facilita la creación de bases de datos y el posterior análisis.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img33.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Desventajas
          p.mb-0 No es un instrumento para obtener información cualitativa detallada. Su diseño limita la información a los campos predefinidos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cuestionarios y encuestas
      p.mb-5 El cuestionario es un instrumento de recolección de datos conformado por un conjunto de preguntas orientadas a medir una o más variables de estudio. Puede aplicarse de forma física o digital a una muestra o población, e incluir preguntas cerradas para facilitar el análisis estadístico, o preguntas abiertas para obtener respuestas más amplias y libres. Sus ventajas y desventajas son:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img32.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Ventajas
          p.mb-0 El uso de cuestionarios es una forma eficiente de recopilar datos de muestras extensas de manera rápida y económica. Al estandarizar las preguntas, se reduce la posibilidad de sesgo por parte del investigador.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img33.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Desventajas
          p.mb-0 Una de las principales limitaciones es que no permite explorar en profundidad las respuestas de los participantes. Además, su diseño requiere una planificación cuidadosa para garantizar que las preguntas sean claras y no sesgadas, evitando así posibles errores en la recolección de la información.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Entrevista
      p.mb-5 La entrevista es una técnica cualitativa de recolección de datos que se desarrolla mediante una conversación planificada entre el investigador y el participante. Su propósito es obtener información directa y detallada sobre un tema, a través de una guía que puede ser estructurada, semiestructurada o no estructurada. Los tipos de entrevistas son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img34.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Entrevista estructurada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La entrevista estructurada se caracteriza por utilizar preguntas previamente definidas, aplicadas en el mismo orden a todos los participantes. Esto facilita la organización, clasificación y análisis de los datos, aportando objetividad y confiabilidad. Sin embargo, su principal limitación es la poca flexibilidad para profundizar o adaptarse a cada entrevistado.
            .row(titulo="Entrevista semi-estructurada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La entrevista semiestructurada parte de una guía de preguntas, pero permite adaptarlas según el entrevistado y el desarrollo de la conversación. Facilita aclarar dudas, profundizar en temas relevantes y obtener información rica en contexto y perspectivas personales. No obstante, requiere más tiempo para su aplicación, transcripción y análisis.
            .row(titulo="Entrevista libre").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La entrevista no estructurada no parte de preguntas previamente definidas, sino que se adapta al entrevistado y al desarrollo de la conversación. Su flexibilidad permite profundizar en las respuestas, comprender emociones y conductas, y recoger información desde la experiencia directa del participante.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lista de chequeo 
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img35.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La lista de chequeo es un instrumento estructurado de verificación que permite organizar, controlar y evaluar el cumplimiento de actividades, procedimientos o criterios previamente definidos. Su uso facilita el registro sistemático de la presencia o ausencia de características, comportamientos o pasos esenciales dentro de un proceso. Además, contribuye a reducir la subjetividad del observador, identificar errores u omisiones y fortalecer la calidad en la ejecución de tareas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Pruebas y <i>tests</i> estandarizados
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img36.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La prueba o <i>test</i> estandarizado es un instrumento diseñado para medir habilidades, conocimientos o actitudes de manera uniforme, mediante preguntas o tareas con criterios definidos y aplicadas bajo condiciones controladas. Su principal ventaja es que permite obtener resultados comparables y confiables cuando ha sido validado adecuadamente; sin embargo, puede presentar limitaciones si no se adapta a contextos culturales específicos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registros y análisis documental
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img37.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El análisis documental o de registros consiste en utilizar documentos, bases de datos o archivos previos como fuente de información para el diagnóstico organizacional. Este instrumento permite acceder a información existente, ya sea histórica o administrativa, con bajo costo y posibilidad de consultar grandes volúmenes de datos. Sin embargo, puede presentar limitaciones cuando la información está desactualizada o contiene sesgos provenientes de la fuente consultada.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Aplicación de instrumentos en el diagnóstico organizacional
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img9.svg', alt='').m-auto
        .col-xl
          p.mb-0 La aplicación de instrumentos en el diagnóstico organizacional permite recolectar información pertinente sobre la realidad de una unidad económica. Este proceso facilita el análisis de procesos, recursos, comportamientos y condiciones internas o externas, con el fin de obtener datos útiles para orientar decisiones y formular acciones de mejora. Para aplicar los instrumentos de manera adecuada, es necesario seguir la siguiente secuencia:
      .row.justify-content-center.mb-0
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Seleccionar el instrumento
                p.mb-0 Elegir la herramienta más pertinente de acuerdo con el objetivo del diagnóstico, el tipo de información requerida y las características de la unidad económica.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img38.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img39.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Diseñar el instrumento
                p.mb-0 Construir preguntas, criterios o formatos claros, coherentes y alineados con los aspectos que se desean analizar dentro de la organización.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Validar el instrumento
                p.mb-0 Revisar si el instrumento es comprensible, pertinente y adecuado para obtener la información necesaria antes de aplicarlo de manera definitiva.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img40.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img41.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Recolectar los datos
                p.mb-0 Aplicar el instrumento a la población, muestra, proceso o fuente definida, procurando obtener información completa, ordenada y confiable.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Registrar la información
                p.mb-0 Organizar los datos obtenidos en formatos físicos o digitales que permitan su consulta, comparación y análisis posterior.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img42.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img43.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Utilizar los resultados
                p.mb-0 Analizar e interpretar la información recolectada para identificar hallazgos, orientar decisiones y formular acciones de mejora organizacional.
      .bg-carrusel
        .px-5
          Separador
          #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.5 Organización y uso de la información recolectada
          p.mb-5 A continuación, se presentan los aspectos clave para organizar y utilizar la información recolectada, con el fin de convertir los datos obtenidos en apoyo para el análisis y la mejora organizacional.
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img44.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Clasificación de datos
                  p.mb-0.text-center Consiste en agrupar la información según categorías, fuentes, procesos, áreas o variables de análisis, facilitando su revisión ordenada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registro y almacenamiento
                  p.mb-0.text-center Implica conservar la información en formatos físicos o digitales que permitan su consulta, protección, trazabilidad y uso posterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img47.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Análisis e interpretación
                  p.mb-0.text-center Permite revisar los datos recolectados, identificar relaciones, reconocer hallazgos y comprender la situación real de la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img48.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Uso para la toma de decisiones
                  p.mb-0.text-center La información organizada sirve como base para definir prioridades, formular conclusiones y proponer acciones de mejora en la unidad económica.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
