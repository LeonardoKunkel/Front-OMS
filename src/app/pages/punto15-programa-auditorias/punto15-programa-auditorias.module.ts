import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Punto15ProgramaAuditoriasPage } from './punto15-programa-auditorias.page';

const routes: Routes = [
  {
    path: '',
    component: Punto15ProgramaAuditoriasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Punto15ProgramaAuditoriasPage]
})
export class Punto15ProgramaAuditoriasPageModule {}
