import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSeisDeteccionNecesidadesPage } from './punto-seis-deteccion-necesidades.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSeisDeteccionNecesidadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSeisDeteccionNecesidadesPage]
})
export class PuntoSeisDeteccionNecesidadesPageModule {}
