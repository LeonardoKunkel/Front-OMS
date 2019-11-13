import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Punto15AtencionHallazgosPage } from './punto15-atencion-hallazgos.page';

const routes: Routes = [
  {
    path: '',
    component: Punto15AtencionHallazgosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Punto15AtencionHallazgosPage]
})
export class Punto15AtencionHallazgosPageModule {}
