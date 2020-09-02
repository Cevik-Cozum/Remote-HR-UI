import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BirthdayListComponent } from './birthday-list/birthday-list.component';
import { BirthdayCalendarComponent } from './birthday-calendar/birthday-calendar.component';
import { HttpRequestInterceptor } from './../interceptors/http-request-interceptor';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { NgxSpinnerModule } from "ngx-spinner";
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [BirthdayListComponent, BirthdayCalendarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    FormsModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule,
    FullCalendarModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
  }],
  exports: [BirthdayListComponent]
})
export class DogumGunuModule { }
