import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoUnoPage } from './punto-uno.page';
import { PoliticaSpecificPage } from '../politica-specific/politica-specific.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoUnoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoUnoPage,PoliticaSpecificPage],
  entryComponents:[PoliticaSpecificPage]
})
export class PuntoUnoPageModule {}
