import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EvidenciaMostrarModelPage } from './evidencia-mostrar-model.page';
import { PhotoListComponent } from '../../components/photo-list/photo-list.component';
const routes: Routes = [
  {
    path: '',
    component: EvidenciaMostrarModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EvidenciaMostrarModelPage,PhotoListComponent]
})
export class EvidenciaMostrarModelPageModule {}
