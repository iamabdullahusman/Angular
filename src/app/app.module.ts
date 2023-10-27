import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserStudentComponent } from './user-student/user-student.component';
import { CountryListComponent } from './country-list/country-list.component';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserStudentComponent,
    CountryListComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


