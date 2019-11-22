import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTrecePlaneacionPage } from './punto-trece-planeacion.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTrecePlaneacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTrecePlaneacionPage]
})
export class PuntoTrecePlaneacionPageModule {}
