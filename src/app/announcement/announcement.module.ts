import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementUpdateComponent } from './announcement-update/announcement-update.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    AnnouncementAddComponent, 
    AnnouncementUpdateComponent, 
    AnnouncementListComponent
],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule
  ]
})
export class AnnouncementModule { }
