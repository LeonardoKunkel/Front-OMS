import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoQuincePlanPage } from './punto-quince-plan.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoQuincePlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoQuincePlanPage]
})
export class PuntoQuincePlanPageModule {}
