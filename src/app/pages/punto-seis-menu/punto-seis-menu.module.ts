import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSeisMenuPage } from './punto-seis-menu.page';
//import { PuntoSeisSeguimientoProgramaPage } from '../punto-seis-seguimiento-programa/punto-seis-seguimiento-programa.page';
const routes: Routes = [
  {
    path: '',
    component: PuntoSeisMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],             //Recordar eliminar de app routing la pagina importada
  declarations: [PuntoSeisMenuPage],
  //entryComponents: [PuntoSeisSeguimientoProgramaPage]
})
export class PuntoSeisMenuPageModule {}
