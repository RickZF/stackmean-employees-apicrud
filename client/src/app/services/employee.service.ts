import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  

  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee)
  }

  putEmployee(employee: Employee){
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deletedEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
