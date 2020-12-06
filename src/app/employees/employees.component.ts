import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../shared/localstorage.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  data: any;
  item: any;
  length: any;
  id: any;
  info: any;
  First_name: string;
  last_name: any;
  email: any;
  avatar: any;
  total: number;
  PAGE_SIZE: number;
  totalPages: number;
  // first_name: any;

  constructor(private router: Router,
    private http: HttpClient,
    private localstorageservice: LocalStorageService,) { }

  ngOnInit(): void {
    this.PAGE_SIZE = 8;
    this.http.get<any>(`http://localhost:3000/data?_limit=${this.PAGE_SIZE}`, { observe: 'response' }).subscribe((data) => {
      this.item = data.body;
      //console.log(this.item);
      this.total = +data.headers.get('X-Total-Count');
      this.totalPages = Math.ceil(this.total / this.PAGE_SIZE);
      // this.length=data.length;
      // console.log(this.length)
      // this.id=data.id;
    })
  }
  counter(i: number) {
    return new Array(i);
}
  onPageClick(page){
    console.log(page)
    this.http.get<any>(`http://localhost:3000/data?_limit=${this.PAGE_SIZE}&_page=${page+1}`, { observe: 'response' }).subscribe((data) => {
      this.item = data.body;
    })
  }
  onSelectEmployee() {
    this.router.navigateByUrl("/employees")

  }
  onSelectAddEmployee() {
    this.router.navigateByUrl("/addemployee")

  }
  onInfo(info: { id, first_name, last_name, email, avatar }) {
    console.log(info);
    this.First_name = info.first_name;
    this.last_name = info.last_name;
    this.email = info.email;
    this.avatar = info.avatar;
    this.id = info.id;

    console.log(this.First_name);
    localStorage.setItem('firstname', this.First_name);
    localStorage.setItem('last_name', this.last_name);
    localStorage.setItem('avatar', this.avatar);
    localStorage.setItem('email', this.email);
    localStorage.setItem('id', this.id);


    this.router.navigateByUrl("/employee-info");
    // localStorage.setItem("info", this.info);

  }


}
