import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import  {UserAuthModule}   from './user-auth/user-auth.module'



@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


