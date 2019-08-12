import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule' },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'menu-sasisopa', loadChildren: './pages/menu-sasisopa/menu-sasisopa.module#MenuSasisopaPageModule' },
  { path: 'punto-cinco', loadChildren: './pages/punto-cinco/punto-cinco.module#PuntoCincoPageModule' },

  { path: 'punto-seis', loadChildren: './pages/punto-seis/punto-seis.module#PuntoSeisPageModule' },
  { path: 'punto-uno', loadChildren: './pages/punto-uno/punto-uno.module#PuntoUnoPageModule' },
  { path: 'punto-dos', loadChildren: './pages/punto-dos/punto-dos.module#PuntoDosPageModule' }
  



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
