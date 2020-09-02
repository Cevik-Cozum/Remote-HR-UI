import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateEducationComponent } from './create-education/create-education.component';
import { EducationListComponent } from './education-list/education-list.component';
import { UpdateEducationComponent } from './update-education/update-education.component';

import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [CreateEducationComponent, EducationListComponent, UpdateEducationComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    CardModule,
    FormsModule,
    TableModule

  ],
  exports: [CreateEducationComponent, EducationListComponent, UpdateEducationComponent]
})
export class EducationModule { }
