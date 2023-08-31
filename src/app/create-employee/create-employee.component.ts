import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

constructor (private employeeService:EmployeeService,
  private router :Router){}

employee:Employee =new Employee();


saveEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(data =>{
    console.log(data);
    this.goToEmployee();
   });
}

goToEmployee(){
  this.router.navigate(['/employees']);
}


  onSubmit(){

    console.log(this.employee);
    this.saveEmployee();

  }

}
