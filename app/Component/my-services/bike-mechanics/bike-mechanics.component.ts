import { Component, OnInit } from '@angular/core';
import { MechanicsService } from 'src/app/service/mechanics.service';
import { Mechanics } from 'src/app/Models/mechanics';

@Component({
  selector: 'app-bike-mechanics',
  templateUrl: './bike-mechanics.component.html',
  styleUrls: ['./bike-mechanics.component.css']
})
export class BikeMechanicsComponent implements OnInit {
userdetails:Mechanics[];
userdetails1:any;
  constructor(private servicemechanics:MechanicsService) { }

  ngOnInit() {
     this.getS();
     //this.getSin();
    // this.GetNew();  
  }
   getS(){
   this.servicemechanics.getProduct().subscribe(
      (data:[]) => {
        console.log(data);
        this.userdetails=data;   //Assign the data into userdetailes
      });
    }  

    display()
    {
      alert("calling to this number");
    }






    //   getSin(){
    //     this.servicemechanics.getSingle(2).subscribe(
    //      (data:any)=> {
    // //       console.log("heloo");
    //        console.log(data);
    //         this.userdetails1=data;
    //      }
    //    )
    //    window.location.href="/view";
    //   };

    // AddS()
    // {
    // // let s: any = {  SUPLNO: t1, SUPLNAME: t2, SUPLADDR:t3 };
    //   //alert(t1);
    //   window.location.href='/MyServices';
    //   this.servicemechanics.AddProduct(this.Registration.value).subscribe((result)=>{
    //     console.log(result);
    //     this.getS();
    //   },(err) =>{
    //       console.log(err);
    //   });
    // }
}
