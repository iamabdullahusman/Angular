import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {path:'company', component:AboutCompanyComponent},
      {path:'me', component:AboutMeComponent},
    ]
  },
  {
    
    component:HomeComponent,
    path:''
  },
  {
   
    component:UserComponent,
    path:'user/:id'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
