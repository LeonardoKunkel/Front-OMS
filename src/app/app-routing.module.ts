
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
  { path: 'punto-catorce', loadChildren: './pages/punto-catorce/punto-catorce.module#PuntoCatorcePageModule' },
  { path: 'punto-quince', loadChildren: './pages/punto-quince/punto-quince.module#PuntoQuincePageModule' },
  { path: 'punto-diez-seis', loadChildren: './pages/punto-diez-seis/punto-diez-seis.module#PuntoDiezSeisPageModule' },
  { path: 'punto-diez-siete', loadChildren: './pages/punto-diez-siete/punto-diez-siete.module#PuntoDiezSietePageModule' },
  { path: 'punto-diez-ocho', loadChildren: './pages/punto-diez-ocho/punto-diez-ocho.module#PuntoDiezOchoPageModule' },
  { path: 'punto-doce', loadChildren: './pages/punto-doce/punto-doce.module#PuntoDocePageModule' },
  { path: 'p12-carta-responsiva', loadChildren: './pages/p12-carta-responsiva/p12-carta-responsiva.module#P12CartaResponsivaPageModule' },
  { path: 'p12-anexo-seguridad', loadChildren: './pages/p12-anexo-seguridad/p12-anexo-seguridad.module#P12AnexoSeguridadPageModule' },
  { path: 'p12-seguridad-contratista', loadChildren: './pages/p12-seguridad-contratista/p12-seguridad-contratista.module#P12SeguridadContratistaPageModule' },
  { path: 'punto-trece', loadChildren: './pages/punto-trece/punto-trece.module#PuntoTrecePageModule' },
  { path: 'p13-acta-conformacion', loadChildren: './pages/p13-acta-conformacion/p13-acta-conformacion.module#P13ActaConformacionPageModule' },
  { path: 'p13-programa-simulacros', loadChildren: './pages/p13-programa-simulacros/p13-programa-simulacros.module#P13ProgramaSimulacrosPageModule' },
  { path: 'p13-planeacion-simulacros', loadChildren: './pages/p13-planeacion-simulacros/p13-planeacion-simulacros.module#P13PlaneacionSimulacrosPageModule' },
  { path: 'p13-evaluacion-simulacros', loadChildren: './pages/p13-evaluacion-simulacros/p13-evaluacion-simulacros.module#P13EvaluacionSimulacrosPageModule' },
  { path: 'p13-planes-respuesta-emergencia', loadChildren: './pages/p13-planes-respuesta-emergencia/p13-planes-respuesta-emergencia.module#P13PlanesRespuestaEmergenciaPageModule' },
  { path: 'p13-reparacion-respuesta-emergencia', loadChildren: './pages/p13-reparacion-respuesta-emergencia/p13-reparacion-respuesta-emergencia.module#P13ReparacionRespuestaEmergenciaPageModule' },
  { path: 'punto-uno-politica', loadChildren: './pages/punto-uno-politica/punto-uno-politica.module#PuntoUnoPoliticaPageModule' },
  { path: 'punto-uno-procedimiento', loadChildren: './pages/punto-uno-procedimiento/punto-uno-procedimiento.module#PuntoUnoProcedimientoPageModule' },
  { path: 'punto-uno-evidencia', loadChildren: './pages/punto-uno-evidencia/punto-uno-evidencia.module#PuntoUnoEvidenciaPageModule' },
  { path: 'punto-dos-evidencia', loadChildren: './pages/punto-dos-evidencia/punto-dos-evidencia.module#PuntoDosEvidenciaPageModule' },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
