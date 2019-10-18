import { PuntodosService } from './../../services/puntodos.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ModalController, AlertController } from '@ionic/angular';
import { single } from 'src/app/data/data';
import { text } from '@angular/core/src/render3';
import { type } from 'os';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  

  calendarWeekends = true;

  timeZone: "America/Mexico_City"

  calendarPlugins: any[] = [
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin
  ];

  calendarHeader = {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  };

  events: any = {};
  calendarEvents: EventInput[] = [
    {"start": "2019-10-19", "title": "Auditoria SASISOPA"},
    {"start": "2019-10-01", "title": "Capacitación de personal"},
    {"start": "2019-10-19", "title": "Pago de Impuestos"},
    {"start": "2019-10-19", "title": "Acreditación ante la CRE"}
  ];

  constructor(private modalCtrl: ModalController, private puntoDosServirce: PuntodosService, private alertCTRL: AlertController) {
    //this.getEventos();
   }

  ngOnInit() {}

  getEventos() {
    this.puntoDosServirce.getEvents().subscribe((data:any) => {
      console.log(data);
      this.events = data;
      console.log(this.events);
      this.calendarEvents.push(this.events);
      console.log(this.calendarEvents);
    });
  }

  handleDateClick(event) {
    console.log(event);
    //this.creatEvent();
    
  }

  handleEventClick(event) {
    console.log(event);
  }

  handleEventDragStop(event) {
    console.log(event);
  }

  handleEventResize(event) {
    console.log(event);
  }

  handleEventDrop(event) {
    console.log(event);
  }

  closeCalendar(){
    this.modalCtrl.dismiss();
  }

  modify(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice();
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]);
    singleEvent.title = newTitle;
    calendarEvents[eventIndex]  = singleEvent;
    this.calendarEvents = calendarEvents;
  }

  async creatEvent() {
    const alert = await this.alertCTRL.create({
      header: 'Nuevo Evento',
      message: 'Crearas un nuevo evento Escribe la fecha y el nombre !',
      inputs:[
        {
          name:'titulo',
          type: 'text',
          placeholder: 'Escribe el titulo de tu evento!'
        },
        {
          name: 'Fecha de Inicio',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelado');
          }
        },
        {
          text: 'OK',
          handler: (data) => {
            this.calendarEvents = this.calendarEvents.concat({
              title: 'New Event',
              start: data.date,
              allDay: data.allDay
            });
          }
        }
      ]
    });
    await alert.present();
  }
}