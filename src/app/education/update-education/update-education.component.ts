import { Component, OnInit } from '@angular/core';
import { Employee } from '../education-model/education';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {
  id: number;
  employee: Employee;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private educationService: EducationService) { }

    ngOnInit() {
      this.employee = new Employee();
  
      this.id = this.route.snapshot.params['id'];
      
      this.educationService.getEmployee(this.id)
        .subscribe(data => {
          console.log(data)
          this.employee = data;
        }, error => console.log(error));
    }
  
    updateEmployee() {
      this.educationService.updateEmployee(this.id, this.employee)
        .subscribe(data => console.log(data), error => console.log(error));
      this.employee = new Employee();
      this.gotoList();
    }
  
    onSubmit() {
      this.updateEmployee();    
    }
  
    gotoList() {
      this.router.navigate(['/education-list']);
    }

}
