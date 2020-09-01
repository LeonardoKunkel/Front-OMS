import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoUnoEvidenciaPage } from './punto-uno-evidencia.page';
import {PhotoListComponent} from '../../components/photo-list/photo-list.component';

const routes: Routes = [
  {
    path: '',
    component: PuntoUnoEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoUnoEvidenciaPage,PhotoListComponent],
})
export class PuntoUnoEvidenciaPageModule {}
