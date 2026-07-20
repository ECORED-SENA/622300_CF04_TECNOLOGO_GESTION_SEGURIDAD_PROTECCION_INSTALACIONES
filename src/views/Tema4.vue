<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Matriz de diagnóstico DOFA
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La matriz de diagnóstico DOFA es una herramienta de análisis estratégico que permite integrar la información obtenida del contexto interno y externo de una organización. A través de ella se identifican fortalezas, oportunidades, debilidades y amenazas, con el propósito de comprender la situación actual de la unidad económica, reconocer factores que favorecen o limitan su desempeño y orientar la formulación de estrategias acordes con sus necesidades, capacidades y condiciones del entorno.
      p.mb-5 La comprensión de la matriz DOFA requiere reconocer cómo se relacionan sus elementos y de qué manera contribuyen al análisis estratégico de la organización. Por ello, seguidamente se abordan sus aspectos principales.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Propósito de la matriz DOFA
                  p.mb-0 La matriz DOFA permite organizar la información obtenida durante el diagnóstico organizacional para reconocer la situación actual de la unidad económica. Su propósito es identificar aspectos internos y externos que pueden influir positiva o negativamente en el desempeño de la organización y servir como base para formular estrategias de mejora.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Relación con el análisis interno
                  p.mb-0 El análisis interno aporta información sobre las fortalezas y debilidades de la organización. Las fortalezas representan recursos, capacidades o actividades que se desarrollan adecuadamente, mientras que las debilidades corresponden a limitaciones, carencias o dificultades que requieren intervención o mejora.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Relación con el análisis externo
                  p.mb-0 El análisis externo permite identificar oportunidades y amenazas provenientes del entorno. Las oportunidades son condiciones externas que pueden favorecer el crecimiento o desarrollo de la organización, mientras que las amenazas son factores que pueden afectar su estabilidad, competitividad o funcionamiento.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Proceso general del análisis DOFA
                  p.mb-0 El proceso inicia con la revisión de la misión, metas y estrategias actuales de la organización. Luego se realiza el análisis interno y externo, se integran los hallazgos en la matriz DOFA y, posteriormente, se formulan, implementan y evalúan estrategias orientadas al mejoramiento organizacional.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img6.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Utilidad para la estrategia organizacional
                  p.mb-0 La matriz DOFA no se limita a enumerar factores positivos y negativos; su valor está en relacionar la información interna y externa para orientar decisiones. A partir de este análisis, la organización puede definir acciones para aprovechar fortalezas, corregir debilidades, responder a amenazas y utilizar oportunidades.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Actualización de la matriz DOFA
                  p.mb-0 La matriz DOFA debe revisarse periódicamente, ya que los factores internos y externos pueden cambiar con el tiempo. Por ello, su actualización permite mantener vigente el diagnóstico, ajustar estrategias y responder de manera oportuna a nuevas condiciones del entorno o de la organización.
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Componentes de la matriz
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1-p
            p.mb-0 Los componentes de la matriz DOFA son fortalezas, debilidades, oportunidades y amenazas. Estos permiten analizar la situación interna y externa de una organización, diferenciando los factores que dependen de la unidad económica de aquellos que provienen del entorno. Su comprensión facilita la organización de la información y el análisis estratégico dentro de la matriz. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img8.png', alt='').m-auto
      p.mb-5 El siguiente cuadro comparativo permite identificar el origen y la función de cada componente de la matriz DOFA, diferenciando los factores internos de los externos y comprendiendo cómo aportan al análisis estratégico de la organización.
      .row.justify-content-center.mb-0
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Cuadro comparativo componentes de la matriz DOFA
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Componente
                  th.ajuste-border-tabla.texto-left Origen del factor
                  th.texto-left Función dentro de la matriz
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fortalezas
                  td.ajuste-border-tabla.texto-left Contexto interno
                  td.texto-left Permiten reconocer capacidades que pueden aprovecharse estratégicamente.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Debilidades
                  td.ajuste-border-tabla.texto-left Contexto interno
                  td.texto-left Señalan aspectos que deben corregirse o fortalecerse.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Oportunidades
                  td.ajuste-border-tabla.texto-left Contexto externo
                  td.texto-left Indican condiciones favorables que pueden ser aprovechadas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Amenazas
                  td.ajuste-border-tabla.texto-left Contexto externo
                  td.texto-left Alertan sobre riesgos que pueden afectar la organización.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Elaboración de la matriz DOFA
      .bg-1
        .px-5
          p.mb-5 En este apartado se presenta la estructura básica de la matriz DOFA, a través de la cual, se permite conocer la relación entre los factores internos y externos. A partir de este cruce se formulan posteriormente estrategias que ayudan a aprovechar oportunidades, enfrentar amenazas, potenciar fortalezas y reducir debilidades. En la siguiente tabla se presenta un ejemplo de matriz DOFA. 
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 1.
                span Ejemplo de matriz DOFA
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t4/img9.svg', alt='Se presenta una matriz DOFA que organiza fortalezas, debilidades, oportunidades y amenazas, junto con estrategias FO, DO, FA y DA, para relacionar factores internos y externos y orientar decisiones orientadas al aprovechamiento, mejora, prevención y reducción de riesgos empresariales. ').m-auto
          .row.justify-content-center.mb-5
            .col-xl-6
              .caja-4.mb-5(data-aos="flip-up")
                .row.align-items-center
                  .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
                  .col-xl.col-md-10
                    p.mb-0 Los pasos para elaborar la matriz DOFA son los siguientes:
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar las oportunidades
                p.mb-0 Se elabora una lista de factores externos positivos que pueden favorecer el crecimiento, posicionamiento o desarrollo de la organización.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img10.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img11.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar las amenazas
                p.mb-0 Se reconocen los factores externos que pueden afectar el funcionamiento, estabilidad o competitividad de la unidad económica.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar las fortalezas
                p.mb-0 Se registran los recursos, capacidades, procesos o condiciones internas que representan ventajas para la organización.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img12.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img13.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar las debilidades
                p.mb-0 Se determinan las limitaciones, carencias o dificultades internas que pueden afectar el desempeño organizacional.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Formular estrategias FO
                p.mb-0 Se relacionan las fortalezas internas con las oportunidades externas para definir acciones que permitan aprovechar condiciones favorables del entorno.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img14.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img15.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Formular estrategias DO
                p.mb-0 Se relacionan las debilidades internas con las oportunidades externas para plantear acciones que ayuden a superar limitaciones aprovechando oportunidades.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Formular estrategias FA
                p.mb-0 Se relacionan las fortalezas internas con las amenazas externas para establecer acciones que permitan enfrentar o reducir riesgos del entorno.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img16.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img17.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Formular estrategias DA
                p.mb-0 Se relacionan las debilidades internas con las amenazas externas para proponer acciones defensivas que reduzcan riesgos y protejan la estabilidad organizacional.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Revisar la coherencia de la matriz
                p.mb-0 Se verifica que las estrategias formuladas estén relacionadas con los factores identificados y respondan a la realidad de la unidad económica.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img18.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img19.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Priorizar las acciones
                p.mb-0 Se seleccionan las estrategias más pertinentes según su importancia, viabilidad, recursos disponibles e impacto esperado en la organización.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Análisis de resultados
      p.mb-5 El análisis de resultados de la matriz DOFA permite interpretar la relación entre fortalezas, debilidades, oportunidades y amenazas. A partir de esta revisión, la organización puede identificar prioridades, formular estrategias y definir acciones de mejora acordes con su realidad interna y externa.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img20.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Análisis FO").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El análisis FO permite identificar cómo las fortalezas internas pueden aprovechar las oportunidades del entorno. Este cruce ayuda a formular estrategias de crecimiento, expansión, innovación o posicionamiento, utilizando aquello que la organización hace bien para responder a condiciones externas favorables.
            .row(titulo="Análisis DO").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El análisis DO permite reconocer cómo las oportunidades externas pueden contribuir a superar debilidades internas. Este cruce orienta estrategias de mejora, fortalecimiento o adaptación, especialmente cuando la organización necesita corregir limitaciones para aprovechar posibilidades del entorno.
            .row(titulo="Análisis FA").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El análisis FA muestra cómo las fortalezas internas pueden utilizarse para enfrentar o reducir amenazas externas. Este cruce permite formular estrategias de protección, diferenciación o respuesta frente a riesgos del entorno, apoyándose en las capacidades que la organización ya posee.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Análisis DA").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El análisis DA permite identificar situaciones en las que las debilidades internas se relacionan con amenazas externas. Este cruce orienta estrategias defensivas o preventivas, dirigidas a disminuir riesgos, corregir limitaciones y proteger la estabilidad de la organización.
            .row(titulo="Priorización de hallazgos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Después de analizar los cruces, es importante determinar cuáles resultados requieren mayor atención. Para ello, se pueden considerar criterios como impacto, urgencia, viabilidad, recursos disponibles y relación con los objetivos de la unidad económica.
            .row(titulo="Formulación de conclusiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El análisis debe finalizar con conclusiones claras que sinteticen la situación de la organización. Estas conclusiones permiten identificar necesidades, oportunidades de mejora y orientaciones estratégicas para la toma de decisiones.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img21.png", alt="" ).m-auto
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Matriz DOFA para la toma de decisiones
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img9.svg', alt='').m-auto
        .col-xl
          p.mb-0 La matriz DOFA permite identificar fortalezas, debilidades, oportunidades y amenazas, orientando la toma de decisiones estratégicas en la organización. Al relacionar factores internos y externos, facilita la formulación de acciones para aprovechar oportunidades, enfrentar amenazas y mejorar el desempeño. En este sentido, se invita a reproducir el siguiente pódcast, donde se explica su aporte al análisis organizacional y a la toma de decisiones.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-5(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t4/img22.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="DOFA en acción: ¿cómo diagnosticar y decidir mejor?"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t4/img23.png" ).m-auto

</template>

<script>
import audio1 from '@/assets/curso/podcast/CF4.mp3'
export default {
  name: 'Tema4',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
