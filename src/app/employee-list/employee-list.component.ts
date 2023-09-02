import { Component } from '@angular/core';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees!: Employee[];

  constructor (private employeeservice: EmployeeService,
    private router:Router) {}

ngOnInit():void{
  this.getEmployee();
}

private getEmployee(){
  this.employeeservice.getEmployeelist().subscribe(data => { this.employees = data; });
}

updateEmployee(id:number){
  this.router.navigate(['update-employee',id]);
}

deleteEmployee(id: number){
 this.employeeservice.deleteEmployee(id).subscribe(data=>{
 this.getEmployee();
 console.log(data);
});
}

viewEmployee(id:number){
  this.router.navigate(['view-employee',id]);
}


}
