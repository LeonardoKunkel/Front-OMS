import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Elemento16EstadisticaPage } from './elemento16-estadistica.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento16EstadisticaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Elemento16EstadisticaPage]
})
export class Elemento16EstadisticaPageModule {}
