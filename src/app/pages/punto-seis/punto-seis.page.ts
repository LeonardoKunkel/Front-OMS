import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-punto-seis',
  templateUrl: './punto-seis.page.html',
  styleUrls: ['./punto-seis.page.scss'],
})
export class PuntoSeisPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor() { }

  ngOnInit() {
  }

  enviarPerfil(refForm) {
    console.log(refForm);
    
  }

  goBack() {}

  goNext() {}

  enviarCapacitacion(formula) {}

  enviarDatos(formulario) {}

  enviar(form) {}

  enviarForm(formulario){
    const nombre=formulario.form.value.nombre
    const caracteristicas=formulario.form.value.caracteristicas
    const requerimientos=formulario.form.value.requerimientos
    const conocimientos=formulario.form.value.conocimientos
    const tipos=formulario.form.value.tipos
    const nivel=formulario.form.value.nivel
       console.log(nombre,caracteristicas,requerimientos,conocimientos,tipos,nivel);
       
  }

  enviarForm2(formulario2){
    const objetivo=formulario2.form.value.objetivo
    const funciones=formulario2.form.value.funciones
    const personal=formulario2.form.value.personal
    const herramientas=formulario2.form.value.herramientas
    const proteccion=formulario2.form.value.proteccion
    
    console.log(objetivo,funciones,personal,herramientas,proteccion);
    

  }

}
