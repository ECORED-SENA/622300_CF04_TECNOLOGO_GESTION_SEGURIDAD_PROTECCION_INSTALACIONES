<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de saberes sobre diagnóstico organizacional y matriz DOFA.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la comprensión de los conceptos, instrumentos, procesos y estrategias asociados al diagnóstico organizacional, mediante preguntas de selección múltiple que permitan reconocer el análisis interno, externo, la matriz DOFA y la formulación de acciones estratégicas en una unidad económica.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluar la situación real de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar todas las áreas administrativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los procesos internos que existen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear normas sin analizar la información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: {
            id: 2,
            texto:
              '¿Qué permite identificar el análisis interno de una organización?',
            imagen: '@/assets/actividad/imagen1.png',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fortalezas y debilidades internas.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Amenazas externas y políticas públicas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Cambios sociales y factores legales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Oportunidades del mercado global.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          id: 3,
          texto:
            '¿Qué característica deben tener los instrumentos de recolección de datos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser extensos, informales y flexibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser rápidos, breves y decorativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser válidos, confiables y pertinentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ser generales, abiertos y subjetivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál instrumento permite obtener información escrita o digital de una población?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guía de observación empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuestionario o encuesta aplicada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Entrevista libre organizacionalmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro de los documentos históricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué ventaja tiene el cuestionario como instrumento de recolección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituye por completo la observación directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evita siempre cualquier respuesta sesgada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Profundiza emociones sin guía previa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recoge datos de forma rápida y económica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué limitación puede presentar una entrevista dentro del diagnóstico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impide conocer opiniones personales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No permite conversar con participantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requiere tiempo para aplicar y analizar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo produce datos numéricos cerrados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de entrevista combina preguntas guía con flexibilidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entrevista estructurada y rígida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entrevista documental cerrada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entrevista estadística simple.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entrevista semiestructurada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Para qué se utiliza una guía de observación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para registrar hechos sistemáticos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para elaborar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para diseñar presupuestos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para reemplazar todos los informes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué analiza principalmente el contexto externo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recursos propios de cada trabajador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Procesos internos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Factores que rodean a la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Habilidades directivas internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes elementos pertenece al contexto interno?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Legislación laboral nacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recursos humanos disponibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambios tecnológicos externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tendencias sociales del entorno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué modelo se usa comúnmente para estudiar factores externos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo PESTEL del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modelo de cultura institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modelo de control operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modelo PESTEL del entorno.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué representa una fortaleza dentro del análisis organizacional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una capacidad valiosa de la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una carencia interna de recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una amenaza legal del contexto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una dificultad externa del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué representa una debilidad en el diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una oportunidad externa favorable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una ventaja competitiva sostenible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una limitación interna por mejorar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una tendencia positiva del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué integra la matriz DOFA en el diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo datos financieros históricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Factores internos y externos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente políticas laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo procesos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué significa la sigla DOFA dentro del análisis estratégico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debilidades, oportunidades, fortalezas y amenazas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Datos, análisis, objetivos, metas, funciones y áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollo, ordenamiento, flujo, reacción y acción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dirección, organización, finanzas y administración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué estrategia corporativa busca aumentar productos o mercados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estrategia de estabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estrategia de expansión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estrategia de atrinchera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategia de crecimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es el objetivo de las estrategias FO?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir debilidades ante riesgos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfrentar amenazas con controles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Corregir fallas sin oportunidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar fortalezas y oportunidades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué finalidad tienen las estrategias FA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprovechar debilidades internas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar fortalezas frente a amenazas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar los riesgos del entorno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el análisis externo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué buscan las estrategias DO dentro de la matriz DOFA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Superar debilidades usando oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar las amenazas con las fortalezas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar las oportunidades del entorno mixto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener las debilidades sin cambio alguno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué buscan las estrategias DA en una organización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ampliar amenazas del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar fortalezas por riesgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Minimizar debilidades y amenazas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar debilidades internas.',
              esCorrecta: false,
            },
          ],
          ensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
