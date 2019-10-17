import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P12SeguridadContratistaPage } from './p12-seguridad-contratista.page';

const routes: Routes = [
  {
    path: '',
    component: P12SeguridadContratistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P12SeguridadContratistaPage]
})
export class P12SeguridadContratistaPageModule {}
