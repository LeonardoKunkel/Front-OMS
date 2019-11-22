import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisFormatoPage } from './punto-dieciseis-formato.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisFormatoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisFormatoPage]
})
export class PuntoDieciseisFormatoPageModule {}
