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





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
