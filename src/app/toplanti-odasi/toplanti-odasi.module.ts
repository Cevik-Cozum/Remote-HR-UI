import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToplantiOdasiListComponent } from './toplanti-odasi-list/toplanti-odasi-list.component';
import { ToplantiOdasiUpdateComponent } from './toplanti-odasi-update/toplanti-odasi-update.component';
import { ToplantiOdasiCreateComponent } from './toplanti-odasi-create/toplanti-odasi-create.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [ToplantiOdasiListComponent, ToplantiOdasiUpdateComponent, ToplantiOdasiCreateComponent],
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
export class ToplantiOdasiModule { }
