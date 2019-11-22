
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'main', 
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'mapa', 
    loadChildren: './pages/mapa/mapa.module#MapaPageModule',
    canLoad: [AuthGuard]  
  },
  { 
    path: 'calendar', 
    loadChildren: './pages/calendar/calendar.module#CalendarPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'menu-sasisopa', 
    loadChildren: './pages/menu-sasisopa/menu-sasisopa.module#MenuSasisopaPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'punto-cinco', 
    loadChildren: './pages/punto-cinco/punto-cinco.module#PuntoCincoPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'punto-seis', 
    loadChildren: './pages/punto-seis/punto-seis.module#PuntoSeisPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'punto-uno', 
    loadChildren: './pages/punto-uno/punto-uno.module#PuntoUnoPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'punto-dos', 
    loadChildren: './pages/punto-dos/punto-dos.module#PuntoDosPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'punto-dos-riesgos', 
    loadChildren: './pages/punto-dos-riesgos/punto-dos-riesgos.module#PuntoDosRiesgosPageModule',
    canLoad: [AuthGuard] 
  },
  { 
    path: 'punto-tes', 
    loadChildren: './pages/punto-tes/punto-tes.module#PuntoTesPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'punto-cuatro', 
    loadChildren: './pages/punto-cuatro/punto-cuatro.module#PuntoCuatroPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'onbjetivo-modal', 
    loadChildren: './pages/onbjetivo-modal/onbjetivo-modal.module#OnbjetivoModalPageModule',
    canLoad: [AuthGuard] 
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
    canLoad: [AuthGuard]
  },
  { path: 'punto-ocho', 
    loadChildren: './pages/punto-ocho/punto-ocho.module#PuntoOchoPageModule',
    canLoad: [AuthGuard] 
  },
  { path: 'menu-punto2', 
    loadChildren: './menu-punto2/menu-punto2.module#MenuPunto2PageModule',
    canLoad: [AuthGuard]
  },
  { path: 'resultados-riesgos', 
    loadChildren: './pages/resultados-riesgos/resultados-riesgos.module#ResultadosRiesgosPageModule',
    canLoad: [AuthGuard] 
  },
  { path: 'listado-peligros', 
    loadChildren: './pages/listado-peligros/listado-peligros.module#ListadoPeligrosPageModule',
    canLoad: [AuthGuard] 

  },
  { 
    path: 'punto-nueve', 
    loadChildren: './punto-nueve/punto-nueve.module#PuntoNuevePageModule',
    canLoad: [AuthGuard] 
  },
  { 
    path: 'punto-once', 
    loadChildren: './pages/punto-once/punto-once.module#PuntoOncePageModule',
    canLoad: [AuthGuard]  
  },
  { 
    path: 'fo01', 
    loadChildren: './pages/fo01/fo01.module#FO01PageModule',
    canLoad: [AuthGuard] 
  },
  { 
    path: 'fo08', 
    loadChildren: './pages/fo08/fo08.module#Fo08PageModule',
    canLoad: [AuthGuard] 
  },
  { 
    path: 'fo05', 
    loadChildren: './pages/fo05/fo05.module#Fo05PageModule',
    canLoad: [AuthGuard] 
  },
  { 
    path: 'fo03', 
    loadChildren: './pages/fo03/fo03.module#FO03PageModule',
    canLoad: [AuthGuard] 
  },
  { path: 'fo04', loadChildren: './pages/fo04/fo04.module#Fo04PageModule' },
  
  { path: 'fs20', loadChildren: './pages/fs20/fs20.module#Fs20PageModule' },
  { path: 'fs20-tanques', loadChildren: './pages/fs20-tanques/fs20-tanques.module#Fs20TanquesPageModule' },
  { path: 'fs20-dispensarios', loadChildren: './pages/fs20-dispensarios/fs20-dispensarios.module#Fs20DispensariosPageModule' },
  { path: 'fs20-drenajes', loadChildren: './pages/fs20-drenajes/fs20-drenajes.module#Fs20DrenajesPageModule' },
  { path: 'fs20-electricas', loadChildren: './pages/fs20-electricas/fs20-electricas.module#Fs20ElectricasPageModule' },
  { path: 'fs20-pozos', loadChildren: './pages/fs20-pozos/fs20-pozos.module#Fs20PozosPageModule' },
  { path: 'fs20-edificios', loadChildren: './pages/fs20-edificios/fs20-edificios.module#Fs20EdificiosPageModule' },
  { path: 'pdf-im01', loadChildren: './pages/pdf-im01/pdf-im01.module#PdfIM01PageModule' },
  { path: 'pdf-im02', loadChildren: './pages/pdf-im02/pdf-im02.module#PdfIM02PageModule' },
  { path: 'pdf-im03', loadChildren: './pages/pdf-im03/pdf-im03.module#PdfIM03PageModule' },
  { path: 'pdf-im04', loadChildren: './pages/pdf-im04/pdf-im04.module#PdfIM04PageModule' },
  { path: 'pdf-im05', loadChildren: './pages/pdf-im05/pdf-im05.module#PdfIM05PageModule' },
  { path: 'pdf-im11', loadChildren: './pages/pdf-im11/pdf-im11.module#PdfIM11PageModule' },
  { path: 'fs21', loadChildren: './pages/fs21/fs21.module#Fs21PageModule' },
  { path: 'fs22', loadChildren: './pages/fs22/fs22.module#Fs22PageModule' },
  { path: 'fso02', loadChildren: './pages/fso02/fso02.module#Fso02PageModule' },
  { path: 'fso06', loadChildren: './pages/fso06/fso06.module#Fso06PageModule' },
  { path: 'fo06', loadChildren: './pages/fo06/fo06.module#Fo06PageModule' },
  { path: 'fo07', loadChildren: './pages/fo07/fo07.module#Fo07PageModule' },
  { path: 'procedimiento-punto-dos', loadChildren: './pages/procedimiento-punto-dos/procedimiento-punto-dos.module#ProcedimientoPuntoDosPageModule' },
  { path: 'punto-diez', loadChildren: './pages/punto-diez/punto-diez.module#PuntoDiezPageModule' },
  { path: 'punto-diezfs19', loadChildren: './pages/punto-diezfs19/punto-diezfs19.module#PuntoDiezfs19PageModule' },
  { path: 'punto-diezfo09', loadChildren: './pages/punto-diezfo09/punto-diezfo09.module#PuntoDiezfo09PageModule' },
  { path: 'punto-catorce', loadChildren: './pages/punto-catorce/punto-catorce.module#PuntoCatorcePageModule' },
  { path: 'puntocatorcefs29', loadChildren: './pages/puntocatorcefs29/puntocatorcefs29.module#Puntocatorcefs29PageModule' },
  { path: 'puntocatorce30', loadChildren: './pages/puntocatorce30/puntocatorce30.module#Puntocatorce30PageModule' },
  { path: 'puntocatorce31', loadChildren: './pages/puntocatorce31/puntocatorce31.module#Puntocatorce31PageModule' },
  
  { path: 'puntocatorce32', loadChildren: './pages/puntocatorce32/puntocatorce32.module#Puntocatorce32PageModule' },
  { path: 'catorce31asea', loadChildren: './pages/catorce31asea/catorce31asea.module#Catorce31aseaPageModule' },
  { path: 'catorce31comision', loadChildren: './pages/catorce31comision/catorce31comision.module#Catorce31comisionPageModule' },
  { path: 'catorce31secretaria', loadChildren: './pages/catorce31secretaria/catorce31secretaria.module#Catorce31secretariaPageModule' },
  { path: 'catorce31semarnat', loadChildren: './pages/catorce31semarnat/catorce31semarnat.module#Catorce31semarnatPageModule' },
  { path: 'catorce31legestatal', loadChildren: './pages/catorce31legestatal/catorce31legestatal.module#Catorce31legestatalPageModule' },
  { path: 'catorce31leglocal', loadChildren: './pages/catorce31leglocal/catorce31leglocal.module#Catorce31leglocalPageModule' },
  { path: 'punto-uno-politica', loadChildren: './pages/punto-uno-politica/punto-uno-politica.module#PuntoUnoPoliticaPageModule' },
  { path: 'punto-uno-procedimiento', loadChildren: './pages/punto-uno-procedimiento/punto-uno-procedimiento.module#PuntoUnoProcedimientoPageModule' },
  { path: 'punto-uno-evidencia', loadChildren: './pages/punto-uno-evidencia/punto-uno-evidencia.module#PuntoUnoEvidenciaPageModule' },
  { path: 'punto-dos-evidencia', loadChildren: './pages/punto-dos-evidencia/punto-dos-evidencia.module#PuntoDosEvidenciaPageModule' },
  { path: 'punto-tres-procedimiento', loadChildren: './pages/punto-tres-procedimiento/punto-tres-procedimiento.module#PuntoTresProcedimientoPageModule' },
  { path: 'punto-tres-lista', loadChildren: './pages/punto-tres-lista/punto-tres-lista.module#PuntoTresListaPageModule' },
  { path: 'punto-tres-evidencia', loadChildren: './pages/punto-tres-evidencia/punto-tres-evidencia.module#PuntoTresEvidenciaPageModule' },
  { path: 'menu-punto5', loadChildren: './pages/menu-punto5/menu-punto5.module#MenuPunto5PageModule' },
  { path: 'punto-cinco-procedimiento', loadChildren: './pages/punto-cinco-procedimiento/punto-cinco-procedimiento.module#PuntoCincoProcedimientoPageModule' },
  { path: 'punto-cinco-evidencia', loadChildren: './pages/punto-cinco-evidencia/punto-cinco-evidencia.module#PuntoCincoEvidenciaPageModule' },
  { path: 'punto-seis-menu', loadChildren: './pages/punto-seis-menu/punto-seis-menu.module#PuntoSeisMenuPageModule' },
  { path: 'punto-seis-deteccion-necesidades', loadChildren: './pages/punto-seis-deteccion-necesidades/punto-seis-deteccion-necesidades.module#PuntoSeisDeteccionNecesidadesPageModule' },
  { path: 'punto-seis-programa-capacitacion', loadChildren: './pages/punto-seis-programa-capacitacion/punto-seis-programa-capacitacion.module#PuntoSeisProgramaCapacitacionPageModule' },
  { path: 'punto-seis-seguimiento-programa', loadChildren: './pages/punto-seis-seguimiento-programa/punto-seis-seguimiento-programa.module#PuntoSeisSeguimientoProgramaPageModule' },
  { path: 'punto-seis-procedimiento', loadChildren: './pages/punto-seis-procedimiento/punto-seis-procedimiento.module#PuntoSeisProcedimientoPageModule' },
  { path: 'punto-seis-evidencia', loadChildren: './pages/punto-seis-evidencia/punto-seis-evidencia.module#PuntoSeisEvidenciaPageModule' },
  { path: 'punto-cuatro-menu', loadChildren: './pages/punto-cuatro-menu/punto-cuatro-menu.module#PuntoCuatroMenuPageModule' },
  { path: 'punto-cuatro-procedimiento', loadChildren: './pages/punto-cuatro-procedimiento/punto-cuatro-procedimiento.module#PuntoCuatroProcedimientoPageModule' },
  { path: 'punto-cuatro-evidencia', loadChildren: './pages/punto-cuatro-evidencia/punto-cuatro-evidencia.module#PuntoCuatroEvidenciaPageModule' },
  { path: 'punto-siete-menu', loadChildren: './pages/punto-siete-menu/punto-siete-menu.module#PuntoSieteMenuPageModule' },
  { path: 'punto-siete-evidencia', loadChildren: './pages/punto-siete-evidencia/punto-siete-evidencia.module#PuntoSieteEvidenciaPageModule' },
  { path: 'punto-siete-procedimiento', loadChildren: './pages/punto-siete-procedimiento/punto-siete-procedimiento.module#PuntoSieteProcedimientoPageModule' },
  { path: 'quejas-sugerencias', loadChildren: './pages/quejas-sugerencias/quejas-sugerencias.module#QuejasSugerenciasPageModule' },
  { path: 'registros-control', loadChildren: './pages/registros-control/registros-control.module#RegistrosControlPageModule' },
  { path: 'punto-ocho-menu', loadChildren: './pages/punto-ocho-menu/punto-ocho-menu.module#PuntoOchoMenuPageModule' },
  { path: 'punto-procedimiento', loadChildren: './pages/punto-procedimiento/punto-procedimiento.module#PuntoProcedimientoPageModule' },
  { path: 'punto-evidencia', loadChildren: './pages/punto-evidencia/punto-evidencia.module#PuntoEvidenciaPageModule' },
  { path: 'punto-ocho-solicitud-cambios', loadChildren: './pages/punto-ocho-solicitud-cambios/punto-ocho-solicitud-cambios.module#PuntoOchoSolicitudCambiosPageModule' },
  { path: 'punto-ocho-lista-distribucion', loadChildren: './pages/punto-ocho-lista-distribucion/punto-ocho-lista-distribucion.module#PuntoOchoListaDistribucionPageModule' },
  { path: 'punto15-menu', loadChildren: './pages/punto15-menu/punto15-menu.module#Punto15MenuPageModule' },
  { path: 'punto15-programa-auditorias', loadChildren: './pages/punto15-programa-auditorias/punto15-programa-auditorias.module#Punto15ProgramaAuditoriasPageModule' },
  { path: 'punto15-plan-auditorias', loadChildren: './pages/punto15-plan-auditorias/punto15-plan-auditorias.module#Punto15PlanAuditoriasPageModule' },
  { path: 'punto15-informe-auditorias', loadChildren: './pages/punto15-informe-auditorias/punto15-informe-auditorias.module#Punto15InformeAuditoriasPageModule' },
  { path: 'punto15-procedimiento', loadChildren: './pages/punto15-procedimiento/punto15-procedimiento.module#Punto15ProcedimientoPageModule' },
  { path: 'punto15-evidencia', loadChildren: './pages/punto15-evidencia/punto15-evidencia.module#Punto15EvidenciaPageModule' },
  { path: 'punto15-atencion-hallazgos', loadChildren: './pages/punto15-atencion-hallazgos/punto15-atencion-hallazgos.module#Punto15AtencionHallazgosPageModule' },
  { path: 'simple', loadChildren: './pages/simple/simple.module#SimplePageModule' },
  { path: 'punto-diecisiete', loadChildren: './pages/punto-diecisiete/punto-diecisiete.module#PuntoDiecisietePageModule' },
  { path: 'punto-diecisiete-evidencia', loadChildren: './pages/punto-diecisiete-evidencia/punto-diecisiete-evidencia.module#PuntoDiecisieteEvidenciaPageModule' },
  { path: 'punto-diecisiete-procedimiento', loadChildren: './pages/punto-diecisiete-procedimiento/punto-diecisiete-procedimiento.module#PuntoDiecisieteProcedimientoPageModule' },
  { path: 'punto-diecisiete-formulario', loadChildren: './pages/punto-diecisiete-formulario/punto-diecisiete-formulario.module#PuntoDiecisieteFormularioPageModule' },
  { path: 'cuatro1', loadChildren: './pages/cuatro1/cuatro1.module#Cuatro1PageModule' },
  { path: 'cuatro2', loadChildren: './pages/cuatro2/cuatro2.module#Cuatro2PageModule' },
  { path: 'cuatro3', loadChildren: './pages/cuatro3/cuatro3.module#Cuatro3PageModule' },
  { path: 'fo01-contboq', loadChildren: './pages/fo01-contboq/fo01-contboq.module#Fo01ContboqPageModule' },
  { path: 'fo01-contremoto', loadChildren: './pages/fo01-contremoto/fo01-contremoto.module#Fo01ContremotoPageModule' },
  { path: 'fo01-espacio', loadChildren: './pages/fo01-espacio/fo01-espacio.module#Fo01EspacioPageModule' },
  { path: 'fo01-inventarios', loadChildren: './pages/fo01-inventarios/fo01-inventarios.module#Fo01InventariosPageModule' },
  { path: 'fo01-motobombas', loadChildren: './pages/fo01-motobombas/fo01-motobombas.module#Fo01MotobombasPageModule' },
  { path: 'fo01-nivel', loadChildren: './pages/fo01-nivel/fo01-nivel.module#Fo01NivelPageModule' },
  { path: 'fo01-pozos', loadChildren: './pages/fo01-pozos/fo01-pozos.module#Fo01PozosPageModule' },
  { path: 'fo01-purga', loadChildren: './pages/fo01-purga/fo01-purga.module#Fo01PurgaPageModule' },
  { path: 'fo01-vapores', loadChildren: './pages/fo01-vapores/fo01-vapores.module#Fo01VaporesPageModule' },
  { path: 'nueve-evidencia', loadChildren: './pages/nueve-evidencia/nueve-evidencia.module#NueveEvidenciaPageModule' },
  { path: 'nueve-listado', loadChildren: './pages/nueve-listado/nueve-listado.module#NueveListadoPageModule' },
  { path: 'nueve-procedimiento', loadChildren: './pages/nueve-procedimiento/nueve-procedimiento.module#NueveProcedimientoPageModule' },
  { path: 'popover1', loadChildren: './pages/popover1/popover1.module#Popover1PageModule' },
  { path: 'punto-doce', loadChildren: './pages/punto-doce/punto-doce.module#PuntoDocePageModule' },
  { path: 'punto-doce-anexo', loadChildren: './pages/punto-doce-anexo/punto-doce-anexo.module#PuntoDoceAnexoPageModule' },
  { path: 'punto-doce-carta', loadChildren: './pages/punto-doce-carta/punto-doce-carta.module#PuntoDoceCartaPageModule' },
  { path: 'punto-doce-procedimiento', loadChildren: './pages/punto-doce-procedimiento/punto-doce-procedimiento.module#PuntoDoceProcedimientoPageModule' },
  { path: 'punto-trece', loadChildren: './pages/punto-trece/punto-trece.module#PuntoTrecePageModule' },
  { path: 'punto-trece-acta', loadChildren: './pages/punto-trece-acta/punto-trece-acta.module#PuntoTreceActaPageModule' },
  { path: 'punto-trece-evaluacion', loadChildren: './pages/punto-trece-evaluacion/punto-trece-evaluacion.module#PuntoTreceEvaluacionPageModule' },
  { path: 'punto-trece-planeacion', loadChildren: './pages/punto-trece-planeacion/punto-trece-planeacion.module#PuntoTrecePlaneacionPageModule' },
  { path: 'punto-trece-planes', loadChildren: './pages/punto-trece-planes/punto-trece-planes.module#PuntoTrecePlanesPageModule' },
  { path: 'punto-trece-procedimiento', loadChildren: './pages/punto-trece-procedimiento/punto-trece-procedimiento.module#PuntoTreceProcedimientoPageModule' },
  { path: 'punto-trece-programa', loadChildren: './pages/punto-trece-programa/punto-trece-programa.module#PuntoTreceProgramaPageModule' },
  { path: 'punto-dieciseis-procedimiento', loadChildren: './pages/punto-dieciseis-procedimiento/punto-dieciseis-procedimiento.module#PuntoDieciseisProcedimientoPageModule' },
  { path: 'punto-dieciseis-procedimiento2', loadChildren: './pages/punto-dieciseis-procedimiento2/punto-dieciseis-procedimiento2.module#PuntoDieciseisProcedimiento2PageModule' },
  { path: 'punto-dieciseis-formato', loadChildren: './pages/punto-dieciseis-formato/punto-dieciseis-formato.module#PuntoDieciseisFormatoPageModule' },
  { path: 'punto-dieciseis-entrevista', loadChildren: './pages/punto-dieciseis-entrevista/punto-dieciseis-entrevista.module#PuntoDieciseisEntrevistaPageModule' },
  { path: 'punto-dieciseis-comprobacion', loadChildren: './pages/punto-dieciseis-comprobacion/punto-dieciseis-comprobacion.module#PuntoDieciseisComprobacionPageModule' },
  { path: 'punto-dieciseis-recomendaciones', loadChildren: './pages/punto-dieciseis-recomendaciones/punto-dieciseis-recomendaciones.module#PuntoDieciseisRecomendacionesPageModule' },
  { path: 'punto-dieciseis-estadistica', loadChildren: './pages/punto-dieciseis-estadistica/punto-dieciseis-estadistica.module#PuntoDieciseisEstadisticaPageModule' },  { path: 'punto-dieciseis', loadChildren: './pages/punto-dieciseis/punto-dieciseis.module#PuntoDieciseisPageModule' }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}









