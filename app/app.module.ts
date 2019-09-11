import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import{ReactiveFormsModule} from '@angular/forms';
import { BikeService } from './service/bike.service';
import { AppRoutingModule } from './Route/route.module';
import { LoginComponent } from './Component/login/login.component';
import { GPSNearPlacesComponent } from './Component/gpsnear-places/gpsnear-places.component';
import { MyServicesComponent } from './Component/my-services/my-services.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutComponent } from './Component/about/about.component';
import { RepariGudieComponent } from './Component/my-services/repari-gudie/repari-gudie.component';
import { NearGpsComponent } from './Component/my-services/near-gps/near-gps.component';
import { BikeMechanicsComponent } from './Component/my-services/bike-mechanics/bike-mechanics.component';
import { MechanicsService } from './service/mechanics.service';
import { AgmCoreModule } from '@agm/core';
import { ForgetComponent } from './Component/forget/forget.component';
import { ViewComponent } from './Component/view/view.component';
import { View1Component } from './Component/view1/view1.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GPSNearPlacesComponent,
    MyServicesComponent,
    ContactComponent,
    AboutComponent,
    RepariGudieComponent,
    NearGpsComponent,
    BikeMechanicsComponent,
    ForgetComponent,
    ViewComponent,
    View1Component
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule,AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBd0X_2Q62MaK9K3dUf2siIOiFLlKFmRVY'
    })
  ],
  providers: [BikeService,MechanicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
