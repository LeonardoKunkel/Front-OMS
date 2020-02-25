import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDosAsamCuatroPage } from './punto-dos-asam-cuatro.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDosAsamCuatroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDosAsamCuatroPage]
})
export class PuntoDosAsamCuatroPageModule {}
