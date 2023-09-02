import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employee!:Employee
id!:number
  constructor(private router:ActivatedRoute,
    private service:EmployeeService){}

  ngOnInit():void{
   this.id= this.router.snapshot.params['id'];
   
   this.employee=new Employee();
   this.service.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
   })

  }

}
