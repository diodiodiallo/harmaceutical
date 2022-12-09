import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  isValid: boolean = false;
  errorMessage= "your password or your username is incorrect";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username == "diodio" && this.password == "140198"){
      this.isValid = false;
      this.route.navigate(['/home']);
    }else{
      this.isValid = true;
    }
  }


}
