<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Contexto externo de la organización
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1-p
            p.mb-0 El análisis externo permite comprender el entorno que rodea a una empresa e identificar factores que pueden influir en su desarrollo, como aspectos políticos, económicos, sociales, tecnológicos, ambientales y legales. Aunque estos elementos no son controlados directamente por la organización, pueden representar oportunidades de crecimiento o amenazas que requieren estrategias adecuadas. Para ello, se utilizan modelos como PEST o PESTEL, los cuales facilitan el estudio del entorno y apoyan la toma de decisiones para mantener la competitividad y adaptarse a los cambios del mercado.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Factores políticos y legales
      p.mb-5 En este apartado, se conocerán algunos aspectos políticos y legales que pueden incidir en el desarrollo de una unidad económica y orientar su análisis externo.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estabilidad política")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estabilidad política
              p.mb-0 Influye en la confianza empresarial, la inversión y la continuidad de las actividades económicas dentro de un territorio.
        .py-3.py-md-4(titulo="Normativa legal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Normativa legal
              p.mb-0 Comprende leyes, decretos, reformas y regulaciones que orientan el funcionamiento de las empresas según su sector económico.
        .py-3.py-md-4(titulo="Legislación tributaria y laboral")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Legislación tributaria y laboral
              p.mb-0 Incluye obligaciones relacionadas con impuestos, contratación, seguridad social, prestaciones y demás responsabilidades legales de la organización.
        .py-3.py-md-4(titulo="Vigilancia y control")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Vigilancia y control
              p.mb-0 Hace referencia a las entidades y mecanismos encargados de supervisar el cumplimiento de normas, requisitos y condiciones legales.
        .py-3.py-md-4(titulo="Políticas públicas e incentivos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Políticas públicas e incentivos
              p.mb-0 Pueden favorecer el crecimiento empresarial mediante programas de apoyo, financiación, beneficios tributarios o respaldo institucional al sector productivo.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Factores económicos
      p.mb-5 Los factores económicos que pueden incidir en el funcionamiento, crecimiento y sostenibilidad de una organización son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img7.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Inflación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta los precios de bienes y servicios, los costos de operación y la capacidad de compra de los consumidores.
            .row(titulo="Tasas de interés").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Influyen en el acceso al crédito, la inversión empresarial y el costo de financiación para las organizaciones.
            .row(titulo="Desempleo e ingreso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinan la capacidad de consumo de la población y pueden afectar la demanda de productos o servicios.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Oferta y demanda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten analizar el comportamiento del mercado, la disponibilidad de productos y el nivel de interés de los consumidores.
            .row(titulo="Competencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incide en los precios, la diferenciación, la calidad del servicio y las estrategias comerciales de la empresa.
            .row(titulo="Informalidad empresarial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede limitar la productividad, reducir la competitividad y generar condiciones desiguales entre las empresas del sector.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img8.png", alt="" ).m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Factores sociales
      p.mb-5 Las variables sociales que pueden incidir en el comportamiento del mercado, la relación con los clientes y el desarrollo de una organización son:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estilos de vida y preferencias culturales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estilos de vida y preferencias culturales
              p.mb-0 Los cambios en los estilos de vida influyen en las decisiones de compra, el uso de productos y la forma como las personas se relacionan con las marcas. Las preferencias culturales también determinan gustos, necesidades, expectativas y comportamientos de consumo, por lo que las empresas deben reconocerlas para adaptar su oferta al contexto social en el que operan.
        .py-3.py-md-4(titulo="Nivel educativo y formación de la población")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Nivel educativo y formación de la población
              p.mb-0 El nivel educativo de los clientes actuales y potenciales puede influir en sus exigencias, hábitos de consumo y capacidad para valorar determinados productos o servicios. Una población con mayor acceso a formación e información suele demandar calidad, transparencia, innovación y mejores experiencias de atención.
        .py-3.py-md-4(titulo="Exigencias y confianza del público")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Exigencias y confianza del público
              p.mb-0 Las expectativas de los consumidores frente a la calidad, el precio, la atención y la responsabilidad empresarial pueden afectar la reputación de una organización. La confianza del público es un factor clave, ya que una empresa con credibilidad tiene mayores posibilidades de fidelizar clientes, fortalecer su imagen y sostenerse en el mercado.
        .py-3.py-md-4(titulo="Acceso a información y redes sociales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acceso a información y redes sociales
              p.mb-0 El acceso a internet y redes sociales ha transformado la relación entre las empresas y los consumidores. Las personas comparan productos, revisan opiniones, comparten experiencias y toman decisiones con base en la información disponible. Por ello, la presencia digital y la gestión de la comunicación son aspectos relevantes dentro del análisis social.
        .py-3.py-md-4(titulo="Cambios demográficos y seguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cambios demográficos y seguridad
              p.mb-0 Los cambios en la edad, composición familiar, ubicación, ingresos y características de la población pueden modificar la demanda de productos o servicios. Además, la percepción de seguridad y los índices de violencia pueden influir en la movilidad, la inversión, el consumo y el funcionamiento de las unidades económicas.
        .py-3.py-md-4(titulo="Cultura emprendedora y valores sociales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cultura emprendedora y valores sociales
              p.mb-0 Los valores predominantes en la sociedad influyen en la aceptación de nuevas ideas, negocios y formas de trabajo. En Colombia, la disminución de la aceptación sociocultural del emprendimiento muestra que factores como el miedo al fracaso, la falta de apoyo familiar o comunitario y la baja valoración del emprendimiento pueden limitar la creación de empresas y la iniciativa empresarial.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Factores tecnológicos
      p.mb-5 Los factores tecnológicos que pueden incidir en la productividad, innovación y competitividad de una unidad económica son:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Tecnologías de la información y la comunicación
                  p.mb-0 Las TIC permiten gestionar información, mejorar la comunicación interna y externa, automatizar actividades y facilitar el acceso a datos relevantes para la operación de la empresa. Su uso adecuado contribuye a que la organización sea más eficiente y pueda responder con mayor rapidez a las necesidades del mercado.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Comercio electrónico y presencia digital
                  p.mb-0 El comercio electrónico amplía las posibilidades de venta y permite llegar a clientes ubicados en diferentes lugares. Además, la presencia digital mediante páginas web, redes sociales o plataformas comerciales fortalece la visibilidad de la empresa, mejora la interacción con los consumidores y facilita nuevos canales de comercialización.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Seguridad digital
                  p.mb-0 La seguridad digital es fundamental para proteger la información, los sistemas, las transacciones y los datos de clientes o usuarios. Una empresa que no gestiona adecuadamente los riesgos tecnológicos puede enfrentar pérdidas de información, fraudes, interrupciones operativas o afectaciones en su reputación.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Innovación y transformación digital
                  p.mb-0 La transformación digital implica incorporar tecnología, pero también modificar procesos, modelos de negocio y formas de trabajo. Este factor permite mejorar la competitividad, optimizar recursos, crear nuevos productos o servicios y fortalecer la capacidad de adaptación de la organización frente a los cambios del entorno.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Equipos y técnicas de producción
                  p.mb-0 La incorporación de equipos modernos y técnicas de producción actualizadas puede mejorar la calidad, reducir tiempos, disminuir costos y aumentar la eficiencia operativa. Este factor es especialmente relevante en empresas industriales, comerciales o de servicios que dependen de procesos técnicos para su funcionamiento.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Gestión del conocimiento y toma de decisiones
                  p.mb-0 Las herramientas tecnológicas facilitan la recolección, procesamiento y análisis de información. Esto permite que la organización gestione mejor el conocimiento, identifique tendencias, evalúe resultados y tome decisiones más oportunas, fundamentadas en datos y orientadas al mejoramiento continuo.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Factores ambientales
      p.mb-5 En esta sección, se presentan algunos factores ambientales que pueden incidir en la operación, sostenibilidad y responsabilidad de una unidad económica frente a su entorno.
      .row.justify-content-center.mb-0
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Consumo energético").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El consumo de energía influye en los costos operativos y en el impacto ambiental de la organización. Analizar este factor permite identificar oportunidades para optimizar recursos, implementar tecnologías más eficientes y reducir gastos asociados al uso de electricidad, combustibles u otras fuentes energéticas.
            .row(titulo="Cambio climático y condiciones geográficas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El cambio climático puede afectar la disponibilidad de recursos, la logística, la producción y la continuidad de las operaciones. Asimismo, las condiciones geográficas, como ubicación, clima, acceso a recursos naturales o exposición a riesgos ambientales pueden representar oportunidades o amenazas para la unidad económica.
            .row(titulo="Gestión de residuos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La gestión adecuada de residuos sólidos y líquidos permite reducir impactos negativos sobre el ambiente y cumplir con las exigencias normativas. Este factor implica revisar cómo la organización separa, almacena, trata, reutiliza o dispone sus residuos, de acuerdo con su actividad económica.
            .row(titulo="Normativa y políticas ambientales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las normas ambientales establecen obligaciones que las empresas deben cumplir para prevenir, controlar o mitigar impactos sobre el entorno. Su análisis permite identificar requisitos legales, permisos, controles, sanciones, incentivos y políticas públicas relacionadas con la protección ambiental.
            .row(titulo="Responsabilidad social y sostenibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La responsabilidad social empresarial promueve prácticas orientadas al equilibrio entre productividad, bienestar social y protección ambiental. Este factor permite valorar si la organización desarrolla acciones sostenibles, como ahorro de recursos, reducción de contaminación, movilidad limpia, conservación de biodiversidad o apoyo a negocios verdes.
            .row(titulo="Bioeconomía y negocios verdes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La bioeconomía impulsa modelos productivos basados en el uso sostenible de la biodiversidad y los recursos naturales. En Colombia, las estrategias para fortalecer negocios verdes y prácticas sostenibles evidencian oportunidades para que las empresas innoven, generen empleo y participen en una transformación productiva más responsable.

</template>

<script>
export default {
  name: 'Tema3',
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
