import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Punto15InformeAuditoriasPage } from './punto15-informe-auditorias.page';

const routes: Routes = [
  {
    path: '',
    component: Punto15InformeAuditoriasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Punto15InformeAuditoriasPage]
})
export class Punto15InformeAuditoriasPageModule {}
