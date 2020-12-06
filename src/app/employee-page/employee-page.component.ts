import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelectEmployee(){
    this.router.navigateByUrl("/employees")
    
  }
  onSelectAddEmployee(){
    this.router.navigateByUrl("/addemployee")

  }
}
