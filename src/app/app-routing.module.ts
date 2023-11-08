import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
