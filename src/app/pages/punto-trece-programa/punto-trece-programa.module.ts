import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTreceProgramaPage } from './punto-trece-programa.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTreceProgramaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTreceProgramaPage]
})
export class PuntoTreceProgramaPageModule {}
