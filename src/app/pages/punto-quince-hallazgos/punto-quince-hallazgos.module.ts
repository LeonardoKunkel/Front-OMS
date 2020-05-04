import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoQuinceHallazgosPage } from './punto-quince-hallazgos.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoQuinceHallazgosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoQuinceHallazgosPage]
})
export class PuntoQuinceHallazgosPageModule {}
