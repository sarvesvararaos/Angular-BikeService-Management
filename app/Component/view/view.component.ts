import { Component, OnInit } from '@angular/core';
import { MechanicsService } from 'src/app/service/mechanics.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userdetails1:any;
  constructor(private servicemechanics:MechanicsService) { }
  ngOnInit() {this.getSin();
  }
  getSin(){
    this.servicemechanics.getSingle(2).subscribe(
     (data:any)=> {
//       console.log("heloo");
       console.log(data);
        this.userdetails1=data;
     }
   )
  // window.location.href="/view";
  };
}
