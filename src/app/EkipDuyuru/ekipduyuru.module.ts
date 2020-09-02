import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EkipDuyuruListComponent } from './ekipduyuru-list/ekipduyuru-list.component';
import { EkipDuyuruUpdateComponent } from './ekipduyuru-update/ekipduyuru-update.component';
import { EkipDuyuruCreateComponent } from './create-ekipduyuru/create-ekipduyuru.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [EkipDuyuruListComponent, EkipDuyuruUpdateComponent, CreateEkipDuyuruComponent],
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
export class EkipDuyuruModule { }
