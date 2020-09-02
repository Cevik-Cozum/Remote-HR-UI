import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../education-model/education';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  employees: Array<Employee>

  constructor(private router: Router, private educationService: EducationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.educationService.getEmployeesList().subscribe(res => {
      this.employees = res;
    });
  }
  deleteEmployee(id: number) {
    this.educationService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['education-update', id]);
  }
  refreshPage(): void {
    window.location.reload();
  }
}

