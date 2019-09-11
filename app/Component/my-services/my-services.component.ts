import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  userdetailes:Users[];//Model Class
  
  Registration=new FormGroup({            //Reactive Form Approch
    Id:new FormControl(),
    Username:new FormControl('',Validators.required),
    FirstName:new FormControl(),
    LastName:new FormControl(),
    Email:new FormControl(),
    Passowrd:new FormControl(),
    ConfirmPassword:new FormControl(),
    Phone:new FormControl()
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

    AddS()
    {
     // let s: any = {  SUPLNO: t1, SUPLNAME: t2, SUPLADDR:t3 };
      //alert(t1);
      this.bikeservice.AddProduct(this.Registration.value).subscribe((result)=>{
        console.log(result);
        this.getS();
      },(err) =>{
          console.log(err);
      });
    }





 }