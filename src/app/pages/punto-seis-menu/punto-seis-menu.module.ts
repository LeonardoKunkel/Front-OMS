import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSeisMenuPage } from './punto-seis-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSeisMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSeisMenuPage]
})
export class PuntoSeisMenuPageModule {}
