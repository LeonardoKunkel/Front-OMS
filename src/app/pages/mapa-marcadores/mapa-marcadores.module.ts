import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapaMarcadoresPage } from './mapa-marcadores.page';
import { GasolineraPage } from '../gasolinera/gasolinera.page';

const routes: Routes = [
  {
    path: '',
    component: MapaMarcadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapaMarcadoresPage,GasolineraPage],
  entryComponents:[GasolineraPage]
})
export class MapaMarcadoresPageModule {}
