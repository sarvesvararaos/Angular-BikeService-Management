import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  Registration=new FormGroup({            //Reactive Form Approch
    Email:new FormControl('', [Validators.required, Validators.email]),
    Passowrd:new FormControl('',[Validators.required,Validators.minLength(6)]),
  });
  constructor() { }
  onSubmit()

  {  
    this.submitted = true;
    if (this.Registration.invalid) {
      return;}
    alert("Login Success");
    window.location.href="/MyServices";
   
  }
  get f() { return this.Registration.controls; }
  ngOnInit() {
  }

}
