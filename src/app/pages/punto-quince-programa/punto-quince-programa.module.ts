import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoQuinceProgramaPage } from './punto-quince-programa.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoQuinceProgramaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoQuinceProgramaPage]
})
export class PuntoQuinceProgramaPageModule {}
