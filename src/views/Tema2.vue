<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Contexto interno de la organización
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El análisis interno permite conocer el funcionamiento de una organización desde sus áreas, procesos, recursos y capacidades. Su propósito es identificar fortalezas y debilidades para reconocer lo que la empresa hace bien, corregir aspectos por mejorar y diseñar estrategias que aprovechen sus capacidades internas.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Factores internos
      p.mb-5 Los factores internos son condiciones propias de la organización que influyen en su desempeño, capacidades y resultados, permitiendo reconocer recursos, procesos y aspectos por mejorar. A continuación, se presentan los principales factores internos que pueden analizarse dentro de una unidad económica para identificar fortalezas y debilidades organizacionales.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img2.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Recursos humanos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen la experiencia, formación, motivación, habilidades y desempeño del personal. Este factor permite reconocer el aporte del talento humano al logro de los objetivos organizacionales.
            .row(titulo="Recursos financieros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relacionan con la capacidad de generar ingresos, controlar costos, acceder a financiamiento y mantener estabilidad económica para el funcionamiento de la organización.
            .row(titulo="Capacidades tecnológicas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden la infraestructura tecnológica, el uso de herramientas digitales, la innovación y la capacidad de adaptación frente a los cambios tecnológicos.
            .row(titulo="Estructura organizacional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Hace referencia a la jerarquía, distribución de funciones, comunicación interna, procesos de decisión y nivel de coordinación entre áreas o departamentos.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Cultura organizacional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al conjunto de valores, normas, creencias y comportamientos compartidos que influyen en la forma de actuar dentro de la organización.
            .row(titulo="Procesos operativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen las actividades relacionadas con producción, logística, calidad, inventarios y prestación del servicio, permitiendo valorar la eficiencia del funcionamiento interno.
            .row(titulo="Sistemas de información").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se refieren a la capacidad de recolectar, procesar, almacenar y utilizar información para apoyar la gestión y la toma de decisiones.
            .row(titulo="Imagen y reputación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representan la percepción que tienen clientes, colaboradores y grupos de interés sobre la organización, lo cual puede influir en su desempeño y posicionamiento.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img3.png", alt="" ).m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Fortalezas
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img18.svg', alt='').m-auto
        .col-xl
          p.mb-0 Las fortalezas son capacidades, recursos, actividades o condiciones internas que la organización desarrolla de manera eficiente y que favorecen su desempeño. Estas pueden estar relacionadas con el talento humano, la tecnología, la experiencia, los procesos, la calidad del servicio, la reputación o los recursos disponibles. Su identificación permite reconocer aquello que la unidad económica hace bien y que puede aprovechar para generar ventajas frente al entorno. Para comprender su importancia, a continuación, se presentan algunos aspectos fundamentales:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Capacidades internas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Capacidades internas
              p.mb-0 Representan habilidades, conocimientos, recursos o procesos que la organización domina y utiliza para cumplir sus objetivos de manera efectiva.
        .py-3.py-md-4(titulo="Ventaja competitiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ventaja competitiva
              p.mb-0 Cuando una fortaleza es valiosa, difícil de imitar y aporta valor, puede convertirse en una ventaja que diferencia a la organización frente a otras.
        .py-3.py-md-4(titulo="Apoyo estratégico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Apoyo estratégico
              p.mb-0 Las fortalezas permiten formular estrategias más realistas, aprovechar oportunidades del entorno y responder de mejor manera a los desafíos organizacionales.
        .py-3.py-md-4(titulo="Mejora del desempeño")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Mejora del desempeño
              p.mb-0 Reconocer las fortalezas ayuda a potenciar lo que funciona bien, mantener buenas prácticas y orientar acciones hacia mejores resultados.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Debilidades
      p.mb-5 Las debilidades son limitaciones, carencias o dificultades internas que afectan el desempeño de una organización y pueden impedir el cumplimiento de sus objetivos. Estas pueden relacionarse con falta de recursos, procesos poco eficientes, baja capacitación, problemas de comunicación, tecnología insuficiente o deficiencias en la gestión. Su identificación permite reconocer áreas de mejora y tomar decisiones más realistas para fortalecer la unidad económica. Dada su importancia, se presentan algunos aspectos esenciales:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Limitaciones internas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Limitaciones internas
              p.mb-0 Representan aspectos propios de la organización que dificultan el desarrollo eficiente de procesos, actividades o resultados esperados.
        .py-3.py-md-4(titulo="Áreas de mejora")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Áreas de mejora
              p.mb-0 Permiten identificar procesos, recursos o capacidades que requieren fortalecimiento para mejorar el desempeño de la unidad económica.
        .py-3.py-md-4(titulo="Riesgo organizacional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Riesgo organizacional
              p.mb-0 Cuando no se atienden oportunamente, las debilidades pueden afectar la productividad, la competitividad y la capacidad de respuesta de la organización.
        .py-3.py-md-4(titulo="Toma de decisiones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Toma de decisiones
              p.mb-0 Reconocer las debilidades facilita la formulación de acciones correctivas, planes de mejora y estrategias ajustadas a la realidad interna de la organización.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Análisis del contexto interno en la unidad económica
      p.mb-5 El análisis del contexto interno en la unidad económica permite examinar los recursos, capacidades, procesos y condiciones propias de la organización para comprender su funcionamiento real. A través de este análisis se identifican fortalezas que pueden potenciarse y debilidades que requieren acciones de mejora, favoreciendo la formulación de estrategias ajustadas a las necesidades, objetivos y capacidades internas de la organización. Para lo anterior, es necesario revisar de manera ordenada los principales elementos internos que influyen en el desempeño de la unidad económica.
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Reconocer las áreas internas
                p.mb-0 Identificar las áreas o departamentos de la organización, como producción, finanzas, talento humano, mercadeo, administración o servicio al cliente.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Revisar los recursos disponibles
                p.mb-0 Analizar los recursos humanos, financieros, tecnológicos, materiales e informativos con los que cuenta la unidad económica para desarrollar sus actividades.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Evaluar procesos y capacidades
                p.mb-0 Observar cómo se ejecutan las actividades internas, qué tan eficientes son los procesos y qué capacidades tiene la organización para cumplir sus objetivos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar fortalezas
                p.mb-0 Reconocer los aspectos internos que funcionan adecuadamente y que representan ventajas, capacidades o condiciones favorables para la organización.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar debilidades
                p.mb-0 Detectar limitaciones, fallas, carencias o dificultades internas que afectan el desempeño y que requieren acciones de mejora.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Formular orientaciones de mejora
                p.mb-0 Utilizar los hallazgos del análisis interno para proponer acciones que fortalezcan el desempeño, corrijan fallas y aprovechen las capacidades existentes.

</template>

<script>
export default {
  name: 'Tema2',
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
