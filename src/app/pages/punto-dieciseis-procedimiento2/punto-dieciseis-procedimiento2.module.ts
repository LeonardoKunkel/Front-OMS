import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisProcedimiento2Page } from './punto-dieciseis-procedimiento2.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisProcedimiento2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisProcedimiento2Page]
})
export class PuntoDieciseisProcedimiento2PageModule {}
