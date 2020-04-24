import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AnexoModelPage } from '../anexo-model/anexo-model.page';
import { IonicModule } from '@ionic/angular';

import { PuntoDoceAnexoPage } from './punto-doce-anexo.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDoceAnexoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDoceAnexoPage,AnexoModelPage],
  entryComponents: [AnexoModelPage]
})
export class PuntoDoceAnexoPageModule {}
