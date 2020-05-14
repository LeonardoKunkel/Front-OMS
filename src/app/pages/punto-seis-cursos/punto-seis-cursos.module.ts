import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSeisCursosPage } from './punto-seis-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSeisCursosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSeisCursosPage]
})
export class PuntoSeisCursosPageModule {}
