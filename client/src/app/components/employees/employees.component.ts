import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee = new Employee();

  employees: Employee[]= [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
      .subscribe(res=>{
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Update Successfuly'});
        this.getEmployees();
      });
    }else{
      this.employeeService.postEmployee(form.value)
    .subscribe(res=>{
      console.log(res);
      this.resetForm(form);
      M.toast({html: 'Save Successfuly'});
      this.getEmployees();
    });
    }

    
  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(res=>{
      this.employees = res as Employee[];
      console.log(res);
    });
  }

  editEmployee(employee: Employee){
    this.selectedEmployee = employee;
  }

  deleteEmployee(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.employeeService.deletedEmployee(_id)
    .subscribe(res=>{
      console.log(res);
      M.toast({html: 'Delete Successfuly'});
      this.getEmployees();
    });
    }
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();
      this.selectedEmployee = new Employee();
      this.getEmployees();
    }
  }

}
