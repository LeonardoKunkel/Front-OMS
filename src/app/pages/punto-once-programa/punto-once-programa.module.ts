import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOnceProgramaPage } from './punto-once-programa.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOnceProgramaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOnceProgramaPage]
})
export class PuntoOnceProgramaPageModule {}
