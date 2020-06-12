import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstacionServicioUpdatePage } from './estacion-servicio-update.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionServicioUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstacionServicioUpdatePage]
})
export class EstacionServicioUpdatePageModule {}
