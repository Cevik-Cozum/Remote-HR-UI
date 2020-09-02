import { Component, OnInit } from '@angular/core';
import { Employee } from './../education-model/education'
import { Router } from '@angular/router';
import { EducationService } from './../../services/education.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private router: Router, private educationService: EducationService) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.educationService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
