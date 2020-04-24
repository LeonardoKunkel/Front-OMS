import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTreceProcedimientoPage } from './punto-trece-procedimiento.page';
import { AnexoProcedimientoModelPage } from '../anexo-procedimiento-model/anexo-procedimiento-model.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTreceProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTreceProcedimientoPage,AnexoProcedimientoModelPage],
  entryComponents: [AnexoProcedimientoModelPage]
})
export class PuntoTreceProcedimientoPageModule {}
