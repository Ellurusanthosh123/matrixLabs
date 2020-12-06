import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { LocalStorageService } from '../shared/localstorage.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
addEmployeeForm: FormGroup;
addEmployeeDetails:any;
employee: Employee;

  constructor(private _router: Router,
    private _fb: FormBuilder,
    private http: HttpClient,
    private addEmpSer:EmployeeService,
    private localstorageservice: LocalStorageService,
    private _route: ActivatedRoute
    ) { }

    ngOnInit() {

  }
  onCreatePost(postData: { email:string; name:string; }) {
    // Send Http request
    this.http
      .post(
        'http://localhost:3000/data',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  
  onSelectEmployee(){
    this._router.navigateByUrl("/employees")
    
  }
  onSelectAddEmployee(){
    this._router.navigateByUrl("/addemployee")

  }

}
 