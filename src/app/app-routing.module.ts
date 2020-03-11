
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
   // canLoad: [AuthGuard]
  },
  {
    path: 'mapa',
    loadChildren: './pages/mapa/mapa.module#MapaPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'calendar',
    loadChildren: './pages/calendar/calendar.module#CalendarPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'menu-sasisopa',
    loadChildren: './pages/menu-sasisopa/menu-sasisopa.module#MenuSasisopaPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-cinco',
    loadChildren: './pages/punto-cinco/punto-cinco.module#PuntoCincoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-seis',
    loadChildren: './pages/punto-seis/punto-seis.module#PuntoSeisPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-uno',
    loadChildren: './pages/punto-uno/punto-uno.module#PuntoUnoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-dos',
    loadChildren: './pages/punto-dos/punto-dos.module#PuntoDosPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-dos-riesgos',
    loadChildren: './pages/punto-dos-riesgos/punto-dos-riesgos.module#PuntoDosRiesgosPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-tes',
    loadChildren: './pages/punto-tes/punto-tes.module#PuntoTesPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-cuatro',
    loadChildren: './pages/punto-cuatro/punto-cuatro.module#PuntoCuatroPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'onbjetivo-modal',
    loadChildren: './pages/onbjetivo-modal/onbjetivo-modal.module#OnbjetivoModalPageModule',
    // canLoad: [AuthGuard]
  },
  { 
    path: 'login', 
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { path: 'punto-siete', 
    loadChildren: './pages/punto-siete/punto-siete.module#PuntoSietePageModule',
    //canLoad: [AuthGuard]
  },
  { path: 'punto-ocho', 
    loadChildren: './pages/punto-ocho/punto-ocho.module#PuntoOchoPageModule',
    //canLoad: [AuthGuard] 
  },
  { 
    path: 'punto-nueve', 
    loadChildren: './punto-nueve/punto-nueve.module#PuntoNuevePageModule',
    //canLoad: [AuthGuard] 
  },
  { 
    path: 'punto-once', 
    loadChildren: './pages/punto-once/punto-once.module#PuntoOncePageModule',
    //canLoad: [AuthGuard]  
  },
  { 
    path: 'fo01', 
    loadChildren: './pages/fo01/fo01.module#FO01PageModule',
    //canLoad: [AuthGuard] 
  },
  { 
    path: 'fo08', 
    loadChildren: './pages/fo08/fo08.module#Fo08PageModule',
    //canLoad: [AuthGuard] 
  },
  { 
    path: 'fo05', 
    loadChildren: './pages/fo05/fo05.module#Fo05PageModule',
    //canLoad: [AuthGuard] 
  },
  { 
    path: 'fo03', 
    loadChildren: './pages/fo03/fo03.module#FO03PageModule',
    //canLoad: [AuthGuard] 
  },
  { 
    path: 'fo04', 
    loadChildren: './pages/fo04/fo04.module#Fo04PageModule',
    //canLoad: [AuthGuard] 
  },
  
  {
     path: 'fs20', 
     loadChildren: './pages/fs20/fs20.module#Fs20PageModule',
     //canLoad: [AuthGuard] 
  },

  { 
    path: 'fs20-tanques', 
    loadChildren: './pages/fs20-tanques/fs20-tanques.module#Fs20TanquesPageModule' ,
    //canLoad: [AuthGuard]
  },
  {
    path: 'fs20-dispensarios', 
    loadChildren: './pages/fs20-dispensarios/fs20-dispensarios.module#Fs20DispensariosPageModule',
    //canLoad: [AuthGuard]
  },
  { 
    path: 'fs20-drenajes', 
    loadChildren: './pages/fs20-drenajes/fs20-drenajes.module#Fs20DrenajesPageModule' ,
    //canLoad: [AuthGuard]
  },
  { 
    path: 'fs20-electricas', 
    loadChildren: './pages/fs20-electricas/fs20-electricas.module#Fs20ElectricasPageModule' ,
    //canLoad: [AuthGuard]
  },
  { 
    path: 'fs20-pozos', 
    loadChildren: './pages/fs20-pozos/fs20-pozos.module#Fs20PozosPageModule' ,
    // canLoad: [AuthGuard]
  },
  {
    path: 'fs20-edificios',
    loadChildren: './pages/fs20-edificios/fs20-edificios.module#Fs20EdificiosPageModule' ,
    // canLoad: [AuthGuard]
  },
  {
    path: 'pdf-im01',
    loadChildren: './pages/pdf-im01/pdf-im01.module#PdfIM01PageModule' ,
    // canLoad: [AuthGuard]
  },
  {
    path: 'pdf-im02',
    loadChildren: './pages/pdf-im02/pdf-im02.module#PdfIM02PageModule' ,
    // canLoad: [AuthGuard]
  },
  {
    path: 'pdf-im03', 
    loadChildren: './pages/pdf-im03/pdf-im03.module#PdfIM03PageModule' ,
    //canLoad: [AuthGuard]  
  },
  { 
    path: 'pdf-im04', 
    loadChildren: './pages/pdf-im04/pdf-im04.module#PdfIM04PageModule' ,
    //canLoad: [AuthGuard]
  },
  { 
    path: 'pdf-im05', 
    loadChildren: './pages/pdf-im05/pdf-im05.module#PdfIM05PageModule', 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'pdf-im11', 
    loadChildren: './pages/pdf-im11/pdf-im11.module#PdfIM11PageModule', 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'fs21', 
    loadChildren: './pages/fs21/fs21.module#Fs21PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'fs22', 
    loadChildren: './pages/fs22/fs22.module#Fs22PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'fso02', 
    loadChildren: './pages/fso02/fso02.module#Fso02PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'fso06', 
    loadChildren: './pages/fso06/fso06.module#Fso06PageModule' , 
    //canLoad: [AuthGuard]
  },
  {
     path: 'fo06', 
     loadChildren: './pages/fo06/fo06.module#Fo06PageModule', 
     //canLoad: [AuthGuard]
     },
  { 
    path: 'fo07', 
    loadChildren: './pages/fo07/fo07.module#Fo07PageModule' , 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'punto-diez', 
    loadChildren: './pages/punto-diez/punto-diez.module#PuntoDiezPageModule' , 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'punto-diezfs19',
     loadChildren: './pages/punto-diezfs19/punto-diezfs19.module#PuntoDiezfs19PageModule', 
     //canLoad: [AuthGuard] 
    },
  { 
    path: 'punto-diezfo09', 
    loadChildren: './pages/punto-diezfo09/punto-diezfo09.module#PuntoDiezfo09PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-catorce',
    loadChildren: './pages/punto-catorce/punto-catorce.module#PuntoCatorcePageModule', 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'punto-uno-politica', 
    loadChildren: './pages/punto-uno-politica/punto-uno-politica.module#PuntoUnoPoliticaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-uno-procedimiento', 
    loadChildren: './pages/punto-uno-procedimiento/punto-uno-procedimiento.module#PuntoUnoProcedimientoPageModule', 
    //canLoad: [AuthGuard] 
  },
  { 
    path: 'punto-uno-evidencia', 
    loadChildren: './pages/punto-uno-evidencia/punto-uno-evidencia.module#PuntoUnoEvidenciaPageModule' , 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'punto-tres-procedimiento', 
    loadChildren: './pages/punto-tres-procedimiento/punto-tres-procedimiento.module#PuntoTresProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-tres-lista', 
    loadChildren: './pages/punto-tres-lista/punto-tres-lista.module#PuntoTresListaPageModule' , 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'punto-tres-evidencia', 
    loadChildren: './pages/punto-tres-evidencia/punto-tres-evidencia.module#PuntoTresEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'menu-punto5', 
    loadChildren: './pages/menu-punto5/menu-punto5.module#MenuPunto5PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-cinco-procedimiento',
     loadChildren: './pages/punto-cinco-procedimiento/punto-cinco-procedimiento.module#PuntoCincoProcedimientoPageModule', 
     //canLoad: [AuthGuard] 
    },
  { 
    path: 'punto-cinco-evidencia', 
    loadChildren: './pages/punto-cinco-evidencia/punto-cinco-evidencia.module#PuntoCincoEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-seis-menu', 
    loadChildren: './pages/punto-seis-menu/punto-seis-menu.module#PuntoSeisMenuPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-seis-deteccion-necesidades', 
    loadChildren: './pages/punto-seis-deteccion-necesidades/punto-seis-deteccion-necesidades.module#PuntoSeisDeteccionNecesidadesPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-seis-programa-capacitacion', 
    loadChildren: './pages/punto-seis-programa-capacitacion/punto-seis-programa-capacitacion.module#PuntoSeisProgramaCapacitacionPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    
    path: 'punto-seis-seguimiento-programa', 
    loadChildren: './pages/punto-seis-seguimiento-programa/punto-seis-seguimiento-programa.module#PuntoSeisSeguimientoProgramaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-seis-procedimiento', 
    loadChildren: './pages/punto-seis-procedimiento/punto-seis-procedimiento.module#PuntoSeisProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-seis-evidencia', 
    loadChildren: './pages/punto-seis-evidencia/punto-seis-evidencia.module#PuntoSeisEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-cuatro-menu',
     loadChildren: './pages/punto-cuatro-menu/punto-cuatro-menu.module#PuntoCuatroMenuPageModule', 
    //canLoad: [AuthGuard]    
  },
  { 
    path: 'punto-cuatro-procedimiento', 
    loadChildren: './pages/punto-cuatro-procedimiento/punto-cuatro-procedimiento.module#PuntoCuatroProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-cuatro-evidencia', 
    loadChildren: './pages/punto-cuatro-evidencia/punto-cuatro-evidencia.module#PuntoCuatroEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-siete-menu', 
    loadChildren: './pages/punto-siete-menu/punto-siete-menu.module#PuntoSieteMenuPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-siete-evidencia', 
    loadChildren: './pages/punto-siete-evidencia/punto-siete-evidencia.module#PuntoSieteEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-siete-procedimiento', 
    loadChildren: './pages/punto-siete-procedimiento/punto-siete-procedimiento.module#PuntoSieteProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'quejas-sugerencias', 
    loadChildren: './pages/quejas-sugerencias/quejas-sugerencias.module#QuejasSugerenciasPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'registros-control', 
    loadChildren: './pages/registros-control/registros-control.module#RegistrosControlPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-ocho-menu', 
    loadChildren: './pages/punto-ocho-menu/punto-ocho-menu.module#PuntoOchoMenuPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-evidencia', 
    loadChildren: './pages/punto-evidencia/punto-evidencia.module#PuntoEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-ocho-solicitud-cambios', 
    loadChildren: './pages/punto-ocho-solicitud-cambios/punto-ocho-solicitud-cambios.module#PuntoOchoSolicitudCambiosPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-ocho-lista-distribucion', 
    loadChildren: './pages/punto-ocho-lista-distribucion/punto-ocho-lista-distribucion.module#PuntoOchoListaDistribucionPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto15-menu', 
    loadChildren: './pages/punto15-menu/punto15-menu.module#Punto15MenuPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto15-programa-auditorias', 
    loadChildren: './pages/punto15-programa-auditorias/punto15-programa-auditorias.module#Punto15ProgramaAuditoriasPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto15-plan-auditorias', 
    loadChildren: './pages/punto15-plan-auditorias/punto15-plan-auditorias.module#Punto15PlanAuditoriasPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto15-informe-auditorias', 
    loadChildren: './pages/punto15-informe-auditorias/punto15-informe-auditorias.module#Punto15InformeAuditoriasPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto15-procedimiento', 
    loadChildren: './pages/punto15-procedimiento/punto15-procedimiento.module#Punto15ProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto15-evidencia', 
    loadChildren: './pages/punto15-evidencia/punto15-evidencia.module#Punto15EvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto15-atencion-hallazgos', 
    loadChildren: './pages/punto15-atencion-hallazgos/punto15-atencion-hallazgos.module#Punto15AtencionHallazgosPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'simple', 
    loadChildren: './pages/simple/simple.module#SimplePageModule', 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'punto-diecisiete', 
    loadChildren: './pages/punto-diecisiete/punto-diecisiete.module#PuntoDiecisietePageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-diecisiete-evidencia', 
    loadChildren: './pages/punto-diecisiete-evidencia/punto-diecisiete-evidencia.module#PuntoDiecisieteEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-diecisiete-procedimiento', 
    loadChildren: './pages/punto-diecisiete-procedimiento/punto-diecisiete-procedimiento.module#PuntoDiecisieteProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-diecisiete-formulario', 
    loadChildren: './pages/punto-diecisiete-formulario/punto-diecisiete-formulario.module#PuntoDiecisieteFormularioPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'cuatro1', 
    loadChildren: './pages/cuatro1/cuatro1.module#Cuatro1PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'cuatro2', 
    loadChildren: './pages/cuatro2/cuatro2.module#Cuatro2PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'cuatro3', 
    loadChildren: './pages/cuatro3/cuatro3.module#Cuatro3PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'nueve-evidencia', 
    loadChildren: './pages/nueve-evidencia/nueve-evidencia.module#NueveEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'nueve-listado', 
    loadChildren: './pages/nueve-listado/nueve-listado.module#NueveListadoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'nueve-procedimiento', 
    loadChildren: './pages/nueve-procedimiento/nueve-procedimiento.module#NueveProcedimientoPageModule', 
    //canLoad: [AuthGuard]
  },
  { 
    path: 'punto-doce', 
    loadChildren: './pages/punto-doce/punto-doce.module#PuntoDocePageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-doce-anexo', 
    loadChildren: './pages/punto-doce-anexo/punto-doce-anexo.module#PuntoDoceAnexoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-doce-carta', 
    loadChildren: './pages/punto-doce-carta/punto-doce-carta.module#PuntoDoceCartaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-doce-procedimiento', 
    loadChildren: './pages/punto-doce-procedimiento/punto-doce-procedimiento.module#PuntoDoceProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-trece', 
    loadChildren: './pages/punto-trece/punto-trece.module#PuntoTrecePageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-trece-acta', 
    loadChildren: './pages/punto-trece-acta/punto-trece-acta.module#PuntoTreceActaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-trece-evaluacion', 
    loadChildren: './pages/punto-trece-evaluacion/punto-trece-evaluacion.module#PuntoTreceEvaluacionPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-trece-planeacion', 
    loadChildren: './pages/punto-trece-planeacion/punto-trece-planeacion.module#PuntoTrecePlaneacionPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-trece-planes', 
    loadChildren: './pages/punto-trece-planes/punto-trece-planes.module#PuntoTrecePlanesPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-trece-procedimiento', 
    loadChildren: './pages/punto-trece-procedimiento/punto-trece-procedimiento.module#PuntoTreceProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-trece-programa', 
    loadChildren: './pages/punto-trece-programa/punto-trece-programa.module#PuntoTreceProgramaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis-procedimiento', 
    loadChildren: './pages/punto-dieciseis-procedimiento/punto-dieciseis-procedimiento.module#PuntoDieciseisProcedimientoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis-procedimiento2', 
    loadChildren: './pages/punto-dieciseis-procedimiento2/punto-dieciseis-procedimiento2.module#PuntoDieciseisProcedimiento2PageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis-formato', 
    loadChildren: './pages/punto-dieciseis-formato/punto-dieciseis-formato.module#PuntoDieciseisFormatoPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis-entrevista', 
    loadChildren: './pages/punto-dieciseis-entrevista/punto-dieciseis-entrevista.module#PuntoDieciseisEntrevistaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis-comprobacion', 
    loadChildren: './pages/punto-dieciseis-comprobacion/punto-dieciseis-comprobacion.module#PuntoDieciseisComprobacionPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis-recomendaciones', 
    loadChildren: './pages/punto-dieciseis-recomendaciones/punto-dieciseis-recomendaciones.module#PuntoDieciseisRecomendacionesPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis-estadistica', 
    loadChildren: './pages/punto-dieciseis-estadistica/punto-dieciseis-estadistica.module#PuntoDieciseisEstadisticaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-dieciseis', 
    loadChildren: './pages/punto-dieciseis/punto-dieciseis.module#PuntoDieciseisPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-ocho-evidencia', 
    loadChildren: './pages/punto-ocho-evidencia/punto-ocho-evidencia.module#PuntoOchoEvidenciaPageModule', 
    //canLoad: [AuthGuard]
   },
  { 
    path: 'punto-ocho-evidencias', 
    loadChildren: './pages/punto-ocho-evidencias/punto-ocho-evidencias.module#PuntoOchoEvidenciasPageModule', 
    //canLoad: [AuthGuard]
   },
  { path: 'punto-cinco-matriz', loadChildren: './pages/punto-cinco-matriz/punto-cinco-matriz.module#PuntoCincoMatrizPageModule' },
  { path: 'punto-diez-evidencia', loadChildren: './pages/punto-diez-evidencia/punto-diez-evidencia.module#PuntoDiezEvidenciaPageModule' },
  { path: 'punto-once-evidencia', loadChildren: './pages/punto-once-evidencia/punto-once-evidencia.module#PuntoOnceEvidenciaPageModule' },
  { path: 'punto-doce-evidencia', loadChildren: './pages/punto-doce-evidencia/punto-doce-evidencia.module#PuntoDoceEvidenciaPageModule' },
  { path: 'punto-trece-evidencia', loadChildren: './pages/punto-trece-evidencia/punto-trece-evidencia.module#PuntoTreceEvidenciaPageModule' },
  { path: 'punto-catorce-evidencia', loadChildren: './pages/punto-catorce-evidencia/punto-catorce-evidencia.module#PuntoCatorceEvidenciaPageModule' },
  { path: 'punto-dieciseis-evidencia', loadChildren: './pages/punto-dieciseis-evidencia/punto-dieciseis-evidencia.module#PuntoDieciseisEvidenciaPageModule' },
  { path: 'punto-dos-procedimiento', loadChildren: './pages/punto-dos-procedimiento/punto-dos-procedimiento.module#PuntoDosProcedimientoPageModule' },
  { path: 'punto-dos-aspectos', loadChildren: './pages/punto-dos-aspectos/punto-dos-aspectos.module#PuntoDosAspectosPageModule' },
  { path: 'punto-dos-asam-uno', loadChildren: './pages/punto-dos-asam-uno/punto-dos-asam-uno.module#PuntoDosAsamUnoPageModule' },
  { path: 'punto-dos-asam-dos', loadChildren: './pages/punto-dos-asam-dos/punto-dos-asam-dos.module#PuntoDosAsamDosPageModule' },
  { path: 'punto-dos-asam-tres', loadChildren: './pages/punto-dos-asam-tres/punto-dos-asam-tres.module#PuntoDosAsamTresPageModule' },
  { path: 'punto-dos-asam-cuatro', loadChildren: './pages/punto-dos-asam-cuatro/punto-dos-asam-cuatro.module#PuntoDosAsamCuatroPageModule' },
  { path: 'punto-dos-asam-cinco', loadChildren: './pages/punto-dos-asam-cinco/punto-dos-asam-cinco.module#PuntoDosAsamCincoPageModule' },
  { path: 'punto-dos-asam-seis', loadChildren: './pages/punto-dos-asam-seis/punto-dos-asam-seis.module#PuntoDosAsamSeisPageModule' },
  { path: 'punto-dos-listado', loadChildren: './pages/punto-dos-listado/punto-dos-listado.module#PuntoDosListadoPageModule' },
  { path: 'punto-evidencia', loadChildren: './pages/punto-evidencia/punto-evidencia.module#PuntoEvidenciaPageModule' },
  { path: 'punto-dos-resultado', loadChildren: './pages/punto-dos-resultado/punto-dos-resultado.module#PuntoDosResultadoPageModule' },


  




 
  




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}









