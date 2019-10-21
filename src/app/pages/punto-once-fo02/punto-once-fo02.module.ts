import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOnceFO02Page } from './punto-once-fo02.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOnceFO02Page
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOnceFO02Page]
})
export class PuntoOnceFO02PageModule {}
