import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user:string;  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){    
    var arr=JSON.parse(localStorage.getItem('user')); 
    arr.forEach((element: { firstName: string; }) => {
      this.user=element.firstName
    });
  }

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    this.router.navigate([""]);
  }

}
