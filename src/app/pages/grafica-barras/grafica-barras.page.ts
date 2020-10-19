import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as Chart from 'chart.js' 
import { SelecionPoliticaGraficaService } from 'src/app/services/Elemento1/selecion-politica-grafica.service';

@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.page.html',
  styleUrls: ['./grafica-barras.page.scss'],
})
export class GraficaBarrasPage implements OnInit {
  @ViewChild('barCanvas') barCanvas;
 private barCanvasChart: Chart;
 ctx = document
 elementoUno = null;
  constructor(
    private ref : ChangeDetectorRef,
    private elementoUnoGrafica: SelecionPoliticaGraficaService
  ) { 
    this.getElementoUNoGrafica();
    this.elementoDos();
  }
  ngOnInit() {
    this.ref.detectChanges();

    setTimeout(() => {
      //console.log('This runs after 1000 milliseconds.');
      this.generateCart();
    }, 3000);
    
  }

  getElementoUNoGrafica(){
    this.elementoUnoGrafica.getPoliticaGrafica().subscribe((data:any)=>{
      //console.log(data.findPoliticaGrafica[data.findPoliticaGrafica.length -1].selecionPolitica);
      this.elementoUno = data.findPoliticaGrafica[data.findPoliticaGrafica.length -1].selecionPolitica;
    })
  } 

  elementoDos(){
    this.elementoUnoGrafica.getElemento2().subscribe((data:any)=>{
      console.log(data);
    })
  }

  postElemento2(){
    
    let newAspectosGraph = {
      aspectosGrafica:60
    }
    this.elementoUnoGrafica.createElemento2(newAspectosGraph).subscribe((data:any)=>{
      console.log(data);
    })
  }


  generateCart(){
    var ctx = 'myChart';
    var dd = this.elementoUno;
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
              'Elementos SASISOPA', 
              'I. Política', 
              'II. Identificación de peligros y riesgos ambientales', 
              'III. Requisitos legales', 
              'IV. Objetivos, metas e indicadores', 
              'V. FUNCIONES RESPONSABILIDADES Y AUTORIDAD', 
              'VI. Competencia del personal, capacitación y entretenimiento', 
              'VII. Comunicación, Participación y Consulta', 
              'VIII. Control de Documentos y Registros', 
              'IX. Mejores Prácticas y Estándares', 
              'X. CONTROL DE ACTIVIDADES Y PROCESOS', 
              'XI. INTEGRIDAD MECÁNICA', 
              'XII. SEGURIDAD DE CONTRATISTAS', 
              'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIA', 
              'XIV. MONITOREO, VERIFICACIÓN Y EVALUACIÓN', 
              'XV. Auditorías', 
              'XVI. INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES', 
              'XVII. Revisión de la dirección', 
              'XVIII. Informes de desempeño', 
            ],
            datasets: [{
                label: '% de progreso de implementacion del SASISOPA',
                data: [100, this.elementoUno, 20, 3, 5, 2, 100, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, ],
                backgroundColor: [
                   'rgba(239, 239, 239, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(83, 244, 166, 0.2)',
                    'rgba(201, 244, 9, 0.2)',
                    'rgba(244, 159, 48, 0.2)',
                    'rgba(244, 48, 48, 0.2)',
                    'rgba(244, 48, 208, 0.2)',
                    'rgba(244, 48, 94, 0.2)',
                    'rgba(231, 48, 244, 0.2)',
                    'rgba(26, 114, 244, 0.2)',
                    'rgba(26, 244, 226, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(244, 48, 48, 0.2)',
                ],
                borderColor: [
                  'rgba(239, 239, 239, 0.2)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                //borderSkipped:'bottom',
                hoverBorderColor:'rgba(0, 0, 255)',
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

}
