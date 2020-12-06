import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  temp: any;
  data: string;
  first_name: string;
  last_name: string;
  email: string;
  id: string;
  InfoForm:FormGroup;
  avatar: string;
  Infoform: any;
  id1: string;

  constructor(private router: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {
    let first_name = localStorage.getItem("firstname");
    let last_name =localStorage.getItem("last_name");
    let email= localStorage.getItem("email");
    let id= localStorage.getItem("id");
    let avatar= localStorage.getItem("avatar");


    console.log(first_name);
    this.first_name=first_name;
    this.last_name=last_name;
    this.email=email;
    this.id=id;
    this.avatar=avatar;


    this.InfoForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', Validators.required)
    });


    
    // this.temp = this.router.url.split("/").slice(-1).pop();
    // console.log(this.temp);
   
  }
  // input:{first_name:string,last_name:string,email:string}
Update(InfoForm){
  const httpHeaders = new HttpHeaders();
    httpHeaders.append("content-type", "application/json")
  console.log(InfoForm)
  console.log(this.id)
  this.id1=this.id;
  console.log(this.id1)
    return this.http.put<void> ('http://localhost:3000/data/'+this.id1,InfoForm).subscribe(data=>{
      console.log(data);
    })
}
Remove(InfoForm){
  console.log(InfoForm)
  console.log(this.id);
  this.id1=this.id;    
  return this.http.delete('http://localhost:3000/data/'+this.id1,InfoForm).subscribe(data=>{
    console.log(data)
  })
}
  

}
