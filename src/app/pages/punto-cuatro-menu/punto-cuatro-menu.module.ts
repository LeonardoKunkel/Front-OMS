import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCuatroMenuPage } from './punto-cuatro-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCuatroMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCuatroMenuPage]
})
export class PuntoCuatroMenuPageModule {}
