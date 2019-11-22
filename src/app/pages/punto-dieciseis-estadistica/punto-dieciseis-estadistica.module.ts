import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisEstadisticaPage } from './punto-dieciseis-estadistica.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisEstadisticaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisEstadisticaPage]
})
export class PuntoDieciseisEstadisticaPageModule {}
