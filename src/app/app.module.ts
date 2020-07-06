// import { Geolocation } from '@ionic-native/geolocation';
import { ProcedimientoCincoPageModule } from './pages/procedimiento-cinco/procedimiento-cinco.module';
import { AyudaPageModule } from './pages/ayuda/ayuda.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http'
import { EditPoliticaPageModule } from './pages/edit-politica/edit-politica.module';
import { OnbjetivoModalPageModule } from './pages/onbjetivo-modal/onbjetivo-modal.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
//import { ChartsModule } from 'ng2-charts';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EstacionServicioModelPageModule } from '../app/pages/estacion-servicio-model/estacion-servicio-model.module';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';




@NgModule({
  declarations: [AppComponent],   
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AyudaPageModule,
    ProcedimientoCincoPageModule,
    FullCalendarModule,
    EditPoliticaPageModule,
    OnbjetivoModalPageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    EstacionServicioModelPageModule,
    AlifeFileToBase64Module
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FileOpener,
    DocumentViewer,
    FilePath,
    FileChooser,
    Base64
    // Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
