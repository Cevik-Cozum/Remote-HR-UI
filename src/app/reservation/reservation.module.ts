import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import{TableModule} from 'primeng/table'


@NgModule({
  declarations: [
    ReservationListComponent, 
    ReservationAddComponent, 
    ReservationUpdateComponent
],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule,
    TableModule
  ]
})
export class ReservationModule { }
