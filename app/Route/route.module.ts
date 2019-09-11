import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../Component/login/login.component';
import { MyServicesComponent } from '../Component/my-services/my-services.component';
import { ContactComponent } from '../Component/contact/contact.component';
import { AboutComponent } from '../Component/about/about.component';
import { RepariGudieComponent } from '../Component/my-services/repari-gudie/repari-gudie.component';
import { NearGpsComponent } from '../Component/my-services/near-gps/near-gps.component';
import { BikeMechanicsComponent } from '../Component/my-services/bike-mechanics/bike-mechanics.component';
import { GPSNearPlacesComponent } from '../Component/gpsnear-places/gpsnear-places.component';
import { ForgetComponent } from '../Component/forget/forget.component';
import { ViewComponent } from '../Component/view/view.component';
import { View1Component } from '../Component/view1/view1.component';


const appRoutes: Routes = [
    { path: 'Register', component: RegisterComponent },
    {path:'Login',component:LoginComponent},
    {path:'MyServices',component:MyServicesComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'RepairGuide',component:RepariGudieComponent},
    {path:'GPS',component:GPSNearPlacesComponent} ,
    {path:'BikeMechanic',component:BikeMechanicsComponent},
    {path:"forget", component:ForgetComponent},
    {path:"view",component:ViewComponent},
    {path:"view1",component:View1Component},
    {path:'',redirectTo:'/Login',pathMatch:'full'}
    
  
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }