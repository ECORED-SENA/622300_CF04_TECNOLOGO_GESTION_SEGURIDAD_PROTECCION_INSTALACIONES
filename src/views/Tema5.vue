<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Estrategia y táctica organizacional
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La estrategia y la táctica organizacional permiten convertir los resultados del diagnóstico en acciones concretas. Este tema orienta la definición de cursos de acción, la toma de decisiones y la aplicación de planes que fortalecen el desempeño de la unidad económica.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Definición y tipos de estrategias organizacionales
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img18.svg', alt='').m-auto
        .col-xl
          p.mb-0 La estrategia organizacional es un curso de acción que orienta las decisiones, recursos y esfuerzos de una organización para alcanzar sus objetivos. En el contexto empresarial, permite definir el rumbo que debe seguir la unidad económica, responder a los cambios del entorno y fortalecer su desempeño. Las estrategias pueden clasificarse en niveles corporativo, empresarial y funcional, y también pueden orientarse al crecimiento, la estabilidad o la renovación organizacional. Estas se detallan a continuación:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img2.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Estrategia corporativa
                  p.mb-0 Define en qué negocios debe participar la organización y cuál será su dirección general. Este tipo de estrategia orienta las decisiones de alto nivel y establece el rumbo que deben seguir las diferentes unidades o áreas de la empresa.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Estrategia empresarial
                  p.mb-0 Se enfoca en la forma como la organización compite dentro de un mercado o sector específico. Permite definir acciones para fortalecer su posicionamiento, responder a la competencia y generar valor frente a clientes o usuarios.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Estrategia funcional
                  p.mb-0 Apoya la estrategia general desde áreas específicas como mercadeo, finanzas, talento humano, producción, logística o investigación y desarrollo. Su propósito es alinear las actividades internas con los objetivos estratégicos de la organización.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Estrategia de crecimiento
                  p.mb-0 Busca incrementar las operaciones de la organización mediante nuevos productos, servicios, mercados o clientes. Este tipo de estrategia permite ampliar la presencia de la empresa y fortalecer su participación en el mercado.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Estrategia de estabilidad
                  p.mb-0 Se orienta a mantener las condiciones actuales de la organización cuando no se requieren cambios significativos. Puede aplicarse cuando la empresa desea conservar sus clientes, productos, participación en el mercado o resultados alcanzados.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Estrategia de renovación
                  p.mb-0 Se aplica cuando la organización necesita mejorar su desempeño, corregir dificultades o recuperar estabilidad. Puede incluir acciones de ajuste, reestructuración o fortalecimiento de recursos y capacidades para volver a competir de manera efectiva.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Estrategias organizacionales según su propósito
      p.mb-5 Las estrategias organizacionales, según su propósito, orientan las decisiones de crecimiento, fortalecimiento o diversificación de la unidad económica, permitiendo definir acciones coherentes con sus objetivos y condiciones del mercado. Estas son:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategia de integración hacia adelante
                  p.mb-0 La integración hacia delante consiste en que una empresa aumenta su control sobre los canales de distribución, como vendedores o minoristas, para acercarse directamente al consumidor final. Un ejemplo actual es la creación de plataformas en línea para vender sus productos sin intermediarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de integración hacia atrás
                  p.mb-0 La integración hacia atrás consiste en que una empresa adquiere o aumenta su control sobre sus proveedores, con el fin de asegurar insumos, reducir costos, mejorar estándares y disminuir la incertidumbre en el suministro.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de integración horizontal
                  p.mb-0 La integración horizontal consiste en adquirir o aumentar el control sobre empresas competidoras para fortalecer la posición en el mercado. Esta estrategia favorece el crecimiento mediante fusiones, adquisiciones o absorciones, aprovechando mejor los recursos y capacidades disponibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias intensivas
                  p.mb-0 Las estrategias de penetración de mercado, desarrollo de productos y expansión hacia nuevos mercados suelen clasificarse como planes de acción intensivos, ya que requieren un esfuerzo considerable para fortalecer la competitividad de una empresa respecto a sus productos actuales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de penetración en el mercado
                  p.mb-0 La penetración de mercado busca aumentar la presencia de productos o servicios en mercados existentes mediante mayores esfuerzos de mercadeo, como incrementar vendedores, fortalecer la promoción e invertir más en publicidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de desarrollo de productos
                  p.mb-0 El desarrollo de productos busca aumentar las ventas mediante la mejora o modificación de bienes o servicios existentes, incorporando propuestas renovadas que respondan mejor a las necesidades del mercado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de diversificación
                  p.mb-0 La diversificación empresarial consiste en ampliar la actividad de la organización hacia nuevos productos, servicios o negocios. Puede ser concéntrica, horizontal o de conglomerado, aunque su uso requiere cuidado, ya que gestionar varias líneas de negocio puede generar complejidad y pérdida de enfoque.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de diversificación concéntrica
                  p.mb-0 La diversificación concéntrica consiste en agregar productos o servicios nuevos, pero relacionados con la actividad actual de la empresa, con el fin de ampliar su oferta aprovechando capacidades, clientes o canales existentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de diversificación horizontal
                  p.mb-0 La diversificación horizontal consiste en ofrecer productos o servicios nuevos, no relacionados directamente con los actuales, pero dirigidos a los mismos clientes. Esta estrategia aprovecha el conocimiento del público objetivo y puede ampliar la oferta con menor riesgo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Estrategias derivadas de la matriz DOFA
      .bg-2
        .px-5
          p.mb-5 Las estrategias derivadas de la matriz DOFA surgen del cruce entre fortalezas, debilidades, oportunidades y amenazas. Este análisis permite transformar el diagnóstico organizacional en acciones concretas orientadas al crecimiento, la mejora, la protección y la sostenibilidad, mediante estrategias FO, DO, FA y DA. Las estrategias derivadas de la matriz DOFA se detallan a continuación:
          .row.justify-content-center.mb-0
            .col-xl-10
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
                .row(titulo="Estrategias FO").ajuste-cajaAcordion.ajuste-vineta
                  p Las estrategias FO relacionan las fortalezas internas con las oportunidades externas. Su propósito es aprovechar aquello que la organización hace bien para responder a condiciones favorables del entorno. Estas estrategias suelen orientarse al crecimiento, la innovación, la expansión o el posicionamiento, ya que parten de capacidades existentes para obtener mejores resultados.
                  p.mb-3 Por ejemplo, una empresa de tecnología con un equipo de desarrollo altamente capacitado (fortaleza) detecta una creciente demanda de aplicaciones móviles para salud (oportunidad). La estrategia FO plantea “Crear una app de monitoreo de salud para aprovechar esa demanda”.
                .row(titulo="Estrategias DO").ajuste-cajaAcordion.ajuste-vineta
                  p Las estrategias DO relacionan las debilidades internas con las oportunidades externas. Su finalidad es superar limitaciones de la organización aprovechando condiciones favorables del entorno. Son útiles cuando la unidad económica identifica oportunidades de crecimiento, pero necesita fortalecer recursos, procesos, tecnología, comunicación o capacidades internas para poder aprovecharlas.
                  p.mb-3 Por ejemplo, en una empresa de alimentos saludables identifica una tendencia creciente hacia el consumo consciente (oportunidad), pero no tiene presencia en redes sociales (debilidad). Dado lo anterior, la estrategia DO consiste en “contratar un equipo de <i>marketing</i> digital para mejorar su presencia online y aprovechar la tendencia”.
                .row(titulo="Estrategias FA").ajuste-cajaAcordion.ajuste-vineta
                  p Las estrategias FA combinan las fortalezas internas con las amenazas externas. Su propósito es utilizar las capacidades, recursos o ventajas de la organización para enfrentar riesgos del entorno. Estas estrategias ayudan a proteger la estabilidad, reducir impactos negativos y responder de manera más efectiva ante cambios legales, económicos, tecnológicos, sociales o competitivos.
                  p.mb-3 Por ejemplo, una empresa de software tiene una sólida infraestructura de ciberseguridad (fortaleza) y enfrenta el riesgo de ataques informáticos (amenaza). La estrategia FA es ofrecer servicios de ciberseguridad a otras empresas como una nueva línea de negocio.
                .row(titulo="Estrategias DA").ajuste-cajaAcordion.ajuste-vineta
                  p Las estrategias DA relacionan las debilidades internas con las amenazas externas. Su objetivo es reducir las limitaciones de la organización y evitar que los riesgos del entorno afecten gravemente su funcionamiento. Generalmente se consideran estrategias defensivas o preventivas, orientadas a disminuir vulnerabilidades, proteger recursos y mantener la continuidad de la unidad económica.
                  p.mb-3 Una empresa pequeña con problemas financieros (debilidad) y competencia agresiva en el mercado (amenaza). La estrategia DA plantea “Fusionarse con otra empresa para compartir recursos y sobrevivir en el mercado”.
          Separador
          #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.4 Definición de táctica organizacional
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img17.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 La táctica organizacional corresponde al conjunto de acciones específicas que permiten ejecutar una estrategia dentro de la unidad económica. Mientras la estrategia define el rumbo general y los objetivos que se desean alcanzar, la táctica establece cómo se llevarán a cabo las acciones, qué recursos se utilizarán, quiénes serán responsables y en qué tiempo se desarrollarán. Por ello, la táctica permite convertir las decisiones estratégicas en actividades concretas, medibles y aplicables al contexto de la organización.
      .bg-3
        .px-5
          p.mb-5 Seguidamente, se reconocerán los elementos que hacen posible la aplicación de una táctica organizacional.
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img18.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Acción concreta
                  p.mb-0.text-center La táctica convierte la estrategia en actividades específicas que pueden desarrollarse en áreas, procesos o proyectos de la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Responsables
                  p.mb-0.text-center Define quiénes participan en la ejecución de las acciones, asignando funciones y compromisos según las capacidades del equipo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recursos necesarios
                  p.mb-0.text-center Establece los recursos humanos, financieros, tecnológicos o materiales requeridos para llevar a cabo las actividades propuestas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tiempo de ejecución
                  p.mb-0.text-center Determina los plazos o momentos en los que deben realizarse las acciones, permitiendo organizar y hacer seguimiento al cumplimiento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Resultados esperados
                  p.mb-0.text-center Permite identificar qué se espera lograr con la acción táctica y cómo esta contribuye al cumplimiento de la estrategia organizacional.
          Separador
          #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.5 Relación y aplicación de estrategias y tácticas en la unidad económica
          p.mb-5 La estrategia define el rumbo y las prioridades de la unidad económica, mientras que la táctica concreta las acciones, responsables, recursos y tiempos para ejecutarla. Esta relación permite transformar el diagnóstico organizacional y la matriz DOFA en planes de acción orientados al mejoramiento y la competitividad. A continuación, se presentan los pasos para aplicar la estrategia y la táctica dentro de la unidad económica.
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Analizar el diagnóstico organizacional
                p.mb-0 Se revisan los hallazgos obtenidos en el análisis interno, externo y en la matriz DOFA para reconocer necesidades, oportunidades y riesgos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img24.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img25.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Definir la estrategia
                p.mb-0 Se establece el rumbo general que seguirá la unidad económica, de acuerdo con sus objetivos, capacidades y condiciones del entorno.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Formular tácticas
                p.mb-0 Se diseñan acciones específicas que permitan ejecutar la estrategia, considerando actividades, responsables, recursos disponibles y tiempos de realización.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img26.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img27.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Implementar las acciones
                p.mb-0 Se ponen en marcha las tácticas definidas, procurando que cada acción responda a la estrategia formulada y a las necesidades identificadas.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Hacer seguimiento
                p.mb-0 Se revisa el avance de las acciones aplicadas para verificar si se están cumpliendo los objetivos y si los recursos se utilizan adecuadamente.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img28.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img29.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Evaluar resultados
                p.mb-0 Se analizan los logros, dificultades e impactos obtenidos, con el fin de ajustar las estrategias y tácticas cuando sea necesario.

</template>

<script>
export default {
  name: 'Tema5',
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
