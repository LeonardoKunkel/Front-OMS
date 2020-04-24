import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Elemento16InvestigacionAccidentesPage } from './elemento16-investigacion-accidentes.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento16InvestigacionAccidentesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Elemento16InvestigacionAccidentesPage]
})
export class Elemento16InvestigacionAccidentesPageModule {}
