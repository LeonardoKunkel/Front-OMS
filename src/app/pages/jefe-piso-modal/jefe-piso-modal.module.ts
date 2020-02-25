import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JefePisoModalPage } from './jefe-piso-modal.page';

const routes: Routes = [
  {
    path: '',
    component: JefePisoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JefePisoModalPage]
})
export class JefePisoModalPageModule {}
