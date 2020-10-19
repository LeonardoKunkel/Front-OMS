import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoUnoEvidenciaPage } from './punto-uno-evidencia.page';
import {PhotoListComponent} from '../../components/photo-list/photo-list.component';
import { EvidenciaMostrarModelPage } from '../evidencia-mostrar-model/evidencia-mostrar-model.page'
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
  declarations: [PuntoUnoEvidenciaPage,PhotoListComponent,EvidenciaMostrarModelPage],
  entryComponents:[EvidenciaMostrarModelPage]
})
export class PuntoUnoEvidenciaPageModule {}
