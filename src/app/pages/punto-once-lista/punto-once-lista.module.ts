import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOnceListaPage } from './punto-once-lista.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOnceListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOnceListaPage]
})
export class PuntoOnceListaPageModule {}
