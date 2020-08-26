import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PuntoSeisPage } from './punto-seis.page';
import { DirectorModalPage } from '../director-modal/director-modal.page';
import { RepresentanteModalPage} from '../representante-modal/representante-modal.page';
import { EncargadoModalPage } from '../encargado-modal/encargado-modal.page';
import { JefePisoModalPage } from '../jefe-piso-modal/jefe-piso-modal.page';
import { DespachadoresModalPage } from '../despachadores-modal/despachadores-modal.page';
import { MantenimientoModalPage } from '../mantenimiento-modal/mantenimiento-modal.page';
import { ContratistasModalPage} from '../contratistas-modal/contratistas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSeisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PuntoSeisPage,
    DirectorModalPage,
    RepresentanteModalPage,
    EncargadoModalPage,
    JefePisoModalPage,
    DespachadoresModalPage,
    MantenimientoModalPage,
    ContratistasModalPage
  ],
  entryComponents: [
    DirectorModalPage,
    RepresentanteModalPage,
    EncargadoModalPage,
    JefePisoModalPage,
    DespachadoresModalPage,
    MantenimientoModalPage,
    ContratistasModalPage
  ]
})
export class PuntoSeisPageModule {}
