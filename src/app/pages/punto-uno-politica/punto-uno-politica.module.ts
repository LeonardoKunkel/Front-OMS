import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoUnoPoliticaPage } from './punto-uno-politica.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoUnoPoliticaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoUnoPoliticaPage]
})
export class PuntoUnoPoliticaPageModule {}
