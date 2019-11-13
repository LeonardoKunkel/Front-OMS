import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Punto15PlanAuditoriasPage } from './punto15-plan-auditorias.page';

const routes: Routes = [
  {
    path: '',
    component: Punto15PlanAuditoriasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Punto15PlanAuditoriasPage]
})
export class Punto15PlanAuditoriasPageModule {}
