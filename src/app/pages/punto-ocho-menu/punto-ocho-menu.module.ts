import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoMenuPage } from './punto-ocho-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoMenuPage]
})
export class PuntoOchoMenuPageModule {}
