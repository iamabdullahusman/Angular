import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= ' For loop ';
  users = ['abdullah','ahsan','bilal','anus','mudabir'];
  userDetails = [
    {name :'abdullah', email:'abdullah@.com', phone:'1111'},
    {name :'ahsan', email:'ahsan@.com', phone:'2222'},
    {name :'bilal', email:'bilal@.com', phone:'3333'},
    {name :'anus', email:'anus@.com', phone:'4444'},
    {name :'mudabir', email:'mudabir@.com', phone:'5555'}

  ];
 
}
