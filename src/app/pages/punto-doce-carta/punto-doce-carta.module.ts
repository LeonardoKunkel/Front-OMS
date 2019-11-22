import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDoceCartaPage } from './punto-doce-carta.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDoceCartaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDoceCartaPage]
})
export class PuntoDoceCartaPageModule {}
