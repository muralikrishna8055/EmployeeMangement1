import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseURL="http://localhost:8082/api/v1/Employee";

  constructor(private httpClient: HttpClient) { }

getEmployeelist(): Observable<Employee[]> {
  return this.httpClient.get<Employee[]>(`${this.baseURL}`);
}

createEmployee(employee:Employee):Observable<Object> {
  return this.httpClient.post (`${this.baseURL}`,employee);

}

}
