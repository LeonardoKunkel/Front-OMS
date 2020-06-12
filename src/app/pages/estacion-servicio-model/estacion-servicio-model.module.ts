import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
//import { EstacionServicioUpdatePage } from '../estacion-servicio-update/estacion-servicio-update.page';
import { EstacionServicioModelPage } from './estacion-servicio-model.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionServicioModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstacionServicioModelPage]
})
export class EstacionServicioModelPageModule {}
