
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
    path: 'menu-sasisopa',
    loadChildren: './pages/menu-sasisopa/menu-sasisopa.module#MenuSasisopaPageModule',
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
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-once',
    loadChildren: './pages/punto-once/punto-once.module#PuntoOncePageModule',
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
    // canLoad: [AuthGuard]
  },
  {
    path: 'pdf-im04',
    loadChildren: './pages/pdf-im04/pdf-im04.module#PdfIM04PageModule' ,
    // canLoad: [AuthGuard]
  },
  {
    path: 'pdf-im05',
    loadChildren: './pages/pdf-im05/pdf-im05.module#PdfIM05PageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'pdf-im11',
    loadChildren: './pages/pdf-im11/pdf-im11.module#PdfIM11PageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-diez',
    loadChildren: './pages/punto-diez/punto-diez.module#PuntoDiezPageModule' ,
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-catorce',
     loadChildren: './pages/punto-catorce/punto-catorce.module#PuntoCatorcePageModule',
     // canLoad: [AuthGuard]
  },
  {
    path: 'punto-uno-procedimiento',
    loadChildren: './pages/punto-uno-procedimiento/punto-uno-procedimiento.module#PuntoUnoProcedimientoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-uno-evidencia',
    loadChildren: './pages/punto-uno-evidencia/punto-uno-evidencia.module#PuntoUnoEvidenciaPageModule' ,
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-tres-procedimiento',
    loadChildren: './pages/punto-tres-procedimiento/punto-tres-procedimiento.module#PuntoTresProcedimientoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-tres-evidencia',
    loadChildren: './pages/punto-tres-evidencia/punto-tres-evidencia.module#PuntoTresEvidenciaPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'menu-punto5',
    loadChildren: './pages/menu-punto5/menu-punto5.module#MenuPunto5PageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-cinco-procedimiento',
     loadChildren: './pages/punto-cinco-procedimiento/punto-cinco-procedimiento.module#PuntoCincoProcedimientoPageModule',
     // canLoad: [AuthGuard]
  },
  {
    path: 'punto-cinco-evidencia',
    loadChildren: './pages/punto-cinco-evidencia/punto-cinco-evidencia.module#PuntoCincoEvidenciaPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-seis-menu',
    loadChildren: './pages/punto-seis-menu/punto-seis-menu.module#PuntoSeisMenuPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-seis-deteccion-necesidades',
    loadChildren: './pages/punto-seis-deteccion-necesidades/punto-seis-deteccion-necesidades.module#PuntoSeisDeteccionNecesidadesPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-seis-programa-capacitacion',
    loadChildren: './pages/punto-seis-programa-capacitacion/punto-seis-programa-capacitacion.module#PuntoSeisProgramaCapacitacionPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-seis-procedimiento',
    loadChildren: './pages/punto-seis-procedimiento/punto-seis-procedimiento.module#PuntoSeisProcedimientoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-seis-evidencia',
    loadChildren: './pages/punto-seis-evidencia/punto-seis-evidencia.module#PuntoSeisEvidenciaPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-siete-menu',
    loadChildren: './pages/punto-siete-menu/punto-siete-menu.module#PuntoSieteMenuPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-siete-procedimiento',
    loadChildren: './pages/punto-siete-procedimiento/punto-siete-procedimiento.module#PuntoSieteProcedimientoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-ocho-menu',
    loadChildren: './pages/punto-ocho-menu/punto-ocho-menu.module#PuntoOchoMenuPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-evidencia',
    loadChildren: './pages/punto-evidencia/punto-evidencia.module#PuntoEvidenciaPageModule',
    // canLoad: [AuthGuard]
  },
  // {
  //   path: 'simple',
  //   loadChildren: './pages/simple/simple.module#SimplePageModule',
  //   // canLoad: [AuthGuard]
  // },
  {
    path: 'punto-diecisiete',
    loadChildren: './pages/punto-diecisiete/punto-diecisiete.module#PuntoDiecisietePageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-diecisiete-procedimiento',
    loadChildren: './pages/punto-diecisiete-procedimiento/punto-diecisiete-procedimiento.module#PuntoDiecisieteProcedimientoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'cuatro1',
    loadChildren: './pages/cuatro1/cuatro1.module#Cuatro1PageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'cuatro2',
    loadChildren: './pages/cuatro2/cuatro2.module#Cuatro2PageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'cuatro3',
    loadChildren: './pages/cuatro3/cuatro3.module#Cuatro3PageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'popover1',
    loadChildren: './pages/popover1/popover1.module#Popover1PageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-doce',
    loadChildren: './pages/punto-doce/punto-doce.module#PuntoDocePageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-doce-anexo',
    loadChildren: './pages/punto-doce-anexo/punto-doce-anexo.module#PuntoDoceAnexoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-doce-carta',
    loadChildren: './pages/punto-doce-carta/punto-doce-carta.module#PuntoDoceCartaPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-doce-procedimiento',
    loadChildren: './pages/punto-doce-procedimiento/punto-doce-procedimiento.module#PuntoDoceProcedimientoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-trece',
    loadChildren: './pages/punto-trece/punto-trece.module#PuntoTrecePageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-trece-procedimiento',
    loadChildren: './pages/punto-trece-procedimiento/punto-trece-procedimiento.module#PuntoTreceProcedimientoPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-trece-programa',
    loadChildren: './pages/punto-trece-programa/punto-trece-programa.module#PuntoTreceProgramaPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-dieciseis',
    loadChildren: './pages/punto-dieciseis/punto-dieciseis.module#PuntoDieciseisPageModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'punto-cinco-matriz',
    loadChildren: './pages/punto-cinco-matriz/punto-cinco-matriz.module#PuntoCincoMatrizPageModule'
  },
  {
    path: 'punto-once-evidencia',
    loadChildren: './pages/punto-once-evidencia/punto-once-evidencia.module#PuntoOnceEvidenciaPageModule'
  },
  {
    path: 'punto-doce-evidencia',
    loadChildren: './pages/punto-doce-evidencia/punto-doce-evidencia.module#PuntoDoceEvidenciaPageModule'
  },
  {
    path: 'punto-trece-evidencia',
    loadChildren: './pages/punto-trece-evidencia/punto-trece-evidencia.module#PuntoTreceEvidenciaPageModule'
  },
  {
    path: 'punto-catorce-evidencia',
    loadChildren: './pages/punto-catorce-evidencia/punto-catorce-evidencia.module#PuntoCatorceEvidenciaPageModule'
  },
  {
    path: 'punto-dos-procedimiento',
    loadChildren: './pages/punto-dos-procedimiento/punto-dos-procedimiento.module#PuntoDosProcedimientoPageModule'
  },
  {
    path: 'punto-dos-aspectos',
    loadChildren: './pages/punto-dos-aspectos/punto-dos-aspectos.module#PuntoDosAspectosPageModule'
  },
  {
    path: 'punto-dos-listado',
    loadChildren: './pages/punto-dos-listado/punto-dos-listado.module#PuntoDosListadoPageModule'
  },
  {
    path: 'punto-evidencia',
    loadChildren: './pages/punto-evidencia/punto-evidencia.module#PuntoEvidenciaPageModule'
  },
  {
    path: 'punto-dos-resultado',
    loadChildren: './pages/punto-dos-resultado/punto-dos-resultado.module#PuntoDosResultadoPageModule'
  },
  {
    path: 'director-modal',
    loadChildren: './pages/director-modal/director-modal.module#DirectorModalPageModule'
  },
  {
    path: 'representante-modal',
    loadChildren: './pages/representante-modal/representante-modal.module#RepresentanteModalPageModule'
  },
  {
    path: 'encargado-modal',
    loadChildren: './pages/encargado-modal/encargado-modal.module#EncargadoModalPageModule'
  },
  {
    path: 'jefe-piso-modal',
    loadChildren: './pages/jefe-piso-modal/jefe-piso-modal.module#JefePisoModalPageModule'
  },
  {
    path: 'despachadores-modal',
    loadChildren: './pages/despachadores-modal/despachadores-modal.module#DespachadoresModalPageModule'
  },
  {
    path: 'mantenimiento-modal',
    loadChildren: './pages/mantenimiento-modal/mantenimiento-modal.module#MantenimientoModalPageModule'
  },
  {
    path: 'contratistas-modal',
    loadChildren: './pages/contratistas-modal/contratistas-modal.module#ContratistasModalPageModule'
  },
  {
    path: 'elemento18-procedimiento',
    loadChildren: './pages/elemento18-procedimiento/elemento18-procedimiento.module#Elemento18ProcedimientoPageModule'
  },
  {
    path: 'elemento16-investigacion-accidentes',
    loadChildren: './pages/elemento16-investigacion-accidentes/elemento16-investigacion-accidentes.module#Elemento16InvestigacionAccidentesPageModule'
  },
  {
    path: 'elemento16-arbol-fallas',
    loadChildren: './pages/elemento16-arbol-fallas/elemento16-arbol-fallas.module#Elemento16ArbolFallasPageModule'
  },
  {
    path: 'elemento16-causa-raiz',
    loadChildren: './pages/elemento16-causa-raiz/elemento16-causa-raiz.module#Elemento16CausaRaizPageModule'
  },
  {
    path: 'estacion-servicio-model',
    loadChildren: './pages/estacion-servicio-model/estacion-servicio-model.module#EstacionServicioModelPageModule'
  },
  {
    path: 'elemento16-estadistica',
    loadChildren: './pages/elemento16-estadistica/elemento16-estadistica.module#Elemento16EstadisticaPageModule'
  },
  {
    path: 'punto-siete-registro',
    loadChildren: './pages/punto-siete-registro/punto-siete-registro.module#PuntoSieteRegistroPageModule'
  },
  {
    path: 'punto-nueve',
    loadChildren: './pages/punto-nueve/punto-nueve.module#PuntoNuevePageModule'
  },
  {
    path: 'punto-nueve-procedimiento',
    loadChildren: './pages/punto-nueve-procedimiento/punto-nueve-procedimiento.module#PuntoNueveProcedimientoPageModule'
  },
  {
    path: 'punto-nueve-listado',
    loadChildren: './pages/punto-nueve-listado/punto-nueve-listado.module#PuntoNueveListadoPageModule'
  },
  {
    path: 'punto-ocho-lista',
    loadChildren: './pages/punto-ocho-lista/punto-ocho-lista.module#PuntoOchoListaPageModule'
  },
  {
    path: 'punto-ocho-procedimiento',
    loadChildren: './pages/punto-ocho-procedimiento/punto-ocho-procedimiento.module#PuntoOchoProcedimientoPageModule'
  },
  {
    path: 'firmas',
    loadChildren: './pages/firmas/firmas.module#FirmasPageModule'
  },
  {
    path: 'punto-catorce-procedimiento',
    loadChildren: './pages/punto-catorce-procedimiento/punto-catorce-procedimiento.module#PuntoCatorceProcedimientoPageModule'
  },
  {
    path: 'punto-quince-procedimiento',
    loadChildren: './pages/punto-quince-procedimiento/punto-quince-procedimiento.module#PuntoQuinceProcedimientoPageModule'
  },
  {
    path: 'punto-quince',
    loadChildren: './pages/punto-quince/punto-quince.module#PuntoQuincePageModule'
  },
  {
    path: 'punto-diecisiete-informe',
    loadChildren: './pages/punto-diecisiete-informe/punto-diecisiete-informe.module#PuntoDiecisieteInformePageModule'
  },
  {
    path: 'punto-diecisiete-evidencia',
    loadChildren: './pages/punto-diecisiete-evidencia/punto-diecisiete-evidencia.module#PuntoDiecisieteEvidenciaPageModule'
  },
  {
    path: 'punto-quince-evidencia',
    loadChildren: './pages/punto-quince-evidencia/punto-quince-evidencia.module#PuntoQuinceEvidenciaPageModule'
  },
  {
    path: 'punto-quince-programa',
    loadChildren: './pages/punto-quince-programa/punto-quince-programa.module#PuntoQuinceProgramaPageModule'
  },
  {
    path: 'punto-quince-plan',
    loadChildren: './pages/punto-quince-plan/punto-quince-plan.module#PuntoQuincePlanPageModule'
  },
  {
    path: 'punto-quince-informe',
    loadChildren: './pages/punto-quince-informe/punto-quince-informe.module#PuntoQuinceInformePageModule'
  },
  {
    path: 'punto-catorce-evaluacion',
    loadChildren: './pages/punto-catorce-evaluacion/punto-catorce-evaluacion.module#PuntoCatorceEvaluacionPageModule'
  },
  {
    path: 'punto-catorce-evidencia',
    loadChildren: './pages/punto-catorce-evidencia/punto-catorce-evidencia.module#PuntoCatorceEvidenciaPageModule'
  },
  {
    path: 'punto-once-evidencia',
    loadChildren: './pages/punto-once-evidencia/punto-once-evidencia.module#PuntoOnceEvidenciaPageModule'
  },
  {
    path: 'punto-once-lista',
    loadChildren: './pages/punto-once-lista/punto-once-lista.module#PuntoOnceListaPageModule'
  },
  {
    path: 'punto-once-procedimiento',
    loadChildren: './pages/punto-once-procedimiento/punto-once-procedimiento.module#PuntoOnceProcedimientoPageModule'
  },
  {
    path: 'punto-diez-procedimiento',
    loadChildren: './pages/punto-diez-procedimiento/punto-diez-procedimiento.module#PuntoDiezProcedimientoPageModule'
  },
  {
    path: 'punto-diez-personal',
    loadChildren: './pages/punto-diez-personal/punto-diez-personal.module#PuntoDiezPersonalPageModule'
  },
  {
    path: 'punto-diez-tecnologia',
    loadChildren: './pages/punto-diez-tecnologia/punto-diez-tecnologia.module#PuntoDiezTecnologiaPageModule'
  },
  {
    path: 'punto-diez-operacion',
    loadChildren: './pages/punto-diez-operacion/punto-diez-operacion.module#PuntoDiezOperacionPageModule'
  },
  {
    path: 'punto-diez-trabajo',
    loadChildren: './pages/punto-diez-trabajo/punto-diez-trabajo.module#PuntoDiezTrabajoPageModule'
  },
  {
    path: 'punto-siete-evidencia',
    loadChildren: './pages/punto-siete-evidencia/punto-siete-evidencia.module#PuntoSieteEvidenciaPageModule'
  },
  {
    path: 'punto-ocho-inst',
    loadChildren: './pages/punto-ocho-inst/punto-ocho-inst.module#PuntoOchoInstPageModule'
  },
  {
    path: 'punto-ocho-solicitud',
    loadChildren: './pages/punto-ocho-solicitud/punto-ocho-solicitud.module#PuntoOchoSolicitudPageModule'
  },
  {
    path: 'punto-ocho-distribucion',
    loadChildren: './pages/punto-ocho-distribucion/punto-ocho-distribucion.module#PuntoOchoDistribucionPageModule'
  },
  {
    path: 'estacion-servicio-update',
    loadChildren: './pages/estacion-servicio-update/estacion-servicio-update.module#EstacionServicioUpdatePageModule'
  },
  {
    path: 'politica-specific',
    loadChildren: './pages/politica-specific/politica-specific.module#PoliticaSpecificPageModule'
  },
  {
    path: 'iconos-estacion',
    loadChildren: './pages/iconos-estacion/iconos-estacion.module#IconosEstacionPageModule'
  },
  {
    path: 'punto-uno-politica',
    loadChildren: './pages/punto-uno-politica/punto-uno-politica.module#PuntoUnoPoliticaPageModule'
  },
  {
    path: 'firma-represntante',
    loadChildren: './pages/firma-represntante/firma-represntante.module#FirmaRepresntantePageModule'
  },
  {
    path: 'calendario',
    loadChildren: './pages/calendario/calendario.module#CalendarioPageModule'
  },
  {
    path: 'cal-modal',
    loadChildren: './pages/cal-modal/cal-modal.module#CalModalPageModule'
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
