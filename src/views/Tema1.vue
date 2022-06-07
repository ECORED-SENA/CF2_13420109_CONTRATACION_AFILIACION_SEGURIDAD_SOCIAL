<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1 
      h1 Administración de la historia laboral

    p.mb-5(data-aos="fade-right") La gestión documental y la administración de tipos documentales como la historia o contrato laboral parten del derecho fundamental para dar seguridad y salvaguardar la información y la protección de una manera restringida para el acceso de datos personales, en lo que refiere a su seguridad social y pensión.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El Estado colombiano por medio del Archivo General de la Nación ha definido directrices para gestionar los soportes documentales de los empleados en el país, partiendo de la contratación y vinculación de los trabajadores, su desarrollo laboral y su retiro, independientemente del mecanismo que se utilice, ya sea por finalización del contrato, retiro voluntario o retiro por situación administrativa.
    
    figcaption.mt-3 <b>Nota.</b> Archivo General de la Nación (Colombia)
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Aplicación del derecho de habeas data en el proceso de contratación y administración documental

    .cajon-b.color-primario.px-1.py-2.mb-5(data-aos="fade-right")
      p.mb-0 Según la definición de la Corte Constitucional Colombiana en la Ley 1266 de 2008 una persona, bien sea natural o jurídica, tiene derecho a exigir a las entidades o empresas que administren bases de datos, indiferente de su naturaleza, el acceso a los datos de su información y realizar la actualización o rectificación de los datos que se hayan recopilado sobre sí mismo. De igual manera, las posibilidades de su promulgación, publicación o finalización, de consentimiento con los principios para la administración de datos de las personas. 

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-6.col-lg-1
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/img02.svg")
        .col-12.col-lg-10
          h4.mb-0 Según lo anterior, el derecho de habeas data tiene una autonomía independiente y lo diferencia de otros derechos con los que está en permanente interacción, como los derechos a la información y a la intimidad. 

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10(style="background-color: #16697A; border-radius: 12px")
        .row.justify-content-center
          .col-12.col-lg-6.p-3.d-flex.align-items-center
            p.mb-3.mb-lg-0.text-white La legislación en Colombia protege los derechos laborales de las personas frente a la seguridad social, los cuales pueden ser tutelados en diferentes instancias tal y como lo determina el Artículo número 264 del Código Sustantivo del Trabajo.
          .col-12.col-lg-1
          .col-6.col-lg-3.d-flex.align-items-end
            img.mb-0(src="@/assets/curso/tema1/img03.png")

    .row.align-items-center.justify-content-center(data-aos="fade-left")
      .col-12.col-lg-10.px-0
        figure(data-aos="fade-left")
          .video      
            iframe(width="1280" height="720" src="https://www.youtube.com/embed/ie4xZxgBJ6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Gestión documental de la historia laboral del personal contratado 

    p.mb-5 Esta etapa de gestión proviene de la contratación o la vinculación, aportando herramientas de ayuda a la verificación de los soportes preestablecidos para el desarrollo contractual. En este contexto, la documentación suministrada por la persona natural o jurídica debe ser organizada de acuerdo con la normatividad establecida, donde influye de manera significativa la comprensión del ciclo de gestión del talento humano.

    div.p-3.py-5.px-0.mb-5(style="background-color: #F3F9FF")
      h3.mb-5.text-center Ciclo de Gestión del Talento Humano
      p.mb-0.text-center Estos componentes deben ser respaldados documentalmente, ceñidos a los criterios documentales 
      p.mb-5.text-center según corresponda en la empresa pública o privada.

      ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-right")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/img04.svg')            

        .tarjeta.color-primario.p-3(x="11.9%" y="54.8%" numero=" ")
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-check
              p.mb-0 Necesidades de personal
            li.mb-0
              i.fas.fa-check
              p.mb-0 Recursos económicos 
            li.mb-0
              i.fas.fa-check
              p.mb-0 Perfiles 
            li.mb-0
              i.fas.fa-check
              p.mb-0 Cargos 
            li.mb-0
              i.fas.fa-check
              p.mb-0 Funciones a desempeñar

        
        .tarjeta.color-primario.p-3(x="37.3%" y="54.8%" numero=" ")
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-check
              p.mb-0 Afiliaciones a seguridad social
            li.mb-0
              i.fas.fa-check
              p.mb-0 Pólizas
            li.mb-0
              i.fas.fa-check
              p.mb-0 Hoja de vida y soportes
            li.mb-0
              i.fas.fa-check
              p.mb-0 Soportes de ley.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Actas de posesión.
            li.mb-0
              i.fas.fa-check
              p.mb-0 Entre otros documentos. 

        .tarjeta.color-primario.p-3(x="62.7%" y="54.8%" numero=" ")
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-check
              p.mb-0 Situaciones administrativas
            li.mb-0
              i.fas.fa-check
              p.mb-0 Evaluaciones de desempeño
            li.mb-0
              i.fas.fa-check
              p.mb-0 Promoción laboral

        .tarjeta.color-primario.p-3(x="88.1%" y="54.8%" numero=" ")
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-check
              p.mb-0 Acto administrativo de desvinculación o retiro.


    p.mb-4(data-aos="fade-left") Los criterios para la conservación de archivos deben enmarcarse en las normas según la legislación en cada caso; un ejemplo claro se encuentra en el Decreto 1072 de 2015, Artículo 2.2.4.6.13 del Ministerio del Trabajo, en el que se determina que la conservación de los documentos y registros está bajo responsabilidad del empleador, con una duración no menor a (20) años, esto en cuanto a los antecedentes de evidencias vinculantes o contractuales del funcionario, en lo que respecta a la seguridad y salud en el trabajo, tiempo que se cuenta una vez finaliza el vínculo laboral del empleado con la entidad o empresa.
    p.mb-5(data-aos="fade-right") <b>Ahora bien, en términos generales, para la conservación de archivos es necesario relacionar el concepto técnico sobre tiempos de retención documental emitido por el Archivo General de la Nación (2015):</b>

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-5
        .bloque-texto-d.color-primario.p-4.mb-lg-0.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 <b>En cuanto al tiempo de retención de las historias laborales, normalmente las entidades los conservan (2) años en el Archivo de gestión o de oficina, luego de la desvinculación del empleado y (80) años en el Archivo central de la entidad, previendo las consultas por los derechos pensionales y reclamaciones laborales. Transcurridos estos tiempos se podrá hacer una selección y dejar una muestra para conservación total o permanente (p. 2).</b>
            i.fas.fa-quote-right          
      .col-12.col-lg-1
      .col-6.col-lg-5
        img(src='@/assets/curso/tema1/img05.svg')            
      .col-12.col-lg-1

    .cajon.color-acento-botones.sin-fondo.p-4.mb-5(data-aos="fade-right")
      .row.align-items-center.justify-content-center        
        .col-12.col-lg-7
          SlyderF(columnas="col-12")
            .tarjeta.color-acento-botones.p-3.p-lg-5
              .row.justify-content-center.mb-3
                .col-4.col-lg-2
                  img.mb-3.mb-lg-0(src='@/assets/curso/tema1/img06.svg')            
              h3.mb-1 Nota 1
              h4.mb-0(style="font-weight: normal") Los contratos laborales en la administración pública no generan una vinculación laboral, en este sentido, no corresponde la realización de historias laborales, debiéndose gestionar en las series documentales de contratos, con subseries documentales como Contrato de Prestación de Servicio, de Obras o según el contrato que corresponda.
            .tarjeta.color-acento-botones.p-3.p-lg-5
              .row.justify-content-center.mb-3
                .col-4.col-lg-2
                  img.mb-3.mb-lg-0(src='@/assets/curso/tema1/img06.svg')            
              h3.mb-1 Nota 2
              h4.mb-0(style="font-weight: normal") En las empresas de carácter privado, los contratos se denominan a término fijo o contratos a término indefinido, aprobando de esta manera, vincular a sus empleados. El Archivo General de la Nación (2015) expone que para estas situaciones, los contratos serán tipos documentales del expediente de historia laboral del empleado, así como las afiliaciones a las entidades de seguridad social. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-8(style="border-radius: 12px; background-color: #0C0A3E")
        .row.justify-content-center.align-items-center
          .col-3.col-lg-2.p-3.px-4
            div.px-2
              img(src='@/assets/curso/tema1/img07.svg')    
          .col-12.col-lg-7.p-3
            pmb-0.text-white Para consultar el “concepto técnico sobre tiempos de retención documental” del Archivo General de la Nación ver el documento completo en el siguiente enlace: 
          .col-12.col-lg-3.p-3.d-flex.justify-content-center
            a.boton.me-3.indicador__container(
              :href="obtenerLink('downloads/anexo1.pdf')"
              target="_blank"
              type="application/pdf"              
            )
              span Descargar
              i.fas.fa-file-download              

    div.d-flex.align-items-center.mb-5
      img(style="width:26px; display: inline" src='@/assets/curso/tema1/img08.svg')            
      h3.mb-0.ms-4(style="display: inline") Normatividad      

    p.mb-4 Con relación a la administración y gestión de la historia y contrato laboral es necesario tener en cuenta la definición constitucional, la cual determina el derecho fundamental a la seguridad social y el amparo a la familia como componentes básicos, como también al derecho fundamental de pensión; para esto ha sido necesario desplegar todo un componente normativo que respalde la regulación y soportes documentales de los mismos.
    p.mb-5 <b>Con el fin de facilitar el  acceso a la información normada por los diferentes organismos del Estado, se presenta el compendio jurídico que regula las disposiciones en cuanto a gestionar documentalmente la historia laboral mediante el  siguiente normograma:</b>

    .tarjeta.tarjeta--azul.p-lg-5.p-3.mb-5(style="background-color: #F3F9FF")
      h3.mb-1.text-center(style="color: #16697A") Normograma de la Gestión documental de la 
      h3.b-5.text-center(style="color: #16697A") historia laboral

      LineaTiempoC.color-acento-botones(text-small data-aos="fade-right")
        .row.justify-content-center.py-4(titulo="1991")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-0 <b>Constitución Política de la República de Colombia</b>, Artículo 48
        .row.justify-content-center.py-4(titulo="2000")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-4 <b>Ley 594 del Congreso de la República  del año 2000</b> "Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones"
            p.mb-0 <b>Acuerdo 046 del Archivo General de la Nación del año 2000</b> "Por el cual se establece el procedimiento para la eliminación documental"
        .row.justify-content-center.py-4(titulo="2003")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-0 <b>Circular 004 del Archivo General de la Nación 2003</b> "Organización de las historias laborales"
        .row.justify-content-center.py-4(titulo="2004")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-4 <b>Acuerdo 008 del Archivo General de la Nación del año 2004</b> “Por el cual se establecen las especificaciones técnicas y los requisitos para la prestación de los servicios de depósito, custodia, organización, reprografía y conservación de documentos de archivo y demás procesos de la función archivística en desarrollo de los Artículos 13° y 14° y sus Parágrafos 1° y 3° de la Ley 594 de 2000”
            p.mb-4 <b>Circular 012 del Archivo General de la Nación 2004</b> “Orientaciones para el cumplimiento de la Circular 04 de 2003. (Organización de historias laborales)”
        .row.justify-content-center.py-4(titulo="2005")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-0 <b>Ley 962 de 2005 del Congreso de la República</b> “por la cual se dictan disposiciones sobre racionalización de trámites y procedimientos administrativos de los organismos y entidades del Estado y de los particulares que ejercen funciones públicas o prestan servicios públicos.”
        .row.justify-content-center.py-4(titulo="2010")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-0 <b>Circular 004 del Archivo General de la Nación 2010</b> "Estándares mínimos en procesos de administración de archivos y gestión de documentos electrónicos."
        .row.justify-content-center.py-4(titulo="2011")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-0 <b>Ley 1437 de 2011 del Congreso de la República</b> “Código de Procedimiento Administrativo y Contencioso Administrativo”
        .row.justify-content-center.py-4(titulo="2012")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-4 <b>Ley 1581 del Congreso de la República  del año 2012</b> "Por la cual se dictan disposiciones generales para la protección de datos personales"
            p.mb-4 <b>Decreto 2609 del Ministerio de Cultura  del año 2012</b> "Por el cual se reglamenta el Título V de la Ley 594 de 2000, parcialmente los Artículos 58 y 59 de la Ley 1437 de 2011 y se dictan otras disposiciones en materia de Gestión documental para todas las entidades del Estado"
            p.mb-4 <b>Acuerdo 042 del Archivo General de la Nación del año 2012</b> "Por el cual se establecen los criterios para la organización de los archivos de gestión en las entidades públicas y privadas que cumplen funciones públicas, se regula el Inventario Único Documental y se desarrollan los Artículos 21, 22, 23 y 26 de la Ley General de Archivos 594 de 2000".
            p.mb-0 <b>Circular Externa Nº 002 de 2012 del AGN</b>, refiere las recomendaciones para las diferentes entidades interesadas en adquirir o desarrollar sistemas de gestión de documentos, como quiera que la administración de documentos de archivo que se originan en sistemas de información, debe cumplir con unos mínimos para el cumplimiento de las políticas de Gestión documental de conformidad con las Tablas de retención documental de la entidad.
        .row.justify-content-center.py-4(titulo="2013")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-0 <b>Acuerdo 005 del Archivo General de la Nación del año 2013</b> "Por el cual se establecen los criterios básicos para la clasificación, ordenación y descripción de los archivos en las entidades públicas y privadas que cumplen funciones públicas y se dictan otras disposiciones".
        .row.justify-content-center.py-4(titulo="2014")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-4 <b>Ley 1712 del Congreso de la República  del año 2014</b> "Transparencia y del Derecho de acceso a la información pública nacional"
            p.mb-0 <b>Acuerdo 002 del Archivo General de la Nación del año 2014</b> "Por medio del cual se establecen los criterios básicos para creación, conformación, organización, control y consulta de los expedientes de archivo y se dictan otras disposiciones"
        .row.justify-content-center.py-4(titulo="2015")
          .col-12.col-lg-11.p-3.p-lg-0 
            p.mb-4 <b>Decreto 103 de la Presidencia de la República del año 2015</b> "Por el cual se reglamenta parcialmente la Ley 1712 de 2014 y se dictan otras disposiciones - Ley 1712 de 2014 de Transparencia y del derecho de acceso a la información pública nacional".
            p.mb-0 <b>Decreto 1072 de 2015 del Ministerio de Trabajo</b> "Por medio  del cual se  expide  el Decreto  Único  Reglamentario  del Sector  Trabajo"                  

    div.d-flex.align-items-center.mb-5
      img(style="width:26px; display: inline" src='@/assets/curso/tema1/img08.svg')            
      h3.mb-0.ms-4(style="display: inline") Técnicas y herramientas de organización y archivo    

    .fondo1.p-0.mb-5
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-12.col-lg-6
          p.mb-lg-0.mb-3 Para la aplicación de la gestión documental de la historia laboral o contrato laboral, bien sea empresa pública o privada, se deben tener en cuenta los criterios preestablecidos por el Archivo General de la Nación y el Instituto Colombiano de Normas Técnicas y Certificación, donde se emiten conceptos. En  cuanto a la denominación, clasificación, conservación y depuración, como también las técnicas documentales para gestionar un archivo, deben ir alineados con las políticas para la gestión documental de la empresa vinculante o contratante; <b>no obstante, se relacionan los criterios jurídicos y orientadores, así:</b> 
        .col-6.col-lg-5
          img.mb-0(src='@/assets/curso/tema1/img10.svg')            
        .col-1

    .titulo-sexto.color-primario
      span <b>Tabla 1.</b> Relación de criterios técnicos para la gestión documental

    .tabla-b.color-primario.mb-5(data-aos="fade-right")            
      table        
        tr.tabla-b__header
          th(style="font-size: 18px") No
          th(style="font-size: 18px") Año
          th(style="font-size: 18px" colspan=4) Disposición
          th(style="font-size: 18px" colspan=2) Documentos
        tr
          td 1
          td 2001
          td(colspan=4) Cartilla de clasificación documental emitido por el Archivo General de la Nación.<br>Ver la cartilla aquí: 
          td(colspan=2)
            a.boton.me-3.indicador__container(
              :href="obtenerLink('downloads/anexo2.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
        tr
          td 2
          td 2009
          td(colspan=4) Especificaciones para cajas y carpetas de archivo emitido por el Archivo General de la Nación.<br>Ver el documento aquí: 
          td(colspan=2)
            a.boton.me-3.indicador__container(
              :href="obtenerLink('downloads/anexo3.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
        tr
          td 3
          td 2005
          td(colspan=4) Norma Técnica Colombiana 5397 - Materiales para documentos de archivo con soporte papel y características de calidad.<br>Ver el e-book aquí: 
          td(colspan=2) 
            a.boton.me-3.indicador__container(
              href="https://tienda.icontec.org/gp-materiales-para-documentos-de-archivo-con-soportes-en-papel-caracteristicas-de-calidad-ntc5397-2005.html"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
        tr
          td 4
          td 2018
          td(colspan=4) Norma Técnica Colombiana 5921 - Información y documentación - requisitos almacenamiento de material documental en archivos y bibliotecas.<br>Ver el e-book aquí: 
          td(colspan=2)
            a.boton.me-3.indicador__container(
              href="https://tienda.icontec.org/gp-informacion-y-documentacion-requisitos-almacenamiento-de-material-documental-en-archivos-y-bibliotecas-ntc5921-2018.html"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
        tr
          td 5
          td 2018
          td(colspan=4) Norma Técnica Colombiana 4436 - Información y documentación papel para documentos de archivo requisitos para la permanencia y la durabilidad.<br>Ver e-book aquí: 
          td(colspan=2)
            a.boton.me-3.indicador__container(
              href="https://tienda.icontec.org/gp-informacion-y-documentacion-papel-para-documentos-de-archivo-de-conservacion-total-requisitos-para-la-permanencia-y-la-durabilidad-ntc4436-2018.html"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
          
    p.mb-5(data-aos="fade-left") En la siguiente figura se ilustran una de las denominaciones más relevantes para la gestión documental en la historia o contrato laboral, que será de gran ayuda en la administración de estos tipos documentales, reflejando criterios que son de carácter regulatorio por el Archivo General de la Nación.

    .titulo-sexto.color-primario
      span <b>Figura 1.</b> Conceptos, términos y definiciones en la gestión documental
    
    SlyderF.mb-5(data-aos="fade-left" columnas="col-lg-4 col-12 d-flex")
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Documento      
            p.mb-0 Archivo físico o electrónico con comunicación registrada en cualquier soporte. 
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Folio 
            p.mb-0 Hoja que contiene dos páginas diligenciadas o no.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Historia laboral Contrato
            p.mb-0 Tipo de documentos que contienen información del ciclo de gestión del talento humano. en cuanto a la vinculación y trayectoria laboral de los empleados.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Inventario documental
            p.mb-0 Instrumento de recuperación  de la información que describe y precisa las series o asuntos de un fondo documental.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Serie documental
            p.mb-0 Estructura y contenido homogéneos, emanados de un mismo órgano o sujeto productor como consecuencia del ejercicio de sus funciones específicas, por ejemplo, historias laborales, contratos, actas e informes, entre otros.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Subserie documental
            p.mb-0 Conjunto de unidades documentales que forman parte de una serie, identificadas de forma separada de esta por su contenido y sus características específicas.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Tabla de retención documental
            p.mb-0 Listado de series, con sus correspondientes tipos documentales, a las cuales se asigna el tiempo de permanencia en cada etapa del ciclo vital de los documentos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Unidad de conservación
            p.mb-0 Cuerpo que contiene un conjunto de documentos, de tal forma que garantice su preservación e identificación (cajas y libros o tomos). 
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg')        
        .tarjeta.color-primario.p-3.px-lg-5
            h4 Unidad documental
            p.mb-0 Unidad de análisis en los procesos de identificación y caracterización documental. Puede ser simple cuando esté constituida por un tipo documental o compleja, cuando la constituye un expediente.    
    figcaption.mb-5 <b>Nota.</b> Tomado de Conceptos, términos y definiciones en la gestión documental basada en definiciones del Archivo General de la Nación (2006). 

    p.mb-5 <b>Como método práctico para ayudar a la interpretación de la correcta gestión documental de la historia o contrato laboral se debe tener en cuenta los criterios dispuestos por el Archivo General de la Nación, estos conceptos coadyuvarán a la interpretación y potenciación de su gestión como funcionario líder en la gestión documental en su entidad o empresa:</b>

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-6 
        img(src='@/assets/curso/tema1/img12.svg')

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-12.col-lg-4.d-flex.mb-lg-0.mb-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-3.p-lg-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}")
              img.mb-4(src='@/assets/curso/tema1/img15.svg' style="width:79px")
              p.mb-0.text-white(style="font-size: 25px") <b>Clasificación de la documentación</b>
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/img14.svg')})`, 'background-size':'cover'}")
              p.my-5 Organice los documentos entregados por el empleado y las tablas de retención documental en la empresa pública o privada.
      .col-12.col-lg-4.d-flex.mb-lg-0.mb-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-3.p-lg-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}")
              img.mb-4(src='@/assets/curso/tema1/img16.svg' style="width:79px")
              p.mb-0.text-white(style="font-size: 25px") <b>Organización de la documentación</b>
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/img14.svg')})`, 'background-size':'cover'}")
              p.my-5 Establezca una secuencia natural, cronológica o alfabética, grupos definidos de la clasificación y categorías de los mismos. Es importante que de acuerdo con los términos de conservación de archivos que corresponda, se puedan adelantar métodos de expurgo y depuración documental, con el fin de eliminar documentos innecesarios y que generen una duplicidad.
      .col-12.col-lg-4.d-flex
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-3.p-lg-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}")
              img.mb-4(src='@/assets/curso/tema1/img17.svg' style="width:79px")
              p.mb-0.text-white(style="font-size: 25px") <b>Preparación física de la historia laboral o contrato</b>
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/img14.svg')})`, 'background-size':'cover'}")
              p.my-5 Organice los documentos, estos  deben quedar alineados en la zona de arriba  de cada página a  tamaño oficio, independiente si este es de tamaño carta, verificando que quede libre de material abrasivo, sin ganchos de cosedoras, o clips y demás elementos metálicos, evitando con esto, el deterioro físico y biológico de la documentación.  

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-4.d-flex.mb-lg-0.mb-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-3.p-lg-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}")
              img.mb-4(src='@/assets/curso/tema1/img18.svg' style="width:79px")
              p.mb-0.text-white(style="font-size: 25px") <b>Foliación </b>
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/img14.svg')})`, 'background-size':'cover'}")
              p.my-5 Emita un número consecutivo desde 1 hasta el folio que determine el protocolo de gestión documental de la empresa, sin que este supere los 250 folios; esta numeración debe registrarse en el margen superior derecho de cada documento, independiente de la orientación (horizontal o vertical). 
      .col-12.col-lg-4.d-flex.mb-lg-0.mb-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-3.p-lg-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}")
              img.mb-4(src='@/assets/curso/tema1/img19.svg' style="width:79px")
              p.mb-0.text-white(style="font-size: 25px") <b>Ubicación física de las historias laborales o contratos</b>
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/img14.svg')})`, 'background-size':'cover'}")
              p.my-5 Ordene los documentos bajo un sistema de consecutivos al interior de cada caja y expediente; y para la ubicación en estantería, la organización de cajas va de la parte superior del estante, de izquierda a derecha seguidamente.
      .col-12.col-lg-4.d-flex
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-3.p-lg-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}")
              img.mb-4(src='@/assets/curso/tema1/img20.svg' style="width:79px")
              p.mb-0.text-white(style="font-size: 25px") <b>Custodia, consulta y copia de documentos de las historias laborales o contractuales</b>
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/img14.svg')})`, 'background-size':'cover'}")
              p.my-5 Valide los parámetros de gestión documental de la empresa. Las áreas responsables de personal o de contratación, de acuerdo con la etapa en el ciclo de gestión del talento humano, serán inicialmente las responsables de la custodia de estos tipos documentales, bajo parámetros de seguridad que restrinja del ingreso al personal no autorizado, debiéndose verificar el protocolo para el acceso exclusivo a estos tipos documentales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10(style="border-radius: 12px; background-color: #0C0A3E")
        .row.justify-content-center.align-items-center
          .col-3.col-lg-1.p-3
            img(src='@/assets/curso/tema1/img07.svg')    
          .col-12.col-lg-8.p-3
            pmb-0.text-white Para ampliar la información sobre los “Estándares mínimos en procesos de administración de archivos y gestión de documentos electrónicos” según Circular 004 de 2010 de la AGN, consultar el enlace a continuación: 
          .col-12.col-lg-3.p-3.d-flex.justify-content-center
            a.boton.me-3.indicador__container(
              href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=61824#:~:text=Las%20entidades%20p%C3%BAblicas%20deber%C3%A1n%20elaborar,que%20se%20produzca%20la%20informaci%C3%B3n."
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Ir al Sito web
              i.fas.fa-link
              .indicador--click(v-if="mostrarIndicador")

    div.d-flex.align-items-center.mb-5
      img(style="width:26px; display: inline" src='@/assets/curso/tema1/img08.svg')            
      h3.mb-0.ms-4(style="display: inline") Lista de chequeo para documentos de la contratación laboral

    .fondo1.p-0.mb-5
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-12.col-lg-7
          p.mb-lg-0.mb-3 Verificar y validar permite controlar el cumplimiento de requisitos y los estándares de los documentos requeridos para la contratación laboral, para lo que comúnmente se utilizan mecanismos como la  lista de chequeo. De acuerdo con lo observado en las etapas del ciclo de gestión de talento humano, la lista de chequeo en la gestión de la historia laboral debe estar comprendida por los siguientes documentos:
        .col-6.col-lg-5
          img.mb-0(src='@/assets/curso/tema1/img21.svg')                    

    .titulo-sexto.color-primario
      span <b>Tabla 2.</b> Compendio de documentos para  las historias laborales

    .row.justify-content-center.align-items-center
      .col-12.col-lg-8
        .tabla-b.color-primario.mb-5(data-aos="fade-right")            
          table        
            tr.tabla-b__header
              th(style="font-size:18px") No              
              th(style="font-size:18px" colspan=5) Documento                         
            tr
              td.text-center 1
              td(colspan=5) Acto administrativo del nombramiento o contrato de trabajo. 
            tr
              td.text-center 2
              td(colspan=5) Oficio de notificación del nombramiento o contrato de trabajo.
            tr
              td.text-center 3
              td(colspan=5) Oficio de aceptación del nombramiento en el cargo o contrato de trabajo.
            tr
              td.text-center 4
              td(colspan=5) Documentos de identificación. 
            tr
              td.text-center 5
              td(colspan=5) Hoja de vida (Formato Único Función Pública).
            tr
              td.text-center 6
              td(colspan=5) Soportes documentales de estudios y experiencia que acrediten los requisitos del cargo.
            tr
              td.text-center 7
              td(colspan=5) Acta de posesión.
            tr
              td.text-center 8
              td(colspan=5) Pasado Judicial – Certificado de Antecedentes Penales.
            tr
              td.text-center 9
              td(colspan=5) Certificado de Antecedentes Fiscales. 
            tr
              td.text-center 10
              td(colspan=5) Certificado de Antecedentes Disciplinarios.
            tr
              td.text-center 11
              td(colspan=5) Declaración de Bienes y Rentas.
            tr
              td.text-center 12
              td(colspan=5) Certificado de aptitud laboral (examen médico de ingreso).
            tr
              td.text-center 13
              td(colspan=5) Afiliaciones al régimen de salud (EPS), pensión, cesantías, caja de compensación, etc. 
            tr
              td.text-center 14
              td(colspan=5) Actos administrativos que señalen las situaciones administrativas del funcionario: vacaciones, licencias, comisiones, ascensos, traslados, encargos, permisos, ausencias temporales, inscripción en carrera administrativa, suspensiones de contrato, pago de prestaciones, entre otros. 
            tr
              td.text-center 15
              td(colspan=5) Evaluación del desempeño.
            tr
              td.text-center 16
              td(colspan=5) Acto administrativo de retiro o desvinculación del servidor de la entidad, donde consten las razones del mismo: supresión del cargo, insubsistencia, destitución, aceptación de renuncia al cargo, liquidación del contrato, incorporación a otra entidad, etc. 
                       
    .cajon.color-acento-botones.p-3.pt-lg-5.pb-0.mb-5(data-aos="fade-left")
      .row.align-items-center.justify-content-center.mb-4
        .col-12.col-lg-10
          p.mb-0 También es importante recordar que la hoja de vida del funcionario, empleado o contratista genera un respaldo horizontal a lo largo del tiempo en la entidad o empresa, ya que se cuenta con las evidencias de manera integral, por lo tanto, <b>el mecanismo de verificación lista de chequeo puede ser diseñada teniendo presente criterios como:</b>
      .row.align-items-center.justify-content-center
        .col-12.col-lg-6
          ul.lista-ul--color.mb-lg-0.mb-4
            li 
              i.lista-ul__vineta
              | <b>Cumple o no con las características de cada ítem. </b>
            li 
              i.lista-ul__vineta
              | <b>La calidad o el estado de la hoja de vida y las observaciones que correspondan.</b>
            li 
              i.lista-ul__vineta
              | <b>La cantidad de soportes que contiene. </b>
            li 
              i.lista-ul__vineta
              | <b>La verificación legal.</b>
            li 
              i.lista-ul__vineta
              | <b>La aprobación o no de la hoja de vida.</b>
            li 
              i.lista-ul__vineta
              | <b>Y todos los demás  ítems que consideré necesario incluir en los diferentes mecanismos de control que se manejan por parte del contratante o vinculante. </b>
        .col-lg-1
        .col-6.col-lg-3
          img.mb-0(src='@/assets/curso/tema1/img22.png')                    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10(style="border-radius: 12px; background-color: #0C0A3E")
        .row.justify-content-center.align-items-center
          .col-3.col-lg-1.p-3
            img(src='@/assets/curso/tema1/img07.svg')    
          .col-12.col-lg-8.p-3
            pmb-0.text-white Consultar la Circular 004 de 2003 de la AGN que trata sobre la “Organización de las historias laborales” y la Circular 012 de 2004 que contiene las “Orientaciones para el cumplimiento de la Circular 04 de 2003” aquí: 
          .col-12.col-lg-3.p-3
            div.d-flex.justify-content-center
              a.boton.me-3.indicador__container.mb-3(
                href="https://normativa.archivogeneral.gov.co/circular-004-de-2003/"
                target="_blank"
                type="application/pdf"                
              )
                span Ir al Sito web
                i.fas.fa-link                
            div.d-flex.justify-content-center
              a.boton.me-3.indicador__container(
                href="https://normativa.archivogeneral.gov.co/circular-012-de-2004-2/#:~:text=El%20objetivo%20de%20estas%20disposiciones,tipos%20documentales%20que%20la%20constituyen"
                target="_blank"
                type="application/pdf"                
              )
                span Ir al Sito web
                i.fas.fa-link                
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
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
.tema1
  .lista-ul--color li > i:first-of-type
    color: #FFA400

  .slyder-f
    height: 100% !important
    .horizontal-scroll
      align-items: inherit


  .tarjeta-avatar
    .tarjeta
      padding-top: 130px !important

  .fondo1
    position: relative
    padding-bottom: 1rem
    p, div
      position: relative
    &::before
      content: ""
      position: absolute
      top: 0
      left: 2.5%
      width: 134%
      height: 100%
      margin: 0 -5rem
      background-image: url("../assets/curso/tema1/img09.svg")
      // background-size: contain
      background-repeat: no-repeat

  .cajon.color-acento-botones.sin-fondo
    background-color: transparent;

  .cajon-b:before
    bottom: 69% !important
    right: 52% !important

  .img-infografica
    .tarjeta.color-primario
      background-color: white
    .fa-check
      color: #FFA400

  .bloque-texto-d
    &:before
      left: 15%
      top: 55%
</style>
