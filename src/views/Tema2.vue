<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2 
      h1 Mejora continua, evaluación e informes en el proceso de contratación y afiliación 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.p-3.pt-5.pb-0(style="background-color: #16697A; border-radius: 12px;")
        .row.justify-content-center.align-items-center.mb-4
          .col-12.col-lg-10
            p.text-white Con este mecanismo se busca fortalecer la gestión de la contratación y vinculación de las empresas públicas o privadas, entregando herramientas que le serán útiles para la planificación, desarrollo y verificación; <b>pero ante todo para la mejora continua desde planes de trabajo o acciones correctivas provenientes de:</b>
        .row.justify-content-center
          .col-12.col-lg-6.align-items-center
            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0.text-white Iniciativas propias para mejorar el proceso.
              li
                i.fas.fa-check
                p.mb-0.text-white Resultados desfavorables en la evaluación de indicadores de eficiencia, efectividad o eficacia que se empleen para la medición del proceso.
              li
                i.fas.fa-check
                p.mb-0.text-white Producto de los hallazgos encontrados.
              li
                i.fas.fa-check
                p.mb-0.text-white Recomendaciones o aspectos por mejorar que surgen en los diferentes comités de la entidad o empresa, puede darse en las órdenes de la alta dirección.
              li
                i.fas.fa-check
                p.mb-0.text-white Los diferentes métodos de control que se empleen en la empresa pública o privada.  

          .col-6.col-lg-4.d-flex.align-items-end
            img(src='@/assets/curso/tema2/img01.png')    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12.p-0
        .cajon.color-acento-botones.p-4.mb-5        
          p.mb-0 De esta manera, la mejora continua como lo expresa la misma denominación es un método permanente, orientado a generar valor agregado a la gestión realizada o corregir defectos de la gestión del proceso, debiéndose ejecutar mediante mecanismos que identifiquen las problemáticas y que respalden los resultados finales, los cuales deben ser reflejados en los diferentes informes de gestión de las empresas. 

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Herramientas de mejora continua “No conformidades y acciones correctivas” 

    .cajon-b.color-primario.px-1.py-2.mb-5(data-aos="fade-right")
      p.mb-0 <b>Para el manejo de las “No conformidades”</b>, que se refiere a la falla o error en algunas actividades que se gestionan y el “tratamiento de mejora continua”, que  va orientado a la implementación de las acciones correctivas es necesario apoyarse en la Norma ISO 9001 versión 2015, numeral 10.2 que sirve para orientarse cuando se presenta una “No conformidad” en la empresa. 
    
    .cajon.color-acento-botones.px-lg-5.p-lg-4.p-3.mb-5(data-aos="fade-left")   
      p.mx-lg-5.mx-0.mb-0 <b>Para nuestro caso el incumplimiento de alguno de los requisitos para el desarrollo de la contratación laboral se debe tomar la acción necesaria e inmediata para investigar qué ha ocurrido y corregirlo, con el objetivo de evitar que casos similares se presenten a futuro, buscando mitigar el impacto de lo ocurrido.</b>

    h3.text-center.mb-5 Pero, qué medidas tomar ante las “No conformidades”:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.p-0
        figure.mb-5(data-aos="fade-left")
          .video                
            iframe(width="788" height="443" src="https://www.youtube.com/embed/2zSZepWU6UE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        .div(style="border-radius: 12px; background-color: #0C0A3E")
          .row.justify-content-center.align-items-center.px-4
            .col-3.col-lg-1.p-3
              img(src='@/assets/curso/tema1/img07.svg')    
            .col-12.col-lg-8.p-3
              pmb-0.text-white Para ver algunos ejemplos de técnicas para la identificación de causas raíces consultar el siguiente enlace sobre 10 técnicas de análisis de causa raíz de los desperdicios de la calidad para eliminarlos.
            .col-12.col-lg-3.p-3.d-flex.justify-content-center
              a.boton.me-3.indicador__container(
                href="https://www.nueva-iso-9001-2015.com/2020/05/10-tecnicas-de-analisis-de-causa-raiz-de-los-desperdicios-de-la-calidad-para-eliminarlos/"
                target="_blank"
                type="application/pdf"                
              )
                span Ir al Sitio web
                i.fas.fa-link                

    p.mb-5 <b>Después de identificar las causas, es necesario determinar acciones concretas que se vayan a desarrollar, un ejemplo es el método diseñado por Edward Deming, conocido como el ciclo PHVA (planear, hacer, verificar, actuar):    </b>
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-12.col-lg-6
          h4.text-center.mb-4 Ciclo PHVA
          ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-right")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img02.svg')                            

            .tarjeta.color-primario.p-3(x="8.2%" y="24%" numero=" ")
              p.mb-0 Con el actuar, es donde de manera particular se evalúa la eficiencia de la actividades de la acción correctiva implementada y se determina el cierre de la acción o el ajuste a la acción correctiva si se requiere.

            .tarjeta.color-primario.p-3(x="92.2%" y="24%" numero=" ")
              p.mb-0 Se inicia esta secuencia con la planificación para gradualmente ir corrigiendo y reduciendo los efectos no deseados.

            .tarjeta.color-primario.p-3(x="8.2%" y="77%" numero=" ")
              p.mb-0 La etapa de verificación permitirá ejercer los controles oportunos, con el objetivo que sean subsanadas las falencias identificadas y que no se repitan en futuras ocasiones.

            .tarjeta.color-primario.p-3(x="92.2%" y="77%" numero=" ")
              p.mb-0 En esta fase se desarrollan actividades que logren irradiar de manera integral la solución de las falencias. La eficacia de estas acciones y los efectos potenciales que tengan sobre el proceso de contratación y vinculación laboral, repercutirán de manera directa en futuras aplicaciones del proceso antes señalado.
        
          figcaption <b>Nota.</b> Adaptado del ciclo PHVA definido por Edward Deming.
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Análisis y evaluación del proceso de contratación

    p.mb-5 Además de evaluar el proceso de contratación laboral y la vinculación de un manera correcta, desarrollando mecanismos y técnicas vistas anteriormente, es importante señalar que las entidades o empresas deben contar con mecanismos como son los comités de contratación o de selección de personal, y que los resultados de estos, deben reflejar un análisis de la aprobación o no, para la vinculación del personal, emitiendo informes de evaluación, los cuales entre muchas características deben estar fortalecidos por componentes de análisis como:

    TabsA.color-acento-botones.mb-5(data-aos="fade-right")    
      .tarjeta.tarjeta--gris.p-4(style="background-color: #F3F9FF" titulo="Calidad de la información")
        .row.justify-content-center.align-items-center
          .col-lg-7.p-lg-4
            h4 Calidad de la información
            p.mb-0 Para un correcto análisis de información, mucho más en una etapa de selección o evaluación de personal, es importante tener insumos previamente solicitados mediante una planificación correcta, que den información concreta y clara que permita vislumbrar características determinantes, vistas desde diferentes enfoques.
          .col-lg-1
          .col-6.col-lg-2
            img(src='@/assets/curso/tema2/img04.svg')                            
          .col-lg-2

      .tarjeta.tarjeta--gris.p-4(style="background-color: #F3F9FF" titulo="Aplicación de técnicas<br>o protocolos establecidos")
        .row.justify-content-center.align-items-center
          .col-lg-7.p-lg-4
            h4 Aplicación de técnicas o protocolos establecidos
            p.mb-0 Se deben desarrollar técnicas que permitan tener un panorama completo de la información que se esté analizando; y que deben estar establecidas bajo los protocolos de la entidad o empresa; no obstante, es importante estudiar previamente la aplicación de estas técnicas, independientemente si ya han sido utilizadas.
          .col-lg-1
          .col-6.col-lg-2
            img(src='@/assets/curso/tema2/img03.svg')                            
          .col-lg-2
      .tarjeta.tarjeta--gris.p-4(style="background-color: #F3F9FF" titulo="Comunicación correcta de los resultados")
        .row.justify-content-center.align-items-center
          .col-lg-7.p-lg-4
            h4 Comunicación correcta de los resultados
            p.mb-0 En los análisis de resultados, el determinante es saber mostrar la información, para lo que se debe tener en cuenta la objetividad, la claridad, la transparencia y la organización de la información.
          .col-lg-1
          .col-6.col-lg-2
            img(src='@/assets/curso/tema2/img05.svg')                            
          .col-lg-2
    
    .cajon.color-acento-botones.px-lg-5.p-lg-4.p-3(data-aos="fade-left")   
      p.mx-lg-5.mx-0.mb-0 <b>Para el desarrollo laboral  las entidades o empresas cuentan con mecanismos tales como las evaluaciones de desempeño y los informes de supervisión, los cuales igualmente deben analizar el cumplimiento de las actividades planificadas y desempeñadas por los empleados, reflejando un análisis integral de sus funciones, y que pueden ser evidenciadas en escenarios como los comités de gestión humana u otros, donde se plasme la gestión de los procesos y la gestión de quienes los administran. </b>
    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Indicadores de gestión

    p.mb-5 La medición de resultados en las entidades o empresas es necesaria para poder estar a la vanguardia de las necesidades o servicios que se desarrollan en un mundo de oportunidades que a diario es cambiante. Ponderar la productividad y el impacto que son componentes necesarios hoy en día, con enfoque por el aumento de los resultados, siempre debe ser la prioridad; es así como los métodos de medición, comúnmente conocidos como indicadores, parten de la utilidad para lo que se crean, relacionando estos aspectos de importancia, de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.p-3.pt-3.pb-0(style="background-color: #16697A; border-radius: 12px;")          
        .row.justify-content-center
          .col-12.col-lg-7.d-flex.align-items-center
            div.p-0
              h3.text-white Utilidades de los indicadores: 
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  p.mb-0.text-white Tomar decisiones en todos los niveles.
                li
                  i.fas.fa-check
                  p.mb-0.text-white Medir el desempeño de procesos y de personas.
                li
                  i.fas.fa-check
                  p.mb-0.text-white Comparar y hacer seguimiento de la gestión.
                li
                  i.fas.fa-check
                  p.mb-0.text-white Medir la eficacia, la eficiencia y la efectividad de la entidad o la empresa.


          .col-6.col-lg-3.d-flex.align-items-end
            img(src='@/assets/curso/tema2/img06.png')    

    p.mb-5 Teniendo en cuenta la pertinencia e importancia de la medición es necesario abordar los tipos de indicadores y las características que deben contener estos elementos de medición, ver figura.

    .titulo-sexto.color-primario
      span <b>Figura 2.</b> Tipos y características de indicadores
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-7
        img(src='@/assets/curso/tema2/img07.svg')    

    p.mb-5 Ahora bien, comprendiendo el criterio general de los indicadores, surge la necesidad que percibir cómo se pueden crear este tipo de herramientas de medición, con el objetivo de dar una orientación más amplia para la creación de indicadores, como también ayudar a la conceptualización de estas herramientas de medición actualmente existentes en su entidad o empresa.

    .fondo1.p-0
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-6
          img(src='@/assets/curso/tema2/img09.svg')    

      h3.text-center Recomendaciones para la creación de indicadores

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-8.col-12
           PasosA.color-acento-contenido.mb-5(tipo="l")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                p.mb-lg-0.mb-4 Identifique el objetivo del proceso, la finalidad del objetivo.
              .col-6.col-lg-2.d-flex.justify-content-center
                img(src='@/assets/curso/tema2/img10.svg')    
              .col-lg-2
            .row.justify-content-center.align-items-center
              .col-lg-2
              .col-6.col-lg-2.d-flex.justify-content-center
                img.mb-lg-0.mb-4(src='@/assets/curso/tema2/img11.svg')    
              .col-12.col-lg-8
                p.mb-0 Identifique las variables a medir (cualitativas o cuantitativas).              
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                p.mb-lg-0.mb-4(style="text-align: left") Identifique las fuentes de las variables (cualitativas o cuantitativas).
              .col-6.col-lg-2.d-flex.justify-content-center
                img(src='@/assets/curso/tema2/img12.svg')    
              .col-lg-2
            .row.justify-content-center.align-items-center
              .col-lg-2
              .col-6.col-lg-2.d-flex.justify-content-center
                img.mb-lg-0.mb-4(src='@/assets/curso/tema2/img13.svg')    
              .col-12.col-lg-8
                p.mb-0(style="text-align: left") Defina la fórmula del indicador, realice ejercicios prácticos previamente (variable medida/variable esperada).
            .row.justify-content-center.align-items-center
              .col-12.col-lg-9
                p.mb-2 Clasifique el indicador:
                p.mb-2 <b>Eficacia:</b>  mide los resultados alcanzados frente a los resultados esperados.
                p.mb-2 <b>Eficiencia:</b> mide los recursos utilizados frente a los resultados obtenidos o también mide la    relación entre los resultados alcanzados frente a los recursos disponibles. 
                p.mb-lg-0.mb-4 <b>Efectividad:</b> miden el impacto del indicador frente al cumplimiento del objetivo o también se puede ver como la combinación entre la eficiencia y la eficacia.
              .col-6.col-lg-2.d-flex.justify-content-center
                img(src='@/assets/curso/tema2/img14.svg')    
              .col-lg-1
            .row.justify-content-center.align-items-center
              .col-lg-2
              .col-6.col-lg-2.d-flex.justify-content-center
                img.mb-lg-0.mb-4(src='@/assets/curso/tema2/img15.svg')    
              .col-12.col-lg-8
                p.mb-0(style="text-align: left") Fije una meta – se pueden dar espacios para la medición de la línea base.
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                p.mb-lg-0.mb-4 Determine la periodicidad de la medición (semana, quincenal, mensual, semestral o anual).
              .col-6.col-lg-2.d-flex.justify-content-center
                img(src='@/assets/curso/tema2/img16.svg')    
              .col-lg-2
            .row.justify-content-center.align-items-center
              .col-lg-2
              .col-6.col-lg-2.d-flex.justify-content-center
                img.mb-lg-0.mb-4(src='@/assets/curso/tema2/img17.svg')    
              .col-12.col-lg-8
                p.mb-0(style="text-align: left") Delimite los rangos de evaluación ( por ejemplo, de 0 a 60 deficiente, de 60,1 a 75 aceptable, de 75,1 a 80 bueno, de 85,1 a 100, de 100,1 en adelante es sobresaliente).  
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                p.mb-lg-0.mb-4 Identifique y asigne responsables del indicador y de sus variables. 
              .col-6.col-lg-2.d-flex.justify-content-center
                img(src='@/assets/curso/tema2/img18.svg')    
              .col-lg-2
    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4. Informes de gestión y tipos de informes

    p.mb-5 Para el desarrollo de informes de gestión del proceso de contratación o vinculación laboral es importante integrar todas las características y métodos expuestos; pero teniendo claro en qué punto y momento se va a realizar el informe, si es un punto o es el cumplimiento de alguna característica específica del proceso. 

    .fondo2.p-0.py-5.mb-5
      h3.mb-4 Algunos ejemplos de informes que se desarrollan en la gestión del talento humano son:
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-12.col-lg-7
          ul.lista-ul--color.mb-lg-0.mb-3
            li
              i.fas.fa-check
              p.mb-0 Informe de evaluación del proceso de contratación laboral.
            li
              i.fas.fa-check
              p.mb-0 Informe de selección de los procesos de selección del personal.
            li
              i.fas.fa-check
              p.mb-0 Informe de resultados de alguna de las fases del ciclo de la gestión del talento humano.
            li
              i.fas.fa-check
              p.mb-0 Informes de supervisión. 
            li
              i.fas.fa-check
              p.mb-0 Informes de las evaluaciones de desempeño laboral.
            li
              i.fas.fa-check
              p.mb-0 Informes de gestión del proceso y la medición de sus indicadores.
            li
              i.fas.fa-check
              p.mb-0 Informes de resultados de los planes de mejoramiento.

        .col-6.col-lg-3
          img(src='@/assets/curso/tema2/img19.svg')    

    p.mb-5 Para el desarrollo de este tipo de entregas de información, recuerde tener en cuenta los elementos determinantes para el análisis CAC (Calidad de la información, Aplicación de técnicas y Comunicación correcta de resultados). Un ejemplo interesante para el desarrollo de un informe es el de resultados de un plan de mejoramiento, para lo cual se da las siguientes <b>consideraciones que deben integrar la composición del informe:</b>

    .fondo2.p-0.py-5
      h3.mb-4 Consideraciones que deben integrar la composición del informe:
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-12.col-lg-7
          ul.lista-ul--color.mb-lg-0.mb-3
            li
              i.fas.fa-check
              p.mb-0 Se identifica un hallazgo por parte de un órgano externo a la entidad o empresa.
            li
              i.fas.fa-check
              p.mb-0 Dado el hallazgo se genera un ciclo de gestión de la mejora, por ende, el tratamiento de este hallazgo genera una acción correctiva y para la creación de esta, se revisan y aplican las técnicas para identificar la causa raíz que generó la No conformidad.
            li
              i.fas.fa-check
              p.mb-0 Se plantea un tratamiento para subsanar la novedad mediante el desarrollo del ciclo PHVA, de acuerdo con los parámetros de la entidad o empresas donde se labora.
            li
              i.fas.fa-check
              p.mb-0 Se ejecutan las tareas del plan de mejoramiento.
            li
              i.fas.fa-check
              p.mb-0 Se verifica y ajusta de ser necesario las actividades desarrolladas.
            li
              i.fas.fa-check
              p.mb-0 Se comunica a la alta dirección, a los entes y fases de control que correspondan, el resultado de los planes de mejoramiento, con características de objetividad, claridad, transparencia y organización de resultados.


        .col-6.col-lg-3
          img(src='@/assets/curso/tema2/img20.svg')    
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

<style lang="sass">
.tema2
  .fondo2
    position: relative
    padding-bottom: 1rem
    p, div, h3
      position: relative
    &::before
      content: ""
      position: absolute
      top: 0
      left: 2.5%
      width: 134%
      height: 100%
      margin: 0 -5rem
      background-color: #E7F4F0
      //background-image: url("../assets/curso/tema2/img08.svg")
      // background-size: contain
      background-repeat: no-repeat

  .fondo1
    position: relative
    padding-bottom: 1rem
    p, div, h3
      position: relative
    &::before
      content: ""
      position: absolute
      top: 0
      left: 2.5%
      width: 134%
      height: 100%
      margin: 0 -5rem
      background-image: url("../assets/curso/tema2/img08.svg")
      background-size: cover
      background-repeat: no-repeat

  .tabs-a__tab
    background-color: #E8E8E8;

  .img-infografica
    .tarjeta.color-primario
      background-color: #F3F9FF

  .fa-check
    color: #FFA400 !important

  .cajon-b:before
    bottom: 62% !important
    right: 74% !important
</style>
