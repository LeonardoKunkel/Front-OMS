import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOncePlanPage } from './punto-once-plan.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOncePlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOncePlanPage]
})
export class PuntoOncePlanPageModule {}
