import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTrecePlanesPage } from './punto-trece-planes.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTrecePlanesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTrecePlanesPage]
})
export class PuntoTrecePlanesPageModule {}
