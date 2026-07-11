<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1-p
            p.mb-0 El diagnóstico organizacional constituye una herramienta esencial para comprender la realidad de una unidad económica y orientar decisiones estratégicas basadas en información válida y confiable. Este componente formativo permite reconocer la importancia de recolectar, organizar y analizar datos mediante instrumentos como cuestionarios, entrevistas, guías de observación, listas de chequeo, pruebas estandarizadas y registros documentales.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='').m-auto
            .col-xl
              p.mb-0 Asimismo, el componente aborda el análisis del contexto interno, a partir de la identificación de fortalezas y debilidades, y del contexto externo, mediante el estudio de factores políticos, económicos, sociales, tecnológicos, ambientales y legales. A partir de esta información, la matriz DOFA integra los hallazgos obtenidos y facilita la formulación de estrategias FO, DO, FA y DA, orientadas al mejoramiento organizacional.
          .caja-2(data-aos="fade-left")
            p.mb-0 De esta manera, el aprendiz desarrolla capacidades para diagnosticar situaciones empresariales, identificar oportunidades de mejora, anticipar riesgos del entorno y proponer acciones coherentes con los objetivos, recursos y necesidades de la organización. Con ello, se fortalece el pensamiento analítico, la autonomía en el aprendizaje y la capacidad de aportar al desarrollo competitivo, sostenible y pertinente del sector productivo.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
