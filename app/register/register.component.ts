import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BikeService } from '../service/bike.service';
import { Users } from '../users';
import {passvalidator} from './passmatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    userdetailes:Users[];//Model Class
    submitted = false;

    Registration=new FormGroup({            //Reactive Form Approch
      // Id:new FormControl('', [Validators.required]),
      Username:new FormControl('',[Validators.required]),
      FirstName:new FormControl('',[Validators.required]),
      LastName:new FormControl('',[Validators.required]),
      Email:new FormControl('', [Validators.required, Validators.email]),
      Passowrd:new FormControl('',[Validators.required, passvalidator,Validators.minLength(6)]),
      ConfirmPassword:new FormControl('',[Validators.required, Validators.minLength(6)]),
      Phone:new FormControl('',[Validators.required])
    });
    constructor(private bikeservice:BikeService) { }

    ngOnInit() {
      this.getS();
      
      this.userdetailes=this.bikeservice.user;
    }
    getS(){
      this.bikeservice.getProduct().subscribe(
        (data:[]) => {
          console.log(data);
          this.userdetailes=data;   //Assign the data into userdetailes
        });
      }  

      get f() { return this.Registration.controls; }
      AddS()
      {
      // let s: any = {  SUPLNO: t1, SUPLNAME: t2, SUPLADDR:t3 };
        //alert(t1);
        this.submitted = true;
        if (this.Registration.invalid) {
          return;
      }
      alert("Registration success");
        window.location.href='/Login';
        this.bikeservice.AddProduct(this.Registration.value).subscribe((result)=>{
          console.log(result);
          this.getS();
        },(err) =>{
            console.log(err);
        });
      }
  }


