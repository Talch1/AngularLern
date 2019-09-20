import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../beans/Credentials';
import { from } from 'rxjs';
import { logging } from 'protractor';
import { LogginService } from '../services/loggin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {


  public credentials = new Credentials;



  login(): void {
    if(this.LogginService.ifExist(this.credentials)){
      if (this.credentials.type === 'customer'){
        this.router.navigate(["/cust"]);
      }
      else if (this.credentials.type === 'company'){
        this.router.navigate(["/comp"]);
      }
      else if (this.credentials.type === 'admin'){
        this.router.navigate(["/admin"]);
      }
    }else{
      alert("Incorrect password or login")
    }

    
  }

  constructor(private LogginService : LogginService,private router :Router) { }

  ngOnInit() {
  }


}
