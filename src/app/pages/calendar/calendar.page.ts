import { Component, OnInit, ViewChild } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ModalController } from '@ionic/angular';


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
  }

  calendarEvents: EventInput[] = [
    {"start": "2019-07-19", "title": "Auditoria SASISOPA"},
    {"start": "2019-07-01", "title": "Capacitación de personal"},
    {"start": "2019-07-19", "title": "Pago de Impuestos"},
    {"start": "2019-07-19", "title": "Acreditación ante la CRE"}
  ];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}


  handleDateClick(event){
    console.log(event);
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

}
