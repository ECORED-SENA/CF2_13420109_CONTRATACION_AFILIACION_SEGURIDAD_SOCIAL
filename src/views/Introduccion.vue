<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-primario.px-1.py-2.mb-5(data-aos="fade-right")
      p.mb-0 La gestión correcta de la historia y contrato laboral respalda el ciclo de gestión del talento humano, mediante una correcta administración de los métodos y técnicas dispuestas por el Archivo General de la Nación. Asimismo, el correcto diligenciamiento de informes, ligado a la creación e interpretación correcta de los indicadores coadyuvará a los análisis del proceso y a la mejora continua del mismo.
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-12.col-lg-8(style="border-radius: 12px; background-color: #0C0A3E")
        .row.justify-content-center.align-items-center
          .col-4.col-lg-1.p-3
            img(src='@/assets/curso/intro/img01.svg')    
          .col-12.col-lg-11.p-3
            pmb-0.text-white A través del siguiente video se explican las generalidades y temáticas que se desarrollan en este componente formativo:


    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.p-0
        figure(data-aos="fade-left")
          .video                
            iframe(width="1280" height="720" src="https://www.youtube.com/embed/_nGXU3M48Ic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.introduccion

  .cajon-b:before
    bottom: 63% !important
    right: 60% !important
</style>
